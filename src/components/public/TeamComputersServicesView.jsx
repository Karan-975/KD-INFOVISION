'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  ShieldCheck,
  Sparkles,
  Layers,
  Zap,
  Server,
  ChevronDown,
  CheckCircle2,
  X,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Plus,
  Minus,
} from 'lucide-react';

export default function TeamComputersServicesView({
  settings,
  services = [],
  partners = [],
  caseStudies = [],
}) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeServiceModal, setActiveServiceModal] = useState(null);
  const [activeCaseStudyIdx, setActiveCaseStudyIdx] = useState(0);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredCardIdx, setHoveredCardIdx] = useState(null);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    jobTitle: '',
    company: '',
    city: '',
    message: '',
  });

  // Cycle case studies automatically every 6 seconds if not hovered
  useEffect(() => {
    if (caseStudies.length <= 1) return;
    const interval = setInterval(() => {
      setActiveCaseStudyIdx((prev) => (prev + 1) % Math.min(caseStudies.length, 4));
    }, 6000);
    return () => clearInterval(interval);
  }, [caseStudies.length]);

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
          subject: `Service Inquiry from ${formData.company || 'Enterprise'} (${formData.city || 'India'})`,
          message: `Job Title: ${formData.jobTitle || 'N/A'}\nCompany: ${formData.company || 'N/A'}\nCity: ${formData.city || 'N/A'}\n\nMessage:\n${formData.message}`,
        }),
      });
      if (res.ok) {
        setContactSubmitted(true);
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          jobTitle: '',
          company: '',
          city: '',
          message: '',
        });
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Why Choose Us cards matching Team Computers layout
  const whyChoosePillars = [
    {
      title: 'Enhanced Efficiency & Productivity',
      iconUrl: '/images/Enhanced-Efficiency-Productivity.png',
      icon: TrendingUp,
      desc: 'Our enterprise data services streamline complex pipelines, eliminate reporting bottlenecks, and optimize query speeds—delivering sub-second insight latency.',
    },
    {
      title: 'Advanced Security & Compliance',
      iconUrl: '/images/Advanced-Security-Compliance.png',
      icon: ShieldCheck,
      desc: 'Zero-trust cloud architecture, granular role-based access controls (RBAC), and continuous regulatory compliance across SOC2, HIPAA, and GDPR standards.',
    },
    {
      title: 'Future-Ready Scalability',
      iconUrl: '/images/Future-Ready-Infrastructure.png',
      icon: Sparkles,
      desc: 'Architectures engineered on modern Lakehouse patterns with Snowflake, Databricks, and AWS, primed to seamlessly host autonomous Agentic AI workloads.',
    },
    {
      title: 'Device & Data Lifecycle Management',
      iconUrl: '/images/Device-Lifecycle-Management.png',
      icon: Layers,
      desc: 'With KD Infovision you get end-to-end data & IT infrastructure support, covering full asset lifecycle management for seamless operations and optimal performance.',
    },
    {
      title: 'Optimized IT Costs & Cloud FinOps',
      iconUrl: '/images/Optimized-IT-Costs.png',
      icon: Zap,
      desc: 'Reduce unnecessary expenses and enhance efficiency through improved resource allocation, powered by modern Lakehouse & FinOps cost optimization frameworks.',
    },
    {
      title: 'Proactive Monitoring & 24/7 Support',
      iconUrl: '/images/Proactive-Monitoring-Support.png',
      icon: Server,
      desc: 'Our continuous pipeline monitoring services detect and resolve issues before they impact business operations, ensuring uninterrupted reliability and 99.9% uptime.',
    },
  ];

  // Curated high-resolution imagery for the 8 bespoke solutions
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

  // Exact Team Computers dynamic gradient layers per solution card
  const solutionLayers = [
    'linear-gradient(180deg, #000000 0%, #15163a 100%)',
    'linear-gradient(180deg, #000000 0%, #702c0a 100%)',
    'linear-gradient(180deg, #000000 0%, #322a3d 100%)',
    'linear-gradient(180deg, #000000 0%, #0d3830 100%)',
    'linear-gradient(180deg, #000000 0%, #381a15 100%)',
    'linear-gradient(180deg, #000000 0%, #162447 100%)',
    'linear-gradient(180deg, #000000 0%, #3a152e 100%)',
    'linear-gradient(180deg, #000000 0%, #1c3b2b 100%)',
  ];

  // Frequently Asked Questions
  const faqs = [
    {
      q: 'How can IT & Data Infrastructure solutions by KD Infovision benefit my business?',
      a: 'KD Infovision is a leading strategic provider of IT and data infrastructure solutions, offering efficient, scalable, and secure implementations that ensure minimal downtime and proactive monitoring. Our solutions help enterprises streamline workflows, modernize legacy data warehouses, deploy self-service BI cockpits on Power BI and Tableau, and integrate autonomous AI agents—reducing decision latency by up to 65% while maintaining a robust digital ecosystem.',
    },
    {
      q: 'What cloud platforms and data stacks do you specialize in?',
      a: 'We specialize in leading enterprise platforms including Snowflake, Databricks, Microsoft Azure, Amazon Web Services (AWS), Google Cloud Platform (GCP), Power BI, Tableau, Domo, Apache Kafka, and custom Python/R enterprise AI ecosystems.',
    },
    {
      q: 'Do you offer remote IT and 24/7 managed infrastructure services?',
      a: 'Yes. KD Infovision provides comprehensive remote infrastructure and pipeline management to help organizations maintain high performance, reliability, and security without requiring on-site staff. Our 24/7 telemetry monitoring proactively detects and resolves bottlenecks before they impact mission-critical operations.',
    },
    {
      q: 'Do you offer business continuity and disaster recovery planning?',
      a: 'Yes, we provide enterprise-grade disaster recovery, multi-region failover blueprints, automated schema backups, and strict RPO/RTO SLAs ensuring continuous operation and zero data loss under any unforeseen conditions.',
    },
    {
      q: 'What engagement models do you support for staffing and consulting?',
      a: 'Through the KDI Delivery Framework, we offer flexible engagement models including fixed-scope milestone delivery, dedicated engineering pods, and on-demand certified staff augmentation spanning certified data engineers, solution architects, and BI specialists.',
    },
  ];

  const phone = settings?.phone || '+91 9820536031';
  const email = settings?.email || 'admin@kdinfovision.com';

  const displayedCaseStudies = caseStudies.slice(0, 3);
  const currentCase = displayedCaseStudies[activeCaseStudyIdx] || displayedCaseStudies[0];

  return (
    <div className="tc-services-root">
      {/* =========================================================================
          1. HERO BANNER: (solution-banner-outer)
          Pitch Black with Team Computers signature yellow/amber gradient title
          ========================================================================= */}
      <section className="solution-banner-outer">
        <div className="container">
          <div className="solution-main">
            {/* Breadcrumb matching Team Computers subtle link hierarchy */}
            <nav className="tc-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span className="current">IT &amp; Data Infrastructure Solutions</span>
            </nav>

            {/* Signature H1 with exact Team Computers linear-gradient text clip */}
            <h1
              className="tc-hero-h1"
              style={{
                background: 'linear-gradient(259.44deg, #FFFA65 25.03%, #FFEEC8 90.57%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              IT Infrastructure Solutions for the Digital Age
            </h1>

            <p className="tc-hero-sub">
              One partner delivering secure end-to-end data infrastructure, Agentic AI, and full device lifecycle management
            </p>

            <div className="tc-hero-actions">
              <a href="#cta" className="tc-btn-primary">
                <span>Get a Free Infrastructure Audit</span>
                <span className="tc-arrow">
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33334 8H12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 3.33334L12.6667 8L8 12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>

              <a href="#solutions" className="tc-btn-secondary">
                <span>Explore Bespoke Solutions</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. FUEL INNOVATION OVERVIEW: (fule-innovation-outer)
          Pure dark background with high-contrast headers and 4 impact stat cards
          ========================================================================= */}
      <section className="fule-innovation-outer">
        <div className="container">
          <div className="head">
            <h2>
              Infrastructure Solutions that Power Modern, <br />
              Always-On Enterprises
            </h2>
            <p>
              Modern enterprises run on resilient infrastructure. KD Infovision delivers secure data centers, high-speed data pipelines, autonomous Agentic AI workflows, and fully managed cloud lakehouses—engineered to keep your business always on. One partner for every layer. Zero downtime. Maximum performance.
            </p>
          </div>

          <div className="fule-innovation-main">
            {[
              { val: '100+', label: 'Enterprise Transformations' },
              { val: '99.99%', label: 'Infrastructure Reliability' },
              { val: '<30ms', label: 'Query & Pipeline Latency' },
              { val: '65%', label: 'Cost Reduction via FinOps' },
            ].map((stat, i) => (
              <div key={i} className="fule-bx">
                <div className="fule-area">
                  <div
                    className="fule-val"
                    style={{
                      background: 'linear-gradient(259.44deg, #FFFA65 25.03%, #FFEEC8 90.57%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {stat.val}
                  </div>
                  <div className="fule-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. WHY CHOOSE SECTION: (our-experties-outer)
          Pure black (#000) background, 6 expertise cards with subtle border & gold hover
          ========================================================================= */}
      <section className="our-experties-outer">
        <div className="container">
          <div className="head">
            <h2>Why Choose KD Infovision?</h2>
            <p>Your Go-To Strategic Partner for Scalable IT &amp; Data Infrastructure</p>
          </div>

          <div className="our-experties-main">
            {whyChoosePillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <div key={idx} className="our-experties-bx">
                  <span className="our-ex-ico">
                    {pillar.iconUrl ? (
                      <img
                        src={pillar.iconUrl}
                        alt={pillar.title}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <PillarIcon size={28} strokeWidth={2} />
                    )}
                  </span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. BESPOKE SOLUTIONS GRID: (our-solutions solution-page-solution)
          Exact Team Computers 4-column cards with sliding color .layer on hover
          and smooth H3 shrink (34px -> 22px), paragraph fade-in, and learn-more button
          ========================================================================= */}
      <section className="our-solutions solution-page-solution" id="solutions">
        <div className="container">
          <div className="head">
            <h2>Bespoke IT Infrastructure Solutions</h2>
            <p>
              No jargon, no hassle, just smart, scalable IT and data infrastructure solutions that work for you, so you can focus on what matters most — growing your business.
            </p>
          </div>

          <div className="solutions-grid">
            {services.map((srv, idx) => {
              const bgImg = serviceImages[idx % serviceImages.length];
              const layerBg = solutionLayers[idx % solutionLayers.length];
              const isHovered = hoveredCardIdx === idx;

              return (
                <div
                  key={srv.id}
                  className="solution-box"
                  onMouseEnter={() => setHoveredCardIdx(idx)}
                  onMouseLeave={() => setHoveredCardIdx(null)}
                  onClick={() => setActiveServiceModal(srv)}
                >
                  <figure>
                    <img src={bgImg} alt={srv.title} />

                    <figcaption>
                      <h3>{srv.title}</h3>
                      <p>{srv.description}</p>

                      <span className="learn-more">
                        Learn More
                        <img
                          src="https://teamcomputers.com/wp-content/themes/teamcomputers/images/learn-more-arrow.svg"
                          alt="arrow"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        <span className="fallback-arrow">→</span>
                      </span>
                    </figcaption>

                    {/* Exact Team Computers colored layer sliding up on hover */}
                    <div className="layer" style={{ background: layerBg }}></div>
                  </figure>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. CASE STUDIES SHOWCASE PANEL: (appi_portfolio_panel)
          Exact Team Computers showcase with vertical progress bar rail (.scr_bar)
          and interactive card transition synchronized with visual showcase preview
          ========================================================================= */}
      {displayedCaseStudies.length > 0 && (
        <section className="appi_portfolio_panel">
          <div className="showcase_panel">
            <div className="container">
              <div className="head">
                <h2>Case Studies</h2>
              </div>

              <div className="showcase text-bottom">
                {/* Vertical Progress Bar matching Team Computers .scr_bar */}
                <div className="scr_bar">
                  <span
                    className="bar"
                    style={{
                      transform: `translateY(${activeCaseStudyIdx * 105}px)`,
                    }}
                  ></span>
                </div>

                {/* Left Inner Interactive Case Study Cards */}
                <div className="showcase_inner">
                  {displayedCaseStudies.map((cs, idx) => {
                    const isActive = activeCaseStudyIdx === idx;
                    return (
                      <div
                        key={cs.id || idx}
                        className={`showcase_card ${isActive ? 'active' : ''}`}
                        onClick={() => setActiveCaseStudyIdx(idx)}
                      >
                        <div className="cs-tag">{cs.client || 'Enterprise Client'}</div>
                        <h3>{cs.title}</h3>
                        <p>{cs.results || cs.challenge || cs.solution}</p>
                        <Link href="/case-studies" className="learn-more">
                          Learn More
                          <img
                            src="https://teamcomputers.com/wp-content/themes/teamcomputers/images/learn-more-arrow.svg"
                            alt="arrow"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                          <span className="fallback-arrow">→</span>
                        </Link>
                      </div>
                    );
                  })}
                </div>

                {/* Right Visuals Crossfade Preview (.showcase_visuals) */}
                <div className="showcase_visuals">
                  {displayedCaseStudies.map((cs, idx) => {
                    const isActive = activeCaseStudyIdx === idx;
                    const visualImg = serviceImages[idx % serviceImages.length];
                    return (
                      <div
                        key={`visual-${cs.id || idx}`}
                        className={`showcase_view ${isActive ? 'active' : ''}`}
                      >
                        <img src={visualImg} alt={cs.title} loading="lazy" />
                        <div className="visual-overlay">
                          <div className="visual-badge">Verified Enterprise Result</div>
                          <div className="visual-client">{cs.client || 'KD Infovision Client'}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          6. LET'S CONNECT SECTION: (mdm-contact-dark)
          Exact Team Computers unified contact CSS: 40/60 split, deep black #000,
          uppercase field labels, #1a1a1f inputs, and #2B6DF5 submit button
          ========================================================================= */}
      <section className="mdm-contact-dark" id="cta">
        <div className="container">
          <div className="mdm-contact-wrap">
            {/* Left 40% */}
            <div className="mdm-contact-left">
              <h2>Let's Connect.</h2>
              <p>
                Reach out to us for any questions or support.<br />
                Our dedicated team is here to provide prompt<br />
                and helpful assistance.
              </p>

              <div className="tc-contact-meta">
                <a href={`tel:${phone}`} className="tc-meta-row">
                  <div className="tc-meta-ico">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="tc-meta-lbl">Direct Phone</div>
                    <div className="tc-meta-val">{phone}</div>
                  </div>
                </a>

                <a href={`mailto:${email}`} className="tc-meta-row">
                  <div className="tc-meta-ico">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="tc-meta-lbl">Official Email</div>
                    <div className="tc-meta-val">{email}</div>
                  </div>
                </a>

                <div className="tc-meta-row">
                  <div className="tc-meta-ico">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="tc-meta-lbl">Corporate Headquarters</div>
                    <div className="tc-meta-val">
                      Shop No 9, Ananat Kanakar Marg, Bandra East, Mumbai, Maharashtra 400051
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 60% Form */}
            <div className="mdm-contact-right">
              {contactSubmitted ? (
                <div className="tc-form-success">
                  <div className="tc-success-ico">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3>Message Dispatched Successfully</h3>
                  <p>
                    Thank you. Our enterprise solution architect has received your details and will get in touch with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="tc-cf7-form">
                  <div className="form-row half-row">
                    <div className="form-group" data-label="FULL NAME">
                      <input
                        type="text"
                        name="full_name"
                        placeholder="Full name"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                    </div>
                    <div className="form-group" data-label="PHONE">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone number"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group" data-label="EMAIL ADDRESS">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row half-row">
                    <div className="form-group" data-label="JOB TITLE">
                      <input
                        type="text"
                        name="job_title"
                        placeholder="Job title"
                        value={formData.jobTitle}
                        onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                      />
                    </div>
                    <div className="form-group" data-label="COMPANY">
                      <input
                        type="text"
                        name="company"
                        placeholder="Company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group" data-label="CITY">
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group" data-label="MESSAGE">
                      <textarea
                        name="message"
                        rows={3}
                        placeholder="Enter your message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      ></textarea>
                    </div>
                  </div>

                  <div className="form-row submit-row">
                    <button type="submit" disabled={isSubmitting} className="tc-submit-btn">
                      {isSubmitting ? 'Sending...' : 'Submit'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. FAQ SECTION: (faq-outer)
          Exact Team Computers dark accordion (#000), border #2E2E2E,
          and signature purple/indigo gradient "Load More" pill button
          ========================================================================= */}
      <section className="faq-outer">
        <div className="container">
          <div className="head">
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="faq-main">
            <div className="tc-accordion">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div key={idx} className="accordion-item">
                    <button
                      type="button"
                      className="accordion-button"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <span className="faq-icon">
                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="accordion-body">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="view-more">
              <a href="#cta" className="learn-more">
                Load More
                <img
                  src="https://teamcomputers.com/wp-content/themes/teamcomputers/images/learn-more-arrow.svg"
                  alt="arrow"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="fallback-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SERVICE DETAIL MODAL
          ========================================================= */}
      {activeServiceModal && (
        <div className="tc-modal-backdrop" onClick={() => setActiveServiceModal(null)}>
          <div className="tc-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="tc-modal-close"
              onClick={() => setActiveServiceModal(null)}
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="tc-modal-badge">
              {activeServiceModal.num ? `Solution ${activeServiceModal.num}` : 'Core Capability'}
            </div>

            <h3 className="tc-modal-title">{activeServiceModal.title}</h3>

            <p className="tc-modal-desc">
              {activeServiceModal.details || activeServiceModal.description}
            </p>

            <div className="tc-modal-highlights">
              <div className="hl-title">Enterprise Deliverables</div>
              <ul>
                <li>Custom architectural blueprint aligned with organizational KPIs</li>
                <li>Production-grade deployment with zero system downtime</li>
                <li>24/7 telemetry monitoring, automated governance, and SLA support</li>
              </ul>
            </div>

            <div className="tc-modal-actions">
              <a
                href="#cta"
                onClick={() => setActiveServiceModal(null)}
                className="tc-modal-cta"
              >
                Schedule Architecture Consultation
              </a>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          EXACT CSS FROM TEAM COMPUTERS
          Replicating main.css, unified-contact-section.css, and animate.css
          ========================================================================= */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Root container strictly dark */
        .tc-services-root {
          background-color: #000000 !important;
          color: #ffffff;
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          overflow-x: hidden;
        }

        .tc-services-root * {
          box-sizing: border-box;
        }

        /* -------------------------------------------------------------
           ANIMATIONS (Exact replicate from Team Computers animate.css)
           ------------------------------------------------------------- */
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(24px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          0% {
            opacity: 0;
            transform: translateX(-24px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          0% {
            opacity: 0;
            transform: translateX(24px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.35;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.05);
          }
        }

        /* Container standard */
        .tc-services-root .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Headings generic */
        .tc-services-root .head {
          text-align: center;
          margin-bottom: 45px;
        }

        .tc-services-root .head h2 {
          color: #ffffff;
          font-size: clamp(30px, 3.8vw, 45px);
          font-weight: 600;
          font-family: 'Montserrat', sans-serif;
          line-height: 1.25;
          margin: 0 0 14px 0;
          animation: fadeInUp 0.8s ease backwards;
        }

        .tc-services-root .head p {
          color: #a3a3a3;
          font-size: 17px;
          line-height: 1.65;
          max-width: 860px;
          margin: 0 auto;
          animation: fadeInUp 0.8s 0.15s ease backwards;
        }

        /* -------------------------------------------------------------
           1. HERO BANNER: (.solution-banner-outer)
           ------------------------------------------------------------- */
        .tc-services-root .solution-banner-outer {
          padding: 160px 0 90px;
          min-height: 80vh;
          display: flex;
          align-items: center;
          background: radial-gradient(circle at 50% 25%, rgba(255, 250, 101, 0.08) 0%, rgba(0, 0, 0, 0.98) 72%), #000000;
          position: relative;
        }

        .tc-services-root .solution-banner-outer::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255, 250, 101, 0.12) 1px, transparent 1px);
          background-size: 48px 48px;
          opacity: 0.25;
          pointer-events: none;
        }

        .tc-services-root .solution-main {
          text-align: center;
          max-width: 980px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .tc-services-root .tc-breadcrumb {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #8e8e93;
          margin-bottom: 24px;
          animation: fadeInUp 0.6s ease backwards;
        }

        .tc-services-root .tc-breadcrumb a {
          color: #8e8e93;
          text-decoration: none;
          transition: color 0.2s;
        }

        .tc-services-root .tc-breadcrumb a:hover {
          color: #fffa65;
        }

        .tc-services-root .tc-breadcrumb .sep {
          color: #555555;
        }

        .tc-services-root .tc-breadcrumb .current {
          color: #fffa65;
          font-weight: 500;
        }

        /* EXACT Team Computers gradient on H1 */
        .tc-services-root .tc-hero-h1 {
          font-size: clamp(38px, 5.8vw, 76px);
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          line-height: 112%;
          margin: 0 0 20px 0;
          letter-spacing: -0.02em;
          background: linear-gradient(259.44deg, #fffa65 25.03%, #ffeec8 90.57%) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          animation: fadeInUp 0.8s 0.1s ease backwards;
        }

        .tc-services-root .tc-hero-sub {
          color: #ffffff;
          font-size: clamp(17px, 1.8vw, 22px);
          line-height: 1.55;
          max-width: 820px;
          margin: 0 auto 36px;
          font-weight: 400;
          opacity: 0.92;
          animation: fadeInUp 0.8s 0.2s ease backwards;
        }

        .tc-services-root .tc-hero-actions {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          animation: fadeInUp 0.8s 0.3s ease backwards;
        }

        /* Team Computers primary button */
        .tc-services-root .tc-btn-primary {
          background: linear-gradient(93.05deg, #1ec9f2 -14.26%, #0db16a 85.74%);
          padding: 12px 32px;
          border-radius: 40px;
          color: #ffffff;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.5s ease;
          border: none;
          cursor: pointer;
        }

        .tc-services-root .tc-btn-primary .tc-arrow {
          display: inline-flex;
          align-items: center;
          transition: transform 0.4s ease;
        }

        .tc-services-root .tc-btn-primary:hover {
          background: linear-gradient(93.05deg, #0db16a -14.26%, #1ec9f2 85.74%);
          transform: translateY(-2px);
        }

        .tc-services-root .tc-btn-primary:hover .tc-arrow {
          transform: translateX(6px);
        }

        .tc-services-root .tc-btn-secondary {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.28);
          color: #ffffff;
          padding: 12px 28px;
          border-radius: 40px;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .tc-services-root .tc-btn-secondary:hover {
          border-color: #fffa65;
          color: #fffa65;
          background: rgba(255, 250, 101, 0.05);
        }

        /* -------------------------------------------------------------
           2. FUEL INNOVATION OVERVIEW: (.fule-innovation-outer)
           ------------------------------------------------------------- */
        .tc-services-root .fule-innovation-outer {
          background: #000000;
          padding: 70px 0 80px;
          border-top: 1px solid #141414;
        }

        .tc-services-root .fule-innovation-main {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 36px;
        }

        @media (max-width: 991px) {
          .tc-services-root .fule-innovation-main {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 575px) {
          .tc-services-root .fule-innovation-main {
            grid-template-columns: 1fr;
          }
        }

        .tc-services-root .fule-bx {
          background: #09090c;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 24px;
          text-align: center;
          transition: all 0.5s ease;
        }

        .tc-services-root .fule-bx:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 250, 101, 0.45);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.8);
          background: #111116;
        }

        .tc-services-root .fule-val {
          font-size: 40px;
          font-weight: 700;
          font-family: 'Montserrat', sans-serif;
          background: linear-gradient(259.44deg, #fffa65 25.03%, #ffeec8 90.57%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 8px;
        }

        .tc-services-root .fule-label {
          color: #ffffff;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.2px;
        }

        /* -------------------------------------------------------------
           3. WHY CHOOSE SECTION: (.our-experties-outer)
           ------------------------------------------------------------- */
        .tc-services-root .our-experties-outer {
          background: #000000;
          padding: 80px 0 90px;
          border-top: 1px solid #141414;
        }

        .tc-services-root .our-experties-main {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 991px) {
          .tc-services-root .our-experties-main {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .tc-services-root .our-experties-main {
            grid-template-columns: 1fr;
          }
        }

        .tc-services-root .our-experties-bx {
          background: #08080a;
          border: 1px solid #242424;
          border-radius: 20px;
          padding: 42px 36px 36px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          position: relative;
        }

        .tc-services-root .our-ex-ico {
          width: 66px;
          height: 66px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 22px;
          background: rgba(255, 250, 101, 0.08);
          border: 1px solid rgba(255, 250, 101, 0.25);
          color: #fffa65;
          transition: all 0.4s ease;
        }

        .tc-services-root .our-ex-ico img {
          max-width: 44px;
          max-height: 44px;
          object-fit: contain;
          transition: transform 0.4s ease;
        }

        .tc-services-root .our-experties-bx h3 {
          color: #ffffff;
          font-size: 23px;
          font-weight: 700;
          line-height: 1.3;
          margin: 0 0 14px 0;
          min-height: 56px;
          font-family: 'Montserrat', sans-serif;
          transition: color 0.3s ease;
        }

        .tc-services-root .our-experties-bx p {
          color: #9e9e9e;
          font-size: 15px;
          line-height: 1.65;
          margin: 0;
          transition: color 0.3s ease;
        }

        /* EXACT HOVER STATE MATCHING REFERENCE (WHITE CARD WITH BLACK TEXT & YELLOW ICON) */
        .tc-services-root .our-experties-bx:hover {
          background: #ffffff !important;
          border-color: #ffffff !important;
          transform: translateY(-8px);
          box-shadow: 0 20px 45px rgba(255, 255, 255, 0.16), 0 12px 30px rgba(0, 0, 0, 0.7);
        }

        .tc-services-root .our-experties-bx:hover .our-ex-ico {
          background: transparent !important;
          border-color: transparent !important;
          transform: scale(1.12);
        }

        .tc-services-root .our-experties-bx:hover .our-ex-ico img {
          transform: scale(1.12);
        }

        .tc-services-root .our-experties-bx:hover h3 {
          color: #000000 !important;
        }

        .tc-services-root .our-experties-bx:hover p {
          color: #1a1a1a !important;
        }

        /* -------------------------------------------------------------
           4. BESPOKE SOLUTIONS GRID: (.our-solutions)
           Exact Team Computers Hover Architecture:
           - Full photo background with zoom (scale 1.08)
           - Colored ambient .layer slides up from top: 100% to top: 0
           - Title H3 smoothly scales from 34px down to 22px
           - Description p fades in (opacity 0 -> 1)
           - Pill button "Learn More" with animated arrow appears
           ------------------------------------------------------------- */
        .tc-services-root .our-solutions {
          background: #000000;
          padding: 85px 0 80px;
          border-top: 1px solid #141414;
        }

        .tc-services-root .solutions-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        @media (max-width: 1199px) {
          .tc-services-root .solutions-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 880px) {
          .tc-services-root .solutions-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 575px) {
          .tc-services-root .solutions-grid {
            grid-template-columns: 1fr;
          }
        }

        .tc-services-root .solution-box {
          position: relative;
          height: 480px;
          border-radius: 18px;
          overflow: hidden;
          background: #0c0c0e;
          cursor: pointer;
        }

        .tc-services-root .solution-box figure {
          position: relative;
          overflow: hidden;
          margin: 0;
          width: 100%;
          height: 100%;
        }

        .tc-services-root .solution-box figure img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          inset: 0;
          transition: transform 0.7s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .tc-services-root .solution-box:hover figure img {
          transform: scale(1.08);
        }

        /* Default bottom vignette overlay */
        .tc-services-root .solution-box figure::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.55) 45%, rgba(0, 0, 0, 0.95) 100%);
          z-index: 1;
        }

        /* Exact sliding color gradient layer */
        .tc-services-root .solution-box figure .layer {
          z-index: 2;
          position: absolute;
          top: 100%;
          height: 100%;
          width: 100%;
          left: 0;
          background-size: cover;
          transition: top 0.5s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .tc-services-root .solution-box:hover figure .layer {
          top: 0;
        }

        .tc-services-root .solution-box figure figcaption {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          padding: 28px 24px;
          z-index: 3;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          background: transparent;
        }

        .tc-services-root .solution-box figure figcaption h3 {
          color: #ffffff;
          font-size: 34px;
          line-height: 115%;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          margin: 0 0 6px 0;
          transition: all 0.4s ease;
        }

        .tc-services-root .solution-box:hover figure figcaption h3 {
          font-size: 22px;
          margin-bottom: 12px;
        }

        .tc-services-root .solution-box figure figcaption p {
          opacity: 0;
          visibility: hidden;
          font-size: 14px;
          line-height: 22px;
          color: #ffffff;
          margin: 0 0 20px 0;
          transition: opacity 0.4s ease, visibility 0.4s;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .tc-services-root .solution-box:hover figure figcaption p {
          opacity: 1;
          visibility: visible;
        }

        .tc-services-root .solution-box figure figcaption .learn-more {
          opacity: 0;
          visibility: hidden;
          background: linear-gradient(93.05deg, #1ec9f2 -14.26%, #0db16a 85.74%);
          padding: 9px 24px;
          border-radius: 40px;
          font-size: 14px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          color: #ffffff;
          line-height: 19px;
          text-decoration: none;
          transition: all 0.4s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          width: fit-content;
        }

        .tc-services-root .solution-box:hover figure figcaption .learn-more {
          opacity: 1;
          visibility: visible;
        }

        .tc-services-root .solution-box figure figcaption .learn-more:hover {
          background: linear-gradient(93.05deg, #0db16a -14.26%, #1ec9f2 85.74%);
        }

        .tc-services-root .solution-box figure figcaption .learn-more img {
          position: static !important;
          width: 14px !important;
          height: auto !important;
          display: inline-block !important;
          margin-left: 4px;
          transition: margin-left 0.4s ease;
        }

        .tc-services-root .solution-box figure figcaption .learn-more:hover img {
          margin-left: 8px;
        }

        .tc-services-root .fallback-arrow {
          display: inline-block;
          transition: transform 0.4s ease;
        }

        .tc-services-root .learn-more:hover .fallback-arrow {
          transform: translateX(4px);
        }

        /* -------------------------------------------------------------
           5. CASE STUDIES SHOWCASE PANEL: (.appi_portfolio_panel)
           ------------------------------------------------------------- */
        .tc-services-root .appi_portfolio_panel {
          background: #000000;
          padding: 85px 0 95px;
          border-top: 1px solid #141414;
        }

        .tc-services-root .showcase {
          display: flex;
          gap: 36px;
          align-items: center;
          position: relative;
          min-height: 440px;
        }

        @media (max-width: 991px) {
          .tc-services-root .showcase {
            flex-direction: column;
          }
        }

        .tc-services-root .scr_bar {
          width: 3px;
          height: 320px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 3px;
          position: relative;
          flex-shrink: 0;
        }

        @media (max-width: 991px) {
          .tc-services-root .scr_bar {
            display: none;
          }
        }

        .tc-services-root .scr_bar .bar {
          position: absolute;
          width: 5px;
          left: -1px;
          height: 75px;
          background: linear-gradient(180deg, #fffa65, #ffeec8);
          border-radius: 4px;
          transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .tc-services-root .showcase_inner {
          width: 52%;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        @media (max-width: 991px) {
          .tc-services-root .showcase_inner {
            width: 100%;
          }
        }

        .tc-services-root .showcase_card {
          padding: 24px 28px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          cursor: pointer;
          transition: all 0.4s ease;
          opacity: 0.5;
        }

        .tc-services-root .showcase_card.active {
          opacity: 1;
          background: #0d0d12;
          border-color: rgba(255, 250, 101, 0.35);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
        }

        .tc-services-root .showcase_card .cs-tag {
          color: #fffa65;
          font-size: 12px;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 1.5px;
          margin-bottom: 8px;
        }

        .tc-services-root .showcase_card h3 {
          color: #ffffff;
          font-size: 22px;
          font-weight: 600;
          line-height: 1.35;
          margin: 0 0 10px 0;
        }

        .tc-services-root .showcase_card p {
          color: #cccccc;
          font-size: 15px;
          line-height: 1.65;
          margin: 0 0 16px 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .tc-services-root .showcase_card .learn-more {
          color: #fffa65;
          font-weight: 700;
          font-size: 14px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .tc-services-root .showcase_card .learn-more:hover {
          color: #ffffff;
        }

        .tc-services-root .showcase_visuals {
          width: 48%;
          position: relative;
          height: 380px;
          border-radius: 17px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        @media (max-width: 991px) {
          .tc-services-root .showcase_visuals {
            width: 100%;
            height: 280px;
          }
        }

        .tc-services-root .showcase_view {
          position: absolute;
          inset: 0;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.6s ease, visibility 0.6s;
        }

        .tc-services-root .showcase_view.active {
          opacity: 1;
          visibility: visible;
        }

        .tc-services-root .showcase_view img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .tc-services-root .visual-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.85) 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 24px;
        }

        .tc-services-root .visual-badge {
          display: inline-block;
          background: rgba(255, 250, 101, 0.15);
          color: #fffa65;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 4px 10px;
          border-radius: 4px;
          width: fit-content;
          margin-bottom: 8px;
        }

        .tc-services-root .visual-client {
          color: #ffffff;
          font-size: 20px;
          font-weight: 600;
        }

        /* -------------------------------------------------------------
           6. LET'S CONNECT SECTION: (.mdm-contact-dark)
           Exact Team Computers unified contact CSS:
           - .mdm-contact-dark { background: #000; padding: 100px 0; color: #fff; }
           - .mdm-contact-left (40%), .mdm-contact-right (60%)
           - inputs background: #1a1a1f; border: 1px solid rgba(255,255,255,0.08)
           - submit button: background: #2B6DF5; hover: #4A84F7;
           ------------------------------------------------------------- */
        .tc-services-root .mdm-contact-dark {
          background: #000000;
          padding: 95px 0 100px;
          color: #ffffff;
          position: relative;
          overflow: hidden;
          border-top: 1px solid #141414;
        }

        .tc-services-root .mdm-contact-wrap {
          display: flex;
          gap: 60px;
          align-items: flex-start;
          position: relative;
          z-index: 2;
        }

        @media (max-width: 991px) {
          .tc-services-root .mdm-contact-wrap {
            flex-direction: column;
            gap: 40px;
          }
        }

        .tc-services-root .mdm-contact-left {
          width: 40%;
        }

        @media (max-width: 991px) {
          .tc-services-root .mdm-contact-left {
            width: 100%;
          }
        }

        .tc-services-root .mdm-contact-left h2 {
          font-size: 42px;
          font-weight: 600;
          line-height: 52px;
          letter-spacing: -0.02em;
          margin: 0 0 18px 0;
          color: #ffffff;
          font-family: 'Montserrat', sans-serif;
        }

        .tc-services-root .mdm-contact-left p {
          color: #9ca3af;
          font-size: 16px;
          line-height: 1.65;
          margin: 0 0 35px 0;
        }

        .tc-services-root .tc-contact-meta {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .tc-services-root .tc-meta-row {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          color: #ffffff;
          text-decoration: none;
          font-size: 15px;
        }

        .tc-services-root .tc-meta-ico {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: #1a1a1f;
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2b6df5;
          flex-shrink: 0;
        }

        .tc-services-root .tc-meta-lbl {
          font-size: 11px;
          color: #9ca3af;
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.8px;
          margin-bottom: 2px;
        }

        .tc-services-root .tc-meta-val {
          font-weight: 500;
          color: #ffffff;
        }

        .tc-services-root .mdm-contact-right {
          width: 60%;
        }

        @media (max-width: 991px) {
          .tc-services-root .mdm-contact-right {
            width: 100%;
          }
        }

        .tc-services-root .tc-cf7-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .tc-services-root .form-row {
          width: 100%;
        }

        .tc-services-root .form-row.half-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        @media (max-width: 575px) {
          .tc-services-root .form-row.half-row {
            grid-template-columns: 1fr;
          }
        }

        .tc-services-root .form-group {
          position: relative;
          width: 100%;
        }

        .tc-services-root .form-group::before {
          content: attr(data-label);
          color: #a1a1aa;
          font-size: 11px;
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 8px;
          display: block;
        }

        .tc-services-root .form-group input,
        .tc-services-root .form-group textarea {
          width: 100%;
          background: #1a1a1f;
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #ffffff;
          padding: 14px 18px;
          border-radius: 8px;
          font-size: 15px;
          outline: none;
          transition: border-color 0.3s;
          font-family: inherit;
        }

        .tc-services-root .form-group input:focus,
        .tc-services-root .form-group textarea:focus {
          border-color: #2b6df5;
          box-shadow: 0 0 0 2px rgba(43, 109, 245, 0.2);
        }

        .tc-services-root .form-group textarea {
          min-height: 110px;
          resize: vertical;
        }

        .tc-services-root .tc-submit-btn {
          background: #2b6df5;
          color: #ffffff;
          border: none;
          padding: 14px 44px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s;
          margin-top: 6px;
          font-family: 'Montserrat', sans-serif;
        }

        .tc-services-root .tc-submit-btn:hover {
          background: #4a84f7;
        }

        .tc-services-root .tc-form-success {
          background: #101016;
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: 12px;
          padding: 36px 28px;
          text-align: center;
        }

        .tc-services-root .tc-success-ico {
          color: #10b981;
          margin-bottom: 16px;
        }

        .tc-services-root .tc-form-success h3 {
          font-size: 22px;
          color: #ffffff;
          margin: 0 0 10px 0;
        }

        .tc-services-root .tc-form-success p {
          color: #a3a3a3;
          margin: 0;
          line-height: 1.6;
        }

        /* -------------------------------------------------------------
           7. FAQ SECTION: (.faq-outer)
           - background: #000;
           - accordion items border-bottom: 1px solid #2E2E2E;
           - view-more learn-more gradient: linear-gradient(259.44deg, #9DA8FB 25.03%, #9266FD 90.57%)
           ------------------------------------------------------------- */
        .tc-services-root .faq-outer {
          background: #000000;
          padding: 85px 0 95px;
          border-top: 1px solid #141414;
        }

        .tc-services-root .faq-main {
          max-width: 900px;
          margin: 0 auto;
        }

        .tc-services-root .tc-accordion {
          display: flex;
          flex-direction: column;
        }

        .tc-services-root .accordion-item {
          background: transparent;
          border: none;
          border-bottom: 1px solid #2e2e2e;
          padding: 14px 0;
        }

        .tc-services-root .accordion-button {
          width: 100%;
          background: none;
          border: none;
          padding: 14px 0;
          color: #ffffff;
          font-size: 18px;
          font-weight: 500;
          text-align: left;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          transition: color 0.2s ease;
          font-family: inherit;
        }

        .tc-services-root .accordion-button:hover {
          color: #fffa65;
        }

        .tc-services-root .faq-icon {
          color: #fffa65;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tc-services-root .accordion-body {
          padding: 4px 0 18px;
        }

        .tc-services-root .accordion-body p {
          color: #a3a3a3;
          font-size: 15px;
          line-height: 1.7;
          margin: 0;
        }

        .tc-services-root .view-more {
          margin-top: 40px;
          text-align: center;
        }

        /* Exact Team Computers purple/indigo gradient pill button */
        .tc-services-root .view-more .learn-more {
          background: linear-gradient(259.44deg, #9da8fb 25.03%, #9266fd 90.57%);
          padding: 11px 30px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          color: #ffffff;
          border-radius: 40px;
          line-height: 19px;
          text-decoration: none;
          transition: all 0.5s ease;
          border: none;
          cursor: pointer;
        }

        .tc-services-root .view-more .learn-more:hover {
          background: linear-gradient(259.44deg, #9266fd 25.03%, #9da8fb 90.57%);
          transform: translateY(-2px);
        }

        /* -------------------------------------------------------------
           8. SERVICE DETAIL MODAL (Matching dark aesthetic)
           ------------------------------------------------------------- */
        .tc-services-root .tc-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.82);
          backdrop-filter: blur(10px);
          z-index: 1200;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: modalFadeIn 0.25s ease;
        }

        @keyframes modalFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .tc-services-root .tc-modal-card {
          background: #0e0e12;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 20px;
          max-width: 620px;
          width: 100%;
          padding: 40px;
          position: relative;
          color: #ffffff;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7);
        }

        .tc-services-root .tc-modal-close {
          position: absolute;
          top: 18px;
          right: 18px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #ffffff;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }

        .tc-services-root .tc-modal-close:hover {
          background: #fffa65;
          color: #000000;
        }

        .tc-services-root .tc-modal-badge {
          display: inline-block;
          background: rgba(255, 250, 101, 0.12);
          border: 1px solid rgba(255, 250, 101, 0.25);
          color: #fffa65;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 4px 12px;
          border-radius: 20px;
          margin-bottom: 16px;
        }

        .tc-services-root .tc-modal-title {
          font-size: 26px;
          font-weight: 700;
          font-family: 'Montserrat', sans-serif;
          color: #ffffff;
          margin: 0 0 14px 0;
          line-height: 1.3;
        }

        .tc-services-root .tc-modal-desc {
          font-size: 15px;
          line-height: 1.7;
          color: #d1d5db;
          margin: 0 0 24px 0;
        }

        .tc-services-root .tc-modal-highlights {
          background: #14141a;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 26px;
        }

        .tc-services-root .tc-modal-highlights .hl-title {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #fffa65;
          margin-bottom: 10px;
        }

        .tc-services-root .tc-modal-highlights ul {
          margin: 0;
          padding-left: 20px;
          color: #9ca3af;
          font-size: 14px;
          line-height: 1.7;
        }

        .tc-services-root .tc-modal-highlights ul li {
          margin-bottom: 6px;
        }

        .tc-services-root .tc-modal-cta {
          display: block;
          text-align: center;
          background: linear-gradient(93.05deg, #1ec9f2 -14.26%, #0db16a 85.74%);
          color: #ffffff;
          padding: 13px 24px;
          border-radius: 40px;
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
          transition: all 0.3s;
        }

        .tc-services-root .tc-modal-cta:hover {
          background: linear-gradient(93.05deg, #0db16a -14.26%, #1ec9f2 85.74%);
        }
          `,
        }}
      />
    </div>
  );
}
