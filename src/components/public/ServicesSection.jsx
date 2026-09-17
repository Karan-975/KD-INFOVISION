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

  // Core Practice Definitions inspired by premium enterprise capability centers
  const defaultPractices = [
    {
      id: 'data-ai',
      title: 'AI & Machine Learning',
      kicker: 'Intelligent Enterprise',
      icon: BrainCircuit,
      image: '/images/service_analytics_real.jpg',
      alt: 'Enterprise executive analytics and AI dashboard presentation',
      desc: 'Custom ML models, predictive analytics, NLP, GenAI, computer vision — intelligent automation with real, quantifiable ROI.',
      capabilities: [
        'Snowflake & Databricks Lakehouses',
        'Executive Power BI & Tableau Dashboards',
        'Production MLOps & GenAI Pipelines',
        'Real-Time Streaming via Apache Kafka',
      ],
      detail:
        'KD Infovision designs and deploys unified modern data architectures that bridge fragmented source systems into high-speed analytical layers. From medallion architecture on Databricks to automated DAX semantic models in Power BI and secure LLM inference endpoints, we ensure your data assets drive strategic executive decisions.',
    },
    {
      id: 'data-bi',
      title: 'Data Analytics & BI',
      kicker: 'Scalable & Resilient',
      icon: BarChart3,
      image: '/images/service_cloud_real.jpg',
      alt: 'Tier-4 enterprise cloud datacenter server rack inspection',
      desc: 'Power BI, Qlik, Tableau — transform raw enterprise data into executive-ready dashboards, automated semantic layers, and actionable intelligence.',
      capabilities: [
        'Multi-Cloud Architecture (AWS, Azure, GCP)',
        'Kubernetes (EKS / AKS) & Containerization',
        'Infrastructure as Code (IaC / Terraform)',
        'Zero-Downtime Cloud Migration',
      ],
      detail:
        'We help enterprises modernize legacy monolithic workloads into cloud-native microservices. Our certified cloud architects implement infrastructure as code with Terraform, container orchestration with Kubernetes, and robust FinOps strategies that optimize cloud expenditure while maximizing uptime.',
    },
    {
      id: 'software-engineering',
      title: 'Software Development',
      kicker: 'Modern Architecture',
      icon: Code2,
      image: '/images/service_software_real.jpg',
      alt: 'Software and ML engineering team collaborating at workstation',
      desc: 'Scalable web apps, APIs, SaaS platforms with Next.js & Laravel. MVP to enterprise-grade — fast, maintainable, and production-ready.',
      capabilities: [
        'Next.js 14 & React Full-Stack Platforms',
        'Microservices & Node.js Backend Engines',
        'Enterprise REST & GraphQL APIs',
        'Agile Engineering Pods & CI/CD Pipelines',
      ],
      detail:
        'From customer-facing digital portals to internal mission-critical ERP integrations, our software engineering practice delivers clean, maintainable code with zero technical debt. Every solution is delivered with 100% client intellectual property ownership and comprehensive documentation.',
    },
    {
      id: 'it-consulting',
      title: 'IT Consulting & Managed Cloud',
      kicker: 'Proactive Reliability',
      icon: ShieldCheck,
      image: '/images/hero_realistic_analytics.jpg',
      alt: 'IT Consultant monitoring telemetry and enterprise cloud architecture',
      desc: 'Technology strategy, architecture reviews, vendor selection, zero-trust cybersecurity, and digital roadmap planning for every stage.',
      capabilities: [
        '24/7 SRE Incident Response & Monitoring',
        'Zero-Trust Security & Granular RBAC',
        'SOC2 Type II & ISO 27001 Readiness',
        '99.9% Production SLA Reliability',
      ],
      detail:
        'Our Site Reliability Engineering (SRE) and cybersecurity teams provide continuous platform monitoring, automated alert triage, and preventative maintenance. We safeguard your data assets with end-to-end encryption, regular penetration audits, and strict compliance alignment.',
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
