'use client';

import React from 'react';
import {
  Cpu,
  Layers,
  ShieldCheck,
  CheckCircle2,
  GitBranch,
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
        'Strategic alignment with business goals',
        'Adhering to global standards & industry best practices',
        'Transparent delivery and predictable milestones',
      ],
    },
    {
      icon: Cpu,
      title: 'KDI Certified Resources',
      badge: 'Quick & Quality Delivery',
      desc: 'Over 60% certified resources across Snowflake, AWS, Databricks, and Power BI ensuring specialized domain knowledge and rapid time-to-value.',
      points: [
        'Staff augmentations & dedicated technical talent',
        'Trainings & enterprise outsourcing services',
        'Trusted engineering pods adhering to strict SLAs',
      ],
    },
    {
      icon: Layers,
      title: 'Unified Data & AI Architecture',
      badge: 'Modern AI & Lakehouses',
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
    <section id="why" style={{ background: '#F8FAFC', padding: '6.5rem 0' }}>
      <div className="container">
        {/* Section Header: Clean Enterprise */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem auto' }}>
          <div
            style={{
              fontSize: '0.85rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              color: 'var(--blue)',
              marginBottom: '0.75rem',
            }}
          >
            Why Choose Us?
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
              fontWeight: 800,
              color: 'var(--navy)',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              marginBottom: '1rem',
            }}
          >
            Start Your Data &amp; AI Journey with KD Infovision for <span style={{ color: 'var(--blue)' }}>Quick &amp; Quality Delivery</span>
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--muted)',
              lineHeight: 1.7,
            }}
          >
            The KDI Framework provides efficient, high-quality solutions designed to meet the unique needs of our clients. With our expertise, we make your work easier and faster.
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
                className="enterprise-card"
                style={{
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '16px',
                  background: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 20px rgba(5, 45, 93, 0.04)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
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
                        width: '52px',
                        height: '52px',
                        borderRadius: '12px',
                        background: 'rgba(21, 138, 226, 0.08)',
                        border: '1.5px solid rgba(21, 138, 226, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--blue)',
                      }}
                    >
                      <IconComp size={24} />
                    </div>

                    <span
                      style={{
                        fontSize: '0.725rem',
                        fontWeight: 700,
                        color: 'var(--navy)',
                        background: '#F1F5F9',
                        padding: '0.35rem 0.75rem',
                        borderRadius: '6px',
                        border: '1px solid #E2E8F0',
                        letterSpacing: '0.5px',
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.3rem',
                      fontWeight: 800,
                      color: 'var(--navy)',
                      marginBottom: '0.75rem',
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: '#64748B',
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
                    borderTop: '1px solid #F1F5F9',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  {item.points.map((point, pIdx) => (
                    <div
                      key={pIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '0.85rem',
                        color: '#334155',
                        fontWeight: 500,
                      }}
                    >
                      <CheckCircle2 size={15} style={{ color: 'var(--blue)', flexShrink: 0 }} />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Consultation Banner */}
        <div
          style={{
            marginTop: '3.5rem',
            padding: '2rem 2.5rem',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, #052D5D 0%, #0A2540 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            boxShadow: '0 12px 30px rgba(5, 45, 93, 0.15)',
          }}
        >
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', color: '#FFFFFF', fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.25rem' }}>
              Have an upcoming Data or AI modernization initiative?
            </h4>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.9rem', margin: 0 }}>
              Speak directly with our Lead Enterprise Solutions Architect for an initial feasibility review.
            </p>
          </div>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'var(--blue)',
              color: '#FFFFFF',
              fontSize: '0.9rem',
              fontWeight: 700,
              padding: '0.8rem 1.5rem',
              borderRadius: '8px',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 14px rgba(21, 138, 226, 0.35)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#0E70BA')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--blue)')}
          >
            <span>Request Architecture Consultation</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          :global(.why-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
