'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  Database,
  Layers,
  BarChart3,
  Server,
  Cloud,
  CheckCircle2,
  Activity,
  Zap,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Play,
  Pause,
} from 'lucide-react';
import HeroBackgroundAnimation from './HeroBackgroundAnimation';

export default function HeroSection({ slides = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  // 3 Multi-Colored, Realistic Photography Slides
  const defaultCarouselSlides = [
    {
      id: 'lakehouse',
      tag: 'ENTERPRISE DATA & CLOUD PLATFORMS',
      themeColor: '#158AE2',
      themeBg: 'rgba(21, 138, 226, 0.08)',
      themeBorder: 'rgba(21, 138, 226, 0.25)',
      headline: 'Engineering Resilient Cloud Lakehouses for',
      headlineEmp: 'Enterprise Scale.',
      subtext:
        'Unify disparate operational systems into modern Snowflake and Databricks lakehouses with automated dbt transformations and real-time streaming telemetry.',
      primaryBtn: 'Explore Cloud Solutions',
      primaryUrl: '/services',
      secBtn: 'Schedule Consultation',
      secUrl: '/contact',
      image: '/images/hero_realistic_analytics.jpg',
      alt: 'KD Infovision Data Architect analyzing cloud lakehouse and Power BI dashboards in Bangalore',
      metric: '4.8 TB/s Ingestion',
      subMetric: 'Decoupled Storage & Compute',
      telemetry: 'ACTIVE TELEMETRY • 32ms LATENCY',
      stack: ['Snowflake', 'Databricks', 'AWS', 'Azure'],
      shortTitle: 'Cloud Lakehouse',
    },
    {
      id: 'ai-mlops',
      tag: 'PRODUCTION AI & MACHINE LEARNING',
      themeColor: '#10B981',
      themeBg: 'rgba(16, 185, 129, 0.08)',
      themeBorder: 'rgba(16, 185, 129, 0.25)',
      headline: 'Deploying Production-Grade AI Systems with',
      headlineEmp: 'Measurable ROI.',
      subtext:
        'Move beyond experimental Jupyter notebooks. We build hardened RAG architectures, low-latency LLM inference pipelines, and automated drift monitoring.',
      primaryBtn: 'Explore AI Services',
      primaryUrl: '/services',
      secBtn: 'Book Architecture Review',
      secUrl: '/contact',
      image: '/images/service_software_real.jpg',
      alt: 'KD Infovision ML and software engineers collaborating at workstation',
      metric: '2.1 ms Latency',
      subMetric: '98% Model Accuracy SLA',
      telemetry: 'INFERENCE PIPELINE ACTIVE • 99.9% SLA',
      stack: ['PyTorch', 'OpenAI', 'LangChain', 'vLLM'],
      shortTitle: 'Production AI / MLOps',
    },
    {
      id: 'executive-bi',
      tag: 'EXECUTIVE BI & MODERN ANALYTICS',
      themeColor: '#F59E0B',
      themeBg: 'rgba(245, 158, 11, 0.08)',
      themeBorder: 'rgba(245, 158, 11, 0.25)',
      headline: 'Empowering C-Suite Decision Making with',
      headlineEmp: 'Real-Time Power BI.',
      subtext:
        'Replace manual spreadsheets with executive Power BI semantic layers, automated DAX model caching, and board-ready operational KPI dashboards.',
      primaryBtn: 'View Case Studies',
      primaryUrl: '/case-studies',
      secBtn: 'Request Live Demo',
      secUrl: '/contact',
      image: '/images/service_analytics_real.jpg',
      alt: 'KD Infovision consultant presenting executive Power BI dashboard in boardroom',
      metric: 'Sub-Second Caching',
      subMetric: 'Row-Level Enterprise Security',
      telemetry: 'LIVE BI FEED • ₹14.5 CR METRICS',
      stack: ['Power BI', 'Fabric', 'Tableau', 'Qlik'],
      shortTitle: 'Executive BI & Strategy',
    },
  ];

  // Merge with database slides if they exist, or use default rich slides
  const carouselSlides = slides.length >= 3
    ? slides.slice(0, 3).map((s, idx) => ({
        ...defaultCarouselSlides[idx % defaultCarouselSlides.length],
        tag: s.tag || defaultCarouselSlides[idx % defaultCarouselSlides.length].tag,
        headline: s.headline || defaultCarouselSlides[idx % defaultCarouselSlides.length].headline,
        headlineEmp: s.headlineEmp || defaultCarouselSlides[idx % defaultCarouselSlides.length].headlineEmp,
        subtext: s.subtext || defaultCarouselSlides[idx % defaultCarouselSlides.length].subtext,
        primaryBtn: s.primaryBtn || defaultCarouselSlides[idx % defaultCarouselSlides.length].primaryBtn,
        primaryUrl: s.primaryUrl || defaultCarouselSlides[idx % defaultCarouselSlides.length].primaryUrl,
        secBtn: s.secBtn || defaultCarouselSlides[idx % defaultCarouselSlides.length].secBtn,
        secUrl: s.secUrl || defaultCarouselSlides[idx % defaultCarouselSlides.length].secUrl,
      }))
    : defaultCarouselSlides;

  const total = carouselSlides.length;
  const active = carouselSlides[currentSlide];

  // Auto-play timer with progress animation (6000ms per slide)
  useEffect(() => {
    if (isPaused) return;

    const interval = 50; // update progress every 50ms
    const step = 100 / (6000 / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((curr) => (curr + 1) % total);
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isPaused, total, currentSlide]);

  const handleNext = () => {
    setProgress(0);
    setCurrentSlide((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setProgress(0);
    setCurrentSlide((prev) => (prev - 1 + total) % total);
  };

  const handleSelectSlide = (idx) => {
    setProgress(0);
    setCurrentSlide(idx);
  };

  // Enterprise Technology Ecosystem
  const techEcosystem = [
    { name: 'Microsoft Azure', icon: Server, color: '#0078D4' },
    { name: 'Amazon Web Services', icon: Cloud, color: '#FF9900' },
    { name: 'Google Cloud Platform', icon: Cloud, color: '#4285F4' },
    { name: 'Snowflake', icon: Database, color: '#29B5E8' },
    { name: 'Databricks', icon: Layers, color: '#FF3621' },
    { name: 'Power BI', icon: BarChart3, color: '#F2C811' },
    { name: 'Tableau', icon: BarChart3, color: '#E97627' },
    { name: 'Apache Kafka', icon: Zap, color: '#231F20' },
    { name: 'Enterprise AI & MLOps', icon: Cpu, color: '#10B981' },
  ];

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: '#FFFFFF',
        paddingTop: '110px',
        paddingBottom: '3.5rem',
        overflow: 'hidden',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Harmonic Ambient Background Wavefield */}
      <HeroBackgroundAnimation />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        {/* Main Hero Split Grid: Airy, spacious, Team Computers-inspired */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.08fr 0.92fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* LEFT COLUMN: Clean Authoritative Enterprise Typography with Slide Transitions */}
          <div key={active.id} style={{ animation: 'hero-fade-in 0.45s ease forwards' }}>
            {/* Tag Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '30px',
                background: active.themeBg,
                border: `1px solid ${active.themeBorder}`,
                color: active.themeColor,
                fontSize: '0.785rem',
                fontWeight: 700,
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
                transition: 'all 0.3s ease',
              }}
            >
              <ShieldCheck size={15} />
              <span>{active.tag}</span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.3rem, 3.7vw, 3.65rem)',
                fontWeight: 800,
                color: 'var(--navy)',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                marginBottom: '1.25rem',
              }}
            >
              {active.headline}{' '}
              <span
                style={{
                  color: active.themeColor,
                  position: 'relative',
                  display: 'inline-block',
                  transition: 'color 0.3s ease',
                }}
              >
                {active.headlineEmp}
              </span>
            </h1>

            {/* Concise Quality Subtext: 2 sentences, zero clutter */}
            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.75,
                color: '#475569',
                maxWidth: '560px',
                marginBottom: '2rem',
              }}
            >
              {active.subtext}
            </p>

            {/* Dual CTAs */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: '2.5rem',
              }}
            >
              <Link
                href={active.primaryUrl}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: active.themeColor,
                  color: '#FFFFFF',
                  fontSize: '0.975rem',
                  fontWeight: 700,
                  padding: '0.85rem 1.75rem',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  boxShadow: `0 6px 20px ${active.themeColor}55`,
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>{active.primaryBtn}</span>
                <ArrowRight size={18} />
              </Link>

              <Link
                href={active.secUrl}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#FFFFFF',
                  color: 'var(--navy)',
                  fontSize: '0.975rem',
                  fontWeight: 700,
                  padding: '0.85rem 1.6rem',
                  borderRadius: '10px',
                  border: '1.5px solid #CBD5E1',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = active.themeColor;
                  e.currentTarget.style.color = active.themeColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#CBD5E1';
                  e.currentTarget.style.color = 'var(--navy)';
                }}
              >
                <span>{active.secBtn}</span>
              </Link>
            </div>

            {/* Credibility Telemetry Strip */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                flexWrap: 'wrap',
                paddingTop: '1.25rem',
                borderTop: '1px solid #E2E8F0',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} style={{ color: active.themeColor }} />
                <span style={{ fontSize: '0.825rem', fontWeight: 600, color: '#334155' }}>
                  <strong>150+</strong> Enterprise Deployments
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} style={{ color: active.themeColor }} />
                <span style={{ fontSize: '0.825rem', fontWeight: 600, color: '#334155' }}>
                  <strong>99.9%</strong> Production SLA Uptime
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} style={{ color: active.themeColor }} />
                <span style={{ fontSize: '0.825rem', fontWeight: 600, color: '#334155' }}>
                  <strong>SOC2 &amp; ISO</strong> Ready
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Realistic Enterprise Photography Carousel Showcase */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* Main Image Showcase Container with Carousel Animation */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '560px',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 24px 60px rgba(5, 45, 93, 0.14)',
                border: `1.5px solid ${active.themeColor}40`,
                background: '#052D5D',
                aspectRatio: '16 / 10',
                transition: 'border-color 0.4s ease',
              }}
            >
              {/* Authentic Corporate Photography */}
              <img
                key={active.id}
                src={active.image}
                alt={active.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  animation: 'ken-burns 12s ease-out infinite alternate',
                }}
              />

              {/* Subtle Gradient Vignette */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, rgba(5, 45, 93, 0.25) 0%, rgba(5, 45, 93, 0.05) 40%, rgba(5, 45, 93, 0.85) 100%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Top Floating Telemetry Glass Chip */}
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: 'rgba(5, 45, 93, 0.85)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '10px',
                  padding: '7px 13px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#FFFFFF',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                }}
              >
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: active.themeColor,
                    boxShadow: `0 0 10px ${active.themeColor}`,
                  }}
                />
                <span style={{ fontSize: '0.725rem', fontWeight: 700, letterSpacing: '0.5px' }}>
                  {active.telemetry}
                </span>
              </div>

              {/* Slide Counter Indicator (e.g. 01 / 03) */}
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(5, 45, 93, 0.85)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '10px',
                  padding: '5px 12px',
                  color: '#FFFFFF',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  letterSpacing: '1px',
                }}
              >
                0{currentSlide + 1} / 0{total}
              </div>

              {/* Prev / Next Circular Navigation Arrows */}
              <button
                onClick={handlePrev}
                aria-label="Previous Slide"
                style={{
                  position: 'absolute',
                  left: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(5, 45, 93, 0.75)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  zIndex: 2,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = active.themeColor)}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(5, 45, 93, 0.75)')}
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next Slide"
                style={{
                  position: 'absolute',
                  right: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(5, 45, 93, 0.75)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  zIndex: 2,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = active.themeColor)}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(5, 45, 93, 0.75)')}
              >
                <ChevronRight size={20} />
              </button>

              {/* Bottom Glass Card Highlight */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px',
                  background: 'rgba(5, 45, 93, 0.9)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: `1px solid ${active.themeColor}50`,
                  borderRadius: '12px',
                  padding: '12px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.675rem', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                    {active.subMetric}
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2, marginTop: '2px' }}>
                    {active.metric}
                  </div>
                </div>

                <div
                  style={{
                    fontSize: '0.725rem',
                    fontWeight: 700,
                    color: active.themeColor,
                    background: `${active.themeColor}22`,
                    padding: '4px 10px',
                    borderRadius: '6px',
                    border: `1px solid ${active.themeColor}40`,
                  }}
                >
                  {active.stack.slice(0, 2).join(' + ')}
                </div>
              </div>
            </div>

            {/* Slide Navigation Progress Tabs (3 Pills Below Showcase) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '10px',
                width: '100%',
                maxWidth: '560px',
                marginTop: '1.25rem',
              }}
            >
              {carouselSlides.map((slide, idx) => {
                const isSelected = idx === currentSlide;
                return (
                  <button
                    key={slide.id}
                    onClick={() => handleSelectSlide(idx)}
                    style={{
                      padding: '10px 12px',
                      borderRadius: '10px',
                      background: isSelected ? '#FFFFFF' : '#F8FAFC',
                      border: `1.5px solid ${isSelected ? slide.themeColor : '#E2E8F0'}`,
                      boxShadow: isSelected ? '0 4px 14px rgba(5, 45, 93, 0.08)' : 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    {/* Active Progress Bar Fill */}
                    {isSelected && (
                      <div
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          bottom: 0,
                          width: `${progress}%`,
                          background: `${slide.themeColor}18`,
                          transition: 'width 0.05s linear',
                          pointerEvents: 'none',
                        }}
                      />
                    )}

                    <div style={{ fontSize: '0.65rem', fontWeight: 700, color: isSelected ? slide.themeColor : '#94A3B8', textTransform: 'uppercase' }}>
                      Slide 0{idx + 1}
                    </div>
                    <div style={{ fontSize: '0.775rem', fontWeight: 800, color: isSelected ? 'var(--navy)' : '#64748B', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {slide.shortTitle}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Enterprise Cloud & Technology Ecosystem Ribbon ("United by Technology") */}
        <div
          style={{
            marginTop: '3.5rem',
            padding: '1.25rem 2rem',
            borderRadius: '14px',
            background: '#F8FAFC',
            border: '1px solid #E2E8F0',
          }}
        >
          <div
            style={{
              fontSize: '0.725rem',
              fontWeight: 800,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: '#64748B',
              marginBottom: '0.85rem',
              textAlign: 'center',
            }}
          >
            UNITED BY TECHNOLOGY • ENTERPRISE PARTNER ECOSYSTEM
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              flexWrap: 'wrap',
            }}
          >
            {techEcosystem.map((tech, idx) => {
              const TechIcon = tech.icon;
              return (
                <div key={idx} className="tech-pill">
                  <TechIcon size={14} style={{ color: tech.color }} />
                  <span>{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes hero-fade-in {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes ken-burns {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.08);
          }
        }
        @media (max-width: 960px) {
          :global(.hero-grid) {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
