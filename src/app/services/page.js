import prisma from '@/lib/prisma';
import Navbar from '@/components/public/Navbar';
import ServicesSection from '@/components/public/ServicesSection';
import PartnersMarquee from '@/components/public/PartnersMarquee';
import ProcessSection from '@/components/public/ProcessSection';
import ContactSection from '@/components/public/ContactSection';
import Footer from '@/components/public/Footer';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Services & Practice Areas | KD Infovision — Enterprise IT Solutions',
  description:
    'Explore our enterprise services across Data & AI, Cloud & Infrastructure, Software & Digital Engineering, and Enterprise Managed Services.',
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
            End-to-End <span style={{ color: 'var(--blue)' }}>Enterprise Technology</span> Practices
          </h1>
          <p
            style={{
              maxWidth: '660px',
              margin: '0 auto',
              fontSize: '1.05rem',
              color: 'rgba(255, 255, 255, 0.75)',
              lineHeight: 1.7,
            }}
          >
            From modern cloud lakehouses and real-time streaming architectures to production AI pipelines and 24/7 managed infrastructure.
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
