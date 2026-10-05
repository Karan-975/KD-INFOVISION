'use client';

import React from 'react';
import Link from 'next/link';
import {
  Linkedin,
  Facebook,
  Twitter,
  Github,
  ArrowUp,
  Mail,
  MapPin,
  Phone,
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
      {/* Background Ambient Animated Aurora (Subtle, sleek lighting inspired by Raycast & Contact Us theme) */}
      <div className="footer-aurora-bg" aria-hidden="true">
        <div className="aurora-orb aurora-1" />
        <div className="aurora-orb aurora-2" />
        <div className="aurora-orb aurora-3" />
        <div className="aurora-grid" />
      </div>

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

            {/* Sleek Social Icon Buttons */}
            <div className="social-links-row">
              <a
                href={settings?.socialLinkedin || 'https://www.linkedin.com/company/kd-infovision-consulting/about/'}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="social-btn"
              >
                <Linkedin size={16} />
              </a>

              <a
                href="https://www.facebook.com/kdinfovision"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="social-btn"
              >
                <Facebook size={16} />
              </a>

              <a
                href={settings?.socialTwitter || 'https://twitter.com'}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="social-btn"
              >
                <Twitter size={16} />
              </a>

              <a
                href={settings?.socialGithub || 'https://github.com'}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="social-btn"
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

          {/* Trust & Legal Column */}
          <div className="footer-links-col">
            <h4 className="col-heading">Trust &amp; Legal</h4>
            <ul className="links-list">
              {trustAndLegal.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="nav-link">
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
          background: #040612;
          color: #ffffff;
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          position: relative;
          padding: 5rem 0 2.5rem 0;
          overflow: hidden;
        }

        /* Subtle Top Border Line */
        .footer-top-border {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(157, 168, 251, 0.25) 25%, rgba(6, 182, 212, 0.25) 75%, transparent 100%);
        }

        /* Ambient Animated Aurora Background */
        .footer-aurora-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }

        .aurora-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(95px);
          opacity: 0.65;
          will-change: transform, opacity;
        }

        .aurora-1 {
          width: 520px;
          height: 320px;
          top: -40px;
          left: 15%;
          background: radial-gradient(circle, rgba(146, 102, 253, 0.16) 0%, rgba(124, 58, 237, 0.06) 50%, transparent 75%);
          animation: auroraFloat1 15s ease-in-out infinite alternate;
        }

        .aurora-2 {
          width: 480px;
          height: 300px;
          top: -20px;
          right: 18%;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, rgba(56, 189, 248, 0.04) 50%, transparent 75%);
          animation: auroraFloat2 19s ease-in-out infinite alternate;
        }

        .aurora-3 {
          width: 420px;
          height: 240px;
          bottom: 20px;
          left: 42%;
          background: radial-gradient(circle, rgba(157, 168, 251, 0.09) 0%, rgba(146, 102, 253, 0.03) 60%, transparent 75%);
          animation: auroraFloat3 13s ease-in-out infinite alternate;
        }

        .aurora-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px);
          background-size: 32px 32px;
          opacity: 0.4;
          mask-image: radial-gradient(circle at 50% 30%, black 40%, transparent 80%);
          WebkitMaskImage: radial-gradient(circle at 50% 30%, black 40%, transparent 80%);
        }

        @keyframes auroraFloat1 {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.55;
          }
          50% {
            transform: translate(35px, 25px) scale(1.12);
            opacity: 0.75;
          }
          100% {
            transform: translate(-30px, 12px) scale(0.96);
            opacity: 0.58;
          }
        }

        @keyframes auroraFloat2 {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.5;
          }
          50% {
            transform: translate(-45px, 20px) scale(1.1);
            opacity: 0.7;
          }
          100% {
            transform: translate(25px, -15px) scale(0.92);
            opacity: 0.52;
          }
        }

        @keyframes auroraFloat3 {
          0% {
            transform: translate(0, 0) scale(0.95);
            opacity: 0.45;
          }
          100% {
            transform: translate(30px, -20px) scale(1.14);
            opacity: 0.68;
          }
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
          color: #9DA8FB;
        }

        .contact-item a {
          color: rgba(255, 255, 255, 0.68);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .contact-item a:hover {
          color: #ffffff;
        }

        /* Social Icons */
        .social-links-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .social-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 9px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .social-btn:hover {
          background: rgba(146, 102, 253, 0.15);
          border-color: rgba(157, 168, 251, 0.4);
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(124, 58, 237, 0.2);
        }

        /* Column Headers & Links */
        .col-heading {
          font-size: 0.92rem;
          font-weight: 600;
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

        .nav-link {
          display: inline-flex;
          align-items: center;
          font-size: 0.87rem;
          color: rgba(255, 255, 255, 0.62);
          text-decoration: none;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          padding: 0.15rem 0;
        }

        .nav-link:hover {
          color: #ffffff;
          transform: translateX(3px);
        }

        .company-link {
          gap: 6px;
        }

        .cms-badge {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.5px;
          padding: 2px 6px;
          border-radius: 4px;
          background: rgba(146, 102, 253, 0.18);
          color: #9DA8FB;
          border: 1px solid rgba(157, 168, 251, 0.3);
        }

        /* Clean Bottom Bar */
        .bottom-bar {
          border-top: 1px solid rgba(255, 255, 255, 0.07);
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
          color: rgba(157, 168, 251, 0.7);
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
