import { NextResponse } from 'next/server';
import { getAdminUserFromRequest } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const partners = await prisma.partner.findMany({ orderBy: { order: 'asc' } });
    return NextResponse.json({ success: true, partners });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch partners' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const body = await request.json();
    const count = await prisma.partner.count();

    const partner = await prisma.partner.create({
      data: {
        order: body.order ?? count,
        name: body.name,
        logoUrl: body.logoUrl || null,
        isActive: body.isActive !== undefined ? body.isActive : true,
      },
    });

    return NextResponse.json({ success: true, partner });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to create partner' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const body = await request.json();
    const { id, ...data } = body;

    const partner = await prisma.partner.update({
      where: { id: Number(id) },
      data,
    });

    return NextResponse.json({ success: true, partner });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update partner' }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ success: false, error: 'ID is required' }, { status: 400 });

    await prisma.partner.delete({ where: { id: Number(id) } });
    return NextResponse.json({ success: true, message: 'Partner deleted' });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to delete partner' }, { status: 500 });
  }
}
