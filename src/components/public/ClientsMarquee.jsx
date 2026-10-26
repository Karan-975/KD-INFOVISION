'use client';

import React from 'react';

export default function ClientsMarquee({
  isDark = true,
  bgColor = null,
  borderColor = null,
}) {
  const clients = [
    {
      name: 'Walmart',
      svg: (
        <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '32px', width: 'auto' }}>
          <text x="0" y="28" fill={isDark ? '#38BDF8' : '#0071DC'} fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="26" letterSpacing="-0.5">
            Walmart
          </text>
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
          <text x="0" y="27" fill={isDark ? '#FFFFFF' : '#004977'} fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="23" letterSpacing="-0.5">
            Capital
          </text>
          <text x="78" y="27" fill={isDark ? '#38BDF8' : '#004977'} fontFamily="Georgia, serif" fontStyle="italic" fontWeight="700" fontSize="24">
            One
          </text>
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
          <text x="0" y="27" fill={isDark ? '#FFFFFF' : '#111827'} fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="24" letterSpacing="-0.5">
            accenture
          </text>
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
          <rect x="18" y="2" width="20" height="18" rx="6" fill="#6366F1" />
          <path d="M24 11L22 9L24 7M32 7L34 9L32 11" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="27" y1="13" x2="29" y2="5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="28" y="6" width="16" height="15" rx="5" fill="#EC4899" fillOpacity="0.85" />
          <text x="10" y="35" fill={isDark ? '#FFFFFF' : '#1F2937'} fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="13" letterSpacing="0.2">
            gupshup
          </text>
        </svg>
      ),
    },
    {
      name: 'UST',
      svg: (
        <svg viewBox="0 0 110 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '32px', width: 'auto' }}>
          <text x="0" y="28" fill={isDark ? '#FFFFFF' : '#111827'} fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="900" fontSize="28" letterSpacing="3">
            U S T
          </text>
          <rect x="36" y="8" width="5" height="5" fill={isDark ? '#38BDF8' : '#111827'} />
          <rect x="80" y="8" width="5" height="5" fill={isDark ? '#38BDF8' : '#111827'} />
        </svg>
      ),
    },
    {
      name: 'IMPENDI',
      svg: (
        <svg viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '30px', width: 'auto' }}>
          <text x="0" y="28" fill={isDark ? '#FFFFFF' : '#0A2540'} fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="23" letterSpacing="2">
            IMPENDI
          </text>
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
          <text x="1" y="33" fill={isDark ? '#94A3B8' : '#6B7280'} fontFamily="Inter, sans-serif" fontWeight="700" fontSize="7" letterSpacing="1.2">
            CLARITY • VISION • DECISIONS
          </text>
        </svg>
      ),
    },
    {
      name: 'Deloitte',
      svg: (
        <svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '30px', width: 'auto' }}>
          <text x="0" y="27" fill={isDark ? '#FFFFFF' : '#111827'} fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="24" letterSpacing="-0.5">
            Deloitte
          </text>
          <circle cx="98" cy="24" r="3.5" fill="#86BC25" />
        </svg>
      ),
    },
    {
      name: 'Infosys',
      svg: (
        <svg viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '30px', width: 'auto' }}>
          <text x="0" y="28" fill="#007CC3" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="25" letterSpacing="-0.5">
            Infosys
          </text>
          <text x="96" y="16" fill="#007CC3" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="600" fontSize="11">
            ®
          </text>
        </svg>
      ),
    },
    {
      name: 'Cognizant',
      svg: (
        <svg viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '30px', width: 'auto' }}>
          <text x="0" y="27" fill={isDark ? '#FFFFFF' : '#0033A0'} fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="23" letterSpacing="-0.2">
            cognizant
          </text>
          <path d="M126 12C126 12 133 15 133 21C133 26 128 28 126 28" stroke="#00A389" strokeWidth="2.8" strokeLinecap="round" fill="none" />
        </svg>
      ),
    },
    {
      name: 'Wipro',
      svg: (
        <svg viewBox="0 0 135 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '32px', width: 'auto' }}>
          <text x="0" y="27" fill={isDark ? '#FFFFFF' : '#24272C'} fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="24" letterSpacing="-0.5">
            wipro
          </text>
          <g transform="translate(86, 11)">
            <circle cx="6" cy="6" r="3.5" fill="#D32F2F" />
            <circle cx="14" cy="2" r="3" fill="#1976D2" />
            <circle cx="14" cy="11" r="3" fill="#388E3C" />
            <circle cx="21" cy="6" r="2.5" fill="#FBC02D" />
          </g>
        </svg>
      ),
    },
  ];

  // Distribute clients into 2 balanced rows
  const row1Base = [
    clients[0], // Walmart
    clients[2], // Accenture
    clients[4], // Gupshup
    clients[6], // IMPENDI
    clients[8], // Deloitte
    clients[9], // Infosys
  ];

  const row2Base = [
    clients[5], // UST
    clients[1], // Capital One
    clients[7], // SupplyCopia
    clients[3], // MINT
    clients[10], // Cognizant
    clients[11], // Wipro
  ];

  // Repeat each row 4 times for infinite seamless loop without jump
  const row1Items = [...row1Base, ...row1Base, ...row1Base, ...row1Base];
  const row2Items = [...row2Base, ...row2Base, ...row2Base, ...row2Base];

  return (
    <section
      id="clients"
      style={{
        background: bgColor || (isDark ? '#011224' : '#FFFFFF'),
        padding: '3.5rem 0',
        borderTop: borderColor ? `1px solid ${borderColor}` : (isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid var(--gray-200)'),
        borderBottom: borderColor ? `1px solid ${borderColor}` : (isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid var(--gray-200)'),
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <div
          style={{
            fontSize: '0.8rem',
            fontWeight: 800,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: isDark ? 'rgba(255, 255, 255, 0.65)' : 'var(--muted)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          <span style={{ width: '24px', height: '1.5px', background: isDark ? '#2DD4BF' : 'var(--blue)' }} />
          Trusted by Industry Leaders &amp; Fast-Growing Enterprises
          <span style={{ width: '24px', height: '1.5px', background: isDark ? '#2DD4BF' : 'var(--blue)' }} />
        </div>
      </div>

      {/* 2-Row Dual Client Marquee Tracks Moving in Opposite Directions */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          overflow: 'hidden',
          width: '100%',
          position: 'relative',
          padding: '0.35rem 0',
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        {/* Row 1: Moving to the RIGHT (-->) */}
        <div style={{ display: 'flex', overflow: 'hidden', width: '100%' }}>
          <div className="clients-track-right">
            {row1Items.map((client, index) => (
              <div key={`r1-${client.name}-${index}`} className="client-logo-item" title={client.name}>
                {client.svg}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Moving to the LEFT (<--) */}
        <div style={{ display: 'flex', overflow: 'hidden', width: '100%' }}>
          <div className="clients-track-left">
            {row2Items.map((client, index) => (
              <div key={`r2-${client.name}-${index}`} className="client-logo-item" title={client.name}>
                {client.svg}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .clients-track-right {
          display: flex;
          align-items: center;
          gap: 4.5rem;
          width: max-content;
          animation: clientsMarqueeRight 38s linear infinite;
        }

        .clients-track-left {
          display: flex;
          align-items: center;
          gap: 4.5rem;
          width: max-content;
          animation: clientsMarqueeLeft 38s linear infinite;
        }

        .clients-track-right:hover,
        .clients-track-left:hover {
          animation-play-state: paused !important;
        }

        .client-logo-item {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 1rem;
          opacity: ${isDark ? '0.85' : '1'};
          filter: none;
          position: relative;
          transform-origin: center center;
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease, filter 0.25s ease;
          will-change: transform;
          cursor: pointer;
        }

        .client-logo-item:hover {
          transform: scale(1.15);
          opacity: 1;
          z-index: 10;
          filter: ${isDark ? 'drop-shadow(0 4px 16px rgba(45, 212, 191, 0.35))' : 'drop-shadow(0 6px 14px rgba(5, 45, 93, 0.12))'};
        }

        @keyframes clientsMarqueeLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes clientsMarqueeRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
