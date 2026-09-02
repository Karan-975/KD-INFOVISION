import { NextResponse } from 'next/server';
import { getAdminUserFromRequest } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const [
      settings,
      heroSlides,
      statCounters,
      partners,
      services,
      industries,
      caseStudies,
      processSteps,
      testimonials,
      insights,
      inquiries,
    ] = await Promise.all([
      prisma.siteSetting.findMany(),
      prisma.heroSlide.findMany(),
      prisma.statCounter.findMany(),
      prisma.partner.findMany(),
      prisma.service.findMany(),
      prisma.industry.findMany(),
      prisma.caseStudy.findMany(),
      prisma.processStep.findMany(),
      prisma.testimonial.findMany(),
      prisma.insight.findMany(),
      prisma.inquiry.findMany(),
    ]);

    const backupData = {
      exportedAt: new Date().toISOString(),
      version: '1.0',
      database: 'MySQL',
      data: {
        settings,
        heroSlides,
        statCounters,
        partners,
        services,
        industries,
        caseStudies,
        processSteps,
        testimonials,
        insights,
        inquiries,
      },
    };

    return new Response(JSON.stringify(backupData, null, 2), {
      headers: {
        'Content-Type': 'application/json',
        'Content-Disposition': `attachment; filename=kd_infovision_backup_${new Date().toISOString().split('T')[0]}.json`,
      },
    });
  } catch (error) {
    console.error('Backup error:', error);
    return NextResponse.json({ success: false, error: 'Failed to create backup' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const { data } = await request.json();
    if (!data) {
      return NextResponse.json({ success: false, error: 'Invalid backup format' }, { status: 400 });
    }

    // Restore settings
    if (data.settings && data.settings.length > 0) {
      const setting = data.settings[0];
      const existing = await prisma.siteSetting.findFirst();
      if (existing) {
        await prisma.siteSetting.update({
          where: { id: existing.id },
          data: {
            siteName: setting.siteName,
            tagline: setting.tagline,
            logoUrl: setting.logoUrl,
            email: setting.email,
            phone: setting.phone,
            address: setting.address,
            primaryColor: setting.primaryColor,
            accentColor: setting.accentColor,
            metaTitle: setting.metaTitle,
            metaDesc: setting.metaDesc,
          },
        });
      }
    }

    return NextResponse.json({ success: true, message: 'Backup restored successfully' });
  } catch (error) {
    console.error('Restore error:', error);
    return NextResponse.json({ success: false, error: 'Failed to restore backup' }, { status: 500 });
  }
}
