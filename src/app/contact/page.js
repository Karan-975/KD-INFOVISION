import prisma from '@/lib/prisma';
import Navbar from '@/components/public/Navbar';
import ContactSection from '@/components/public/ContactSection';
import Footer from '@/components/public/Footer';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Contact Us | Schedule Architecture Consultation — KD Infovision',
  description:
    'Connect with KD Infovision enterprise architects for cloud modernization, Power BI analytics, and production AI system feasibility.',
};

export default async function ContactPage() {
  const settings = await prisma.siteSetting.findFirst();

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
            START YOUR TRANSFORMATION
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
            Connect with Our <span style={{ color: 'var(--blue)' }}>Lead Architects</span>
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
            Schedule a technical feasibility assessment or discuss your upcoming Data Lakehouse, Cloud Migration, or AI modernization roadmap.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection settings={settings} />

      {/* Footer */}
      <Footer settings={settings} />
    </main>
  );
}
