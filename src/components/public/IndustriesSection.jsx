'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
        background: '#01162e',
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
          top: '-15%',
          right: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(45, 212, 191, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
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
                fontSize: '12px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: '#2DD4BF',
                marginBottom: '0.85rem',
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              PROVEN CROSS-SECTOR EXPERTISE
            </div>
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 'clamp(2.1rem, 3.4vw, 2.9rem)',
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
                  background: 'linear-gradient(135deg, #2DD4BF 0%, #38BDF8 100%)',
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
              background: 'linear-gradient(93.05deg, #008559 0%, #00A389 100%)',
              color: '#ffffff',
              padding: '12px 28px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              fontFamily: "'Montserrat', sans-serif",
              boxShadow: '0 4px 15px rgba(0, 133, 89, 0.35)',
            }}
          >
            <span>Explore All Verticals</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* 6-Card Distinct Industry Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.75rem',
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
                padding: '2rem 1.85rem',
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.035)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                textDecoration: 'none',
                color: '#ffffff',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
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
                      width: '50px',
                      height: '50px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <img
                      src={ind.icon}
                      alt={ind.name}
                      style={{
                        maxWidth: '34px',
                        maxHeight: '34px',
                        filter: 'drop-shadow(0 2px 6px rgba(45, 212, 191, 0.3))',
                      }}
                    />
                  </div>

                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      color: '#2DD4BF',
                      background: 'rgba(45, 212, 191, 0.1)',
                      border: '1px solid rgba(45, 212, 191, 0.25)',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {ind.eyebrow}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.65rem',
                    lineHeight: 1.35,
                    transition: 'color 0.2s ease',
                  }}
                  className="ind-card-title"
                >
                  {ind.name}
                </h3>

                <p
                  style={{
                    fontSize: '0.92rem',
                    lineHeight: 1.65,
                    color: 'rgba(255, 255, 255, 0.7)',
                    marginBottom: '1.5rem',
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
                    color: '#38BDF8',
                    background: 'rgba(56, 189, 248, 0.1)',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                  }}
                >
                  {ind.kpi}
                </span>

                <span
                  className="card-explore-arrow"
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)',
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
          border-color: rgba(45, 212, 191, 0.45) !important;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5);
          background: rgba(255, 255, 255, 0.055) !important;
        }

        :global(.industry-grid-card:hover .ind-card-title) {
          color: #2DD4BF !important;
        }

        :global(.industry-grid-card:hover .card-explore-arrow) {
          color: #2DD4BF !important;
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
