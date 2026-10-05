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

              {/* Profile Dropdown Popup (Dark Theme) */}
              {profileDropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 10px)',
                    right: 0,
                    width: '240px',
                    background: '#0c101d',
                    borderRadius: '14px',
                    boxShadow: '0 16px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(139, 92, 246, 0.15)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '8px',
                    zIndex: 1050,
                    animation: 'dropdownFadeIn 0.2s ease-out',
                  }}
                >
                  <div
                    style={{
                      padding: '8px 12px 10px',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                      marginBottom: '6px',
                    }}
                  >
                    <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9DA8FB', fontWeight: 800 }}>
                      KD Portal
                    </div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#FFFFFF' }}>
                      Account &amp; Access
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
                      color: '#E2E8F0',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      transition: 'all 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#E2E8F0';
                    }}
                  >
                    <Shield size={16} color="#9DA8FB" />
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
                      color: '#E2E8F0',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      transition: 'all 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#E2E8F0';
                    }}
                  >
                    <LogIn size={16} color="#94A3B8" />
                    <span>Portal Sign In</span>
                  </Link>

                  <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.08)', margin: '6px 0' }} />

                  <Link
                    href="/contact"
                    onClick={() => setProfileDropdownOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '9px 12px',
                      borderRadius: '8px',
                      color: '#94A3B8',
                      textDecoration: 'none',
                      fontSize: '0.825rem',
                      fontWeight: 500,
                      transition: 'all 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(157, 168, 251, 0.1)';
                      e.currentTarget.style.color = '#9DA8FB';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#94A3B8';
                    }}
                  >
                    <Phone size={14} color="#38BDF8" />
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
          backgroundColor: 'rgba(2, 6, 18, 0.75)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 1100,
          opacity: isDrawerOpen ? 1 : 0,
          pointerEvents: isDrawerOpen ? 'auto' : 'none',
          transition: 'opacity 0.28s ease',
        }}
      />

      {/* Off-Canvas Navigation Drawer Panel (Dark Obsidian Theme) */}
      <aside
        aria-label="Main Navigation Drawer"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          width: 'min(390px, 86vw)',
          background: 'radial-gradient(circle at 100% 0%, rgba(139, 92, 246, 0.16) 0%, transparent 45%), radial-gradient(circle at 0% 100%, rgba(16, 185, 129, 0.1) 0%, transparent 40%), #070a14',
          zIndex: 1101,
          borderRight: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '16px 0 50px rgba(0, 0, 0, 0.8), 0 0 40px rgba(139, 92, 246, 0.08)',
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
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
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
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 800,
                fontSize: '1rem',
                color: '#FFFFFF',
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
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              cursor: 'pointer',
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.14)';
              e.currentTarget.style.borderColor = '#9DA8FB';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
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
                fontSize: '0.72rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#8B949E',
                marginBottom: '0.85rem',
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Menu
            </div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
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
                      padding: '0.8rem 1rem',
                      borderRadius: '10px',
                      backgroundColor: isActive ? 'rgba(146, 102, 253, 0.14)' : 'transparent',
                      borderLeft: isActive ? '3px solid #9266FD' : '3px solid transparent',
                      color: isActive ? '#FFFFFF' : '#D1D5DB',
                      fontWeight: isActive ? 700 : 600,
                      fontSize: '1rem',
                      textDecoration: 'none',
                      transition: 'all 0.18s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                        e.currentTarget.style.color = '#FFFFFF';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#D1D5DB';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }
                    }}
                  >
                    <span>{link.name}</span>
                    <ChevronRight size={16} color={isActive ? '#9DA8FB' : 'rgba(255, 255, 255, 0.3)'} />
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Core Capabilities */}
          <div>
            <div
              style={{
                fontSize: '0.72rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#8B949E',
                marginBottom: '0.85rem',
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Enterprise Capabilities
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
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
                      padding: '0.7rem 0.85rem',
                      borderRadius: '10px',
                      textDecoration: 'none',
                      color: '#E2E8F0',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      transition: 'all 0.18s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(157, 168, 251, 0.08)';
                      e.currentTarget.style.borderColor = 'rgba(157, 168, 251, 0.35)';
                      e.currentTarget.style.color = '#FFFFFF';
                      e.currentTarget.style.transform = 'translateX(3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                      e.currentTarget.style.color = '#E2E8F0';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(157, 168, 251, 0.12)',
                        border: '1px solid rgba(157, 168, 251, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <IconComponent size={16} color="#9DA8FB" />
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
              background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.85) 0%, rgba(13, 17, 28, 0.95) 100%)',
              borderRadius: '12px',
              padding: '1.1rem',
              border: '1px solid rgba(157, 168, 251, 0.2)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
            }}
          >
            <div
              style={{
                fontSize: '0.72rem',
                fontWeight: 800,
                color: '#9DA8FB',
                marginBottom: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Direct Consultation
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a
                href={`tel:${phone}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#CBD5E1',
                  textDecoration: 'none',
                  fontSize: '0.825rem',
                  fontWeight: 600,
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#CBD5E1')}
              >
                <Phone size={13} color="#38BDF8" />
                <span>{phone}</span>
              </a>
              <a
                href={`mailto:${email}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#CBD5E1',
                  textDecoration: 'none',
                  fontSize: '0.825rem',
                  fontWeight: 600,
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#CBD5E1')}
              >
                <Mail size={13} color="#34D399" />
                <span>{email}</span>
              </a>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  color: '#8B949E',
                  fontSize: '0.775rem',
                  lineHeight: '1.4',
                  marginTop: '2px',
                }}
              >
                <MapPin size={13} color="#9DA8FB" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Bandra East, Mumbai 400051</span>
              </div>
            </div>
          </div>
        </div>

        {/* Drawer Bottom CTA */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            backgroundColor: '#070a14',
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
              background: 'linear-gradient(259.44deg, #9DA8FB 25.03%, #9266FD 90.57%)',
              color: '#FFFFFF',
              borderRadius: '9999px',
              padding: '0.75rem',
              fontWeight: 700,
              fontSize: '0.925rem',
              textDecoration: 'none',
              boxShadow: '0 8px 24px rgba(146, 102, 253, 0.35)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(259.44deg, #9266FD 25.03%, #9DA8FB 90.57%)';
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(157, 168, 251, 0.45)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(259.44deg, #9DA8FB 25.03%, #9266FD 90.57%)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(146, 102, 253, 0.35)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
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
