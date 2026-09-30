'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection({ slides = [] }) {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        // Proportional height matching the 2.2:1 aspect ratio of the 2560x1160 skyline photograph
        minHeight: 'clamp(540px, 46vw, 720px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#02122B',
        paddingTop: 'clamp(75px, 6vw, 95px)',
        paddingBottom: 'clamp(3rem, 4.5vw, 4.5rem)',
        overflow: 'hidden',
        color: '#FFFFFF',
      }}
    >
      {/* SHANGHAI TWILIGHT SKYLINE BACKGROUND (Full 2560px QHD Sharp Resolution) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
          backgroundColor: '#02122B',
        }}
      >
        <img
          src="/images/hero_skyline.jpg"
          alt="KD Infovision Shanghai Skyline at twilight"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center',
            opacity: 1,
            display: 'block',
            imageRendering: '-webkit-optimize-contrast',
          }}
        />

        {/* Balanced Atmospheric Scrim (Ensures full-width centered text is crisp while keeping the skyline vivid) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 90% 75% at center, rgba(2, 12, 32, 0.65) 0%, rgba(2, 12, 32, 0.40) 50%, rgba(2, 12, 32, 0.15) 80%, transparent 100%)',
          }}
        />

        {/* Subtle Top & Bottom Gradient for Natural Integration */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(2, 12, 32, 0.55) 0%, rgba(2, 12, 32, 0.20) 45%, rgba(2, 12, 32, 0.65) 100%)',
          }}
        />
      </div>

      {/* CENTERED CONTENT LAYER SPREAD ACROSS THE HERO SECTION */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            // Spread across the full hero section
            maxWidth: '1080px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {/* Tagline: Free in the center (No box, no dot, managed gap) */}
          <div
            style={{
              color: '#CBD5E1',
              fontSize: 'clamp(0.85rem, 1.15vw, 1.05rem)',
              fontWeight: 700,
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              marginBottom: '0.45rem',
              textShadow: '0 2px 12px rgba(0, 0, 0, 0.9)',
            }}
          >
            Consulting <span style={{ color: '#38BDF8', margin: '0 8px' }}>|</span> Solutioning <span style={{ color: '#38BDF8', margin: '0 8px' }}>|</span> Digital
          </div>

          {/* Headline: Spread horizontally across hero section, size increased to balanced sweet spot */}
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
                fontSize: 'clamp(1.15rem, 1.6vw, 1.55rem)',
                fontWeight: 700,
                color: '#93C5FD',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: '0.65rem',
                textShadow: '0 2px 12px rgba(0, 0, 0, 0.95)',
              }}
            >
              Your Partner For
            </span>
            <span
              style={{
                display: 'block',
                // Sized between 2.05rem and 3.0rem (larger than 2.25rem, smaller than 4.1rem)
                fontSize: 'clamp(1.95rem, 3.0vw, 2.95rem)',
                fontWeight: 800,
                lineHeight: 1.22,
                letterSpacing: '-0.025em',
                color: '#FFFFFF',
                textShadow:
                  '0 2px 18px rgba(0, 0, 0, 0.95), 0 0 35px rgba(2, 12, 32, 0.9)',
              }}
            >
              “Empowering Your Enterprise with{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #38BDF8 0%, #60A5FA 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline',
                }}
              >
                Intelligent Data
              </span>{' '}
              & Next-Gen{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #38BDF8 0%, #60A5FA 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline',
                }}
              >
                Autonomous Agents
              </span>
              ”
            </span>
          </h1>

          {/* Centered Action CTA Button (Removed green, replaced with KD brand blue) */}
          <div style={{ marginTop: '1.75rem', display: 'flex', justifyContent: 'center' }}>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'linear-gradient(135deg, #158AE2 0%, #0A66C2 100%)',
                color: '#FFFFFF',
                borderRadius: '9999px',
                padding: '0.72rem 1.85rem',
                fontSize: '0.925rem',
                fontWeight: 700,
                letterSpacing: '0.01em',
                textDecoration: 'none',
                boxShadow: '0 4px 18px rgba(21, 138, 226, 0.45), 0 2px 6px rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #0D7CD4 0%, #0855A5 100%)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(21, 138, 226, 0.65)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #158AE2 0%, #0A66C2 100%)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 18px rgba(21, 138, 226, 0.45), 0 2px 6px rgba(0, 0, 0, 0.3)';
              }}
            >
              <span>Get Started</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
