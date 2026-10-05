'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

function CounterItem({ target, suffix, label, context }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 1800;
          const stepTime = 20;
          const totalSteps = duration / stepTime;
          const increment = target / totalSteps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div
      ref={ref}
      className="about-stat-counter-card"
      style={{
        padding: '1.4rem 1.35rem',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderRadius: '16px',
        boxShadow: '0 8px 30px rgba(5, 25, 80, 0.2)',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        cursor: 'default',
      }}
    >
      <div
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 'clamp(2rem, 2.7vw, 2.85rem)',
          fontWeight: 800,
          color: '#FFD028',
          textShadow: '0 2px 18px rgba(255, 208, 40, 0.3)',
          lineHeight: 1,
          marginBottom: '0.45rem',
          letterSpacing: '-0.02em',
        }}
      >
        {count}
        <span style={{ color: '#FFFFFF', marginLeft: '2px' }}>{suffix}</span>
      </div>
      <div
        style={{
          fontSize: '0.825rem',
          fontWeight: 700,
          color: '#FFFFFF',
          textTransform: 'uppercase',
          letterSpacing: '0.8px',
          marginBottom: '0.25rem',
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        {label}
      </div>
      {context && (
        <div
          style={{
            fontSize: '0.75rem',
            color: 'rgba(255, 255, 255, 0.75)',
            lineHeight: 1.35,
            fontWeight: 500,
          }}
        >
          {context}
        </div>
      )}
    </div>
  );
}

