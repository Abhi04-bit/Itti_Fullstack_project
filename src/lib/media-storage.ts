import fs from 'fs';
import path from 'path';

export interface UploadResult {
  success: boolean;
  url?: string;
  filename?: string;
  sizeBytes?: number;
  mimeType?: string;
  error?: string;
}

const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'];
const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB

export async function uploadMediaAsset(file: File): Promise<UploadResult> {
  // 1. Validate file size
  if (file.size > MAX_FILE_SIZE_BYTES) {
    return {
      success: false,
      error: 'File exceeds maximum permitted size of 5 MB',
    };
  }

  // 2. Validate MIME type
  if (!ALLOWED_MIME_TYPES.includes(file.type)) {
    return {
      success: false,
      error: 'Invalid file type. Only JPEG, PNG, WebP images and PDF documents are allowed',
    };
  }

  // 3. Local Storage Provider fallback
  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const uniqueFilename = `${Date.now()}-${sanitizedName}`;
    const filePath = path.join(uploadsDir, uniqueFilename);

    fs.writeFileSync(filePath, buffer);

    return {
      success: true,
      url: `/uploads/${uniqueFilename}`,
      filename: uniqueFilename,
      sizeBytes: file.size,
      mimeType: file.type,
    };
  } catch (err: any) {
    return {
      success: false,
      error: err.message || 'File upload failed',
    };
  }
}
