'use client';

import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Award, Layers, Sparkles, MapPin } from 'lucide-react';

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
        padding: '1.75rem 1.5rem',
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
          fontSize: 'clamp(2.2rem, 2.8vw, 3rem)',
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
          fontSize: '0.825rem',
          fontWeight: 700,
          color: '#FFFFFF',
          textTransform: 'uppercase',
          letterSpacing: '0.6px',
          marginBottom: '0.25rem',
        }}
      >
        {label}
      </div>
      {context && (
        <div
          style={{
            fontSize: '0.725rem',
            color: 'rgba(255, 255, 255, 0.55)',
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
        {/* Left Story & Narrative */}
        <div
          style={{
            background: 'var(--navy-dark)',
            padding: '5.5rem 4.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            borderRight: '1px solid rgba(255, 255, 255, 0.06)',
          }}
          className="about-left-pane"
        >
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
            <span>WHO WE ARE &amp; OUR CAPABILITIES</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 3.2vw, 2.85rem)',
              color: '#FFFFFF',
              lineHeight: 1.16,
              marginBottom: '1.25rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
            }}
          >
            Engineering High-Performance <span style={{ color: 'var(--blue)' }}>Data &amp; AI</span> Architectures
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: 'rgba(255, 255, 255, 0.72)',
              marginBottom: '1.75rem',
              maxWidth: '560px',
            }}
          >
            KD Infovision is an Indian technology consulting and software engineering enterprise specializing in
            Data Analytics, Cloud Platforms, and Production AI. We bridge the gap between fragmented raw data systems
            and executive decision-making, designing secure, resilient architectures built for measurable enterprise scale.
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
            padding: '3.5rem',
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
            {/* Gradient Overlay & Badge */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 40%, rgba(5, 45, 93, 0.88) 100%)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '1.25rem 1.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FFFFFF' }}>
                <MapPin size={16} style={{ color: 'var(--blue)' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.5px' }}>
                  KD Infovision Delivery Pods • Bangalore &amp; Mumbai
                </span>
              </div>
            </div>
          </div>

          {/* 4 Stats Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
            }}
          >
            {stats.map((stat, i) => (
              <CounterItem
                key={i}
                target={stat.target}
                suffix={stat.suffix}
                label={stat.label}
                context={stat.context}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Engineering Standards Strip */}
      <div
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          background: 'rgba(5, 45, 93, 0.8)',
          padding: '1.25rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>
          <ShieldCheck size={18} style={{ color: 'var(--blue)' }} />
          <span><strong>Security by Design:</strong> SOC2 &amp; GDPR Compliant Pipeline Standards</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>
          <Award size={18} style={{ color: 'var(--blue)' }} />
          <span><strong>Certified Practitioners:</strong> AWS, Azure, Snowflake &amp; Databricks Credentials</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>
          <Layers size={18} style={{ color: 'var(--blue)' }} />
          <span><strong>Guaranteed SLA:</strong> 99.9% High Availability Production Support</span>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          :global(.about-split-grid) {
            grid-template-columns: 1fr !important;
          }
          :global(.about-left-pane) {
            padding: 4rem 2rem !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
          }
          :global(.about-right-pane) {
            padding: 3rem 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
