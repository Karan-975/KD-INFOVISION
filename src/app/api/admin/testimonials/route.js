import { NextResponse } from 'next/server';
import { getAdminUserFromRequest } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const testimonials = await prisma.testimonial.findMany({ orderBy: { order: 'asc' } });
    return NextResponse.json({ success: true, testimonials });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch testimonials' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const body = await request.json();
    const count = await prisma.testimonial.count();

    const testimonial = await prisma.testimonial.create({
      data: {
        order: body.order ?? count,
        quote: body.quote,
        name: body.name,
        role: body.role,
        company: body.company || '',
        avatarInit: body.avatarInit || body.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase(),
        avatarUrl: body.avatarUrl || null,
        isActive: body.isActive !== undefined ? body.isActive : true,
      },
    });

    return NextResponse.json({ success: true, testimonial });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to create testimonial' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const body = await request.json();
    const { id, ...data } = body;

    const testimonial = await prisma.testimonial.update({
      where: { id: Number(id) },
      data,
    });

    return NextResponse.json({ success: true, testimonial });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update testimonial' }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ success: false, error: 'ID is required' }, { status: 400 });

    await prisma.testimonial.delete({ where: { id: Number(id) } });
    return NextResponse.json({ success: true, message: 'Testimonial deleted' });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to delete testimonial' }, { status: 500 });
  }
}
