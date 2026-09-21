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
  Check,
  Lock,
} from 'lucide-react';

export default function ContactSection({ settings }) {
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
        padding: '5.5rem 0',
        background: '#FFFFFF',
        position: 'relative',
        borderTop: '1px solid #E2E8F0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.15fr',
            gap: '4rem',
            alignItems: 'start',
          }}
          className="contact-layout"
        >
          {/* Left Column: Summarized & Clean Information */}
          <div className="contact-info-col">
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.2rem, 3.2vw, 2.85rem)',
                fontWeight: 800,
                color: 'var(--navy)',
                letterSpacing: '-0.025em',
                lineHeight: 1.18,
                marginBottom: '1rem',
              }}
            >
              Build Something That Drives{' '}
              <span style={{ color: 'var(--blue)' }}>Real Impact.</span>
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: '#64748B',
                marginBottom: '2.5rem',
                maxWidth: '480px',
              }}
            >
              Connect with our technical architects for cloud modernization, enterprise analytics, or production AI solutions.
            </p>

            {/* Concise Contact Channels */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(21, 138, 226, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--blue)',
                    flexShrink: 0,
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '2px' }}>
                    Email Us
                  </div>
                  <a
                    href={`mailto:${settings?.email || 'hello@kdinfovision.com'}`}
                    style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: 'var(--navy)',
                      textDecoration: 'none',
                    }}
                    className="contact-text-link"
                  >
                    {settings?.email || 'hello@kdinfovision.com'}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(16, 185, 129, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#059669',
                    flexShrink: 0,
                  }}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '2px' }}>
                    Call Us
                  </div>
                  <a
                    href={`tel:${settings?.phone || '+91 98765 43210'}`}
                    style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: 'var(--navy)',
                      textDecoration: 'none',
                    }}
                    className="contact-text-link"
                  >
                    {settings?.phone || '+91 98765 43210'}
                  </a>
                </div>
              </div>

              {/* Delivery Hubs */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(245, 158, 11, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#D97706',
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '2px' }}>
                    Delivery Hubs
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)' }}>
                    {settings?.address || 'Bangalore & Mumbai, India'}
                  </div>
                </div>
              </div>
            </div>

            {/* Reassurance Checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', borderTop: '1px solid #F1F5F9', paddingTop: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.875rem', color: '#475569' }}>
                <Check size={16} style={{ color: '#10B981', flexShrink: 0 }} />
                <span>Response turnaround within 24 business hours</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.875rem', color: '#475569' }}>
                <Check size={16} style={{ color: '#10B981', flexShrink: 0 }} />
                <span>Initial scoping led by Senior Solution Architects</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.875rem', color: '#475569' }}>
                <Check size={16} style={{ color: '#10B981', flexShrink: 0 }} />
                <span>100% client-owned code &amp; IP under mutual NDA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Professional, Spacious Form */}
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 8px 30px rgba(5, 45, 93, 0.04)',
              padding: '2.5rem',
            }}
            className="contact-form-box"
          >
            <div style={{ marginBottom: '1.75rem' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: 'var(--navy)',
                  marginBottom: '0.35rem',
                  letterSpacing: '-0.015em',
                }}
              >
                Send Us a Message
              </h3>
              <p style={{ fontSize: '0.925rem', color: '#64748B', margin: 0 }}>
                Fill out the brief details below and our solution architects will connect with you.
              </p>
            </div>

            {status.success && (
              <div
                style={{
                  padding: '1.15rem 1.25rem',
                  borderRadius: '10px',
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
                  borderRadius: '10px',
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
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.15rem' }} className="contact-form-row">
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '6px' }}>
                    Your Name <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="clean-input"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '6px' }}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Enterprise Co."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="clean-input"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.15rem' }} className="contact-form-row">
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '6px' }}>
                    Corporate Email <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="clean-input"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '6px' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="clean-input"
                  />
                </div>
              </div>

              {/* Row 3: Practice of Interest */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '6px' }}>
                  Practice of Interest
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="clean-input"
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
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '6px' }}>
                  Project Objectives or Inquiries <span style={{ color: '#EF4444' }}>*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Briefly describe your business goals, technology landscape, or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="clean-input"
                  style={{ resize: 'none', lineHeight: 1.6 }}
                />
              </div>

              {/* Reassurance */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.775rem', color: '#64748B' }}>
                <Lock size={13} style={{ color: '#10B981', flexShrink: 0 }} />
                <span>Protected by Mutual NDA. Zero vendor lock-in.</span>
              </div>

              {/* Submit Button */}
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
                className="clean-submit-btn"
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
      </div>

      <style jsx>{`
        :global(.clean-input) {
          width: 100%;
          padding: 0.85rem 1rem;
          background: #F8FAFC;
          border: 1.5px solid #E2E8F0;
          border-radius: 8px;
          color: #0F172A;
          font-size: 0.925rem;
          outline: none;
          transition: all 0.2s ease;
          font-family: inherit;
        }
        :global(.clean-input:focus) {
          background: #FFFFFF;
          border-color: #158AE2;
          box-shadow: 0 0 0 3px rgba(21, 138, 226, 0.15);
        }
        :global(.contact-text-link:hover) {
          color: var(--blue) !important;
        }
        :global(.clean-submit-btn:hover) {
          background: linear-gradient(135deg, rgba(21, 138, 226, 0.42) 0%, rgba(5, 45, 93, 0.98) 45%, rgba(139, 92, 246, 0.38) 100%), #031836 !important;
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(5, 45, 93, 0.5), 0 0 24px rgba(56, 189, 248, 0.35) !important;
        }
        @media (max-width: 960px) {
          :global(.contact-layout) {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          :global(.contact-form-box) {
            padding: 2rem 1.5rem !important;
          }
          :global(.contact-form-row) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
