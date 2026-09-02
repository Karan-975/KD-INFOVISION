'use client';

import React from 'react';
import { Database, Sparkles, Cpu, Layers, BarChart, ArrowUpRight } from 'lucide-react';

export default function WhyUsSection() {
  const pillars = [
    {
      icon: Database,
      title: 'Data-Driven Decisions',
      desc: 'Transform fragmented data into executive-ready intelligence. Real-time dashboards, KPI tracking, and BI platforms built around your exact business questions.',
      tag: 'Analytics & BI',
    },
    {
      icon: Sparkles,
      title: 'AI-Powered Solutions',
      desc: 'Predictive models, NLP, GenAI, and computer vision — intelligent systems that learn from your data and scale with your business goals.',
      tag: 'Machine Learning',
    },
    {
      icon: Layers,
      title: 'Digital Transformation',
      desc: 'End-to-end modernization: cloud migration, ERP implementation, process automation, and scalable platform development — all under one roof.',
      tag: 'Cloud & Platforms',
    },
  ];

  return (
    <section id="why" style={{ background: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 4rem auto' }}>
          <div className="sec-eye" style={{ justifyContent: 'center' }}>
            Why KD Infovision
          </div>
          <h2 className="sec-title">Intelligence That Drives Real Business Outcomes</h2>
          <p className="sec-sub">
            We don&apos;t just build dashboards — we build competitive advantage. Every engagement is designed around
            measurable impact.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
          }}
          className="why-grid"
        >
          {pillars.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="tilt-card"
                style={{
                  padding: '3rem 2.25rem',
                  borderRadius: 'var(--radius-lg)',
                  border: '1.5px solid var(--gray-200)',
                  background: '#FFFFFF',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(61, 155, 233, 0.4)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--gray-200)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                {/* Glowing Top Line */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'linear-gradient(90deg, #1B3A6B, #3D9BE9)',
                  }}
                />

                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '16px',
                    background: 'var(--blue-light)',
                    border: '1.5px solid rgba(61, 155, 233, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--blue)',
                  }}
                >
                  <IconComp size={28} />
                </div>

                <div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--blue)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                    }}
                  >
                    {item.tag}
                  </span>
                  <h3
                    style={{
                      fontSize: '1.35rem',
                      fontWeight: 800,
                      color: 'var(--navy)',
                      marginTop: '0.35rem',
                    }}
                  >
                    {item.title}
                  </h3>
                </div>

                <p style={{ fontSize: '0.975rem', color: 'var(--muted)', lineHeight: 1.75 }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          :global(.why-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
