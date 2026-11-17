'use client';

import React from 'react';
import {
  Cpu,
  Layers,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

/* -------------------------------------------------------------
   3D Holographic Vector Graphics matching Reference Image-2
   ------------------------------------------------------------- */

// Card 1 Graphic: Glowing 3D Digital Globe with Orbital Data Ring
function GlobeGraphic() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="globeGrad" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.45" />
          <stop offset="50%" stopColor="#0284C7" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#031E48" stopOpacity="0.08" />
        </radialGradient>
        <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#0284C7" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.05" />
        </linearGradient>
        <filter id="glowBlue" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Ambient glow sphere */}
      <circle cx="80" cy="80" r="50" fill="#0284C7" opacity="0.2" filter="url(#glowBlue)" />

      {/* Globe Sphere Body */}
      <circle cx="80" cy="80" r="48" fill="url(#globeGrad)" stroke="#38BDF8" strokeWidth="1.2" strokeOpacity="0.6" />

      {/* Wireframe Meridians */}
      <ellipse cx="80" cy="80" rx="36" ry="48" stroke="#38BDF8" strokeWidth="0.8" strokeOpacity="0.4" strokeDasharray="3 3" />
      <ellipse cx="80" cy="80" rx="20" ry="48" stroke="#38BDF8" strokeWidth="0.85" strokeOpacity="0.5" />
      <line x1="80" y1="32" x2="80" y2="128" stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.6" />

      {/* Wireframe Parallels */}
      <ellipse cx="80" cy="60" rx="42" ry="12" stroke="#38BDF8" strokeWidth="0.75" strokeOpacity="0.4" />
      <ellipse cx="80" cy="80" rx="48" ry="14" stroke="#38BDF8" strokeWidth="0.9" strokeOpacity="0.55" />
      <ellipse cx="80" cy="100" rx="42" ry="12" stroke="#38BDF8" strokeWidth="0.75" strokeOpacity="0.4" />

      {/* Surface Data Nodes */}
      <circle cx="70" cy="65" r="2.5" fill="#FFFFFF" />
      <circle cx="95" cy="74" r="2" fill="#38BDF8" />
      <circle cx="68" cy="92" r="2" fill="#38BDF8" />
      <circle cx="88" cy="98" r="2.5" fill="#FFFFFF" />
      <circle cx="80" cy="50" r="1.8" fill="#38BDF8" />

      {/* Tilted Orbital Ring */}
      <g transform="rotate(-26 80 80)">
        <ellipse cx="80" cy="80" rx="68" ry="22" stroke="url(#orbitGrad)" strokeWidth="2.2" />
        <circle cx="148" cy="80" r="4" fill="#FFFFFF" filter="url(#glowBlue)" />
        <circle cx="148" cy="80" r="2" fill="#38BDF8" />
      </g>
    </svg>
  );
}

// Card 2 Graphic: Glowing 3D Isometric Layered Stack / Platform
function StackGraphic() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="purpleGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C084FC" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#7E22CE" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="purpleGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A855F7" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#581C87" stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id="purpleGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9333EA" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#3B0764" stopOpacity="0.3" />
        </linearGradient>
        <filter id="glowPurple" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Ambient glow */}
      <circle cx="80" cy="80" r="50" fill="#9333EA" opacity="0.2" filter="url(#glowPurple)" />

      {/* Bottom Layer */}
      <g transform="translate(0, 36)">
        <path d="M80 72 L128 92 L80 112 L32 92 Z" fill="url(#purpleGrad3)" stroke="#A855F7" strokeWidth="1.2" strokeOpacity="0.6" />
        <path d="M32 92 L80 112 L80 118 L32 98 Z" fill="#581C87" opacity="0.6" />
        <path d="M128 92 L80 112 L80 118 L128 98 Z" fill="#3B0764" opacity="0.6" />
      </g>

      {/* Middle Layer */}
      <g transform="translate(0, 18)">
        <path d="M80 62 L128 82 L80 102 L32 82 Z" fill="url(#purpleGrad2)" stroke="#C084FC" strokeWidth="1.4" strokeOpacity="0.7" />
        <path d="M32 82 L80 102 L80 108 L32 88 Z" fill="#7E22CE" opacity="0.6" />
        <path d="M128 82 L80 102 L80 108 L128 88 Z" fill="#581C87" opacity="0.6" />
      </g>

      {/* Top Layer */}
      <g transform="translate(0, 0)">
        <path d="M80 52 L128 72 L80 92 L32 72 Z" fill="url(#purpleGrad1)" stroke="#E9D5FF" strokeWidth="1.6" strokeOpacity="0.9" />
        <path d="M32 72 L80 92 L80 98 L32 78 Z" fill="#9333EA" opacity="0.7" />
        <path d="M128 72 L80 92 L80 98 L128 78 Z" fill="#6B21A8" opacity="0.7" />
      </g>

      {/* Vertical Data Beacons connecting layers */}
      <line x1="80" y1="52" x2="80" y2="128" stroke="#F3E8FF" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.75" />
      <circle cx="80" cy="52" r="3.5" fill="#FFFFFF" filter="url(#glowPurple)" />
      <circle cx="80" cy="52" r="1.8" fill="#C084FC" />
      <circle cx="80" cy="80" r="2.5" fill="#E9D5FF" />
      <circle cx="80" cy="108" r="2.5" fill="#A855F7" />
    </svg>
  );
}

