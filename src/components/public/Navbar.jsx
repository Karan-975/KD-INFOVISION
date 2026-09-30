'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  User,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Shield,
  LogIn,
  Layers,
  Sparkles,
  BarChart3,
  Cloud
} from 'lucide-react';

export default function Navbar({ settings }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const pathname = usePathname();
  const profileDropdownRef = useRef(null);

  // Track window scroll for subtle header shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  // Close menus on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsDrawerOpen(false);
        setProfileDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(e.target)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close drawer and dropdown on route change
  useEffect(() => {
    setIsDrawerOpen(false);
    setProfileDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Industries', href: '/industries' },
    { name: 'Contact', href: '/contact' },
  ];

  const capabilityAreas = [
    { title: 'Data Engineering & Pipelines', icon: Layers, href: '/services#data-engineering' },
    { title: 'Agentic AI & GenAI Systems', icon: Sparkles, href: '/services#agentic-ai' },
    { title: 'Power BI & Executive Dashboards', icon: BarChart3, href: '/services#bi-analytics' },
    { title: 'Cloud & Enterprise Architecture', icon: Cloud, href: '/services#cloud-transformation' },
  ];

  const phone = settings?.phone || '+91 9820536031';
  const email = settings?.email || 'admin@kdinfovision.com';

  return (
    <>
      {/* Main Header with transparent glass background that does not darken the top sky */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: '55px',
          background: isScrolled ? 'rgba(2, 14, 38, 0.85)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'blur(4px)',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'blur(4px)',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.12)' : 'none',
          boxShadow: isScrolled ? '0 8px 24px rgba(0, 0, 0, 0.35)' : 'none',
          transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
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
          {/* Left Side: Burger Menu + Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {/* Burger Menu Button */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isDrawerOpen}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                transition: 'background-color 0.2s ease, transform 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <Menu size={24} strokeWidth={2.4} />
            </button>

            {/* Logo */}
            <Link
              href="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                flexShrink: 0,
              }}
            >
              <img
                src="/logo-mark.png"
                alt="KD Infovision"
                style={{
                  height: 'clamp(34px, 3.8vw, 38px)',
                  width: 'auto',
                  maxHeight: '42px',
                  objectFit: 'contain',
                  display: 'block',
                  transition: 'opacity 0.2s ease',
                }}
              />
            </Link>
          </div>

          {/* Right Side: Profile Icon + "Get started" Green Pill Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Profile Icon with Dropdown Menu */}
            <div ref={profileDropdownRef} style={{ position: 'relative' }}>
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                aria-label="User Account and Admin Portal"
                aria-haspopup="true"
                aria-expanded={profileDropdownOpen}
                style={{
                  background: profileDropdownOpen ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  transition: 'background-color 0.2s ease, transform 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
                }}
                onMouseLeave={(e) => {
                  if (!profileDropdownOpen) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <User size={22} strokeWidth={2.2} />
              </button>

              {/* Profile Dropdown Popup */}
              {profileDropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 10px)',
                    right: 0,
                    width: '240px',
                    background: '#FFFFFF',
                    borderRadius: '14px',
                    boxShadow: '0 12px 36px rgba(5, 45, 93, 0.14), 0 2px 6px rgba(0, 0, 0, 0.04)',
                    border: '1px solid rgba(5, 45, 93, 0.09)',
                    padding: '8px',
                    zIndex: 1050,
                    animation: 'dropdownFadeIn 0.2s ease-out',
                  }}
                >
                  <div
                    style={{
                      padding: '8px 12px 10px',
                      borderBottom: '1px solid #F1F5F9',
                      marginBottom: '6px',
                    }}
                  >
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#64748B', fontWeight: 700 }}>
                      KD Portal
                    </div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--navy)' }}>
                      Account & Access
                    </div>
                  </div>

                  <Link
                    href="/admin"
                    onClick={() => setProfileDropdownOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '9px 12px',
                      borderRadius: '8px',
                      color: 'var(--navy)',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      transition: 'background-color 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#F1F5F9';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    <Shield size={16} color="var(--blue)" />
                    <span>Admin Dashboard</span>
                  </Link>

                  <Link
                    href="/admin/login"
                    onClick={() => setProfileDropdownOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '9px 12px',
                      borderRadius: '8px',
                      color: 'var(--navy)',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      transition: 'background-color 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#F1F5F9';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    <LogIn size={16} color="#64748B" />
                    <span>Portal Sign In</span>
                  </Link>

                  <div style={{ height: '1px', background: '#F1F5F9', margin: '6px 0' }} />

                  <Link
                    href="/contact"
                    onClick={() => setProfileDropdownOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '9px 12px',
                      borderRadius: '8px',
                      color: '#475569',
                      textDecoration: 'none',
                      fontSize: '0.825rem',
                      fontWeight: 500,
                      transition: 'background-color 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#F8FAFC';
                      e.currentTarget.style.color = 'var(--blue)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#475569';
                    }}
                  >
                    <Phone size={14} />
                    <span>Client Support</span>
                  </Link>
                </div>
              )}
            </div>

            {/* "Get started" Clean Transparent Outline Pill Button */}
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                borderRadius: '9999px',
                border: '1.5px solid rgba(255, 255, 255, 0.75)',
                padding: '0.45rem 1.3rem',
                fontSize: '0.85rem',
                fontWeight: 600,
                textDecoration: 'none',
                letterSpacing: '0.02em',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.borderColor = '#FFFFFF';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.75)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Get started
            </Link>
          </div>
        </div>
      </header>

      {/* Off-Canvas Navigation Drawer Backdrop Overlay */}
      <div
        onClick={() => setIsDrawerOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(5, 25, 55, 0.45)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          zIndex: 1100,
          opacity: isDrawerOpen ? 1 : 0,
          pointerEvents: isDrawerOpen ? 'auto' : 'none',
          transition: 'opacity 0.28s ease',
        }}
      />

      {/* Off-Canvas Navigation Drawer Panel */}
      <aside
        aria-label="Main Navigation Drawer"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          width: 'min(390px, 86vw)',
          backgroundColor: '#FFFFFF',
          zIndex: 1101,
          boxShadow: '10px 0 40px rgba(5, 45, 93, 0.16)',
          transform: isDrawerOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.32s cubic-bezier(0.16, 1, 0.3, 1)',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
        }}
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid #F1F5F9',
          }}
        >
          <Link
            href="/"
            onClick={() => setIsDrawerOpen(false)}
            style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
          >
            <img
              src="/logo-mark.png"
              alt="KD Infovision"
              style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
            />
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: '1rem',
                color: 'var(--navy)',
                letterSpacing: '-0.02em',
              }}
            >
              KD INFOVISION
            </span>
          </Link>

          <button
            onClick={() => setIsDrawerOpen(false)}
            aria-label="Close navigation menu"
            style={{
              background: '#F1F5F9',
              border: 'none',
              cursor: 'pointer',
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--navy)',
              transition: 'background-color 0.15s ease, transform 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#E2E8F0';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#F1F5F9';
            }}
          >
            <X size={20} strokeWidth={2.4} />
          </button>
        </div>

        {/* Drawer Body */}
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.75rem', flex: 1 }}>
          {/* Main Navigation Links */}
          <div>
            <div
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#94A3B8',
                marginBottom: '0.75rem',
              }}
            >
              Menu
            </div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsDrawerOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      backgroundColor: isActive ? 'var(--blue-light)' : 'transparent',
                      color: isActive ? 'var(--blue)' : 'var(--navy)',
                      fontWeight: isActive ? 700 : 600,
                      fontSize: '1rem',
                      textDecoration: 'none',
                      transition: 'all 0.18s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = '#F8FAFC';
                        e.currentTarget.style.color = 'var(--blue)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = 'var(--navy)';
                      }
                    }}
                  >
                    <span>{link.name}</span>
                    <ChevronRight size={16} opacity={isActive ? 1 : 0.4} />
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Core Capabilities */}
          <div>
            <div
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#94A3B8',
                marginBottom: '0.75rem',
              }}
            >
              Enterprise Capabilities
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {capabilityAreas.map((area) => {
                const IconComponent = area.icon;
                return (
                  <Link
                    key={area.title}
                    href={area.href}
                    onClick={() => setIsDrawerOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      color: '#475569',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      transition: 'all 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#F8FAFC';
                      e.currentTarget.style.color = 'var(--navy)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#475569';
                    }}
                  >
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '6px',
                        backgroundColor: 'var(--blue-light)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <IconComponent size={15} color="var(--blue)" />
                    </div>
                    <span>{area.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Contact Card */}
          <div
            style={{
              marginTop: 'auto',
              background: '#F8FAFC',
              borderRadius: '12px',
              padding: '1rem',
              border: '1px solid #E2E8F0',
            }}
          >
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '8px' }}>
              Direct Consultation
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <a
                href={`tel:${phone}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#475569',
                  textDecoration: 'none',
                  fontSize: '0.825rem',
                }}
              >
                <Phone size={13} color="var(--blue)" />
                <span>{phone}</span>
              </a>
              <a
                href={`mailto:${email}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#475569',
                  textDecoration: 'none',
                  fontSize: '0.825rem',
                }}
              >
                <Mail size={13} color="var(--blue)" />
                <span>{email}</span>
              </a>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  color: '#64748B',
                  fontSize: '0.775rem',
                  lineHeight: '1.4',
                  marginTop: '4px',
                }}
              >
                <MapPin size={13} color="var(--blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Bandra East, Mumbai 400051</span>
              </div>
            </div>
          </div>
        </div>

        {/* Drawer Bottom CTA */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            borderTop: '1px solid #F1F5F9',
            backgroundColor: '#FFFFFF',
          }}
        >
          <Link
            href="/contact"
            onClick={() => setIsDrawerOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              backgroundColor: '#027A48',
              color: '#FFFFFF',
              borderRadius: '9999px',
              padding: '0.75rem',
              fontWeight: 700,
              fontSize: '0.925rem',
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(2, 122, 72, 0.25)',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#026038')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#027A48')}
          >
            <span>Get started</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </aside>

      <style jsx global>{`
        @keyframes dropdownFadeIn {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
