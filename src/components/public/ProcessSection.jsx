'use client';

import React from 'react';
import { Search, Compass, Wrench, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

const processIcons = {
  Search,
  Compass,
  Wrench,
  ShieldCheck,
};

export default function ProcessSection({ processSteps = [] }) {
  const defaultSteps = [
    {
      stepNum: '01',
      phase: 'ASSESS & BLUEPRINT',
      title: 'Architectural Discovery',
      description: 'Comprehensive audit of your data silos, infrastructure bottlenecks, security postures, and business KPIs to design a risk-free technical blueprint.',
      deliverables: ['Infrastructure & Data Readiness Audit', 'Target Architecture Blueprint', 'Milestone-Based Execution Roadmap'],
      icon: 'Search',
    },
    {
      stepNum: '02',
      phase: 'INGEST & MODERNIZE',
      title: 'Foundation Engineering',
      description: 'Engineering resilient cloud storage, automated ELT ingestion pipelines (dbt, Kafka), and governed analytical warehouses (Snowflake, Databricks).',
      deliverables: ['Automated Bronze/Silver/Gold Lakehouse', 'Schema Validation & Data Lineage', 'Zero-Downtime Data Migration'],
      icon: 'Compass',
    },
    {
      stepNum: '03',
      phase: 'DEPLOY & INTEGRATE',
      title: 'Production Activation',
      description: 'Deploying high-impact executive BI semantic layers, production ML inference endpoints with guardrails, and enterprise software microservices.',
      deliverables: ['Executive BI & Self-Service Dashboards', 'Containerized AI Model Serving (Sub-100ms)', 'End-to-End Enterprise Testing & Sign-off'],
      icon: 'Wrench',
    },
    {
      stepNum: '04',
      phase: 'SCALE & GOVERN',
      title: 'Managed Evolution',
      description: '24/7 telemetry monitoring, continuous cloud FinOps cost tuning, automated model drift retraining, and SLA-backed engineering pod support.',
      deliverables: ['99.9% Pipeline Uptime SLA', 'Continuous FinOps Resource Optimization', 'Automated Model Drift Retraining'],
      icon: 'ShieldCheck',
    },
  ];

  const steps = processSteps.length
    ? processSteps.map((s, idx) => ({
        ...s,
        phase: defaultSteps[idx]?.phase || `PHASE ${s.stepNum || idx + 1}`,
        deliverables: defaultSteps[idx]?.deliverables || ['Enterprise Architecture Documentation', 'Production-Grade Delivery', 'SLA Support'],
      }))
    : defaultSteps;

  return (
    <section id="process" style={{ background: '#FFFFFF', padding: '6.5rem 0' }}>
      <div className="container">
        {/* Section Header */}
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
            EXECUTION METHODOLOGY
          </div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
              fontWeight: 800,
              color: 'var(--navy)',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              marginBottom: '1rem',
            }}
          >
            A Battle-Tested Framework from Discovery to Scale
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: '#64748B',
              lineHeight: 1.7,
            }}
          >
            Enterprise technology transformations require rigorous engineering discipline. Our phased methodology
            guarantees transparency, eliminates deployment risk, and ensures measurable ROI at every milestone.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            borderRadius: '16px',
            border: '1px solid #E2E8F0',
            overflow: 'hidden',
            background: '#FFFFFF',
            boxShadow: '0 4px 20px rgba(15, 35, 71, 0.04)',
          }}
          className="process-grid"
        >
          {steps.map((step, idx) => {
            const IconComp = processIcons[step.icon] || Search;
            return (
              <div
                key={idx}
                style={{
                  padding: '2.5rem 2rem',
                  borderRight: idx < steps.length - 1 ? '1px solid #E2E8F0' : 'none',
                  background: '#FFFFFF',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#F8FAFC';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#FFFFFF';
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
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        letterSpacing: '1px',
                        color: 'var(--blue)',
                        background: 'rgba(21, 138, 226, 0.08)',
                        padding: '3px 8px',
                        borderRadius: '4px',
                      }}
                    >
                      {step.phase}
                    </span>

                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '2rem',
                        fontWeight: 800,
                        color: '#E2E8F0',
                        lineHeight: 1,
                      }}
                    >
                      {step.stepNum}
                    </span>
                  </div>

                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '10px',
                      background: 'rgba(21, 138, 226, 0.08)',
                      border: '1.5px solid rgba(21, 138, 226, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--blue)',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <IconComp size={22} />
                  </div>

                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: 'var(--navy)',
                      marginBottom: '0.75rem',
                      lineHeight: 1.3,
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: '#64748B',
                      lineHeight: 1.65,
                      marginBottom: '1.75rem',
                    }}
                  >
                    {step.description}
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
                  <div
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.8px',
                      color: '#94A3B8',
                      marginBottom: '2px',
                    }}
                  >
                    Key Deliverables:
                  </div>
                  {step.deliverables.map((del, dIdx) => (
                    <div
                      key={dIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.785rem',
                        color: '#334155',
                        fontWeight: 500,
                      }}
                    >
                      <CheckCircle2 size={13} style={{ color: 'var(--blue)', flexShrink: 0 }} />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          :global(.process-grid) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          :global(.process-grid > div:nth-child(2)) {
            border-right: none !important;
          }
          :global(.process-grid > div:nth-child(1)),
          :global(.process-grid > div:nth-child(2)) {
            border-bottom: 1px solid #E2E8F0 !important;
          }
        }
        @media (max-width: 640px) {
          :global(.process-grid) {
            grid-template-columns: 1fr !important;
          }
          :global(.process-grid > div) {
            border-right: none !important;
            border-bottom: 1px solid #E2E8F0 !important;
          }
          :global(.process-grid > div:last-child) {
            border-bottom: none !important;
          }
        }
      `}</style>
    </section>
  );
}
