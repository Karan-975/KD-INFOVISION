'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, TrendingUp, Cpu, Cloud, CheckCircle2 } from 'lucide-react';
import HeroBackgroundAnimation from './HeroBackgroundAnimation';

export default function HeroSection({ slides = [] }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = slides.length || 1;

  useEffect(() => {
    if (isPaused || total <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused, total]);

  const activeSlide = slides[current] || {
    tag: 'AI & Data Consulting',
    headline: 'Turning Data Into Your',
    headlineEmp: 'Competitive Advantage',
    subtext: 'KD Infovision empowers enterprises to build AI-powered solutions, unlock business intelligence, and accelerate digital transformation.',
    primaryBtn: 'Explore Services',
    primaryUrl: '#solutions',
    secBtn: 'Talk to an Expert →',
    secUrl: '#contact',
    svgType: 'analytics',
  };

  const renderVisualizer = (type) => {
    if (type === 'neural') {
      return (
        <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '520px' }}>
          <rect x="20" y="20" width="460" height="360" rx="24" fill="rgba(15, 35, 71, 0.6)" stroke="rgba(61, 155, 233, 0.25)" strokeWidth="1.5" />
          
          {/* Top Badge */}
          <rect x="44" y="44" width="160" height="36" rx="10" fill="rgba(74, 222, 128, 0.12)" stroke="rgba(74, 222, 128, 0.3)" strokeWidth="1" />
          <circle cx="62" cy="62" r="5" fill="#4ADE80" />
          <text x="76" y="66" fill="#4ADE80" fontSize="13" fontFamily="Plus Jakarta Sans" fontWeight="800">94.7% ML Accuracy</text>
          
          {/* Neural Nodes - Input */}
          <circle cx="90" cy="140" r="18" fill="rgba(61, 155, 233, 0.15)" stroke="#3D9BE9" strokeWidth="2" />
          <circle cx="90" cy="215" r="18" fill="rgba(61, 155, 233, 0.15)" stroke="#3D9BE9" strokeWidth="2" />
          <circle cx="90" cy="290" r="18" fill="rgba(61, 155, 233, 0.15)" stroke="#3D9BE9" strokeWidth="2" />
          
          {/* Hidden Layer 1 */}
          <circle cx="210" cy="115" r="18" fill="rgba(61, 155, 233, 0.25)" stroke="#5EC3F5" strokeWidth="2" />
          <circle cx="210" cy="180" r="18" fill="rgba(61, 155, 233, 0.25)" stroke="#5EC3F5" strokeWidth="2" />
          <circle cx="210" cy="245" r="18" fill="rgba(61, 155, 233, 0.25)" stroke="#5EC3F5" strokeWidth="2" />
          <circle cx="210" cy="310" r="18" fill="rgba(61, 155, 233, 0.25)" stroke="#5EC3F5" strokeWidth="2" />

          {/* Hidden Layer 2 */}
          <circle cx="330" cy="140" r="18" fill="rgba(61, 155, 233, 0.3)" stroke="#3D9BE9" strokeWidth="2" />
          <circle cx="330" cy="215" r="18" fill="rgba(61, 155, 233, 0.3)" stroke="#3D9BE9" strokeWidth="2" />
          <circle cx="330" cy="290" r="18" fill="rgba(61, 155, 233, 0.3)" stroke="#3D9BE9" strokeWidth="2" />

          {/* Output Layer */}
          <circle cx="430" cy="175" r="22" fill="url(#neuralOutGrad1)" stroke="#5EC3F5" strokeWidth="2.5" />
          <circle cx="430" cy="255" r="22" fill="url(#neuralOutGrad2)" stroke="#4ADE80" strokeWidth="2.5" />

          {/* Connections */}
          <line x1="108" y1="140" x2="192" y2="115" stroke="rgba(61, 155, 233, 0.3)" strokeWidth="1.5" />
          <line x1="108" y1="140" x2="192" y2="180" stroke="rgba(61, 155, 233, 0.3)" strokeWidth="1.5" />
          <line x1="108" y1="215" x2="192" y2="180" stroke="rgba(94, 195, 245, 0.6)" strokeWidth="2" />
          <line x1="108" y1="215" x2="192" y2="245" stroke="rgba(61, 155, 233, 0.3)" strokeWidth="1.5" />
          <line x1="108" y1="290" x2="192" y2="245" stroke="rgba(61, 155, 233, 0.3)" strokeWidth="1.5" />
          <line x1="108" y1="290" x2="192" y2="310" stroke="rgba(61, 155, 233, 0.3)" strokeWidth="1.5" />

          <line x1="228" y1="115" x2="312" y2="140" stroke="rgba(61, 155, 233, 0.3)" strokeWidth="1.5" />
          <line x1="228" y1="180" x2="312" y2="140" stroke="rgba(94, 195, 245, 0.6)" strokeWidth="2" />
          <line x1="228" y1="180" x2="312" y2="215" stroke="rgba(94, 195, 245, 0.6)" strokeWidth="2" />
          <line x1="228" y1="245" x2="312" y2="215" stroke="rgba(61, 155, 233, 0.3)" strokeWidth="1.5" />
          <line x1="228" y1="310" x2="312" y2="290" stroke="rgba(61, 155, 233, 0.3)" strokeWidth="1.5" />

          <line x1="348" y1="140" x2="408" y2="175" stroke="rgba(94, 195, 245, 0.8)" strokeWidth="2.5" />
          <line x1="348" y1="215" x2="408" y2="175" stroke="rgba(94, 195, 245, 0.6)" strokeWidth="2" />
          <line x1="348" y1="215" x2="408" y2="255" stroke="rgba(74, 222, 128, 0.8)" strokeWidth="2.5" />
          <line x1="348" y1="290" x2="408" y2="255" stroke="rgba(74, 222, 128, 0.6)" strokeWidth="2" />

          <defs>
            <radialGradient id="neuralOutGrad1"><stop offset="0%" stopColor="#5EC3F5" /><stop offset="100%" stopColor="#3D9BE9" /></radialGradient>
            <radialGradient id="neuralOutGrad2"><stop offset="0%" stopColor="#4ADE80" /><stop offset="100%" stopColor="#16A34A" /></radialGradient>
          </defs>

          <text x="75" y="356" fill="rgba(255, 255, 255, 0.45)" fontSize="11" fontFamily="Inter" fontWeight="600">Features</text>
          <text x="250" y="356" fill="rgba(255, 255, 255, 0.45)" fontSize="11" fontFamily="Inter" fontWeight="600">Deep Layers</text>
          <text x="408" y="356" fill="rgba(255, 255, 255, 0.45)" fontSize="11" fontFamily="Inter" fontWeight="600">Insights</text>
        </svg>
      );
    }

    if (type === 'cloud') {
      return (
        <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '520px' }}>
          <rect x="20" y="20" width="460" height="360" rx="24" fill="rgba(15, 35, 71, 0.6)" stroke="rgba(61, 155, 233, 0.25)" strokeWidth="1.5" />
          
          {/* Stats Bar Top */}
          <rect x="44" y="44" width="120" height="42" rx="10" fill="rgba(74, 222, 128, 0.1)" stroke="rgba(74, 222, 128, 0.25)" strokeWidth="1" />
          <text x="58" y="62" fill="rgba(255,255,255,0.45)" fontSize="10" fontFamily="Inter" fontWeight="600">UPTIME</text>
          <text x="58" y="78" fill="#4ADE80" fontSize="15" fontFamily="Plus Jakarta Sans" fontWeight="800">99.99%</text>

          <rect x="180" y="44" width="130" height="42" rx="10" fill="rgba(61, 155, 233, 0.1)" stroke="rgba(61, 155, 233, 0.25)" strokeWidth="1" />
          <text x="194" y="62" fill="rgba(255,255,255,0.45)" fontSize="10" fontFamily="Inter" fontWeight="600">COST REDUCTION</text>
          <text x="194" y="78" fill="#5EC3F5" fontSize="15" fontFamily="Plus Jakarta Sans" fontWeight="800">-45% Saved</text>

          <rect x="326" y="44" width="130" height="42" rx="10" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" />
          <text x="340" y="62" fill="rgba(255,255,255,0.45)" fontSize="10" fontFamily="Inter" fontWeight="600">VELOCITY</text>
          <text x="340" y="78" fill="#FFFFFF" fontSize="15" fontFamily="Plus Jakarta Sans" fontWeight="800">3× Faster</text>

          {/* Central Cloud Visualizer */}
          <ellipse cx="250" cy="165" rx="95" ry="55" fill="rgba(61, 155, 233, 0.14)" stroke="#3D9BE9" strokeWidth="2" />
          <ellipse cx="195" cy="180" rx="60" ry="42" fill="rgba(61, 155, 233, 0.1)" stroke="#3D9BE9" strokeWidth="1.5" />
          <ellipse cx="310" cy="180" rx="60" ry="42" fill="rgba(61, 155, 233, 0.1)" stroke="#3D9BE9" strokeWidth="1.5" />
          <text x="210" y="172" fill="#FFFFFF" fontSize="16" fontFamily="Plus Jakarta Sans" fontWeight="800">Enterprise Cloud</text>

          {/* Migration Nodes */}
          <rect x="44" y="270" width="115" height="60" rx="12" fill="rgba(27, 58, 107, 0.7)" stroke="rgba(61, 155, 233, 0.3)" strokeWidth="1.5" />
          <text x="60" y="296" fill="rgba(255,255,255,0.85)" fontSize="12" fontFamily="Plus Jakarta Sans" fontWeight="700">Legacy Core</text>
          <text x="60" y="315" fill="rgba(255,255,255,0.4)" fontSize="11" fontFamily="Inter">On-Premises</text>

          <rect x="192" y="270" width="115" height="60" rx="12" fill="rgba(61, 155, 233, 0.25)" stroke="#3D9BE9" strokeWidth="1.5" />
          <text x="210" y="296" fill="#FFFFFF" fontSize="12" fontFamily="Plus Jakarta Sans" fontWeight="700">Modern Lake</text>
          <text x="210" y="315" fill="#5EC3F5" fontSize="11" fontFamily="Inter">Azure / AWS</text>

          <rect x="340" y="270" width="115" height="60" rx="12" fill="rgba(74, 222, 128, 0.15)" stroke="#4ADE80" strokeWidth="1.5" />
          <text x="356" y="296" fill="#FFFFFF" fontSize="12" fontFamily="Plus Jakarta Sans" fontWeight="700">AI Platform</text>
          <text x="356" y="315" fill="#4ADE80" fontSize="11" fontFamily="Inter">Real-time APIs</text>

          {/* Flow Arrows */}
          <line x1="160" y1="300" x2="190" y2="300" stroke="#3D9BE9" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="308" y1="300" x2="338" y2="300" stroke="#4ADE80" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
      );
    }

    // Default Analytics Visualizer
    return (
      <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '520px' }}>
        <rect x="20" y="20" width="460" height="360" rx="24" fill="rgba(15, 35, 71, 0.6)" stroke="rgba(61, 155, 233, 0.25)" strokeWidth="1.5" />
        
        {/* Metric Header */}
        <text x="48" y="65" fill="rgba(255,255,255,0.5)" fontSize="11" fontFamily="Inter" fontWeight="700" letterSpacing="1.5">REVENUE BUSINESS INTELLIGENCE</text>
        <text x="48" y="100" fill="#FFFFFF" fontSize="32" fontFamily="Plus Jakarta Sans" fontWeight="800">₹4.2 Cr</text>
        <text x="180" y="98" fill="#4ADE80" fontSize="14" fontFamily="Inter" fontWeight="700">↑ 28% Growth</text>

        {/* Dynamic Bar Charts */}
        <rect x="48" y="140" width="36" height="110" rx="8" fill="rgba(61,155,233,0.18)" />
        <rect x="100" y="120" width="36" height="130" rx="8" fill="rgba(61,155,233,0.28)" />
        <rect x="152" y="155" width="36" height="95" rx="8" fill="rgba(61,155,233,0.22)" />
        <rect x="204" y="110" width="36" height="140" rx="8" fill="rgba(61,155,233,0.38)" />
        <rect x="256" y="130" width="36" height="120" rx="8" fill="rgba(61,155,233,0.25)" />
        <rect x="308" y="80" width="40" height="170" rx="8" fill="url(#analyticsBarGrad)" />
        <rect x="364" y="115" width="36" height="135" rx="8" fill="rgba(61,155,233,0.22)" />
        <rect x="416" y="95" width="36" height="155" rx="8" fill="rgba(61,155,233,0.3)" />

        {/* Glow on highest bar */}
        <rect x="308" y="80" width="40" height="12" rx="4" fill="#5EC3F5" opacity="0.8" />
        <line x1="40" y1="252" x2="460" y2="252" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />

        {/* Bottom Metric Cards */}
        <rect x="48" y="275" width="185" height="70" rx="14" fill="rgba(255,255,255,0.04)" stroke="rgba(61,155,233,0.2)" strokeWidth="1" />
        <text x="68" y="302" fill="rgba(255,255,255,0.45)" fontSize="11" fontFamily="Inter" fontWeight="600">AI ACCURACY</text>
        <text x="68" y="328" fill="#FFFFFF" fontSize="24" fontFamily="Plus Jakarta Sans" fontWeight="800">94.7%</text>

        <rect x="250" y="275" width="200" height="70" rx="14" fill="rgba(255,255,255,0.04)" stroke="rgba(74,222,128,0.2)" strokeWidth="1" />
        <text x="270" y="302" fill="rgba(255,255,255,0.45)" fontSize="11" fontFamily="Inter" fontWeight="600">COST SAVED</text>
        <text x="270" y="328" fill="#4ADE80" fontSize="24" fontFamily="Plus Jakarta Sans" fontWeight="800">₹1.8 Cr</text>

        <defs>
          <linearGradient id="analyticsBarGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5EC3F5" />
            <stop offset="100%" stopColor="#3D9BE9" />
          </linearGradient>
        </defs>
      </svg>
    );
  };

  return (
    <section
      id="home"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: activeSlide.bgGradient || 'linear-gradient(135deg,#0F2347 0%,#1B3A6B 55%,#0D2B5E 100%)',
        paddingTop: '110px',
        paddingBottom: '80px',
        overflow: 'hidden',
        transition: 'background 0.8s ease',
      }}
    >
      {/* Subtle Data Constellation & Ambient Particle Background */}
      <HeroBackgroundAnimation />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Content */}
          <div>
            <div className="pulse-badge" style={{ marginBottom: '1.75rem' }}>
              <span className="pulse-dot" />
              {activeSlide.tag}
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                fontWeight: 800,
                lineHeight: 1.08,
                color: '#FFFFFF',
                letterSpacing: '-1.5px',
                marginBottom: '1.5rem',
              }}
            >
              {activeSlide.headline}{' '}
              {activeSlide.headlineEmp && (
                <span
                  style={{
                    background: 'linear-gradient(135deg, #5EC3F5 0%, #3D9BE9 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block',
                  }}
                >
                  {activeSlide.headlineEmp}
                </span>
              )}
            </h1>

            <p
              style={{
                fontSize: '1.15rem',
                lineHeight: 1.75,
                color: 'rgba(255, 255, 255, 0.72)',
                maxWidth: '540px',
                marginBottom: '2.5rem',
              }}
            >
              {activeSlide.subtext}
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href={activeSlide.primaryUrl || '#solutions'} className="btn-secondary" style={{ padding: '0.95rem 2rem' }}>
                {activeSlide.primaryBtn || 'Explore Services'}
                <ArrowRight size={18} />
              </a>
              {activeSlide.secBtn && (
                <a href={activeSlide.secUrl || '#contact'} className="btn-outline" style={{ padding: '0.95rem 2rem' }}>
                  {activeSlide.secBtn}
                </a>
              )}
            </div>
          </div>

          {/* Right Visualizer */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {renderVisualizer(activeSlide.svgType)}
          </div>
        </div>

        {/* Carousel Controls */}
        {total > 1 && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '4rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            {/* Dots */}
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  style={{
                    height: '8px',
                    width: current === idx ? '32px' : '8px',
                    borderRadius: '4px',
                    background: current === idx ? '#FFFFFF' : 'rgba(255, 255, 255, 0.25)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                />
              ))}
            </div>

            {/* Arrows */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => setCurrent((prev) => (prev - 1 + total) % total)}
                aria-label="Previous slide"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--blue)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)')}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => setCurrent((prev) => (prev + 1) % total)}
                aria-label="Next slide"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--blue)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)')}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          :global(.hero-grid) {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
