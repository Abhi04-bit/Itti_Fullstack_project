import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { VERIFIED_PROJECTS } from '@/lib/verified-data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const query = searchParams.get('q');
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '10', 10);

  try {
    const where: any = {};
    if (category && category !== 'ALL') where.category = category;
    if (query) {
      where.OR = [
        { title: { contains: query, mode: 'insensitive' } },
        { summary: { contains: query, mode: 'insensitive' } },
      ];
    }

    const [projects, total] = await Promise.all([
      prisma.project.findMany({
        where,
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { sortOrder: 'asc' },
      }),
      prisma.project.count({ where }),
    ]);

    if (projects.length > 0) {
      return NextResponse.json({
        success: true,
        pagination: { total, page, limit, pages: Math.ceil(total / limit) },
        data: projects,
      });
    }
  } catch (err) {
    // Graceful fallback
  }

  let filtered = VERIFIED_PROJECTS;
  if (category && category !== 'ALL') {
    filtered = filtered.filter((p) => p.category === category);
  }
  if (query) {
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.summary.toLowerCase().includes(query.toLowerCase())
    );
  }

  return NextResponse.json({
    success: true,
    pagination: { total: filtered.length, page: 1, limit: filtered.length, pages: 1 },
    data: filtered,
    source: 'verified_dataset',
  });
}
