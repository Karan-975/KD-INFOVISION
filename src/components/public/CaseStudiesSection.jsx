'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  X,
  Layers,
  ExternalLink,
} from 'lucide-react';

export default function CaseStudiesSection({ caseStudies = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCase, setSelectedCase] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  // Genuine Real Enterprise Case Studies matching the reference site
  const defaultCases = [
    {
      id: 1,
      tag: 'Enterprise Cloud & DevOps',
      category: 'cloud',
      title: 'Building a Future-Ready Workforce for a European Retail GCC',
      metricNum: '40%',
      metricLabel: 'Faster Project Delivery (500+ Engineers)',
      image: '/images/about_enterprise_team.jpg',
      summary:
        'To scale rapidly in India, a European retail giant’s GCC required a skilled tech workforce across cloud, data, and security. We delivered vetted professionals in record time.',
      problem:
        'Rapid expansion in India demanded specialized engineering talent across modern cloud platforms, automated CI/CD pipelines, and data security frameworks without compromising time-to-market.',
      solution:
        'Deployed dedicated talent incubators, customized onboarding playbooks, and certified cloud architects to seamlessly augment the client\'s internal engineering squads.',
      fullStory:
        'Accelerated project delivery milestones by 40%, built a self-sustaining engineering team of 500+ professionals, and reduced hiring turnaround from 90 days to under 3 weeks.',
      stack: ['AWS', 'Kubernetes', 'Terraform', 'Databricks', 'DevOps'],
    },
    {
      id: 2,
      tag: 'BFSI & Critical Infrastructure',
      category: 'bfsi',
      title: 'Enabling 99.999% Uptime for a Global Finance Corporation GCC',
      metricNum: '99.999%',
      metricLabel: 'Continuous High-Availability (Zero Disruption)',
      image: '/images/hero_enterprise_tech.jpg',
      summary:
        'A leading financial services GCC faced frequent IT disruptions impacting service continuity. By deploying our Zero Incident Framework and 24/7 monitoring, we helped them achieve 99.999% uptime.',
      problem:
        'Unplanned outages and latency spikes during high-volume trading and settlement windows caused severe SLA breaches, operational friction, and regulatory compliance audits.',
      solution:
        'Architected an active-active multi-region cloud topology with automated failover, AI-powered predictive incident detection, and round-the-clock site reliability engineering.',
      fullStory:
        'Eliminated unexpected downtime, maintained continuous 99.999% availability throughout peak transaction cycles, and saved an estimated $6.8M in potential downtime loss.',
      stack: ['Microsoft Azure', 'Site Reliability Engineering', 'Datadog', 'Apache Kafka', 'FinOps'],
    },
    {
      id: 3,
      tag: 'Multi-Cloud Modernization',
      category: 'cloud',
      title: 'Seamless Cloud Transformation for a US-based Tech Company',
      metricNum: '55%',
      metricLabel: 'Annual Compute Cost Reduction (9× Deploy Speed)',
      image: '/images/service_cloud_real.jpg',
      summary:
        'A US-based tech company needed to modernize its IT infrastructure to support global development teams. We enabled a secure, scalable migration to a multi-cloud architecture.',
      problem:
        'Aging on-premises servers struggled with surging developer compute demands, creating bottlenecked deployment queues and skyrocketing maintenance overhead.',
      solution:
        'Executed an automated lift-and-shift followed by microservices containerization onto AWS and Google Cloud with centralized IAM and FinOps cost governance.',
      fullStory:
        'Modernized 120+ microservices, cut daily build and deployment cycles from 4 hours to 22 minutes, and slashed annual cloud compute expenditure by 55%.',
      stack: ['AWS', 'Google Cloud', 'Docker', 'Snowflake', 'Python', 'Next.js'],
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
        padding: '6rem 0 6.5rem',
        background: '#000000',
        color: '#ffffff',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header matching Team Computers Case Studies reference */}
        <div
          className="head"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '3rem',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '13px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '1.6px',
                color: '#fffa65',
                marginBottom: '0.6rem',
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              PROVEN ENTERPRISE IMPACT
            </div>
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 'clamp(2.4rem, 3.8vw, 3.4rem)',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              Case Studies
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
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
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
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
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
                background: 'linear-gradient(93.05deg, #1EC9F2 -14.26%, #0DB16A 85.74%)',
                color: '#ffffff',
                padding: '11px 26px',
                borderRadius: '40px',
                fontSize: '14px',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                fontFamily: "'Montserrat', sans-serif",
                transition: 'all 0.4s ease',
              }}
            >
              <span>View All</span>
              <img
                src="/images/learn-more-arrow.svg"
                alt="arrow"
                style={{ width: '13px' }}
              />
            </Link>
          </div>
        </div>

        {/* Desktop Showcase Structure (.showcase with .scr_bar, .showcase_inner, .showcase_visuals) */}
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
          {/* Vertical Progress Bar (.scr_bar with animated .bar) */}
          <div
            className="scr_bar"
            style={{
              height: '320px',
              width: '4px',
              background: 'rgba(255, 255, 255, 0.15)',
              borderRadius: '100px',
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
                background: 'linear-gradient(93.05deg, #1EC9F2 -14.26%, #0DB16A 85.74%)',
                borderRadius: '60px',
                boxShadow: '0 0 14px rgba(30, 201, 242, 0.8)',
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
                    background: activeIndex === idx ? '#00F7FF' : 'rgba(255, 255, 255, 0.4)',
                    boxShadow:
                      activeIndex === idx
                        ? '0 0 10px #00F7FF, 0 0 0 4px rgba(0, 247, 255, 0.2)'
                        : 'none',
                    transition: 'all 0.3s ease',
                  }}
                />
              </div>
            ))}
          </div>

          {/* Left Narrative Panel (.showcase_inner) */}
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
              {/* Category & Metric Badges */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '1.25rem',
                  flexWrap: 'wrap',
                }}
              >
                <span
                  style={{
                    background: 'rgba(255, 250, 101, 0.12)',
                    border: '1px solid rgba(255, 250, 101, 0.3)',
                    color: '#fffa65',
                    padding: '5px 14px',
                    fontSize: '12px',
                    borderRadius: '20px',
                    fontWeight: 700,
                    letterSpacing: '0.4px',
                  }}
                >
                  {currentCase.tag}
                </span>

                <span
                  style={{
                    background: 'rgba(29, 202, 246, 0.12)',
                    border: '1px solid rgba(29, 202, 246, 0.35)',
                    color: '#00F7FF',
                    padding: '5px 14px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <TrendingUp size={13} />
                  <b>{currentCase.metricNum}</b> {currentCase.metricLabel}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: 'clamp(1.75rem, 2.5vw, 2.3rem)',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
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
                  color: 'rgba(255, 255, 255, 0.82)',
                  fontSize: '1.05rem',
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

              {/* Learn More Button */}
              <button
                onClick={() => setSelectedCase(currentCase)}
                className="learn-more"
                style={{
                  background: 'linear-gradient(93.05deg, #1EC9F2 -14.26%, #0DB16A 85.74%)',
                  padding: '12px 34px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '14px',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  color: '#ffffff',
                  borderRadius: '40px',
                  border: 'none',
                  cursor: 'pointer',
                  lineHeight: '19px',
                  textDecoration: 'none',
                  transition: 'all 0.4s ease',
                  boxShadow: '0 8px 24px rgba(13, 177, 106, 0.3)',
                }}
              >
                <span>Learn More</span>
                <img
                  src="/images/learn-more-arrow.svg"
                  alt="Learn More"
                  style={{ width: '15px' }}
                />
              </button>
            </div>
          </div>

          {/* Right Visuals Panel (.showcase_visuals with real genuine graphics) */}
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
                  borderRadius: '17px',
                  overflow: 'hidden',
                  boxShadow:
                    idx === activeIndex
                      ? '0 24px 60px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.12)'
                      : 'none',
                  background: '#0a0a0f',
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
                    aspectRatio: '583 / 500',
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
                borderRadius: '30px',
                border:
                  activeIndex === idx
                    ? '1px solid #00F7FF'
                    : '1px solid rgba(255, 255, 255, 0.15)',
                background:
                  activeIndex === idx
                    ? 'rgba(0, 247, 255, 0.15)'
                    : 'rgba(255, 255, 255, 0.05)',
                color: activeIndex === idx ? '#00F7FF' : '#94a3b8',
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
            background: 'rgba(0, 0, 0, 0.85)',
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
              background: '#0d0d14',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
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
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
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
              <X size={20} />
            </button>

            {/* Badges */}
            <div
              style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
                marginBottom: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  background: 'rgba(255, 250, 101, 0.15)',
                  border: '1px solid rgba(255, 250, 101, 0.35)',
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
                  background: 'rgba(0, 247, 255, 0.15)',
                  border: '1px solid rgba(0, 247, 255, 0.35)',
                  color: '#00F7FF',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <TrendingUp size={13} />
                <b>{selectedCase.metricNum}</b> {selectedCase.metricLabel}
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

            {/* Genuine Architecture Visual */}
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
                  background: 'rgba(255, 255, 255, 0.04)',
                  padding: '1.25rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 800,
                    color: '#ff6b6b',
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
                    color: 'rgba(255, 255, 255, 0.8)',
                    margin: 0,
                  }}
                >
                  {selectedCase.problem}
                </p>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  padding: '1.25rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 800,
                    color: '#00F7FF',
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
                    color: 'rgba(255, 255, 255, 0.8)',
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
                background: 'rgba(13, 177, 106, 0.08)',
                border: '1px solid rgba(13, 177, 106, 0.25)',
                padding: '1.25rem',
                borderRadius: '12px',
                marginBottom: '1.75rem',
              }}
            >
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  color: '#19D58A',
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
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#94a3b8',
                  textTransform: 'uppercase',
                  marginBottom: '0.6rem',
                  letterSpacing: '0.8px',
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
                        background: '#1a1a24',
                        border: '1px solid #323246',
                        color: '#00F7FF',
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
                  borderRadius: '30px',
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
                  borderRadius: '30px',
                  background: 'linear-gradient(93.05deg, #1EC9F2 -14.26%, #0DB16A 85.74%)',
                  color: '#ffffff',
                  fontSize: '14px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
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
          background: rgba(255, 255, 255, 0.2) !important;
          border-color: #00F7FF !important;
          color: #00F7FF !important;
          transform: translateY(-2px);
        }
        .showcase-all-link:hover {
          background: linear-gradient(93.05deg, #0DB16A -14.26%, #1EC9F2 85.74%) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(13, 177, 106, 0.45);
        }
        .showcase-all-link:hover img {
          transform: translateX(4px);
        }
        .showcase_view:hover img {
          transform: scale(1.03);
        }
        .learn-more:hover {
          background: linear-gradient(93.05deg, #0DB16A -14.26%, #1EC9F2 85.74%) !important;
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(13, 177, 106, 0.5) !important;
        }
        .learn-more:hover img {
          transform: translateX(4px);
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

        @keyframes showcaseVisualIn {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
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
