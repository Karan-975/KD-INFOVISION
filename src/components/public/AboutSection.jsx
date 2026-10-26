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
        border: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderRadius: '12px',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.35)',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        cursor: 'default',
      }}
    >
      <div
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 'clamp(2rem, 2.7vw, 2.85rem)',
          fontWeight: 800,
          background: 'linear-gradient(135deg, #2DD4BF 0%, #38BDF8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: 1,
          marginBottom: '0.45rem',
          letterSpacing: '-0.02em',
        }}
      >
        {count}
        <span style={{ color: '#FFFFFF', WebkitTextFillColor: '#FFFFFF', marginLeft: '2px' }}>{suffix}</span>
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
            color: 'rgba(255, 255, 255, 0.65)',
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
        background: '#01162e',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Subtle Emerald Gradient Glow (matching BCG / Case Studies multi-page palette) */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          left: '-10%',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 133, 89, 0.18) 0%, rgba(1, 30, 65, 0.1) 40%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
        }}
      />

      {/* Background Subtle Cyan/Teal Gradient Glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          right: '-10%',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, rgba(1, 30, 65, 0.08) 40%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
        }}
      />

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
            padding: '5.5rem 4.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 2,
          }}
          className="about-left-pane"
        >
          {/* Eyebrow Kicker */}
          <div
            style={{
              fontSize: '0.825rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: '#00A389',
              marginBottom: '0.85rem',
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            WHO WE ARE &amp; WHY WE SUCCEED
          </div>

          {/* Heading with BCG Emerald & Crisp White Gradient Accent */}
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
                background: 'linear-gradient(90deg, #FFFFFF 15%, #2DD4BF 60%, #00A389 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Success &amp; Triumph
            </span>
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: 'rgba(255, 255, 255, 0.92)',
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
              color: '#94A3B8',
              marginBottom: '2rem',
              maxWidth: '600px',
            }}
          >
            By delivering a full spectrum of advanced Data, BI, and AI services, we enable organizations to unlock the true value of their information. We transform raw data into actionable insights that accelerate decision-making, optimize operations, and achieve measurable business outcomes.
          </p>

          {/* 3 Clean Value Commitments (No Bubbly Capsules) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              marginBottom: '2.5rem',
            }}
          >
            {valuePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="about-value-pillar"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  color: '#E2E8F0',
                  fontSize: '0.93rem',
                  fontWeight: 600,
                  background: 'rgba(255, 255, 255, 0.03)',
                  padding: '11px 16px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  transition: 'all 0.25s ease',
                }}
              >
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    background: 'rgba(0, 163, 137, 0.15)',
                    border: '1px solid rgba(0, 163, 137, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <CheckCircle2 size={14} style={{ color: '#2DD4BF' }} />
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
                background: 'linear-gradient(93.05deg, #008559 0%, #00A389 100%)',
                padding: '14px 34px',
                borderRadius: '8px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                color: '#FFFFFF',
                fontSize: '15px',
                fontWeight: 700,
                fontFamily: "'Montserrat', sans-serif",
                textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(0, 133, 89, 0.3)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <span>Explore Our Story</span>
              <ArrowRight size={17} style={{ strokeWidth: 2.5 }} />
            </Link>
          </div>
        </div>

        {/* Right Pane: High-Resolution Consulting Photo + 4 Quantitative Metric Counters */}
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
          {/* Photorealistic Enterprise Consulting Architecture Showcase */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.25rem 0',
            }}
          >
            <div
              style={{
                width: '100%',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(0, 163, 137, 0.28)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.65)',
                background: '#021226',
              }}
            >
              <img
                src="/images/about_kd_consulting.jpg"
                alt="KD Infovision Enterprise Data Architecture, Cloud Lakehouse and AI Consulting"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '380px',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className="about-showcase-img"
              />
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
          background: linear-gradient(93.05deg, #00A389 0%, #008559 100%) !important;
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(0, 133, 89, 0.45) !important;
        }
        .about-stat-counter-card:hover {
          background: rgba(0, 163, 137, 0.08) !important;
          border-color: rgba(0, 163, 137, 0.4) !important;
          transform: translateY(-3px);
          box-shadow: 0 14px 35px rgba(0, 0, 0, 0.45) !important;
        }
        .about-value-pillar:hover {
          background: rgba(0, 163, 137, 0.08) !important;
          border-color: rgba(0, 163, 137, 0.35) !important;
          transform: translateX(4px);
        }
        .about-showcase-img:hover {
          transform: scale(1.03);
        }

        @media (max-width: 1024px) {
          .about-split-grid {
            grid-template-columns: 1fr !important;
          }
          .about-left-pane {
            padding: 4rem 2rem !important;
          }
          .about-right-pane {
            padding: 0 2rem 4rem 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