export default function AboutSection({ statCounters = [] }) {
  const stats = statCounters.length
    ? statCounters.map((s, idx) => ({
        ...s,
        context:
          idx === 0
            ? 'Specialized Consultants & Engineers'
            : idx === 1
            ? 'Enterprise & Strategic Partners'
            : idx === 2
            ? 'Successful Global Deliveries'
            : 'Cloud, Data & AI Certifications',
      }))
    : [
        { target: 38, suffix: '+', label: 'Team Members', context: 'Specialized Consultants & Engineers' },
        { target: 24, suffix: '+', label: 'Happy Clients', context: 'Enterprise & Strategic Partners' },
        { target: 50, suffix: '+', label: 'Projects Completed', context: 'Successful Global Deliveries' },
        { target: 60, suffix: '%', label: 'Certified Resources', context: 'Cloud, Data & AI Certifications' },
      ];

  const valuePillars = [
    'We Only Suggest What You NEED, Not What You LIKE',
    'KDI Certified Resources to Ensure Quick & Quality Delivery',
    'The KDI Framework: Adhering to Global Standards & Best Practices',
  ];

  return (
    <section
      id="about"
      style={{
        padding: 0,
        background: 'linear-gradient(135deg, #1865F2 0%, #104EC9 45%, #0A369D 100%)',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Decorative Ambient Radial Glows */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-10%',
          width: '650px',
          height: '650px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 229, 255, 0.22) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 208, 40, 0.14) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      {/* Subtle Geometric Polygonal Background Facets matching reference image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
          opacity: 0.16,
        }}
      >
        <svg width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="facetGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="facetGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#50E6FF" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon points="0,0 520,0 260,700 0,600" fill="url(#facetGrad1)" />
          <polygon points="650,0 1350,150 1100,850 500,450" fill="url(#facetGrad2)" />
          <polygon points="1150,350 1920,80 1920,950 1250,750" fill="url(#facetGrad1)" />
        </svg>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.05fr 0.95fr',
          minHeight: '560px',
          position: 'relative',
          zIndex: 2,
        }}
        className="about-split-grid"
      >
        {/* Left Story & Narrative */}
        <div
          style={{
            padding: '5rem 4.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            borderRight: '1px solid rgba(255, 255, 255, 0.14)',
            position: 'relative',
            zIndex: 2,
          }}
          className="about-left-pane"
        >
          {/* Overline Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              background: 'rgba(255, 208, 40, 0.16)',
              border: '1px solid rgba(255, 208, 40, 0.45)',
              borderRadius: '30px',
              color: '#FFD028',
              fontSize: '0.8rem',
              fontWeight: 800,
              letterSpacing: '1.2px',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
              fontFamily: "'Montserrat', sans-serif",
              width: 'fit-content',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#FFD028',
                display: 'inline-block',
                boxShadow: '0 0 8px #FFD028',
              }}
            />
            WE&apos;RE YOUR PARTNER IN CRITICAL MOMENTS
          </div>

          {/* Heading with Golden Yellow Accent */}
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 'clamp(2.1rem, 3.2vw, 3rem)',
              color: '#FFFFFF',
              lineHeight: 1.18,
              marginBottom: '1.5rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
            }}
          >
            We Know That Our Clients Are The Key To Our{' '}
            <span
              style={{
                color: '#FFD028',
                textShadow: '0 2px 24px rgba(255, 208, 40, 0.35)',
              }}
            >
              Success &amp; Triumph
            </span>
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: 'rgba(255, 255, 255, 0.94)',
              marginBottom: '1.25rem',
              maxWidth: '600px',
            }}
          >
            KD Infovision is a premier technology and AI solutions consulting firm specializing in Data &amp; Analytics, Modern Lakehouses, Autonomous Agentic AI, and Enterprise Cloud Transformation.
          </p>

          <p
            style={{
              fontSize: '0.975rem',
              lineHeight: 1.75,
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '2rem',
              maxWidth: '600px',
            }}
          >
            By delivering a full spectrum of advanced Data, BI, and AI services, we enable organizations to unlock the true value of their information. We transform raw data into actionable insights that accelerate decision-making, optimize operations, and achieve measurable business outcomes.
          </p>

          {/* 3 Value Pillars */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              marginBottom: '2.5rem',
            }}
          >
            {valuePillars.map((pillar, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  color: '#FFFFFF',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  background: 'rgba(255, 255, 255, 0.08)',
                  padding: '11px 16px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                }}
              >
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    background: 'rgba(255, 208, 40, 0.22)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <CheckCircle2 size={16} style={{ color: '#FFD028' }} />
                </div>
                <span>{pillar}</span>
              </div>
            ))}
          </div>

          {/* CTA Link Button */}
          <div>
            <Link
              href="/about"
              className="about-tc-learn-more"
              style={{
                background: 'linear-gradient(135deg, #FFD028 0%, #FFB000 100%)',
                padding: '14px 36px',
                borderRadius: '40px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                color: '#071A4A',
                fontSize: '15px',
                fontWeight: 800,
                fontFamily: "'Montserrat', sans-serif",
                textDecoration: 'none',
                boxShadow: '0 8px 25px rgba(255, 176, 0, 0.38)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <span>Explore Our Story</span>
              <ArrowRight size={17} style={{ strokeWidth: 2.5 }} />
            </Link>
          </div>
        </div>

        {/* Right Pane: Isometric Data Analytics Visual + 4 Quantitative Metric Counters */}
        <div
          style={{
            padding: '4.5rem 4rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '2rem',
            position: 'relative',
            zIndex: 2,
          }}
          className="about-right-pane"
        >
          {/* Isometric 3D Analytics & AI Architecture Visual */}
          <div
            className="about-illustration-wrapper"
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(2, 16, 56, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.22)',
              aspectRatio: '16 / 9',
              background: 'linear-gradient(135deg, #1254E2 0%, #0A369D 100%)',
              transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease',
            }}
          >
            <img
              src="/images/about_analytics_illustration.jpg"
              alt="KD Infovision Modern Data Architecture, Cloud Lakehouse and AI Analytics"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />

            {/* Subtle Gradient & Tag */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 55%, rgba(6, 26, 85, 0.88) 100%)',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '14px',
                left: '18px',
                right: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: '#FFFFFF',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.4px',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#00E5FF',
                    boxShadow: '0 0 10px #00E5FF',
                    display: 'inline-block',
                  }}
                />
                <span>Enterprise Data Architecture &amp; Autonomous AI Engineering</span>
              </div>
              <span
                style={{
                  background: 'rgba(255, 208, 40, 0.25)',
                  border: '1px solid rgba(255, 208, 40, 0.6)',
                  color: '#FFD028',
                  padding: '3px 10px',
                  borderRadius: '20px',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                AI Analytics
              </span>
            </div>
          </div>

          {/* 4 Quantitative Metric Counters (2x2 Grid) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.15rem',
            }}
          >
            {stats.slice(0, 4).map((stat, idx) => (
              <CounterItem
                key={idx}
                target={stat.target || stat.count || 50}
                suffix={stat.suffix || '+'}
                label={stat.label}
                context={stat.context}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-tc-learn-more:hover {
          background: linear-gradient(135deg, #FFB000 0%, #FFD028 100%) !important;
          transform: translateY(-2px);
          box-shadow: 0 14px 34px rgba(255, 208, 40, 0.55) !important;
        }
        .about-stat-counter-card:hover {
          background: rgba(255, 255, 255, 0.15) !important;
          border-color: #FFD028 !important;
          transform: translateY(-4px) !important;
          box-shadow: 0 16px 36px rgba(3, 18, 65, 0.45) !important;
        }
        .about-illustration-wrapper:hover {
          transform: translateY(-3px);
          box-shadow: 0 28px 68px rgba(2, 16, 56, 0.65), 0 0 0 1px rgba(255, 208, 40, 0.5) !important;
        }
        @media (max-width: 960px) {
          :global(.about-split-grid) {
            grid-template-columns: 1fr !important;
          }
          :global(.about-left-pane) {
            padding: 3.5rem 1.5rem !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.14);
          }
          :global(.about-right-pane) {
            padding: 3rem 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
