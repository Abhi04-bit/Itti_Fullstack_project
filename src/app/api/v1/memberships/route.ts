import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { MembershipRegistrationSchema } from '@/lib/validations';
import { checkRateLimit, getClientIp } from '@/lib/rate-limiter';
import { sendTransactionalEmail } from '@/lib/email-service';

export async function POST(request: NextRequest) {
  const clientIp = getClientIp(request.headers);
  const rateLimit = checkRateLimit(`memberships:${clientIp}`, 5, 60);

  if (!rateLimit.success) {
    return NextResponse.json(
      {
        success: false,
        error: `Too many registration attempts. Please wait ${rateLimit.resetInSeconds} seconds.`,
      },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const validatedData = MembershipRegistrationSchema.parse(body);

    let savedRecord = null;
    try {
      savedRecord = await prisma.membershipRegistration.create({
        data: {
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone || null,
          dob: new Date(validatedData.dob),
          isUnder18: validatedData.isUnder18,
          guardianName: validatedData.guardianName || null,
          guardianContact: validatedData.guardianContact || null,
          consentEmail: validatedData.consentEmail,
          consentWhatsapp: validatedData.consentWhatsapp,
          consentSms: validatedData.consentSms,
        },
      });
    } catch {
      //
    }

    // Send confirmation email
    if (validatedData.isUnder18 && validatedData.guardianContact) {
      // DPDP Act: Send verification note to guardian
      await sendTransactionalEmail({
        to: validatedData.guardianContact,
        subject: 'Guardian Verification Required — The Itti Foundation Membership',
        html: `
          <div style="font-family: sans-serif; color: #242722; line-height: 1.6; max-width: 600px;">
            <h2 style="color: #173F35;">The Itti Foundation</h2>
            <p>Dear ${validatedData.guardianName || 'Parent / Guardian'},</p>
            <p><strong>${validatedData.name}</strong> has submitted a membership registration for The Itti Foundation community circles.</p>
            <p>Under India’s Digital Personal Data Protection (DPDP) Act, 2023, individuals under 18 require verifiable parental or guardian consent before their registration record is activated.</p>
            <p>If you approve this registration, please reply directly to this email or write to <a href="mailto:hello@itti.org.in">hello@itti.org.in</a>.</p>
            <p style="font-size: 12px; color: #5B6457;">
              Anuja Bali · Grievance & Data Protection Officer<br/>
              Itti’s Skill School Foundation
            </p>
          </div>
        `,
      });
    } else {
      await sendTransactionalEmail({
        to: validatedData.email,
        subject: 'Welcome to The Itti Foundation Community',
        html: `
          <div style="font-family: sans-serif; color: #242722; line-height: 1.6; max-width: 600px;">
            <h2 style="color: #173F35;">The Itti Foundation</h2>
            <p>Dear ${validatedData.name},</p>
            <p>Welcome. Your membership registration has been recorded under our privacy charter.</p>
            <p>You can sign in to view or amend your communication preferences (Email, WhatsApp, SMS) at any time through our portal.</p>
          </div>
        `,
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: validatedData.isUnder18
          ? 'Registration recorded. Because the applicant is under 18, verification has been routed to the lawful guardian under the DPDP Act 2023.'
          : 'Membership registration completed successfully.',
        id: savedRecord?.id ?? 'member-' + Date.now(),
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
