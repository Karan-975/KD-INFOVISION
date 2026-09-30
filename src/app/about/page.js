import prisma from '@/lib/prisma';
import Navbar from '@/components/public/Navbar';
import TeamComputersAboutView from '@/components/public/TeamComputersAboutView';
import PartnersMarquee from '@/components/public/PartnersMarquee';
import Footer from '@/components/public/Footer';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'About Us | KD Infovision — Consulting | Outsourcing | Digital',
  description:
    'KD Infovision is a trusted strategic partner for tailored end-to-end Data, BI, and Artificial Intelligence solutions. Learn about our vision, core values, journey, and scale.',
};

export default async function AboutPage() {
  const [settings, statCounters, partners] = await Promise.all([
    prisma.siteSetting.findFirst(),
    prisma.statCounter.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
    prisma.partner.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
  ]);

  return (
    <main style={{ minHeight: '100vh', background: '#000000' }}>
      <Navbar settings={settings} />

      {/* Exact Replica of Team Computers About Company View with KD Infovision Content */}
      <TeamComputersAboutView
        settings={settings}
        statCounters={statCounters}
      />

      {/* Technology Ecosystem Marquee */}
      <PartnersMarquee partners={partners} isDark={true} />

      {/* Corporate Footer */}
      <Footer settings={settings} />
    </main>
  );
}
