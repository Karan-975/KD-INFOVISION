import { NextResponse } from 'next/server';
import { getAdminUserFromRequest } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const services = await prisma.service.findMany({ orderBy: { order: 'asc' } });
    return NextResponse.json({ success: true, services });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch services' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const body = await request.json();
    const count = await prisma.service.count();

    const service = await prisma.service.create({
      data: {
        order: body.order ?? count,
        num: body.num || `0${count + 1}`,
        title: body.title,
        description: body.description,
        icon: body.icon || 'Cpu',
        details: body.details || '',
        linkUrl: body.linkUrl || '#contact',
        isActive: body.isActive !== undefined ? body.isActive : true,
      },
    });

    return NextResponse.json({ success: true, service });
  } catch (error) {
    console.error('Create service error:', error);
    return NextResponse.json({ success: false, error: 'Failed to create service' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const body = await request.json();
    const { id, ...data } = body;

    const service = await prisma.service.update({
      where: { id: Number(id) },
      data,
    });

    return NextResponse.json({ success: true, service });
  } catch (error) {
    console.error('Update service error:', error);
    return NextResponse.json({ success: false, error: 'Failed to update service' }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ success: false, error: 'ID is required' }, { status: 400 });

    await prisma.service.delete({ where: { id: Number(id) } });
    return NextResponse.json({ success: true, message: 'Service deleted' });
  } catch (error) {
    console.error('Delete service error:', error);
    return NextResponse.json({ success: false, error: 'Failed to delete service' }, { status: 500 });
  }
}
