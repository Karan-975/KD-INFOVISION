'use client';

import React, { useState } from 'react';
import { ArrowRight, X, Building2, CheckCircle2, TrendingUp, Layers } from 'lucide-react';

export default function CaseStudiesSection({ caseStudies = [] }) {
  const [selectedCase, setSelectedCase] = useState(null);

  const fallbackCases = [
    {
      id: 1,
      tag: 'BFSI & Fintech',
      image: '/images/hero_realistic_analytics.jpg',
      resultNum: '65%',
      resultLabel: 'Latency Reduction',
      title: 'Real-Time Fraud Detection & Enterprise Streaming Lakehouse',
      summary: 'Architected an event-driven data streaming engine ingesting over 10M+ daily financial transactions with sub-second ML anomaly scoring.',
      stack: ['Apache Kafka', 'Snowflake', 'Python ML', 'Azure AKS'],
      problem: 'Fragmented legacy batch processing caused 4-6 hour fraud detection delays, exposing the institution to severe unauthorized payment liabilities.',
      solution: 'Engineered a unified Databricks & Snowflake lakehouse coupled with Kafka real-time stream ingestion and containerized inference endpoints.',
      fullStory: 'The deployment lowered fraud investigation cycle times from hours to 85 milliseconds, preventing an estimated $4.2M in annual fraudulent losses while achieving full RBI regulatory audit compliance.',
    },
    {
      id: 2,
      tag: 'Retail & E-Commerce',
      image: '/images/service_analytics_real.jpg',
      resultNum: '3.2×',
      resultLabel: 'Forecast Accuracy',
      title: 'Unified Customer 360 & Automated Demand Prediction Engine',
      summary: 'Centralized 14 fragmented ERP and CRM databases into an executive Power BI semantic layer and automated demand forecasting pipeline.',
      stack: ['Power BI', 'Databricks', 'Azure Synapse', 'dbt'],
      problem: 'Siloed warehouse inventories and disjointed customer transactional records led to recurring stock-outs and excess holding costs across 200+ retail hubs.',
      solution: 'Created an automated dbt-governed medallion lakehouse architecture feeding executive Power BI workspaces with automated DAX model caching.',
      fullStory: 'Empowered merchandising leadership with predictive inventory reordering schedules, reducing regional warehouse stockouts by 34% and increasing GMV turnover by 22% within two quarters.',
    },
    {
      id: 3,
      tag: 'Healthcare & Diagnostics',
      image: '/images/service_software_real.jpg',
      resultNum: '85%',
      resultLabel: 'Processing Speed',
      title: 'HIPAA-Compliant Intelligent Clinical Document Processing & RAG',
      summary: 'Developed an automated OCR and Retrieval-Augmented Generation (RAG) assistant for complex clinical trial reports and diagnostic logs.',
      stack: ['Azure OpenAI', 'LangChain', 'PostgreSQL pgvector', 'Docker'],
      problem: 'Clinical researchers spent over 25 hours per week manually extracting patient diagnostic criteria from unstructured lab PDFs.',
      solution: 'Built an enterprise-grade RAG pipeline using secure vector embeddings, deterministic citation tracking, and zero-data-retention OpenAI endpoints.',
      fullStory: 'The clinical review turnaround was slashed from 4 days to 45 minutes with 99.4% citation accuracy, accelerating clinical trial qualification pipelines.',
    },
    {
      id: 4,
      tag: 'Supply Chain & Logistics',
      image: '/images/service_cloud_real.jpg',
      resultNum: '40%',
      resultLabel: 'Transit Delay Drop',
      title: 'IoT Telemetry Pipeline & Fleet Route Cost Optimization',
      summary: 'Engineered a real-time IoT fleet monitoring telemetry system tracking temperature-controlled pharmaceutical freight across national corridors.',
      stack: ['AWS IoT Core', 'Apache Airflow', 'Tableau', 'TimescaleDB'],
      problem: 'Lack of live sensor telemetry and route visibility caused temperature excursions and delayed carrier handoffs across cold-chain routes.',
      solution: 'Deployed a serverless IoT ingestion pipeline with automated route deviation alerts, geo-fencing webhooks, and Tableau executive dashboards.',
      fullStory: 'Achieved 99.98% cold-chain SLA compliance, saving $1.8M in damaged perishable shipments and cutting route delay penalties by 40%.',
    },
  ];

  const activeCases = caseStudies && caseStudies.length > 0
    ? caseStudies.map((c, idx) => ({
        ...c,
        image: c.image || fallbackCases[idx % fallbackCases.length].image,
        stack: c.stack || fallbackCases[idx % fallbackCases.length].stack,
        problem: c.problem || fallbackCases[idx % fallbackCases.length].problem,
        solution: c.solution || fallbackCases[idx % fallbackCases.length].solution,
        fullStory: c.fullStory || fallbackCases[idx % fallbackCases.length].fullStory,
      }))
    : fallbackCases;

  return (
    <section id="cases" style={{ background: '#FFFFFF', padding: '6.5rem 0' }}>
      <div className="container">
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '3.5rem',
            gap: '2rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ maxWidth: '680px' }}>
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
              PROVEN ENTERPRISE IMPACT
            </div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                fontWeight: 800,
                color: 'var(--navy)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              Real World Architectures. Quantifiable Outcomes.
            </h2>
          </div>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: 700,
              fontSize: '0.9rem',
              color: 'var(--blue)',
              textDecoration: 'none',
              padding: '10px 18px',
              borderRadius: '8px',
              background: 'rgba(21, 138, 226, 0.08)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(21, 138, 226, 0.15)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(21, 138, 226, 0.08)')}
          >
            <span>Request Architecture Feasibility</span>
            <ArrowRight size={16} />
          </a>
        </div>

        {/* 2x2 Case Grid - Identical Size & 16:9 Widescreen Image as Practice Cards Above */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2.25rem',
          }}
          className="cases-grid"
        >
          {activeCases.map((item) => (
            <div
              key={item.id || item.title}
              className="case-study-card"
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
              onClick={() => setSelectedCase(item)}
            >
              <div>
                {/* Top Rounded Photo (Clean 16:9 Inset Frame matching Practice Cards above) */}
                {item.image && (
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
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                      className="case-img"
                    />
                  </div>
                )}

                {/* Editorial Content Area - Perfectly left-aligned with image */}
                <div>
                  {/* Kicker tag & Outcome Pill */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.85rem',
                      flexWrap: 'wrap',
                      gap: '8px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        color: 'var(--blue)',
                      }}
                    >
                      {item.tag}
                    </span>

                    {item.resultNum && (
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '4px 10px',
                          borderRadius: '8px',
                          background: 'rgba(21, 138, 226, 0.1)',
                          border: '1px solid rgba(21, 138, 226, 0.25)',
                          fontSize: '0.78rem',
                          fontWeight: 800,
                          color: 'var(--blue)',
                        }}
                      >
                        <span>{item.resultNum}</span>
                        <span style={{ fontWeight: 600, color: 'var(--navy)' }}>{item.resultLabel}</span>
                      </span>
                    )}
                  </div>

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
                    className="case-title"
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
                    {item.summary}
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
                  className="case-cta"
                >
                  <span>Examine Architecture &amp; Solution</span>
                  <ArrowRight size={15} />
                </span>

                <span
                  style={{
                    fontSize: '0.8rem',
                    color: '#94A3B8',
                    fontWeight: 600,
                  }}
                >
                  Case Study &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedCase && (
        <div className="modal-overlay" onClick={() => setSelectedCase(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              padding: '2.5rem',
              maxWidth: '680px',
              borderRadius: '16px',
              border: '1px solid #E2E8F0',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div>
                <span
                  style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '0.725rem',
                    fontWeight: 700,
                    background: 'rgba(21, 138, 226, 0.1)',
                    color: 'var(--blue)',
                    display: 'inline-block',
                    marginBottom: '0.5rem',
                    letterSpacing: '0.5px',
                  }}
                >
                  {selectedCase.tag} ARCHITECTURE REVIEW
                </span>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--navy)', lineHeight: 1.3 }}>
                  {selectedCase.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCase(null)}
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

            {/* Metric Banner */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                padding: '1.25rem 1.5rem',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #052D5D 0%, #0A2540 100%)',
                color: '#FFFFFF',
                marginBottom: '1.75rem',
              }}
            >
              <div style={{ fontSize: '2.25rem', fontWeight: 800, color: '#158AE2', lineHeight: 1 }}>
                {selectedCase.resultNum}
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: '#94A3B8' }}>
                  MEASURED CLIENT OUTCOME
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#FFFFFF' }}>
                  {selectedCase.resultLabel} delivered in production deployment.
                </div>
              </div>
            </div>

            {/* Architecture breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px', color: '#94A3B8', marginBottom: '0.35rem' }}>
                  The Architectural Challenge
                </h4>
                <p style={{ fontSize: '0.925rem', color: '#334155', lineHeight: 1.65, margin: 0 }}>
                  {selectedCase.problem || selectedCase.summary}
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px', color: '#94A3B8', marginBottom: '0.35rem' }}>
                  Engineering Solution &amp; Stack
                </h4>
                <p style={{ fontSize: '0.925rem', color: '#334155', lineHeight: 1.65, margin: 0 }}>
                  {selectedCase.solution || selectedCase.fullStory}
                </p>
              </div>

              {selectedCase.fullStory && (
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px', color: '#94A3B8', marginBottom: '0.35rem' }}>
                    Production Outcome &amp; Value Realization
                  </h4>
                  <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                    {selectedCase.fullStory}
                  </p>
                </div>
              )}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid #E2E8F0' }}>
              <button
                onClick={() => setSelectedCase(null)}
                style={{
                  padding: '0.75rem 1.25rem',
                  borderRadius: '8px',
                  background: '#F1F5F9',
                  border: 'none',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  color: '#475569',
                }}
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setSelectedCase(null)}
                style={{
                  padding: '0.75rem 1.4rem',
                  borderRadius: '8px',
                  background: 'var(--blue)',
                  color: '#FFFFFF',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                Request Similar Architecture Review <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        :global(.case-study-card:hover) {
          border-color: rgba(21, 138, 226, 0.45) !important;
          box-shadow: 0 24px 48px -10px rgba(5, 45, 93, 0.12), 0 0 25px rgba(21, 138, 226, 0.08) !important;
          transform: translateY(-8px);
        }
        :global(.case-study-card:hover .case-img) {
          transform: scale(1.04);
        }
        :global(.case-study-card:hover .case-title) {
          color: var(--blue) !important;
        }
        :global(.case-study-card:hover .case-cta) {
          gap: 12px !important;
        }
        @media (max-width: 960px) {
          :global(.cases-grid) {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
