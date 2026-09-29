import prisma from '@/lib/prisma';
import Navbar from '@/components/public/Navbar';
import ContactSection from '@/components/public/ContactSection';
import Footer from '@/components/public/Footer';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Contact Us | Happy To Assist You — KD Infovision',
  description:
    'Get in touch & drop us a line because you deserve to work with the best! Connect with KD Infovision for Data & Analytics, AI, and Consulting solutions.',
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
              fontSize: '0.875rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              color: 'var(--blue)',
              marginBottom: '0.75rem',
            }}
          >
            Happy To Assist You
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
            Get in Touch &amp; <span style={{ color: 'var(--blue)' }}>Drop Us a Line</span>
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
            Because you deserve to work with the best! Let's start exploring your Data &amp; Analytics journey with KD Infovision.
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
