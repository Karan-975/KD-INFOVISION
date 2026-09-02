'use client';

import React, { useState } from 'react';
import { ArrowRight, X, BookOpen, Calendar, Sparkles } from 'lucide-react';

export default function InsightsSection({ insights = [] }) {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const featured = insights.find((i) => i.isFeatured) || insights[0];
  const trending = insights.filter((i) => !i.isFeatured || i.id !== featured?.id);

  return (
    <section id="insights" style={{ background: 'var(--gray-50)' }}>
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
            <div className="sec-eye">Insights & Trends</div>
            <h2 className="sec-title" style={{ marginBottom: 0 }}>
              Stay Ahead of the Curve
            </h2>
          </div>
          <p className="sec-sub" style={{ maxWidth: '380px' }}>
            Latest thinking, technical playbooks, and strategic analysis from our team of AI and data engineers.
          </p>
        </div>

        {/* 2-Column Grid: Featured Left, Trending Right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.25fr 1fr',
            gap: '2.5rem',
          }}
          className="insights-grid"
        >
          {/* Featured Article Card */}
          {featured && (
            <div
              className="tilt-card"
              style={{
                borderRadius: 'var(--radius-lg)',
                border: '1.5px solid var(--gray-200)',
                background: '#FFFFFF',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(61, 155, 233, 0.4)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--gray-200)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              {/* Graphic Banner */}
              <div
                style={{
                  height: '240px',
                  background: 'linear-gradient(135deg, var(--navy-dark) 0%, var(--blue-mid) 100%)',
                  position: 'relative',
                  padding: '1.75rem',
                  display: 'flex',
                  alignItems: 'flex-end',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1.5px, transparent 1.5px)',
                    backgroundSize: '24px 24px',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '1.5rem',
                    left: '1.5rem',
                    padding: '6px 14px',
                    borderRadius: '6px',
                    background: 'var(--blue)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                  }}
                >
                  {featured.category || 'Featured Blog'}
                </span>
                <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.875rem' }}>
                  <Calendar size={16} />
                  <span>{featured.dateLabel || 'August 2026'}</span>
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: '2.25rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3
                  style={{
                    fontSize: '1.45rem',
                    fontWeight: 800,
                    color: 'var(--navy)',
                    lineHeight: 1.35,
                  }}
                >
                  {featured.title}
                </h3>
                <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.75, flex: 1 }}>
                  {featured.summary}
                </p>
                <div>
                  <button
                    onClick={() => setSelectedArticle(featured)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: 'var(--blue)',
                      cursor: 'pointer',
                      padding: 0,
                    }}
                  >
                    Read Full Article <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Trending Articles List */}
          <div
            style={{
              borderRadius: 'var(--radius-lg)',
              border: '1.5px solid var(--gray-200)',
              background: '#FFFFFF',
              padding: '2.25rem',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                fontWeight: 800,
                color: 'var(--navy)',
                marginBottom: '1.75rem',
                paddingBottom: '1rem',
                borderBottom: '2.5px solid var(--navy)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Sparkles size={20} color="var(--blue)" />
              Trending on KD Infovision
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {trending.map((item, idx) => (
                <div
                  key={item.id || idx}
                  onClick={() => setSelectedArticle(item)}
                  style={{
                    display: 'flex',
                    gap: '1.25rem',
                    alignItems: 'flex-start',
                    padding: '1.25rem 0',
                    borderBottom: idx < trending.length - 1 ? '1px solid var(--gray-100)' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    const title = e.currentTarget.querySelector('.trend-item-title');
                    if (title) title.style.color = 'var(--blue)';
                  }}
                  onMouseLeave={(e) => {
                    const title = e.currentTarget.querySelector('.trend-item-title');
                    if (title) title.style.color = 'var(--navy)';
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.6rem',
                      fontWeight: 800,
                      color: 'var(--gray-300)',
                      lineHeight: 1,
                      flexShrink: 0,
                    }}
                  >
                    {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </div>
                  <div>
                    <h4
                      className="trend-item-title"
                      style={{
                        fontSize: '1.025rem',
                        fontWeight: 700,
                        color: 'var(--navy)',
                        lineHeight: 1.45,
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {item.title}
                    </h4>
                    <div style={{ display: 'flex', gap: '12px', fontSize: '0.8rem', color: 'var(--muted)', marginTop: '6px' }}>
                      <span>{item.dateLabel || '2026'}</span>
                      <span>•</span>
                      <span style={{ color: 'var(--blue)', fontWeight: 600 }}>{item.category || 'Article'}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Full Article Reader Modal */}
      {selectedArticle && (
        <div className="modal-overlay" onClick={() => setSelectedArticle(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '2.5rem', maxWidth: '680px' }}>
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
                  {selectedArticle.category || 'ARTICLE'} • {selectedArticle.dateLabel || 'August 2026'}
                </span>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--navy)', lineHeight: 1.3 }}>
                  {selectedArticle.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
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

            <p style={{ fontSize: '1.1rem', color: 'var(--navy)', fontWeight: 600, lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {selectedArticle.summary}
            </p>

            <div
              style={{
                fontSize: '1rem',
                color: 'var(--body)',
                lineHeight: 1.8,
                marginBottom: '2rem',
                borderTop: '1px solid var(--gray-200)',
                paddingTop: '1.5rem',
              }}
            >
              {selectedArticle.content ||
                'To learn more about implementing this strategy in your enterprise, connect with our technology architects for a tailored consultation and architectural review.'}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
              <button
                onClick={() => setSelectedArticle(null)}
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
                onClick={() => setSelectedArticle(null)}
                className="btn-primary"
                style={{ padding: '0.75rem 1.5rem' }}
              >
                Consult Our Experts
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 960px) {
          :global(.insights-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
