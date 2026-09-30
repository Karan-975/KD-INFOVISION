'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection({ slides = [] }) {
  // Respect user-specified single focused messaging
  const tag = 'Consulting | Solutioning | Digital';
  const headlinePrefix = 'Your Partner For';
  const headlineEmp = '“Empowering Your Enterprise with Intelligent Data & Next-Gen Autonomous Agents”';

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        // Proportional height matching the 2.2:1 aspect ratio of the 2560x1160 skyline photograph
        minHeight: 'clamp(560px, 48vw, 760px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: '#02122B',
        paddingTop: 'clamp(85px, 8vw, 110px)',
        paddingBottom: 'clamp(3rem, 5vw, 4.5rem)',
        overflow: 'hidden',
        color: '#FFFFFF',
      }}
    >
      {/* SHANGHAI TWILIGHT SKYLINE BACKGROUND (Crisp 2560px QHD Full-Size) */}
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

        {/* Focused Left-Side Typography Contrast Mask (Right side with towers and sunset remains 100% natural and vibrant) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(2, 14, 38, 0.90) 0%, rgba(2, 14, 38, 0.74) 34%, rgba(2, 14, 38, 0.22) 60%, transparent 80%)',
          }}
        />

        {/* Subtle Ambient Radial Highlight Behind Text */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '5%',
            width: '600px',
            height: '450px',
            background: 'radial-gradient(circle, rgba(21, 138, 226, 0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Subtle Top Gradient for Clean Header Integration */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '75px',
            background: 'linear-gradient(to bottom, rgba(2, 14, 38, 0.45) 0%, transparent 100%)',
          }}
        />

        {/* Subtle Bottom Transition Gradient */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '80px',
            background: 'linear-gradient(to top, rgba(2, 14, 38, 0.75) 0%, transparent 100%)',
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
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            maxWidth: '880px',
            paddingRight: '1rem',
          }}
        >
          {/* Tagline Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '7px 18px',
              borderRadius: '9999px',
              background: 'rgba(2, 14, 38, 0.72)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.22)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.35)',
              marginBottom: '1.25rem',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#38BDF8',
                boxShadow: '0 0 10px #38BDF8',
              }}
            />
            <span
              style={{
                color: '#F1F5F9',
                fontSize: '0.825rem',
                fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
              }}
            >
              Consulting <span style={{ color: '#38BDF8', margin: '0 4px' }}>|</span> Solutioning <span style={{ color: '#38BDF8', margin: '0 4px' }}>|</span> Digital
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              margin: 0,
              lineHeight: 1.16,
              letterSpacing: '-0.025em',
            }}
          >
            <span
              style={{
                display: 'block',
                fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)',
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '0.65rem',
                textShadow: '0 2px 16px rgba(0, 0, 0, 0.95)',
              }}
            >
              {headlinePrefix}
            </span>
            <span
              style={{
                display: 'block',
                fontSize: 'clamp(2.35rem, 4.3vw, 4.1rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                background: 'linear-gradient(135deg, #FFFFFF 0%, #E0F2FE 35%, #38BDF8 70%, #60A5FA 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter:
                  'drop-shadow(0 2px 18px rgba(0, 0, 0, 0.95)) drop-shadow(0 0 35px rgba(56, 189, 248, 0.35))',
              }}
            >
              {headlineEmp}
            </span>
          </h1>

          {/* Action CTA Button */}
          <div style={{ marginTop: '2.25rem' }}>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: '#027A48',
                color: '#FFFFFF',
                borderRadius: '9999px',
                padding: '0.85rem 2.1rem',
                fontSize: '0.975rem',
                fontWeight: 700,
                letterSpacing: '0.01em',
                textDecoration: 'none',
                boxShadow: '0 4px 18px rgba(2, 122, 72, 0.5), 0 2px 6px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#026038';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(2, 122, 72, 0.65)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#027A48';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 18px rgba(2, 122, 72, 0.5), 0 2px 6px rgba(0, 0, 0, 0.3)';
              }}
            >
              <span>Get Started</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
