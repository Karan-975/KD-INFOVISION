'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection({ testimonials = [] }) {
  const defaultList = [
    {
      quote:
        'KD Infovision transformed how we use data. Their Power BI dashboards reduced our reporting time by 60% and gave leadership real-time visibility for the first time.',
      name: 'Rajesh Kumar',
      role: 'Head of Operations',
      company: 'Manufacturing Co.',
      avatarInit: 'RK',
    },
    {
      quote:
        'Their AI churn model helped us retain 30% more clients. Deep BFSI domain understanding made the difference — they spoke our language from day one.',
      name: 'Priya Sharma',
      role: 'VP Analytics',
      company: 'Financial Services Firm',
      avatarInit: 'PS',
    },
    {
      quote:
        'From discovery to go-live in 8 weeks. Fast, scalable, easy to manage. Quality and communication throughout were truly exceptional. A trusted partner.',
      name: 'Anil Mehta',
      role: 'CTO',
      company: 'E-commerce Startup',
      avatarInit: 'AM',
    },
  ];

  const items = testimonials.length > 0 ? testimonials : defaultList;

  return (
    <section id="testimonials" style={{ background: '#FFFFFF' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 4rem auto' }}>
          <div className="sec-eye" style={{ justifyContent: 'center' }}>
            Client Stories
          </div>
          <h2 className="sec-title">What Our Clients Say</h2>
          <p className="sec-sub">
            Real reviews from enterprise leaders who modernized their data stack and AI operations with us.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
          }}
          className="testi-grid"
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className="tilt-card"
              style={{
                padding: '2.5rem 2rem',
                borderRadius: 'var(--radius-lg)',
                background: 'var(--gray-50)',
                border: '1.5px solid var(--gray-200)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                boxShadow: 'var(--shadow-sm)',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#FFFFFF';
                e.currentTarget.style.borderColor = 'rgba(61, 155, 233, 0.4)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--gray-50)';
                e.currentTarget.style.borderColor = 'var(--gray-200)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: '4px', color: '#F59E0B' }}>
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={18} fill="#F59E0B" />
                ))}
              </div>

              {/* Quote text */}
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  color: 'var(--body)',
                  fontStyle: 'italic',
                  flex: 1,
                }}
              >
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Author */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--gray-200)',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--navy), var(--blue))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    flexShrink: 0,
                  }}
                >
                  {item.avatarInit || item.name?.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--navy)' }}>{item.name}</div>
                  <div style={{ fontSize: '0.825rem', color: 'var(--muted)', marginTop: '2px' }}>
                    {item.role} {item.company && `• ${item.company}`}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          :global(.testi-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
