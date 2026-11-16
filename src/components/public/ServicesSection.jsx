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
      id: 'tech-management-consulting',
      title: 'Technology & Management Consulting',
      kicker: 'Strategic Value',
      icon: ShieldCheck,
      image: '/images/service_consulting_real.jpg',
      alt: 'KD Infovision Technology Management & Enterprise Advisory Spec',
      desc: 'The KDI Framework provides efficient, high-quality solutions designed to meet the unique needs of our clients.',
      capabilities: [
        'Certified Cloud Architects',
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
        background: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        padding: '6.5rem 0',
        position: 'relative',
        overflow: 'hidden',
        color: '#0A1629',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header: Matching Image 1 Clean White Enterprise Editorial */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem auto' }}>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 'clamp(2.1rem, 3.4vw, 2.9rem)',
              fontWeight: 800,
              color: '#0A1629',
              letterSpacing: '-0.02em',
              lineHeight: 1.25,
              marginBottom: '1.15rem',
            }}
          >
            End-to-End{' '}
            <span
              style={{
                color: '#0077ED',
              }}
            >
              Enterprise Technology
            </span>{' '}
            Practices
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: '#475569',
              lineHeight: 1.75,
              margin: '0 auto',
              maxWidth: '700px',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 450,
            }}
          >
            Scalable, high-performance IT solutions engineered to accelerate digital transformation, modernize infrastructure, and deliver quantifiable business agility.
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
                background: '#FFFFFF',
                borderRadius: '20px',
                border: '1px solid #E2E8F0',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.5rem',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer',
              }}
              onClick={() => setActiveModal(item)}
            >
              <div>
                {/* Top Rounded Photo (Clean 16:9 Inset Frame without AI-feel capsule badges) */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16 / 9',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    background: '#F8FAFC',
                    border: '1px solid #E2E8F0',
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

                {/* Editorial Content Area */}
                <div>
                  <h3
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 'clamp(1.3rem, 1.7vw, 1.55rem)',
                      fontWeight: 800,
                      color: '#0A1629',
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
                      color: '#475569',
                      lineHeight: 1.7,
                      margin: 0,
                      fontFamily: "'Montserrat', sans-serif",
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
                          color: '#334155',
                          background: '#F1F5F9',
                          border: '1px solid #E2E8F0',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontFamily: "'Montserrat', sans-serif",
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
                  borderTop: '1px solid #E2E8F0',
                }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#0077ED',
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    transition: 'all 0.2s ease',
                    fontFamily: "'Montserrat', sans-serif",
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
                    fontFamily: "'Montserrat', sans-serif",
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
            background: 'rgba(10, 22, 41, 0.65)',
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
              borderRadius: '20px',
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.25)',
              color: '#0A1629',
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
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(0, 119, 237, 0.08)',
                    border: '1px solid rgba(0, 119, 237, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0077ED',
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
                      color: '#0A1629',
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
                  background: '#F1F5F9',
                  border: '1px solid #E2E8F0',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#64748B',
                  transition: 'all 0.2s ease',
                }}
              >
                <X size={18} />
              </button>
            </div>

            <p style={{ fontSize: '0.98rem', color: '#475569', lineHeight: 1.75, marginBottom: '1.75rem', fontFamily: "'Montserrat', sans-serif" }}>
              {activeModal.detail}
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <div
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  color: '#0077ED',
                  marginBottom: '0.85rem',
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Core Engineered Capabilities:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {activeModal.capabilities.map((cap, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem', color: '#334155', fontFamily: "'Montserrat', sans-serif" }}>
                    <CheckCircle2 size={16} style={{ color: '#0077ED', flexShrink: 0 }} />
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
                  background: 'linear-gradient(93.05deg, #0077ED 0%, #0056B3 100%)',
                  color: '#FFFFFF',
                  padding: '0.9rem',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '0.925rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 15px rgba(0, 119, 237, 0.35)',
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Schedule Architecture Consultation
              </a>
              <button
                onClick={() => setActiveModal(null)}
                style={{
                  padding: '0.9rem 1.75rem',
                  borderRadius: '10px',
                  border: '1px solid #E2E8F0',
                  background: '#F1F5F9',
                  color: '#475569',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: "'Montserrat', sans-serif",
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
          border-color: #0077ED !important;
          box-shadow: 0 20px 45px rgba(0, 119, 237, 0.12), 0 4px 16px rgba(0, 0, 0, 0.04) !important;
          transform: translateY(-6px);
        }
        :global(.solution-practice-card:hover .practice-img) {
          transform: scale(1.04);
        }
        :global(.solution-practice-card:hover .practice-title) {
          color: #0077ED !important;
        }
        :global(.solution-practice-card:hover .practice-cta) {
          gap: 12px !important;
          color: #0056B3 !important;
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
