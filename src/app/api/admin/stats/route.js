import { NextResponse } from 'next/server';
import { getAdminUserFromRequest } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const stats = await prisma.statCounter.findMany({ orderBy: { order: 'asc' } });
    return NextResponse.json({ success: true, stats });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch stats' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const body = await request.json();
    const count = await prisma.statCounter.count();

    const stat = await prisma.statCounter.create({
      data: {
        order: body.order ?? count,
        target: Number(body.target),
        suffix: body.suffix || '+',
        label: body.label,
        isActive: body.isActive !== undefined ? body.isActive : true,
      },
    });

    return NextResponse.json({ success: true, stat });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to create stat' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const body = await request.json();
    const { id, target, ...rest } = body;

    const stat = await prisma.statCounter.update({
      where: { id: Number(id) },
      data: {
        ...rest,
        target: target !== undefined ? Number(target) : undefined,
      },
    });

    return NextResponse.json({ success: true, stat });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update stat' }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ success: false, error: 'ID is required' }, { status: 400 });

    await prisma.statCounter.delete({ where: { id: Number(id) } });
    return NextResponse.json({ success: true, message: 'Stat deleted' });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to delete stat' }, { status: 500 });
  }
}
