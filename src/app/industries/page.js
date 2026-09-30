import prisma from '@/lib/prisma';
import Navbar from '@/components/public/Navbar';
import TeamComputersIndustriesView from '@/components/public/TeamComputersIndustriesView';
import PartnersMarquee from '@/components/public/PartnersMarquee';
import Footer from '@/components/public/Footer';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Industries We Serve | KD Infovision',
  description:
    'Tailored enterprise technology solutions for Banking & BFSI, Manufacturing & Smart OT, Healthcare & Life Sciences, Retail, Logistics, and High-Tech GCCs.',
};

export default async function IndustriesPage() {
  const [settings, industries, partners] = await Promise.all([
    prisma.siteSetting.findFirst(),
    prisma.industry.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
    prisma.partner.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
  ]);

  return (
    <main style={{ minHeight: '100vh', background: '#000000' }}>
      <Navbar settings={settings} />

      {/* Team Computers Industry Domain Hub with Sector Cockpit & Matrix */}
      <TeamComputersIndustriesView
        settings={settings}
        industries={industries}
      />

      {/* Enterprise Technology Partners Ecosystem Marquee */}
      <PartnersMarquee partners={partners} isDark={true} />

      {/* Corporate Footer */}
      <Footer settings={settings} />
    </main>
  );
}
