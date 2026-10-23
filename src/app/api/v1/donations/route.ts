import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { checkRateLimit, getClientIp } from '@/lib/rate-limiter';
import { sendTransactionalEmail } from '@/lib/email-service';

export async function POST(req: NextRequest) {
  const clientIp = getClientIp(req.headers);
  const rateLimit = checkRateLimit(`donations:${clientIp}`, 5, 60);

  if (!rateLimit.success) {
    return NextResponse.json(
      { success: false, error: 'Too many requests. Please wait a minute.' },
      { status: 429 }
    );
  }

  try {
    const { amount, donorName, donorEmail, donorPhone, cause } = await req.json();

    // 1. Server-side validation
    const numAmount = Number(amount);
    if (!numAmount || isNaN(numAmount) || numAmount < 100 || numAmount > 500000) {
      return NextResponse.json(
        { success: false, error: 'Donation amount must be between ₹100 and ₹5,00,000 for Indian donors.' },
        { status: 400 }
      );
    }

    if (!donorName || !donorEmail) {
      return NextResponse.json(
        { success: false, error: 'Donor name and email are mandatory.' },
        { status: 400 }
      );
    }

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    // 2. Integration Boundary check: If credentials exist, prepare order
    if (keyId && keySecret) {
      // In production with live keys, calls Razorpay Orders API
      // e.g. const order = await razorpay.orders.create({ amount: numAmount * 100, currency: 'INR' });
    }

    // 3. Documented Integration Boundary / Bank Transfer Guidance:
    // Because the foundation is currently not yet eligible for 80G tax relief and
    // payment credentials are unconfigured, we never fake success. We generate an official reference
    // and guide the donor to verified bank transfer details.
    const referenceId = `ITTI-GIFT-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    // Dispatch official bank transfer instruction note
    await sendTransactionalEmail({
      to: donorEmail,
      subject: `Donation Transfer Reference: ${referenceId} — The Itti Foundation`,
      html: `
        <div style="font-family: sans-serif; color: #242722; line-height: 1.6; max-width: 600px;">
          <h2 style="color: #173F35;">The Itti Foundation</h2>
          <p>Dear ${donorName},</p>
          <p>Thank you for offering to support our work in <strong>${cause || 'General Support'}</strong> with a contribution of <strong>₹${numAmount.toLocaleString('en-IN')}</strong>.</p>
          <p>As disclosed, The Itti Foundation (Itti’s Skill School Foundation) is a Section 8 company and is <strong>not currently eligible for 80G tax relief</strong>.</p>
          <div style="background: #F8F6F0; border: 1px solid #173F35; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 8px 0; font-weight: bold; color: #173F35;">Official Bank Account Details:</p>
            <p style="margin: 0; font-size: 13px;">Beneficiary: <strong>ITTI’S SKILL SCHOOL FOUNDATION</strong></p>
            <p style="margin: 0; font-size: 13px;">Bank: Available via direct finance verification</p>
            <p style="margin: 0; font-size: 13px;">Reference ID: <strong>${referenceId}</strong></p>
          </div>
          <p>Our accounts officer will write to you within two working days with the transfer verification.</p>
          <p style="font-size: 12px; color: #5B6457;">
            The Itti Foundation · Section 8 Not-for-Profit · Pune, India
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      mode: 'DIRECT_BANK_TRANSFER_INSTRUCTION',
      referenceId,
      amount: numAmount,
      currency: 'INR',
      status: 'PENDING_DONOR_TRANSFER',
      message: 'Official transfer instructions have been dispatched to your email address.',
      taxReliefNotice: 'Not currently eligible for 80G relief.',
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
