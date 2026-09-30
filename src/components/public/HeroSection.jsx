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
                // Increased text size to commanding enterprise scale
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

          {/* Centered Transparent Outline Pill Button (No solid background) */}
          <div style={{ marginTop: '2.25rem', display: 'flex', justifyContent: 'center' }}>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                borderRadius: '9999px',
                border: '1.5px solid rgba(255, 255, 255, 0.85)',
                padding: '0.75rem 2.1rem',
                fontSize: '0.95rem',
                fontWeight: 600,
                letterSpacing: '0.02em',
                textDecoration: 'none',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                transition: 'all 0.22s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.borderColor = '#FFFFFF';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.85)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span>Get Started</span>
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
