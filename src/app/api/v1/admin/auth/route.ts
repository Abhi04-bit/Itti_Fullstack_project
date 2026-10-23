import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import {
  hashPassword,
  verifyPassword,
  createSessionToken,
  ADMIN_COOKIE_CONFIG,
  AdminUserSession,
} from '@/lib/admin-auth';

// Default initial emergency Super Admin credentials for local development
const DEV_DEFAULT_ADMIN = {
  email: 'admin@itti.org.in',
  passwordHash: hashPassword('IttiAdmin@2026'),
  name: 'Anuja Bali (Super Admin)',
  role: 'SUPER_ADMIN' as const,
};

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: 'Email and password are required' },
        { status: 400 }
      );
    }

    let authenticatedUser: AdminUserSession | null = null;

    try {
      // 1. Try querying PostgreSQL database
      const dbUser = await prisma.user.findUnique({
        where: { email: email.toLowerCase() },
      });

      if (dbUser && dbUser.isActive) {
        if (verifyPassword(password, dbUser.passwordHash)) {
          authenticatedUser = {
            id: dbUser.id,
            email: dbUser.email,
            name: dbUser.name,
            role: dbUser.role as any,
          };
        }
      }
    } catch {
      // Database connection fallback
    }

    // 2. Built-in initial super admin fallback for development
    if (
      !authenticatedUser &&
      email.toLowerCase() === DEV_DEFAULT_ADMIN.email &&
      verifyPassword(password, DEV_DEFAULT_ADMIN.passwordHash)
    ) {
      authenticatedUser = {
        id: 'super-admin-dev',
        email: DEV_DEFAULT_ADMIN.email,
        name: DEV_DEFAULT_ADMIN.name,
        role: DEV_DEFAULT_ADMIN.role,
      };
    }

    if (!authenticatedUser) {
      return NextResponse.json(
        { success: false, error: 'Invalid credentials or inactive account' },
        { status: 401 }
      );
    }

    // Create signed session token
    const token = createSessionToken(authenticatedUser);

    // Set secure HTTP-only cookie
    const res = NextResponse.json({
      success: true,
      user: authenticatedUser,
      message: 'Authentication successful',
    });

    res.cookies.set(ADMIN_COOKIE_CONFIG.name, token, ADMIN_COOKIE_CONFIG.options);

    return res;
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || 'Authentication error' },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  const res = NextResponse.json({
    success: true,
    message: 'Logged out successfully',
  });

  res.cookies.delete(ADMIN_COOKIE_CONFIG.name);
  return res;
}
