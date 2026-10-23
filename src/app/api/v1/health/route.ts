import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  let dbStatus = 'healthy';
  let dbLatency = 0;

  const start = Date.now();
  try {
    await prisma.$queryRaw`SELECT 1`;
    dbLatency = Date.now() - start;
  } catch (error: any) {
    dbStatus = 'disconnected';
  }

  return NextResponse.json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    service: 'The Itti Foundation API v1',
    environment: process.env.NODE_ENV || 'development',
    database: {
      status: dbStatus,
      latencyMs: dbLatency,
      provider: 'postgresql',
    },
    version: '1.0.0',
  });
}
