'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, X, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function CaseStudiesSection({ caseStudies = [] }) {
  const [selectedCase, setSelectedCase] = useState(null);

  const fallbackCases = [
    {
      id: 1,
      tag: 'BFSI & Fintech',
      image: '/images/hero_realistic_analytics.jpg',
      resultNum: '65%',
      resultLabel: 'Latency Reduction (85ms SLA)',
      title: 'Real-Time Fraud Detection & Enterprise Streaming Lakehouse',
      summary:
        'Architected an event-driven data streaming engine ingesting over 10M+ daily financial transactions with real-time ML anomaly scoring and sub-second decision latency.',
      stack: ['Snowflake', 'Apache Kafka', 'Python ML', 'Azure AKS'],
      problem:
        'Fragmented legacy batch processing caused 4-6 hour fraud detection delays, exposing the banking institution to severe unauthorized payment liabilities.',
      solution:
        'Engineered a unified Databricks & Snowflake lakehouse coupled with Kafka real-time stream ingestion and containerized inference endpoints with automated schema verification.',
      fullStory:
        'The deployment lowered fraud investigation cycle times from hours to 85 milliseconds, preventing an estimated $4.2M in annual fraudulent losses while achieving full RBI and SOC2 compliance.',
    },
    {
      id: 2,
      tag: 'Retail & E-Commerce',
      image: '/images/service_analytics_real.jpg',
      resultNum: '3.2×',
      resultLabel: 'Forecast Precision (-34% Stockouts)',
      title: 'Unified Customer 360 & Predictive Demand Forecasting Engine',
      summary:
        'Centralized 14 fragmented ERP and CRM databases into an executive Power BI semantic layer and automated demand forecasting pipeline across 200+ distribution centers.',
      stack: ['Power BI', 'Databricks', 'Azure Synapse', 'dbt'],
      problem:
        'Siloed warehouse inventories and disjointed customer transactional records led to recurring stock-outs, customer churn, and excess holding costs.',
      solution:
        'Created an automated dbt-governed medallion lakehouse architecture feeding executive Power BI workspaces with automated DAX model caching and real-time replenishment signals.',
      fullStory:
        'Empowered merchandising leadership with predictive inventory reordering schedules, reducing regional warehouse stockouts by 34% and increasing GMV turnover by 22% within two quarters.',
    },
  ];

  const activeCases =
    caseStudies && caseStudies.length > 0
      ? caseStudies.slice(0, 2).map((c, idx) => ({
          ...c,
          image: c.image || fallbackCases[idx % fallbackCases.length].image,
          resultNum: c.resultNum || fallbackCases[idx % fallbackCases.length].resultNum,
          resultLabel: c.resultLabel || fallbackCases[idx % fallbackCases.length].resultLabel,
          stack: c.stack || fallbackCases[idx % fallbackCases.length].stack,
          problem: c.problem || fallbackCases[idx % fallbackCases.length].problem,
          solution: c.solution || fallbackCases[idx % fallbackCases.length].solution,
          fullStory: c.fullStory || fallbackCases[idx % fallbackCases.length].fullStory,
        }))
      : fallbackCases;

  return (
    <section id="cases" style={{ background: '#000000', padding: '6.5rem 0', color: '#ffffff' }}>
      <div className="container">
        {/* Header matching Team Computers Case Study aesthetics */}
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
          <div style={{ maxWidth: '720px' }}>
            <div
              style={{
                fontSize: '13px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                color: '#fffa65',
                marginBottom: '0.75rem',
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              PROVEN ENTERPRISE IMPACT
            </div>
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 'clamp(2.2rem, 3.5vw, 3rem)',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              Real World Architectures.{' '}
              <span
                style={{
                  background: 'linear-gradient(90.21deg, #00C8FF 10.33%, #00F7FF 87.54%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Quantifiable ROI.
              </span>
            </h2>
          </div>

          <Link
            href="/case-studies"
            className="home-case-cta-btn"
            style={{
              background: 'linear-gradient(93.05deg, #1EC9F2 -14.26%, #0DB16A 85.74%)',
              color: '#ffffff',
              padding: '12px 30px',
              borderRadius: '40px',
              fontSize: '14px',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            <span>View All Case Studies</span>
            <img src="/images/learn-more-arrow.svg" alt="arrow" style={{ width: '14px' }} />
          </Link>
        </div>

        {/* Featured Split Case Study Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {activeCases.map((item, idx) => {
            const isReverse = idx % 2 === 1;
            return (
              <div
                key={item.id || idx}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '3rem',
                  alignItems: 'center',
                  background: '#08080c',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '2.5rem',
                  transition: 'all 0.4s ease',
                }}
                className={`home-case-card ${isReverse ? 'home-case-reverse' : ''}`}
              >
                {/* Left Text */}
                <div style={{ order: isReverse ? 2 : 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        background: 'linear-gradient(91.29deg, rgba(8, 32, 93, 0.75) 50%, rgba(24, 71, 153, 0.75) 115%)',
                        color: '#fffa65',
                        padding: '6px 16px',
                        fontSize: '12px',
                        borderRadius: '20px',
                        fontWeight: 700,
                        border: '1px solid rgba(255, 250, 101, 0.25)',
                      }}
                    >
                      {item.tag}
                    </span>

                    <span
                      style={{
                        background: 'rgba(29, 202, 246, 0.12)',
                        border: '1px solid rgba(29, 202, 246, 0.35)',
                        color: '#00F7FF',
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: 600,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <TrendingUp size={13} />
                      <b>{item.resultNum}</b> {item.resultLabel}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 'clamp(1.4rem, 2vw, 1.85rem)',
                      fontWeight: 700,
                      color: '#ffffff',
                      lineHeight: 1.32,
                      marginBottom: '1rem',
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '1rem',
                      lineHeight: 1.7,
                      color: 'rgba(255, 255, 255, 0.75)',
                      marginBottom: '1.5rem',
                    }}
                  >
                    {item.summary}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '1.75rem' }}>
                    {item.stack &&
                      item.stack.map((t, sIdx) => (
                        <span
                          key={sIdx}
                          style={{
                            background: '#121218',
                            border: '1px solid #282834',
                            color: '#94a3b8',
                            fontSize: '12px',
                            fontWeight: 600,
                            padding: '4px 12px',
                            borderRadius: '16px',
                          }}
                        >
                          {t}
                        </span>
                      ))}
                  </div>

                  <button
                    onClick={() => setSelectedCase(item)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      padding: 0,
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '15px',
                      fontWeight: 700,
                      background: 'linear-gradient(88.81deg, #00C8FF 3.08%, #00F7FF 79.39%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                    }}
                    className="home-case-link"
                  >
                    <span>Read Executive Case Study</span>
                    <img src="/images/blue-arrow.svg" alt="arrow" style={{ width: '13px' }} />
                  </button>
                </div>

                {/* Right Image */}
                <div
                  style={{
                    order: isReverse ? 1 : 2,
                    borderRadius: '14px',
                    overflow: 'hidden',
                    height: '320px',
                    position: 'relative',
                    boxShadow: '0 16px 40px rgba(0, 0, 0, 0.6)',
                    cursor: 'pointer',
                  }}
                  onClick={() => setSelectedCase(item)}
                  className="home-case-img-box"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.5s ease',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, transparent 50%, rgba(0, 0, 0, 0.8) 100%)',
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedCase && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(8px)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={() => setSelectedCase(null)}
        >
          <div
            style={{
              background: '#0e0e14',
              border: '1px solid rgba(255, 250, 101, 0.25)',
              borderRadius: '20px',
              maxWidth: '820px',
              width: '100%',
              maxHeight: '88vh',
              overflowY: 'auto',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px 28px',
                borderBottom: '1px solid #1c1c28',
                position: 'sticky',
                top: 0,
                background: '#0e0e14',
                zIndex: 10,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span
                  style={{
                    background: 'rgba(255, 250, 101, 0.1)',
                    color: '#fffa65',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 700,
                  }}
                >
                  {selectedCase.tag}
                </span>
                <span
                  style={{
                    background: 'rgba(29, 202, 246, 0.12)',
                    color: '#00F7FF',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 600,
                  }}
                >
                  {selectedCase.resultNum} {selectedCase.resultLabel}
                </span>
              </div>
              <button
                onClick={() => setSelectedCase(null)}
                style={{
                  background: '#1a1a26',
                  border: 'none',
                  color: '#94a3b8',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ padding: '28px' }}>
              <h2
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 'clamp(1.5rem, 2.4vw, 2rem)',
                  fontWeight: 700,
                  color: '#ffffff',
                  lineHeight: 1.3,
                  margin: '0 0 20px 0',
                }}
              >
                {selectedCase.title}
              </h2>

              <div
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  marginBottom: '24px',
                  maxHeight: '280px',
                }}
              >
                <img
                  src={selectedCase.image}
                  alt={selectedCase.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '18px',
                  marginBottom: '24px',
                }}
                className="modal-split-grid"
              >
                <div
                  style={{
                    background: '#13131c',
                    border: '1px solid #222230',
                    borderRadius: '12px',
                    padding: '20px',
                  }}
                >
                  <h4 style={{ color: '#ff5e7e', fontSize: '15px', margin: '0 0 10px 0', fontWeight: 700 }}>
                    The Enterprise Challenge
                  </h4>
                  <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                    {selectedCase.problem}
                  </p>
                </div>

                <div
                  style={{
                    background: '#13131c',
                    border: '1px solid #222230',
                    borderRadius: '12px',
                    padding: '20px',
                  }}
                >
                  <h4 style={{ color: '#0db16a', fontSize: '15px', margin: '0 0 10px 0', fontWeight: 700 }}>
                    The Architecture Solution
                  </h4>
                  <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                    {selectedCase.solution}
                  </p>
                </div>
              </div>

              <div
                style={{
                  background: 'rgba(29, 202, 246, 0.05)',
                  border: '1px solid rgba(29, 202, 246, 0.3)',
                  borderRadius: '12px',
                  padding: '20px',
                  marginBottom: '24px',
                }}
              >
                <h4 style={{ color: '#00F7FF', fontSize: '15px', margin: '0 0 10px 0', fontWeight: 700 }}>
                  Quantifiable Business Outcomes
                </h4>
                <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                  {selectedCase.fullStory}
                </p>
              </div>

              <div style={{ textAlign: 'center', paddingTop: '10px' }}>
                <Link
                  href="/contact"
                  style={{
                    background: 'linear-gradient(93.05deg, #1EC9F2 -14.26%, #0DB16A 85.74%)',
                    color: '#ffffff',
                    padding: '12px 32px',
                    borderRadius: '40px',
                    fontSize: '15px',
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    textDecoration: 'none',
                  }}
                >
                  <span>Schedule Architecture Consultation</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .home-case-cta-btn:hover {
          background: linear-gradient(93.05deg, #0DB16A -14.26%, #1EC9F2 85.74%) !important;
          transform: translateY(-2px);
        }
        .home-case-card:hover {
          border-color: rgba(255, 250, 101, 0.35) !important;
          transform: translateY(-4px);
        }
        .home-case-card:hover .home-case-img-box img {
          transform: scale(1.06);
        }
        .home-case-link:hover img {
          transform: translateX(5px);
        }
        @media (max-width: 900px) {
          .home-case-card {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .home-case-reverse {
            grid-template-columns: 1fr !important;
          }
          :global(.modal-split-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
