import prisma from '@/lib/prisma';
import Navbar from '@/components/public/Navbar';
import TeamComputersServicesView from '@/components/public/TeamComputersServicesView';
import PartnersMarquee from '@/components/public/PartnersMarquee';
import Footer from '@/components/public/Footer';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Enterprise Data, AI & Digital Solutions | KD Infovision',
  description:
    'Explore bespoke enterprise infrastructure solutions across Data & Analytics, Data Engineering, Agentic AI, Power BI, Snowflake, Databricks, and Strategic Technology Consulting.',
};

export default async function ServicesPage() {
  const [settings, services, partners, caseStudies] = await Promise.all([
    prisma.siteSetting.findFirst(),
    prisma.service.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
    prisma.partner.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
    prisma.caseStudy.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
  ]);

  return (
    <main style={{ minHeight: '100vh', background: '#000000' }}>
      <Navbar settings={settings} />

      {/* Full Team Computers Replica View with KD Infovision Content */}
      <TeamComputersServicesView
        settings={settings}
        services={services}
        partners={partners}
        caseStudies={caseStudies}
      />

      {/* Enterprise Partner Technology Ecosystem */}
      <PartnersMarquee partners={partners} isDark={true} />

      {/* Polished Corporate Footer */}
      <Footer settings={settings} />
    </main>
  );
}
