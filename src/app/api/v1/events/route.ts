import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { VERIFIED_EVENTS } from '@/lib/verified-data';

export async function GET() {
  try {
    const events = await prisma.event.findMany({
      where: { isPublished: true },
      orderBy: { sortOrder: 'asc' },
    });

    if (events.length > 0) {
      return NextResponse.json({ success: true, count: events.length, data: events });
    }
  } catch (err) {
    // Graceful fallback
  }

  return NextResponse.json({
    success: true,
    count: VERIFIED_EVENTS.length,
    data: VERIFIED_EVENTS,
    source: 'verified_dataset',
  });
}
