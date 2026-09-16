'use client';

import React, { useState, useEffect } from 'react';
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
  Lock,
  ChevronRight,
} from 'lucide-react';
import HeroBackgroundAnimation from './HeroBackgroundAnimation';

export default function HeroSection({ slides = [] }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeVisualMode, setActiveVisualMode] = useState('lakehouse'); // 'lakehouse' | 'ai' | 'bi'

  const total = slides.length || 1;

  useEffect(() => {
    if (isPaused || total <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 8000);
    return () => clearInterval(timer);
  }, [isPaused, total]);

  const activeSlide = slides[current] || {
    tag: 'Enterprise IT Solutions & AI Systems',
    headline: 'Empowering Enterprises with AI-First Solutions &',
    headlineEmp: 'Resilient Infrastructure.',
    subtext:
      'From modern cloud lakehouses and real-time streaming architectures to production AI and executive Power BI dashboards, KD Infovision delivers scalable IT excellence with quantifiable business ROI.',
    primaryBtn: 'Schedule Consultation',
    primaryUrl: '#contact',
    secBtn: 'Explore Solutions',
    secUrl: '#solutions',
  };

  // Enterprise Cloud & Technology Ecosystem
  const techEcosystem = [
    { name: 'Microsoft Azure', icon: Server },
    { name: 'Amazon Web Services', icon: Cloud },
    { name: 'Google Cloud Platform', icon: Cloud },
    { name: 'Snowflake', icon: Database },
    { name: 'Databricks', icon: Layers },
    { name: 'Power BI', icon: BarChart3 },
    { name: 'Tableau', icon: BarChart3 },
    { name: 'Apache Kafka', icon: Zap },
    { name: 'Enterprise AI & MLOps', icon: Cpu },
  ];

  // Authentic enterprise photography showcase modes
  const visualModes = {
    lakehouse: {
      label: 'Cloud Lakehouse',
      image: '/images/hero_realistic_analytics.jpg',
      alt: 'KD Infovision Data Architect analyzing cloud lakehouse and Power BI dashboards in Bangalore',
      metric: '4.8 TB/s Ingestion',
      sub: 'Decoupled Compute & Storage',
      tag: 'Snowflake + Databricks',
      caption: 'Production Cloud Lakehouse & BI Workstation',
    },
    ai: {
      label: 'Production AI / MLOps',
      image: '/images/service_software_real.jpg',
      alt: 'KD Infovision ML engineers architecting scalable prediction pipelines',
      metric: '2.1 ms Latency',
      sub: '98% Model Accuracy SLA',
      tag: 'AWS + PyTorch + PostgreSQL',
      caption: 'Scalable ML & Cloud Engineering Pods',
    },
    bi: {
      label: 'Executive BI & Dashboards',
      image: '/images/service_analytics_real.jpg',
      alt: 'KD Infovision consultant presenting executive Power BI dashboard in boardroom',
      metric: 'Sub-second DAX Caching',
      sub: 'Row-Level Enterprise Security',
      tag: 'Power BI + Microsoft Fabric',
      caption: 'Executive Strategy & Operational Analytics',
    },
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '88vh',
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
          {/* LEFT COLUMN: Clean Authoritative Enterprise Typography */}
          <div>
            {/* Tag Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '30px',
                background: 'rgba(21, 138, 226, 0.08)',
                border: '1px solid rgba(21, 138, 226, 0.22)',
                color: 'var(--blue)',
                fontSize: '0.785rem',
                fontWeight: 700,
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}
            >
              <ShieldCheck size={15} />
              <span>{activeSlide.tag || 'ENTERPRISE IT SOLUTIONS & AI SYSTEMS'}</span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.4rem, 3.8vw, 3.65rem)',
                fontWeight: 800,
                color: 'var(--navy)',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                marginBottom: '1.25rem',
              }}
            >
              {activeSlide.headline}{' '}
              <span
                style={{
                  color: 'var(--blue)',
                  position: 'relative',
                  display: 'inline-block',
                }}
              >
                {activeSlide.headlineEmp || 'Resilient Infrastructure.'}
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
              {activeSlide.subtext}
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
              <a
                href={activeSlide.primaryUrl || '#contact'}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'var(--blue)',
                  color: '#FFFFFF',
                  fontSize: '0.975rem',
                  fontWeight: 700,
                  padding: '0.85rem 1.75rem',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  boxShadow: '0 6px 20px rgba(21, 138, 226, 0.35)',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#0E70BA';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--blue)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>{activeSlide.primaryBtn || 'Schedule Consultation'}</span>
                <ArrowRight size={18} />
              </a>

              <a
                href={activeSlide.secUrl || '#solutions'}
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
                  e.currentTarget.style.borderColor = 'var(--blue)';
                  e.currentTarget.style.color = 'var(--blue)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#CBD5E1';
                  e.currentTarget.style.color = 'var(--navy)';
                }}
              >
                <span>{activeSlide.secBtn || 'Explore Solutions'}</span>
              </a>
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
                <CheckCircle2 size={16} style={{ color: 'var(--blue)' }} />
                <span style={{ fontSize: '0.825rem', fontWeight: 600, color: '#334155' }}>
                  <strong>150+</strong> Enterprise Deployments
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--blue)' }} />
                <span style={{ fontSize: '0.825rem', fontWeight: 600, color: '#334155' }}>
                  <strong>99.9%</strong> Production SLA Uptime
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--blue)' }} />
                <span style={{ fontSize: '0.825rem', fontWeight: 600, color: '#334155' }}>
                  <strong>SOC2 &amp; ISO</strong> Ready
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Realistic Enterprise Photography Showcase with Live Telemetry */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {/* Main Image Showcase Container */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '560px',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 24px 60px rgba(5, 45, 93, 0.14)',
                border: '1px solid rgba(21, 138, 226, 0.25)',
                background: '#052D5D',
                aspectRatio: '16 / 10',
              }}
            >
              {/* Authentic High-Resolution Corporate Photography */}
              <img
                key={activeVisualMode}
                src={visualModes[activeVisualMode].image}
                alt={visualModes[activeVisualMode].alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'opacity 0.4s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              />

              {/* Subtle Gradient Vignette */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, rgba(5, 45, 93, 0.2) 0%, rgba(5, 45, 93, 0.05) 40%, rgba(5, 45, 93, 0.8) 100%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Top Floating Telemetry Glass Chip */}
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: 'rgba(5, 45, 93, 0.82)',
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
                    background: '#22C55E',
                    boxShadow: '0 0 10px #22C55E',
                  }}
                />
                <span style={{ fontSize: '0.725rem', fontWeight: 700, letterSpacing: '0.5px' }}>
                  ACTIVE TELEMETRY • 32ms LATENCY
                </span>
              </div>

              {/* Interactive Visual Mode Switcher Tabs */}
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  display: 'flex',
                  gap: '5px',
                  background: 'rgba(5, 45, 93, 0.82)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '10px',
                  padding: '4px',
                }}
              >
                {Object.keys(visualModes).map((key) => {
                  const isActive = activeVisualMode === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveVisualMode(key)}
                      style={{
                        padding: '4px 10px',
                        borderRadius: '6px',
                        border: 'none',
                        background: isActive ? 'var(--blue)' : 'transparent',
                        color: '#FFFFFF',
                        fontSize: '0.7rem',
                        fontWeight: isActive ? 700 : 500,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {visualModes[key].label}
                    </button>
                  );
                })}
              </div>

              {/* Bottom Glass Card Highlight */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px',
                  background: 'rgba(5, 45, 93, 0.88)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(21, 138, 226, 0.35)',
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
                    {visualModes[activeVisualMode].sub}
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2, marginTop: '2px' }}>
                    {visualModes[activeVisualMode].metric}
                  </div>
                </div>

                <div
                  style={{
                    fontSize: '0.725rem',
                    fontWeight: 700,
                    color: 'var(--blue)',
                    background: 'rgba(21, 138, 226, 0.15)',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    border: '1px solid rgba(21, 138, 226, 0.3)',
                  }}
                >
                  {visualModes[activeVisualMode].tag}
                </div>
              </div>
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
                <div key={idx} className="tech-pill">
                  <TechIcon size={14} style={{ color: 'var(--blue)' }} />
                  <span>{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
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
