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
} from 'lucide-react';

export default function HeroSection({ slides = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  // 3 Multi-Colored, Realistic Photography Slides (Background Carousel)
  const defaultCarouselSlides = [
    {
      id: 'lakehouse',
      tag: 'ENTERPRISE DATA & CLOUD PLATFORMS',
      themeColor: '#158AE2',
      themeBg: 'rgba(21, 138, 226, 0.15)',
      themeBorder: 'rgba(21, 138, 226, 0.4)',
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
      themeBg: 'rgba(16, 185, 129, 0.15)',
      themeBorder: 'rgba(16, 185, 129, 0.4)',
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
      themeBg: 'rgba(245, 158, 11, 0.15)',
      themeBorder: 'rgba(245, 158, 11, 0.4)',
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
    { name: 'Microsoft Azure', icon: Server, color: '#38BDF8' },
    { name: 'Amazon Web Services', icon: Cloud, color: '#FBBF24' },
    { name: 'Google Cloud Platform', icon: Cloud, color: '#60A5FA' },
    { name: 'Snowflake', icon: Database, color: '#38BDF8' },
    { name: 'Databricks', icon: Layers, color: '#F87171' },
    { name: 'Power BI', icon: BarChart3, color: '#FCD34D' },
    { name: 'Tableau', icon: BarChart3, color: '#FB923C' },
    { name: 'Apache Kafka', icon: Zap, color: '#E2E8F0' },
    { name: 'Enterprise AI & MLOps', icon: Cpu, color: '#34D399' },
  ];

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: '#031838',
        paddingTop: 'clamp(96px, 12vh, 115px)',
        paddingBottom: '2.5rem',
        overflow: 'hidden',
        color: '#FFFFFF',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* BACKGROUND SLIDING CAROUSEL TRACK (Realistic Images with subtle opacity) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          width: `${total * 100}%`,
          height: '100%',
          transform: `translateX(-${currentSlide * (100 / total)}%)`,
          transition: 'transform 0.85s cubic-bezier(0.16, 1, 0.3, 1)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        {carouselSlides.map((slide, idx) => (
          <div
            key={slide.id}
            style={{
              position: 'relative',
              width: `${100 / total}%`,
              height: '100%',
              flexShrink: 0,
              overflow: 'hidden',
              background: '#031838',
            }}
          >
            {/* Realistic Enterprise Photograph with Low Opacity */}
            <img
              src={slide.image}
              alt={slide.alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.24,
                transform: currentSlide === idx ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 6s ease-out, opacity 0.5s ease',
                display: 'block',
              }}
            />

            {/* Gradient Mask for Optimal Contrast & Text Legibility */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(90deg, rgba(3, 24, 56, 0.94) 0%, rgba(3, 24, 56, 0.76) 55%, rgba(3, 24, 56, 0.88) 100%)',
              }}
            />
          </div>
        ))}
      </div>

      {/* Subtle Bottom Vignette */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '100px',
          background: 'linear-gradient(to top, #031838 0%, transparent 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* CONTENT LAYER DIRECTLY OVER THE BACKGROUND */}
      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div style={{ maxWidth: '820px' }}>
          {/* Tag Badge & Telemetry Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              flexWrap: 'wrap',
              marginBottom: '1rem',
            }}
          >
            {/* Category Tag Badge */}
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
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease',
              }}
            >
              <ShieldCheck size={15} />
              <span>{active.tag}</span>
            </div>

            {/* Live Telemetry Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '30px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#E2E8F0',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.5px',
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
              <span>{active.telemetry}</span>
            </div>

            {/* Slide Counter */}
            <div
              style={{
                fontSize: '0.775rem',
                fontWeight: 700,
                color: 'rgba(255, 255, 255, 0.55)',
                letterSpacing: '1px',
              }}
            >
              0{currentSlide + 1} / 0{total}
            </div>
          </div>

          {/* Headline */}
          <h1
            key={active.id + '-headline'}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.3rem, 4.2vw, 3.75rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              marginBottom: '1rem',
              animation: 'hero-text-in 0.4s ease forwards',
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

          {/* Concise Quality Subtext */}
          <p
            key={active.id + '-subtext'}
            style={{
              fontSize: '1.1rem',
              lineHeight: 1.75,
              color: 'rgba(255, 255, 255, 0.85)',
              maxWidth: '680px',
              marginBottom: '1.5rem',
              animation: 'hero-text-in 0.4s ease forwards',
            }}
          >
            {active.subtext}
          </p>

          {/* Dual CTAs & Metric Highlight */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              flexWrap: 'wrap',
              marginBottom: '1.75rem',
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
                fontSize: '1rem',
                fontWeight: 700,
                padding: '0.85rem 1.75rem',
                borderRadius: '10px',
                textDecoration: 'none',
                boxShadow: `0 8px 24px ${active.themeColor}55`,
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = `0 12px 28px ${active.themeColor}77`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `0 8px 24px ${active.themeColor}55`;
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
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(10px)',
                color: '#FFFFFF',
                fontSize: '1rem',
                fontWeight: 700,
                padding: '0.85rem 1.65rem',
                borderRadius: '10px',
                border: '1.5px solid rgba(255, 255, 255, 0.3)',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = active.themeColor;
                e.currentTarget.style.color = active.themeColor;
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              }}
            >
              <span>{active.secBtn}</span>
            </Link>

            {/* Inline Key Metric Highlight Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
              }}
            >
              <div style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 600 }}>
                {active.subMetric}:
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#FFFFFF' }}>
                {active.metric}
              </div>
            </div>
          </div>

          {/* Credibility Telemetry Strip */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.75rem',
              flexWrap: 'wrap',
              paddingTop: '1.25rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} style={{ color: active.themeColor }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'rgba(255, 255, 255, 0.85)' }}>
                <strong>150+</strong> Enterprise Deployments
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} style={{ color: active.themeColor }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'rgba(255, 255, 255, 0.85)' }}>
                <strong>99.9%</strong> Production SLA Uptime
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} style={{ color: active.themeColor }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'rgba(255, 255, 255, 0.85)' }}>
                <strong>SOC2 &amp; ISO</strong> Ready
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM SLIDE SELECTOR & ARROW CONTROLS */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            width: '100%',
            maxWidth: '820px',
            marginTop: '2rem',
            flexWrap: 'wrap',
          }}
        >
          {/* 3 Tabs */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '12px',
              flex: 1,
              minWidth: '320px',
            }}
            className="hero-tabs-grid"
          >
            {carouselSlides.map((slide, idx) => {
              const isSelected = idx === currentSlide;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => handleSelectSlide(idx)}
                  style={{
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: isSelected ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.04)',
                    backdropFilter: 'blur(10px)',
                    border: `1.5px solid ${isSelected ? slide.themeColor : 'rgba(255, 255, 255, 0.12)'}`,
                    boxShadow: isSelected ? `0 4px 16px ${slide.themeColor}33` : 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.25s ease',
                  }}
                >
                  {/* Active Progress Bar Countdown Line */}
                  {isSelected && (
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        width: `${progress}%`,
                        background: `${slide.themeColor}22`,
                        transition: 'width 0.05s linear',
                        pointerEvents: 'none',
                      }}
                    />
                  )}

                  <div
                    style={{
                      fontSize: '0.675rem',
                      fontWeight: 700,
                      color: isSelected ? slide.themeColor : 'rgba(255, 255, 255, 0.5)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: '2px',
                    }}
                  >
                    Slide 0{idx + 1}
                  </div>
                  <div
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      color: isSelected ? '#FFFFFF' : 'rgba(255, 255, 255, 0.75)',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {slide.shortTitle}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Prev / Next Arrows right next to the tabs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous Slide"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = active.themeColor;
                e.currentTarget.style.borderColor = active.themeColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next Slide"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = active.themeColor;
                e.currentTarget.style.borderColor = active.themeColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Enterprise Cloud & Technology Ecosystem Ribbon ("United by Technology") */}
        <div
          style={{
            marginTop: '2.5rem',
            padding: '1.25rem 2rem',
            borderRadius: '14px',
            background: 'rgba(255, 255, 255, 0.04)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <div
            style={{
              fontSize: '0.725rem',
              fontWeight: 800,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 0.6)',
              marginBottom: '0.85rem',
              textAlign: 'center',
            }}
          >
            UNITED BY TECHNOLOGY • TRUSTED ENTERPRISE ECOSYSTEM
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
                <div
                  key={idx}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '5px 14px',
                    borderRadius: '9999px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#FFFFFF',
                    fontSize: '0.775rem',
                    fontWeight: 600,
                    letterSpacing: '0.2px',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <TechIcon size={14} style={{ color: tech.color }} />
                  <span>{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes hero-text-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 900px) {
          :global(.hero-tabs-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
