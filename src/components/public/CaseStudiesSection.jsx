'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  CheckCircle2,
  X,
} from 'lucide-react';

export default function CaseStudiesSection({ caseStudies = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCase, setSelectedCase] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  // Genuine Real Enterprise Case Studies with High-Resolution Photography
  const defaultCases = [
    {
      id: 1,
      tag: 'Retail & E-Commerce',
      category: 'retail',
      title: 'Unified Customer 360 & Predictive Demand Forecasting Engine',
      metricNum: '3.2×',
      metricLabel: 'Forecasting Precision (+22% Turnover)',
      image: '/images/cs_retail_forecasting.jpg',
      summary:
        'Engineered an enterprise semantic data layer integrating 200+ omnichannel distribution centers with automated ML replenishment and predictive inventory optimization.',
      problem:
        'Severe data fragmentation between physical store point-of-sale systems and e-commerce platforms led to frequent stockouts, excess carrying costs, and manual forecasting guesswork.',
      solution:
        'Deployed a modern Snowflake lakehouse with automated dbt transformation models and custom Python predictive demand forecasting pipelines running in real-time.',
      fullStory:
        'Slashed enterprise stockouts by 34%, improved replenishment accuracy by 3.2× across 200+ distribution centers, and increased inventory turnover by 22% within the first 6 months.',
      stack: ['Snowflake', 'dbt Cloud', 'Python ML', 'Power BI', 'AWS'],
    },
    {
      id: 2,
      tag: 'BFSI & Critical Infrastructure',
      category: 'bfsi',
      title: 'Real-Time Fraud Detection & Enterprise Streaming Lakehouse',
      metricNum: '65%',
      metricLabel: 'Latency Reduction (85ms SLA)',
      image: '/images/cs_fintech_streaming.jpg',
      summary:
        'Architected an event-driven data streaming engine ingesting over 10M+ daily financial transactions with real-time ML anomaly scoring and sub-second decision latency.',
      problem:
        'Fragmented legacy batch processing caused 4-6 hour fraud detection delays, exposing the banking institution to severe unauthorized payment liabilities and regulatory compliance audits.',
      solution:
        'Engineered a unified Databricks & Snowflake lakehouse coupled with Kafka real-time stream ingestion and containerized inference endpoints with automated schema verification.',
      fullStory:
        'The deployment lowered fraud investigation cycle times from hours to 85 milliseconds, preventing an estimated $4.2M in annual fraudulent losses while achieving full RBI and SOC 2 Type II regulatory compliance.',
      stack: ['Databricks', 'Apache Kafka', 'Python ML', 'Azure AKS', 'FinOps'],
    },
    {
      id: 3,
      tag: 'Enterprise Cloud & Lakehouses',
      category: 'cloud',
      title: 'Multi-Region Lakehouse Modernization & FinOps Governance',
      metricNum: '55%',
      metricLabel: 'Compute Cost Reduction (9× Deploy Speed)',
      image: '/images/cs_cloud_lakehouse.jpg',
      summary:
        'Migrated petabyte-scale on-premises legacy data warehouses to a unified modern cloud lakehouse with automated CI/CD and centralized cost governance.',
      problem:
        'Aging on-premises servers struggled with surging developer compute demands, creating bottlenecked deployment queues and skyrocketing maintenance overhead.',
      solution:
        'Executed an automated migration followed by microservices containerization onto AWS and Databricks with centralized IAM and FinOps cost governance.',
      fullStory:
        'Modernized 120+ microservices, cut daily build and deployment cycles from 4 hours to 22 minutes, and slashed annual cloud compute expenditure by 55%.',
      stack: ['AWS', 'Databricks', 'Docker', 'Snowflake', 'Python', 'Terraform'],
    },
  ];

  const items =
    caseStudies && caseStudies.length >= 3
      ? caseStudies.slice(0, 3).map((c, idx) => ({
          ...c,
          image: c.image || defaultCases[idx].image,
          metricNum: c.metricNum || defaultCases[idx].metricNum,
          metricLabel: c.metricLabel || defaultCases[idx].metricLabel,
          stack: c.stack || defaultCases[idx].stack,
          problem: c.problem || defaultCases[idx].problem,
          solution: c.solution || defaultCases[idx].solution,
          fullStory: c.fullStory || defaultCases[idx].fullStory,
        }))
      : defaultCases;

  // Auto-advance every 6s unless hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, items.length]);

  const currentCase = items[activeIndex];

  return (
    <section
      id="cases"
      className="showcase_panel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        position: 'relative',
        padding: '6.5rem 0',
        background: '#01162e',
        color: '#ffffff',
        overflow: 'hidden',
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(45, 212, 191, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div
          className="head"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '3.5rem',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div>
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
              PROVEN ENTERPRISE IMPACT
            </div>
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 'clamp(2.1rem, 3.4vw, 2.9rem)',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              Featured{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #2DD4BF 0%, #38BDF8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Case Studies
              </span>
            </h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Step Navigation Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                onClick={() =>
                  setActiveIndex((prev) => (prev - 1 + items.length) % items.length)
                }
                aria-label="Previous case study"
                className="showcase-nav-btn"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => setActiveIndex((prev) => (prev + 1) % items.length)}
                aria-label="Next case study"
                className="showcase-nav-btn"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <Link
              href="/case-studies"
              className="showcase-all-link"
              style={{
                background: 'linear-gradient(93.05deg, #008559 0%, #00A389 100%)',
                color: '#ffffff',
                padding: '12px 28px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                fontFamily: "'Montserrat', sans-serif",
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(0, 133, 89, 0.35)',
              }}
            >
              <span>View All Studies</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Desktop Showcase Structure */}
        <div
          className="showcase text-bottom"
          style={{
            position: 'relative',
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '4.5rem',
            minHeight: '480px',
          }}
        >
          {/* Vertical Progress Bar */}
          <div
            className="scr_bar"
            style={{
              height: '320px',
              width: '4px',
              background: 'rgba(255, 255, 255, 0.12)',
              borderRadius: '4px',
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 3,
            }}
          >
            <span
              className="bar"
              style={{
                position: 'absolute',
                left: 0,
                top: `${(activeIndex / items.length) * 100}%`,
                width: '4px',
                height: `${100 / items.length}%`,
                background: 'linear-gradient(180deg, #008559 0%, #2DD4BF 100%)',
                borderRadius: '4px',
                boxShadow: '0 0 14px rgba(45, 212, 191, 0.8)',
                transition: 'top 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            />

            {/* Step click handles */}
            {items.map((_, idx) => (
              <div
                key={idx}
                onClick={() => setActiveIndex(idx)}
                style={{
                  position: 'absolute',
                  left: '-10px',
                  top: `${(idx / (items.length - 1)) * 100}%`,
                  transform: 'translateY(-50%)',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 4,
                }}
                title={`Case Study ${idx + 1}`}
              >
                <span
                  style={{
                    width: activeIndex === idx ? '12px' : '8px',
                    height: activeIndex === idx ? '12px' : '8px',
                    borderRadius: '50%',
                    background: activeIndex === idx ? '#2DD4BF' : 'rgba(255, 255, 255, 0.4)',
                    boxShadow:
                      activeIndex === idx
                        ? '0 0 10px #2DD4BF, 0 0 0 4px rgba(45, 212, 191, 0.25)'
                        : 'none',
                    transition: 'all 0.3s ease',
                  }}
                />
              </div>
            ))}
          </div>

          {/* Left Narrative Panel */}
          <div
            className="showcase_inner"
            style={{
              position: 'relative',
              width: '52%',
              paddingLeft: '45px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div
              key={currentCase.id}
              className="showcase_card"
              style={{
                animation: 'showcaseFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* Clean Editorial Metadata Line */}
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  color: '#2DD4BF',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                <span style={{ color: '#2DD4BF' }}>{currentCase.tag}</span>
                <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>•</span>
                <span style={{ color: '#38BDF8' }}>
                  {currentCase.metricNum} {currentCase.metricLabel}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: 'clamp(1.75rem, 2.5vw, 2.3rem)',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 800,
                  lineHeight: 1.25,
                  color: '#ffffff',
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.015em',
                }}
              >
                {currentCase.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: 'rgba(255, 255, 255, 0.78)',
                  fontSize: '1.02rem',
                  lineHeight: 1.75,
                  marginBottom: '1.75rem',
                  maxWidth: '560px',
                }}
              >
                {currentCase.summary}
              </p>

              {/* Stack badges */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '2rem',
                }}
              >
                {currentCase.stack &&
                  currentCase.stack.map((t, sIdx) => (
                    <span
                      key={sIdx}
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#E2E8F0',
                        fontSize: '12px',
                        fontWeight: 600,
                        padding: '4px 10px',
                        borderRadius: '4px',
                      }}
                    >
                      {t}
                    </span>
                  ))}
              </div>

              {/* Learn More Button */}
              <button
                onClick={() => setSelectedCase(currentCase)}
                className="learn-more"
                style={{
                  background: 'linear-gradient(93.05deg, #008559 0%, #00A389 100%)',
                  padding: '12px 30px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '14px',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  color: '#ffffff',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  lineHeight: '19px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(0, 133, 89, 0.35)',
                }}
              >
                <span>Read Architecture Case</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Visuals Panel */}
          <div
            className="showcase_visuals"
            style={{
              position: 'relative',
              width: '46%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '420px',
            }}
          >
            {items.map((item, idx) => (
              <div
                key={item.id || idx}
                className="showcase_view"
                style={{
                  position: idx === activeIndex ? 'relative' : 'absolute',
                  inset: 0,
                  width: '100%',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow:
                    idx === activeIndex
                      ? '0 24px 60px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.12)'
                      : 'none',
                  background: '#011224',
                  cursor: 'pointer',
                  opacity: idx === activeIndex ? 1 : 0,
                  visibility: idx === activeIndex ? 'visible' : 'hidden',
                  pointerEvents: idx === activeIndex ? 'auto' : 'none',
                  transform: idx === activeIndex ? 'scale(1)' : 'scale(0.96)',
                  transition: 'opacity 0.45s ease, transform 0.45s ease, visibility 0.45s',
                  zIndex: idx === activeIndex ? 2 : 1,
                }}
                onClick={() => setSelectedCase(item)}
                title="Click to view complete case study"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    objectFit: 'cover',
                    aspectRatio: '16 / 11',
                  }}
                  className="showcase-img"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet Tab Pagination (<992px) */}
        <div
          className="showcase-mobile-tabs"
          style={{
            display: 'none',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '2rem',
          }}
        >
          {items.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              style={{
                padding: '8px 18px',
                borderRadius: '6px',
                border:
                  activeIndex === idx
                    ? '1px solid #2DD4BF'
                    : '1px solid rgba(255, 255, 255, 0.15)',
                background:
                  activeIndex === idx
                    ? 'rgba(45, 212, 191, 0.15)'
                    : 'rgba(255, 255, 255, 0.05)',
                color: activeIndex === idx ? '#2DD4BF' : '#94a3b8',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: "'Montserrat', sans-serif",
                transition: 'all 0.3s ease',
              }}
            >
              0{idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedCase && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedCase(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(1, 18, 36, 0.85)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#01162e',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              maxWidth: '750px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.85)',
              color: '#ffffff',
              padding: '2.5rem',
              position: 'relative',
              animation: 'modalSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCase(null)}
              aria-label="Close modal"
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#ffffff',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <X size={18} />
            </button>

            {/* Clean Editorial Metadata Line */}
            <div
              style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: '#2DD4BF',
                marginBottom: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              <span>{selectedCase.tag}</span>
              <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>•</span>
              <span style={{ color: '#38BDF8' }}>
                {selectedCase.metricNum} {selectedCase.metricLabel}
              </span>
            </div>

            {/* Title */}
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 'clamp(1.5rem, 2.4vw, 2rem)',
                fontWeight: 800,
                lineHeight: 1.25,
                marginBottom: '1.5rem',
                color: '#ffffff',
              }}
            >
              {selectedCase.title}
            </h2>

            {/* Architecture Visual */}
            <div
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                marginBottom: '1.75rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                maxHeight: '260px',
              }}
            >
              <img
                src={selectedCase.image}
                alt={selectedCase.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Problem & Solution Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.25rem',
                marginBottom: '1.75rem',
              }}
              className="modal-case-split"
            >
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.035)',
                  padding: '1.25rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    color: '#f87171',
                    textTransform: 'uppercase',
                    marginBottom: '0.5rem',
                    letterSpacing: '1px',
                  }}
                >
                  The Enterprise Challenge
                </div>
                <p
                  style={{
                    fontSize: '0.925rem',
                    lineHeight: 1.6,
                    color: 'rgba(255, 255, 255, 0.78)',
                    margin: 0,
                  }}
                >
                  {selectedCase.problem}
                </p>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.035)',
                  padding: '1.25rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    color: '#2DD4BF',
                    textTransform: 'uppercase',
                    marginBottom: '0.5rem',
                    letterSpacing: '1px',
                  }}
                >
                  Architectural Solution
                </div>
                <p
                  style={{
                    fontSize: '0.925rem',
                    lineHeight: 1.6,
                    color: 'rgba(255, 255, 255, 0.78)',
                    margin: 0,
                  }}
                >
                  {selectedCase.solution}
                </p>
              </div>
            </div>

            {/* Full ROI Narrative */}
            <div
              style={{
                background: 'rgba(0, 133, 89, 0.12)',
                border: '1px solid rgba(0, 133, 89, 0.3)',
                padding: '1.25rem',
                borderRadius: '12px',
                marginBottom: '1.75rem',
              }}
            >
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  color: '#2DD4BF',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                  letterSpacing: '1px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <CheckCircle2 size={16} />
                Quantifiable Business Impact
              </div>
              <p
                style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.65,
                  color: 'rgba(255, 255, 255, 0.9)',
                  margin: 0,
                }}
              >
                {selectedCase.fullStory}
              </p>
            </div>

            {/* Tech Stack */}
            <div style={{ marginBottom: '2rem' }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#94a3b8',
                  textTransform: 'uppercase',
                  marginBottom: '0.6rem',
                  letterSpacing: '1px',
                }}
              >
                Architecture Stack
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {selectedCase.stack &&
                  selectedCase.stack.map((t, sIdx) => (
                    <span
                      key={sIdx}
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#E2E8F0',
                        fontSize: '12px',
                        fontWeight: 600,
                        padding: '4px 10px',
                        borderRadius: '4px',
                      }}
                    >
                      {t}
                    </span>
                  ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '12px',
              }}
            >
              <button
                onClick={() => setSelectedCase(null)}
                style={{
                  padding: '10px 22px',
                  borderRadius: '8px',
                  background: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#ffffff',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Close
              </button>
              <Link
                href="/contact"
                style={{
                  padding: '10px 26px',
                  borderRadius: '8px',
                  background: 'linear-gradient(93.05deg, #008559 0%, #00A389 100%)',
                  color: '#ffffff',
                  fontSize: '14px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 15px rgba(0, 133, 89, 0.35)',
                }}
              >
                <span>Consult Our Architects</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .showcase-nav-btn:hover {
          background: rgba(45, 212, 191, 0.15) !important;
          border-color: #2DD4BF !important;
          color: #2DD4BF !important;
          transform: translateY(-2px);
        }
        .showcase-all-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 133, 89, 0.5) !important;
        }
        .showcase_view:hover img {
          transform: scale(1.03);
        }
        .learn-more:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 133, 89, 0.5) !important;
        }

        @keyframes showcaseFadeIn {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 991px) {
          :global(.showcase_panel .showcase) {
            flex-direction: column !important;
            gap: 2.5rem !important;
          }
          :global(.showcase_panel .showcase .scr_bar) {
            display: none !important;
          }
          :global(.showcase_panel .showcase .showcase_inner) {
            width: 100% !important;
            padding-left: 0 !important;
          }
          :global(.showcase_panel .showcase .showcase_visuals) {
            width: 100% !important;
          }
          :global(.showcase-mobile-tabs) {
            display: flex !important;
          }
          :global(.modal-case-split) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
