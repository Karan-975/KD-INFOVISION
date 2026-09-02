import { NextResponse } from 'next/server';
import { getAdminUserFromRequest } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const steps = await prisma.processStep.findMany({ orderBy: { order: 'asc' } });
    return NextResponse.json({ success: true, steps });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch process steps' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const body = await request.json();
    const count = await prisma.processStep.count();

    const step = await prisma.processStep.create({
      data: {
        order: body.order ?? count,
        stepNum: body.stepNum || `0${count + 1}`,
        title: body.title,
        description: body.description,
        icon: body.icon || 'Search',
        isActive: body.isActive !== undefined ? body.isActive : true,
      },
    });

    return NextResponse.json({ success: true, step });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to create process step' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const body = await request.json();
    const { id, ...data } = body;

    const step = await prisma.processStep.update({
      where: { id: Number(id) },
      data,
    });

    return NextResponse.json({ success: true, step });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update process step' }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ success: false, error: 'ID is required' }, { status: 400 });

    await prisma.processStep.delete({ where: { id: Number(id) } });
    return NextResponse.json({ success: true, message: 'Process step deleted' });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to delete process step' }, { status: 500 });
  }
}
