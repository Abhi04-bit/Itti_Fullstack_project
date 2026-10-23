/**
 * In-Memory Sliding-Window Rate Limiter
 * Protects public forms from automated spam, brute-force, and resource exhaustion.
 * No Redis or third-party infrastructure required.
 */

interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const ipRequestMap = new Map<string, RateLimitRecord>();

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  resetInSeconds: number;
}

export function checkRateLimit(
  identifier: string,
  limit: number = 10,
  windowSeconds: number = 60
): RateLimitResult {
  const now = Date.now();
  const windowMs = windowSeconds * 1000;
  const record = ipRequestMap.get(identifier);

  // Clean expired record or initialize
  if (!record || now > record.resetTime) {
    const newRecord: RateLimitRecord = {
      count: 1,
      resetTime: now + windowMs,
    };
    ipRequestMap.set(identifier, newRecord);
    return {
      success: true,
      limit,
      remaining: limit - 1,
      resetInSeconds: windowSeconds,
    };
  }

  // Increment within window
  record.count += 1;
  const remaining = Math.max(0, limit - record.count);
  const resetInSeconds = Math.ceil((record.resetTime - now) / 1000);

  if (record.count > limit) {
    return {
      success: false,
      limit,
      remaining: 0,
      resetInSeconds,
    };
  }

  return {
    success: true,
    limit,
    remaining,
    resetInSeconds,
  };
}

// Helper to extract client IP from headers
export function getClientIp(headers: Headers): string {
  const forwardedFor = headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }
  return headers.get('x-real-ip') || '127.0.0.1';
}
