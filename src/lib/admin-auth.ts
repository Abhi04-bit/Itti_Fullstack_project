import crypto from 'crypto';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export type UserRole = 'SUPER_ADMIN' | 'ADMIN' | 'EDITOR' | 'CONTRIBUTOR';

export interface AdminUserSession {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

const SESSION_COOKIE_NAME = 'itti_admin_session';
const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET || 'itti-foundation-secure-secret-key-salt-2026';

// Password hashing using Node.js crypto pbkdf2 (zero third-party dependencies required)
export function hashPassword(password: string): string {
  const salt = 'itti_foundation_salt_2026';
  return crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
}

export function verifyPassword(password: string, hash: string): boolean {
  return hashPassword(password) === hash;
}

// Token encryption & signature verification
export function createSessionToken(user: AdminUserSession): string {
  const payload = Buffer.from(
    JSON.stringify({
      ...user,
      exp: Date.now() + 1000 * 60 * 60 * 24 * 7, // 7 days
    })
  ).toString('base64url');

  const signature = crypto
    .createHmac('sha256', SESSION_SECRET)
    .update(payload)
    .digest('base64url');

  return `${payload}.${signature}`;
}

export function verifySessionToken(token: string): AdminUserSession | null {
  try {
    const [payload, signature] = token.split('.');
    if (!payload || !signature) return null;

    const expectedSignature = crypto
      .createHmac('sha256', SESSION_SECRET)
      .update(payload)
      .digest('base64url');

    if (signature !== expectedSignature) return null;

    const data = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    if (data.exp && data.exp < Date.now()) return null;

    return {
      id: data.id,
      email: data.email,
      name: data.name,
      role: data.role,
    };
  } catch {
    return null;
  }
}

// Server-side session extractor for API routes and server components
export function getAuthenticatedAdminSession(req?: NextRequest): AdminUserSession | null {
  let token: string | undefined;

  if (req) {
    token = req.cookies.get(SESSION_COOKIE_NAME)?.value;
    if (!token) {
      const authHeader = req.headers.get('Authorization');
      if (authHeader?.startsWith('Bearer ')) {
        token = authHeader.substring(7);
      }
    }
  } else {
    try {
      token = cookies().get(SESSION_COOKIE_NAME)?.value;
    } catch {
      // not in request context
    }
  }

  if (!token) return null;
  return verifySessionToken(token);
}

// Role Authorization Guard: Checks if user has required permissions
export function hasPermission(userRole: UserRole, requiredRole: UserRole): boolean {
  const hierarchy: Record<UserRole, number> = {
    CONTRIBUTOR: 1,
    EDITOR: 2,
    ADMIN: 3,
    SUPER_ADMIN: 4,
  };

  return hierarchy[userRole] >= hierarchy[requiredRole];
}

export const ADMIN_COOKIE_CONFIG = {
  name: SESSION_COOKIE_NAME,
  options: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  },
};
