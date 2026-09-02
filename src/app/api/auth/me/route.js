import { NextResponse } from 'next/server';
import { getAdminUserFromRequest } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET(request) {
  try {
    const payload = getAdminUserFromRequest(request);
    if (!payload) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const admin = await prisma.adminUser.findUnique({
      where: { id: payload.id },
      select: { id: true, username: true, email: true, createdAt: true },
    });

    if (!admin) {
      return NextResponse.json({ success: false, error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, user: admin });
  } catch (error) {
    console.error('Auth verification error:', error);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}

export async function POST() {
  const response = NextResponse.json({ success: true, message: 'Logged out successfully' });
  response.cookies.delete('admin_token');
  return response;
}