// Card 3 Graphic: Glowing 3D Isometric Lakehouse Matrix
function LakehouseGraphic() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="tealGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#0F766E" stopOpacity="0.35" />
        </linearGradient>
        <filter id="glowTeal" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Ambient glow */}
      <circle cx="80" cy="80" r="50" fill="#0D9488" opacity="0.2" filter="url(#glowTeal)" />

      {/* Center Main Cube */}
      <g transform="translate(0, -6)">
        <path d="M80 44 L114 62 L80 80 L46 62 Z" fill="url(#tealGrad1)" stroke="#5EEAD4" strokeWidth="1.5" strokeOpacity="0.9" />
        <path d="M46 62 L80 80 L80 114 L46 96 Z" fill="#0F766E" opacity="0.7" stroke="#2DD4BF" strokeWidth="1" strokeOpacity="0.5" />
        <path d="M114 62 L80 80 L80 114 L114 96 Z" fill="#042F2E" opacity="0.8" stroke="#14B8A6" strokeWidth="1" strokeOpacity="0.5" />
      </g>

      {/* Satellite Node 1 (Top Left) */}
      <g transform="translate(-32, -18) scale(0.6)">
        <path d="M80 44 L114 62 L80 80 L46 62 Z" fill="url(#tealGrad1)" stroke="#2DD4BF" strokeWidth="1.5" />
      </g>
      <line x1="56" y1="52" x2="68" y2="60" stroke="#5EEAD4" strokeWidth="1" strokeDasharray="2 2" opacity="0.8" />

      {/* Satellite Node 2 (Bottom Right) */}
      <g transform="translate(42, 34) scale(0.55)">
        <path d="M80 44 L114 62 L80 80 L46 62 Z" fill="url(#tealGrad1)" stroke="#2DD4BF" strokeWidth="1.5" />
      </g>
      <line x1="98" y1="92" x2="114" y2="102" stroke="#5EEAD4" strokeWidth="1" strokeDasharray="2 2" opacity="0.8" />

      {/* Data Pulse Rings */}
      <ellipse cx="80" cy="74" rx="48" ry="16" stroke="#2DD4BF" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="4 4" />
      <circle cx="80" cy="44" r="3" fill="#FFFFFF" filter="url(#glowTeal)" />
    </svg>
  );
}

