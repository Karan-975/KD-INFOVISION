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

        {/* 2x2 Case Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
          }}
          className="cases-grid"
        >
          {activeCases.map((item) => (
            <div
              key={item.id || item.title}
              className="enterprise-card"
              style={{
                borderRadius: '16px',
                background: '#FFFFFF',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 0,
              }}
            >
              {/* Authentic Case Study Photo Header */}
              {item.image && (
                <div style={{ height: '175px', position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(5, 45, 93, 0.15) 0%, rgba(5, 45, 93, 0.75) 100%)',
                    }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      left: '18px',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '0.725rem',
                      fontWeight: 700,
                      background: 'rgba(255, 255, 255, 0.95)',
                      color: 'var(--navy)',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {item.tag}
                  </span>
                </div>
              )}

              <div style={{ padding: '1.75rem 2rem 2rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      gap: '1.25rem',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        color: 'var(--navy)',
                        lineHeight: 1.3,
                        margin: 0,
                        flex: 1,
                      }}
                    >
                      {item.title}
                    </h3>

                    {/* Result Metric Pill */}
                    <div
                      style={{
                        minWidth: '105px',
                        padding: '0.75rem 0.65rem',
                        borderRadius: '10px',
                        background: 'linear-gradient(135deg, #052D5D 0%, #158AE2 100%)',
                        textAlign: 'center',
                        flexShrink: 0,
                        color: '#FFFFFF',
                      }}
                    >
                      <div
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '1.65rem',
                          fontWeight: 800,
                          lineHeight: 1,
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {item.resultNum}
                      </div>
                      <div
                        style={{
                          fontSize: '0.625rem',
                          fontWeight: 700,
                          color: 'rgba(255, 255, 255, 0.85)',
                          marginTop: '3px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                        }}
                      >
                        {item.resultLabel}
                      </div>
                    </div>
                  </div>

                <p style={{ fontSize: '0.925rem', color: '#64748B', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  {item.summary}
                </p>

                {/* Architecture Tech Pills */}
                {item.stack && item.stack.length > 0 && (
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                    {item.stack.map((t, tidx) => (
                      <span
                        key={tidx}
                        style={{
                          fontSize: '0.725rem',
                          fontWeight: 600,
                          color: '#334155',
                          background: '#F8FAFC',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          border: '1px solid #E2E8F0',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Bottom CTA */}
              <div
                style={{
                  paddingTop: '1.25rem',
                  borderTop: '1px solid #F1F5F9',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <button
                  onClick={() => setSelectedCase(item)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: 'var(--blue)',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: 0,
                  }}
                >
                  <span>Examine Architecture &amp; Solution</span>
                  <ArrowRight size={14} />
                </button>
              </div>
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
        @media (max-width: 960px) {
          :global(.cases-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
