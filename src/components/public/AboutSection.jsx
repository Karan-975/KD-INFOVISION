'use client';

import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

function CounterItem({ target, suffix, label }) {
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
        padding: '2.5rem 2rem',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: 'rgba(255, 255, 255, 0.02)',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(61, 155, 233, 0.08)')}
      onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)')}
    >
      <div
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2.5rem, 3.5vw, 3.75rem)',
          fontWeight: 800,
          color: '#FFFFFF',
          lineHeight: 1,
          marginBottom: '0.5rem',
        }}
      >
        {count}
        <span style={{ color: 'var(--blue)' }}>{suffix}</span>
      </div>
      <div
        style={{
          fontSize: '0.825rem',
          fontWeight: 600,
          color: 'rgba(255, 255, 255, 0.55)',
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function AboutSection({ statCounters = [] }) {
  const stats = statCounters.length
    ? statCounters
    : [
        { target: 50, suffix: '+', label: 'Projects Delivered' },
        { target: 25, suffix: '+', label: 'Enterprise Clients' },
        { target: 8, suffix: '+', label: 'Industries Served' },
        { target: 100, suffix: '%', label: 'Outcome Focused' },
      ];

  return (
    <section id="about" style={{ padding: 0, background: 'var(--navy-dark)' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.05fr 0.95fr',
          minHeight: '480px',
        }}
        className="about-split-grid"
      >
        {/* Left Story */}
        <div
          style={{
            background: 'var(--navy-dark)',
            padding: '5.5rem 4rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            borderRight: '1px solid rgba(255, 255, 255, 0.06)',
          }}
          className="about-left-pane"
        >
          <div className="sec-eye" style={{ color: 'var(--blue)' }}>
            Our Story
          </div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 3vw, 2.75rem)',
              color: '#FFFFFF',
              lineHeight: 1.18,
              marginBottom: '1.25rem',
            }}
          >
            We Are the Experts Behind Your Digital Journey
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: 'rgba(255, 255, 255, 0.65)',
              marginBottom: '2rem',
              maxWidth: '540px',
            }}
          >
            KD Infovision is an Indian technology consulting and software services company specializing in Data Analytics,
            AI, and Business Intelligence. We empower organizations to transform data into actionable insights, build intelligent
            solutions, and develop scalable digital platforms.
          </p>

          <div>
            <a
              href="#solutions"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.95rem',
                fontWeight: 700,
                color: 'var(--blue)',
                textDecoration: 'none',
                transition: 'gap 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.gap = '14px')}
              onMouseLeave={(e) => (e.currentTarget.style.gap = '8px')}
            >
              Explore Solutions & Services
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Right Stats Grid */}
        <div
          style={{
            background: 'var(--navy)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
          }}
          className="about-right-grid"
        >
          {stats.map((stat, i) => (
            <CounterItem key={i} target={stat.target} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          :global(.about-split-grid) {
            grid-template-columns: 1fr !important;
          }
          :global(.about-left-pane) {
            padding: 4rem 1.5rem !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
          }
          :global(.about-right-grid) {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          :global(.about-right-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
