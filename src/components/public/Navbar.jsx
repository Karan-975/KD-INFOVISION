'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Shield } from 'lucide-react';

export default function Navbar({ settings }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#solutions' },
    { name: 'Case Studies', href: '#cases' },
    { name: 'Industries', href: '#industry' },
    { name: 'Process', href: '#process' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: isScrolled ? '66px' : '80px',
        background: isScrolled ? 'rgba(15, 35, 71, 0.94)' : 'rgba(15, 35, 71, 0.8)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.25)' : 'none',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #3D9BE9 0%, #1B3A6B 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: '18px',
              boxShadow: '0 4px 15px rgba(61, 155, 233, 0.4)',
            }}
          >
            KD
          </div>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '-0.5px',
                lineHeight: 1.1,
              }}
            >
              {settings?.siteName || 'KD INFOVISION'}
            </div>
            <div
              style={{
                fontSize: '0.65rem',
                fontWeight: 600,
                color: 'var(--blue-cyan)',
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
              }}
            >
              Data • AI • Transformation
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: 'rgba(255, 255, 255, 0.78)',
                fontSize: '0.925rem',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.78)')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link
            href="/admin"
            title="Admin Portal"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgba(255, 255, 255, 0.8)',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--blue)';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
            }}
          >
            <Shield size={16} />
          </Link>

          <a href="#contact" className="btn-primary" style={{ padding: '0.65rem 1.4rem', fontSize: '0.875rem' }}>
            Free Consultation
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
              padding: '6px',
            }}
            className="mobile-toggle"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(15, 35, 71, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '1.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: '#FFFFFF',
                fontSize: '1.1rem',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary"
            style={{ width: '100%', marginTop: '0.5rem' }}
          >
            Free Consultation
          </a>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 900px) {
          :global(.desktop-nav) {
            display: none !important;
          }
          :global(.mobile-toggle) {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
