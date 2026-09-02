'use client';

import React from 'react';

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

  const items = partners.length > 0 ? partners : defaultPartners;
  // Double for seamless marquee loop
  const marqueeItems = [...items, ...items];

  return (
    <div
      style={{
        padding: '1.75rem 0',
        background: 'var(--gray-50)',
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
          fontWeight: 700,
          color: 'var(--gray-400)',
          letterSpacing: '2.5px',
          textTransform: 'uppercase',
          marginBottom: '1rem',
        }}
      >
        Technology Partners & Enterprise Ecosystem
      </div>

      <div style={{ display: 'flex', overflow: 'hidden', width: '100%' }}>
        <div className="animate-marquee">
          {marqueeItems.map((p, idx) => (
            <div
              key={idx}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 2.5rem',
                height: '42px',
                fontSize: '0.95rem',
                fontWeight: 700,
                color: 'var(--navy)',
                borderRight: '1px solid var(--gray-200)',
                whiteSpace: 'nowrap',
                letterSpacing: '-0.2px',
              }}
            >
              {p.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
