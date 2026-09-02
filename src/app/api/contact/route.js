import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const inquiry = await prisma.inquiry.create({
      data: {
        name: name.trim(),
        company: company ? company.trim() : null,
        email: email.trim().toLowerCase(),
        phone: phone ? phone.trim() : null,
        service: service || 'General Inquiry',
        message: message.trim(),
        status: 'NEW',
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you for reaching out! Our team will get back to you shortly.',
      inquiryId: inquiry.id,
    });
  } catch (error) {
    console.error('Error creating inquiry:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit message. Please try again.' },
      { status: 500 }
    );
  }
}
