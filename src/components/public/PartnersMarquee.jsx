'use client';

import React from 'react';

// Authentic Vector SVG Logos for Enterprise Technology Partners
const TECH_LOGOS = {
  'microsoft azure': (
    <svg viewBox="0 0 170 34" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '28px', width: 'auto' }}>
      <path d="M7.4 27.6H17.2L20.8 21.4L11.2 7.6H1.4L7.4 27.6Z" fill="#0078D4" />
      <path d="M17.3 27.6H29.6L24.8 13.2L20.8 21.4L17.3 27.6Z" fill="#50E6FF" />
      <path d="M11.2 7.6L16.2 15.8L20.8 21.4L24.8 13.2L20.8 7.6H11.2Z" fill="#005BA1" />
      <text x="36" y="23.5" fill="#0078D4" fontFamily="Plus Jakarta Sans, Inter, sans-serif" fontWeight="800" fontSize="15.5" letterSpacing="-0.2">
        Microsoft Azure
      </text>
    </svg>
  ),

  aws: (
    <svg viewBox="0 0 105 34" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '28px', width: 'auto' }}>
      <text x="0" y="22" fill="#232F3E" fontFamily="Plus Jakarta Sans, Inter, sans-serif" fontWeight="900" fontSize="24" letterSpacing="-0.8">
        aws
      </text>
      <path d="M4 26C18 33 38 33 50 24.5" stroke="#FF9900" strokeWidth="2.8" strokeLinecap="round" fill="none" />
      <path d="M47 23.5L53 24.5L51 30.5" fill="#FF9900" />
    </svg>
  ),

  'power bi': (
    <svg viewBox="0 0 120 34" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '28px', width: 'auto' }}>
      <rect x="0" y="3" width="28" height="28" rx="6" fill="#F2C811" />
      <rect x="5.5" y="16" width="4.5" height="11" rx="1.5" fill="#242424" />
      <rect x="11.8" y="11" width="4.5" height="16" rx="1.5" fill="#242424" />
      <rect x="18" y="7" width="4.5" height="20" rx="1.5" fill="#242424" />
      <text x="36" y="23.5" fill="#D99B00" fontFamily="Plus Jakarta Sans, Inter, sans-serif" fontWeight="800" fontSize="16" letterSpacing="-0.2">
        Power BI
      </text>
    </svg>
  ),

  qlik: (
    <svg viewBox="0 0 95 34" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '28px', width: 'auto' }}>
      <circle cx="14" cy="17" r="9.5" stroke="#009845" strokeWidth="4" fill="none" />
      <path d="M21 24L26 29" stroke="#009845" strokeWidth="4" strokeLinecap="round" />
      <text x="32" y="23.5" fill="#009845" fontFamily="Plus Jakarta Sans, Inter, sans-serif" fontWeight="900" fontSize="18" letterSpacing="-0.3">
        Qlik
      </text>
    </svg>
  ),

  databricks: (
    <svg viewBox="0 0 145 34" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '28px', width: 'auto' }}>
      <g transform="translate(0, 4)">
        <path d="M14 0L26 6L14 12L2 6L14 0Z" fill="#FF3621" />
        <path d="M2 10L14 16L26 10L24 8L14 13L4 8L2 10Z" fill="#FF3621" />
        <path d="M2 15L14 21L26 15L24 13L14 18L4 13L2 15Z" fill="#FF3621" />
        <path d="M2 20L14 26L26 20L24 18L14 23L4 18L2 20Z" fill="#FF3621" />
      </g>
      <text x="34" y="23" fill="#FF3621" fontFamily="Plus Jakarta Sans, Inter, sans-serif" fontWeight="800" fontSize="16" letterSpacing="-0.3">
        databricks
      </text>
    </svg>
  ),

  python: (
    <svg viewBox="0 0 115 34" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '28px', width: 'auto' }}>
      <g transform="translate(0, 3) scale(0.95)">
        <path d="M13.5 0C6.3 0 6.7 3.1 6.7 3.1L6.7 6.3H13.7V7.3H3.9C0 7.3 0 12.2 0 12.2C0 14.8 1.4 16.5 3.9 16.5H5.8V13.8C5.8 10.7 8.5 10.7 8.5 10.7H15.5C18.1 10.7 18.5 8.1 18.5 8.1V3.1C18.5 3.1 18.7 0 13.5 0ZM9.5 2C10.3 2 11 2.7 11 3.5C11 4.3 10.3 5 9.5 5C8.7 5 8 4.3 8 3.5C8 2.7 8.7 2 9.5 2Z" fill="#387EB8" />
        <path d="M13.5 27C20.7 27 20.3 23.9 20.3 23.9L20.3 20.7H13.3V19.7H23.1C27 19.7 27 14.8 27 14.8C27 12.2 25.6 10.5 23.1 10.5H21.2V13.2C21.2 16.3 18.5 16.3 18.5 16.3H11.5C8.9 16.3 8.5 18.9 8.5 18.9V23.9C8.5 23.9 8.3 27 13.5 27ZM17.5 25C16.7 25 16 24.3 16 23.5C16 22.7 16.7 22 17.5 22C18.3 22 19 22.7 19 23.5C19 24.3 18.3 25 17.5 25Z" fill="#FFE052" />
      </g>
      <text x="32" y="23" fill="#306998" fontFamily="Plus Jakarta Sans, Inter, sans-serif" fontWeight="800" fontSize="16" letterSpacing="-0.2">
        python
      </text>
    </svg>
  ),

  'next.js': (
    <svg viewBox="0 0 110 34" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '28px', width: 'auto' }}>
      <circle cx="14" cy="17" r="13" fill="#000000" />
      <path d="M19 22.5L9.5 10.5V23.5H7.5V9.5H9.5L20.5 23.5L19 22.5Z" fill="#FFFFFF" />
      <path d="M18 9.5H20V18L18 15.5V9.5Z" fill="#FFFFFF" opacity="0.6" />
      <text x="34" y="23" fill="#000000" fontFamily="Plus Jakarta Sans, Inter, sans-serif" fontWeight="800" fontSize="16" letterSpacing="-0.3">
        Next.js
      </text>
    </svg>
  ),

  laravel: (
    <svg viewBox="0 0 115 34" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '28px', width: 'auto' }}>
      <g transform="translate(14, 17) scale(0.7)">
        <path d="M0 -15L13 -7.5V7.5L0 15L-13 7.5V-7.5L0 -15Z" fill="#FF2D20" />
        <path d="M0 -15L13 -7.5L0 0L-13 -7.5L0 -15Z" fill="#FF4D40" />
        <path d="M0 0L13 -7.5V7.5L0 15V0Z" fill="#E02418" />
      </g>
      <text x="32" y="23" fill="#FF2D20" fontFamily="Plus Jakarta Sans, Inter, sans-serif" fontWeight="800" fontSize="16" letterSpacing="-0.3">
        laravel
      </text>
    </svg>
  ),

  tableau: (
    <svg viewBox="0 0 125 34" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '28px', width: 'auto' }}>
      <g transform="translate(14, 17)">
        {/* Center orange cross */}
        <rect x="-1.5" y="-6" width="3" height="12" fill="#E8762D" rx="0.5" />
        <rect x="-6" y="-1.5" width="12" height="3" fill="#E8762D" rx="0.5" />
        {/* Surrounding mini crosses in signature palette */}
        <rect x="-1" y="-12" width="2" height="4" fill="#1F4E79" />
        <rect x="-2" y="-11" width="4" height="2" fill="#1F4E79" />
        <rect x="-1" y="8" width="2" height="4" fill="#59A14F" />
        <rect x="-2" y="9" width="4" height="2" fill="#59A14F" />
        <rect x="8" y="-1" width="4" height="2" fill="#EDC948" />
        <rect x="9" y="-2" width="2" height="4" fill="#EDC948" />
        <rect x="-12" y="-1" width="4" height="2" fill="#E15759" />
        <rect x="-11" y="-2" width="2" height="4" fill="#E15759" />
      </g>
      <text x="34" y="23" fill="#1F4E79" fontFamily="Plus Jakarta Sans, Inter, sans-serif" fontWeight="800" fontSize="16" letterSpacing="-0.2">
        tableau
      </text>
    </svg>
  ),

  openai: (
    <svg viewBox="0 0 115 34" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '28px', width: 'auto' }}>
      <g transform="translate(14, 17) scale(0.62)">
        <path d="M19.4 13.9a8.6 8.6 0 0 0-.7-7.2 8.7 8.7 0 0 0-8.9-4.2A8.6 8.6 0 0 0 3.3 5a8.7 8.7 0 0 0-4.7 7.7v1.8a8.6 8.6 0 0 0 .7 7.2 8.7 8.7 0 0 0 8.9 4.2 8.6 8.6 0 0 0 6.5-2.5 8.7 8.7 0 0 0 4.7-7.7v-1.8z" stroke="#10A37F" strokeWidth="3.2" fill="none" />
        <path d="M0 0L8 -4.6M0 0L8 4.6M0 0L0 9.2M0 0L-8 4.6M0 0L-8 -4.6M0 0L0 -9.2" stroke="#10A37F" strokeWidth="2.8" />
      </g>
      <text x="34" y="23" fill="#0A0A0A" fontFamily="Plus Jakarta Sans, Inter, sans-serif" fontWeight="800" fontSize="16" letterSpacing="-0.3">
        OpenAI
      </text>
    </svg>
  ),

  'azure ml': (
    <svg viewBox="0 0 125 34" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '28px', width: 'auto' }}>
      <g transform="translate(0, 4)">
        <rect x="0" y="0" width="26" height="26" rx="6" fill="#0078D4" />
        <path d="M10 7H16M11 7V12L7 19H19L15 12V7" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="13" cy="15" r="1.5" fill="#50E6FF" />
      </g>
      <text x="34" y="23" fill="#0078D4" fontFamily="Plus Jakarta Sans, Inter, sans-serif" fontWeight="800" fontSize="15.5" letterSpacing="-0.2">
        Azure ML
      </text>
    </svg>
  ),

  react: (
    <svg viewBox="0 0 105 34" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '28px', width: 'auto' }}>
      <g transform="translate(14, 17)">
        <ellipse rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.8" fill="none" />
        <ellipse rx="13" ry="5" transform="rotate(60)" stroke="#61DAFB" strokeWidth="1.8" fill="none" />
        <ellipse rx="13" ry="5" transform="rotate(120)" stroke="#61DAFB" strokeWidth="1.8" fill="none" />
        <circle r="2.5" fill="#61DAFB" />
      </g>
      <text x="34" y="23" fill="#087EA4" fontFamily="Plus Jakarta Sans, Inter, sans-serif" fontWeight="800" fontSize="16" letterSpacing="-0.2">
        React
      </text>
    </svg>
  ),

  snowflake: (
    <svg viewBox="0 0 130 34" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '28px', width: 'auto' }}>
      <g transform="translate(14, 17)">
        <path d="M0 -11V11M-9.5 -5.5L9.5 5.5M-9.5 5.5L9.5 -5.5" stroke="#29B5E8" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="0" cy="-11" r="1.5" fill="#29B5E8" />
        <circle cx="0" cy="11" r="1.5" fill="#29B5E8" />
        <circle cx="-9.5" cy="-5.5" r="1.5" fill="#29B5E8" />
        <circle cx="9.5" cy="5.5" r="1.5" fill="#29B5E8" />
        <circle cx="-9.5" cy="5.5" r="1.5" fill="#29B5E8" />
        <circle cx="9.5" cy="-5.5" r="1.5" fill="#29B5E8" />
      </g>
      <text x="34" y="23" fill="#29B5E8" fontFamily="Plus Jakarta Sans, Inter, sans-serif" fontWeight="800" fontSize="15.5" letterSpacing="-0.2">
        Snowflake
      </text>
    </svg>
  ),
};

