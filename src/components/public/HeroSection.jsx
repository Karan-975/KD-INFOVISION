'use client';

import React, { useState, useEffect } from 'react';
import {
  Cpu,
  Database,
  Layers,
  BarChart3,
  Server,
  Cloud,
  Zap,
} from 'lucide-react';

export default function HeroSection({ slides = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 3 Multi-Colored, Realistic Photography Slides (Fallback Defaults)
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
      image: '/images/hero_realistic_analytics.jpg',
      alt: 'KD Infovision Data Architect analyzing cloud lakehouse and Power BI dashboards',
      telemetry: 'ACTIVE TELEMETRY • 32ms LATENCY',
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
      image: '/images/service_software_real.jpg',
      alt: 'KD Infovision ML and software engineers collaborating at workstation',
      telemetry: 'INFERENCE PIPELINE ACTIVE • 99.9% SLA',
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
      image: '/images/service_analytics_real.jpg',
      alt: 'KD Infovision consultant presenting executive Power BI dashboard in boardroom',
      telemetry: 'LIVE BI FEED • ₹14.5 CR METRICS',
    },
  ];

  // Fully Dynamic Database Slides: support any number of slides managed by the Admin
  const activeDbSlides = Array.isArray(slides) && slides.length > 0
    ? slides.filter((s) => s.isActive !== false)
    : [];

  const carouselSlides = activeDbSlides.length > 0
    ? activeDbSlides.map((s, idx) => {
        const fallback = defaultCarouselSlides[idx % defaultCarouselSlides.length];
        return {
          id: s.id || `slide-${idx}`,
          tag: s.tag || fallback.tag,
          headline: s.headline || fallback.headline,
          headlineEmp: s.headlineEmp || fallback.headlineEmp,
          subtext: s.subtext || fallback.subtext,
          image: s.imageUrl || fallback.image,
          alt: `${s.headline || ''} ${s.headlineEmp || ''}`.trim() || fallback.alt,
          telemetry: fallback.telemetry,
          themeColor: fallback.themeColor,
          themeBg: fallback.themeBg,
          themeBorder: fallback.themeBorder,
        };
      })
    : defaultCarouselSlides;

  const total = carouselSlides.length;
  const active = carouselSlides[currentSlide] || carouselSlides[0];

  // Automatic slide rotation: advance background image every 5 seconds
  useEffect(() => {
    if (total <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % total);
    }, 5000);

    return () => clearInterval(interval);
  }, [total]);

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
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#031838',
        paddingTop: 'clamp(96px, 12vh, 120px)',
        paddingBottom: '2rem',
        overflow: 'hidden',
        color: '#FFFFFF',
      }}
    >
      {/* BACKGROUND DYNAMIC IMAGES (Cross-Fading Smoothly after Time Interval) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        {carouselSlides.map((slide, idx) => (
          <div
            key={slide.id}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: currentSlide === idx ? 1 : 0,
              transition: 'opacity 1.2s ease-in-out',
              overflow: 'hidden',
              background: '#031838',
              zIndex: currentSlide === idx ? 1 : 0,
            }}
          >
            {/* Realistic Enterprise Photograph - Full Picture Visible */}
            <img
              src={slide.image}
              alt={slide.alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 35%',
                opacity: 0.85,
                transform: currentSlide === idx ? 'scale(1.03)' : 'scale(1)',
                transition: 'transform 7s ease-out, opacity 1.2s ease-in-out',
                display: 'block',
              }}
            />

            {/* Directional Contrast Mask: Preserves text legibility on left while keeping complete picture clear on right */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(90deg, rgba(3, 24, 56, 0.90) 0%, rgba(3, 24, 56, 0.72) 38%, rgba(3, 24, 56, 0.25) 68%, rgba(3, 24, 56, 0.08) 100%)',
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
          height: '70px',
          background: 'linear-gradient(to top, rgba(3, 24, 56, 0.85) 0%, transparent 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* CONTENT LAYER DIRECTLY OVER THE BACKGROUND */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flex: 1,
        }}
      >
        {/* Middle Vertically Positioned Content */}
        <div
          style={{
            maxWidth: '840px',
            margin: 'auto 0',
            paddingTop: '2rem',
            paddingBottom: '2rem',
          }}
        >
          {/* Headline */}
          <h1
            key={active.id + '-headline'}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 4.8vw, 4.2rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              marginBottom: '1.5rem',
              textShadow: '0 2px 16px rgba(0, 0, 0, 0.8)',
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
                textShadow: `0 0 28px ${active.themeColor}88`,
              }}
            >
              {active.headlineEmp}
            </span>
          </h1>

          {/* Concise Quality Subtext */}
          <p
            key={active.id + '-subtext'}
            style={{
              fontSize: '1.2rem',
              lineHeight: 1.85,
              color: 'rgba(255, 255, 255, 0.95)',
              maxWidth: '720px',
              marginBottom: '0',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.85)',
              animation: 'hero-text-in 0.4s ease forwards',
            }}
          >
            {active.subtext}
          </p>
        </div>

        {/* BOTTOM DOCKED AREA: Ecosystem Ribbon & Slide Indicators */}
        <div style={{ width: '100%', marginTop: 'auto' }}>
          {/* Enterprise Cloud & Technology Ecosystem Ribbon ("United by Technology") */}
          <div
            style={{
              padding: '0.85rem 1.75rem',
              borderRadius: '14px',
              background: 'rgba(3, 24, 56, 0.65)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
            }}
          >
            <div
              style={{
                fontSize: '0.7rem',
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
                gap: '12px',
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

          {/* Minimalist Slide Progress Indicators (Positioned at Bottom-Left as marked in Image-2) */}
          {total > 1 && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginTop: '1.25rem',
                paddingLeft: '4px',
              }}
            >
              {carouselSlides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  style={{
                    width: currentSlide === idx ? '40px' : '16px',
                    height: '5px',
                    borderRadius: '4px',
                    background: currentSlide === idx ? active.themeColor : 'rgba(255, 255, 255, 0.35)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.35s ease',
                    padding: 0,
                    boxShadow: currentSlide === idx ? `0 0 10px ${active.themeColor}88` : 'none',
                  }}
                />
              ))}
            </div>
          )}
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
      `}</style>
    </section>
  );
}
