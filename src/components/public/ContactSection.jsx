'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Lock,
  ArrowRight,
  ShieldCheck,
  Clock,
  Award,
  ExternalLink,
} from 'lucide-react';

export default function ContactSection({ settings }) {
  const displayAddress = settings?.address || 'Bangalore & Mumbai, India';
  const queryAddress = settings?.address ? settings.address.replace(/&/g, ',') : 'Bangalore, India';
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(queryAddress)}`;
  const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(queryAddress)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'AI & Machine Learning',
    message: '',
  });

  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit message');
      }

      setStatus({ loading: false, success: true, error: null });
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: 'AI & Machine Learning',
        message: '',
      });
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message });
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: '6rem 0',
        background: '#FFFFFF',
        position: 'relative',
        borderTop: '1px solid #E2E8F0',
      }}
    >
      {/* Subtle Ambient Background Watermark Glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(21, 138, 226, 0.04) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.03) 0%, transparent 40%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Unified Executive Consultation Console (Split Integrated Architecture) */}
        <div
          style={{
            maxWidth: '1220px',
            margin: '0 auto',
            borderRadius: '26px',
            overflow: 'hidden',
            boxShadow: '0 25px 65px -15px rgba(5, 45, 93, 0.12), 0 0 0 1px rgba(226, 232, 240, 0.8)',
            display: 'grid',
            gridTemplateColumns: '1.05fr 1.15fr',
            background: '#FFFFFF',
          }}
          className="contact-console"
        >
          {/* Left Column: Authoritative Corporate Advisory Pane (Midnight Navy) */}
          <div
            style={{
              background: 'linear-gradient(155deg, #052D5D 0%, #031E40 55%, #021226 100%)',
              padding: '3.75rem 3.25rem',
              color: '#FFFFFF',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
            className="contact-dark-pane"
          >
            {/* Technical Dot Grid Overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
                pointerEvents: 'none',
              }}
            />

            <div style={{ position: 'relative', zIndex: 2 }}>
              {/* Exact Headline */}
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.15rem, 3.2vw, 2.85rem)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.18,
                  marginBottom: '1rem',
                }}
              >
                Build Something That Drives{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #38BDF8 0%, #60A5FA 50%, #818CF8 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Real Impact.
                </span>
              </h2>

              {/* Exact Subtitle */}
              <p
                style={{
                  fontSize: '1.025rem',
                  lineHeight: 1.7,
                  color: 'rgba(255, 255, 255, 0.78)',
                  marginBottom: '2.5rem',
                  maxWidth: '460px',
                }}
              >
                Connect with our technical architects for cloud modernization, enterprise analytics, or production AI solutions.
              </p>

              {/* Exact 3 Channels Styled as Frosted Glass Architectural Tiles */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem', marginBottom: '2.5rem' }}>
                {/* Email Us */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.15rem',
                    padding: '1.05rem 1.25rem',
                    borderRadius: '14px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.25s ease',
                  }}
                  className="glass-channel-tile"
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'rgba(56, 189, 248, 0.15)',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#38BDF8',
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: '0.725rem',
                        fontWeight: 800,
                        color: 'rgba(255, 255, 255, 0.6)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.8px',
                        marginBottom: '2px',
                      }}
                    >
                      Email Us
                    </div>
                    <a
                      href={`mailto:${settings?.email || 'hello@kdinfovision.com'}`}
                      style={{
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'color 0.2s ease',
                      }}
                      className="glass-channel-link"
                    >
                      {settings?.email || 'hello@kdinfovision.com'}
                      <ArrowRight size={14} style={{ opacity: 0.6 }} />
                    </a>
                  </div>
                </div>

                {/* Call Us */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.15rem',
                    padding: '1.05rem 1.25rem',
                    borderRadius: '14px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.25s ease',
                  }}
                  className="glass-channel-tile"
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'rgba(16, 185, 129, 0.15)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#10B981',
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={20} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: '0.725rem',
                        fontWeight: 800,
                        color: 'rgba(255, 255, 255, 0.6)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.8px',
                        marginBottom: '2px',
                      }}
                    >
                      Call Us
                    </div>
                    <a
                      href={`tel:${settings?.phone || '+91 98765 43210'}`}
                      style={{
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'color 0.2s ease',
                      }}
                      className="glass-channel-link"
                    >
                      {settings?.phone || '+91 98765 43210'}
                      <ArrowRight size={14} style={{ opacity: 0.6 }} />
                    </a>
                  </div>
                </div>

                {/* Delivery Hubs (Linked to Google Maps) */}
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.15rem',
                    padding: '1.05rem 1.25rem',
                    borderRadius: '14px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                    cursor: 'pointer',
                  }}
                  className="glass-channel-tile"
                  title="Open Delivery Hubs in Google Maps"
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'rgba(245, 158, 11, 0.15)',
                      border: '1px solid rgba(245, 158, 11, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#F59E0B',
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={20} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: '0.725rem',
                        fontWeight: 800,
                        color: 'rgba(255, 255, 255, 0.6)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.8px',
                        marginBottom: '2px',
                      }}
                    >
                      Delivery Hubs
                    </div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      {displayAddress}
                      <ArrowRight size={14} style={{ opacity: 0.6 }} />
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Bottom Enterprise Governance Commitments */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                paddingTop: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                <Clock size={15} style={{ color: '#38BDF8' }} />
                <span>&lt; 24h Response SLA</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                <ShieldCheck size={15} style={{ color: '#10B981' }} />
                <span>Mutual NDA Protected</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                <Award size={15} style={{ color: '#A78BFA' }} />
                <span>Architect Led</span>
              </div>
            </div>
          </div>

          {/* Right Column: Pristine Executive Form Console (White) */}
          <div
            style={{
              padding: '3.75rem 3.5rem',
              background: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            className="contact-form-pane"
          >
            {/* Exact Form Header */}
            <div style={{ marginBottom: '2rem' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.65rem',
                  fontWeight: 800,
                  color: 'var(--navy)',
                  marginBottom: '0.4rem',
                  letterSpacing: '-0.02em',
                }}
              >
                Send Us a Message
              </h3>
              <p style={{ fontSize: '0.925rem', color: '#64748B', margin: 0 }}>
                Fill out the brief details below and our solution architects will connect with you.
              </p>
            </div>

            {/* Status Feedback */}
            {status.success && (
              <div
                style={{
                  padding: '1.15rem 1.25rem',
                  borderRadius: '12px',
                  background: 'rgba(16, 185, 129, 0.08)',
                  border: '1.5px solid #10B981',
                  color: '#065F46',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '1.5rem',
                  fontSize: '0.925rem',
                  fontWeight: 600,
                }}
              >
                <CheckCircle2 size={20} style={{ color: '#10B981', flexShrink: 0 }} />
                <span>Thank you! Your message has been received. Our team will contact you within 24 hours.</span>
              </div>
            )}

            {status.error && (
              <div
                style={{
                  padding: '1.15rem 1.25rem',
                  borderRadius: '12px',
                  background: 'rgba(239, 68, 68, 0.08)',
                  border: '1.5px solid #EF4444',
                  color: '#991B1B',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '1.5rem',
                  fontSize: '0.925rem',
                  fontWeight: 600,
                }}
              >
                <AlertCircle size={20} style={{ color: '#EF4444', flexShrink: 0 }} />
                <span>{status.error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Row 1: Name & Company */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.15rem' }} className="form-split-row">
                <div>
                  <label style={{ display: 'block', fontSize: '0.785rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '6px' }}>
                    Your Name <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="console-input"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.785rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '6px' }}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Enterprise Co."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="console-input"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.15rem' }} className="form-split-row">
                <div>
                  <label style={{ display: 'block', fontSize: '0.785rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '6px' }}>
                    Corporate Email <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="console-input"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.785rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '6px' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="console-input"
                  />
                </div>
              </div>

              {/* Row 3: Practice of Interest */}
              <div>
                <label style={{ display: 'block', fontSize: '0.785rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '6px' }}>
                  Practice of Interest
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="console-input"
                  style={{ cursor: 'pointer' }}
                >
                  <option value="AI & Machine Learning">AI &amp; Machine Learning (MLOps, GenAI, Vision)</option>
                  <option value="Data Analytics & BI">Data Analytics &amp; BI (Power BI, Tableau, Qlik)</option>
                  <option value="Cloud Lakehouses & dbt">Cloud Lakehouses &amp; dbt (Snowflake, Databricks)</option>
                  <option value="Software Development">Software Development (Next.js, Cloud APIs)</option>
                  <option value="IT Consulting & Managed Cloud">IT Consulting &amp; Managed Cloud (AWS, Azure)</option>
                  <option value="Enterprise Architecture Advisory">Enterprise Architecture Advisory</option>
                </select>
              </div>

              {/* Row 4: Objectives / Message */}
              <div>
                <label style={{ display: 'block', fontSize: '0.785rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '6px' }}>
                  Project Objectives or Inquiries <span style={{ color: '#EF4444' }}>*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Briefly describe your business goals, technology landscape, or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="console-input"
                  style={{ resize: 'none', lineHeight: 1.6 }}
                />
              </div>

              {/* Reassurance Note */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.775rem', color: '#64748B' }}>
                <Lock size={13} style={{ color: '#10B981', flexShrink: 0 }} />
                <span>Protected by Mutual NDA. Zero vendor lock-in.</span>
              </div>

              {/* Submit CTA Button with the Adventurous Midnight Gradient Shade */}
              <button
                type="submit"
                disabled={status.loading}
                style={{
                  width: '100%',
                  padding: '1.05rem',
                  fontSize: '1rem',
                  fontWeight: 700,
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, rgba(21, 138, 226, 0.28) 0%, rgba(5, 45, 93, 0.95) 45%, rgba(139, 92, 246, 0.28) 100%), #031836',
                  color: '#FFFFFF',
                  border: '1px solid rgba(56, 189, 248, 0.35)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  cursor: status.loading ? 'not-allowed' : 'pointer',
                  boxShadow: '0 8px 24px rgba(5, 45, 93, 0.35), 0 0 16px rgba(21, 138, 226, 0.2)',
                  transition: 'all 0.25s ease',
                  marginTop: '0.25rem',
                }}
                className="console-submit-btn"
              >
                {status.loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Submitting Inquiry...
                  </>
                ) : (
                  <>
                    Send Consultation Inquiry <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Real Google Map Dynamic Location Thumbnail (Standard Light Mode - Authentic Google Maps) */}
        <div
          style={{
            maxWidth: '1220px',
            margin: '2rem auto 0 auto',
            borderRadius: '22px',
            overflow: 'hidden',
            background: '#FFFFFF',
            boxShadow: '0 16px 45px -12px rgba(5, 45, 93, 0.1), 0 0 0 1px rgba(226, 232, 240, 0.85)',
            position: 'relative',
          }}
          className="map-thumbnail-card"
        >
          {/* Header Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1rem 1.75rem',
              background: '#F8FAFC',
              borderBottom: '1px solid #E2E8F0',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
            className="map-header-bar"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(234, 67, 53, 0.1)',
                  border: '1px solid rgba(234, 67, 53, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#EA4335',
                  flexShrink: 0,
                }}
              >
                <MapPin size={20} />
              </div>
              <div>
                <div
                  style={{
                    fontSize: '0.725rem',
                    fontWeight: 800,
                    color: '#64748B',
                    textTransform: 'uppercase',
                    letterSpacing: '0.8px',
                    marginBottom: '2px',
                  }}
                >
                  Delivery Hubs • Real-Time Google Maps
                </div>
                <div style={{ fontSize: '1.025rem', fontWeight: 700, color: 'var(--navy)' }}>
                  {displayAddress}
                </div>
              </div>
            </div>

            {/* Tap / Redirect Action Button */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.65rem 1.25rem',
                borderRadius: '10px',
                background: '#052D5D',
                color: '#FFFFFF',
                fontSize: '0.875rem',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 12px rgba(5, 45, 93, 0.18)',
              }}
              className="map-action-btn"
            >
              Open in Google Maps <ExternalLink size={15} />
            </a>
          </div>

          {/* Authentic Real Google Map Display (Standard Light Theme - No Dark Filters) */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '270px',
              background: '#E5E3DF',
              overflow: 'hidden',
            }}
            className="map-embed-wrapper"
          >
            {/* Standard Light Google Map Embed */}
            <iframe
              src={googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{
                border: 0,
                width: '100%',
                height: '100%',
                display: 'block',
                filter: 'none',
                colorScheme: 'light',
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Google Map showing ${displayAddress}`}
            />

            {/* Clickable Full-Area Tap Overlay Redirecting to Google Maps */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: 5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
              className="map-click-overlay"
              aria-label={`Open ${displayAddress} in Google Maps`}
              title="Click anywhere on the map to open in Google Maps"
            >
              {/* Floating Pill on Map */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.7rem 1.35rem',
                  borderRadius: '9999px',
                  border: '1.5px solid rgba(255, 255, 255, 0.8)',
                  boxShadow: '0 12px 32px -4px rgba(5, 45, 93, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.06)',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  color: 'var(--navy)',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className="map-float-pill"
              >
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#10B981',
                    boxShadow: '0 0 0 3px rgba(16, 185, 129, 0.25)',
                  }}
                />
                <span>Tap to view live Google Maps</span>
                <ArrowRight size={15} style={{ color: '#158AE2' }} />
              </div>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.console-input) {
          width: 100%;
          padding: 0.85rem 1.05rem;
          background: #F8FAFC;
          border: 1.5px solid #E2E8F0;
          border-radius: 8px;
          color: #0F172A;
          font-size: 0.925rem;
          outline: none;
          transition: all 0.2s ease;
          font-family: inherit;
        }
        :global(.console-input:focus) {
          background: #FFFFFF;
          border-color: #158AE2;
          box-shadow: 0 0 0 3px rgba(21, 138, 226, 0.15);
        }
        :global(.glass-channel-tile:hover) {
          background: rgba(255, 255, 255, 0.08) !important;
          border-color: rgba(56, 189, 248, 0.4) !important;
          transform: translateX(4px);
        }
        :global(.glass-channel-link:hover) {
          color: #38BDF8 !important;
        }
        :global(.console-submit-btn:hover) {
          background: linear-gradient(135deg, rgba(21, 138, 226, 0.42) 0%, rgba(5, 45, 93, 0.98) 45%, rgba(139, 92, 246, 0.38) 100%), #031836 !important;
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(5, 45, 93, 0.5), 0 0 24px rgba(56, 189, 248, 0.35) !important;
        }
        :global(.map-thumbnail-card) {
          transition: all 0.3s ease;
        }
        :global(.map-thumbnail-card:hover) {
          box-shadow: 0 20px 50px -10px rgba(5, 45, 93, 0.15), 0 0 0 1px rgba(21, 138, 226, 0.3) !important;
        }
        :global(.map-action-btn:hover) {
          background: #158AE2 !important;
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(21, 138, 226, 0.35) !important;
        }
        :global(.map-click-overlay) {
          background: rgba(15, 23, 42, 0);
          transition: background 0.25s ease;
        }
        :global(.map-click-overlay:hover) {
          background: rgba(15, 23, 42, 0.06);
        }
        :global(.map-click-overlay:hover .map-float-pill) {
          transform: scale(1.05);
          box-shadow: 0 16px 36px -4px rgba(5, 45, 93, 0.3);
          background: #FFFFFF;
        }
        @media (max-width: 980px) {
          :global(.contact-console) {
            grid-template-columns: 1fr !important;
          }
          :global(.contact-dark-pane),
          :global(.contact-form-pane) {
            padding: 3rem 1.75rem !important;
          }
          :global(.form-split-row) {
            grid-template-columns: 1fr !important;
          }
          :global(.map-header-bar) {
            flex-direction: column;
            align-items: flex-start !important;
          }
          :global(.map-action-btn) {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
