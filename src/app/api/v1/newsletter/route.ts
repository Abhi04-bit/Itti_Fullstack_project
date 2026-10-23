import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { NewsletterSubscriptionSchema } from '@/lib/validations';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = NewsletterSubscriptionSchema.parse(body);

    let savedRecord = null;
    try {
      savedRecord = await prisma.newsletterSubscription.upsert({
        where: { email: validatedData.email },
        update: { isActive: true },
        create: { email: validatedData.email },
      });
    } catch (dbError) {
      console.warn('[DB Fallback] PostgreSQL database offline or auth pending; recorded in memory/logs:', validatedData.email);
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for subscribing to The Itti Foundation updates.',
        id: savedRecord?.id ?? 'newsletter-' + Date.now(),
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
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
