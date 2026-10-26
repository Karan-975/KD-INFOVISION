'use client';

import React from 'react';
import {
  Cpu,
  Layers,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export default function WhyUsSection() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'The KDI Framework & Advisory',
      badge: 'Global Standards',
      desc: 'The KDI Framework provides efficient, high-quality solutions designed to meet the unique needs of our clients. As a trusted advisor, we only suggest what you NEED, not what you LIKE.',
      points: [
        'Strategic alignment with enterprise business goals',
        'Adhering to global standards & industry best practices',
        'Transparent delivery and predictable milestones',
      ],
    },
    {
      icon: Cpu,
      title: 'KDI Certified Resources',
      badge: 'Certified Talent',
      desc: 'Over 60% certified resources across Snowflake, AWS, Databricks, and Power BI ensuring specialized domain knowledge and rapid time-to-value.',
      points: [
        'Staff augmentations & dedicated technical talent',
        'Enterprise engineering pods adhering to strict SLAs',
        'Rapid ramp-up times with vetted architects',
      ],
    },
    {
      icon: Layers,
      title: 'Unified Data & AI Architecture',
      badge: 'Modern Lakehouses',
      desc: 'Harness the power of data and artificial intelligence. We transform complex data into actionable insights with modern Snowflake, AWS, and Databricks foundations.',
      points: [
        'Snowflake Data Cloud & Databricks lakehouses',
        'Autonomous Agentic AI & machine learning',
        'Eliminating data silos and accelerating innovation',
      ],
    },
    {
      icon: CheckCircle2,
      title: 'Real-Time BI & Dashboards',
      badge: 'Instant Solutions',
      desc: 'You do not need to create your reports and dashboards from scratch. Just upload your data and get executive-ready solutions in real time.',
      points: [
        'Power BI, Tableau, Qlik, Domo & Spotfire',
        'Associative discovery & self-service analytics',
        'Actionable KPI cockpits for leadership',
      ],
    },
  ];

  return (
    <section
      id="why"
      style={{
        background: '#011E41',
        padding: '6.5rem 0',
        position: 'relative',
        overflow: 'hidden',
        color: '#FFFFFF',
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          left: '10%',
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(45, 212, 191, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          right: '10%',
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

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

        {/* 4 Pillars Grid (2x2) */}
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
            return (
              <div
                key={idx}
                className="why-pillar-card"
                style={{
                  padding: '2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.035)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <div>
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
                        width: '50px',
                        height: '50px',
                        borderRadius: '10px',
                        background: 'rgba(45, 212, 191, 0.1)',
                        border: '1px solid rgba(45, 212, 191, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#2DD4BF',
                      }}
                    >
                      <IconComp size={24} />
                    </div>

                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        color: '#2DD4BF',
                        background: 'rgba(45, 212, 191, 0.08)',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        border: '1px solid rgba(45, 212, 191, 0.2)',
                        letterSpacing: '0.8px',
                        textTransform: 'uppercase',
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      marginBottom: '0.75rem',
                      lineHeight: 1.3,
                    }}
                    className="pillar-title"
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.94rem',
                      color: 'rgba(255, 255, 255, 0.7)',
                      lineHeight: 1.65,
                      marginBottom: '1.5rem',
                    }}
                  >
                    {item.desc}
                  </p>
                </div>

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
                      <CheckCircle2 size={16} style={{ color: '#2DD4BF', flexShrink: 0 }} />
                      <span>{point}</span>
                    </div>
                  ))}
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
        :global(.why-pillar-card:hover) {
          border-color: rgba(45, 212, 191, 0.45) !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(45, 212, 191, 0.12) !important;
          transform: translateY(-6px);
        }
        :global(.why-pillar-card:hover .pillar-title) {
          color: #2DD4BF !important;
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
