import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { VERIFIED_COMMITMENTS } from '@/lib/verified-data';

export async function GET() {
  try {
    const commitments = await prisma.commitment.findMany({
      orderBy: { sortOrder: 'asc' },
      include: { projects: true },
    });

    if (commitments.length > 0) {
      return NextResponse.json({ success: true, count: commitments.length, data: commitments });
    }
  } catch (err) {
    // Graceful fallback to verified in-memory dataset if database is pending connection
  }

  return NextResponse.json({
    success: true,
    count: VERIFIED_COMMITMENTS.length,
    data: VERIFIED_COMMITMENTS,
    source: 'verified_dataset',
  });
}
