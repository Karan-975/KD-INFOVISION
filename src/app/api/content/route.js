import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
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
    ] = await Promise.all([
      prisma.siteSetting.findFirst(),
      prisma.heroSlide.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
      prisma.statCounter.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
      prisma.partner.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
      prisma.service.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
      prisma.industry.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
      prisma.caseStudy.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
      prisma.processStep.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
      prisma.testimonial.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
      prisma.insight.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
    ]);

    return NextResponse.json({
      success: true,
      data: {
        settings: settings || {
          siteName: 'KD INFOVISION',
          tagline: 'Data. AI. Digital Transformation.',
          email: 'hello@kdinfovision.com',
          phone: '+91 98765 43210',
          address: 'Bangalore & Mumbai, India',
          primaryColor: '#1B3A6B',
          accentColor: '#3D9BE9',
        },
        heroSlides,
        statCounters,
        partners,
        services,
        industries,
        caseStudies,
        processSteps,
        testimonials,
        insights,
      },
    });
  } catch (error) {
    console.error('Error fetching public content:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch content' }, { status: 500 });
  }
}
