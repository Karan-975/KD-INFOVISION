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
        boxShadow: '0 8px 30px rgba(5, 25, 80, 0.18)',
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
        background: 'linear-gradient(135deg, #227CEE 0%, #1F5ECD 45%, #1B45B3 100%)',
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
          background: 'radial-gradient(circle, rgba(0, 229, 255, 0.18) 0%, transparent 65%)',
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
          background: 'radial-gradient(circle, rgba(255, 208, 40, 0.12) 0%, transparent 65%)',
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
            padding: '5rem 4.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 2,
          }}
          className="about-left-pane"
        >
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

        {/* Right Pane: Seamless 3D Isometric Data Analytics Visual + 4 Quantitative Metric Counters */}
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
          {/* Seamless 3D Analytics & AI Artwork: No border, No card frame, Seamlessly blended into background */}
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
            <img
              src="/images/about_analytics_seamless.png"
              alt="KD Infovision Modern Data Architecture, Cloud Lakehouse and AI Analytics"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '380px',
                objectFit: 'contain',
                display: 'block',
                filter: 'drop-shadow(0 20px 45px rgba(5, 20, 65, 0.32))',
              }}
            />
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
        @media (max-width: 960px) {
          :global(.about-split-grid) {
            grid-template-columns: 1fr !important;
          }
          :global(.about-left-pane) {
            padding: 3.5rem 1.5rem !important;
          }
          :global(.about-right-pane) {
            padding: 2.5rem 1.5rem 3.5rem 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
