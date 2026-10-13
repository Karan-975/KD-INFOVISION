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

          {/* Centered Transparent Outline Pill Button with Hover Shine Sweep */}
          <div style={{ marginTop: '3.6rem', display: 'flex', justifyContent: 'center' }}>
            <Link
              href="/contact"
              className="hero-cta-btn"
              id="hero-cta-button"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                borderRadius: '9999px',
                border: '1.5px solid rgba(255, 255, 255, 0.85)',
                padding: '0.8rem 2.25rem',
                fontSize: '0.95rem',
                fontWeight: 600,
                letterSpacing: '0.02em',
                textDecoration: 'none',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.16)';
                e.currentTarget.style.borderColor = '#FFFFFF';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow =
                  '0 0 25px rgba(255, 255, 255, 0.35), 0 8px 24px rgba(0, 0, 0, 0.35), inset 0 0 14px rgba(255, 255, 255, 0.18)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.85)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span
                className="hero-btn-text"
                style={{
                  color: '#FFFFFF',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  fontSize: '0.95rem',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                Get Started
              </span>
              <ArrowRight
                size={17}
                color="#FFFFFF"
                className="hero-btn-arrow"
                style={{ position: 'relative', zIndex: 2 }}
              />
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

        :global(.hero-cta-btn) {
          text-decoration: none !important;
        }

        :global(.hero-cta-btn:link),
        :global(.hero-cta-btn:visited),
        :global(.hero-cta-btn:active) {
          color: #FFFFFF !important;
          text-decoration: none !important;
        }

        /* Specular light beam that sweeps across the transparent button on hover */
        :global(.hero-cta-btn::after) {
          content: '';
          position: absolute;
          top: -60%;
          left: -130%;
          width: 65%;
          height: 220%;
          background: linear-gradient(
            105deg,
            transparent 15%,
            rgba(255, 255, 255, 0.5) 50%,
            transparent 85%
          );
          transform: rotate(25deg);
          transition: left 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
          z-index: 1;
        }

        :global(.hero-cta-btn:hover::after) {
          left: 150%;
        }

        :global(.hero-btn-arrow) {
          color: #FFFFFF !important;
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1);
        }

        :global(.hero-cta-btn:hover .hero-btn-arrow) {
          transform: translateX(5px);
        }

        @media (prefers-reduced-motion: reduce) {
          #hero::before,
          :global(.hero-cta-btn::after) {
            display: none !important;
            opacity: 0 !important;
            transition: none !important;
          }
          :global(.hero-cta-btn),
          :global(.hero-btn-arrow) {
            transition: none !important;
            transform: none !important;
          }
          :global(.hero-cta-btn:hover) {
            transform: none !important;
          }
          :global(.hero-cta-btn:hover .hero-btn-arrow) {
            transform: none !important;
          }
        }

        @media (hover: none) {
          #hero::before,
          :global(.hero-cta-btn::after) {
            display: none !important;
            opacity: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
