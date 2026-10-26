import prisma from '@/lib/prisma';
import Navbar from '@/components/public/Navbar';
import TeamComputersCaseStudiesView from '@/components/public/TeamComputersCaseStudiesView';
import PartnersMarquee from '@/components/public/PartnersMarquee';
import Footer from '@/components/public/Footer';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Case Studies & Enterprise Impact | KD Infovision',
  description:
    'Explore real-world case studies across BFSI, Retail, Healthcare, and Cloud Lakehouses demonstrating measurable ROI with KD Infovision architectures.',
};

export default async function CaseStudiesPage() {
  const [settings, caseStudies, partners] = await Promise.all([
    prisma.siteSetting.findFirst(),
    prisma.caseStudy.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
    prisma.partner.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
  ]);

  return (
    <main style={{ minHeight: '100vh', background: '#01162e' }}>
      <Navbar settings={settings} />

      {/* Team Computers Case Study System with Filters, Split Cards & Modal */}
      <TeamComputersCaseStudiesView
        settings={settings}
        caseStudies={caseStudies}
      />

      {/* Enterprise Tech Ecosystem Marquee */}
      <PartnersMarquee
        partners={partners}
        isDark={true}
        bgColor="#011224"
        borderColor="rgba(0, 133, 89, 0.25)"
      />

      {/* Footer */}
      <Footer settings={settings} />
    </main>
  );
}
