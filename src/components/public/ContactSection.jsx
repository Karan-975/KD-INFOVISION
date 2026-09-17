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
  Clock,
  ShieldCheck,
  Award,
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
    <section id="contact" style={{ padding: '6.5rem 0', background: '#F8FAFC', position: 'relative' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 1.15fr',
            gap: '4rem',
            alignItems: 'start',
          }}
          className="contact-split-grid"
        >
          {/* Left Info Pane: Spacious, High-Contrast & Multi-Color Accents */}
          <div className="contact-left-pane">
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.825rem',
                fontWeight: 800,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: 'var(--blue)',
                marginBottom: '1rem',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--blue)',
                  display: 'inline-block',
                  boxShadow: '0 0 10px rgba(21, 138, 226, 0.5)',
                }}
              />
              Let&apos;s Connect
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.2rem, 3.4vw, 3rem)',
                fontWeight: 800,
                color: 'var(--navy)',
                letterSpacing: '-0.025em',
                lineHeight: 1.18,
                marginBottom: '1.25rem',
              }}
            >
              Build Something That Drives{' '}
              <span style={{ color: 'var(--blue)' }}>Real Impact.</span>
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.75,
                color: '#64748B',
                marginBottom: '2.5rem',
                maxWidth: '500px',
              }}
            >
              Reach out for technical consultations, solution demos, architecture audits, or enterprise data roadmap discussions.
            </p>

            {/* 3 Spacious Contact Info Cards with Diverse Professional Colors */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              {/* Email Card (Signature Blue) */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  padding: '1.15rem 1.35rem',
                  borderRadius: '16px',
                  background: '#FFFFFF',
                  border: '1px solid #E2EAF4',
                  boxShadow: '0 4px 16px rgba(5, 45, 93, 0.03)',
                  transition: 'all 0.25s ease',
                }}
                className="contact-card"
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(21, 138, 226, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--blue)',
                    flexShrink: 0,
                  }}
                >
                  <Mail size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '2px' }}>
                    Email Us
                  </div>
                  <a
                    href={`mailto:${settings?.email || 'hello@kdinfovision.com'}`}
                    style={{
                      color: 'var(--navy)',
                      fontSize: '1rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    className="contact-link"
                  >
                    {settings?.email || 'hello@kdinfovision.com'}
                  </a>
                </div>
              </div>

              {/* Phone Card (Fresh Emerald Green) */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  padding: '1.15rem 1.35rem',
                  borderRadius: '16px',
                  background: '#FFFFFF',
                  border: '1px solid #E2EAF4',
                  boxShadow: '0 4px 16px rgba(5, 45, 93, 0.03)',
                  transition: 'all 0.25s ease',
                }}
                className="contact-card"
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(16, 185, 129, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#059669',
                    flexShrink: 0,
                  }}
                >
                  <Phone size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '2px' }}>
                    Direct Advisory Line
                  </div>
                  <a
                    href={`tel:${settings?.phone || '+91 98765 43210'}`}
                    style={{
                      color: 'var(--navy)',
                      fontSize: '1rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    className="contact-link"
                  >
                    {settings?.phone || '+91 98765 43210'}
                  </a>
                </div>
              </div>

              {/* Offices Card (Warm Amber / Bronze) */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  padding: '1.15rem 1.35rem',
                  borderRadius: '16px',
                  background: '#FFFFFF',
                  border: '1px solid #E2EAF4',
                  boxShadow: '0 4px 16px rgba(5, 45, 93, 0.03)',
                  transition: 'all 0.25s ease',
                }}
                className="contact-card"
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(245, 158, 11, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#D97706',
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '2px' }}>
                    Delivery Hubs
                  </div>
                  <div style={{ color: 'var(--navy)', fontSize: '0.975rem', fontWeight: 700 }}>
                    {settings?.address || 'Bangalore & Mumbai, India'}
                  </div>
                </div>
              </div>
            </div>

            {/* Enterprise Trust Assurance Bar */}
            <div
              style={{
                padding: '1.25rem 1.5rem',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, rgba(21, 138, 226, 0.06) 0%, rgba(139, 92, 246, 0.06) 100%)',
                border: '1px solid rgba(21, 138, 226, 0.18)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)' }}>
                <Clock size={16} style={{ color: 'var(--blue)' }} />
                <span>&lt; 24h Response SLA</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)' }}>
                <ShieldCheck size={16} style={{ color: '#10B981' }} />
                <span>NDA &amp; IP Protection</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)' }}>
                <Award size={16} style={{ color: '#8B5CF6' }} />
                <span>Senior Architect Led</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Form: Clean, Elevated, Spacious White Card */}
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid #E2EAF4',
              boxShadow: '0 20px 50px -10px rgba(5, 45, 93, 0.08), 0 4px 12px rgba(5, 45, 93, 0.03)',
              padding: '3rem 3rem',
            }}
            className="contact-right-pane"
          >
            <div style={{ marginBottom: '2rem' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.75rem',
                  fontWeight: 800,
                  color: 'var(--navy)',
                  marginBottom: '0.4rem',
                  letterSpacing: '-0.015em',
                }}
              >
                Send Us a Message
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#64748B', margin: 0 }}>
                Fill out the brief details below and our solution architects will connect with you.
              </p>
            </div>

            {status.success && (
              <div
                style={{
                  padding: '1.25rem',
                  borderRadius: '12px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid #10B981',
                  color: '#065F46',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '1.75rem',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                }}
              >
                <CheckCircle2 size={22} style={{ color: '#10B981', flexShrink: 0 }} />
                <span>Thank you! Your message has been received. Our team will contact you within 24 hours.</span>
              </div>
            )}

            {status.error && (
              <div
                style={{
                  padding: '1.25rem',
                  borderRadius: '12px',
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid #EF4444',
                  color: '#991B1B',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '1.75rem',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                }}
              >
                <AlertCircle size={22} style={{ color: '#EF4444', flexShrink: 0 }} />
                <span>{status.error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
              {/* Row 1: Name & Company */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="form-row">
                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '6px' }}>
                    Your Name <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '6px' }}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Enterprise Co."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="form-row">
                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '6px' }}>
                    Corporate Email <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '6px' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              {/* Row 3: Practice of Interest */}
              <div>
                <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '6px' }}>
                  Practice of Interest
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="form-input"
                  style={{ cursor: 'pointer' }}
                >
                  <option value="AI & Machine Learning">AI &amp; Machine Learning (MLOps, GenAI, Vision)</option>
                  <option value="Data Analytics & BI">Data Analytics &amp; BI (Power BI, Tableau, Qlik)</option>
                  <option value="Software Development">Software Development (Next.js, Cloud APIs, SaaS)</option>
                  <option value="IT Consulting & Managed Cloud">IT Consulting &amp; Managed Cloud (AWS, Azure, SRE)</option>
                  <option value="Cloud Lakehouses & dbt">Cloud Lakehouses &amp; dbt (Snowflake, Databricks)</option>
                  <option value="Enterprise Architecture Advisory">Enterprise Architecture Advisory</option>
                </select>
              </div>

              {/* Row 4: Objectives / Message */}
              <div>
                <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '6px' }}>
                  Project Objectives or Inquiries <span style={{ color: '#EF4444' }}>*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Briefly describe your business goals, technology landscape, or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-input"
                  style={{ resize: 'none', lineHeight: 1.6 }}
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={status.loading}
                style={{
                  width: '100%',
                  padding: '1.05rem',
                  fontSize: '1rem',
                  fontWeight: 700,
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #158AE2 0%, #0D6EFD 100%)',
                  color: '#FFFFFF',
                  border: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  cursor: status.loading ? 'not-allowed' : 'pointer',
                  boxShadow: '0 8px 24px rgba(21, 138, 226, 0.35)',
                  transition: 'all 0.25s ease',
                  marginTop: '0.5rem',
                }}
                onMouseEnter={(e) => {
                  if (!status.loading) {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(21, 138, 226, 0.5)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(21, 138, 226, 0.35)';
                }}
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
        :global(.form-input) {
          width: 100%;
          padding: 0.95rem 1.15rem;
          background: #F8FAFC;
          border: 1.5px solid #E2E8F0;
          border-radius: 10px;
          color: #0F172A;
          font-size: 0.95rem;
          outline: none;
          transition: all 0.2s ease;
          font-family: inherit;
        }
        :global(.form-input:focus) {
          background: #FFFFFF;
          border-color: #158AE2;
          box-shadow: 0 0 0 4px rgba(21, 138, 226, 0.14);
        }
        :global(.contact-card:hover) {
          border-color: rgba(21, 138, 226, 0.35) !important;
          box-shadow: 0 8px 24px rgba(5, 45, 93, 0.08) !important;
          transform: translateY(-2px);
        }
        :global(.contact-link:hover) {
          color: var(--blue) !important;
        }
        @media (max-width: 960px) {
          :global(.contact-split-grid) {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          :global(.contact-right-pane) {
            padding: 2.25rem 1.5rem !important;
          }
          :global(.form-row) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
