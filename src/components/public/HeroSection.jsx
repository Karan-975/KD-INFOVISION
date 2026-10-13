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

          {/* Centered Transparent Outline Pill Button with Lift & Arrow Nudge Animation */}
          <div style={{ marginTop: '3.5rem', display: 'flex', justifyContent: 'center' }}>
            <Link
              href="/contact"
              className="hero-cta-btn"
              id="hero-cta-button"
            >
              <span>Get Started</span>
              <ArrowRight size={17} className="hero-btn-arrow" />
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

        .hero-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: transparent;
          color: #FFFFFF;
          border-radius: 9999px;
          border: 1.5px solid rgba(255, 255, 255, 0.85);
          padding: 0.75rem 2.1rem;
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          text-decoration: none;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1),
                      background-color 0.25s ease,
                      border-color 0.25s ease,
                      box-shadow 0.28s ease;
          cursor: pointer;
        }

        .hero-cta-btn:hover {
          background-color: rgba(255, 255, 255, 0.16);
          border-color: #FFFFFF;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(139, 124, 255, 0.25), 0 4px 12px rgba(255, 255, 255, 0.15);
        }

        :global(.hero-btn-arrow) {
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-cta-btn:hover :global(.hero-btn-arrow) {
          transform: translateX(5px);
        }

        @media (prefers-reduced-motion: reduce) {
          #hero::before {
            display: none !important;
            opacity: 0 !important;
            transition: none !important;
          }
          .hero-cta-btn,
          :global(.hero-btn-arrow) {
            transition: none !important;
            transform: none !important;
          }
          .hero-cta-btn:hover {
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