// Card 4 Graphic: Glowing 3D Holographic Analytics Dashboard
function AnalyticsGraphic() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="indigoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#818CF8" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#4338CA" stopOpacity="0.35" />
        </linearGradient>
        <filter id="glowIndigo" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Ambient glow */}
      <circle cx="80" cy="80" r="50" fill="#4F46E5" opacity="0.2" filter="url(#glowIndigo)" />

      {/* Isometric Floor Grid */}
      <path d="M80 68 L130 94 L80 120 L30 94 Z" fill="rgba(67, 56, 202, 0.15)" stroke="#6366F1" strokeWidth="1" strokeOpacity="0.35" strokeDasharray="3 3" />

      {/* Bar 1 (Left - Mid Height) */}
      <g transform="translate(48, 70)">
        <path d="M12 0 L24 6 L12 12 L0 6 Z" fill="#818CF8" stroke="#A5B4FC" strokeWidth="1" />
        <path d="M0 6 L12 12 L12 36 L0 30 Z" fill="#4338CA" opacity="0.8" />
        <path d="M24 6 L12 12 L12 36 L24 30 Z" fill="#312E81" opacity="0.8" />
      </g>

      {/* Bar 2 (Center - Tall Height) */}
      <g transform="translate(70, 48)">
        <path d="M12 0 L24 6 L12 12 L0 6 Z" fill="#A5B4FC" stroke="#FFFFFF" strokeWidth="1" />
        <path d="M0 6 L12 12 L12 56 L0 50 Z" fill="#6366F1" opacity="0.85" />
        <path d="M24 6 L12 12 L12 56 L24 50 Z" fill="#3730A3" opacity="0.85" />
      </g>

      {/* Bar 3 (Right - Small Height) */}
      <g transform="translate(92, 80)">
        <path d="M12 0 L24 6 L12 12 L0 6 Z" fill="#818CF8" stroke="#A5B4FC" strokeWidth="1" />
        <path d="M0 6 L12 12 L12 24 L0 18 Z" fill="#4F46E5" opacity="0.75" />
        <path d="M24 6 L12 12 L12 24 L24 18 Z" fill="#312E81" opacity="0.75" />
      </g>

      {/* Floating Trend Line */}
      <path d="M58 68 L82 44 L104 74" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" filter="url(#glowIndigo)" />
      <circle cx="58" cy="68" r="3" fill="#818CF8" />
      <circle cx="82" cy="44" r="3.5" fill="#FFFFFF" />
      <circle cx="104" cy="74" r="3" fill="#818CF8" />
    </svg>
  );
}

