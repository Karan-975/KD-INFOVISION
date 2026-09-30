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
        minHeight: 'clamp(520px, 46vw, 680px)',
        display: 'flex',
        alignItems: 'center',
        background: '#02122B',
        paddingTop: 'clamp(70px, 6vw, 85px)',
        paddingBottom: 'clamp(2.5rem, 4vw, 4rem)',
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

        {/* Focused Left-Side Typography Contrast Mask (Right side with towers and sunset remains 100% natural and unobstructed) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(2, 12, 32, 0.86) 0%, rgba(2, 12, 32, 0.68) 28%, rgba(2, 12, 32, 0.16) 48%, transparent 66%)',
          }}
        />

        {/* Ambient Radial Glow Behind Text Block */}
        <div
          style={{
            position: 'absolute',
            top: '25%',
            left: '3%',
            width: '500px',
            height: '380px',
            background: 'radial-gradient(circle, rgba(21, 138, 226, 0.14) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Subtle Top Gradient for Header Integration */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '65px',
            background: 'linear-gradient(to bottom, rgba(2, 12, 32, 0.4) 0%, transparent 100%)',
          }}
        />

        {/* Subtle Bottom Transition Gradient */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '70px',
            background: 'linear-gradient(to top, rgba(2, 12, 32, 0.7) 0%, transparent 100%)',
          }}
        />
      </div>

      {/* CONTENT LAYER */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
        }}
      >
        <div
          style={{
            // Constrain width to 540px so text never collides with the Oriental Pearl Tower or skyscrapers!
            maxWidth: '540px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          {/* Tagline Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '9999px',
              background: 'rgba(2, 14, 38, 0.68)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.35)',
              marginBottom: '1rem',
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: '#38BDF8',
                boxShadow: '0 0 8px #38BDF8',
              }}
            />
            <span
              style={{
                color: '#E2E8F0',
                fontSize: '0.74rem',
                fontWeight: 700,
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
              }}
            >
              Consulting <span style={{ color: '#38BDF8', margin: '0 3px' }}>|</span> Solutioning <span style={{ color: '#38BDF8', margin: '0 3px' }}>|</span> Digital
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              margin: 0,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
            }}
          >
            <span
              style={{
                display: 'block',
                fontSize: 'clamp(1.1rem, 1.5vw, 1.35rem)',
                fontWeight: 600,
                color: '#93C5FD',
                letterSpacing: '0.03em',
                textTransform: 'uppercase',
                marginBottom: '0.5rem',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.9)',
              }}
            >
              Your Partner For
            </span>
            <span
              style={{
                display: 'block',
                fontSize: 'clamp(1.6rem, 2.35vw, 2.25rem)',
                fontWeight: 800,
                lineHeight: 1.22,
                letterSpacing: '-0.025em',
                color: '#FFFFFF',
                textShadow: '0 2px 16px rgba(0, 0, 0, 0.95), 0 0 25px rgba(2, 12, 32, 0.8)',
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

          {/* Action CTA Button */}
          <div style={{ marginTop: '1.4rem' }}>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#027A48',
                color: '#FFFFFF',
                borderRadius: '9999px',
                padding: '0.68rem 1.65rem',
                fontSize: '0.885rem',
                fontWeight: 700,
                letterSpacing: '0.01em',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(2, 122, 72, 0.45)',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#026038';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(2, 122, 72, 0.55)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#027A48';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(2, 122, 72, 0.45)';
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
