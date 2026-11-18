'use client';

import React from 'react';
import {
  ShieldCheck,
  Cpu,
  Layers,
  BarChart3,
  CheckCircle2,
  Award,
  Zap,
  Database,
  Lock,
  ArrowRight,
} from 'lucide-react';

const iconMap = {
  ShieldCheck,
  Cpu,
  Layers,
  BarChart3,
  CheckCircle2,
  Award,
  Zap,
  Database,
  Lock,
};

function resolvePillarTheme(item, idx) {
  const accent = item.accentColor || (idx === 0 ? '#D97706' : idx === 1 ? '#E11D48' : idx === 2 ? '#0D9488' : '#6D48D7');

  if (accent === '#FBBF24' || accent === '#F59E0B' || accent === '#D97706') {
    return {
      defaultBg: '#FFFDF7',
      defaultBorder: 'rgba(245, 158, 11, 0.22)',
      hoverBg: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
      hoverShadow: '0 24px 50px rgba(217, 119, 6, 0.42), 0 8px 20px rgba(0, 0, 0, 0.3)',
      accentColor: '#D97706',
      iconDefaultBg: 'rgba(245, 158, 11, 0.12)',
      iconDefaultColor: '#D97706',
    };
  }
  if (accent === '#FB7185' || accent === '#F43F5E' || accent === '#E11D48') {
    return {
      defaultBg: '#FFFDFC',
      defaultBorder: 'rgba(244, 63, 94, 0.22)',
      hoverBg: 'linear-gradient(135deg, #F43F5E 0%, #E11D48 100%)',
      hoverShadow: '0 24px 50px rgba(225, 29, 72, 0.42), 0 8px 20px rgba(0, 0, 0, 0.3)',
      accentColor: '#E11D48',
      iconDefaultBg: 'rgba(244, 63, 94, 0.12)',
      iconDefaultColor: '#E11D48',
    };
  }
  if (accent === '#2DD4BF' || accent === '#14B8A6' || accent === '#0D9488') {
    return {
      defaultBg: '#F7FEFD',
      defaultBorder: 'rgba(13, 148, 136, 0.22)',
      hoverBg: 'linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)',
      hoverShadow: '0 24px 50px rgba(13, 148, 136, 0.42), 0 8px 20px rgba(0, 0, 0, 0.3)',
      accentColor: '#0D9488',
      iconDefaultBg: 'rgba(13, 148, 136, 0.12)',
      iconDefaultColor: '#0D9488',
    };
  }
  if (accent === '#8B5CF6' || accent === '#7C3AED' || accent === '#6D48D7' || accent === '#FB923C' || accent === '#EA580C') {
    return {
      defaultBg: '#F5F3FF', // Matching Image-1's soft lilac "Templates" card
      defaultBorder: 'rgba(109, 72, 215, 0.22)',
      hoverBg: 'linear-gradient(135deg, #7C3AED 0%, #6D48D7 100%)', // Matching Image-1's hovered solid purple "Assets" card
      hoverShadow: '0 24px 50px rgba(109, 72, 215, 0.42), 0 8px 20px rgba(0, 0, 0, 0.3)',
      accentColor: '#6D48D7',
      iconDefaultBg: 'rgba(109, 72, 215, 0.12)',
      iconDefaultColor: '#6D48D7',
    };
  }

  // Fallback for custom CMS colors
  return {
    defaultBg: '#FFFFFF',
    defaultBorder: `${accent}33`,
    hoverBg: `linear-gradient(135deg, ${accent} 0%, ${accent}dd 100%)`,
    hoverShadow: `0 24px 50px ${accent}50, 0 8px 20px rgba(0, 0, 0, 0.3)`,
    accentColor: accent,
    iconDefaultBg: `${accent}18`,
    iconDefaultColor: accent,
  };
}

function parsePoints(points) {
  if (Array.isArray(points)) return points;
  if (!points) return [];
  try {
    const parsed = JSON.parse(points);
    if (Array.isArray(parsed)) return parsed;
  } catch (e) {}
  return String(points).split('\n').map((s) => s.trim()).filter(Boolean);
}

