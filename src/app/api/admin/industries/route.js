import { NextResponse } from 'next/server';
import { getAdminUserFromRequest } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const industries = await prisma.industry.findMany({ orderBy: { order: 'asc' } });
    return NextResponse.json({ success: true, industries });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch industries' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const body = await request.json();
    const count = await prisma.industry.count();

    const industry = await prisma.industry.create({
      data: {
        order: body.order ?? count,
        title: body.title,
        description: body.description,
        icon: body.icon || 'Building2',
        isActive: body.isActive !== undefined ? body.isActive : true,
      },
    });

    return NextResponse.json({ success: true, industry });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to create industry' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const body = await request.json();
    const { id, ...data } = body;

    const industry = await prisma.industry.update({
      where: { id: Number(id) },
      data,
    });

    return NextResponse.json({ success: true, industry });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update industry' }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ success: false, error: 'ID is required' }, { status: 400 });

    await prisma.industry.delete({ where: { id: Number(id) } });
    return NextResponse.json({ success: true, message: 'Industry deleted' });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to delete industry' }, { status: 500 });
  }
}
