'use client';

import React from 'react';
import { Search, Compass, Wrench, ShieldCheck } from 'lucide-react';

const processIcons = {
  Search,
  Compass,
  Wrench,
  ShieldCheck,
};

export default function ProcessSection({ processSteps = [] }) {
  const steps = processSteps.length
    ? processSteps
    : [
        {
          stepNum: '01',
          title: 'Discover',
          description: 'Deep-dive workshops to map your data landscape, business goals, and current challenges. We listen before we build.',
          icon: 'Search',
        },
        {
          stepNum: '02',
          title: 'Design',
          description: 'Solution architecture, technology selection, and a clear roadmap with milestones and success metrics.',
          icon: 'Compass',
        },
        {
          stepNum: '03',
          title: 'Build & Deliver',
          description: 'Agile sprints, regular demos, transparent progress. On-time and to spec — without compromise.',
          icon: 'Wrench',
        },
        {
          stepNum: '04',
          title: 'Support & Scale',
          description: 'Post-launch managed services, continuous optimization, and a long-term partnership for sustained growth.',
          icon: 'ShieldCheck',
        },
      ];

  return (
    <section id="process" style={{ background: 'var(--gray-50)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 4rem auto' }}>
          <div className="sec-eye" style={{ justifyContent: 'center' }}>
            How We Work
          </div>
          <h2 className="sec-title">From Discovery to Delivery</h2>
          <p className="sec-sub">
            A proven engagement model built around your business outcomes — not just deliverables.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            borderRadius: 'var(--radius-lg)',
            border: '1.5px solid var(--gray-200)',
            overflow: 'hidden',
            background: '#FFFFFF',
            boxShadow: 'var(--shadow-sm)',
          }}
          className="process-grid"
        >
          {steps.map((step, idx) => {
            const IconComp = processIcons[step.icon] || Search;
            return (
              <div
                key={idx}
                style={{
                  padding: '2.75rem 2rem',
                  borderRight: idx < steps.length - 1 ? '1px solid var(--gray-200)' : 'none',
                  background: '#FFFFFF',
                  transition: 'background 0.3s ease',
                  position: 'relative',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--blue-light)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#FFFFFF')}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2.75rem',
                    fontWeight: 800,
                    color: 'var(--gray-300)',
                    lineHeight: 1,
                    marginBottom: '1.5rem',
                  }}
                >
                  {step.stepNum}
                </div>

                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'var(--blue-light)',
                    border: '1px solid rgba(61, 155, 233, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--blue)',
                    marginBottom: '1.25rem',
                  }}
                >
                  <IconComp size={24} />
                </div>

                <h3
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    color: 'var(--navy)',
                    marginBottom: '0.65rem',
                  }}
                >
                  {step.title}
                </h3>

                <p style={{ fontSize: '0.925rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          :global(.process-grid) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          :global(.process-grid > div:nth-child(2)) {
            border-right: none !important;
          }
          :global(.process-grid > div:nth-child(1)),
          :global(.process-grid > div:nth-child(2)) {
            border-bottom: 1px solid var(--gray-200) !important;
          }
        }
        @media (max-width: 600px) {
          :global(.process-grid) {
            grid-template-columns: 1fr !important;
          }
          :global(.process-grid > div) {
            border-right: none !important;
            border-bottom: 1px solid var(--gray-200) !important;
          }
          :global(.process-grid > div:last-child) {
            border-bottom: none !important;
          }
        }
      `}</style>
    </section>
  );
}
