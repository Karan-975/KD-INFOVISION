'use client';

import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

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
      style={{
        padding: '1.5rem 1.25rem',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: 'rgba(255, 255, 255, 0.025)',
        borderRadius: '12px',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(21, 138, 226, 0.1)';
        e.currentTarget.style.borderColor = 'rgba(21, 138, 226, 0.35)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.025)';
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2rem, 2.6vw, 2.75rem)',
          fontWeight: 800,
          color: '#FFFFFF',
          lineHeight: 1,
          marginBottom: '0.4rem',
          letterSpacing: '-0.02em',
        }}
      >
        {count}
        <span style={{ color: 'var(--blue)' }}>{suffix}</span>
      </div>
      <div
        style={{
          fontSize: '0.8rem',
          fontWeight: 700,
          color: '#FFFFFF',
          textTransform: 'uppercase',
          letterSpacing: '0.6px',
          marginBottom: '0.2rem',
        }}
      >
        {label}
      </div>
      {context && (
        <div
          style={{
            fontSize: '0.725rem',
            color: 'rgba(255, 255, 255, 0.6)',
            lineHeight: 1.35,
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
            ? 'Production Cloud & AI Deployments'
            : idx === 1
            ? 'BFSI, Logistics & Tech Enterprises'
            : idx === 2
            ? 'Vertical Specializations'
            : 'SLA Reliability & Architecture Ownership',
      }))
    : [
        { target: 50, suffix: '+', label: 'Projects Delivered', context: 'Production Cloud & AI Deployments' },
        { target: 25, suffix: '+', label: 'Enterprise Clients', context: 'BFSI, Logistics & Tech Enterprises' },
        { target: 8, suffix: '+', label: 'Industries Served', context: 'Cross-Sector Domain Expertise' },
        { target: 100, suffix: '%', label: 'Architecture Ownership', context: 'Client IP with Zero Vendor Lock-in' },
      ];

  const valuePillars = [
    'Zero Vendor Lock-in (100% Client-Owned Code & IP)',
    'Enterprise Governance & SOC2-Ready Compliance',
    'Full-Cycle Engineering: Ingestion to MLOps & BI',
  ];

  return (
    <section id="about" style={{ padding: 0, background: 'var(--navy-dark)' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.05fr 0.95fr',
          minHeight: '560px',
        }}
        className="about-split-grid"
      >
        {/* Left Story & Narrative: Team Computers-inspired concise layout */}
        <div
          style={{
            background: 'var(--navy-dark)',
            padding: '5rem 4.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            borderRight: '1px solid rgba(255, 255, 255, 0.06)',
          }}
          className="about-left-pane"
        >
          {/* Kicker */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1.2px',
              color: 'var(--blue)',
              marginBottom: '1rem',
            }}
          >
            <Sparkles size={14} />
            <span>OUR STORY • ABOUT US</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 3vw, 2.75rem)',
              color: '#FFFFFF',
              lineHeight: 1.18,
              marginBottom: '1.25rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
            }}
          >
            Transforming Ideas into Action with <span style={{ color: 'var(--blue)' }}>End-to-End IT</span> &amp; Analytics Solutions
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.75,
              color: 'rgba(255, 255, 255, 0.75)',
              marginBottom: '1.75rem',
              maxWidth: '560px',
            }}
          >
            We are the technology architects behind your digital journey. Over the years, we have become more than a service provider—we are a trusted partner in enterprise digital transformation, engineering scalable cloud lakehouses, production AI systems, and robust software that turn complex challenges into quantifiable business growth.
          </p>

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
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '0.925rem',
                  fontWeight: 500,
                }}
              >
                <CheckCircle2 size={18} style={{ color: 'var(--blue)', flexShrink: 0 }} />
                <span>{pillar}</span>
              </div>
            ))}
          </div>

          <div>
            <a
              href="#solutions"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.95rem',
                fontWeight: 700,
                color: '#FFFFFF',
                background: 'var(--blue)',
                padding: '0.85rem 1.6rem',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0E70BA';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--blue)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Explore Solutions &amp; Practices
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Right Pane: Team Photography Visual + 4 Metric Counters */}
        <div
          style={{
            background: 'var(--navy)',
            padding: '4rem 3.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '2rem',
          }}
          className="about-right-pane"
        >
          {/* Authentic Engineering Team Collaboration Visual */}
          <div
            style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              aspectRatio: '16 / 9',
            }}
          >
            <img
              src="/images/about_enterprise_team.jpg"
              alt="KD Infovision Cloud and Data Engineering Architects"
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
                background: 'linear-gradient(180deg, transparent 40%, rgba(5, 45, 93, 0.85) 100%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '12px',
                left: '16px',
                color: '#FFFFFF',
                fontSize: '0.775rem',
                fontWeight: 600,
                letterSpacing: '0.4px',
              }}
            >
              Enterprise Engineering Leadership &amp; Solution Architecture Practice
            </div>
          </div>

          {/* 4 Quantitative Metric Counters (2x2 Grid) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem',
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
        @media (max-width: 960px) {
          :global(.about-split-grid) {
            grid-template-columns: 1fr !important;
          }
          :global(.about-left-pane) {
            padding: 3rem 1.5rem !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          }
          :global(.about-right-pane) {
            padding: 3rem 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
