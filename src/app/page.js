import prisma from '@/lib/prisma';
import Navbar from '@/components/public/Navbar';
import HeroSection from '@/components/public/HeroSection';
import PartnersMarquee from '@/components/public/PartnersMarquee';
import AboutSection from '@/components/public/AboutSection';
import ServicesSection from '@/components/public/ServicesSection';
import IndustriesSection from '@/components/public/IndustriesSection';
import WhyUsSection from '@/components/public/WhyUsSection';
import CaseStudiesSection from '@/components/public/CaseStudiesSection';
import ClientsMarquee from '@/components/public/ClientsMarquee';
import ContactSection from '@/components/public/ContactSection';
import Footer from '@/components/public/Footer';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const [
    settings,
    heroSlides,
    statCounters,
    partners,
    services,
    industries,
    caseStudies,
  ] = await Promise.all([
    prisma.siteSetting.findFirst(),
    prisma.heroSlide.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
    prisma.statCounter.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
    prisma.partner.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
    prisma.service.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
    prisma.industry.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
    prisma.caseStudy.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
  ]);

  return (
    <main style={{ minHeight: '100vh', background: '#01162e' }}>
      <Navbar settings={settings} />
      
      {/* Dynamic 3-Slide Hero Carousel with Realistic Photography & Multi-Color Accents */}
      <HeroSection slides={heroSlides} />

      {/* Technology Partners Marquee */}
      <PartnersMarquee
        partners={partners}
        isDark={true}
        bgColor="#011224"
        borderColor="rgba(255, 255, 255, 0.08)"
      />

      {/* About Us / Our Story with Team Photo & 4 Metric Counters */}
      <AboutSection statCounters={statCounters} />

      {/* Explore Our Tech Solutions (4 Clean Practice Cards) */}
      <ServicesSection services={services} />

      {/* Industry Reach & Domain Specialization */}
      <IndustriesSection industries={industries} />

      {/* Engineering Excellence & Why Us */}
      <WhyUsSection />

      {/* Featured Proven Enterprise Case Studies */}
      <CaseStudiesSection caseStudies={caseStudies.slice(0, 3)} />

      {/* Client Enterprise Trust Marquee */}
      <ClientsMarquee
        isDark={true}
        bgColor="#011224"
        borderColor="rgba(255, 255, 255, 0.08)"
      />

      {/* Architecture Consultation Contact Form */}
      <ContactSection settings={settings} />

      {/* Polished Corporate Footer */}
      <Footer settings={settings} />
    </main>
  );
}
