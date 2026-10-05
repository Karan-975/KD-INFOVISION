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
    <main style={{ minHeight: '100vh', background: '#040612', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
      <Navbar settings={settings} />

      {/* Page Header Banner with Reference Image-3 Ambient Glows (Left Violet/Purple Glow + Right Teal/Cyan Glow + Subtle Binary Overlay) */}
      <div
        style={{
          paddingTop: '160px',
          paddingBottom: '50px',
          background: '#040612',
          color: '#FFFFFF',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Left Violet/Purple Aurora Glow (matching Image 3 circled area) */}
        <div
          style={{
            position: 'absolute',
            top: '5%',
            left: '-12%',
            width: '650px',
            height: '650px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.32) 0%, rgba(124, 58, 237, 0.16) 40%, transparent 70%)',
            filter: 'blur(55px)',
            pointerEvents: 'none',
          }}
        />

        {/* Right Teal/Cyan/Emerald Aurora Glow (matching Image 3 circled area) */}
        <div
          style={{
            position: 'absolute',
            top: '8%',
            right: '-12%',
            width: '650px',
            height: '650px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.28) 0%, rgba(6, 182, 212, 0.16) 40%, transparent 70%)',
            filter: 'blur(55px)',
            pointerEvents: 'none',
          }}
        />

        {/* Subtle Decorative Binary Floating Digits (0 1 0 1) matching Image 3 */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
            pointerEvents: 'none',
            opacity: 0.14,
            userSelect: 'none',
          }}
        >
          {/* Left subtle binary stream */}
          <div
            style={{
              position: 'absolute',
              left: '9%',
              top: '25%',
              fontFamily: 'monospace',
              fontSize: '32px',
              fontWeight: 800,
              color: '#A78BFA',
              letterSpacing: '10px',
              lineHeight: 1.8,
            }}
          >
            0 1 0<br />1 0 1
          </div>
          {/* Right subtle binary stream */}
          <div
            style={{
              position: 'absolute',
              right: '9%',
              top: '22%',
              fontFamily: 'monospace',
              fontSize: '34px',
              fontWeight: 800,
              color: '#34D399',
              letterSpacing: '12px',
              lineHeight: 1.8,
            }}
          >
            1 0 1<br />0 1 0
          </div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Overline Badge */}
          <div
            style={{
              fontSize: '0.85rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: '#9DA8FB',
              marginBottom: '0.85rem',
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            HAPPY TO ASSIST YOU
          </div>

          {/* Headline matching Image 3 Soft Lavender-Purple Gradient Accent */}
          <h1
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 'clamp(2.4rem, 4.4vw, 3.8rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.15,
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
            }}
          >
            Get in Touch &amp;{' '}
            <span
              style={{
                background: 'linear-gradient(259.44deg, #9DA8FB 25.03%, #9266FD 90.57%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Drop Us a Line
            </span>
          </h1>

          <p
            style={{
              maxWidth: '680px',
              margin: '0 auto',
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.78)',
              lineHeight: 1.7,
            }}
          >
            Because you deserve to work with the best! Let&apos;s start exploring your Data &amp; Analytics journey with KD Infovision.
          </p>
        </div>
      </div>

      {/* Contact Section implementing the exact Image-2 form and Image-3 background lighting */}
      <ContactSection settings={settings} />

      {/* Footer */}
      <Footer settings={settings} />
    </main>
  );
}
