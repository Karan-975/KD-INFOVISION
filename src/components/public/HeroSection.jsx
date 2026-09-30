'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Cpu,
  Database,
  Layers,
  BarChart3,
  Server,
  Cloud,
  Zap,
  ArrowRight,
} from 'lucide-react';

export default function HeroSection({ slides = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fallback defaults all unified to the uploaded Shanghai twilight skyline image
  const defaultCarouselSlides = [
    {
      id: 'transformation-ai',
      tag: 'CONSULTING • OUTSOURCING • DIGITAL',
      themeColor: '#38BDF8',
      headline: 'Your Partner For',
      headlineEmp: 'Digital Transformation, Data & AI Analytics.',
      subtext:
        'You do not need to create your Reports & Dashboard from scratch. Just upload your data and get solution in real time.',
      image: '/images/hero_skyline.jpg',
      alt: 'KD Infovision Shanghai Skyline at twilight representing global enterprise digital transformation',
      primaryBtn: 'Get Started',
      primaryUrl: '/contact',
      secBtn: 'Explore Solutions',
      secUrl: '/services',
    },
    {
      id: 'trusted-consulting',
      tag: 'STRATEGIC ADVISORY & CONSULTING',
      themeColor: '#34D399',
      headline: 'We Only Suggest What You NEED,',
      headlineEmp: 'Not What You LIKE.',
      subtext:
        'KDI Technology & Management Consulting — The KDI Framework provides efficient, high-quality solutions designed to meet the unique needs of our clients.',
      image: '/images/hero_skyline.jpg',
      alt: 'KD Infovision strategic technology consulting and solution architecture',
      primaryBtn: 'Talk to an Expert',
      primaryUrl: '/contact',
      secBtn: 'Our Capabilities',
      secUrl: '/services',
    },
    {
      id: 'certified-delivery',
      tag: 'STAFF AUGMENTATION & OUTSOURCING',
      themeColor: '#FBBF24',
      headline: 'KDI Certified Resources to Ensure',
      headlineEmp: 'Quick & Quality Delivery.',
      subtext:
        "KDI's Staff Augmentations, Trainings & Outsourcing Services — As a trusted advisor, KDI’s expert consultants deliver projects on time adhering to global standards.",
      image: '/images/hero_skyline.jpg',
      alt: 'KD Infovision certified enterprise delivery and global talent',
      primaryBtn: 'Schedule Consultation',
      primaryUrl: '/contact',
      secBtn: 'About KD Infovision',
      secUrl: '/about',
    },
  ];

  // Active database slides
  const activeDbSlides = Array.isArray(slides) && slides.length > 0
    ? slides.filter((s) => s.isActive !== false)
    : [];

  const carouselSlides = activeDbSlides.length > 0
    ? activeDbSlides.map((s, idx) => {
        const fallback = defaultCarouselSlides[idx % defaultCarouselSlides.length];
        return {
          id: s.id || `slide-${idx}`,
          tag: s.tag || fallback.tag,
          headline: s.headline || fallback.headline,
          headlineEmp: s.headlineEmp || fallback.headlineEmp,
          subtext: s.subtext || fallback.subtext,
          image: '/images/hero_skyline.jpg', // Strictly enforce this single hero image
          alt: `${s.headline || ''} ${s.headlineEmp || ''}`.trim() || fallback.alt,
          themeColor: fallback.themeColor,
          primaryBtn: s.primaryBtn || fallback.primaryBtn,
          primaryUrl: s.primaryUrl || fallback.primaryUrl,
          secBtn: s.secBtn || fallback.secBtn,
          secUrl: s.secUrl || fallback.secUrl,
        };
      })
    : defaultCarouselSlides;

  const total = carouselSlides.length;
  const active = carouselSlides[currentSlide] || carouselSlides[0];

  // Smooth automatic slide rotation for headlines every 6 seconds
  useEffect(() => {
    if (total <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % total);
    }, 6000);

    return () => clearInterval(interval);
  }, [total]);

  // Enterprise Technology Ecosystem
  const techEcosystem = [
    { name: 'Microsoft Azure', icon: Server, color: '#38BDF8' },
    { name: 'Amazon Web Services', icon: Cloud, color: '#FBBF24' },
    { name: 'Google Cloud Platform', icon: Cloud, color: '#60A5FA' },
    { name: 'Snowflake', icon: Database, color: '#38BDF8' },
    { name: 'Databricks', icon: Layers, color: '#F87171' },
    { name: 'Power BI', icon: BarChart3, color: '#FCD34D' },
    { name: 'Tableau', icon: BarChart3, color: '#FB923C' },
    { name: 'Apache Kafka', icon: Zap, color: '#E2E8F0' },
    { name: 'Enterprise AI & MLOps', icon: Cpu, color: '#34D399' },
  ];

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: 'clamp(820px, 92vh, 1050px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#02122B',
        paddingTop: 'clamp(85px, 10vh, 110px)',
        paddingBottom: '2rem',
        overflow: 'hidden',
        color: '#FFFFFF',
      }}
    >
      {/* SINGLE DEDICATED HERO IMAGE: Shanghai Twilight Skyline */}
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
          alt="KD Infovision Global Skyline"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 42%',
            opacity: 0.90,
            display: 'block',
          }}
        />

        {/* Directional Contrast Mask: keeps left-side typography crisp while letting the golden skyline glow on the right */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(2, 18, 43, 0.92) 0%, rgba(2, 18, 43, 0.72) 40%, rgba(2, 18, 43, 0.28) 72%, rgba(2, 18, 43, 0.10) 100%)',
          }}
        />

        {/* Top Vignette (blends into fixed navbar) */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '100px',
            background: 'linear-gradient(to bottom, rgba(2, 18, 43, 0.55) 0%, transparent 100%)',
          }}
        />

        {/* Bottom Vignette */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '110px',
            background: 'linear-gradient(to top, rgba(2, 18, 43, 0.92) 0%, transparent 100%)',
          }}
        />
      </div>

      {/* CONTENT LAYER DIRECTLY OVER THE BACKGROUND */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flex: 1,
        }}
      >
        {/* Content Block */}
        <div
          style={{
            maxWidth: '820px',
            marginTop: 'clamp(1.5rem, 4vh, 3rem)',
            marginBottom: 'clamp(4rem, 10vh, 8rem)',
          }}
        >
          {/* Tagline Badge */}
          {active.tag && (
            <div
              key={active.id + '-tag'}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
                animation: 'hero-text-in 0.35s ease forwards',
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: active.themeColor,
                  boxShadow: `0 0 8px ${active.themeColor}`,
                }}
              />
              <span>{active.tag}</span>
            </div>
          )}

          {/* Headline */}
          <h1
            key={active.id + '-headline'}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.35rem, 4.4vw, 4rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              marginBottom: '1.25rem',
              textShadow: '0 2px 18px rgba(0, 0, 0, 0.85)',
              animation: 'hero-text-in 0.4s ease forwards',
            }}
          >
            {active.headline}{' '}
            <span
              style={{
                color: active.themeColor,
                position: 'relative',
                display: 'inline-block',
                transition: 'color 0.3s ease',
                textShadow: `0 0 28px ${active.themeColor}88`,
              }}
            >
              {active.headlineEmp}
            </span>
          </h1>

          {/* Subtext */}
          <p
            key={active.id + '-subtext'}
            style={{
              fontSize: '1.15rem',
              lineHeight: 1.8,
              color: 'rgba(255, 255, 255, 0.95)',
              maxWidth: '700px',
              marginBottom: '2rem',
              textShadow: '0 2px 12px rgba(0, 0, 0, 0.85)',
              animation: 'hero-text-in 0.4s ease forwards',
            }}
          >
            {active.subtext}
          </p>

          {/* Action CTA Buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              flexWrap: 'wrap',
              animation: 'hero-text-in 0.4s ease forwards',
            }}
          >
            <Link
              href={active.primaryUrl || '/contact'}
              style={{
                backgroundColor: '#027A48',
                color: '#FFFFFF',
                borderRadius: '9999px',
                padding: '0.75rem 1.8rem',
                fontSize: '0.95rem',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(2, 122, 72, 0.4)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#026038';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(2, 122, 72, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#027A48';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(2, 122, 72, 0.4)';
              }}
            >
              <span>{active.primaryBtn || 'Get Started'}</span>
              <ArrowRight size={16} />
            </Link>

            <Link
              href={active.secUrl || '/services'}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#FFFFFF',
                borderRadius: '9999px',
                padding: '0.75rem 1.6rem',
                fontSize: '0.95rem',
                fontWeight: 600,
                textDecoration: 'none',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(8px)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.45)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>{active.secBtn || 'Explore Solutions'}</span>
            </Link>
          </div>
        </div>

        {/* BOTTOM DOCKED AREA: Ecosystem Ribbon & Slide Indicators */}
        <div style={{ width: '100%', marginTop: 'auto' }}>
          {/* Enterprise Cloud & Technology Ecosystem Ribbon */}
          <div
            style={{
              padding: '0.8rem 1.5rem',
              borderRadius: '14px',
              background: 'rgba(2, 18, 43, 0.65)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            }}
          >
            <div
              style={{
                fontSize: '0.7rem',
                fontWeight: 800,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.6)',
                marginBottom: '0.85rem',
                textAlign: 'center',
              }}
            >
              ENTERPRISE TECHNOLOGY PARTNERS & ECOSYSTEM
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                flexWrap: 'wrap',
              }}
            >
              {techEcosystem.map((tech, idx) => {
                const TechIcon = tech.icon;
                return (
                  <div
                    key={idx}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '5px 14px',
                      borderRadius: '9999px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#FFFFFF',
                      fontSize: '0.775rem',
                      fontWeight: 600,
                      letterSpacing: '0.2px',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <TechIcon size={14} style={{ color: tech.color }} />
                    <span>{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Minimalist Slide Progress Indicators */}
          {total > 1 && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginTop: '1.25rem',
                paddingLeft: '4px',
              }}
            >
              {carouselSlides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  style={{
                    width: currentSlide === idx ? '40px' : '16px',
                    height: '5px',
                    borderRadius: '4px',
                    background: currentSlide === idx ? active.themeColor : 'rgba(255, 255, 255, 0.35)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.35s ease',
                    padding: 0,
                    boxShadow: currentSlide === idx ? `0 0 10px ${active.themeColor}88` : 'none',
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes hero-text-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
