'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection({ testimonials = [] }) {
  const defaultList = [
    {
      quote:
        "Development & Automation of reports by KDI has helped us eliminate manual dependencies and expedite decision making. Now we can support better analytics, ad hoc search, scheduled reports, administration and improved UX. KDI & Saurabh's team has completely fulfill our expectations.",
      name: 'Dana Bailey',
      role: 'SVP - Analytics',
      company: 'Enterprise Financial Services',
      avatarInit: 'DB',
    },
    {
      quote:
        'KDI served our firm well in building MIS Dashboards & predictive models for targeting CRM efforts for our customers. Their client service, coupled with their ability to quickly absorb both business requirements and data complexities, was first rate. I highly recommend this team.',
      name: 'David Larsen',
      role: 'Head - IT',
      company: 'Customer CRM & Tech Solutions',
      avatarInit: 'DL',
    },
    {
      quote:
        'KDI Digital & Web Development team has helped our business reach the next level. Our product interface & admin governance implemented by KDI team is so easy to use, but is nevertheless more powerful than many other readymade products on the market. I recommend KDI for Mobile & Web Development.',
      name: 'Mary Wells',
      role: 'CEO',
      company: 'Ecommerce Global',
      avatarInit: 'MW',
    },
  ];

  const items = testimonials.length > 0 ? testimonials : defaultList;

  return (
    <section id="testimonials" style={{ background: '#FFFFFF' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 4rem auto' }}>
          <div className="sec-eye" style={{ justifyContent: 'center' }}>
            Customer Success Stories
          </div>
          <h2 className="sec-title">Your Feedback is Our Strength</h2>
          <p className="sec-sub">
            Real feedback from enterprise leaders who partner with KD Infovision to streamline data and accelerate digital growth.
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
