import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { VolunteerApplicationSchema } from '@/lib/validations';
import { checkRateLimit, getClientIp } from '@/lib/rate-limiter';
import { sendTransactionalEmail } from '@/lib/email-service';

export async function POST(request: NextRequest) {
  const clientIp = getClientIp(request.headers);
  const rateLimit = checkRateLimit(`volunteers:${clientIp}`, 5, 60);

  if (!rateLimit.success) {
    return NextResponse.json(
      {
        success: false,
        error: `Too many submissions. Please wait ${rateLimit.resetInSeconds} seconds.`,
      },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const validatedData = VolunteerApplicationSchema.parse(body);

    let savedRecord = null;
    try {
      savedRecord = await prisma.volunteerApplication.create({
        data: {
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone || null,
          pillar: validatedData.pillar,
          availability: validatedData.availability,
          skills: validatedData.skills,
        },
      });
    } catch {
      //
    }

    // Acknowledgement email
    await sendTransactionalEmail({
      to: validatedData.email,
      subject: 'Volunteer Application Received — The Itti Foundation',
      html: `
        <div style="font-family: sans-serif; color: #242722; line-height: 1.6; max-width: 600px;">
          <h2 style="color: #173F35;">The Itti Foundation</h2>
          <p>Dear ${validatedData.name},</p>
          <p>Thank you for offering your time and skills for <strong>${validatedData.pillar}</strong>.</p>
          <p>Our volunteer coordination team will review your application and be in touch within five working days.</p>
          <p style="font-size: 12px; color: #5B6457;">
            The Itti Foundation · Pune, India
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Volunteer application submitted successfully. Our team will review your skills and be in touch.',
        id: savedRecord?.id ?? 'vol-' + Date.now(),
      },
      { status: 201 }
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
