'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BarChart3,
  Layers,
  BrainCircuit,
  ShieldCheck,
  TrendingUp,
  Server,
  Zap,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  X,
  Sparkles,
  Database,
  Cloud,
  Code2,
  Cpu,
} from 'lucide-react';

export default function TeamComputersServicesView({
  settings,
  services = [],
  partners = [],
  caseStudies = [],
}) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeServiceModal, setActiveServiceModal] = useState(null);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'Data & Analytics',
    message: '',
  });

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          subject: `Service Inquiry: ${formData.service}`,
          message: formData.message || `Request for consultation on ${formData.service}`,
        }),
      });
      if (res.ok) {
        setContactSubmitted(true);
        setFormData({ fullName: '', email: '', phone: '', service: 'Data & Analytics', message: '' });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Why Choose Us / Expertise Cards matching Team Computers layout
  const whyChoosePillars = [
    {
      title: 'Enhanced Efficiency & Productivity',
      icon: TrendingUp,
      desc: 'Our enterprise data services streamline complex pipelines, eliminate manual reporting bottlenecks, and optimize query speeds—delivering sub-second insight latency.',
    },
    {
      title: 'Advanced Security & Governance',
      icon: ShieldCheck,
      desc: 'Zero-trust cloud architecture, granular role-based access controls (RBAC), and continuous regulatory compliance across SOC2, HIPAA, and GDPR standards.',
    },
    {
      title: 'Future-Ready Scalability',
      icon: Sparkles,
      desc: 'Architectures engineered on modern Lakehouse patterns with Snowflake, Databricks, and AWS, primed to seamlessly host autonomous Agentic AI and LLM workloads.',
    },
    {
      title: 'Full Lifecycle Data Engineering',
      icon: Layers,
      desc: 'Comprehensive oversight from multi-source ingestion and automated schema validation to real-time feature stores and executive BI cockpit deployment.',
    },
    {
      title: 'Optimized Compute & Cloud FinOps',
      icon: Zap,
      desc: 'Rigorous FinOps strategies that right-size cluster provisioning, eliminate runaway warehouse costs, and maximize ROI on every cloud data dollar.',
    },
    {
      title: '24/7 Proactive Monitoring & SLA Delivery',
      icon: Server,
      desc: 'Continuous pipeline telemetry, automated anomaly alerts, and dedicated senior engineers ensuring uninterrupted 99.9% uptime for business-critical operations.',
    },
  ];

  // Default images for the 8 bespoke solutions
  const serviceImages = [
    '/images/service_analytics_real.jpg',
    '/images/service_cloud_real.jpg',
    '/images/service_software_real.jpg',
    '/images/hero_realistic_analytics.jpg',
    '/images/about_enterprise_team.jpg',
    '/images/hero_enterprise_tech.jpg',
    '/images/service_analytics_real.jpg',
    '/images/service_cloud_real.jpg',
  ];

  // Frequently Asked Questions
  const faqs = [
    {
      q: 'How can KD Infovision solutions benefit my enterprise?',
      a: 'KD Infovision provides end-to-end data and digital engineering solutions that turn fragmented enterprise data into automated, real-time intelligence. We modernize legacy data warehouses, deploy self-service BI cockpits on Power BI and Tableau, and integrate autonomous AI agents—reducing decision latency by up to 65% while cutting operational costs.',
    },
    {
      q: 'What cloud platforms and modern data stacks do you specialize in?',
      a: 'We specialize in leading enterprise platforms including Snowflake, Databricks, Microsoft Azure, Amazon Web Services (AWS), Google Cloud Platform (GCP), Power BI, Tableau, Domo, Apache Kafka, and custom Python/R data science ecosystems.',
    },
    {
      q: 'Do you provide on-demand certified staff augmentation and consulting?',
      a: 'Yes. Through the KDI Framework, we deploy certified data engineers, solution architects, AI specialists, and Power BI developers to seamlessly integrate into your existing teams, adhering strictly to global delivery standards and rigorous SLAs.',
    },
    {
      q: 'How does KD Infovision guarantee data security and compliance?',
      a: 'Security is embedded at every layer. We design zero-trust data architectures with end-to-end encryption in transit and at rest, fine-grained access policies, data masking, and automated audit logging complying with SOC2, GDPR, and HIPAA.',
    },
    {
      q: 'What is the typical timeline and engagement model for a project?',
      a: 'We offer flexible engagement models including fixed-scope milestone delivery, dedicated engineering squads, and time & materials consulting. Quick-start discovery audits and architecture blueprints typically take 1 to 2 weeks, while full enterprise transformations follow an agile, sprint-based delivery roadmap.',
    },
  ];

  const phone = settings?.phone || '+91 9820536031';
  const email = settings?.email || 'admin@kdinfovision.com';

  return (
    <>
      {/* 1. HERO BANNER: Team Computers style (solution-banner-outer) */}
      <section
        className="solution-banner-outer"
        style={{
          position: 'relative',
          paddingTop: '150px',
          paddingBottom: '90px',
          background: 'linear-gradient(135deg, #02122B 0%, #032042 55%, #052D5D 100%)',
          color: '#FFFFFF',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        {/* Subtle Tech Grid Lines Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(rgba(21, 138, 226, 0.15) 1px, transparent 1px), radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 20px 20px',
            opacity: 0.6,
            pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.85rem',
              color: 'rgba(255, 255, 255, 0.65)',
              marginBottom: '1.5rem',
            }}
          >
            <Link href="/" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none' }}>
              Home
            </Link>
            <span>/</span>
            <span style={{ color: '#38BDF8', fontWeight: 600 }}>Services &amp; Capabilities</span>
          </nav>

          <div style={{ maxWidth: '880px' }}>
            {/* Dual-Tone Gradient H1 (Team Computers signature styling) */}
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.4rem, 4.2vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                marginBottom: '1.25rem',
                background: 'linear-gradient(259.44deg, #FFEEC8 25%, #FFFA65 55%, #FFFFFF 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Enterprise Data, AI &amp; Digital Solutions for the Modern Age
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.1rem, 1.3vw, 1.25rem)',
                lineHeight: 1.7,
                color: 'rgba(255, 255, 255, 0.88)',
                marginBottom: '2rem',
                maxWidth: '750px',
              }}
            >
              One strategic partner delivering secure end-to-end data lakehouses, Agentic AI systems, Power BI cockpits, and full-lifecycle technology consulting.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a
                href="#cta"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#158AE2',
                  color: '#FFFFFF',
                  borderRadius: '9999px',
                  padding: '0.8rem 2.2rem',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: '0 4px 18px rgba(21, 138, 226, 0.45)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0D7CD4';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#158AE2';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>Get a Free Architecture Audit</span>
                <ArrowRight size={17} />
              </a>

              <a
                href="#solutions"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                  borderRadius: '9999px',
                  border: '1.5px solid rgba(255, 255, 255, 0.3)',
                  padding: '0.8rem 2rem',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.18)';
                  e.currentTarget.style.borderColor = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }}
              >
                <span>Explore Bespoke Solutions</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FUEL INNOVATION OVERVIEW: (fule-innovation-outer) */}
      <section
        style={{
          padding: '85px 0',
          background: '#031838',
          color: '#FFFFFF',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <div
              style={{
                fontSize: '0.8rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: '#38BDF8',
                marginBottom: '0.75rem',
              }}
            >
              Enterprise Architecture That Scales
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 3.4vw, 2.85rem)',
                fontWeight: 800,
                lineHeight: 1.25,
                color: '#FFFFFF',
                marginBottom: '1.25rem',
              }}
            >
              Solutions that Power Modern, <br />
              <span style={{ color: '#38BDF8' }}>Always-On Intelligent Enterprises</span>
            </h2>

            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: 'rgba(255, 255, 255, 0.85)',
                marginBottom: '2.5rem',
              }}
            >
              Modern enterprises run on resilient data &amp; engineering foundations. KD Infovision delivers secure cloud lakehouses, automated data pipelines, autonomous Agentic AI workflows, and executive visual cockpits—engineered to keep your business agile and always ahead. One trusted partner for every layer. Zero data silos. Maximum performance.
            </p>

            {/* 4 Metric Impact Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.5rem',
                marginTop: '3rem',
              }}
            >
              {[
                { val: '100+', label: 'Enterprise Deliveries', highlight: '#38BDF8' },
                { val: '99.9%', label: 'Pipeline Reliability', highlight: '#10B981' },
                { val: '32ms', label: 'Real-Time Query Latency', highlight: '#F59E0B' },
                { val: '60%', label: 'Certified Talent Pool', highlight: '#8B5CF6' },
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '14px',
                    padding: '1.5rem 1rem',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '2.4rem',
                      fontWeight: 800,
                      color: stat.highlight,
                      marginBottom: '0.35rem',
                    }}
                  >
                    {stat.val}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#CBD5E1', fontWeight: 600 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE SECTION: (our-experties-outer) */}
      <section
        style={{
          padding: '95px 0',
          background: '#F8FAFC',
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                fontWeight: 800,
                color: 'var(--navy)',
                marginBottom: '0.75rem',
              }}
            >
              Why Choose KD Infovision?
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#64748B', lineHeight: 1.6 }}>
              Your Go-To Strategic Partner for Scalable Data, Cloud &amp; AI Infrastructure
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {whyChoosePillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={idx}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '16px',
                    padding: '2.2rem 1.8rem',
                    boxShadow: '0 4px 20px rgba(5, 45, 93, 0.04)',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 16px 36px rgba(5, 45, 93, 0.12)';
                    e.currentTarget.style.borderColor = 'var(--blue)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(5, 45, 93, 0.04)';
                    e.currentTarget.style.borderColor = '#E2E8F0';
                  }}
                >
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '12px',
                      backgroundColor: 'var(--blue-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem',
                      color: 'var(--blue)',
                    }}
                  >
                    <PillarIcon size={26} strokeWidth={2.2} />
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: 'var(--navy)',
                      marginBottom: '0.75rem',
                      lineHeight: 1.35,
                    }}
                  >
                    {pillar.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.925rem',
                      lineHeight: 1.65,
                      color: '#475569',
                      margin: 0,
                    }}
                  >
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. BESPOKE SOLUTIONS GRID: (our-solutions solution-page-solution) */}
      <section
        id="solutions"
        style={{
          padding: '100px 0',
          background: '#02122B',
          color: '#FFFFFF',
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 60px' }}>
            <div
              style={{
                fontSize: '0.8rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: '#38BDF8',
                marginBottom: '0.75rem',
              }}
            >
              Tailored Delivery
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.1rem, 3.4vw, 2.9rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                marginBottom: '0.85rem',
              }}
            >
              Bespoke Data &amp; Digital Infrastructure Solutions
            </h2>

            <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.78)', lineHeight: 1.7 }}>
              No jargon, no hassle, just smart, scalable enterprise solutions engineered to meet your business goals, so you can focus on driving growth.
            </p>
          </div>

          {/* 4-Column Responsive Card Grid matching Team Computers layout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {services.map((srv, idx) => {
              const bgImg = serviceImages[idx % serviceImages.length];
              return (
                <div
                  key={srv.id}
                  style={{
                    position: 'relative',
                    height: '460px',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    backgroundColor: '#032042',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={(e) => {
                    const img = e.currentTarget.querySelector('img');
                    if (img) img.style.transform = 'scale(1.08)';
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(21, 138, 226, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    const img = e.currentTarget.querySelector('img');
                    if (img) img.style.transform = 'scale(1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.3)';
                  }}
                  onClick={() => setActiveServiceModal(srv)}
                >
                  {/* Photo Background */}
                  <img
                    src={bgImg}
                    alt={srv.title}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s ease',
                    }}
                  />

                  {/* Dark Gradient Overlay Layer */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(2, 18, 43, 0.65) 45%, rgba(2, 18, 43, 0.98) 100%)',
                    }}
                  />

                  {/* Number Badge at Top Right */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1.25rem',
                      right: '1.25rem',
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      color: 'rgba(255, 255, 255, 0.8)',
                      background: 'rgba(2, 18, 43, 0.65)',
                      padding: '4px 10px',
                      borderRadius: '8px',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                    }}
                  >
                    {srv.num || `0${idx + 1}`}
                  </div>

                  {/* Content Positioned at Bottom */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '1.75rem',
                      display: 'flex',
                      flexDirection: 'column',
                      zIndex: 2,
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.3rem',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        marginBottom: '0.65rem',
                        lineHeight: 1.25,
                      }}
                    >
                      {srv.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '0.875rem',
                        lineHeight: 1.6,
                        color: 'rgba(255, 255, 255, 0.82)',
                        marginBottom: '1.25rem',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {srv.description}
                    </p>

                    {/* Learn More link with arrow */}
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: '#38BDF8',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        marginTop: 'auto',
                      }}
                    >
                      <span>Learn More</span>
                      <ArrowRight size={15} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CASE STUDIES SHOWCASE PANEL: (appi_portfolio_panel) */}
      <section
        style={{
          padding: '95px 0',
          background: '#FFFFFF',
          borderBottom: '1px solid #E2E8F0',
        }}
      >
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '50px', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  color: 'var(--blue)',
                  marginBottom: '0.6rem',
                }}
              >
                Proven Impact
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                  fontWeight: 800,
                  color: 'var(--navy)',
                  margin: 0,
                }}
              >
                Featured Case Studies
              </h2>
            </div>

            <Link
              href="/case-studies"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--blue)',
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
              }}
            >
              <span>View All Case Studies</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
            }}
          >
            {caseStudies.slice(0, 3).map((cs, idx) => (
              <div
                key={cs.id || idx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  padding: '2rem',
                  boxShadow: '0 4px 20px rgba(5, 45, 93, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(5, 45, 93, 0.1)';
                  e.currentTarget.style.borderColor = 'var(--blue)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(5, 45, 93, 0.04)';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'inline-block',
                      padding: '4px 12px',
                      borderRadius: '6px',
                      background: 'var(--blue-light)',
                      color: 'var(--blue)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      marginBottom: '1.25rem',
                    }}
                  >
                    {cs.client || 'Enterprise Transformation'}
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: 'var(--navy)',
                      marginBottom: '0.85rem',
                      lineHeight: 1.35,
                    }}
                  >
                    {cs.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.92rem',
                      lineHeight: 1.65,
                      color: '#475569',
                      marginBottom: '1.5rem',
                    }}
                  >
                    {cs.results || cs.challenge || cs.solution}
                  </p>
                </div>

                <Link
                  href="/case-studies"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--blue)',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    marginTop: 'auto',
                  }}
                >
                  <span>Explore Case Study</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LET'S CONNECT SPLIT CONTACT: (mdm-contact-dark) */}
      <section
        id="cta"
        style={{
          padding: '100px 0',
          background: '#02122B',
          color: '#FFFFFF',
          position: 'relative',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '4rem',
              alignItems: 'center',
            }}
          >
            {/* Left Column: Direct Outreach Details */}
            <div>
              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  color: '#38BDF8',
                  marginBottom: '0.75rem',
                }}
              >
                Initiate Consultation
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.4rem, 3.8vw, 3.4rem)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  marginBottom: '1.25rem',
                  lineHeight: 1.15,
                }}
              >
                Let's Connect.
              </h2>

              <p
                style={{
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                  color: 'rgba(255, 255, 255, 0.85)',
                  marginBottom: '2.5rem',
                }}
              >
                Reach out to us for architectural review, technology evaluation, or staffing consultation. Our senior team is here to provide prompt, high-impact guidance.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <a
                  href={`tel:${phone}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    fontSize: '1rem',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(21, 138, 226, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#38BDF8',
                    }}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase' }}>
                      Direct Phone
                    </div>
                    <div style={{ fontWeight: 700 }}>{phone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${email}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    fontSize: '1rem',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(21, 138, 226, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#38BDF8',
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase' }}>
                      Official Email
                    </div>
                    <div style={{ fontWeight: 700 }}>{email}</div>
                  </div>
                </a>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '14px',
                    color: '#FFFFFF',
                    fontSize: '1rem',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(21, 138, 226, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#38BDF8',
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase' }}>
                      Headquarters
                    </div>
                    <div style={{ fontWeight: 600, color: 'rgba(255, 255, 255, 0.9)' }}>
                      Shop No 9, Ananat Kanakar Marg, Bandra East, Mumbai, Maharashtra 400051
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Embedded Consultation Form */}
            <div
              style={{
                background: 'rgba(3, 24, 56, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '20px',
                padding: '2.5rem',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(12px)',
              }}
            >
              {contactSubmitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'rgba(16, 185, 129, 0.15)',
                      color: '#10B981',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem',
                    }}
                  >
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                    Inquiry Received
                  </h3>
                  <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6 }}>
                    Thank you. A senior enterprise consultant will review your requirements and reach out within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '6px' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.06)',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        color: '#FFFFFF',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '6px' }}>
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.85rem 1rem',
                          borderRadius: '10px',
                          background: 'rgba(255, 255, 255, 0.06)',
                          border: '1px solid rgba(255, 255, 255, 0.18)',
                          color: '#FFFFFF',
                          fontSize: '0.95rem',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '6px' }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.85rem 1rem',
                          borderRadius: '10px',
                          background: 'rgba(255, 255, 255, 0.06)',
                          border: '1px solid rgba(255, 255, 255, 0.18)',
                          color: '#FFFFFF',
                          fontSize: '0.95rem',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '6px' }}>
                      Solution of Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: '10px',
                        background: '#032042',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        color: '#FFFFFF',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    >
                      <option value="Data & Analytics">Data &amp; Analytics</option>
                      <option value="Data Engineering">Data Engineering &amp; Lakehouses</option>
                      <option value="Agentic AI">Agentic AI &amp; Autonomous Agents</option>
                      <option value="Technology Consulting">Technology &amp; Management Consulting</option>
                      <option value="BI Visualization">Power BI, Tableau &amp; Executive Cockpits</option>
                      <option value="Staff Augmentation">Staff Augmentation &amp; Training</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '6px' }}>
                      Project Scope &amp; Context
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your requirements, data sources, or cloud environment..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.06)',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        color: '#FFFFFF',
                        fontSize: '0.95rem',
                        outline: 'none',
                        resize: 'none',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      backgroundColor: '#158AE2',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '9999px',
                      padding: '0.9rem',
                      fontWeight: 700,
                      fontSize: '1rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      boxShadow: '0 4px 18px rgba(21, 138, 226, 0.45)',
                      transition: 'all 0.2s ease',
                      marginTop: '0.5rem',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0D7CD4')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#158AE2')}
                  >
                    <span>{isSubmitting ? 'Submitting...' : 'Submit Consultation Request'}</span>
                    <ArrowRight size={17} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS: (faq-outer) */}
      <section
        style={{
          padding: '95px 0',
          background: '#F8FAFC',
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px' }}>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                fontWeight: 800,
                color: 'var(--navy)',
                marginBottom: '0.75rem',
              }}
            >
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748B' }}>
              Clear answers to common questions about our delivery model, tech stack, and engagement process.
            </p>
          </div>

          <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '14px',
                    border: '1px solid #E2E8F0',
                    overflow: 'hidden',
                    boxShadow: isOpen ? '0 8px 24px rgba(5, 45, 93, 0.08)' : '0 2px 8px rgba(5, 45, 93, 0.02)',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      gap: '12px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.05rem',
                        fontWeight: 700,
                        color: isOpen ? 'var(--blue)' : 'var(--navy)',
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={20}
                      color={isOpen ? 'var(--blue)' : '#64748B'}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease',
                        flexShrink: 0,
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '0 1.5rem 1.5rem',
                        color: '#475569',
                        fontSize: '0.95rem',
                        lineHeight: 1.7,
                        borderTop: '1px solid #F1F5F9',
                        paddingTop: '1rem',
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICE MODAL POPUP FOR "LEARN MORE" */}
      {activeServiceModal && (
        <div
          onClick={() => setActiveServiceModal(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(2, 14, 38, 0.75)',
            backdropFilter: 'blur(8px)',
            zIndex: 1200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              maxWidth: '620px',
              width: '100%',
              padding: '2.5rem',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.4)',
              position: 'relative',
              animation: 'modalIn 0.25s ease-out',
            }}
          >
            <button
              onClick={() => setActiveServiceModal(null)}
              aria-label="Close dialog"
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: '#F1F5F9',
                border: 'none',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--navy)',
              }}
            >
              <X size={20} />
            </button>

            <div
              style={{
                display: 'inline-block',
                padding: '4px 12px',
                borderRadius: '6px',
                backgroundColor: 'var(--blue-light)',
                color: 'var(--blue)',
                fontSize: '0.75rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              {activeServiceModal.num ? `Practice ${activeServiceModal.num}` : 'Core Capability'}
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.65rem',
                fontWeight: 800,
                color: 'var(--navy)',
                marginBottom: '1rem',
                lineHeight: 1.25,
              }}
            >
              {activeServiceModal.title}
            </h3>

            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: '#475569',
                marginBottom: '1.5rem',
              }}
            >
              {activeServiceModal.details || activeServiceModal.description}
            </p>

            <div
              style={{
                background: '#F8FAFC',
                borderRadius: '12px',
                padding: '1.25rem',
                marginBottom: '1.5rem',
                border: '1px solid #E2E8F0',
              }}
            >
              <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--navy)', marginBottom: '8px' }}>
                Enterprise Highlights
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#475569', fontSize: '0.9rem', lineHeight: 1.6 }}>
                <li>Customized architecture aligned with business KPIs</li>
                <li>Production-grade deployment with zero system downtime</li>
                <li>Full post-launch governance, documentation, and SLA support</li>
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href="#cta"
                onClick={() => setActiveServiceModal(null)}
                style={{
                  flex: 1,
                  textAlign: 'center',
                  background: 'var(--blue)',
                  color: '#FFFFFF',
                  padding: '0.85rem',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                }}
              >
                Schedule Architecture Consultation
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes modalIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </>
  );
}
