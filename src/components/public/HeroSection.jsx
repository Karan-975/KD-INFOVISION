'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection({ slides = [] }) {
  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
    e.currentTarget.style.setProperty('--spot-opacity', '1');
  };

  const handlePointerEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
    e.currentTarget.style.setProperty('--spot-opacity', '1');
  };

  const handlePointerLeave = (e) => {
    e.currentTarget.style.setProperty('--spot-opacity', '0');
  };

  return (
    <section
      id="hero"
      className="hero-section"
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      style={{
        position: 'relative',
        minHeight: 'clamp(560px, 48vw, 740px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#02122B',
        paddingTop: 'clamp(80px, 7vw, 105px)',
        paddingBottom: 'clamp(3.5rem, 5vw, 5rem)',
        overflow: 'hidden',
        color: '#FFFFFF',
      }}
    >
      {/* SHANGHAI TWILIGHT SKYLINE BACKGROUND (FIXED / PARALLAX: DOES NOT SCROLL) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
          backgroundImage: "url('/images/hero_skyline.jpg')",
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundColor: '#02122B',
        }}
      />

      {/* Balanced Atmospheric Scrim (Ensures text is crisp while keeping the skyline vivid) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse 90% 75% at center, rgba(2, 12, 32, 0.60) 0%, rgba(2, 12, 32, 0.35) 50%, rgba(2, 12, 32, 0.12) 80%, transparent 100%)',
        }}
      />

      {/* Subtle Top & Bottom Gradient for Natural Screen Integration */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
          background:
            'linear-gradient(180deg, rgba(2, 12, 32, 0.50) 0%, rgba(2, 12, 32, 0.15) 45%, rgba(2, 12, 32, 0.70) 100%)',
        }}
      />

      {/* CENTERED CONTENT LAYER SPREAD ACROSS THE HERO SECTION */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 3,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {/* Tagline: Free in the center with distinct comfortable gap */}
          <div
            style={{
              color: '#CBD5E1',
              fontSize: 'clamp(0.85rem, 1.15vw, 1.05rem)',
              fontWeight: 700,
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              marginBottom: '1.4rem',
              textShadow: '0 2px 12px rgba(0, 0, 0, 0.9)',
            }}
          >
            Consulting <span style={{ color: '#38BDF8', margin: '0 8px' }}>|</span> Solutioning <span style={{ color: '#38BDF8', margin: '0 8px' }}>|</span> Digital
          </div>

          {/* Headline: Spread horizontally across hero section, authentic enterprise data analytics typography */}
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              margin: 0,
              lineHeight: 1.25,
              letterSpacing: '-0.025em',
              textAlign: 'center',
              width: '100%',
            }}
          >
            <span
              style={{
                display: 'block',
                fontSize: 'clamp(1.25rem, 1.8vw, 1.65rem)',
                fontWeight: 700,
                color: '#93C5FD',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '0.85rem',
                textShadow: '0 2px 14px rgba(0, 0, 0, 0.95)',
              }}
            >
              Your Partner For
            </span>
            <span
              style={{
                display: 'block',
                fontSize: 'clamp(2.35rem, 3.8vw, 3.65rem)',
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: '-0.025em',
                color: '#FFFFFF',
                textShadow:
                  '0 2px 20px rgba(0, 0, 0, 0.95), 0 0 35px rgba(2, 12, 32, 0.9)',
              }}
            >
              “Empowering Your Enterprise with Intelligent Data & Next-Gen Autonomous Agents”
            </span>
          </h1>

          {/* Centered High-Contrast Executive CTA Button */}
          <div style={{ marginTop: '2.4rem', display: 'flex', justifyContent: 'center' }}>
            <Link
              href="/contact"
              className="hero-cta-btn"
              id="hero-cta-button"
              style={{
                color: '#FFFFFF',
                textDecoration: 'none',
              }}
            >
              <span className="hero-btn-text">Get Started</span>
              <span className="hero-btn-icon-wrap">
                <ArrowRight size={16} strokeWidth={2.4} className="hero-btn-arrow" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        #hero {
          --x: -999px;
          --y: -999px;
          --spot-opacity: 0;
        }

        /* Cursor-following spotlight glow */
        #hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            340px circle at var(--x, -999px) var(--y, -999px),
            rgba(139, 124, 255, 0.16) 0%,
            transparent 100%
          );
          opacity: var(--spot-opacity, 0);
          transition: opacity 0.35s ease;
          pointer-events: none;
          z-index: 2;
        }

        /* Premium Executive Enterprise CTA Button */
        .hero-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(135deg, #158AE2 0%, #0D7CD4 50%, #085CA6 100%);
          color: #FFFFFF !important;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.35);
          padding: 0.85rem 2.2rem;
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          text-decoration: none !important;
          box-shadow: 0 6px 24px rgba(21, 138, 226, 0.45),
                      0 2px 8px rgba(0, 0, 0, 0.35),
                      inset 0 1px 0 rgba(255, 255, 255, 0.35);
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1),
                      background 0.28s ease,
                      box-shadow 0.28s ease,
                      border-color 0.28s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
        }

        .hero-cta-btn:link,
        .hero-cta-btn:visited,
        .hero-cta-btn:active {
          color: #FFFFFF !important;
          text-decoration: none !important;
        }

        .hero-cta-btn:hover {
          background: linear-gradient(135deg, #38BDF8 0%, #158AE2 50%, #0D7CD4 100%);
          border-color: rgba(255, 255, 255, 0.7);
          color: #FFFFFF !important;
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 10px 32px rgba(21, 138, 226, 0.65),
                      0 0 25px rgba(56, 189, 248, 0.45),
                      inset 0 1px 0 rgba(255, 255, 255, 0.6);
        }

        .hero-btn-text {
          color: #FFFFFF !important;
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        .hero-btn-icon-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.18);
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1),
                      background-color 0.28s ease;
        }

        .hero-cta-btn:hover .hero-btn-icon-wrap {
          background: rgba(255, 255, 255, 0.28);
          transform: translateX(4px);
        }

        :global(.hero-btn-arrow) {
          color: #FFFFFF !important;
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-cta-btn:hover :global(.hero-btn-arrow) {
          transform: translateX(2px);
        }

        @media (prefers-reduced-motion: reduce) {
          #hero::before {
            display: none !important;
            opacity: 0 !important;
            transition: none !important;
          }
          .hero-cta-btn,
          .hero-btn-icon-wrap,
          :global(.hero-btn-arrow) {
            transition: none !important;
            transform: none !important;
          }
          .hero-cta-btn:hover {
            transform: none !important;
          }
          .hero-cta-btn:hover .hero-btn-icon-wrap {
            transform: none !important;
          }
          .hero-cta-btn:hover :global(.hero-btn-arrow) {
            transform: none !important;
          }
        }

        @media (hover: none) {
          #hero::before {
            display: none !important;
            opacity: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
