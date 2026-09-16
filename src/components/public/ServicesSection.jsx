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
  Sparkles,
  X,
} from 'lucide-react';

export default function ServicesSection({ services = [] }) {
  const [activeModal, setActiveModal] = useState(null);

  // Core Practice Definitions inspired by Team Computers "Explore Our Tech Solutions"
  const defaultPractices = [
    {
      id: 'data-ai',
      title: 'Data & AI Solutions',
      kicker: 'Intelligent Enterprise',
      icon: BrainCircuit,
      image: '/images/service_analytics_real.jpg',
      alt: 'Enterprise executive analytics and Power BI dashboard presentation',
      desc: 'Unlock actionable business intelligence with modern cloud lakehouses, automated data pipelines, and production machine learning models built for measurable ROI.',
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
      id: 'cloud-infra',
      title: 'Cloud & Infrastructure Solutions',
      kicker: 'Scalable & Resilient',
      icon: Cloud,
      image: '/images/service_cloud_real.jpg',
      alt: 'Tier-4 enterprise cloud datacenter server rack inspection',
      desc: 'Leverage secure, scalable multi-cloud architectures across AWS, Microsoft Azure, and GCP designed for high availability, automated elasticity, and zero downtime.',
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
      title: 'Software & Digital Engineering',
      kicker: 'Modern Architecture',
      icon: Code2,
      image: '/images/service_software_real.jpg',
      alt: 'Software and ML engineering team collaborating at workstation',
      desc: 'Modernize enterprise workflows with custom high-performance web applications, resilient backend microservices, and secure API integrations.',
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
      id: 'managed-services',
      title: 'Enterprise Managed Services & Security',
      kicker: 'Proactive Reliability',
      icon: ShieldCheck,
      image: '/images/hero_realistic_analytics.jpg',
      alt: 'IT Consultant monitoring telemetry and enterprise cloud architecture',
      desc: 'Optimize and safeguard your mission-critical systems with 24/7 proactive monitoring, rapid incident response, zero-trust IAM, and compliance governance.',
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
        {/* Section Header: Team Computers-inspired clean hierarchy */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              color: 'var(--blue)',
              marginBottom: '0.75rem',
            }}
          >
            <Sparkles size={14} />
            <span>EXPLORE OUR TECH SOLUTIONS</span>
          </div>

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
            End-to-End Enterprise Technology Practices
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

        {/* 4 Clean Solution Practice Cards (2x2 Grid) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2.5rem',
          }}
          className="practices-grid"
        >
          {practices.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                className="solution-practice-card"
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(5, 45, 93, 0.04)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <div>
                  {/* High-Resolution Photography Header */}
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '210px',
                      overflow: 'hidden',
                      background: '#052D5D',
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
                    {/* Subtle Overlay Vignette */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(5, 45, 93, 0.1) 0%, rgba(5, 45, 93, 0.75) 100%)',
                      }}
                    />

                    {/* Floating Practice Category Chip */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '14px',
                        left: '14px',
                        background: 'rgba(5, 45, 93, 0.85)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        padding: '5px 12px',
                        color: '#FFFFFF',
                        fontSize: '0.725rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.6px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <IconComp size={14} style={{ color: 'var(--blue)' }} />
                      <span>{item.kicker}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div style={{ padding: '2rem' }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.4rem',
                        fontWeight: 800,
                        color: 'var(--navy)',
                        marginBottom: '0.75rem',
                        lineHeight: 1.25,
                      }}
                    >
                      {item.title}
                    </h3>

                    {/* Short, high-impact description: zero fluff */}
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

                    {/* 4 Clean Capability Tags */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px',
                        marginBottom: '1rem',
                      }}
                    >
                      {item.capabilities.map((cap, cIdx) => (
                        <span
                          key={cIdx}
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            color: '#334155',
                            background: '#F8FAFC',
                            border: '1px solid #E2E8F0',
                            padding: '4px 10px',
                            borderRadius: '6px',
                          }}
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer with Direct CTA */}
                <div
                  style={{
                    padding: '1.25rem 2rem',
                    borderTop: '1px solid #F1F5F9',
                    background: '#FAFAFC',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <button
                    onClick={() => setActiveModal(item)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: 'none',
                      border: 'none',
                      color: 'var(--blue)',
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      padding: 0,
                      transition: 'gap 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.gap = '10px')}
                    onMouseLeave={(e) => (e.currentTarget.style.gap = '6px')}
                  >
                    <span>Explore Practice Architecture</span>
                    <ArrowRight size={16} />
                  </button>

                  <a
                    href="#contact"
                    style={{
                      fontSize: '0.775rem',
                      fontWeight: 600,
                      color: '#64748B',
                      textDecoration: 'none',
                    }}
                  >
                    Consult an Architect &rarr;
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Practice Architecture Detail Modal */}
      {activeModal && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div
            className="modal-content"
            style={{ maxWidth: '640px', padding: '2.5rem', borderRadius: '16px' }}
            onClick={(e) => e.stopPropagation()}
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
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--blue)', textTransform: 'uppercase' }}>
                    {activeModal.kicker}
                  </div>
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
          border-color: rgba(21, 138, 226, 0.4) !important;
          box-shadow: 0 16px 36px rgba(5, 45, 93, 0.1) !important;
          transform: translateY(-4px);
        }
        :global(.solution-practice-card:hover .practice-img) {
          transform: scale(1.04);
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
