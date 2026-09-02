'use client';

import React from 'react';

export default function ClientsMarquee() {
  const clients = [
    {
      name: 'Walmart',
      svg: (
        <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '32px', width: 'auto' }}>
          {/* Walmart text in signature blue */}
          <text x="0" y="28" fill="#0071DC" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="26" letterSpacing="-0.5">
            Walmart
          </text>
          {/* Spark Starburst */}
          <g transform="translate(122, 17)">
            <line x1="0" y1="-12" x2="0" y2="-4" stroke="#FFC220" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="0" y1="4" x2="0" y2="12" stroke="#FFC220" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="-10" y1="-6" x2="-3.5" y2="-2" stroke="#FFC220" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="3.5" y1="2" x2="10" y2="6" stroke="#FFC220" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="-10" y1="6" x2="-3.5" y2="2" stroke="#FFC220" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="3.5" y1="-2" x2="10" y2="-6" stroke="#FFC220" strokeWidth="3.5" strokeLinecap="round" />
          </g>
        </svg>
      ),
    },
    {
      name: 'Capital One',
      svg: (
        <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '34px', width: 'auto' }}>
          {/* Capital One text */}
          <text x="0" y="27" fill="#004977" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="23" letterSpacing="-0.5">
            Capital
          </text>
          <text x="78" y="27" fill="#004977" fontFamily="Georgia, serif" fontStyle="italic" fontWeight="700" fontSize="24">
            One
          </text>
          {/* Red Swoosh */}
          <path
            d="M58 24C65 14 85 8 116 11C102 12 85 16 76 22Z"
            fill="#D03027"
          />
        </svg>
      ),
    },
    {
      name: 'Accenture',
      svg: (
        <svg viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '30px', width: 'auto' }}>
          <text x="0" y="27" fill="#111827" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="24" letterSpacing="-0.5">
            accenture
          </text>
          {/* Accent Purple Caret */}
          <path d="M89 12L94 7L99 12" stroke="#A100FF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: 'MINT',
      svg: (
        <svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '30px', width: 'auto' }}>
          <text x="0" y="23" fill="#10B981" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="900" fontSize="23" letterSpacing="1.5">
            MINT
          </text>
          <text x="1" y="33" fill="#10B981" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="7" letterSpacing="1.2">
            CHANGE YOUR MINDSET
          </text>
        </svg>
      ),
    },
    {
      name: 'Gupshup',
      svg: (
        <svg viewBox="0 0 130 42" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '36px', width: 'auto' }}>
          {/* Speech bubbles */}
          <rect x="18" y="2" width="20" height="18" rx="6" fill="#6366F1" />
          <path d="M24 11L22 9L24 7M32 7L34 9L32 11" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="27" y1="13" x2="29" y2="5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="28" y="6" width="16" height="15" rx="5" fill="#EC4899" fillOpacity="0.85" />
          {/* Wordmark */}
          <text x="10" y="35" fill="#1F2937" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="13" letterSpacing="0.2">
            gupshup
          </text>
        </svg>
      ),
    },
    {
      name: 'UST',
      svg: (
        <svg viewBox="0 0 110 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '32px', width: 'auto' }}>
          <text x="0" y="28" fill="#111827" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="900" fontSize="28" letterSpacing="3">
            U S T
          </text>
          <rect x="36" y="8" width="5" height="5" fill="#111827" />
          <rect x="80" y="8" width="5" height="5" fill="#111827" />
        </svg>
      ),
    },
    {
      name: 'IMPENDI',
      svg: (
        <svg viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '30px', width: 'auto' }}>
          <text x="0" y="28" fill="#0A2540" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="23" letterSpacing="2">
            IMPENDI
          </text>
          {/* Radial accent rays over 'I' */}
          <g transform="translate(133, 7)">
            <line x1="-3" y1="-3" x2="-6" y2="-6" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" />
            <line x1="0" y1="-4" x2="0" y2="-8" stroke="#60A5FA" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="3" y1="-3" x2="6" y2="-6" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" />
          </g>
        </svg>
      ),
    },
    {
      name: 'SupplyCopia',
      svg: (
        <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '30px', width: 'auto' }}>
          <text x="0" y="23" fill="#DC2626" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="900" fontSize="19" letterSpacing="0.5">
            SUPPLYCOPIA
          </text>
          <text x="1" y="33" fill="#6B7280" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="7" letterSpacing="1.2">
            CLARITY • VISION • DECISIONS
          </text>
        </svg>
      ),
    },
  ];

  return (
    <section
      id="clients"
      style={{
        background: '#FFFFFF',
        padding: '3.5rem 0',
        borderTop: '1px solid var(--gray-200)',
        borderBottom: '1px solid var(--gray-200)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ marginBottom: '1.75rem', textAlign: 'center' }}>
        <div
          style={{
            fontSize: '0.8rem',
            fontWeight: 800,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span style={{ width: '20px', height: '1.5px', background: 'var(--blue)' }} />
          Trusted by Industry Leaders & Fast-Growing Enterprises
          <span style={{ width: '20px', height: '1.5px', background: 'var(--blue)' }} />
        </div>
      </div>

      {/* Marquee Wrapper with Side Fade Gradients */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
        }}
      >
        <div className="clients-marquee-track">
          {/* First Set */}
          {clients.map((client, index) => (
            <div key={`c1-${index}`} className="client-logo-item">
              {client.svg}
            </div>
          ))}
          {/* Duplicate Set for Seamless Loop */}
          {clients.map((client, index) => (
            <div key={`c2-${index}`} className="client-logo-item">
              {client.svg}
            </div>
          ))}
          {/* Third Set for Ultrawide displays */}
          {clients.map((client, index) => (
            <div key={`c3-${index}`} className="client-logo-item">
              {client.svg}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .clients-marquee-track {
          display: flex;
          align-items: center;
          gap: 4.5rem;
          width: max-content;
          animation: clientsMarquee 32s linear infinite;
        }
        .clients-marquee-track:hover {
          animation-play-state: paused;
        }
        .client-logo-item {
          display: flex;
          align-items: center;
          justifyContent: center;
          padding: 0.5rem 1rem;
          opacity: 0.85;
          filter: grayscale(15%);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .client-logo-item:hover {
          opacity: 1;
          filter: grayscale(0%);
          transform: translateY(-2px);
        }
        @keyframes clientsMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
      `}</style>
    </section>
  );
}
