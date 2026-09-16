import prisma from '@/lib/prisma';
import Navbar from '@/components/public/Navbar';
import IndustriesSection from '@/components/public/IndustriesSection';
import CaseStudiesSection from '@/components/public/CaseStudiesSection';
import ContactSection from '@/components/public/ContactSection';
import Footer from '@/components/public/Footer';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Industries We Serve | KD Infovision',
  description:
    'Tailored enterprise technology solutions for Banking, Healthcare, Retail, Manufacturing, Logistics, and High-Tech.',
};

export default async function IndustriesPage() {
  const [settings, industries, caseStudies] = await Promise.all([
    prisma.siteSetting.findFirst(),
    prisma.industry.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
    prisma.caseStudy.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
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
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '30px',
              background: 'rgba(21, 138, 226, 0.15)',
              border: '1px solid rgba(21, 138, 226, 0.3)',
              color: 'var(--blue)',
              fontSize: '0.785rem',
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}
          >
            SOLUTIONS ACROSS SECTORS
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
            Deep Vertical &amp; <span style={{ color: 'var(--blue)' }}>Industry Domain Reach</span>
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
            Purpose-built compliance, telemetry, and analytics architectures engineered to meet rigorous regulatory standards across sectors.
          </p>
        </div>
      </div>

      {/* Industries Section */}
      <IndustriesSection industries={industries} />

      {/* Associated Case Studies */}
      <CaseStudiesSection caseStudies={caseStudies} />

      {/* Contact & Footer */}
      <ContactSection settings={settings} />
      <Footer settings={settings} />
    </main>
  );
}
