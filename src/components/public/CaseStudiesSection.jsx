'use client';

import React, { useState } from 'react';
import { ArrowRight, X, Sparkles, Building } from 'lucide-react';

export default function CaseStudiesSection({ caseStudies = [] }) {
  const [selectedCase, setSelectedCase] = useState(null);

  return (
    <section id="cases" style={{ background: '#FFFFFF' }}>
      <div className="container">
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '3.5rem',
            gap: '2rem',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div className="sec-eye">Transformation With Impact</div>
            <h2 className="sec-title" style={{ marginBottom: 0 }}>
              Results That Speak for Themselves
            </h2>
          </div>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontWeight: 700,
              color: 'var(--blue)',
              textDecoration: 'none',
            }}
          >
            Discuss Your Use Case <ArrowRight size={16} />
          </a>
        </div>

        {/* 2x2 Case Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
          }}
          className="cases-grid"
        >
          {caseStudies.map((item) => (
            <div
              key={item.id || item.title}
              className="tilt-card"
              style={{
                borderRadius: 'var(--radius-lg)',
                border: '1.5px solid var(--gray-200)',
                background: '#FFFFFF',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'var(--shadow-sm)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(61, 155, 233, 0.4)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--gray-200)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <div
                style={{
                  padding: '2rem',
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'flex-start',
                  flex: 1,
                }}
              >
                {/* Result Metric Badge */}
                <div
                  style={{
                    minWidth: '120px',
                    padding: '1.25rem 0.85rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'linear-gradient(145deg, var(--navy), var(--blue-mid))',
                    textAlign: 'center',
                    flexShrink: 0,
                    boxShadow: '0 8px 20px rgba(27, 58, 107, 0.2)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.85rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      lineHeight: 1,
                    }}
                  >
                    {item.resultNum}
                  </div>
                  <div
                    style={{
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      color: 'rgba(255, 255, 255, 0.75)',
                      marginTop: '6px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {item.resultLabel}
                  </div>
                </div>

                {/* Case Info */}
                <div style={{ flex: 1 }}>
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      background: 'var(--blue-light)',
                      color: 'var(--blue-mid)',
                      marginBottom: '0.65rem',
                    }}
                  >
                    {item.tag}
                  </span>
                  <h3
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 800,
                      color: 'var(--navy)',
                      lineHeight: 1.4,
                      marginBottom: '0.5rem',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.925rem', color: 'var(--muted)', lineHeight: 1.65 }}>
                    {item.summary}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div
                style={{
                  padding: '1rem 2rem',
                  borderTop: '1px solid var(--gray-100)',
                  background: 'var(--gray-50)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <button
                  onClick={() => setSelectedCase(item)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    color: 'var(--blue)',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  Read Full Case Story <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedCase && (
        <div className="modal-overlay" onClick={() => setSelectedCase(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div>
                <span
                  style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    background: 'var(--blue-light)',
                    color: 'var(--blue)',
                    display: 'inline-block',
                    marginBottom: '0.5rem',
                  }}
                >
                  {selectedCase.tag} CASE STUDY
                </span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--navy)', lineHeight: 1.3 }}>
                  {selectedCase.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCase(null)}
                style={{
                  background: 'var(--gray-100)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--muted)',
                }}
              >
                <X size={20} />
              </button>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                background: 'linear-gradient(135deg, var(--navy-dark), var(--navy))',
                color: '#FFFFFF',
                marginBottom: '1.5rem',
              }}
            >
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#5EC3F5' }}>{selectedCase.resultNum}</div>
              <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>
                {selectedCase.resultLabel} delivered in client engagement.
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '1.05rem', color: 'var(--navy)', marginBottom: '0.5rem' }}>Challenge & Approach</h4>
              <p style={{ fontSize: '0.975rem', color: 'var(--body)', lineHeight: 1.7 }}>
                {selectedCase.summary}
              </p>
            </div>

            {selectedCase.fullStory && (
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--navy)', marginBottom: '0.5rem' }}>Implementation Details</h4>
                <p style={{ fontSize: '0.975rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                  {selectedCase.fullStory}
                </p>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
              <button
                onClick={() => setSelectedCase(null)}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--gray-100)',
                  border: 'none',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setSelectedCase(null)}
                className="btn-primary"
                style={{ padding: '0.75rem 1.5rem' }}
              >
                Request Similar Solution
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 960px) {
          :global(.cases-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
