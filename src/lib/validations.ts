import { z } from 'zod';

export const ContactSubmissionSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
  honeypot: z.string().optional(), // Anti-spam bot trap
});

export const VolunteerApplicationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().max(20).optional().or(z.literal('')),
  pillar: z.string().min(1, 'Please select a commitment area'),
  availability: z.string().min(1, 'Please select your availability'),
  skills: z.string().min(5, 'Please provide brief details of your skills or lived experience').max(1500),
});

export const MembershipRegistrationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().max(20).optional().or(z.literal('')),
  dob: z.string().min(4, 'Valid date of birth required for DPDP compliance'),
  isUnder18: z.boolean().default(false),
  guardianName: z.string().optional(),
  guardianContact: z.string().optional(),
  consentEmail: z.boolean().default(true),
  consentWhatsapp: z.boolean().default(false),
  consentSms: z.boolean().default(false),
}).refine((data) => {
  if (data.isUnder18) {
    return !!data.guardianName && !!data.guardianContact;
  }
  return true;
}, {
  message: 'Guardian name and contact are mandatory for members under 18 under India’s DPDP Act 2023',
  path: ['guardianContact'],
});

export const NewsletterSubscriptionSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});
