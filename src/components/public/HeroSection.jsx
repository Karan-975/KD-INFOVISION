'use client';

import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
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
  Play,
  Maximize2
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
    tag: 'Enterprise Data, Cloud & AI Systems',
    headline: 'Engineering Intelligent Data Ecosystems for',
    headlineEmp: 'Enterprise Scale',
    subtext:
      'From modern lakehouses on Snowflake and Databricks to production AI workflows and executive Power BI, KD Infovision builds scalable, secure software architectures that deliver quantifiable business ROI.',
    primaryBtn: 'Schedule Consultation',
    primaryUrl: '#contact',
    secBtn: 'Explore Solutions',
    secUrl: '#solutions',
  };

  // Cloud & Tech ecosystem icons
  const techEcosystem = [
    { name: 'Amazon Web Services', icon: Cloud },
    { name: 'Microsoft Azure', icon: Server },
    { name: 'Google Cloud Platform', icon: Cloud },
    { name: 'Snowflake', icon: Database },
    { name: 'Databricks', icon: Layers },
    { name: 'Power BI', icon: BarChart3 },
    { name: 'Tableau', icon: BarChart3 },
    { name: 'Apache Kafka', icon: Zap },
    { name: 'Enterprise AI & LLMs', icon: Cpu },
  ];

  // Realistic visual modes linked to authentic enterprise photography
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
        paddingTop: '100px',
        paddingBottom: '3rem',
        overflow: 'hidden',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Unique Harmonic Ambient Wavefield Animation */}
      <HeroBackgroundAnimation />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        {/* Main Hero Split Grid: Airy, spacious, non-congested */}
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
              <span>{activeSlide.tag || 'ENTERPRISE DATA & AI SYSTEMS'}</span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.4rem, 3.8vw, 3.75rem)',
                fontWeight: 800,
                color: 'var(--navy)',
                lineHeight: 1.14,
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
                {activeSlide.headlineEmp || 'Enterprise Scale.'}
              </span>
            </h1>

            {/* Subtext */}
            <p
              style={{
                fontSize: '1.1rem',
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

            {/* Credibility Telemetry Row */}
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
                  <strong>50+</strong> Enterprise Deployments
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

          {/* RIGHT COLUMN: Creative Visual Centerpiece with Real Enterprise Imagery & Floating Glass Telemetry */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {/* Main Creative Enterprise Showcase Container */}
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

              {/* Soft Gradient Vignette for Readability of Text Badges */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, rgba(5, 45, 93, 0.15) 0%, rgba(5, 45, 93, 0.1) 40%, rgba(5, 45, 93, 0.75) 100%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Top Floating Telemetry Glass Chip */}
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: 'rgba(5, 45, 93, 0.78)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  borderRadius: '10px',
                  padding: '8px 14px',
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
                <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.5px' }}>
                  ACTIVE TELEMETRY • 32ms LATENCY
                </span>
              </div>

              {/* Interactive Visual Mode Switcher (Pills inside the visualizer) */}
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  display: 'flex',
                  gap: '6px',
                  background: 'rgba(5, 45, 93, 0.78)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
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
                  background: 'rgba(5, 45, 93, 0.85)',
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
                  <div style={{ fontSize: '0.7rem', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px' }}>
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

            {/* Creative Floating Accent Card 1: Top Left Offset */}
            <div
              style={{
                position: 'absolute',
                top: '-16px',
                left: '-16px',
                background: '#FFFFFF',
                borderRadius: '12px',
                padding: '9px 15px',
                boxShadow: '0 12px 30px rgba(5, 45, 93, 0.12)',
                border: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                zIndex: 2,
              }}
              className="floating-accent-1"
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'rgba(21, 138, 226, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--blue)',
                }}
              >
                <Database size={16} />
              </div>
              <div>
                <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>
                  Unified Architecture
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--navy)' }}>
                  AWS • Azure • Snowflake
                </div>
              </div>
            </div>

            {/* Creative Floating Accent Card 2: Bottom Right Offset */}
            <div
              style={{
                position: 'absolute',
                bottom: '-18px',
                right: '-16px',
                background: '#FFFFFF',
                borderRadius: '12px',
                padding: '9px 15px',
                boxShadow: '0 12px 30px rgba(5, 45, 93, 0.12)',
                border: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                zIndex: 2,
              }}
              className="floating-accent-2"
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'rgba(34, 197, 94, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#16A34A',
                }}
              >
                <Activity size={16} />
              </div>
              <div>
                <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>
                  Enterprise SLA
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--navy)' }}>
                  99.9% Production Support
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Cloud & Technology Ecosystem Ribbon */}
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
            ENTERPRISE PLATFORMS &amp; CLOUD ECOSYSTEM ARCHITECTED BY KD INFOVISION
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
          :global(.floating-accent-1),
          :global(.floating-accent-2) {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
