import prisma from '@/lib/prisma';
import Navbar from '@/components/public/Navbar';
import HeroSection from '@/components/public/HeroSection';
import AboutSection from '@/components/public/AboutSection';
import PartnersMarquee from '@/components/public/PartnersMarquee';
import WhyUsSection from '@/components/public/WhyUsSection';
import ServicesSection from '@/components/public/ServicesSection';
import IndustriesSection from '@/components/public/IndustriesSection';
import CaseStudiesSection from '@/components/public/CaseStudiesSection';
import ProcessSection from '@/components/public/ProcessSection';
import TestimonialsSection from '@/components/public/TestimonialsSection';
import ClientsMarquee from '@/components/public/ClientsMarquee';
import InsightsSection from '@/components/public/InsightsSection';
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
    processSteps,
    testimonials,
    insights,
  ] = await Promise.all([
    prisma.siteSetting.findFirst(),
    prisma.heroSlide.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
    prisma.statCounter.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
    prisma.partner.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
    prisma.service.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
    prisma.industry.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
    prisma.caseStudy.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
    prisma.processStep.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
    prisma.testimonial.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
    prisma.insight.findMany({ where: { isActive: true }, orderBy: { order: 'asc' } }),
  ]);

  return (
    <main style={{ minHeight: '100vh', background: '#FFFFFF' }}>
      <Navbar settings={settings} />
      <HeroSection slides={heroSlides} />
      <AboutSection statCounters={statCounters} />
      <PartnersMarquee partners={partners} />
      <WhyUsSection />
      <ServicesSection services={services} />
      <IndustriesSection industries={industries} />
      <CaseStudiesSection caseStudies={caseStudies} />
      <ProcessSection processSteps={processSteps} />
      <TestimonialsSection testimonials={testimonials} />
      <ClientsMarquee />
      <InsightsSection insights={insights} />
      <ContactSection settings={settings} />
      <Footer settings={settings} />
    </main>
  );
}
