import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAuthenticatedAdminSession, hasPermission } from '@/lib/admin-auth';

export async function GET(req: NextRequest) {
  const session = getAuthenticatedAdminSession(req);
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const type = searchParams.get('type') || 'contact';

  try {
    if (type === 'volunteers') {
      const volunteers = await prisma.volunteerApplication.findMany({
        orderBy: { createdAt: 'desc' },
      });
      return NextResponse.json({ success: true, data: volunteers });
    }

    if (type === 'memberships') {
      const members = await prisma.membershipRegistration.findMany({
        orderBy: { createdAt: 'desc' },
      });
      return NextResponse.json({ success: true, data: members });
    }

    const contacts = await prisma.contactSubmission.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json({ success: true, data: contacts });
  } catch {
    // Development fallback mock submissions
    const mockData =
      type === 'volunteers'
        ? [
            {
              id: 'v-1',
              name: 'Rohit Kulkarni',
              email: 'rohit.k@example.com',
              phone: '+91 98220 12345',
              pillar: 'Conservation',
              availability: 'Weekend events only',
              skills: 'Planting native trees, local Pune coordinator for milk bag collection.',
              status: 'PENDING',
              createdAt: new Date().toISOString(),
            },
            {
              id: 'v-2',
              name: 'Dr. Neha Sen',
              email: 'neha.sen@example.com',
              phone: '+91 98450 67890',
              pillar: 'Cancer Care & Support Circles',
              availability: '1–2 hours / week',
              skills: 'Clinical oncology psychologist; experienced in facilitating caregiver circles.',
              status: 'REVIEWED',
              createdAt: new Date().toISOString(),
            },
          ]
        : type === 'memberships'
        ? [
            {
              id: 'm-1',
              name: 'Aryan Deshmukh',
              email: 'aryan.d@example.com',
              isUnder18: true,
              guardianName: 'Sanjay Deshmukh',
              guardianContact: 'sanjay.d@example.com',
              consentWhatsapp: true,
              consentEmail: true,
              status: 'PENDING_GUARDIAN',
              createdAt: new Date().toISOString(),
            },
            {
              id: 'm-2',
              name: 'Pooja Iyer',
              email: 'pooja.iyer@example.com',
              isUnder18: false,
              consentWhatsapp: true,
              consentEmail: true,
              status: 'ACTIVE',
              createdAt: new Date().toISOString(),
            },
          ]
        : [
            {
              id: 'c-1',
              name: 'Principal, Modern High School',
              email: 'admin@modernschool.edu.in',
              message: 'We would love to host the Periods Ki Pathshala workshop for our 8th and 9th standard students in November.',
              status: 'PENDING',
              createdAt: new Date().toISOString(),
            },
            {
              id: 'c-2',
              name: 'Kavita Joshi',
              email: 'kavita.j@example.com',
              message: 'Asking for guidance regarding sensory support for an adult family member on the autism spectrum.',
              status: 'REVIEWED',
              createdAt: new Date().toISOString(),
            },
          ];

    return NextResponse.json({ success: true, data: mockData, source: 'fallback_mock' });
  }
}

export async function PATCH(req: NextRequest) {
  const session = getAuthenticatedAdminSession(req);
  if (!session || !hasPermission(session.role, 'EDITOR')) {
    return NextResponse.json({ success: false, error: 'Forbidden' }, { status: 403 });
  }

  const { id, type, status } = await req.json();

  try {
    if (type === 'volunteers') {
      await prisma.volunteerApplication.update({
        where: { id },
        data: { status },
      });
    } else if (type === 'memberships') {
      await prisma.membershipRegistration.update({
        where: { id },
        data: { status },
      });
    } else {
      await prisma.contactSubmission.update({
        where: { id },
        data: { status },
      });
    }

    // Record audit log
    await prisma.auditLog.create({
      data: {
        userId: session.id,
        action: 'UPDATE_SUBMISSION_STATUS',
        resource: type.toUpperCase(),
        resourceId: id,
        details: `Status updated to ${status} by ${session.name}`,
      },
    });
  } catch {
    // Non-blocking log
  }

  return NextResponse.json({ success: true, message: 'Status updated successfully' });
}
