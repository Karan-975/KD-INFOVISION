import prisma from '@/lib/prisma';
import Navbar from '@/components/public/Navbar';
import ServicesSection from '@/components/public/ServicesSection';
import PartnersMarquee from '@/components/public/PartnersMarquee';
import ProcessSection from '@/components/public/ProcessSection';
import ContactSection from '@/components/public/ContactSection';
import Footer from '@/components/public/Footer';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Services & Capabilities | KD Infovision — Consulting | Outsourcing | Digital',
  description:
    'Explore KD Infovision capabilities across Data & Analytics, Data Engineering, Agentic AI, Snowflake, Databricks, AWS, Power BI, and Management Consulting.',
};

export default async function ServicesPage() {
  const [settings, services, partners, processSteps] = await Promise.all([
    prisma.siteSetting.findFirst(),
    prisma.service.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
    prisma.partner.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
    prisma.processStep.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
  ]);

  return (
    <main style={{ minHeight: '100vh', background: '#FFFFFF' }}>
      <Navbar settings={settings} />

      {/* Page Header Banner */}
      <div
        style={{
          paddingTop: '140px',
          paddingBottom: '70px',
          background: 'linear-gradient(135deg, #052D5D 0%, #032042 100%)',
          color: '#FFFFFF',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div className="container">
          <div
            style={{
              fontSize: '0.875rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              color: 'var(--blue)',
              marginBottom: '0.75rem',
            }}
          >
            Our Capabilities
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.4rem, 4vw, 3.5rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.18,
              marginBottom: '1.25rem',
            }}
          >
            With Our Expertise, We Make Your Work <span style={{ color: 'var(--blue)' }}>Easier and Faster</span>
          </h1>
          <p
            style={{
              maxWidth: '680px',
              margin: '0 auto',
              fontSize: '1.05rem',
              color: 'rgba(255, 255, 255, 0.78)',
              lineHeight: 1.7,
            }}
          >
            From Data &amp; Analytics and Data Engineering to Agentic AI, BI Visualization, and Strategic Management Consulting.
          </p>
        </div>
      </div>

      {/* Partner Marquee */}
      <PartnersMarquee partners={partners} />

      {/* Services Practices Grid */}
      <ServicesSection services={services} />

      {/* Delivery Process */}
      <ProcessSection processSteps={processSteps} />

      {/* Contact Section & Footer */}
      <ContactSection settings={settings} />
      <Footer settings={settings} />
    </main>
  );
}