export default function PartnersMarquee({ partners = [] }) {
  const defaultPartners = [
    { name: 'Microsoft Azure' },
    { name: 'AWS' },
    { name: 'Power BI' },
    { name: 'Qlik' },
    { name: 'Databricks' },
    { name: 'Python' },
    { name: 'Next.js' },
    { name: 'Laravel' },
    { name: 'Tableau' },
    { name: 'OpenAI' },
    { name: 'Azure ML' },
    { name: 'React' },
  ];

  const items = partners && partners.length > 0 ? partners : defaultPartners;
  // Duplicate for seamless 3-repeat infinite marquee scroll
  const marqueeItems = [...items, ...items, ...items];

  const renderLogo = (partner) => {
    if (partner.logoUrl) {
      return (
        <img
          src={partner.logoUrl}
          alt={partner.name}
          style={{ height: '30px', width: 'auto', objectFit: 'contain' }}
        />
      );
    }

    const key = (partner.name || '').trim().toLowerCase();
    const svgLogo = TECH_LOGOS[key];

    if (svgLogo) {
      return svgLogo;
    }

    // Elegant fallback typography badge if custom name without SVG
    return (
      <span
        style={{
          fontSize: '1rem',
          fontWeight: 800,
          color: 'var(--navy)',
          letterSpacing: '-0.2px',
        }}
      >
        {partner.name}
      </span>
    );
  };

  return (
    <div
      style={{
        padding: '2.25rem 0',
        background: '#FFFFFF',
        borderTop: '1px solid var(--gray-200)',
        borderBottom: '1px solid var(--gray-200)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          fontSize: '0.75rem',
          fontWeight: 800,
          color: 'var(--muted)',
          letterSpacing: '2.5px',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
        }}
      >
        Technology Partners &amp; Enterprise Ecosystem
      </div>

      {/* Marquee Track with Smooth Edge Gradient Fades */}
      <div
        style={{
          display: 'flex',
          overflow: 'hidden',
          width: '100%',
          position: 'relative',
          padding: '0.85rem 0',
          maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}
      >
        <div className="animate-marquee tech-partners-track">
          {marqueeItems.map((p, idx) => (
            <div
              key={`${p.id || p.name}-${idx}`}
              className="tech-partner-logo-item"
              title={p.name}
            >
              {renderLogo(p)}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
