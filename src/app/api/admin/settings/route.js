import { NextResponse } from 'next/server';
import { getAdminUserFromRequest } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const settings = await prisma.siteSetting.findFirst();
    return NextResponse.json({ success: true, settings });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch settings' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const body = await request.json();
    let settings = await prisma.siteSetting.findFirst();

    if (settings) {
      settings = await prisma.siteSetting.update({
        where: { id: settings.id },
        data: {
          siteName: body.siteName,
          tagline: body.tagline,
          logoUrl: body.logoUrl,
          email: body.email,
          phone: body.phone,
          address: body.address,
          primaryColor: body.primaryColor,
          accentColor: body.accentColor,
          metaTitle: body.metaTitle,
          metaDesc: body.metaDesc,
          socialLinkedin: body.socialLinkedin,
          socialTwitter: body.socialTwitter,
          socialGithub: body.socialGithub,
        },
      });
    } else {
      settings = await prisma.siteSetting.create({ data: body });
    }

    return NextResponse.json({ success: true, settings });
  } catch (error) {
    console.error('Settings update error:', error);
    return NextResponse.json({ success: false, error: 'Failed to update settings' }, { status: 500 });
  }
}
