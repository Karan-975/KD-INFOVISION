import { NextResponse } from 'next/server';
import { getAdminUserFromRequest } from '@/lib/auth';
import fs from 'fs';
import path from 'path';

export async function GET(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const files = fs.readdirSync(uploadsDir);
    const mediaList = files
      .filter((file) => !file.startsWith('.'))
      .map((file) => {
        const stats = fs.statSync(path.join(uploadsDir, file));
        return {
          name: file,
          url: `/uploads/${file}`,
          size: stats.size,
          createdAt: stats.birthtime,
        };
      })
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return NextResponse.json({ success: true, files: mediaList });
  } catch (error) {
    console.error('Error fetching media files:', error);
    return NextResponse.json({ success: false, error: 'Failed to list media' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get('file');

    if (!file) {
      return NextResponse.json({ success: false, error: 'No file uploaded' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const originalName = file.name || 'upload.png';
    const ext = path.extname(originalName) || '.png';
    const safeBaseName = path
      .basename(originalName, ext)
      .replace(/[^a-zA-Z0-9_-]/g, '_')
      .toLowerCase();
    const fileName = `${Date.now()}_${safeBaseName}${ext}`;

    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const filePath = path.join(uploadsDir, fileName);
    fs.writeFileSync(filePath, buffer);

    const publicUrl = `/uploads/${fileName}`;

    return NextResponse.json({
      success: true,
      url: publicUrl,
      fileName,
      size: buffer.length,
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ success: false, error: 'Failed to upload file' }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const { fileName } = await request.json();
    if (!fileName) {
      return NextResponse.json({ success: false, error: 'Filename is required' }, { status: 400 });
    }

    const cleanFileName = path.basename(fileName);
    const filePath = path.join(process.cwd(), 'public', 'uploads', cleanFileName);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    return NextResponse.json({ success: true, message: 'File deleted successfully' });
  } catch (error) {
    console.error('Delete media error:', error);
    return NextResponse.json({ success: false, error: 'Failed to delete file' }, { status: 500 });
  }
}
