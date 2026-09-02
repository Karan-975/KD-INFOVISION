import { NextResponse } from 'next/server';
import { getAdminUserFromRequest } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const cases = await prisma.caseStudy.findMany({ orderBy: { order: 'asc' } });
    return NextResponse.json({ success: true, cases });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch case studies' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const body = await request.json();
    const count = await prisma.caseStudy.count();

    const caseItem = await prisma.caseStudy.create({
      data: {
        order: body.order ?? count,
        tag: body.tag || 'BFSI',
        resultNum: body.resultNum || '50%',
        resultLabel: body.resultLabel || 'Efficiency Boost',
        title: body.title,
        summary: body.summary,
        fullStory: body.fullStory || '',
        isActive: body.isActive !== undefined ? body.isActive : true,
      },
    });

    return NextResponse.json({ success: true, caseStudy: caseItem });
  } catch (error) {
    console.error('Create case error:', error);
    return NextResponse.json({ success: false, error: 'Failed to create case study' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const body = await request.json();
    const { id, ...data } = body;

    const caseItem = await prisma.caseStudy.update({
      where: { id: Number(id) },
      data,
    });

    return NextResponse.json({ success: true, caseStudy: caseItem });
  } catch (error) {
    console.error('Update case error:', error);
    return NextResponse.json({ success: false, error: 'Failed to update case study' }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ success: false, error: 'ID is required' }, { status: 400 });

    await prisma.caseStudy.delete({ where: { id: Number(id) } });
    return NextResponse.json({ success: true, message: 'Case study deleted' });
  } catch (error) {
    console.error('Delete case error:', error);
    return NextResponse.json({ success: false, error: 'Failed to delete case study' }, { status: 500 });
  }
}
