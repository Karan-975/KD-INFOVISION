'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  BrainCircuit,
  BarChart3,
  ShieldCheck,
  Layers,
  ArrowRight,
  CheckCircle2,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export default function ServicesSection({ services = [] }) {
  const [activeModal, setActiveModal] = useState(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollerRef = useRef(null);

  // Core Practice Definitions from KD Infovision reference
  const defaultPractices = [
    {
      id: 'data-analytics',
      title: 'Data & Analytics',
      kicker: 'Smarter Decisions',
      icon: BarChart3,
      image: '/images/service_analytics_real.jpg',
      alt: 'KD Infovision Data and Analytics Dashboard Consulting',
      desc: 'Harness the power of data and artificial intelligence to drive smarter decisions and accelerate growth with cutting-edge AI solutions.',
      capabilities: [
        'Power BI & Tableau Dashboards',
        'Domo & Spotfire Immersive Visuals',
        'Self-Service Analytics Frameworks',
        'Executive Real-Time Cockpits',
      ],
      detail:
        'Harness the power of data and artificial intelligence to drive smarter decisions and accelerate growth. At KDI, we transform complex data into actionable insights with cutting-edge AI solutions, helping businesses innovate, scale, and stay ahead in a digital-first world.',
      theme: {
        bg: '#082F24', // Rich Forest Emerald (matching Webflow Slide 1)
        textColor: '#FFFFFF',
        titleColor: '#FFFFFF',
        descColor: 'rgba(255, 255, 255, 0.85)',
        kickerBg: 'rgba(52, 211, 153, 0.15)',
        kickerColor: '#34D399',
        kickerBorder: '1px solid rgba(52, 211, 153, 0.3)',
        chipBg: 'rgba(255, 255, 255, 0.12)',
        chipColor: '#ECFDF5',
        chipBorder: '1px solid rgba(255, 255, 255, 0.18)',
        btnBg: '#FFFFFF',
        btnColor: '#082F24',
        btnShadow: '0 4px 18px rgba(0, 0, 0, 0.25)',
        dividerColor: 'rgba(255, 255, 255, 0.15)',
        counterColor: '#34D399',
      },
    },
    {
      id: 'data-engineering',
      title: 'Data Engineering',
      kicker: 'Foundational Scale',
      icon: Layers,
      image: '/images/service_cloud_real.jpg',
      alt: 'KD Infovision Data Engineering and Lakehouse Architecture',
      desc: 'Empowering businesses with seamless integration and advanced engineering solutions, aligning data strategies with business goals.',
      capabilities: [
        'Snowflake & Databricks Lakehouses',
        'AWS Cloud Data Infrastructure',
        'Automated ETL / ELT Workflows',
        'Zero Data Silos & Low Latency',
      ],
      detail:
        'At KDI, we empower businesses with seamless integration and advanced engineering solutions. We act as trusted advisors—aligning data strategies with business goals to unlock agility, drive innovation, and accelerate growth in the digital era.',
      theme: {
        bg: '#FBF0EB', // Champagne Blush (matching Webflow Slide 2 / Image 1)
        textColor: '#2B1308',
        titleColor: '#2B1308',
        descColor: '#5C3826',
        kickerBg: 'rgba(194, 65, 12, 0.12)',
        kickerColor: '#C2410C',
        kickerBorder: '1px solid rgba(194, 65, 12, 0.25)',
        chipBg: '#F3DDD3',
        chipColor: '#431407',
        chipBorder: '1px solid #E8C7B8',
        btnBg: '#2B1308',
        btnColor: '#FFFFFF',
        btnShadow: '0 4px 18px rgba(43, 19, 8, 0.25)',
        dividerColor: 'rgba(43, 19, 8, 0.12)',
        counterColor: '#C2410C',
      },
    },
    {
      id: 'agentic-ai',
      title: 'Agentic AI',
      kicker: 'Beyond Automation',
      icon: BrainCircuit,
      image: '/images/service_software_real.jpg',
      alt: 'KD Infovision Agentic AI and Machine Learning Engineering',
      desc: 'Intelligent AI and Agentic AI solutions that go beyond automation by combining machine learning, NLP, and autonomous agents.',
      capabilities: [
        'Autonomous Multi-Agent Swarms',
        'Enterprise LLM / RAG Copilots',
        'Cognitive Process Orchestration',
        'Deterministic Guardrails & SLAs',
      ],
      detail:
        'KD Infovision architects resilient, enterprise-grade Agentic AI ecosystems. By integrating self-correcting cognitive loops, vector semantic pipelines, and fine-tuned domain models, we automate high-complexity multi-step enterprise workflows.',
      theme: {
        bg: '#11162B', // Midnight Indigo (matching Webflow Slide 3)
        textColor: '#FFFFFF',
        titleColor: '#FFFFFF',
        descColor: 'rgba(255, 255, 255, 0.85)',
        kickerBg: 'rgba(129, 140, 248, 0.15)',
        kickerColor: '#818CF8',
        kickerBorder: '1px solid rgba(129, 140, 248, 0.3)',
        chipBg: 'rgba(255, 255, 255, 0.12)',
        chipColor: '#EEF2FF',
        chipBorder: '1px solid rgba(255, 255, 255, 0.18)',
        btnBg: '#FFFFFF',
        btnColor: '#11162B',
        btnShadow: '0 4px 18px rgba(0, 0, 0, 0.25)',
        dividerColor: 'rgba(255, 255, 255, 0.15)',
        counterColor: '#818CF8',
      },
    },
    {
      id: 'tech-management-consulting',
      title: 'Technology & Management Consulting',
      kicker: 'Strategic Value',
      icon: ShieldCheck,
      image: '/images/hero_realistic_analytics.jpg',
      alt: 'KD Infovision Technology Management & Enterprise Advisory Spec',
      desc: 'The KDI Framework provides efficient, high-quality solutions designed to meet the unique needs of our clients.',
      capabilities: [
        'Certified Cloud Architects',
        'Staff Augmentation & Dedicated Talent',
        'Enterprise Governance & Best Practices',
        'We Only Suggest What You Need',
      ],
      detail:
        'The KDI Framework provides efficient, high-quality solutions designed to meet the unique needs of our clients. As a trusted advisor and strategic partner, KDI’s expert consultants deliver projects on time while adhering to global standards and industry best practices.',
      theme: {
        bg: '#EDF4EF', // Sage Alabaster / Pearl Ivory
        textColor: '#0A261C',
        titleColor: '#0A261C',
        descColor: '#3A564C',
        kickerBg: 'rgba(5, 150, 105, 0.12)',
        kickerColor: '#059669',
        kickerBorder: '1px solid rgba(5, 150, 105, 0.25)',
        chipBg: '#DCEBE2',
        chipColor: '#064E3B',
        chipBorder: '1px solid #C8DDD0',
        btnBg: '#0A261C',
        btnColor: '#FFFFFF',
        btnShadow: '0 4px 18px rgba(10, 38, 28, 0.25)',
        dividerColor: 'rgba(10, 38, 28, 0.12)',
        counterColor: '#059669',
      },
    },
  ];

  // Merge with dynamic Prisma services if present
  const practices = services.length >= 4
    ? services.slice(0, 4).map((s, idx) => ({
        id: `service-${s.id}`,
        title: s.title,
        kicker: defaultPractices[idx % defaultPractices.length].kicker,
        icon: defaultPractices[idx % defaultPractices.length].icon,
        image: s.image || defaultPractices[idx % defaultPractices.length].image,
        alt: s.title,
        desc: s.description || defaultPractices[idx % defaultPractices.length].desc,
        capabilities: defaultPractices[idx % defaultPractices.length].capabilities,
        detail: s.content || defaultPractices[idx % defaultPractices.length].detail,
        theme: defaultPractices[idx % defaultPractices.length].theme,
      }))
    : defaultPractices;

  // Track scroll progress to drive the scroll-snapping card animation
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollerRef.current) return;
      const rect = scrollerRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      const totalScrollable = rect.height - windowH;
      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);
      const step = 1 / practices.length;
      const newIdx = Math.min(Math.floor(progress / step), practices.length - 1);
      setActiveIdx(newIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [practices.length]);

  const goToSlide = (idx) => {
    setActiveIdx(idx);
    if (scrollerRef.current) {
      const rect = scrollerRef.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const totalScrollable = scrollerRef.current.offsetHeight - window.innerHeight;
      const targetY = scrollTop + rect.top + (idx / practices.length) * totalScrollable + 20;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="solutions"
      style={{
        background: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        paddingTop: '6rem',
        paddingBottom: '4rem',
        position: 'relative',
        color: '#0A1629',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3rem auto' }}>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 'clamp(2.1rem, 3.4vw, 2.9rem)',
              fontWeight: 800,
              color: '#0A1629',
              letterSpacing: '-0.02em',
              lineHeight: 1.25,
              marginBottom: '1.15rem',
            }}
          >
            End-to-End{' '}
            <span style={{ color: '#0077ED' }}>Enterprise Technology</span> Practices
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: '#475569',
              lineHeight: 1.75,
              margin: '0 auto',
              maxWidth: '700px',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 450,
            }}
          >
            Scalable, high-performance IT solutions engineered to accelerate digital
            transformation, modernize infrastructure, and deliver quantifiable business agility.
          </p>
        </div>

        {/* Quick Navigation Tabs matching Webflow */}
        <div
          className="desktop-tabs-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '2rem',
            flexWrap: 'wrap',
          }}
        >
          {practices.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => goToSlide(i)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 18px',
                borderRadius: '9999px',
                fontSize: '13px',
                fontWeight: 700,
                fontFamily: "'Montserrat', sans-serif",
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: activeIdx === i ? '1.5px solid #0077ED' : '1.5px solid #E2E8F0',
                background: activeIdx === i ? '#0077ED' : '#FFFFFF',
                color: activeIdx === i ? '#FFFFFF' : '#475569',
                boxShadow:
                  activeIdx === i
                    ? '0 4px 14px rgba(0, 119, 237, 0.28)'
                    : '0 2px 6px rgba(0, 0, 0, 0.04)',
              }}
            >
              <span style={{ opacity: activeIdx === i ? 0.9 : 0.6, fontSize: '11px' }}>
                0{i + 1}
              </span>
              <span>{p.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* DHRUV SACHDEV SCROLL-SNAPPING CARDS TRACK */}
      <div
        ref={scrollerRef}
        className="cards-scroller"
        style={{
          position: 'relative',
          height: '280vh', // Provides scroll distance to drive the reversing snapping interaction
          width: '100%',
        }}
      >
        {/* Sticky Viewbox locked to viewport */}
        <div
          className="sticky-viewbox"
          style={{
            position: 'sticky',
            top: '85px',
            width: '100%',
            height: 'clamp(520px, 68vh, 640px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 1.5rem',
            boxSizing: 'border-box',
          }}
        >
          {/* Card Wrapper maintaining exact container size footprint */}
          <div
            className="cards-wrapper"
            style={{
              display: 'flex',
              overflow: 'hidden',
              width: '100%',
              maxWidth: '1240px',
              height: '100%',
              borderRadius: '28px',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.12)',
              border: '1.5px solid #E2E8F0',
              position: 'relative',
              background: '#FFFFFF',
            }}
          >
            {/* LEFT HALF: Content Slides (Slides UPwards on scroll) */}
            <div
              className="card-half left"
              style={{
                width: '50%',
                height: '100%',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <div
                style={{
                  height: `${practices.length * 100}%`,
                  display: 'flex',
                  flexDirection: 'column',
                  transform: `translateY(-${(activeIdx * 100) / practices.length}%)`,
                  transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
                  willChange: 'transform',
                }}
              >
                {practices.map((item, idx) => {
                  const IconComp = item.icon;
                  const t = item.theme;

                  return (
                    <div
                      key={item.id}
                      style={{
                        height: `${100 / practices.length}%`,
                        width: '100%',
                        padding: 'clamp(2rem, 3.2vw, 3.25rem)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        background: t.bg,
                        color: t.textColor,
                        boxSizing: 'border-box',
                        position: 'relative',
                      }}
                    >
                      <div>
                        {/* Kicker Tag */}
                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '5px 12px',
                            borderRadius: '9999px',
                            fontSize: '11px',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            background: t.kickerBg,
                            color: t.kickerColor,
                            border: t.kickerBorder,
                            marginBottom: '1.25rem',
                            fontFamily: "'Montserrat', sans-serif",
                          }}
                        >
                          <IconComp size={14} />
                          <span>{item.kicker}</span>
                        </div>

                        {/* Title */}
                        <h3
                          style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: 'clamp(1.65rem, 2.3vw, 2.35rem)',
                            fontWeight: 800,
                            color: t.titleColor,
                            lineHeight: 1.2,
                            letterSpacing: '-0.02em',
                            marginBottom: '1rem',
                          }}
                        >
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p
                          style={{
                            fontSize: 'clamp(0.92rem, 1.05vw, 1rem)',
                            color: t.descColor,
                            lineHeight: 1.7,
                            marginBottom: '1.4rem',
                            maxWidth: '94%',
                            fontFamily: "'Montserrat', sans-serif",
                          }}
                        >
                          {item.desc}
                        </p>

                        {/* Capabilities Chips */}
                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '8px',
                          }}
                        >
                          {item.capabilities.map((cap, cIdx) => (
                            <span
                              key={cIdx}
                              style={{
                                fontSize: '11.5px',
                                fontWeight: 600,
                                color: t.chipColor,
                                background: t.chipBg,
                                border: t.chipBorder,
                                padding: '4px 10px',
                                borderRadius: '6px',
                                fontFamily: "'Montserrat', sans-serif",
                              }}
                            >
                              {cap}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Controls Row: Button & Slide Counter */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginTop: '1.25rem',
                          paddingTop: '1.15rem',
                          borderTop: `1px solid ${t.dividerColor}`,
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => setActiveModal(item)}
                          className="card-slide-cta"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: t.btnBg,
                            color: t.btnColor,
                            padding: '0.75rem 1.6rem',
                            borderRadius: '9999px',
                            border: 'none',
                            fontSize: '0.92rem',
                            fontWeight: 700,
                            cursor: 'pointer',
                            boxShadow: t.btnShadow,
                            transition: 'all 0.25s ease',
                            fontFamily: "'Montserrat', sans-serif",
                          }}
                        >
                          <span>Explore Practice Architecture</span>
                          <ArrowRight size={15} className="slide-btn-arrow" />
                        </button>

                        <div
                          style={{
                            fontSize: '12px',
                            fontWeight: 700,
                            letterSpacing: '1.5px',
                            color: t.counterColor,
                            fontFamily: "'Montserrat', sans-serif",
                          }}
                        >
                          0{idx + 1} / 0{practices.length}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT HALF: Photography (Counter-Slides DOWNwards on scroll) */}
            <div
              className="card-half right"
              style={{
                width: '50%',
                height: '100%',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <div
                style={{
                  height: `${practices.length * 100}%`,
                  display: 'flex',
                  flexDirection: 'column',
                  transform: `translateY(-${((practices.length - 1 - activeIdx) * 100) / practices.length}%)`,
                  transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
                  willChange: 'transform',
                }}
              >
                {[...practices].reverse().map((item) => (
                  <div
                    key={`img-${item.id}`}
                    style={{
                      height: `${100 / practices.length}%`,
                      width: '100%',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                      onError={(e) => {
                        if (!e.currentTarget.src.includes('hero_realistic_analytics.jpg')) {
                          e.currentTarget.src = '/images/hero_realistic_analytics.jpg';
                        }
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          'linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.35) 100%)',
                        pointerEvents: 'none',
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Floating Slide Navigation Arrows on Right Side */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '22px',
                  right: '22px',
                  zIndex: 10,
                  display: 'flex',
                  gap: '8px',
                }}
              >
                <button
                  type="button"
                  onClick={() => goToSlide((activeIdx - 1 + practices.length) % practices.length)}
                  aria-label="Previous slide"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#0A1629',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    transition: 'all 0.2s ease',
                  }}
                  className="arrow-nav-btn"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => goToSlide((activeIdx + 1) % practices.length)}
                  aria-label="Next slide"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#0A1629',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    transition: 'all 0.2s ease',
                  }}
                  className="arrow-nav-btn"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-Friendly Vertical List (Shown on screens < 860px) */}
      <div className="mobile-cards-list container" style={{ display: 'none' }}>
        {practices.map((item) => {
          const IconComp = item.icon;
          const t = item.theme;

          return (
            <div
              key={`mob-${item.id}`}
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                background: t.bg,
                color: t.textColor,
                border: '1.5px solid #E2E8F0',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.08)',
                marginBottom: '1.5rem',
              }}
            >
              <div style={{ width: '100%', height: '220px', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '1.75rem' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    background: t.kickerBg,
                    color: t.kickerColor,
                    marginBottom: '0.85rem',
                  }}
                >
                  <IconComp size={13} />
                  <span>{item.kicker}</span>
                </div>
                <h3
                  style={{
                    fontSize: '1.45rem',
                    fontWeight: 800,
                    color: t.titleColor,
                    marginBottom: '0.75rem',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.94rem',
                    color: t.descColor,
                    lineHeight: 1.65,
                    marginBottom: '1.25rem',
                  }}
                >
                  {item.desc}
                </p>
                <button
                  type="button"
                  onClick={() => setActiveModal(item)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: t.btnBg,
                    color: t.btnColor,
                    padding: '0.7rem 1.4rem',
                    borderRadius: '9999px',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                  }}
                >
                  <span>Explore Practice</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Detail Modal: Deep Technical Feasibility */}
      {activeModal && (
        <div
          className="modal-overlay"
          onClick={() => setActiveModal(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(10, 22, 41, 0.65)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '1.5rem',
          }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              padding: '2.5rem',
              maxWidth: '680px',
              width: '100%',
              borderRadius: '20px',
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.25)',
              color: '#0A1629',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(0, 119, 237, 0.08)',
                    border: '1px solid rgba(0, 119, 237, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0077ED',
                  }}
                >
                  <activeModal.icon size={22} />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '1.35rem',
                      fontWeight: 800,
                      color: '#0A1629',
                      margin: 0,
                    }}
                  >
                    {activeModal.title}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveModal(null)}
                style={{
                  background: '#F1F5F9',
                  border: '1px solid #E2E8F0',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#64748B',
                  transition: 'all 0.2s ease',
                }}
              >
                <X size={18} />
              </button>
            </div>

            <p
              style={{
                fontSize: '0.98rem',
                color: '#475569',
                lineHeight: 1.75,
                marginBottom: '1.75rem',
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              {activeModal.detail}
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <div
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  color: '#0077ED',
                  marginBottom: '0.85rem',
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Core Engineered Capabilities:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {activeModal.capabilities.map((cap, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '0.92rem',
                      color: '#334155',
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    <CheckCircle2 size={16} style={{ color: '#0077ED', flexShrink: 0 }} />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <a
                href="#contact"
                onClick={() => setActiveModal(null)}
                style={{
                  flex: 1,
                  textAlign: 'center',
                  background: 'linear-gradient(93.05deg, #0077ED 0%, #0056B3 100%)',
                  color: '#FFFFFF',
                  padding: '0.9rem',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '0.925rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 15px rgba(0, 119, 237, 0.35)',
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Schedule Architecture Consultation
              </a>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                style={{
                  padding: '0.9rem 1.75rem',
                  borderRadius: '10px',
                  border: '1px solid #E2E8F0',
                  background: '#F1F5F9',
                  color: '#475569',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        :global(.card-slide-cta:hover) {
          transform: translateY(-2px);
          filter: brightness(1.05);
        }
        :global(.card-slide-cta:hover .slide-btn-arrow) {
          transform: translateX(4px);
        }
        :global(.slide-btn-arrow) {
          transition: transform 0.25s ease;
        }
        :global(.arrow-nav-btn:hover) {
          background: #FFFFFF !important;
          transform: scale(1.08);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2) !important;
        }

        @media (max-width: 860px) {
          :global(.cards-scroller) {
            display: none !important;
          }
          :global(.desktop-tabs-nav) {
            display: none !important;
          }
          :global(.mobile-cards-list) {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
}
