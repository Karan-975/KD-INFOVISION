'use client';

import React, { useState } from 'react';
import {
  BrainCircuit,
  BarChart3,
  Code2,
  Cloud,
  ShieldCheck,
  Server,
  Layers,
  Activity,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  X,
} from 'lucide-react';

export default function ServicesSection({ services = [] }) {
  const [activeModal, setActiveModal] = useState(null);

  // Core Practice Definitions from KD Infovision reference site
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
        'Autonomous AI Agent Workflows',
        'Natural Language Understanding',
        'Custom Data Science (R & Python)',
        'Decision Automation & Operations',
      ],
      detail:
        'With our intelligent AI and Agentic AI solutions that go beyond automation. By combining advanced machine learning, natural language understanding, and autonomous agents, we help organizations streamline operations, enhance decision-making, and foster innovation and growth.',
    },
    {
      id: 'technology-consulting',
      title: 'Technology & Management Consulting',
      kicker: 'Strategic Advisory',
      icon: ShieldCheck,
      image: '/images/hero_realistic_analytics.jpg',
      alt: 'KDI Framework Strategic Management Consulting',
      desc: 'The KDI Framework provides efficient, high-quality solutions designed to meet the unique needs of our clients.',
      capabilities: [
        'KDI Strategic Advisory Framework',
        'Staff Augmentation & Certified Talent',
        'Enterprise Governance & Global Best Practices',
        'We Only Suggest What You Need',
      ],
      detail:
        "The KDI Framework provides efficient, high-quality solutions designed to meet the unique needs of our clients. As a trusted advisor and strategic partner, KDI’s expert consultants deliver projects on time while adhering to global standards and industry best practices.",
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
      }))
    : defaultPractices;

  return (
    <section id="solutions" style={{ background: '#FFFFFF', padding: '6.5rem 0' }}>
      <div className="container">
        {/* Section Header: Clean Enterprise */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem auto' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 3.2vw, 2.85rem)',
              fontWeight: 800,
              color: 'var(--navy)',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              marginBottom: '1rem',
            }}
          >
            End-to-End <span style={{ color: 'var(--blue)' }}>Enterprise Technology</span> Practices
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--muted)',
              lineHeight: 1.7,
            }}
          >
            Scalable, high-performance IT solutions engineered to accelerate digital transformation, modernize infrastructure, and deliver quantifiable business agility.
          </p>
        </div>

        {/* 4 Clean Solution Practice Cards (2x2 Grid) - In the reference editorial design */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2.25rem',
          }}
          className="practices-grid"
        >
          {practices.map((item) => (
            <div
              key={item.id}
              className="solution-practice-card"
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                border: '1px solid #E2EAF4',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.25rem 1.25rem 1.65rem 1.25rem',
                boxShadow: '0 8px 30px rgba(5, 45, 93, 0.06), 0 1px 3px rgba(5, 45, 93, 0.04)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer',
              }}
              onClick={() => setActiveModal(item)}
            >
              <div>
                {/* Top Rounded Photo (Clean 16:9 Inset Frame matching reference Image-2) */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16 / 9',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    background: '#F1F5F9',
                    marginBottom: '1.5rem',
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
                      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    className="practice-img"
                  />
                </div>

                {/* Editorial Content Area - Perfectly left-aligned with image */}
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'clamp(1.3rem, 1.7vw, 1.55rem)',
                      fontWeight: 800,
                      color: 'var(--navy)',
                      marginBottom: '0.85rem',
                      lineHeight: 1.32,
                      letterSpacing: '-0.015em',
                      transition: 'color 0.2s ease',
                    }}
                    className="practice-title"
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.96rem',
                      color: '#64748B',
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Clean Editorial CTA Link */}
              <div
                style={{
                  marginTop: '1.5rem',
                  paddingTop: '1.15rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderTop: '1px solid #F1F5F9',
                }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--blue)',
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    transition: 'gap 0.2s ease',
                  }}
                  className="practice-cta"
                >
                  <span>Explore Practice Architecture</span>
                  <ArrowRight size={15} />
                </span>

                <span
                  style={{
                    fontSize: '0.8rem',
                    color: '#94A3B8',
                    fontWeight: 600,
                  }}
                >
                  Enterprise Advisory &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Detail Modal: Deep Technical Feasibility */}
      {activeModal && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              padding: '2.5rem',
              maxWidth: '680px',
              borderRadius: '20px',
              background: '#FFFFFF',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(21, 138, 226, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--blue)',
                  }}
                >
                  <activeModal.icon size={22} />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--navy)' }}>
                    {activeModal.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setActiveModal(null)}
                style={{
                  background: '#F1F5F9',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#64748B',
                }}
              >
                <X size={18} />
              </button>
            </div>

            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {activeModal.detail}
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--navy)', marginBottom: '0.75rem' }}>
                Core Engineered Capabilities:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {activeModal.capabilities.map((cap, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#334155' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--blue)' }} />
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
                  background: 'var(--blue)',
                  color: '#FFFFFF',
                  padding: '0.85rem',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.925rem',
                  textDecoration: 'none',
                }}
              >
                Schedule Technical Consultation
              </a>
              <button
                onClick={() => setActiveModal(null)}
                style={{
                  padding: '0.85rem 1.5rem',
                  borderRadius: '8px',
                  border: '1px solid #CBD5E1',
                  background: '#FFFFFF',
                  color: '#475569',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        :global(.solution-practice-card:hover) {
          border-color: rgba(21, 138, 226, 0.45) !important;
          box-shadow: 0 24px 48px -10px rgba(5, 45, 93, 0.12), 0 0 25px rgba(21, 138, 226, 0.08) !important;
          transform: translateY(-8px);
        }
        :global(.solution-practice-card:hover .practice-img) {
          transform: scale(1.04);
        }
        :global(.solution-practice-card:hover .practice-title) {
          color: var(--blue) !important;
        }
        :global(.solution-practice-card:hover .practice-cta) {
          gap: 12px !important;
        }
        @media (max-width: 960px) {
          :global(.practices-grid) {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
