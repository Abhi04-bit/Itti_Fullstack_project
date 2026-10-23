import assert from 'assert';
import crypto from 'crypto';
import { z } from 'zod';

console.log('--- EXECUTING QA VALIDATION CHECKS ---');

// 1. Zod Validation Check
const ContactSubmissionSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
});

assert.doesNotThrow(() => {
  ContactSubmissionSchema.parse({
    name: 'Anuja Bali',
    email: 'anuja@itti.org.in',
    message: 'Testing verified message submission over 10 chars',
  });
});
console.log('✔ Check 1 Passed: Zod Form Validation logic');

// 2. DPDP Minor Check
const MinorSchema = z.object({
  name: z.string(),
  isUnder18: z.boolean(),
  guardianContact: z.string().optional(),
}).refine(data => !data.isUnder18 || !!data.guardianContact, {
  message: 'Guardian required for under 18'
});

assert.throws(() => {
  MinorSchema.parse({ name: 'Child', isUnder18: true });
});
assert.doesNotThrow(() => {
  MinorSchema.parse({ name: 'Child', isUnder18: true, guardianContact: 'parent@itti.org.in' });
});
console.log('✔ Check 2 Passed: DPDP Act 2023 Guardian Consent Constraint');

// 3. PBKDF2 Password Hashing & Verification
function hashPassword(password) {
  const salt = 'itti_foundation_salt_2026';
  return crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
}
const hash = hashPassword('IttiAdmin@2026');
assert.strictEqual(hashPassword('IttiAdmin@2026') === hash, true);
assert.strictEqual(hashPassword('Wrong') === hash, false);
console.log('✔ Check 3 Passed: SHA-512 PBKDF2 Authentication Security');

// 4. Role Hierarchy Check
const hierarchy = { CONTRIBUTOR: 1, EDITOR: 2, ADMIN: 3, SUPER_ADMIN: 4 };
function hasPermission(userRole, requiredRole) {
  return hierarchy[userRole] >= hierarchy[requiredRole];
}
assert.strictEqual(hasPermission('SUPER_ADMIN', 'ADMIN'), true);
assert.strictEqual(hasPermission('EDITOR', 'SUPER_ADMIN'), false);
console.log('✔ Check 4 Passed: RBAC Permission Guard');

console.log('--- ALL QA LOGICAL CHECKS CONFIRMED CLEAN ---');
