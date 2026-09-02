'use client';

import React from 'react';
import {
  Landmark,
  Factory,
  HeartPulse,
  ShoppingBag,
  ShoppingCart,
  GraduationCap,
  Truck,
  Building2,
  Rocket,
  ArrowRight,
} from 'lucide-react';

const industryIconMap = {
  Landmark,
  Factory,
  HeartPulse,
  ShoppingBag,
  ShoppingCart,
  GraduationCap,
  Truck,
  Building2,
  Rocket,
};

export default function IndustriesSection({ industries = [] }) {
  return (
    <section id="industry" style={{ background: 'var(--navy-dark)', color: '#FFFFFF' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 4rem auto' }}>
          <div className="sec-eye" style={{ color: 'var(--blue)', justifyContent: 'center' }}>
            Solutions Across Sectors
          </div>
          <h2 className="sec-title" style={{ color: '#FFFFFF' }}>
            Industry Reach
          </h2>
          <p className="sec-sub" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
            Deep domain expertise tailored to meet regulatory, operational, and customer demands in every major vertical.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.25rem',
          }}
          className="industries-grid"
        >
          {industries.map((ind) => {
            const IconComp = industryIconMap[ind.icon] || Building2;
            return (
              <div
                key={ind.id || ind.title}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.25rem',
                  padding: '1.75rem 1.5rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(61, 155, 233, 0.12)';
                  e.currentTarget.style.borderColor = 'rgba(61, 155, 233, 0.35)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(61, 155, 233, 0.15)',
                    border: '1px solid rgba(61, 155, 233, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--blue-cyan)',
                    flexShrink: 0,
                  }}
                >
                  <IconComp size={24} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {ind.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      lineHeight: 1.6,
                      color: 'rgba(255, 255, 255, 0.55)',
                    }}
                  >
                    {ind.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          :global(.industries-grid) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          :global(.industries-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
