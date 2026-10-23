import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { VERIFIED_PRODUCTS } from '@/lib/verified-data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  try {
    const where: any = { isAvailable: true };
    if (category && category !== 'ALL') {
      where.category = category.toUpperCase().replace(' ', '_');
    }

    const products = await prisma.product.findMany({
      where,
      orderBy: { sortOrder: 'asc' },
    });

    if (products.length > 0) {
      return NextResponse.json({ success: true, count: products.length, data: products });
    }
  } catch (err) {
    // Graceful fallback
  }

  let filtered = VERIFIED_PRODUCTS;
  if (category && category !== 'ALL') {
    filtered = filtered.filter((p) => p.category === category);
  }

  return NextResponse.json({
    success: true,
    count: filtered.length,
    data: filtered,
    source: 'verified_dataset',
  });
}
