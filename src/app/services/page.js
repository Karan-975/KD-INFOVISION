import prisma from '@/lib/prisma';
import Navbar from '@/components/public/Navbar';
import ServicesSection from '@/components/public/ServicesSection';
import ProcessSection from '@/components/public/ProcessSection';
import ContactSection from '@/components/public/ContactSection';
import Footer from '@/components/public/Footer';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Services & Tech Solutions | KD Infovision',
  description:
    'Explore our enterprise services across AI & Machine Learning, Data Analytics & BI, Software Engineering, Cloud Architecture, and Managed Services.',
};

export default async function ServicesPage() {
  const [settings, services, processSteps] = await Promise.all([
    prisma.siteSetting.findFirst(),
    prisma.service.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
    prisma.processStep.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
  ]);

  return (
    <main style={{ minHeight: '100vh', background: '#FFFFFF' }}>
      <Navbar settings={settings} />
      
      {/* Page Header Banner */}
      <div
        style={{
          paddingTop: '140px',
          paddingBottom: '60px',
          background: 'linear-gradient(135deg, #0F2347 0%, #1B3A6B 60%, #0D2B5E 100%)',
          color: '#FFFFFF',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="pulse-badge" style={{ margin: '0 auto 1.5rem auto' }}>
            <span className="pulse-dot" />
            Enterprise Solutions & Practice Areas
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.25rem)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2, marginBottom: '1.25rem' }}>
            What We Do: <span style={{ color: 'var(--blue)' }}>End-to-End Technology Solutions</span>
          </h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.65 }}>
            From high-throughput data engineering and predictive machine learning to modern web apps and managed cloud operations.
          </p>
        </div>
      </div>

      <ServicesSection services={services} />
      <ProcessSection processSteps={processSteps} />
      <ContactSection settings={settings} />
      <Footer settings={settings} />
    </main>
  );
}
