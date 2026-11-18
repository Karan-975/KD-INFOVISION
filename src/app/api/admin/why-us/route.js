import { NextResponse } from 'next/server';
import { getAdminUserFromRequest } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const [pillars, settings] = await Promise.all([
      prisma.whyUsPillar.findMany({ orderBy: { order: 'asc' } }),
      prisma.siteSetting.findFirst({
        select: {
          id: true,
          whyTag: true,
          whyTitle: true,
          whyHighlight: true,
          whyDesc: true,
        },
      }),
    ]);

    return NextResponse.json({
      success: true,
      pillars,
      sectionHeaders: settings || {
        whyTag: 'ENGINEERING EXCELLENCE & TRUST',
        whyTitle: 'Start Your Data & AI Journey with KD Infovision for',
        whyHighlight: 'Quick & Quality Delivery',
        whyDesc: 'The KDI Framework provides efficient, high-quality solutions designed to meet the unique needs of our clients. With our domain expertise, we make complex data transformations predictable, secure, and fast.',
      },
    });
  } catch (error) {
    console.error('Fetch why-us error:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch why-us pillars' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const body = await request.json();

    // Check if this is an update to section headers
    if (body.isHeaderUpdate) {
      const setting = await prisma.siteSetting.findFirst();
      const updated = await prisma.siteSetting.update({
        where: { id: setting?.id || 1 },
        data: {
          whyTag: body.whyTag,
          whyTitle: body.whyTitle,
          whyHighlight: body.whyHighlight,
          whyDesc: body.whyDesc,
        },
      });
      return NextResponse.json({ success: true, sectionHeaders: updated });
    }

    const count = await prisma.whyUsPillar.count();
    const pillar = await prisma.whyUsPillar.create({
      data: {
        order: body.order !== undefined ? Number(body.order) : count + 1,
        icon: body.icon || 'ShieldCheck',
        titlePrefix: body.titlePrefix || '',
        titleHighlight: body.titleHighlight || '',
        desc: body.desc || '',
        points: typeof body.points === 'string' ? body.points : JSON.stringify(body.points || []),
        accentColor: body.accentColor || '#FBBF24',
        graphicType: body.graphicType || 'globe',
        ctaText: body.ctaText || 'Learn More',
        ctaUrl: body.ctaUrl || '#contact',
        isActive: body.isActive !== undefined ? Boolean(body.isActive) : true,
      },
    });

    return NextResponse.json({ success: true, pillar });
  } catch (error) {
    console.error('Create why-us pillar error:', error);
    return NextResponse.json({ success: false, error: 'Failed to create pillar' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const body = await request.json();

    // If updating section headers
    if (body.isHeaderUpdate) {
      const setting = await prisma.siteSetting.findFirst();
      const updated = await prisma.siteSetting.update({
        where: { id: setting?.id || 1 },
        data: {
          whyTag: body.whyTag,
          whyTitle: body.whyTitle,
          whyHighlight: body.whyHighlight,
          whyDesc: body.whyDesc,
        },
      });
      return NextResponse.json({ success: true, sectionHeaders: updated });
    }

    const { id, ...data } = body;
    if (data.points && typeof data.points !== 'string') {
      data.points = JSON.stringify(data.points);
    }
    if (data.order !== undefined) {
      data.order = Number(data.order);
    }
    if (data.isActive !== undefined) {
      data.isActive = Boolean(data.isActive);
    }

    const pillar = await prisma.whyUsPillar.update({
      where: { id: Number(id) },
      data,
    });

    return NextResponse.json({ success: true, pillar });
  } catch (error) {
    console.error('Update why-us pillar error:', error);
    return NextResponse.json({ success: false, error: 'Failed to update pillar' }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ success: false, error: 'ID is required' }, { status: 400 });

    await prisma.whyUsPillar.delete({ where: { id: Number(id) } });
    return NextResponse.json({ success: true, message: 'Pillar deleted' });
  } catch (error) {
    console.error('Delete why-us pillar error:', error);
    return NextResponse.json({ success: false, error: 'Failed to delete pillar' }, { status: 500 });
  }
}
