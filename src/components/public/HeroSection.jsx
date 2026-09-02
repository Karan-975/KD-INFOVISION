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
        <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '520px', filter: 'drop-shadow(0 20px 40px rgba(5, 45, 93, 0.08))' }}>
          <rect x="20" y="20" width="460" height="360" rx="24" fill="#FFFFFF" stroke="rgba(21, 138, 226, 0.22)" strokeWidth="1.5" />
          
          {/* Top Badge */}
          <rect x="44" y="44" width="165" height="36" rx="10" fill="rgba(16, 185, 129, 0.1)" stroke="rgba(16, 185, 129, 0.25)" strokeWidth="1" />
          <circle cx="62" cy="62" r="5" fill="#10B981" />
          <text x="76" y="66" fill="#059669" fontSize="13" fontFamily="Plus Jakarta Sans" fontWeight="800">94.7% ML Accuracy</text>
          
          {/* Neural Nodes - Input */}
          <circle cx="90" cy="140" r="18" fill="rgba(21, 138, 226, 0.12)" stroke="#158AE2" strokeWidth="2" />
          <circle cx="90" cy="215" r="18" fill="rgba(21, 138, 226, 0.12)" stroke="#158AE2" strokeWidth="2" />
          <circle cx="90" cy="290" r="18" fill="rgba(21, 138, 226, 0.12)" stroke="#158AE2" strokeWidth="2" />
          
          {/* Hidden Layer 1 */}
          <circle cx="210" cy="115" r="18" fill="rgba(5, 45, 93, 0.08)" stroke="#052D5D" strokeWidth="2" />
          <circle cx="210" cy="180" r="18" fill="rgba(5, 45, 93, 0.08)" stroke="#052D5D" strokeWidth="2" />
          <circle cx="210" cy="245" r="18" fill="rgba(5, 45, 93, 0.08)" stroke="#052D5D" strokeWidth="2" />
          <circle cx="210" cy="310" r="18" fill="rgba(5, 45, 93, 0.08)" stroke="#052D5D" strokeWidth="2" />

          {/* Hidden Layer 2 */}
          <circle cx="330" cy="140" r="18" fill="rgba(21, 138, 226, 0.18)" stroke="#158AE2" strokeWidth="2" />
          <circle cx="330" cy="215" r="18" fill="rgba(21, 138, 226, 0.18)" stroke="#158AE2" strokeWidth="2" />
          <circle cx="330" cy="290" r="18" fill="rgba(21, 138, 226, 0.18)" stroke="#158AE2" strokeWidth="2" />

          {/* Output Layer */}
          <circle cx="430" cy="175" r="22" fill="url(#neuralOutGrad1)" stroke="#158AE2" strokeWidth="2.5" />
          <circle cx="430" cy="255" r="22" fill="url(#neuralOutGrad2)" stroke="#10B981" strokeWidth="2.5" />

          {/* Connections */}
          <line x1="108" y1="140" x2="192" y2="115" stroke="rgba(21, 138, 226, 0.3)" strokeWidth="1.5" />
          <line x1="108" y1="140" x2="192" y2="180" stroke="rgba(21, 138, 226, 0.3)" strokeWidth="1.5" />
          <line x1="108" y1="215" x2="192" y2="180" stroke="#158AE2" strokeWidth="2" />
          <line x1="108" y1="215" x2="192" y2="245" stroke="rgba(21, 138, 226, 0.3)" strokeWidth="1.5" />
          <line x1="108" y1="290" x2="192" y2="245" stroke="rgba(21, 138, 226, 0.3)" strokeWidth="1.5" />
          <line x1="108" y1="290" x2="192" y2="310" stroke="rgba(21, 138, 226, 0.3)" strokeWidth="1.5" />

          <line x1="228" y1="115" x2="312" y2="140" stroke="rgba(5, 45, 93, 0.25)" strokeWidth="1.5" />
          <line x1="228" y1="180" x2="312" y2="140" stroke="#158AE2" strokeWidth="2" />
          <line x1="228" y1="180" x2="312" y2="215" stroke="#158AE2" strokeWidth="2" />
          <line x1="228" y1="245" x2="312" y2="215" stroke="rgba(5, 45, 93, 0.25)" strokeWidth="1.5" />
          <line x1="228" y1="310" x2="312" y2="290" stroke="rgba(5, 45, 93, 0.25)" strokeWidth="1.5" />

          <line x1="348" y1="140" x2="408" y2="175" stroke="#158AE2" strokeWidth="2.5" />
          <line x1="348" y1="215" x2="408" y2="175" stroke="#158AE2" strokeWidth="2" />
          <line x1="348" y1="215" x2="408" y2="255" stroke="#10B981" strokeWidth="2.5" />
          <line x1="348" y1="290" x2="408" y2="255" stroke="rgba(16, 185, 129, 0.5)" strokeWidth="2" />

          <defs>
            <radialGradient id="neuralOutGrad1"><stop offset="0%" stopColor="#3DA5F5" /><stop offset="100%" stopColor="#158AE2" /></radialGradient>
            <radialGradient id="neuralOutGrad2"><stop offset="0%" stopColor="#34D399" /><stop offset="100%" stopColor="#059669" /></radialGradient>
          </defs>

          <text x="75" y="356" fill="#64748B" fontSize="11" fontFamily="Inter" fontWeight="600">Features</text>
          <text x="250" y="356" fill="#64748B" fontSize="11" fontFamily="Inter" fontWeight="600">Deep Layers</text>
          <text x="408" y="356" fill="#64748B" fontSize="11" fontFamily="Inter" fontWeight="600">Insights</text>
        </svg>
      );
    }

    if (type === 'cloud') {
      return (
        <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '520px', filter: 'drop-shadow(0 20px 40px rgba(5, 45, 93, 0.08))' }}>
          <rect x="20" y="20" width="460" height="360" rx="24" fill="#FFFFFF" stroke="rgba(21, 138, 226, 0.22)" strokeWidth="1.5" />
          
          {/* Stats Bar Top */}
          <rect x="48" y="50" width="115" height="42" rx="10" fill="rgba(16, 185, 129, 0.1)" stroke="rgba(16, 185, 129, 0.25)" strokeWidth="1" />
          <text x="62" y="68" fill="#64748B" fontSize="9" fontFamily="Inter" fontWeight="700">UPTIME SLA</text>
          <text x="62" y="84" fill="#059669" fontSize="15" fontFamily="Plus Jakarta Sans" fontWeight="800">99.9%</text>

          <rect x="175" y="50" width="130" height="42" rx="10" fill="rgba(21, 138, 226, 0.1)" stroke="rgba(21, 138, 226, 0.25)" strokeWidth="1" />
          <text x="189" y="68" fill="#64748B" fontSize="9" fontFamily="Inter" fontWeight="700">COST REDUCE</text>
          <text x="189" y="84" fill="#158AE2" fontSize="15" fontFamily="Plus Jakarta Sans" fontWeight="800">-45%</text>

          <rect x="317" y="50" width="130" height="42" rx="10" fill="rgba(5, 45, 93, 0.08)" stroke="rgba(5, 45, 93, 0.2)" strokeWidth="1" />
          <text x="331" y="68" fill="#64748B" fontSize="9" fontFamily="Inter" fontWeight="700">PIPELINE SPEED</text>
          <text x="331" y="84" fill="#052D5D" fontSize="15" fontFamily="Plus Jakarta Sans" fontWeight="800">3× Faster</text>

          {/* Central Cloud Node */}
          <rect x="185" y="125" width="130" height="70" rx="16" fill="url(#cloudGrad)" stroke="#158AE2" strokeWidth="2" />
          <text x="222" y="156" fill="#FFFFFF" fontSize="15" fontFamily="Plus Jakarta Sans" fontWeight="800">Cloud</text>
          <text x="210" y="174" fill="rgba(255, 255, 255, 0.85)" fontSize="11" fontFamily="Inter">Architecture</text>

          {/* Flow Nodes Bottom */}
          <rect x="50" y="240" width="95" height="52" rx="12" fill="#F8FAFC" stroke="rgba(5, 45, 93, 0.2)" strokeWidth="1.5" />
          <text x="72" y="263" fill="#052D5D" fontSize="11" fontFamily="Inter" fontWeight="700">Legacy</text>
          <text x="68" y="279" fill="#64748B" fontSize="10" fontFamily="Inter">Databases</text>

          <rect x="195" y="240" width="110" height="52" rx="12" fill="#EDF5FD" stroke="rgba(21, 138, 226, 0.4)" strokeWidth="1.5" />
          <text x="220" y="263" fill="#052D5D" fontSize="11" fontFamily="Inter" fontWeight="700">Modern</text>
          <text x="226" y="279" fill="#158AE2" fontSize="10" fontFamily="Inter" fontWeight="600">Lakehouse</text>

          <rect x="345" y="240" width="105" height="52" rx="12" fill="rgba(16, 185, 129, 0.1)" stroke="rgba(16, 185, 129, 0.35)" strokeWidth="1.5" />
          <text x="365" y="263" fill="#052D5D" fontSize="11" fontFamily="Inter" fontWeight="700">AI-Ready</text>
          <text x="372" y="279" fill="#059669" fontSize="10" fontFamily="Inter" fontWeight="700">Platform</text>

          {/* Connecting Arrows */}
          <line x1="145" y1="266" x2="195" y2="266" stroke="#158AE2" strokeWidth="2" strokeDasharray="4,3" />
          <line x1="305" y1="266" x2="345" y2="266" stroke="#10B981" strokeWidth="2" />
          <line x1="250" y1="195" x2="250" y2="240" stroke="#158AE2" strokeWidth="2" />

          <defs>
            <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#158AE2" />
              <stop offset="100%" stopColor="#052D5D" />
            </linearGradient>
          </defs>

          <text x="48" y="335" fill="#64748B" fontSize="11" fontFamily="Inter" fontWeight="600">
            Discover → Architecture → Migration → AI Enablement
          </text>
        </svg>
      );
    }

    // Default: 'analytics'
    return (
      <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '520px', filter: 'drop-shadow(0 20px 40px rgba(5, 45, 93, 0.08))' }}>
        <rect x="20" y="20" width="460" height="360" rx="24" fill="#FFFFFF" stroke="rgba(21, 138, 226, 0.22)" strokeWidth="1.5" />
        
        {/* Metric Cards Top */}
        <rect x="44" y="44" width="125" height="52" rx="12" fill="#EDF5FD" stroke="rgba(21, 138, 226, 0.3)" strokeWidth="1" />
        <text x="58" y="64" fill="#64748B" fontSize="9" fontFamily="Inter" fontWeight="700">LIVE DATA FEEDS</text>
        <text x="58" y="85" fill="#052D5D" fontSize="17" fontFamily="Plus Jakarta Sans" fontWeight="800">1.2M req/s</text>

        <rect x="180" y="44" width="125" height="52" rx="12" fill="rgba(16, 185, 129, 0.1)" stroke="rgba(16, 185, 129, 0.25)" strokeWidth="1" />
        <text x="194" y="64" fill="#64748B" fontSize="9" fontFamily="Inter" fontWeight="700">ACCELERATION</text>
        <text x="194" y="85" fill="#059669" fontSize="17" fontFamily="Plus Jakarta Sans" fontWeight="800">+340% ROI</text>

        <rect x="316" y="44" width="138" height="52" rx="12" fill="rgba(5, 45, 93, 0.06)" stroke="rgba(5, 45, 93, 0.15)" strokeWidth="1" />
        <text x="330" y="64" fill="#64748B" fontSize="9" fontFamily="Inter" fontWeight="700">ACCURACY SCORE</text>
        <text x="330" y="85" fill="#052D5D" fontSize="17" fontFamily="Plus Jakarta Sans" fontWeight="800">99.8% Conf.</text>

        {/* Analytics Bar Chart Grid & Axis */}
        <line x1="50" y1="280" x2="450" y2="280" stroke="#E2EAF4" strokeWidth="1.5" />
        <line x1="50" y1="245" x2="450" y2="245" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="4,4" />
        <line x1="50" y1="210" x2="450" y2="210" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="4,4" />
        <line x1="50" y1="175" x2="450" y2="175" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="4,4" />
        <line x1="50" y1="140" x2="450" y2="140" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="4,4" />

        {/* Resized Vertical Bars (Plenty of clearance below top metric cards) */}
        <rect x="75" y="242" width="34" height="38" rx="6" fill="#CBD5E1" />
        <rect x="135" y="220" width="34" height="60" rx="6" fill="#94A3B8" />
        <rect x="195" y="200" width="34" height="80" rx="6" fill="#158AE2" fillOpacity="0.45" />
        <rect x="255" y="178" width="34" height="102" rx="6" fill="#158AE2" />
        <rect x="315" y="158" width="34" height="122" rx="6" fill="url(#heroBarGrad)" />
        <rect x="375" y="142" width="34" height="138" rx="6" fill="#052D5D" />

        {/* Trend Polyline Adjusted */}
        <path d="M92 238 L152 216 L212 196 L272 174 L332 154 L392 138" stroke="#158AE2" strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="392" cy="138" r="5" fill="#158AE2" stroke="#FFFFFF" strokeWidth="2" />

        <defs>
          <linearGradient id="heroBarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#158AE2" />
            <stop offset="100%" stopColor="#052D5D" />
          </linearGradient>
        </defs>

        <text x="80" y="300" fill="#64748B" fontSize="10" fontFamily="Inter" fontWeight="600">Q1</text>
        <text x="140" y="300" fill="#64748B" fontSize="10" fontFamily="Inter" fontWeight="600">Q2</text>
        <text x="200" y="300" fill="#64748B" fontSize="10" fontFamily="Inter" fontWeight="600">Q3</text>
        <text x="260" y="300" fill="#64748B" fontSize="10" fontFamily="Inter" fontWeight="600">Q4</text>
        <text x="320" y="300" fill="#158AE2" fontSize="10" fontFamily="Inter" fontWeight="700">YTD</text>
        <text x="380" y="300" fill="#052D5D" fontSize="10" fontFamily="Inter" fontWeight="800">TARGET</text>

        <text x="44" y="340" fill="#64748B" fontSize="11" fontFamily="Inter" fontWeight="600">
          Integrated Power BI &amp; Azure Synapse Live Analytics
        </text>
      </svg>
    );
  };

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '94vh',
        background: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '115px',
        paddingBottom: '70px',
        overflow: 'hidden',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Animated Constellation & Ambient Mesh on White */}
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
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '30px',
                background: 'rgba(21, 138, 226, 0.08)',
                border: '1px solid rgba(21, 138, 226, 0.25)',
                color: '#158AE2',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
                marginBottom: '1.75rem',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#158AE2',
                  display: 'inline-block',
                }}
              />
              {activeSlide.tag}
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.1rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                color: '#052D5D',
                letterSpacing: '-1.5px',
                marginBottom: '1.5rem',
              }}
            >
              {activeSlide.headline}{' '}
              {activeSlide.headlineEmp && (
                <span
                  style={{
                    background: 'linear-gradient(135deg, #158AE2 0%, #052D5D 100%)',
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
                color: '#475569',
                maxWidth: '540px',
                marginBottom: '2.5rem',
              }}
            >
              {activeSlide.subtext}
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href={activeSlide.primaryUrl || '#solutions'}
                style={{
                  background: '#158AE2',
                  color: '#FFFFFF',
                  padding: '0.95rem 2rem',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 8px 24px rgba(21, 138, 226, 0.35)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#052D5D';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#158AE2';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                {activeSlide.primaryBtn || 'Explore Services'}
                <ArrowRight size={18} />
              </a>

              {activeSlide.secBtn && (
                <a
                  href={activeSlide.secUrl || '#contact'}
                  style={{
                    background: '#FFFFFF',
                    border: '1.5px solid #CBD5E1',
                    color: '#052D5D',
                    padding: '0.95rem 2rem',
                    borderRadius: '10px',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#158AE2';
                    e.currentTarget.style.color = '#158AE2';
                    e.currentTarget.style.background = 'rgba(21, 138, 226, 0.04)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#CBD5E1';
                    e.currentTarget.style.color = '#052D5D';
                    e.currentTarget.style.background = '#FFFFFF';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
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
              borderTop: '1px solid #E2EAF4',
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
                    background: current === idx ? '#158AE2' : '#CBD5E1',
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
                  background: '#F8FAFC',
                  border: '1.5px solid #CBD5E1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#052D5D',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#158AE2';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.borderColor = '#158AE2';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#F8FAFC';
                  e.currentTarget.style.color = '#052D5D';
                  e.currentTarget.style.borderColor = '#CBD5E1';
                }}
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
                  background: '#F8FAFC',
                  border: '1.5px solid #CBD5E1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#052D5D',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#158AE2';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.borderColor = '#158AE2';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#F8FAFC';
                  e.currentTarget.style.color = '#052D5D';
                  e.currentTarget.style.borderColor = '#CBD5E1';
                }}
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
