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
  Sparkles,
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
      {/* Top Animated Spectrum Accent Line */}
      <div className="spectrum-line" />

      <div className="container">
        {/* =====================================================================
            1. PRE-FOOTER CTA CARD: Vibrant, Animated, Premium & Colorful
            ===================================================================== */}
        <div className="cta-card">
          {/* Subtle Ambient Radial Backlight */}
          <div className="cta-ambient-glow" />

          <div className="cta-text-content">
            {/* Pill Eyebrow with Pulse */}
            <div className="cta-pill-row">
              <span className="cta-pill">
                <span className="live-dot" />
                ENTERPRISE ARCHITECTURE ADVISORY
              </span>
            </div>

            <h3 className="cta-title">
              Ready to Accelerate Your{' '}
              <span className="cta-gradient-text">
                AI &amp; Cloud Transformation?
              </span>
            </h3>

            <p className="cta-description">
              Consult with our certified data engineers and AI architects to modernize legacy systems, build resilient lakehouses, and unlock actionable intelligence.
            </p>

            {/* 3 Interactive Micro-Badges */}
            <div className="cta-badges-row">
              <span className="micro-badge cyan-badge">
                <Zap size={13} />
                Sub-Second Latency
              </span>
              <span className="micro-badge green-badge">
                <ShieldCheck size={13} />
                Zero-Trust Compliance
              </span>
              <span className="micro-badge yellow-badge">
                <Sparkles size={13} />
                Quantifiable ROI
              </span>
            </div>
          </div>

          <div className="cta-actions">
            <Link href="/contact" className="cta-btn-primary">
              <span>Schedule Architecture Briefing</span>
              <ArrowRight size={17} className="btn-arrow" />
            </Link>

            <Link href="/services" className="cta-btn-secondary">
              Explore Solutions
            </Link>
          </div>
        </div>

        {/* =====================================================================
            2. MAIN FOOTER NAVIGATION: Colorful & Alive with Smooth Animations
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
              <span className="brand-highlight">Consulting | Outsourcing | Digital</span> — Delivering advanced Data &amp; Analytics, Data Engineering, Agentic AI, and Digital Transformation solutions.
            </p>

            <div className="contact-details-list">
              <div className="contact-item">
                <MapPin size={17} className="contact-icon pin-icon" />
                <span>Shop No 9, Ananat Kanakar Marg, Bandra – East, Mumbai 400051</span>
              </div>

              <div className="contact-item">
                <Mail size={17} className="contact-icon mail-icon" />
                <a href={`mailto:${settings?.email || 'admin@kdinfovision.com'}`}>
                  {settings?.email || 'admin@kdinfovision.com'}
                </a>
              </div>

              <div className="contact-item">
                <Phone size={17} className="contact-icon phone-icon" />
                <a href={`tel:${(settings?.phone || '+91 9820536031').replace(/\s+/g, '')}`}>
                  {settings?.phone || '+91 9820536031'}
                </a>
              </div>
            </div>

            {/* Vibrant Brand Social Icons */}
            <div className="social-links-row">
              <a
                href={settings?.socialLinkedin || 'https://www.linkedin.com/company/kd-infovision-consulting/about/'}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="social-link linkedin-link"
              >
                <Linkedin size={17} />
              </a>

              <a
                href="https://www.facebook.com/kdinfovision"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="social-link facebook-link"
              >
                <Facebook size={17} />
              </a>

              <a
                href={settings?.socialTwitter || 'https://twitter.com'}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="social-link twitter-link"
              >
                <Twitter size={17} />
              </a>

              <a
                href={settings?.socialGithub || 'https://github.com'}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="social-link github-link"
              >
                <Github size={17} />
              </a>
            </div>
          </div>

          {/* Solutions Column (Electric Cyan) */}
          <div className="footer-links-col">
            <div className="col-header-wrap">
              <span className="col-accent-bar bar-cyan" />
              <h4 className="col-heading heading-cyan">Solutions</h4>
            </div>
            <ul className="links-list">
              {solutions.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="nav-link link-cyan">
                    <span className="link-hover-dash" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column (Emerald Mint Green) */}
          <div className="footer-links-col">
            <div className="col-header-wrap">
              <span className="col-accent-bar bar-green" />
              <h4 className="col-heading heading-green">Industries</h4>
            </div>
            <ul className="links-list">
              {industries.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="nav-link link-green">
                    <span className="link-hover-dash" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column (Vibrant Violet / Purple) */}
          <div className="footer-links-col">
            <div className="col-header-wrap">
              <span className="col-accent-bar bar-purple" />
              <h4 className="col-heading heading-purple">Company</h4>
            </div>
            <ul className="links-list">
              {company.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="nav-link link-purple company-link">
                    <span className="link-hover-dash" />
                    <span>{item.name}</span>
                    {item.isSpecial && <span className="cms-badge">CMS</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* =====================================================================
            3. MULTI-COLOR TRUST STRIP: Interactive with Hover Glows
            ===================================================================== */}
        <div className="trust-strip">
          <div className="trust-strip-item item-uptime">
            <span className="trust-dot-pulse" />
            <span className="trust-text">99.98% Enterprise Uptime SLA</span>
          </div>

          <div className="trust-strip-item item-soc">
            <ShieldCheck size={17} className="trust-icon icon-cyan" />
            <span className="trust-text">SOC 2 Type II &amp; ISO 27001 Ready</span>
          </div>

          <div className="trust-strip-item item-sre">
            <Zap size={17} className="trust-icon icon-amber" />
            <span className="trust-text">24/7 SRE Telemetry &amp; Response</span>
          </div>

          <div className="trust-strip-item item-ip">
            <Lock size={17} className="trust-icon icon-purple" />
            <span className="trust-text">100% Client Code &amp; IP Ownership</span>
          </div>
        </div>

        {/* =====================================================================
            4. BOTTOM BAR: Animated Back-to-Top & Legal Links
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
              <ArrowUp size={14} className="up-arrow" />
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================================
          CSS: Vibrant Colors, Smooth Transitions, Dynamic Animations
          ===================================================================== */}
      <style jsx>{`
        .kd-footer {
          background: #06080e;
          color: #ffffff;
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          position: relative;
          padding: 4.5rem 0 2rem 0;
          overflow: hidden;
        }

        /* Top Spectrum Shimmer Line */
        .spectrum-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #00C8FF 0%, #0DB16A 25%, #fffa65 50%, #B38BFF 75%, #00C8FF 100%);
          background-size: 200% 100%;
          animation: spectrumShift 6s linear infinite;
          box-shadow: 0 0 12px rgba(0, 200, 255, 0.4);
        }

        @keyframes spectrumShift {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }

        .container {
          max-width: 1260px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        /* 1. PRE-FOOTER CTA CARD */
        .cta-card {
          position: relative;
          background: linear-gradient(135deg, rgba(8, 22, 48, 0.85) 0%, rgba(13, 10, 32, 0.85) 50%, rgba(6, 26, 32, 0.85) 100%);
          border: 1px solid rgba(0, 200, 255, 0.3);
          border-radius: 22px;
          padding: 3.25rem 3.5rem;
          margin-bottom: 4.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2.5rem;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(14px);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cta-card:hover {
          border-color: rgba(0, 200, 255, 0.6);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.65), 0 0 35px rgba(0, 200, 255, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.3);
          transform: translateY(-3px);
        }

        /* Soft Breathing Ambient Glow */
        .cta-ambient-glow {
          position: absolute;
          top: -40%;
          right: -10%;
          width: 450px;
          height: 350px;
          background: radial-gradient(circle, rgba(0, 200, 255, 0.15) 0%, rgba(13, 177, 106, 0.08) 50%, transparent 70%);
          pointer-events: none;
          animation: pulseAmbient 7s ease-in-out infinite alternate;
        }

        @keyframes pulseAmbient {
          0% {
            transform: scale(0.9) translate(0, 0);
            opacity: 0.7;
          }
          100% {
            transform: scale(1.15) translate(-20px, 15px);
            opacity: 1;
          }
        }

        .cta-text-content {
          max-width: 650px;
          position: relative;
          z-index: 2;
        }

        .cta-pill-row {
          margin-bottom: 0.85rem;
        }

        .cta-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #fffa65;
          background: rgba(255, 250, 101, 0.1);
          border: 1px solid rgba(255, 250, 101, 0.3);
          padding: 5px 14px;
          border-radius: 20px;
        }

        .live-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #fffa65;
          box-shadow: 0 0 8px #fffa65;
          animation: livePulse 2s ease-in-out infinite;
        }

        @keyframes livePulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.4);
            opacity: 0.5;
          }
        }

        .cta-title {
          font-size: clamp(1.65rem, 2.6vw, 2.25rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.22;
          letter-spacing: -0.02em;
          margin: 0 0 0.85rem 0;
        }

        .cta-gradient-text {
          background: linear-gradient(90.21deg, #00C8FF 0%, #00F7FF 40%, #0DB16A 90%);
          WebkitBackgroundClip: text;
          WebkitTextFillColor: transparent;
          display: inline-block;
        }

        .cta-description {
          font-size: 1rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.78);
          margin: 0 0 1.5rem 0;
        }

        .cta-badges-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .micro-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 14px;
          transition: transform 0.2s ease;
        }

        .micro-badge:hover {
          transform: translateY(-1px);
        }

        .cyan-badge {
          background: rgba(0, 200, 255, 0.12);
          border: 1px solid rgba(0, 200, 255, 0.35);
          color: #00F7FF;
        }

        .green-badge {
          background: rgba(13, 177, 106, 0.12);
          border: 1px solid rgba(13, 177, 106, 0.35);
          color: #34D399;
        }

        .yellow-badge {
          background: rgba(255, 250, 101, 0.1);
          border: 1px solid rgba(255, 250, 101, 0.3);
          color: #fffa65;
        }

        /* Actions Buttons */
        .cta-actions {
          display: flex;
          align-items: center;
          gap: 1.15rem;
          flex-shrink: 0;
          flex-wrap: wrap;
          position: relative;
          z-index: 2;
        }

        .cta-btn-primary {
          background: linear-gradient(93.05deg, #1EC9F2 -14.26%, #0DB16A 85.74%);
          color: #ffffff;
          font-size: 14px;
          font-weight: 600;
          padding: 13px 26px;
          border-radius: 40px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 4px 18px rgba(30, 201, 242, 0.35);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cta-btn-primary:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 28px rgba(30, 201, 242, 0.55);
          filter: brightness(1.08);
        }

        :global(.btn-arrow) {
          transition: transform 0.25s ease;
        }

        .cta-btn-primary:hover :global(.btn-arrow) {
          transform: translateX(4px);
        }

        .cta-btn-secondary {
          background: rgba(0, 200, 255, 0.06);
          color: #00F7FF;
          font-size: 14px;
          font-weight: 600;
          padding: 12px 24px;
          border-radius: 40px;
          text-decoration: none;
          border: 1px solid rgba(0, 200, 255, 0.35);
          transition: all 0.25s ease;
          display: inline-flex;
          align-items: center;
        }

        .cta-btn-secondary:hover {
          background: rgba(0, 200, 255, 0.16);
          border-color: #00F7FF;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 4px 18px rgba(0, 200, 255, 0.25);
        }

        /* 2. FOOTER NAVIGATION GRID */
        .footer-nav-grid {
          display: grid;
          grid-template-columns: 2fr 1.05fr 1.05fr 1.15fr;
          gap: 3.5rem;
          margin-bottom: 3.5rem;
        }

        .footer-brand-col {
          display: flex;
          flex-direction: column;
        }

        .footer-logo-link {
          display: inline-block;
          margin-bottom: 1.35rem;
          text-decoration: none;
          transition: transform 0.2s ease;
        }

        .footer-logo-link:hover {
          transform: scale(1.03);
        }

        .footer-logo-img {
          height: 42px;
          width: auto;
          object-fit: contain;
          display: block;
        }

        .brand-summary {
          font-size: 14px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.7);
          max-width: 360px;
          margin: 0 0 1.75rem 0;
        }

        .brand-highlight {
          color: #00F7FF;
          font-weight: 600;
        }

        .contact-details-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 1.85rem;
          font-size: 13.5px;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.5;
          transition: transform 0.2s ease;
        }

        .contact-item:hover {
          transform: translateX(3px);
        }

        .contact-item a {
          color: rgba(255, 255, 255, 0.75);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .contact-item a:hover {
          color: #00F7FF;
        }

        :global(.contact-icon) {
          flex-shrink: 0;
          margin-top: 2px;
          transition: transform 0.2s ease;
        }

        .contact-item:hover :global(.contact-icon) {
          transform: scale(1.15);
        }

        :global(.pin-icon) {
          color: #FB923C;
        }

        :global(.mail-icon) {
          color: #38BDF8;
        }

        :global(.phone-icon) {
          color: #34D399;
        }

        /* Social Icons */
        .social-links-row {
          display: flex;
          gap: 10px;
        }

        .social-link {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: #0d121c;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #94a3b8;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .linkedin-link:hover {
          background: #0A66C2;
          border-color: #0A66C2;
          color: #ffffff;
          transform: translateY(-3px) scale(1.08);
          box-shadow: 0 6px 18px rgba(10, 102, 194, 0.45);
        }

        .facebook-link:hover {
          background: #1877F2;
          border-color: #1877F2;
          color: #ffffff;
          transform: translateY(-3px) scale(1.08);
          box-shadow: 0 6px 18px rgba(24, 119, 242, 0.45);
        }

        .twitter-link:hover {
          background: #00C8FF;
          border-color: #00C8FF;
          color: #ffffff;
          transform: translateY(-3px) scale(1.08);
          box-shadow: 0 6px 18px rgba(0, 200, 255, 0.45);
        }

        .github-link:hover {
          background: #8B5CF6;
          border-color: #8B5CF6;
          color: #ffffff;
          transform: translateY(-3px) scale(1.08);
          box-shadow: 0 6px 18px rgba(139, 92, 246, 0.45);
        }

        /* Nav Columns */
        .footer-links-col {
          display: flex;
          flex-direction: column;
        }

        .col-header-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 1.35rem;
        }

        .col-accent-bar {
          width: 4px;
          height: 16px;
          border-radius: 4px;
        }

        .bar-cyan {
          background: #00C8FF;
          box-shadow: 0 0 8px #00C8FF;
        }

        .bar-green {
          background: #0DB16A;
          box-shadow: 0 0 8px #0DB16A;
        }

        .bar-purple {
          background: #B38BFF;
          box-shadow: 0 0 8px #B38BFF;
        }

        .col-heading {
          font-size: 13px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          margin: 0;
        }

        .heading-cyan {
          color: #00C8FF;
        }

        .heading-green {
          color: #34D399;
        }

        .heading-purple {
          color: #B38BFF;
        }

        .links-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }

        .nav-link {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          line-height: 1.5;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          position: relative;
          transition: all 0.25s ease;
        }

        .link-hover-dash {
          width: 0;
          height: 2px;
          margin-right: 0;
          border-radius: 2px;
          transition: all 0.25s ease;
          opacity: 0;
        }

        .nav-link:hover .link-hover-dash {
          width: 10px;
          margin-right: 8px;
          opacity: 1;
        }

        .link-cyan .link-hover-dash {
          background: #00F7FF;
          box-shadow: 0 0 6px #00F7FF;
        }

        .link-cyan:hover {
          color: #00F7FF;
          transform: translateX(4px);
        }

        .link-green .link-hover-dash {
          background: #34D399;
          box-shadow: 0 0 6px #34D399;
        }

        .link-green:hover {
          color: #34D399;
          transform: translateX(4px);
        }

        .link-purple .link-hover-dash {
          background: #C084FC;
          box-shadow: 0 0 6px #C084FC;
        }

        .link-purple:hover {
          color: #C084FC;
          transform: translateX(4px);
        }

        .company-link {
          gap: 8px;
        }

        .cms-badge {
          background: rgba(245, 158, 11, 0.15);
          border: 1px solid rgba(245, 158, 11, 0.4);
          color: #FBBF24;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.5px;
          padding: 2px 7px;
          border-radius: 6px;
          box-shadow: 0 0 8px rgba(245, 158, 11, 0.25);
        }

        /* 3. TRUST STRIP */
        .trust-strip {
          background: rgba(13, 18, 30, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 1.25rem 2rem;
          margin-bottom: 2.75rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          backdrop-filter: blur(10px);
        }

        .trust-strip-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13.5px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.85);
          transition: transform 0.25s ease;
        }

        .trust-strip-item:hover {
          transform: translateY(-2px);
        }

        .trust-dot-pulse {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 10px #10B981;
          animation: dotPulse 2s infinite ease-in-out;
        }

        @keyframes dotPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.6;
          }
        }

        :global(.trust-icon) {
          flex-shrink: 0;
          transition: transform 0.25s ease;
        }

        .trust-strip-item:hover :global(.trust-icon) {
          transform: scale(1.2);
        }

        :global(.icon-cyan) {
          color: #00F7FF;
          filter: drop-shadow(0 0 6px rgba(0, 247, 255, 0.4));
        }

        :global(.icon-amber) {
          color: #F59E0B;
          filter: drop-shadow(0 0 6px rgba(245, 158, 11, 0.4));
        }

        :global(.icon-purple) {
          color: #A78BFA;
          filter: drop-shadow(0 0 6px rgba(167, 139, 250, 0.4));
        }

        /* 4. BOTTOM BAR */
        .bottom-bar {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.6);
        }

        .copyright-text {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .dot-sep {
          color: rgba(255, 255, 255, 0.3);
        }

        .tagline {
          color: #00F7FF;
          font-weight: 600;
        }

        .bottom-links {
          display: flex;
          align-items: center;
          gap: 1.75rem;
        }

        .bottom-link {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: all 0.2s ease;
          position: relative;
        }

        .bottom-link:hover {
          color: #ffffff;
        }

        .back-to-top-btn {
          background: rgba(0, 200, 255, 0.08);
          border: 1px solid rgba(0, 200, 255, 0.3);
          color: #00F7FF;
          padding: 7px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: inherit;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .back-to-top-btn:hover {
          background: linear-gradient(93.05deg, #1EC9F2 -14.26%, #0DB16A 85.74%);
          border-color: transparent;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(30, 201, 242, 0.4);
        }

        :global(.up-arrow) {
          transition: transform 0.25s ease;
        }

        .back-to-top-btn:hover :global(.up-arrow) {
          transform: translateY(-2px);
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .cta-card {
            flex-direction: column;
            align-items: flex-start;
            padding: 2.5rem 2rem;
            gap: 2rem;
          }

          .footer-nav-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }

          .trust-strip {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.25rem;
          }
        }

        @media (max-width: 640px) {
          .footer-nav-grid {
            grid-template-columns: 1fr;
            gap: 2.25rem;
          }

          .trust-strip {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .bottom-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.25rem;
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
