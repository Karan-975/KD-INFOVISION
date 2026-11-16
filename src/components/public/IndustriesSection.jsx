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
        background: 'radial-gradient(ellipse at center, #001a3a 0%, #01162e 40%, #000814 100%)',
        color: '#ffffff',
        padding: '7.5rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Dynamic background elements */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-15%',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(45, 212, 191, 0.12) 0%, rgba(0, 133, 89, 0.06) 40%, transparent 70%)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
          animation: 'pulseGlow 8s ease-in-out infinite',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-25%',
          left: '-20%',
          width: '900px',
          height: '900px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, rgba(14, 165, 233, 0.05) 45%, transparent 75%)',
          filter: 'blur(110px)',
          pointerEvents: 'none',
          animation: 'pulseGlow 10s ease-in-out infinite reverse',
        }}
      />

      {/* Geometric grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(45, 212, 191, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(45, 212, 191, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          opacity: 0.15,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <style jsx>{`
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
      `}</style>

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
            gap: '2rem',
          }}
          className="home-industry-grid"
        >
          {defaultSectors.map((ind, idx) => (
            <Link
              key={ind.id}
              href="/industries"
              className="industry-grid-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.25rem 2rem',
                borderRadius: '18px',
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(1, 30, 65, 0.4) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(45, 212, 191, 0.15)',
                textDecoration: 'none',
                color: '#ffffff',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
              }}
            >
              {/* Animated gradient overlay on hover */}
              <div
                className="industry-card-glow"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, #2DD4BF, #38BDF8, transparent)',
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                }}
              />

              <div style={{ position: 'relative', zIndex: 2 }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.5rem',
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '14px',
                      background: 'linear-gradient(135deg, rgba(45, 212, 191, 0.15) 0%, rgba(56, 189, 248, 0.1) 100%)',
                      border: '1px solid rgba(45, 212, 191, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 20px rgba(45, 212, 191, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.4s ease',
                    }}
                    className="industry-icon-wrap"
                  >
                    <img
                      src={ind.icon}
                      alt={ind.name}
                      style={{
                        maxWidth: '36px',
                        maxHeight: '36px',
                        filter: 'brightness(1.1) drop-shadow(0 2px 8px rgba(45, 212, 191, 0.4))',
                      }}
                    />
                  </div>

                  <span
                    style={{
                      fontSize: '10px',
                      fontWeight: 800,
                      letterSpacing: '1.2px',
                      color: '#2DD4BF',
                      background: 'rgba(45, 212, 191, 0.12)',
                      border: '1px solid rgba(45, 212, 191, 0.35)',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      textTransform: 'uppercase',
                      boxShadow: '0 2px 10px rgba(45, 212, 191, 0.15)',
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
        :global(.industry-grid-card::before) {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top right, rgba(45, 212, 191, 0.08) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        :global(.industry-grid-card:hover::before) {
          opacity: 1;
        }

        :global(.industry-grid-card:hover) {
          transform: translateY(-8px) scale(1.02);
          border-color: rgba(45, 212, 191, 0.6) !important;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(45, 212, 191, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(1, 30, 65, 0.5) 100%) !important;
        }

        :global(.industry-grid-card:hover .industry-card-glow) {
          opacity: 1;
        }

        :global(.industry-grid-card:hover .industry-icon-wrap) {
          transform: scale(1.1) rotate(3deg);
          background: linear-gradient(135deg, rgba(45, 212, 191, 0.25) 0%, rgba(56, 189, 248, 0.18) 100%);
          box-shadow: 0 6px 30px rgba(45, 212, 191, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }

        :global(.industry-grid-card:hover .ind-card-title) {
          color: #2DD4BF !important;
          text-shadow: 0 0 20px rgba(45, 212, 191, 0.3);
        }

        :global(.industry-grid-card:hover .card-explore-arrow) {
          color: #2DD4BF !important;
          transform: translateX(6px);
          text-shadow: 0 0 10px rgba(45, 212, 191, 0.4);
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
