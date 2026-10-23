import { NextRequest, NextResponse } from 'next/server';
import { uploadMediaAsset } from '@/lib/media-storage';
import { getAuthenticatedAdminSession, hasPermission } from '@/lib/admin-auth';

export async function POST(req: NextRequest) {
  // Authorization check: only editors and admins may upload media
  const session = getAuthenticatedAdminSession(req);
  if (!session || !hasPermission(session.role, 'EDITOR')) {
    return NextResponse.json(
      { success: false, error: 'Unauthorized: Only authorized staff may upload media assets' },
      { status: 403 }
    );
  }

  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json(
        { success: false, error: 'No file provided in form data' },
        { status: 400 }
      );
    }

    const uploadResult = await uploadMediaAsset(file);

    if (!uploadResult.success) {
      return NextResponse.json(
        { success: false, error: uploadResult.error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: uploadResult,
        message: 'File uploaded successfully',
      },
      { status: 201 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || 'Media upload error' },
      { status: 500 }
    );
  }
}
