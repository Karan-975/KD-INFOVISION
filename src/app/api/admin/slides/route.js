import { NextResponse } from 'next/server';
import { getAdminUserFromRequest } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const slides = await prisma.heroSlide.findMany({ orderBy: { order: 'asc' } });
    return NextResponse.json({ success: true, slides });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch slides' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const body = await request.json();
    const count = await prisma.heroSlide.count();

    const slide = await prisma.heroSlide.create({
      data: {
        order: body.order ?? count,
        tag: body.tag || 'AI & Data Consulting',
        headline: body.headline || 'Turning Data Into Your',
        headlineEmp: body.headlineEmp || 'Competitive Advantage',
        subtext: body.subtext || '',
        primaryBtn: body.primaryBtn || 'Explore Services',
        primaryUrl: body.primaryUrl || '#solutions',
        secBtn: body.secBtn || 'Talk to an Expert →',
        secUrl: body.secUrl || '#contact',
        svgType: body.svgType || 'analytics',
        bgGradient: body.bgGradient || 'linear-gradient(135deg,#0F2347 0%,#1B3A6B 55%,#0D2B5E 100%)',
        imageUrl: body.imageUrl || null,
        isActive: body.isActive !== undefined ? body.isActive : true,
      },
    });

    return NextResponse.json({ success: true, slide });
  } catch (error) {
    console.error('Create slide error:', error);
    return NextResponse.json({ success: false, error: 'Failed to create slide' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const body = await request.json();
    const { id, ...data } = body;

    const slide = await prisma.heroSlide.update({
      where: { id: Number(id) },
      data,
    });

    return NextResponse.json({ success: true, slide });
  } catch (error) {
    console.error('Update slide error:', error);
    return NextResponse.json({ success: false, error: 'Failed to update slide' }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) return NextResponse.json({ success: false, error: 'ID is required' }, { status: 400 });

    await prisma.heroSlide.delete({ where: { id: Number(id) } });
    return NextResponse.json({ success: true, message: 'Slide deleted' });
  } catch (error) {
    console.error('Delete slide error:', error);
    return NextResponse.json({ success: false, error: 'Failed to delete slide' }, { status: 500 });
  }
}
