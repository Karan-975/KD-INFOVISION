import prisma from '@/lib/prisma';
import Navbar from '@/components/public/Navbar';
import AboutSection from '@/components/public/AboutSection';
import ProcessSection from '@/components/public/ProcessSection';
import TestimonialsSection from '@/components/public/TestimonialsSection';
import ContactSection from '@/components/public/ContactSection';
import Footer from '@/components/public/Footer';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'About Us | KD Infovision — Enterprise Technology & AI Partner',
  description:
    'Learn about KD Infovision, our enterprise engineering culture, leadership team, and track record in delivering scalable Data, Cloud, and AI architectures.',
};

export default async function AboutPage() {
  const [settings, statCounters, processSteps, testimonials] = await Promise.all([
    prisma.siteSetting.findFirst(),
    prisma.statCounter.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
    prisma.processStep.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
    prisma.testimonial.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
  ]);

  return (
    <main style={{ minHeight: '100vh', background: '#FFFFFF' }}>
      <Navbar settings={settings} />

      {/* Hero Page Header */}
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
            Pioneering Enterprise <span style={{ color: 'var(--blue)' }}>Data &amp; AI</span> Excellence
          </h1>
          <p
            style={{
              maxWidth: '640px',
              margin: '0 auto',
              fontSize: '1.05rem',
              color: 'rgba(255, 255, 255, 0.75)',
              lineHeight: 1.7,
            }}
          >
            Bridging complex raw enterprise datasets into actionable C-suite intelligence with scalable architectures and zero vendor lock-in.
          </p>
        </div>
      </div>

      {/* About Section with Team Photo and Counters */}
      <AboutSection statCounters={statCounters} />

      {/* Engineering Delivery Process */}
      <ProcessSection processSteps={processSteps} />

      {/* Client Testimonials */}
      <TestimonialsSection testimonials={testimonials} />

      {/* Contact Section & Footer */}
      <ContactSection settings={settings} />
      <Footer settings={settings} />
    </main>
  );
}
