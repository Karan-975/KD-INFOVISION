'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, ShieldCheck } from 'lucide-react';

export default function IndustriesSection({ industries = [] }) {
  const defaultSectors = [
    {
      id: 'bfsi',
      name: 'BFSI & FinTech',
      eyebrow: 'FINANCIAL SERVICES',
      desc: 'Real-time Kafka fraud detection, ledger lakehouses, and full RBI & SOC 2 regulatory compliance.',
      kpi: '85ms SLA | $4.2M Fraud Prevented',
      icon: '/images/industry/Anti-Money-Laundering.svg',
      link: '/industries',
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing & Smart OT',
      eyebrow: 'INDUSTRY 4.0',
      desc: 'Shop-floor IIoT telemetry, digital twins, and ML predictive vibration maintenance engines.',
      kpi: '+24% OEE | Zero Downtime',
      icon: '/images/industry/MANUFACTURING.svg',
      link: '/industries',
    },
    {
      id: 'healthcare',
      name: 'Healthcare & Life Sciences',
      eyebrow: 'CLINICAL INTELLIGENCE',
      desc: 'HIPAA-compliant sovereign RAG, automated diagnostic report parsing, and FHIR data lakes.',
      kpi: '85% Faster Review | 99.4% Citation',
      icon: '/images/industry/Secure-Edge-Computing.svg',
      link: '/industries',
    },
    {
      id: 'retail',
      name: 'Retail & E-Commerce',
      eyebrow: 'OMNICHANNEL 360',
      desc: 'Unified customer semantic layers, predictive replenishment schedules across 200+ DCs.',
      kpi: '-34% Stockouts | +22% GMV Turnover',
      icon: '/images/industry/Real-Time-Analytics.svg',
      link: '/industries',
    },
    {
      id: 'logistics',
      name: 'Logistics & Supply Chain',
      eyebrow: 'FLEET TELEMETRY',
      desc: 'Cold-chain IoT sensor streams, sub-minute route cockpits, and multi-modal transit intelligence.',
      kpi: '99.98% SLA | -40% Route Delay',
      icon: '/images/industry/IoT-for-Smart-Manufacturing.svg',
      link: '/industries',
    },
    {
      id: 'cloud-gcc',
      name: 'Cloud & High-Tech GCCs',
      eyebrow: 'ENTERPRISE TECH',
      desc: 'Petabyte legacy warehouse migration, FinOps cloud spend governance, and multi-agent AI copilots.',
      kpi: '-55% Cloud Spend | 90% BI Automation',
      icon: '/images/industry/High-Availability-Data-Centers.svg',
      link: '/industries',
    },
  ];

  return (
    <section
      id="industry"
      style={{
        background: '#0E081D',
        color: '#ffffff',
        padding: '6.5rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow decoration */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(207, 163, 255, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header matching Team Computers aesthetics */}
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
          <div style={{ maxWidth: '720px' }}>
            <div
              style={{
                fontSize: '13px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                color: '#fffa65',
                marginBottom: '0.75rem',
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              PROVEN CROSS-SECTOR EXPERTISE
            </div>
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 'clamp(2.2rem, 3.5vw, 3rem)',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              Industry Domain Reach.{' '}
              <span
                style={{
                  background: 'linear-gradient(259.44deg, #CFA3FF 25.03%, #EE7AE2 90.57%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Engineered Precision.
              </span>
            </h2>
          </div>

          <Link
            href="/industries"
            className="home-industry-cta-btn"
            style={{
              background: 'linear-gradient(93.05deg, #1EC9F2 -14.26%, #0DB16A 85.74%)',
              color: '#ffffff',
              padding: '12px 30px',
              borderRadius: '40px',
              fontSize: '14px',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              fontFamily: "'Montserrat', sans-serif",
              boxShadow: '0 4px 15px rgba(30, 201, 242, 0.2)',
            }}
          >
            <span>Explore All Verticals</span>
            <img src="/images/learn-more-arrow.svg" alt="arrow" style={{ width: '14px' }} />
          </Link>
        </div>

        {/* 6-Card Distinct Industry Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}
          className="home-industry-grid"
        >
          {defaultSectors.map((ind) => (
            <Link
              key={ind.id}
              href="/industries"
              className="industry-grid-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.2rem 2rem',
                borderRadius: '32px',
                background: '#140d2a',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                textDecoration: 'none',
                color: '#ffffff',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem',
                  }}
                >
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '16px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <img
                      src={ind.icon}
                      alt={ind.name}
                      style={{
                        maxWidth: '38px',
                        maxHeight: '38px',
                        filter: 'drop-shadow(0 2px 8px rgba(0, 200, 255, 0.25))',
                      }}
                    />
                  </div>

                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      color: '#fffa65',
                      background: 'rgba(255, 250, 101, 0.1)',
                      border: '1px solid rgba(255, 250, 101, 0.25)',
                      padding: '4px 10px',
                      borderRadius: '12px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {ind.eyebrow}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.65rem',
                    lineHeight: 1.3,
                  }}
                >
                  {ind.name}
                </h3>

                <p
                  style={{
                    fontSize: '0.92rem',
                    lineHeight: 1.65,
                    color: 'rgba(255, 255, 255, 0.65)',
                    marginBottom: '1.75rem',
                  }}
                >
                  {ind.desc}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#00F7FF',
                    background: 'rgba(0, 200, 255, 0.1)',
                    padding: '4px 10px',
                    borderRadius: '10px',
                    border: '1px solid rgba(0, 200, 255, 0.2)',
                  }}
                >
                  {ind.kpi}
                </span>

                <span
                  className="card-explore-arrow"
                  style={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '12px',
                    fontWeight: 600,
                    transition: 'all 0.2s ease',
                  }}
                >
                  <span>Explore</span>
                  <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        :global(.industry-grid-card:hover) {
          transform: translateY(-6px);
          border-color: rgba(0, 200, 255, 0.4) !important;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45);
        }

        :global(.industry-grid-card:hover .card-explore-arrow) {
          color: #fffa65 !important;
          transform: translateX(4px);
        }

        @media (max-width: 1024px) {
          :global(.home-industry-grid) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 640px) {
          :global(.home-industry-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
