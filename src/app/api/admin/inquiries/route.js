import { NextResponse } from 'next/server';
import { getAdminUserFromRequest } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const { searchParams } = new URL(request.url);
    const exportFormat = searchParams.get('export');

    const inquiries = await prisma.inquiry.findMany({
      orderBy: { createdAt: 'desc' },
    });

    if (exportFormat === 'csv') {
      const headers = ['ID', 'Date', 'Name', 'Company', 'Email', 'Phone', 'Service', 'Message', 'Status'];
      const rows = inquiries.map((inq) => [
        inq.id,
        new Date(inq.createdAt).toISOString().split('T')[0],
        `"${(inq.name || '').replace(/"/g, '""')}"`,
        `"${(inq.company || '').replace(/"/g, '""')}"`,
        `"${(inq.email || '').replace(/"/g, '""')}"`,
        `"${(inq.phone || '').replace(/"/g, '""')}"`,
        `"${(inq.service || '').replace(/"/g, '""')}"`,
        `"${(inq.message || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`,
        inq.status,
      ]);

      const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');

      return new Response(csvContent, {
        headers: {
          'Content-Type': 'text/csv; charset=utf-8',
          'Content-Disposition': `attachment; filename=kd_infovision_inquiries_${new Date().toISOString().split('T')[0]}.csv`,
        },
      });
    }

    return NextResponse.json({ success: true, inquiries });
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch inquiries' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const { id, status } = await request.json();
    if (!id || !status) {
      return NextResponse.json({ success: false, error: 'ID and Status are required' }, { status: 400 });
    }

    const inquiry = await prisma.inquiry.update({
      where: { id: Number(id) },
      data: { status },
    });

    return NextResponse.json({ success: true, inquiry });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update inquiry' }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const user = getAdminUserFromRequest(request);
    if (!user) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ success: false, error: 'ID is required' }, { status: 400 });

    await prisma.inquiry.delete({ where: { id: Number(id) } });
    return NextResponse.json({ success: true, message: 'Inquiry deleted' });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to delete inquiry' }, { status: 500 });
  }
}
