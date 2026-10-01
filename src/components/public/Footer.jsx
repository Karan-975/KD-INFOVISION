'use client';

import React from 'react';
import Link from 'next/link';
import {
  Linkedin,
  Facebook,
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
  Zap,
} from 'lucide-react';

export default function Footer({ settings }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const solutions = [
    { name: 'Data & Analytics', href: '/services' },
    { name: 'Data Engineering', href: '/services' },
    { name: 'Agentic AI', href: '/services' },
    { name: 'Technology & Consulting', href: '/services' },
    { name: 'Staff Augmentation & Trainings', href: '/services' },
    { name: 'BI Visualization Solutions', href: '/services' },
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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="kd-footer">
      <div className="container">
        {/* =====================================================================
            1. PRE-FOOTER CTA CARD: Simple, Basic, Professional
            ===================================================================== */}
        <div className="cta-card">
          <div className="cta-text-content">
            <h3 className="cta-title">
              Ready to Accelerate Your AI &amp; Cloud Transformation?
            </h3>
            <p className="cta-description">
              Consult with our certified data engineers and AI architects to modernize legacy systems, build resilient lakehouses, and unlock actionable intelligence.
            </p>
          </div>

          <div className="cta-actions">
            <Link href="/contact" className="cta-btn-primary">
              <span>Schedule Architecture Briefing</span>
              <ArrowRight size={16} />
            </Link>

            <Link href="/services" className="cta-btn-secondary">
              Explore Solutions
            </Link>
          </div>
        </div>

        {/* =====================================================================
            2. MAIN FOOTER NAVIGATION: Clean, Typography-Driven (No AI Glows)
            ===================================================================== */}
        <div className="footer-nav-grid">
          {/* Brand & Address Column */}
          <div className="footer-brand-col">
            <Link href="/" className="footer-logo-link">
              <img
                src="/logo-mark.png"
                alt="KD Infovision"
                className="footer-logo-img"
              />
            </Link>

            <p className="brand-summary">
              Consulting | Outsourcing | Digital — Delivering advanced Data &amp; Analytics, Data Engineering, Agentic AI, and Digital Transformation solutions.
            </p>

            <div className="contact-details-list">
              <div className="contact-item">
                <MapPin size={16} className="contact-icon" />
                <span>Shop No 9, Ananat Kanakar Marg, Bandra – East, Mumbai 400051</span>
              </div>

              <div className="contact-item">
                <Mail size={16} className="contact-icon" />
                <a href={`mailto:${settings?.email || 'admin@kdinfovision.com'}`}>
                  {settings?.email || 'admin@kdinfovision.com'}
                </a>
              </div>

              <div className="contact-item">
                <Phone size={16} className="contact-icon" />
                <a href={`tel:${(settings?.phone || '+91 9820536031').replace(/\s+/g, '')}`}>
                  {settings?.phone || '+91 9820536031'}
                </a>
              </div>
            </div>

            {/* Clean Social Links */}
            <div className="social-links-row">
              <a
                href={settings?.socialLinkedin || 'https://www.linkedin.com/company/kd-infovision-consulting/about/'}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="social-link"
              >
                <Linkedin size={16} />
              </a>

              <a
                href="https://www.facebook.com/kdinfovision"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="social-link"
              >
                <Facebook size={16} />
              </a>

              <a
                href={settings?.socialTwitter || 'https://twitter.com'}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="social-link"
              >
                <Twitter size={16} />
              </a>

              <a
                href={settings?.socialGithub || 'https://github.com'}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="social-link"
              >
                <Github size={16} />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="footer-links-col">
            <h4 className="col-heading">Solutions</h4>
            <ul className="links-list">
              {solutions.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="nav-link">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div className="footer-links-col">
            <h4 className="col-heading">Industries</h4>
            <ul className="links-list">
              {industries.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="nav-link">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="footer-links-col">
            <h4 className="col-heading">Company</h4>
            <ul className="links-list">
              {company.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="nav-link company-link">
                    <span>{item.name}</span>
                    {item.isSpecial && <span className="cms-badge">CMS</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* =====================================================================
            3. TRUST STRIP: Clean, Professional Enterprise Assurance
            ===================================================================== */}
        <div className="trust-strip">
          <div className="trust-strip-item">
            <CheckCircle2 size={16} className="trust-icon" />
            <span>99.98% Enterprise Uptime SLA</span>
          </div>

          <div className="trust-strip-item">
            <ShieldCheck size={16} className="trust-icon" />
            <span>SOC 2 Type II &amp; ISO 27001 Ready</span>
          </div>

          <div className="trust-strip-item">
            <Zap size={16} className="trust-icon" />
            <span>24/7 SRE Telemetry &amp; Monitoring</span>
          </div>

          <div className="trust-strip-item">
            <Lock size={16} className="trust-icon" />
            <span>100% Client Code &amp; IP Ownership</span>
          </div>
        </div>

        {/* =====================================================================
            4. BOTTOM BAR: Simple & Clean Copyright
            ===================================================================== */}
        <div className="bottom-bar">
          <div className="copyright-text">
            <span>&copy; {currentYear} KD Infovision &amp; Consulting Pvt Ltd. All rights reserved.</span>
            <span className="dot-sep">&bull;</span>
            <span className="tagline">Consulting | Outsourcing | Digital</span>
          </div>

          <div className="bottom-links">
            <Link href="/privacy" className="bottom-link">
              Privacy Policy
            </Link>
            <Link href="/terms" className="bottom-link">
              Terms of Service
            </Link>

            <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to top">
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================================
          CSS: Clean, Grounded, Professional (No AI Rainbows or Floating Orbs)
          ===================================================================== */}
      <style jsx>{`
        .kd-footer {
          background: #07090e;
          color: #ffffff;
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          border-top: 1px solid #161c28;
          padding: 4rem 0 2rem 0;
          position: relative;
        }

        .container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* 1. PRE-FOOTER CTA CARD */
        .cta-card {
          background: #0d111a;
          border: 1px solid #1e2638;
          border-radius: 16px;
          padding: 3rem 3.5rem;
          margin-bottom: 4.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2.5rem;
          transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
        }

        .cta-card:hover {
          border-color: #2b3952;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45);
          transform: translateY(-2px);
        }

        .cta-text-content {
          max-width: 640px;
        }

        .cta-title {
          font-size: clamp(1.5rem, 2.3vw, 2rem);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.25;
          letter-spacing: -0.015em;
          margin: 0 0 0.75rem 0;
        }

        .cta-description {
          font-size: 0.98rem;
          line-height: 1.65;
          color: #94a3b8;
          margin: 0;
        }

        .cta-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-shrink: 0;
          flex-wrap: wrap;
        }

        .cta-btn-primary {
          background: #0284c7;
          color: #ffffff;
          font-size: 14px;
          font-weight: 600;
          padding: 12px 22px;
          border-radius: 8px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background-color 0.2s ease, transform 0.2s ease;
          border: 1px solid transparent;
        }

        .cta-btn-primary:hover {
          background: #0369a1;
          transform: translateY(-1px);
        }

        .cta-btn-secondary {
          background: transparent;
          color: #e2e8f0;
          font-size: 14px;
          font-weight: 600;
          padding: 12px 22px;
          border-radius: 8px;
          text-decoration: none;
          border: 1px solid #334155;
          transition: background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
        }

        .cta-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: #64748b;
          color: #ffffff;
          transform: translateY(-1px);
        }

        /* 2. FOOTER NAVIGATION GRID */
        .footer-nav-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.15fr;
          gap: 3.5rem;
          margin-bottom: 3.5rem;
        }

        .footer-brand-col {
          display: flex;
          flex-direction: column;
        }

        .footer-logo-link {
          display: inline-block;
          margin-bottom: 1.25rem;
          text-decoration: none;
        }

        .footer-logo-img {
          height: 38px;
          width: auto;
          object-fit: contain;
          display: block;
        }

        .brand-summary {
          font-size: 14px;
          line-height: 1.7;
          color: #94a3b8;
          max-width: 360px;
          margin: 0 0 1.5rem 0;
        }

        .contact-details-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 1.75rem;
          font-size: 13.5px;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #94a3b8;
          line-height: 1.5;
        }

        .contact-item a {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.15s ease;
        }

        .contact-item a:hover {
          color: #ffffff;
        }

        :global(.contact-icon) {
          color: #64748b;
          flex-shrink: 0;
          margin-top: 3px;
        }

        .social-links-row {
          display: flex;
          gap: 8px;
        }

        .social-link {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: #0d111a;
          border: 1px solid #1e2638;
          color: #94a3b8;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
        }

        .social-link:hover {
          background: #151c2b;
          border-color: #0284c7;
          color: #ffffff;
          transform: translateY(-2px);
        }

        /* Nav Columns */
        .footer-links-col {
          display: flex;
          flex-direction: column;
        }

        .col-heading {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: #ffffff;
          margin: 0 0 1.25rem 0;
        }

        .links-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .nav-link {
          color: #94a3b8;
          font-size: 14px;
          line-height: 1.5;
          text-decoration: none;
          display: inline-block;
          transition: color 0.15s ease, transform 0.15s ease;
        }

        .nav-link:hover {
          color: #ffffff;
          transform: translateX(3px);
        }

        .company-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .cms-badge {
          background: #141a26;
          border: 1px solid #243044;
          color: #94a3b8;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.5px;
          padding: 2px 6px;
          border-radius: 4px;
        }

        /* 3. TRUST STRIP */
        .trust-strip {
          background: #0b0e16;
          border: 1px solid #161c28;
          border-radius: 12px;
          padding: 1.15rem 1.75rem;
          margin-bottom: 2.75rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.25rem;
          font-size: 13px;
          color: #cbd5e1;
        }

        .trust-strip-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 500;
        }

        :global(.trust-icon) {
          color: #0284c7;
          flex-shrink: 0;
        }

        /* 4. BOTTOM BAR */
        .bottom-bar {
          border-top: 1px solid #161c28;
          padding-top: 1.75rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.25rem;
          font-size: 13px;
          color: #64748b;
        }

        .copyright-text {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .dot-sep {
          color: #334155;
        }

        .tagline {
          color: #94a3b8;
        }

        .bottom-links {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .bottom-link {
          color: #64748b;
          text-decoration: none;
          transition: color 0.15s ease;
        }

        .bottom-link:hover {
          color: #94a3b8;
        }

        .back-to-top-btn {
          background: transparent;
          border: 1px solid #1e2638;
          color: #94a3b8;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: inherit;
          transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease, transform 0.15s ease;
        }

        .back-to-top-btn:hover {
          background: #111622;
          border-color: #334155;
          color: #ffffff;
          transform: translateY(-1px);
        }

        /* RESPONSIVE */
        @media (max-width: 992px) {
          .cta-card {
            flex-direction: column;
            align-items: flex-start;
            padding: 2.25rem 2rem;
            gap: 1.75rem;
          }

          .footer-nav-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }

          .trust-strip {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
          }
        }

        @media (max-width: 600px) {
          .footer-nav-grid {
            grid-template-columns: 1fr;
            gap: 2.25rem;
          }

          .trust-strip {
            grid-template-columns: 1fr;
            gap: 0.85rem;
          }

          .bottom-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .cta-actions {
            width: 100%;
          }

          .cta-btn-primary,
          .cta-btn-secondary {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
}
