'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowUp,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import FooterBackgroundAnimation from './FooterBackgroundAnimation';

// Authentic Official Brand SVGs
function LinkedInLogo({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.66 1.66 0 1 0 0 3.32 1.66 1.66 0 0 0 0-3.32Z" />
    </svg>
  );
}

function FacebookLogo({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function XLogo({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function GithubLogo({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

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

  const trustAndLegal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'SOC 2 & ISO Ready', href: '/about' },
    { name: '99.98% Enterprise SLA', href: '/services' },
    { name: 'Client Code & IP Ownership', href: '/services' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="kd-footer">
      {/* Dynamic Professional Data & AI Constellation Canvas Animation */}
      <FooterBackgroundAnimation />

      {/* Subtle Top Accent Divider */}
      <div className="footer-top-border" />

      <div className="container">
        {/* Main Clean Multi-Column Navigation */}
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
              Delivering advanced Data &amp; Analytics, Data Engineering, Agentic AI, and Digital Transformation solutions.
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

            {/* Authentic Social Brand Logos */}
            <div className="social-links-row">
              <a
                href={settings?.socialLinkedin || 'https://www.linkedin.com/company/kd-infovision-consulting/about/'}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="social-btn social-btn-linkedin"
                title="LinkedIn"
              >
                <LinkedInLogo size={16} />
              </a>

              <a
                href="https://www.facebook.com/kdinfovision"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="social-btn social-btn-facebook"
                title="Facebook"
              >
                <FacebookLogo size={16} />
              </a>

              <a
                href={settings?.socialTwitter || 'https://twitter.com'}
                target="_blank"
                rel="noreferrer"
                aria-label="X (formerly Twitter)"
                className="social-btn social-btn-x"
                title="X"
              >
                <XLogo size={14} />
              </a>

              <a
                href={settings?.socialGithub || 'https://github.com'}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="social-btn social-btn-github"
                title="GitHub"
              >
                <GithubLogo size={16} />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="footer-links-col">
            <h4 className="col-heading">Solutions</h4>
            <ul className="links-list">
              {solutions.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="nav-link"
                    style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none' }}
                  >
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
                  <Link
                    href={item.href}
                    className="nav-link"
                    style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none' }}
                  >
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
                  <Link
                    href={item.href}
                    className={`nav-link ${item.isSpecial ? 'admin-cms-link' : ''}`}
                    style={
                      item.isSpecial
                        ? { color: '#FFFFFF', fontWeight: 700, textDecoration: 'none' }
                        : { color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none' }
                    }
                  >
                    <span>{item.name}</span>
                    {item.isSpecial && <span className="cms-badge">CMS</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust & Legal Column */}
          <div className="footer-links-col">
            <h4 className="col-heading">Trust &amp; Legal</h4>
            <ul className="links-list">
              {trustAndLegal.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="nav-link"
                    style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none' }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Clean, Sleek Bottom Bar */}
        <div className="bottom-bar">
          <div className="copyright-text">
            <span>&copy; {currentYear} KD Infovision &amp; Consulting Pvt Ltd. All rights reserved.</span>
            <span className="dot-sep">&bull;</span>
            <span className="tagline">Consulting | Outsourcing | Digital</span>
          </div>

          <div className="bottom-actions">
            <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to top">
              <span>Back to Top</span>
              <ArrowUp size={14} className="up-arrow" />
            </button>
          </div>
        </div>
      </div>

      {/* Styled JSX: Clean, Simple, Professional (Matching Raycast Reference & Contact Us Obsidian Theme) */}
      <style jsx>{`
        .kd-footer {
          background: linear-gradient(180deg, #050811 0%, #020409 100%);
          color: #ffffff;
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          position: relative;
          padding: 5.5rem 0 2.5rem 0;
          overflow: hidden;
        }

        /* Subtle Top Border Line */
        .footer-top-border {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.12) 25%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.12) 75%, transparent 100%);
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 28px;
          position: relative;
          z-index: 2;
        }

        /* Multi-Column Navigation Grid */
        .footer-nav-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
          gap: 3.5rem;
          margin-bottom: 4rem;
        }

        /* Brand Column */
        .footer-brand-col {
          display: flex;
          flex-direction: column;
        }

        .footer-logo-link {
          display: inline-block;
          margin-bottom: 1.25rem;
        }

        .footer-logo-img {
          height: 38px;
          width: auto;
          display: block;
          filter: drop-shadow(0 2px 10px rgba(0, 210, 255, 0.28));
        }

        .brand-summary {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.62);
          line-height: 1.65;
          margin: 0 0 1.5rem 0;
          max-width: 330px;
        }

        .contact-details-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.75rem;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.84rem;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.5;
        }

        .contact-item :global(.contact-icon) {
          flex-shrink: 0;
          margin-top: 2px;
          color: rgba(255, 255, 255, 0.75);
        }

        .contact-item a {
          color: rgba(255, 255, 255, 0.68);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .contact-item a:hover {
          color: #ffffff;
        }

        /* Social Icons - Clean, Bold, Real Platform Logos */
        .social-links-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .social-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 9px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: #ffffff;
          text-decoration: none;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }

        .social-btn:hover {
          transform: translateY(-2px);
        }

        .social-btn-linkedin:hover {
          background: #0A66C2;
          border-color: #0A66C2;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(10, 102, 194, 0.45);
        }

        .social-btn-facebook:hover {
          background: #1877F2;
          border-color: #1877F2;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(24, 119, 242, 0.45);
        }

        .social-btn-x:hover {
          background: #ffffff;
          border-color: #ffffff;
          color: #000000;
          box-shadow: 0 4px 14px rgba(255, 255, 255, 0.3);
        }

        .social-btn-github:hover {
          background: #24292F;
          border-color: rgba(255, 255, 255, 0.35);
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.6);
        }

        /* Column Headers & Links */
        .col-heading {
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.02em;
          margin: 0 0 1.25rem 0;
        }

        .links-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        /* Category Links: exactly match the marked content color */
        .links-list li :global(a),
        .links-list :global(.nav-link),
        .footer-links-col :global(.nav-link),
        .footer-links-col :global(a) {
          display: inline-flex;
          align-items: center;
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.65) !important;
          text-decoration: none !important;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          padding: 0.18rem 0;
          line-height: 1.5;
        }

        .links-list li :global(a:visited),
        .footer-links-col :global(a:visited) {
          color: rgba(255, 255, 255, 0.65) !important;
          text-decoration: none !important;
        }

        /* On hover: matches the heading (bright crisp white #ffffff, font-weight 600) */
        .links-list li :global(a:hover),
        .links-list :global(.nav-link:hover),
        .footer-links-col :global(.nav-link:hover) {
          color: #ffffff !important;
          font-weight: 600 !important;
          transform: translateX(4px);
          text-decoration: none !important;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.45);
        }

        /* Admin CMS Portal: Bold in white color, simple & professional */
        .links-list li :global(.admin-cms-link),
        .links-list :global(.admin-cms-link),
        .footer-links-col :global(a.admin-cms-link) {
          color: #ffffff !important;
          font-weight: 700 !important;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .links-list li :global(.admin-cms-link:visited),
        .footer-links-col :global(a.admin-cms-link:visited) {
          color: #ffffff !important;
        }

        .links-list li :global(.admin-cms-link:hover),
        .footer-links-col :global(a.admin-cms-link:hover) {
          color: #ffffff !important;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
          transform: translateX(4px);
        }

        .cms-badge {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.8px;
          padding: 2px 7px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.28);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
          transition: all 0.2s ease;
        }

        .links-list li :global(.admin-cms-link:hover) .cms-badge,
        .footer-links-col :global(a.admin-cms-link:hover) .cms-badge {
          background: #ffffff;
          color: #050811;
          border-color: #ffffff;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.35);
        }

        /* Clean Bottom Bar */
        .bottom-bar {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.25rem;
        }

        .copyright-text {
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.5);
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }

        .dot-sep {
          color: rgba(255, 255, 255, 0.3);
        }

        .tagline {
          color: rgba(255, 255, 255, 0.6);
        }

        .bottom-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .back-to-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.68);
          font-size: 0.8rem;
          font-weight: 500;
          padding: 6px 14px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.25s ease;
          font-family: inherit;
        }

        .back-to-top-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
          color: #ffffff;
          transform: translateY(-2px);
        }

        .back-to-top-btn:hover :global(.up-arrow) {
          transform: translateY(-2px);
        }

        .back-to-top-btn :global(.up-arrow) {
          transition: transform 0.2s ease;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .footer-nav-grid {
            grid-template-columns: 1.5fr 1fr 1fr;
            gap: 2.5rem;
          }
          .footer-brand-col {
            grid-column: span 3;
          }
        }

        @media (max-width: 768px) {
          .kd-footer {
            padding: 3.5rem 0 2rem 0;
          }
          .footer-nav-grid {
            grid-template-columns: 1fr;
            gap: 2.25rem;
            margin-bottom: 2.5rem;
          }
          .footer-brand-col {
            grid-column: span 1;
          }
          .bottom-bar {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
}
