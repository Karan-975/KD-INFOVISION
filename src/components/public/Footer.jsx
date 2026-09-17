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
  Phone,
  CheckCircle2,
  Lock,
  Activity,
  Zap,
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
        background: 'radial-gradient(ellipse 100% 55% at 50% 0%, #0A3266 0%, #041935 45%, #020E1F 100%)',
        color: '#FFFFFF',
        padding: '0 0 2rem 0',
        overflow: 'hidden',
      }}
    >
      {/* Top Multi-Color Spectrum Accent Line */}
      <div
        style={{
          width: '100%',
          height: '2px',
          background: 'linear-gradient(90deg, #158AE2 0%, #06B6D4 20%, #10B981 40%, #8B5CF6 60%, #F59E0B 80%, #EC4899 100%)',
          boxShadow: '0 0 16px rgba(21, 138, 226, 0.5)',
        }}
      />

      {/* Atmospheric Ambient Depth Glows */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '10%',
          width: '500px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(21, 138, 226, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '500px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '4.5rem' }}>
        {/* PRE-FOOTER ENTERPRISE CALL-TO-ACTION CARD with Adventurous Animated Aurora & No Flag */}
        <div
          className="adventurous-cta-card"
          style={{
            marginBottom: '4.5rem',
            padding: '3.25rem 3.5rem',
            borderRadius: '26px',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(56, 189, 248, 0.35)',
            display: 'grid',
            gridTemplateColumns: '1.25fr auto',
            alignItems: 'center',
            gap: '3rem',
          }}
        >
          {/* Animated Background Ambient Orbs */}
          <div className="cta-orb-1" />
          <div className="cta-orb-2" />

          {/* Content Left: Headline & Description */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.65rem, 2.7vw, 2.35rem)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                lineHeight: 1.22,
                color: '#FFFFFF',
                marginBottom: '1rem',
              }}
            >
              Ready to Accelerate Your{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #38BDF8 0%, #818CF8 50%, #34D399 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                AI &amp; Cloud Transformation?
              </span>
            </h3>

            <p
              style={{
                fontSize: '1.025rem',
                lineHeight: 1.7,
                color: 'rgba(255, 255, 255, 0.8)',
                margin: 0,
                maxWidth: '620px',
              }}
            >
              Consult with our certified data engineers and AI architects to modernize legacy systems, build resilient lakehouses, and unlock actionable intelligence.
            </p>
          </div>

          {/* Actions Right: Two Polished CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.15rem', flexWrap: 'wrap', position: 'relative', zIndex: 2 }}>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '0.95rem 1.95rem',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #158AE2 0%, #6366F1 50%, #8B5CF6 100%)',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '0.96rem',
                textDecoration: 'none',
                boxShadow: '0 10px 28px rgba(21, 138, 226, 0.45)',
                transition: 'all 0.25s ease',
              }}
              className="cta-primary-btn"
            >
              <span>Schedule Architecture Briefing</span>
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.95rem 1.75rem',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.96rem',
                textDecoration: 'none',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.2s ease',
              }}
              className="cta-secondary-btn"
            >
              Explore Solutions
            </Link>
          </div>
        </div>

        {/* MAIN FOOTER NAVIGATION GRID: General, Professional & Multi-Colored */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1.15fr',
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
                  height: '46px',
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
                color: 'rgba(255, 255, 255, 0.65)',
                maxWidth: '340px',
                marginBottom: '1.75rem',
              }}
            >
              Transforming enterprise operations with hardened cloud lakehouses, automated AI pipelines, and board-ready Power BI analytics.
            </p>

            {/* Delivery Locations & Contact with Multi-Color Icons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '1.75rem', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '9px', color: 'rgba(255, 255, 255, 0.75)' }}>
                <MapPin size={16} style={{ color: '#FB923C', flexShrink: 0 }} />
                <span>Delivery Centers: Bangalore &amp; Mumbai, India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '9px', color: 'rgba(255, 255, 255, 0.75)' }}>
                <Mail size={16} style={{ color: '#38BDF8', flexShrink: 0 }} />
                <span>{settings?.email || 'contact@kdinfovision.com'}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '9px', color: 'rgba(255, 255, 255, 0.75)' }}>
                <Phone size={16} style={{ color: '#34D399', flexShrink: 0 }} />
                <span>{settings?.phone || '+91 98765 43210'}</span>
              </div>
            </div>

            {/* Social Buttons with Individual Multi-Color Brand Identities */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href={settings?.socialLinkedin || 'https://linkedin.com'}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(10, 102, 194, 0.12)',
                  border: '1px solid rgba(10, 102, 194, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#38BDF8',
                  transition: 'all 0.25s ease',
                }}
                className="social-btn linkedin-btn"
              >
                <Linkedin size={18} />
              </a>

              <a
                href={settings?.socialTwitter || 'https://twitter.com'}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(29, 161, 242, 0.12)',
                  border: '1px solid rgba(29, 161, 242, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#1DA1F2',
                  transition: 'all 0.25s ease',
                }}
                className="social-btn twitter-btn"
              >
                <Twitter size={18} />
              </a>

              <a
                href={settings?.socialGithub || 'https://github.com'}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(139, 92, 246, 0.12)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#A78BFA',
                  transition: 'all 0.25s ease',
                }}
                className="social-btn github-btn"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Solutions Column (Electric Blue / Cyan Theme) */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.825rem',
                fontWeight: 800,
                color: '#38BDF8',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.35rem',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#38BDF8',
                  display: 'inline-block',
                  boxShadow: '0 0 10px #38BDF8',
                }}
              />
              Solutions
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {solutions.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      fontSize: '0.915rem',
                      transition: 'all 0.2s ease',
                      display: 'inline-block',
                    }}
                    className="footer-link solutions-link"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column (Fresh Emerald Green Theme) */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.825rem',
                fontWeight: 800,
                color: '#34D399',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.35rem',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#34D399',
                  display: 'inline-block',
                  boxShadow: '0 0 10px #34D399',
                }}
              />
              Industries
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {industries.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      fontSize: '0.915rem',
                      transition: 'all 0.2s ease',
                      display: 'inline-block',
                    }}
                    className="footer-link industries-link"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column (Elegant Violet / Purple Theme) */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.825rem',
                fontWeight: 800,
                color: '#A78BFA',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1.35rem',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#A78BFA',
                  display: 'inline-block',
                  boxShadow: '0 0 10px #A78BFA',
                }}
              />
              Company
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {company.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    style={{
                      color: item.isSpecial ? '#FBBF24' : 'rgba(255, 255, 255, 0.7)',
                      fontWeight: item.isSpecial ? 700 : 400,
                      textDecoration: 'none',
                      fontSize: '0.915rem',
                      transition: 'all 0.2s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                    className="footer-link company-link"
                  >
                    <span>{item.name}</span>
                    {item.isSpecial && (
                      <span
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: 800,
                          padding: '2px 8px',
                          borderRadius: '6px',
                          background: 'rgba(245, 158, 11, 0.15)',
                          border: '1px solid rgba(245, 158, 11, 0.35)',
                          color: '#FBBF24',
                          letterSpacing: '0.5px',
                        }}
                      >
                        CMS
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* MULTI-COLOR TRUST & COMPLIANCE BADGE STRIP */}
        <div
          style={{
            padding: '1.25rem 1.75rem',
            borderRadius: '16px',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            marginBottom: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem',
            fontSize: '0.825rem',
            color: 'rgba(255, 255, 255, 0.75)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block', boxShadow: '0 0 8px #10B981' }} />
            <span style={{ fontWeight: 600 }}>99.98% Enterprise Uptime SLA</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={16} style={{ color: '#38BDF8' }} />
            <span style={{ fontWeight: 600 }}>SOC2 Type II &amp; ISO 27001 Ready</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Zap size={16} style={{ color: '#F59E0B' }} />
            <span style={{ fontWeight: 600 }}>24/7 SRE Telemetry &amp; Response</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Lock size={16} style={{ color: '#A78BFA' }} />
            <span style={{ fontWeight: 600 }}>100% Client Code &amp; IP Ownership</span>
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
            color: 'rgba(255, 255, 255, 0.55)',
            flexWrap: 'wrap',
            gap: '1.25rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <span>© {new Date().getFullYear()} {settings?.siteName || 'KD INFOVISION'}. All Rights Reserved.</span>
            <span>•</span>
            <span style={{ color: '#38BDF8' }}>Enterprise Data &amp; AI Partner</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <Link
              href="/privacy"
              style={{ color: 'rgba(255, 255, 255, 0.55)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.55)')}
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              style={{ color: 'rgba(255, 255, 255, 0.55)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.55)')}
            >
              Terms of Service
            </Link>

            <button
              onClick={scrollToTop}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#FFFFFF',
                borderRadius: '8px',
                padding: '6px 14px',
                cursor: 'pointer',
                fontSize: '0.8rem',
                fontWeight: 600,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#158AE2';
                e.currentTarget.style.borderColor = '#158AE2';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.adventurous-cta-card) {
          background: linear-gradient(135deg, rgba(21, 138, 226, 0.22) 0%, rgba(5, 45, 93, 0.8) 45%, rgba(139, 92, 246, 0.2) 100%), #031836;
          background-size: 200% 200%;
          animation: adventurousMesh 10s ease infinite alternate;
          box-shadow: 0 24px 60px -15px rgba(0, 0, 0, 0.6), 0 0 35px -5px rgba(21, 138, 226, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(16px);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        :global(.adventurous-cta-card:hover) {
          transform: translateY(-4px);
          box-shadow: 0 30px 70px -15px rgba(0, 0, 0, 0.75), 0 0 50px -5px rgba(56, 189, 248, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.35);
        }
        :global(.cta-orb-1) {
          position: absolute;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.28) 0%, transparent 70%);
          top: -80px;
          right: 15%;
          animation: orbFloat1 8s ease-in-out infinite alternate;
          pointer-events: none;
        }
        :global(.cta-orb-2) {
          position: absolute;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, transparent 70%);
          bottom: -60px;
          left: 10%;
          animation: orbFloat2 9s ease-in-out infinite alternate;
          pointer-events: none;
        }
        @keyframes adventurousMesh {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes orbFloat1 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(40px, -25px) scale(1.15);
          }
        }
        @keyframes orbFloat2 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(-30px, 20px) scale(1.12);
          }
        }
        :global(.cta-primary-btn:hover) {
          transform: translateY(-2px);
          box-shadow: 0 14px 34px rgba(99, 102, 241, 0.6) !important;
        }
        :global(.cta-secondary-btn:hover) {
          background: rgba(255, 255, 255, 0.16) !important;
          border-color: rgba(255, 255, 255, 0.35) !important;
          transform: translateY(-2px);
        }
        :global(.social-btn:hover) {
          transform: translateY(-2px);
        }
        :global(.linkedin-btn:hover) {
          background: #0A66C2 !important;
          border-color: #0A66C2 !important;
          color: #FFFFFF !important;
          box-shadow: 0 4px 14px rgba(10, 102, 194, 0.5);
        }
        :global(.twitter-btn:hover) {
          background: #1DA1F2 !important;
          border-color: #1DA1F2 !important;
          color: #FFFFFF !important;
          box-shadow: 0 4px 14px rgba(29, 161, 242, 0.5);
        }
        :global(.github-btn:hover) {
          background: #8B5CF6 !important;
          border-color: #8B5CF6 !important;
          color: #FFFFFF !important;
          box-shadow: 0 4px 14px rgba(139, 92, 246, 0.5);
        }
        :global(.solutions-link:hover) {
          color: #38BDF8 !important;
          padding-left: 5px;
        }
        :global(.industries-link:hover) {
          color: #34D399 !important;
          padding-left: 5px;
        }
        :global(.company-link:hover) {
          color: #A78BFA !important;
          padding-left: 5px;
        }
        @media (max-width: 960px) {
          :global(.footer-grid) {
            grid-template-columns: 1fr 1fr !important;
            gap: 2.5rem !important;
          }
          :global(.adventurous-cta-card) {
            grid-template-columns: 1fr !important;
            padding: 2.5rem 1.75rem !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 600px) {
          :global(.footer-grid) {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
