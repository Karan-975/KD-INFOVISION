'use client';

import React from 'react';
import Link from 'next/link';
import {
  Linkedin,
  Twitter,
  Github,
  ArrowUp,
  ArrowRight,
  ShieldCheck,
  Mail,
  MapPin,
} from 'lucide-react';

export default function Footer({ settings }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const solutions = [
    { name: 'AI & Production MLOps', href: '/services' },
    { name: 'Cloud Lakehouse & dbt', href: '/services' },
    { name: 'Executive Power BI & Analytics', href: '/services' },
    { name: 'Cloud-Native Engineering', href: '/services' },
    { name: 'SRE & Managed Cloud Operations', href: '/services' },
    { name: 'Data Governance & Catalogs', href: '/services' },
  ];

  const industries = [
    { name: 'BFSI & Fintech', href: '/industries' },
    { name: 'Manufacturing & Supply Chain', href: '/industries' },
    { name: 'Retail & E-Commerce', href: '/industries' },
    { name: 'Healthcare & Life Sciences', href: '/industries' },
    { name: 'High-Tech & SaaS', href: '/industries' },
  ];

  const company = [
    { name: 'About KD Infovision', href: '/about' },
    { name: 'Enterprise Case Studies', href: '/case-studies' },
    { name: 'Leadership & Methodology', href: '/about' },
    { name: 'Contact & Advisory', href: '/contact' },
    { name: 'Admin CMS Portal', href: '/admin', isSpecial: true },
  ];

  return (
    <footer
      style={{
        position: 'relative',
        background: 'radial-gradient(ellipse 90% 40% at 50% 0%, rgba(21, 138, 226, 0.12) 0%, rgba(3, 24, 56, 0.98) 55%, #020e20 100%)',
        borderTop: '1px solid rgba(21, 138, 226, 0.25)',
        color: '#FFFFFF',
        padding: '4.5rem 0 2rem 0',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* PRE-FOOTER ENTERPRISE CALL-TO-ACTION CARD */}
        <div
          style={{
            marginBottom: '4rem',
            padding: '2.5rem 2.5rem',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(21, 138, 226, 0.12) 0%, rgba(255, 255, 255, 0.03) 100%)',
            border: '1px solid rgba(21, 138, 226, 0.25)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
          className="footer-cta-card"
        >
          <div style={{ maxWidth: '640px' }}>
            <h3
              style={{
                fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                lineHeight: 1.25,
                color: '#FFFFFF',
                marginBottom: '0.75rem',
              }}
            >
              Ready to Accelerate Your Enterprise AI &amp; Cloud Journey?
            </h3>
            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.65,
                color: 'rgba(255, 255, 255, 0.75)',
                margin: 0,
              }}
            >
              Consult with our principal architects to design resilient data lakehouses, deploy production-grade AI, and automate mission-critical workflows.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.85rem 1.75rem',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #158AE2 0%, #0D6EFD 100%)',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(21, 138, 226, 0.4)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(21, 138, 226, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(21, 138, 226, 0.4)';
              }}
            >
              <span>Schedule Architecture Briefing</span>
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.85rem 1.5rem',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.95rem',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
              }}
            >
              Explore Solutions
            </Link>
          </div>
        </div>

        {/* MAIN FOOTER NAVIGATION GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2.2fr 1.1fr 1.1fr 1.1fr',
            gap: '3.5rem',
            marginBottom: '3.5rem',
          }}
          className="footer-grid"
        >
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.25rem' }}>
              <img
                src="/logo-mark.png"
                alt="KD Infovision"
                style={{
                  height: '48px',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>

            <p
              style={{
                fontSize: '0.925rem',
                lineHeight: 1.75,
                color: 'rgba(255, 255, 255, 0.6)',
                maxWidth: '340px',
                marginBottom: '1.5rem',
              }}
            >
              Transforming enterprise operations with hardened cloud lakehouses, automated AI pipelines, and board-ready Power BI analytics.
            </p>

            {/* Delivery Locations & Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '1.75rem', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.65)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={15} style={{ color: '#38BDF8', flexShrink: 0 }} />
                <span>Delivery Centers: Bangalore &amp; Mumbai, India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={15} style={{ color: '#38BDF8', flexShrink: 0 }} />
                <span>contact@kdinfovision.com</span>
              </div>
            </div>

            {/* Social Buttons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href={settings?.socialLinkedin || 'https://linkedin.com'}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255, 255, 255, 0.8)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#0A66C2';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.borderColor = '#0A66C2';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                }}
              >
                <Linkedin size={17} />
              </a>
              <a
                href={settings?.socialTwitter || 'https://twitter.com'}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255, 255, 255, 0.8)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#1DA1F2';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.borderColor = '#1DA1F2';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                }}
              >
                <Twitter size={17} />
              </a>
              <a
                href={settings?.socialGithub || 'https://github.com'}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255, 255, 255, 0.8)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#24292E';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.borderColor = '#24292E';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                }}
              >
                <Github size={17} />
              </a>
            </div>
          </div>

          {/* Solutions Col */}
          <div>
            <h4
              style={{
                fontSize: '0.825rem',
                fontWeight: 800,
                color: '#38BDF8',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.25rem',
              }}
            >
              Solutions
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {solutions.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    style={{
                      color: 'rgba(255,255,255,0.7)',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'color 0.2s ease, padding-left 0.2s ease',
                      display: 'inline-block',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#38BDF8';
                      e.currentTarget.style.paddingLeft = '4px';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                      e.currentTarget.style.paddingLeft = '0px';
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Col */}
          <div>
            <h4
              style={{
                fontSize: '0.825rem',
                fontWeight: 800,
                color: '#38BDF8',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.25rem',
              }}
            >
              Industries
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {industries.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    style={{
                      color: 'rgba(255,255,255,0.7)',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'color 0.2s ease, padding-left 0.2s ease',
                      display: 'inline-block',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#38BDF8';
                      e.currentTarget.style.paddingLeft = '4px';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                      e.currentTarget.style.paddingLeft = '0px';
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Col */}
          <div>
            <h4
              style={{
                fontSize: '0.825rem',
                fontWeight: 800,
                color: '#38BDF8',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.25rem',
              }}
            >
              Company
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {company.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    style={{
                      color: item.isSpecial ? '#38BDF8' : 'rgba(255,255,255,0.7)',
                      fontWeight: item.isSpecial ? 700 : 400,
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'color 0.2s ease, padding-left 0.2s ease',
                      display: 'inline-block',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = item.isSpecial ? '#60A5FA' : '#38BDF8';
                      e.currentTarget.style.paddingLeft = '4px';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = item.isSpecial ? '#38BDF8' : 'rgba(255,255,255,0.7)';
                      e.currentTarget.style.paddingLeft = '0px';
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT & COMPLIANCE BAR */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.85rem',
            color: 'rgba(255, 255, 255, 0.5)',
            flexWrap: 'wrap',
            gap: '1.25rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <span>© {new Date().getFullYear()} {settings?.siteName || 'KD INFOVISION'}. All Rights Reserved.</span>
            <span>•</span>
            <span>Enterprise Data &amp; AI Partner</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#34D399', fontSize: '0.8rem', fontWeight: 600 }}>
              <ShieldCheck size={14} />
              <span>ISO 27001 &amp; SOC2 Aligned</span>
            </div>

            <button
              onClick={scrollToTop}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#158AE2';
                e.currentTarget.style.borderColor = '#158AE2';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
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
          :global(.footer-cta-card) {
            padding: 2rem !important;
          }
        }
        @media (max-width: 600px) {
          :global(.footer-grid) {
            grid-template-columns: 1fr !important;
          }
          :global(.footer-cta-card) {
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
