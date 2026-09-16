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
      icon: Layers,
      title: 'Architectural Rigor & Scalability',
      badge: 'Zero Technical Debt',
      desc: 'Decoupled cloud lakehouses (Snowflake, Databricks, BigQuery) with automated CI/CD and elastic multi-cloud compute designed for long-term scalability.',
      points: [
        'Decoupled storage and compute topology',
        'Automated dbt & Airflow data transformations',
        'Multi-cloud resilience (AWS, Azure, GCP)',
      ],
    },
    {
      icon: Cpu,
      title: 'Production-Grade AI & MLOps',
      badge: 'Measurable ROI',
      desc: 'Containerized, low-latency AI inference pipelines, hardened RAG architectures with deterministic guardrails, and continuous model drift monitoring.',
      points: [
        'Secure Retrieval-Augmented Generation (RAG)',
        'Automated model drift & latency monitoring',
        'Enterprise SLA with sub-100ms response targets',
      ],
    },
    {
      icon: GitBranch,
      title: '100% Client IP Ownership',
      badge: 'Zero Vendor Lock-in',
      desc: 'All pipelines, Terraform infrastructure, model weights, and custom BI dashboards remain 100% your intellectual property with full repository handover.',
      points: [
        'Standard cloud-native open tooling',
        'Comprehensive handover & architecture specs',
        'Complete source code & container ownership',
      ],
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise Security & Governance',
      badge: 'SOC2 & ISO Ready',
      desc: 'Security is engineered into the foundation with granular Role-Based Access Control (RBAC), end-to-end encryption, and audit-ready data lineage.',
      points: [
        'Granular RBAC & zero-trust network policies',
        'End-to-end encryption (at-rest & in-transit)',
        'Full metadata auditing & compliance cataloging',
      ],
    },
  ];

  return (
    <section id="why" style={{ background: '#F8FAFC', padding: '6.5rem 0' }}>
      <div className="container">
        {/* Section Header: Clean Enterprise */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
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
            Why Industry Leaders Partner with KD Infovision
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--muted)',
              lineHeight: 1.7,
            }}
          >
            We eliminate the high failure rate of enterprise IT and AI initiatives through battle-tested engineering standards, predictable delivery milestones, and uncompromising governance.
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