export default function WhyUsSection({ pillars: dynamicPillars, settings }) {
  const defaultPillars = [
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
      ctaText: 'Learn More',
      ctaUrl: '#contact',
      theme: {
        defaultBg: '#FFFDF7',
        defaultBorder: 'rgba(245, 158, 11, 0.22)',
        hoverBg: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
        hoverShadow: '0 24px 50px rgba(217, 119, 6, 0.42), 0 8px 20px rgba(0, 0, 0, 0.3)',
        accentColor: '#D97706',
        iconDefaultBg: 'rgba(245, 158, 11, 0.12)',
        iconDefaultColor: '#D97706',
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
      ctaText: 'Learn More',
      ctaUrl: '#contact',
      theme: {
        defaultBg: '#FFFDFC',
        defaultBorder: 'rgba(244, 63, 94, 0.22)',
        hoverBg: 'linear-gradient(135deg, #F43F5E 0%, #E11D48 100%)',
        hoverShadow: '0 24px 50px rgba(225, 29, 72, 0.42), 0 8px 20px rgba(0, 0, 0, 0.3)',
        accentColor: '#E11D48',
        iconDefaultBg: 'rgba(244, 63, 94, 0.12)',
        iconDefaultColor: '#E11D48',
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
      ctaText: 'Learn More',
      ctaUrl: '#contact',
      theme: {
        defaultBg: '#F7FEFD',
        defaultBorder: 'rgba(13, 148, 136, 0.22)',
        hoverBg: 'linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)',
        hoverShadow: '0 24px 50px rgba(13, 148, 136, 0.42), 0 8px 20px rgba(0, 0, 0, 0.3)',
        accentColor: '#0D9488',
        iconDefaultBg: 'rgba(13, 148, 136, 0.12)',
        iconDefaultColor: '#0D9488',
      },
    },
    {
      icon: BarChart3,
      titlePrefix: 'Real-Time BI &',
      titleHighlight: 'Dashboards',
      desc: 'You do not need to create your reports and dashboards from scratch. Just upload your data and get executive-ready solutions in real time.',
      points: [
        'Power BI, Tableau, Qlik, Domo & Spotfire',
        'Associative discovery & self-service analytics',
        'Actionable KPI cockpits for leadership',
      ],
      ctaText: 'Learn More',
      ctaUrl: '#contact',
      theme: {
        defaultBg: '#F5F3FF', // Matching Image-1's soft lilac
        defaultBorder: 'rgba(109, 72, 215, 0.22)',
        hoverBg: 'linear-gradient(135deg, #7C3AED 0%, #6D48D7 100%)', // Matching Image-1's solid purple hover
        hoverShadow: '0 24px 50px rgba(109, 72, 215, 0.42), 0 8px 20px rgba(0, 0, 0, 0.3)',
        accentColor: '#6D48D7',
        iconDefaultBg: 'rgba(109, 72, 215, 0.12)',
        iconDefaultColor: '#6D48D7',
      },
    },
  ];

  const pillars = (dynamicPillars && dynamicPillars.length > 0)
    ? dynamicPillars.map((p, idx) => {
        const theme = resolvePillarTheme(p, idx);
        const IconComp = iconMap[p.icon] || ShieldCheck;
        return {
          icon: IconComp,
          titlePrefix: p.titlePrefix,
          titleHighlight: p.titleHighlight,
          desc: p.desc,
          points: parsePoints(p.points),
          ctaText: p.ctaText || 'Learn More',
          ctaUrl: p.ctaUrl || '#contact',
          theme,
        };
      })
    : defaultPillars;

  const sectionTag = settings?.whyTag || 'ENGINEERING EXCELLENCE & TRUST';
  const sectionTitle = settings?.whyTitle || 'Start Your Data & AI Journey with KD Infovision for';
  const sectionHighlight = settings?.whyHighlight || 'Quick & Quality Delivery';
  const sectionDesc =
    settings?.whyDesc ||
    'The KDI Framework provides efficient, high-quality solutions designed to meet the unique needs of our clients. With our domain expertise, we make complex data transformations predictable, secure, and fast.';

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
              color: '#F59E0B',
              marginBottom: '0.85rem',
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            {sectionTag}
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
            {sectionTitle}{' '}
            <span style={{ color: '#F59E0B' }}>
              {sectionHighlight}
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
            {sectionDesc}
          </p>
        </div>

        {/* 4 Pillars Grid (2x2) - Keeping exact dimensions from Image-2 */}
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
              <a
                key={idx}
                href={item.ctaUrl || '#contact'}
                className="flowbase-pillar-card"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '24px',
                  minHeight: '390px',
                  background: t.defaultBg,
                  border: `1.5px solid ${t.defaultBorder}`,
                  boxShadow: '0 12px 35px rgba(0, 0, 0, 0.35)',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  '--card-hover-bg': t.hoverBg,
                  '--card-hover-shadow': t.hoverShadow,
                  '--card-accent': t.accentColor,
                  '--card-icon-default-bg': t.iconDefaultBg,
                  '--card-icon-default-color': t.iconDefaultColor,
                }}
              >
                {/* Top/Main Content Area */}
                <div>
                  {/* Clean Icon Badge (Image-1 Style) */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.65rem',
                    }}
                  >
                    <div
                      className="card-icon-box"
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '16px',
                        background: t.iconDefaultBg,
                        color: t.iconDefaultColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    >
                      <IconComp size={26} strokeWidth={2.2} />
                    </div>
                  </div>

                  {/* Card Title (Bold, modern typography matching Image-1) */}
                  <h3
                    className="card-title"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '1.45rem',
                      fontWeight: 800,
                      color: '#0F172A',
                      marginBottom: '0.95rem',
                      lineHeight: 1.3,
                      letterSpacing: '-0.02em',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    <span>{item.titlePrefix} </span>
                    <span className="card-title-highlight" style={{ color: t.accentColor }}>
                      {item.titleHighlight}
                    </span>
                  </h3>

                  {/* Description Paragraph */}
                  <p
                    className="card-desc"
                    style={{
                      fontSize: '0.96rem',
                      color: '#475569',
                      lineHeight: 1.68,
                      marginBottom: '1.75rem',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Content Area: Highlights & Action Arrow */}
                <div>
                  {/* Bullet Points */}
                  <div
                    className="card-divider"
                    style={{
                      paddingTop: '1.4rem',
                      borderTop: '1px solid rgba(15, 23, 42, 0.08)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '11px',
                      transition: 'border-color 0.3s ease',
                    }}
                  >
                    {item.points.map((point, pIdx) => (
                      <div
                        key={pIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          fontSize: '0.9rem',
                          fontWeight: 500,
                        }}
                      >
                        <CheckCircle2
                          size={17}
                          className="card-check-icon"
                          style={{
                            color: t.accentColor,
                            flexShrink: 0,
                            transition: 'color 0.3s ease',
                          }}
                        />
                        <span
                          className="card-point-text"
                          style={{
                            color: '#334155',
                            transition: 'color 0.3s ease',
                          }}
                        >
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Action Arrow matching Image-1 */}
                  <div
                    style={{
                      marginTop: '1.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div
                      className="card-cta-btn"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'rgba(15, 23, 42, 0.05)',
                        border: '1px solid rgba(15, 23, 42, 0.10)',
                        borderRadius: '9999px',
                        padding: '7px 18px',
                        fontSize: '13px',
                        fontWeight: 700,
                        color: '#0F172A',
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      <span>{item.ctaText || 'Learn More'}</span>
                      <ArrowRight size={15} className="card-cta-arrow" />
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Consultation Callout Banner */}
        <div
          style={{
            marginTop: '3.5rem',
            padding: '2.25rem 2.5rem',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #1c0e06 0%, #120904 100%)',
            border: '1px solid rgba(245, 158, 11, 0.18)',
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
              background: 'linear-gradient(93.05deg, #F97316 0%, #EA580C 50%, #C2410C 100%)',
              color: '#FFFFFF',
              fontSize: '0.92rem',
              fontWeight: 700,
              padding: '0.85rem 1.65rem',
              borderRadius: '8px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              fontFamily: "'Montserrat', sans-serif",
              boxShadow: '0 4px 15px rgba(249, 115, 22, 0.35)',
            }}
          >
            <span>Request Architecture Consultation</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <style jsx>{`
        :global(.flowbase-pillar-card) {
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
            background 0.35s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1),
            border-color 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Hover State matching Image-1 */
        :global(.flowbase-pillar-card:hover) {
          transform: translateY(-8px);
          background: var(--card-hover-bg) !important;
          border-color: transparent !important;
          box-shadow: var(--card-hover-shadow) !important;
        }

        :global(.flowbase-pillar-card:hover .card-title),
        :global(.flowbase-pillar-card:hover .card-title span),
        :global(.flowbase-pillar-card:hover .card-title-highlight) {
          color: #FFFFFF !important;
        }

        :global(.flowbase-pillar-card:hover .card-desc) {
          color: rgba(255, 255, 255, 0.92) !important;
        }

        :global(.flowbase-pillar-card:hover .card-point-text) {
          color: #FFFFFF !important;
        }

        :global(.flowbase-pillar-card:hover .card-check-icon) {
          color: #FFFFFF !important;
        }

        :global(.flowbase-pillar-card:hover .card-divider) {
          border-color: rgba(255, 255, 255, 0.22) !important;
        }

        :global(.flowbase-pillar-card:hover .card-icon-box) {
          background: rgba(255, 255, 255, 0.22) !important;
          color: #FFFFFF !important;
        }

        :global(.flowbase-pillar-card:hover .card-cta-btn) {
          background: rgba(255, 255, 255, 0.22) !important;
          border-color: rgba(255, 255, 255, 0.45) !important;
          color: #FFFFFF !important;
        }

        :global(.flowbase-pillar-card:hover .card-cta-arrow) {
          color: #FFFFFF !important;
          transform: translateX(6px);
        }

        :global(.card-cta-arrow) {
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1);
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
