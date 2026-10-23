import assert from 'assert';
import {
  ContactSubmissionSchema,
  VolunteerApplicationSchema,
  MembershipRegistrationSchema,
} from './src/lib/validations';
import { checkRateLimit } from './src/lib/rate-limiter';
import {
  hashPassword,
  verifyPassword,
  createSessionToken,
  verifySessionToken,
  hasPermission,
} from './src/lib/admin-auth';

console.log('--- RUNNING ITTI FOUNDATION QA TEST SUITE ---');

// 1. Zod Validation Tests
console.log('1. Testing Form Validation Rules...');
assert.doesNotThrow(() => {
  ContactSubmissionSchema.parse({
    name: 'Anuja Bali',
    email: 'anuja@itti.org.in',
    message: 'We are requesting partnership info for our experiential day.',
  });
}, 'Valid contact submission should pass');

assert.throws(() => {
  ContactSubmissionSchema.parse({
    name: 'A',
    email: 'invalid-email',
    message: 'short',
  });
}, 'Invalid contact submission should fail');

// 2. DPDP Act 2023 Minor Verification Tests
console.log('2. Testing DPDP Act 2023 Age Consent Boundary...');
assert.throws(() => {
  MembershipRegistrationSchema.parse({
    name: 'Minor Student',
    email: 'minor@example.com',
    dob: '2010-05-10',
    isUnder18: true,
    // missing guardian
    consentEmail: true,
  });
}, 'Minor registration without guardian MUST fail under DPDP Act 2023');

assert.doesNotThrow(() => {
  MembershipRegistrationSchema.parse({
    name: 'Minor Student',
    email: 'minor@example.com',
    dob: '2010-05-10',
    isUnder18: true,
    guardianName: 'Guardian Parent',
    guardianContact: 'guardian@example.com',
    consentEmail: true,
  });
}, 'Minor registration with guardian contact should pass');

// 3. Cryptographic Authentication & Role RBAC Tests
console.log('3. Testing Password Hashing & RBAC Authorization...');
const testPassword = 'AdminSecret@2026';
const hash = hashPassword(testPassword);
assert.strictEqual(verifyPassword(testPassword, hash), true, 'Password verification should succeed');
assert.strictEqual(verifyPassword('WrongPassword', hash), false, 'Wrong password should fail');

const token = createSessionToken({
  id: 'usr-1',
  email: 'admin@itti.org.in',
  name: 'Anuja Bali',
  role: 'SUPER_ADMIN',
});
const verifiedSession = verifySessionToken(token);
assert.ok(verifiedSession, 'Session token should be valid');
assert.strictEqual(verifiedSession?.role, 'SUPER_ADMIN');

assert.strictEqual(hasPermission('SUPER_ADMIN', 'EDITOR'), true, 'SUPER_ADMIN should have EDITOR access');
assert.strictEqual(hasPermission('CONTRIBUTOR', 'ADMIN'), false, 'CONTRIBUTOR must not have ADMIN access');

// 4. Rate Limiter Tests
console.log('4. Testing Sliding-Window Rate Limiter...');
const testIp = 'test-ip-123';
for (let i = 0; i < 5; i++) {
  const res = checkRateLimit(testIp, 5, 60);
  assert.strictEqual(res.success, true, `Request ${i + 1} within limit should succeed`);
}
const overLimitRes = checkRateLimit(testIp, 5, 60);
assert.strictEqual(overLimitRes.success, false, '6th request exceeding limit of 5 should be blocked');

console.log('✅ ALL TARGETED QUALITY ASSURANCE TESTS PASSED SUCCESSFULLY.');
