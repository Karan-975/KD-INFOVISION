'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function IndustriesSection({ industries = [] }) {
  // 6 Core Sectors mapped to Vani HQ Card Design & Colors
  const defaultSectors = [
    // Row 1: Cards 0, 1, 2
    {
      id: 'bfsi',
      name: 'BFSI & FinTech',
      desc: 'Real-time Kafka fraud detection, ledger lakehouses, and full RBI & SOC 2 regulatory compliance.',
      kpi: '85ms SLA | $4.2M Fraud Prevented',
      link: '/industries',
      bgColor: '#C7B4FF', // Lavender / Soft Violet
      textColor: '#1E1638',
      descColor: 'rgba(30, 22, 56, 0.82)',
      kpiBg: 'rgba(30, 22, 56, 0.08)',
      btnBg: 'rgba(30, 22, 56, 0.12)',
      hasGrid: false,
      watermarkSvg: (
        <svg width="220" height="220" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <line x1="10" y1="9" x2="8" y2="9"></line>
        </svg>
      ),
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing & Smart OT',
      desc: 'Shop-floor IIoT telemetry, digital twins, and ML predictive vibration maintenance engines.',
      kpi: '+24% OEE | Zero Downtime',
      link: '/industries',
      bgColor: '#F3AC9E', // Coral / Peach Salmon
      textColor: '#2E140C',
      descColor: 'rgba(46, 20, 12, 0.82)',
      kpiBg: 'rgba(46, 20, 12, 0.08)',
      btnBg: 'rgba(46, 20, 12, 0.12)',
      hasGrid: true,
      watermarkSvg: (
        <svg width="220" height="220" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      ),
    },
    {
      id: 'healthcare',
      name: 'Healthcare & Life Sciences',
      desc: 'HIPAA-compliant sovereign RAG, automated diagnostic report parsing, and FHIR data lakes.',
      kpi: '85% Faster Review | 99.4% Citation',
      link: '/industries',
      bgColor: '#E4FA82', // Fresh Lime Green
      textColor: '#1C2A02',
      descColor: 'rgba(28, 42, 2, 0.82)',
      kpiBg: 'rgba(28, 42, 2, 0.08)',
      btnBg: 'rgba(28, 42, 2, 0.12)',
      hasGrid: false,
      watermarkSvg: (
        <svg width="220" height="220" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      ),
    },

    // Row 2: Cards 3, 4, 5
    {
      id: 'retail',
      name: 'Retail & E-Commerce',
      desc: 'Unified customer semantic layers, predictive replenishment schedules across 200+ DCs.',
      kpi: '-34% Stockouts | +22% GMV Turnover',
      link: '/industries',
      bgColor: '#BAE6FD', // Glacier Cyan / Sky Blue
      textColor: '#082F49',
      descColor: 'rgba(8, 47, 73, 0.82)',
      kpiBg: 'rgba(8, 47, 73, 0.08)',
      btnBg: 'rgba(8, 47, 73, 0.12)',
      hasGrid: false,
      watermarkSvg: (
        <svg width="220" height="220" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      ),
    },
    {
      id: 'logistics',
      name: 'Logistics & Supply Chain',
      desc: 'Cold-chain IoT sensor streams, sub-minute route cockpits, and multi-modal transit intelligence.',
      kpi: '99.98% SLA | -40% Route Delay',
      link: '/industries',
      bgColor: '#FED7AA', // Warm Sunset Apricot
      textColor: '#431407',
      descColor: 'rgba(67, 20, 7, 0.82)',
      kpiBg: 'rgba(67, 20, 7, 0.08)',
      btnBg: 'rgba(67, 20, 7, 0.12)',
      hasGrid: true,
      watermarkSvg: (
        <svg width="220" height="220" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13"></rect>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </svg>
      ),
    },
    {
      id: 'cloud-gcc',
      name: 'Cloud & High-Tech GCCs',
      desc: 'Petabyte legacy warehouse migration, FinOps cloud spend governance, and multi-agent AI copilots.',
      kpi: '-55% Cloud Spend | 90% BI Automation',
      link: '/industries',
      bgColor: '#A7F3D0', // Fresh Mint Emerald
      textColor: '#064E3B',
      descColor: 'rgba(6, 78, 59, 0.82)',
      kpiBg: 'rgba(6, 78, 59, 0.08)',
      btnBg: 'rgba(6, 78, 59, 0.12)',
      hasGrid: false,
      watermarkSvg: (
        <svg width="220" height="220" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      ),
    },
  ];

  // Active expanded cards for Row 1 and Row 2 (Defaults: card 1 expanded in row 1, card 0 in row 2)
  const [activeRow1, setActiveRow1] = useState(1); // Manufacturing active
  const [activeRow2, setActiveRow2] = useState(0); // Retail active

  const row1Sectors = defaultSectors.slice(0, 3);
  const row2Sectors = defaultSectors.slice(3, 6);

  return (
    <section
      id="industry"
      style={{
        background: '#01162e',
        color: '#ffffff',
        padding: '7.5rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-10%',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(45, 212, 191, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-10%',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.06) 0%, transparent 70%)',
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

        {/* Vani HQ Expanding Card Decks: Row 1 & Row 2 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* ==============================================================
              ROW 1: BFSI (0), Manufacturing (1), Healthcare (2)
              ============================================================== */}
          <div className="vani-card-deck">
            {row1Sectors.map((sector, idx) => {
              const isActive = activeRow1 === idx;
              return (
                <Link
                  key={sector.id}
                  href={sector.link}
                  className={`vani-card ${isActive ? 'is-active' : ''}`}
                  onMouseEnter={() => setActiveRow1(idx)}
                  onFocus={() => setActiveRow1(idx)}
                  style={{
                    backgroundColor: sector.bgColor,
                    color: sector.textColor,
                    backgroundImage: sector.hasGrid
                      ? 'linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)'
                      : 'none',
                    backgroundSize: '36px 36px',
                  }}
                >
                  {/* Top Header / Title */}
                  <div className="vani-card-head">
                    <h3 className="vani-card-title">{sector.name}</h3>

                    {/* Active Expanded Description */}
                    <div className={`vani-card-desc-wrap ${isActive ? 'is-visible' : ''}`}>
                      <p className="vani-card-desc" style={{ color: sector.descColor }}>
                        {sector.desc}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Controls / Action Bar */}
                  <div className="vani-card-bottom">
                    <div className="vani-action-group">
                      <div
                        className="vani-redirect-btn"
                        style={{
                          background: sector.btnBg,
                          color: sector.textColor,
                        }}
                      >
                        <ArrowUpRight size={22} className="vani-arrow-icon" />
                      </div>

                      {/* KPI Pill shown in active card or clean indicator */}
                      <span
                        className={`vani-kpi-pill ${isActive ? 'is-visible' : ''}`}
                        style={{
                          background: sector.kpiBg,
                          color: sector.textColor,
                        }}
                      >
                        {sector.kpi}
                      </span>
                    </div>

                    {/* Watermark Illustration Graphic */}
                    <div className="vani-watermark" style={{ color: sector.textColor }}>
                      {sector.watermarkSvg}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* ==============================================================
              ROW 2: Retail (0), Logistics (1), Cloud GCC (2)
              ============================================================== */}
          <div className="vani-card-deck">
            {row2Sectors.map((sector, idx) => {
              const isActive = activeRow2 === idx;
              return (
                <Link
                  key={sector.id}
                  href={sector.link}
                  className={`vani-card ${isActive ? 'is-active' : ''}`}
                  onMouseEnter={() => setActiveRow2(idx)}
                  onFocus={() => setActiveRow2(idx)}
                  style={{
                    backgroundColor: sector.bgColor,
                    color: sector.textColor,
                    backgroundImage: sector.hasGrid
                      ? 'linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)'
                      : 'none',
                    backgroundSize: '36px 36px',
                  }}
                >
                  {/* Top Header / Title */}
                  <div className="vani-card-head">
                    <h3 className="vani-card-title">{sector.name}</h3>

                    {/* Active Expanded Description */}
                    <div className={`vani-card-desc-wrap ${isActive ? 'is-visible' : ''}`}>
                      <p className="vani-card-desc" style={{ color: sector.descColor }}>
                        {sector.desc}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Controls / Action Bar */}
                  <div className="vani-card-bottom">
                    <div className="vani-action-group">
                      <div
                        className="vani-redirect-btn"
                        style={{
                          background: sector.btnBg,
                          color: sector.textColor,
                        }}
                      >
                        <ArrowUpRight size={22} className="vani-arrow-icon" />
                      </div>

                      {/* KPI Pill shown in active card */}
                      <span
                        className={`vani-kpi-pill ${isActive ? 'is-visible' : ''}`}
                        style={{
                          background: sector.kpiBg,
                          color: sector.textColor,
                        }}
                      >
                        {sector.kpi}
                      </span>
                    </div>

                    {/* Watermark Illustration Graphic */}
                    <div className="vani-watermark" style={{ color: sector.textColor }}>
                      {sector.watermarkSvg}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Styled JSX for Vani HQ Exact Animation and Layout */}
      <style jsx>{`
        /* -------------------------------------------------------------
           Vani HQ Interactive Expanding Accordion Deck
           - Flex deck with smooth width expansion on hover
           - Inactive cards: flex 1 (~280px - 320px)
           - Active card: flex 2.2 (~540px - 620px)
           - Smooth description slide & fade in
           ------------------------------------------------------------- */
        .vani-card-deck {
          display: flex;
          width: 100%;
          gap: 20px;
          min-height: 380px;
          align-items: stretch;
        }

        .vani-card {
          flex: 1 1 0%;
          border-radius: 28px;
          padding: 36px 32px 30px;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: flex 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.4s ease,
                      box-shadow 0.4s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
          outline: none;
        }

        .vani-card.is-active {
          flex: 2.3 1 0%;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
          transform: translateY(-4px);
        }

        .vani-card:hover {
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.4);
        }

        /* Title */
        .vani-card-title {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(26px, 2.2vw, 34px);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin: 0;
          max-width: 320px;
          color: inherit;
        }

        /* Description Container with Slide-in */
        .vani-card-desc-wrap {
          max-height: 0;
          opacity: 0;
          visibility: hidden;
          transform: translateX(30px);
          overflow: hidden;
          transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s,
                      transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s,
                      max-height 0.45s ease;
        }

        .vani-card-desc-wrap.is-visible {
          max-height: 140px;
          opacity: 1;
          visibility: visible;
          transform: translateX(0);
          margin-top: 18px;
        }

        .vani-card-desc {
          font-size: 15.5px;
          line-height: 1.6;
          margin: 0;
          max-width: 440px;
          font-weight: 500;
        }

        /* Bottom Action Bar */
        .vani-card-bottom {
          display: flex;
          align-items: flex-end;
          justifyContent: space-between;
          position: relative;
          z-index: 2;
          margin-top: 30px;
        }

        .vani-action-group {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .vani-redirect-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease, background-color 0.3s ease;
          flex-shrink: 0;
        }

        .vani-card:hover .vani-redirect-btn {
          transform: scale(1.1) rotate(5deg);
        }

        .vani-arrow-icon {
          transition: transform 0.3s ease;
        }

        .vani-card:hover .vani-arrow-icon {
          transform: translate(2px, -2px);
        }

        .vani-kpi-pill {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          padding: 6px 12px;
          border-radius: 20px;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.4s ease 0.15s, transform 0.4s ease 0.15s;
          white-space: nowrap;
        }

        .vani-kpi-pill.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Watermark SVG Illustration */
        .vani-watermark {
          position: absolute;
          right: -25px;
          bottom: -35px;
          opacity: 0.18;
          pointer-events: none;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.6s ease;
          z-index: 1;
        }

        .vani-card.is-active .vani-watermark {
          opacity: 0.28;
          transform: scale(1.08) translate(-6px, -6px);
        }

        /* -------------------------------------------------------------
           Responsive: Tablet & Mobile
           ------------------------------------------------------------- */
        @media (max-width: 1024px) {
          .vani-card-deck {
            flex-direction: column;
            gap: 16px;
            min-height: auto;
          }

          .vani-card {
            flex: none !important;
            width: 100% !important;
            min-height: 240px;
          }

          .vani-card.is-active {
            transform: none;
          }

          .vani-card-desc-wrap {
            max-height: 200px !important;
            opacity: 1 !important;
            visibility: visible !important;
            transform: none !important;
            margin-top: 12px;
          }

          .vani-kpi-pill {
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
