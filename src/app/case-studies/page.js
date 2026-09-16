import prisma from '@/lib/prisma';
import Navbar from '@/components/public/Navbar';
import CaseStudiesSection from '@/components/public/CaseStudiesSection';
import ClientsMarquee from '@/components/public/ClientsMarquee';
import TestimonialsSection from '@/components/public/TestimonialsSection';
import ContactSection from '@/components/public/ContactSection';
import Footer from '@/components/public/Footer';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Case Studies & Enterprise Impact | KD Infovision',
  description:
    'Explore real-world case studies across BFSI, Retail, Healthcare, and Logistics demonstrating measurable ROI with KD Infovision architectures.',
};

export default async function CaseStudiesPage() {
  const [settings, caseStudies, testimonials] = await Promise.all([
    prisma.siteSetting.findFirst(),
    prisma.caseStudy.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
    prisma.testimonial.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
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
            PROVEN ENTERPRISE OUTCOMES
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
            Real Architectures. <span style={{ color: 'var(--blue)' }}>Quantifiable ROI.</span>
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
            Explore how enterprise clients accelerate reporting speed by 60%, improve demand forecast precision by 3.2×, and achieve 99.9% uptime with our systems.
          </p>
        </div>
      </div>

      {/* Case Studies Grid */}
      <CaseStudiesSection caseStudies={caseStudies} />

      {/* Client Logos Marquee */}
      <ClientsMarquee />

      {/* Testimonials */}
      <TestimonialsSection testimonials={testimonials} />

      {/* Contact & Footer */}
      <ContactSection settings={settings} />
      <Footer settings={settings} />
    </main>
  );
}
