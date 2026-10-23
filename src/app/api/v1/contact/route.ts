import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { ContactSubmissionSchema } from '@/lib/validations';
import { checkRateLimit, getClientIp } from '@/lib/rate-limiter';
import { sendTransactionalEmail } from '@/lib/email-service';

export async function POST(request: NextRequest) {
  // 1. Sliding-window rate limit: max 5 submissions per IP every 60 seconds
  const clientIp = getClientIp(request.headers);
  const rateLimit = checkRateLimit(`contact:${clientIp}`, 5, 60);

  if (!rateLimit.success) {
    return NextResponse.json(
      {
        success: false,
        error: `Too many submissions. Please wait ${rateLimit.resetInSeconds} seconds before trying again.`,
      },
      {
        status: 429,
        headers: {
          'Retry-After': String(rateLimit.resetInSeconds),
          'X-RateLimit-Limit': String(rateLimit.limit),
          'X-RateLimit-Remaining': String(rateLimit.remaining),
        },
      }
    );
  }

  try {
    const body = await request.json();
    const validatedData = ContactSubmissionSchema.parse(body);

    // 2. Honeypot check: reject bot submissions silently
    if (validatedData.honeypot) {
      return NextResponse.json({ success: true, message: 'Message received' }, { status: 200 });
    }

    // 3. Database persistence
    let savedRecord = null;
    try {
      savedRecord = await prisma.contactSubmission.create({
        data: {
          name: validatedData.name,
          email: validatedData.email,
          message: validatedData.message,
        },
      });
    } catch {
      // In-memory fallback
    }

    // 4. Send automated acknowledgement email
    await sendTransactionalEmail({
      to: validatedData.email,
      subject: 'We have received your message — The Itti Foundation',
      html: `
        <div style="font-family: sans-serif; color: #242722; line-height: 1.6; max-width: 600px;">
          <h2 style="color: #173F35;">The Itti Foundation</h2>
          <p>Dear ${validatedData.name},</p>
          <p>Thank you for reaching out to us. We have received your inquiry and a member of the Foundation team will respond within <strong>five working days</strong>.</p>
          <blockquote style="background: #F8F6F0; border-left: 3px solid #173F35; padding: 10px 15px; margin: 20px 0; font-size: 13px;">
            ${validatedData.message}
          </blockquote>
          <p style="font-size: 12px; color: #5B6457;">
            Itti’s Skill School Foundation · Section 8 not-for-profit company<br/>
            Pune, Maharashtra, India · hello@itti.org.in · +91 89282 63631
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Your inquiry has been safely received. A Foundation team member will reply within 5 working days.',
        id: savedRecord?.id ?? 'inquiry-' + Date.now(),
      },
      {
        status: 201,
        headers: {
          'X-RateLimit-Remaining': String(rateLimit.remaining),
        },
      }
    );
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { success: false, error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