export default function WhyUsSection() {
  const pillars = [
    {
      icon: ShieldCheck,
      titlePrefix: 'The KDI Framework &',
      titleHighlight: 'Advisory',
      desc: 'The KDI Framework provides efficient, high-quality solutions designed to meet the unique needs of our clients. As a trusted advisor, we only suggest what you NEED, not what you LIKE.',
      points: [
        'Strategic alignment with enterprise business goals',
        'Adhering to global standards & industry best practices',
        'Transparent delivery and predictable milestones',
      ],
      theme: {
        cardBg: 'linear-gradient(135deg, rgba(8, 28, 64, 0.95) 0%, rgba(3, 15, 38, 0.98) 100%)',
        borderColor: 'rgba(56, 189, 248, 0.25)',
        hoverBorderColor: '#38BDF8',
        accentColor: '#38BDF8',
        glowColor: 'rgba(56, 189, 248, 0.22)',
        iconBg: 'linear-gradient(135deg, #0284C7 0%, #0369A1 100%)',
        iconShadow: '0 4px 15px rgba(2, 132, 199, 0.45)',
        graphic: <GlobeGraphic />,
      },
    },
    {
      icon: Cpu,
      titlePrefix: 'KDI Certified',
      titleHighlight: 'Resources',
      desc: 'Over 60% certified resources across Snowflake, AWS, Databricks, and Power BI ensuring specialized domain knowledge and rapid time-to-value.',
      points: [
        'Staff augmentations & dedicated technical talent',
        'Enterprise engineering pods adhering to strict SLAs',
        'Rapid ramp-up times with vetted architects',
      ],
      theme: {
        cardBg: 'linear-gradient(135deg, rgba(38, 12, 66, 0.95) 0%, rgba(18, 5, 36, 0.98) 100%)',
        borderColor: 'rgba(168, 85, 247, 0.25)',
        hoverBorderColor: '#C084FC',
        accentColor: '#C084FC',
        glowColor: 'rgba(168, 85, 247, 0.22)',
        iconBg: 'linear-gradient(135deg, #9333EA 0%, #7E22CE 100%)',
        iconShadow: '0 4px 15px rgba(147, 51, 234, 0.45)',
        graphic: <StackGraphic />,
      },
    },
    {
      icon: Layers,
      titlePrefix: 'Unified Data &',
      titleHighlight: 'AI Architecture',
      desc: 'Harness the power of data and artificial intelligence. We transform complex data into actionable insights with modern Snowflake, AWS, and Databricks foundations.',
      points: [
        'Snowflake Data Cloud & Databricks lakehouses',
        'Autonomous Agentic AI & machine learning',
        'Eliminating data silos and accelerating innovation',
      ],
      theme: {
        cardBg: 'linear-gradient(135deg, rgba(6, 44, 40, 0.95) 0%, rgba(2, 22, 20, 0.98) 100%)',
        borderColor: 'rgba(45, 212, 191, 0.25)',
        hoverBorderColor: '#2DD4BF',
        accentColor: '#2DD4BF',
        glowColor: 'rgba(45, 212, 191, 0.22)',
        iconBg: 'linear-gradient(135deg, #0D9488 0%, #0F766E 100%)',
        iconShadow: '0 4px 15px rgba(13, 148, 136, 0.45)',
        graphic: <LakehouseGraphic />,
      },
    },
    {
      icon: CheckCircle2,
      titlePrefix: 'Real-Time BI &',
      titleHighlight: 'Dashboards',
      desc: 'You do not need to create your reports and dashboards from scratch. Just upload your data and get executive-ready solutions in real time.',
      points: [
        'Power BI, Tableau, Qlik, Domo & Spotfire',
        'Associative discovery & self-service analytics',
        'Actionable KPI cockpits for leadership',
      ],
      theme: {
        cardBg: 'linear-gradient(135deg, rgba(15, 30, 68, 0.95) 0%, rgba(5, 14, 38, 0.98) 100%)',
        borderColor: 'rgba(99, 102, 241, 0.25)',
        hoverBorderColor: '#818CF8',
        accentColor: '#818CF8',
        glowColor: 'rgba(99, 102, 241, 0.22)',
        iconBg: 'linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)',
        iconShadow: '0 4px 15px rgba(79, 70, 229, 0.45)',
        graphic: <AnalyticsGraphic />,
      },
    },
  ];

  return (
    <section
      id="why"
      style={{
        background: '#000510',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        padding: '7rem 0',
        position: 'relative',
        overflow: 'hidden',
        color: '#FFFFFF',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header: BCG Corporate Editorial */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 4rem auto' }}>
          <div
            style={{
              fontSize: '12px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: '#2DD4BF',
              marginBottom: '0.85rem',
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            ENGINEERING EXCELLENCE &amp; TRUST
          </div>

          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 'clamp(2.1rem, 3.4vw, 2.9rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              marginBottom: '1.15rem',
            }}
          >
            Start Your Data &amp; AI Journey with KD Infovision for{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #2DD4BF 0%, #38BDF8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Quick &amp; Quality Delivery
            </span>
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: 'rgba(255, 255, 255, 0.72)',
              lineHeight: 1.75,
              margin: '0 auto',
              maxWidth: '680px',
            }}
          >
            The KDI Framework provides efficient, high-quality solutions designed to meet the unique needs of our clients. With our domain expertise, we make complex data transformations predictable, secure, and fast.
          </p>
        </div>

        {/* 4 Pillars Grid (2x2) - Keeping exact dimensions */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
          }}
          className="why-grid"
        >
          {pillars.map((item, idx) => {
            const IconComp = item.icon;
            const t = item.theme;

            return (
              <div
                key={idx}
                className="why-pillar-card"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  padding: '2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '20px',
                  background: t.cardBg,
                  border: `1px solid ${t.borderColor}`,
                  boxShadow: '0 12px 35px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {/* Radial Glow behind 3D Graphic */}
                <div
                  style={{
                    position: 'absolute',
                    right: '-10px',
                    top: '10%',
                    width: '220px',
                    height: '220px',
                    background: `radial-gradient(circle, ${t.glowColor} 0%, transparent 70%)`,
                    filter: 'blur(30px)',
                    pointerEvents: 'none',
                    opacity: 0.85,
                  }}
                />

                {/* 3D Holographic Graphic on the Right Side (matching Image-2) */}
                <div
                  style={{
                    position: 'absolute',
                    right: '18px',
                    top: '40px',
                    width: '145px',
                    height: '145px',
                    pointerEvents: 'none',
                    zIndex: 1,
                    opacity: 0.95,
                    filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.5))',
                  }}
                >
                  {t.graphic}
                </div>

                {/* Left/Top Content */}
                <div style={{ position: 'relative', zIndex: 2 }}>
                  {/* Glowing Icon Container (NO top-right flag/badge as requested) */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.5rem',
                    }}
                  >
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '12px',
                        background: t.iconBg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        boxShadow: t.iconShadow,
                      }}
                    >
                      <IconComp size={22} />
                    </div>
                  </div>

                  {/* Two-Tone Title */}
                  <h3
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '1.3rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      marginBottom: '0.85rem',
                      lineHeight: 1.3,
                      letterSpacing: '-0.015em',
                    }}
                    className="pillar-title"
                  >
                    {item.titlePrefix}{' '}
                    <span style={{ color: t.accentColor }}>{item.titleHighlight}</span>
                  </h3>

                  {/* Description Text */}
                  <p
                    style={{
                      fontSize: '0.93rem',
                      color: 'rgba(255, 255, 255, 0.75)',
                      lineHeight: 1.65,
                      marginBottom: '1.5rem',
                      maxWidth: '82%',
                    }}
                  >
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Content: Bullet Points and Learn More CTA Button */}
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div
                    style={{
                      paddingTop: '1.25rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                    }}
                  >
                    {item.points.map((point, pIdx) => (
                      <div
                        key={pIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          fontSize: '0.88rem',
                          color: '#E2E8F0',
                          fontWeight: 500,
                        }}
                      >
                        <CheckCircle2 size={16} style={{ color: t.accentColor, flexShrink: 0 }} />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Outline Pill Button (matching Image-2) */}
                  <div style={{ marginTop: '1.4rem' }}>
                    <a
                      href="#contact"
                      className="card-learn-more"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        borderRadius: '9999px',
                        padding: '6px 16px',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: '#FFFFFF',
                        textDecoration: 'none',
                        transition: 'all 0.25s ease',
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      <span>Learn More</span>
                      <ArrowRight size={13} className="learn-arrow" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Consultation Callout Banner */}
        <div
          style={{
            marginTop: '3.5rem',
            padding: '2.25rem 2.5rem',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #01162e 0%, #011a38 100%)',
            border: '1px solid rgba(45, 212, 191, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div>
            <h4
              style={{
                fontFamily: "'Montserrat', sans-serif",
                color: '#FFFFFF',
                fontSize: '1.2rem',
                fontWeight: 800,
                marginBottom: '0.35rem',
              }}
            >
              Have an upcoming Data or AI modernization initiative?
            </h4>
            <p style={{ color: 'rgba(255, 255, 255, 0.72)', fontSize: '0.92rem', margin: 0 }}>
              Speak directly with our Lead Enterprise Solutions Architect for an initial feasibility review.
            </p>
          </div>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'linear-gradient(93.05deg, #008559 0%, #00A389 100%)',
              color: '#FFFFFF',
              fontSize: '0.92rem',
              fontWeight: 700,
              padding: '0.85rem 1.65rem',
              borderRadius: '8px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              fontFamily: "'Montserrat', sans-serif",
              boxShadow: '0 4px 15px rgba(0, 133, 89, 0.35)',
            }}
          >
            <span>Request Architecture Consultation</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <style jsx>{`
        :global(.why-pillar-card) {
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.35s ease;
        }
        :global(.why-pillar-card:hover) {
          transform: translateY(-6px);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.6) !important;
        }
        :global(.card-learn-more:hover) {
          background: rgba(255, 255, 255, 0.12) !important;
          border-color: rgba(255, 255, 255, 0.4) !important;
        }
        :global(.card-learn-more:hover .learn-arrow) {
          transform: translateX(3px);
        }
        @media (max-width: 960px) {
          :global(.why-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
