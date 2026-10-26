'use client';

import React, { useState } from 'react';
import {
  BrainCircuit,
  BarChart3,
  ShieldCheck,
  Layers,
  ArrowRight,
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
    <section
      id="solutions"
      style={{
        background: '#011E41',
        padding: '6.5rem 0',
        position: 'relative',
        overflow: 'hidden',
        color: '#FFFFFF',
      }}
    >
      {/* Ambient subtle glow */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          left: '20%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(45, 212, 191, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          right: '15%',
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
            ENTERPRISE ARCHITECTURE PRACTICES
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
            End-to-End{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #2DD4BF 0%, #38BDF8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Enterprise Technology
            </span>{' '}
            Practices
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
            Scalable, high-performance IT solutions engineered to accelerate digital transformation, modernize lakehouse infrastructure, and deliver quantifiable business agility.
          </p>
        </div>

        {/* 4 Clean Solution Practice Cards (2x2 Grid) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
          }}
          className="practices-grid"
        >
          {practices.map((item) => (
            <div
              key={item.id}
              className="solution-practice-card"
              style={{
                background: 'rgba(255, 255, 255, 0.035)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.5rem',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer',
              }}
              onClick={() => setActiveModal(item)}
            >
              <div>
                {/* Top Rounded Photo (Clean 16:9 Inset Frame) */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16 / 9',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    background: '#011224',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
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
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(1, 22, 46, 0.75)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(45, 212, 191, 0.3)',
                      color: '#2DD4BF',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.kicker}
                  </div>
                </div>

                {/* Editorial Content Area */}
                <div>
                  <h3
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 'clamp(1.3rem, 1.7vw, 1.55rem)',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      marginBottom: '0.75rem',
                      lineHeight: 1.3,
                      letterSpacing: '-0.015em',
                      transition: 'color 0.2s ease',
                    }}
                    className="practice-title"
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.94rem',
                      color: 'rgba(255, 255, 255, 0.7)',
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>

                  {/* Capabilities Tags */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      marginTop: '1.25rem',
                    }}
                  >
                    {item.capabilities.slice(0, 3).map((cap, cIdx) => (
                      <span
                        key={cIdx}
                        style={{
                          fontSize: '11.5px',
                          fontWeight: 600,
                          color: '#E2E8F0',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          padding: '3px 9px',
                          borderRadius: '4px',
                        }}
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Clean Editorial CTA Link */}
              <div
                style={{
                  marginTop: '1.75rem',
                  paddingTop: '1.15rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#2DD4BF',
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
                    color: 'rgba(255, 255, 255, 0.5)',
                    fontWeight: 600,
                  }}
                >
                  Advisory Spec &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Detail Modal: Deep Technical Feasibility */}
      {activeModal && (
        <div
          className="modal-overlay"
          onClick={() => setActiveModal(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(1, 18, 36, 0.85)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '1.5rem',
          }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              padding: '2.5rem',
              maxWidth: '680px',
              width: '100%',
              borderRadius: '16px',
              background: '#01162e',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.85)',
              color: '#FFFFFF',
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(45, 212, 191, 0.12)',
                    border: '1px solid rgba(45, 212, 191, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#2DD4BF',
                  }}
                >
                  <activeModal.icon size={22} />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '1.35rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      margin: 0,
                    }}
                  >
                    {activeModal.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setActiveModal(null)}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#FFFFFF',
                  transition: 'all 0.2s ease',
                }}
              >
                <X size={18} />
              </button>
            </div>

            <p style={{ fontSize: '0.98rem', color: 'rgba(255, 255, 255, 0.78)', lineHeight: 1.75, marginBottom: '1.75rem' }}>
              {activeModal.detail}
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <div
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  color: '#2DD4BF',
                  marginBottom: '0.85rem',
                }}
              >
                Core Engineered Capabilities:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {activeModal.capabilities.map((cap, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem', color: '#E2E8F0' }}>
                    <CheckCircle2 size={16} style={{ color: '#2DD4BF', flexShrink: 0 }} />
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
                  background: 'linear-gradient(93.05deg, #008559 0%, #00A389 100%)',
                  color: '#FFFFFF',
                  padding: '0.9rem',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.925rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 15px rgba(0, 133, 89, 0.35)',
                }}
              >
                Schedule Architecture Consultation
              </a>
              <button
                onClick={() => setActiveModal(null)}
                style={{
                  padding: '0.9rem 1.75rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: '#FFFFFF',
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
          border-color: rgba(45, 212, 191, 0.45) !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(45, 212, 191, 0.12) !important;
          transform: translateY(-6px);
        }
        :global(.solution-practice-card:hover .practice-img) {
          transform: scale(1.05);
        }
        :global(.solution-practice-card:hover .practice-title) {
          color: #2DD4BF !important;
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
