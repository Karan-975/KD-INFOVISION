'use client';

import React from 'react';
import Link from 'next/link';
import { Linkedin, Twitter, Github, ArrowUp } from 'lucide-react';

export default function Footer({ settings }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'var(--navy-deep)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '5rem 0 2.5rem 0',
        color: '#FFFFFF',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2.2fr 1fr 1fr 1fr',
            gap: '3.5rem',
            marginBottom: '4rem',
          }}
          className="footer-grid"
        >
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #3D9BE9 0%, #1B3A6B 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  fontWeight: 800,
                }}
              >
                KD
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF' }}>
                {settings?.siteName || 'KD INFOVISION'}
              </span>
            </div>
            <p
              style={{
                fontSize: '0.95rem',
                lineHeight: 1.75,
                color: 'rgba(255, 255, 255, 0.45)',
                maxWidth: '320px',
                marginBottom: '1.75rem',
              }}
            >
              Transforming enterprise data into competitive advantage with high-performance AI, Power BI analytics, and
              scalable digital platforms.
            </p>

            {/* Social Buttons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href={settings?.socialLinkedin || '#'}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255, 255, 255, 0.7)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--blue)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)')}
              >
                <Linkedin size={18} />
              </a>
              <a
                href={settings?.socialTwitter || '#'}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255, 255, 255, 0.7)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--blue)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)')}
              >
                <Twitter size={18} />
              </a>
              <a
                href={settings?.socialGithub || '#'}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255, 255, 255, 0.7)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--blue)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)')}
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Services Col */}
          <div>
            <h4 style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--blue)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '1.25rem' }}>
              Solutions
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#solutions" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: '0.925rem' }}>AI & Machine Learning</a></li>
              <li><a href="#solutions" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: '0.925rem' }}>Data Analytics & BI</a></li>
              <li><a href="#solutions" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: '0.925rem' }}>Software Engineering</a></li>
              <li><a href="#solutions" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: '0.925rem' }}>Cloud Architecture</a></li>
              <li><a href="#solutions" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: '0.925rem' }}>Data Engineering</a></li>
            </ul>
          </div>

          {/* Industries Col */}
          <div>
            <h4 style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--blue)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '1.25rem' }}>
              Industries
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#industry" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: '0.925rem' }}>BFSI & Banking</a></li>
              <li><a href="#industry" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: '0.925rem' }}>Manufacturing & Supply Chain</a></li>
              <li><a href="#industry" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: '0.925rem' }}>Retail & Consumer Goods</a></li>
              <li><a href="#industry" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: '0.925rem' }}>Healthcare & Pharma</a></li>
              <li><a href="#industry" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: '0.925rem' }}>E-Commerce & Startups</a></li>
            </ul>
          </div>

          {/* Company Col */}
          <div>
            <h4 style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--blue)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '1.25rem' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#about" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: '0.925rem' }}>Our Story</a></li>
              <li><a href="#cases" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: '0.925rem' }}>Case Studies</a></li>
              <li><a href="#process" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: '0.925rem' }}>How We Work</a></li>
              <li><a href="#insights" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: '0.925rem' }}>Insights & Trends</a></li>
              <li><Link href="/admin" style={{ color: 'var(--blue-cyan)', textDecoration: 'none', fontSize: '0.925rem', fontWeight: 600 }}>Admin CMS Portal</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.875rem',
            color: 'rgba(255, 255, 255, 0.4)',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div>
            © {new Date().getFullYear()} {settings?.siteName || 'KD INFOVISION'}. All Rights Reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span>Powered by Next.js, Prisma & MySQL</span>
            <button
              onClick={scrollToTop}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.08)',
                border: 'none',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              title="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          :global(.footer-grid) {
            grid-template-columns: 1fr 1fr !important;
            gap: 2.5rem !important;
          }
        }
        @media (max-width: 600px) {
          :global(.footer-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
