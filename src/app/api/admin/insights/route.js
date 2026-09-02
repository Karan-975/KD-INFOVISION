import { NextResponse } from 'next/server';
import { getAdminUserFromRequest } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const insights = await prisma.insight.findMany({ orderBy: { order: 'asc' } });
    return NextResponse.json({ success: true, insights });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch insights' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const body = await request.json();
    const count = await prisma.insight.count();

    const insight = await prisma.insight.create({
      data: {
        order: body.order ?? count,
        category: body.category || 'Blog',
        title: body.title,
        summary: body.summary,
        content: body.content || '',
        dateLabel: body.dateLabel || 'August 2026',
        isFeatured: Boolean(body.isFeatured),
        isTrending: Boolean(body.isTrending),
        imageUrl: body.imageUrl || null,
        isActive: body.isActive !== undefined ? body.isActive : true,
      },
    });

    return NextResponse.json({ success: true, insight });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to create insight' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const body = await request.json();
    const { id, ...data } = body;

    const insight = await prisma.insight.update({
      where: { id: Number(id) },
      data,
    });

    return NextResponse.json({ success: true, insight });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update insight' }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ success: false, error: 'ID is required' }, { status: 400 });

    await prisma.insight.delete({ where: { id: Number(id) } });
    return NextResponse.json({ success: true, message: 'Insight deleted' });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to delete insight' }, { status: 500 });
  }
}
