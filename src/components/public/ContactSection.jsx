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
  ShieldCheck,
  Award,
  Clock,
  ArrowRight,
  Check,
  Building2,
  Lock,
  Compass,
  FileCheck,
  TrendingUp,
} from 'lucide-react';

const PRACTICES = [
  { id: 'ai-mlops', label: 'AI & Production MLOps' },
  { id: 'lakehouse', label: 'Cloud Lakehouse & dbt' },
  { id: 'power-bi', label: 'Executive Power BI & Analytics' },
  { id: 'software', label: 'Cloud-Native Software & APIs' },
  { id: 'advisory', label: 'Enterprise Architecture Advisory' },
];

export default function ContactSection({ settings }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'AI & Production MLOps',
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
        service: 'AI & Production MLOps',
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
        padding: '6.5rem 0',
        background: '#F8FAFC',
        position: 'relative',
        borderTop: '1px solid #E2E8F0',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.08fr 1.12fr',
            gap: '4.5rem',
            alignItems: 'start',
          }}
          className="contact-split-grid"
        >
          {/* Left Column: Bespoke Architectural Directory & Consultation Roadmap */}
          <div className="contact-left-col">
            {/* Clean Typographic Eyebrow (No pill badge) */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '1rem',
              }}
            >
              <span
                style={{
                  width: '28px',
                  height: '3px',
                  background: 'var(--blue)',
                  borderRadius: '2px',
                  display: 'inline-block',
                }}
              />
              <span
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: 'var(--blue)',
                }}
              >
                Enterprise Advisory &amp; Architecture Discovery
              </span>
            </div>

            {/* Authoritative Headline */}
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.25rem, 3.4vw, 3.15rem)',
                fontWeight: 800,
                color: 'var(--navy)',
                letterSpacing: '-0.025em',
                lineHeight: 1.16,
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
                color: '#475569',
                marginBottom: '2.25rem',
                maxWidth: '540px',
              }}
            >
              Engage directly with our Principal Solutions Architects. We analyze architectural feasibility,
              modernization trade-offs, and phased execution roadmaps for enterprise data, AI, and cloud platforms.
            </p>

            {/* Unified Architectural Channel Directory (Handcrafted & Integrated, not floating cards) */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 20px rgba(5, 45, 93, 0.04)',
                overflow: 'hidden',
                marginBottom: '2.25rem',
              }}
            >
              {/* Channel 1: Email Scoping */}
              <div
                style={{
                  padding: '1.4rem 1.6rem',
                  borderBottom: '1px solid #F1F5F9',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.25rem',
                  transition: 'background 0.2s ease',
                }}
                className="directory-item"
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(21, 138, 226, 0.08)',
                    border: '1px solid rgba(21, 138, 226, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--blue)',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <Mail size={20} />
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '4px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.725rem',
                        fontWeight: 800,
                        color: '#64748B',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                      }}
                    >
                      Technical Scoping &amp; RFP Desk
                    </span>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: '#10B981',
                        background: 'rgba(16, 185, 129, 0.1)',
                        padding: '2px 8px',
                        borderRadius: '6px',
                      }}
                    >
                      &lt; 24h Response SLA
                    </span>
                  </div>
                  <a
                    href={`mailto:${settings?.email || 'hello@kdinfovision.com'}`}
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: 'var(--navy)',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                    className="directory-link"
                  >
                    {settings?.email || 'hello@kdinfovision.com'}
                    <ArrowRight size={14} style={{ opacity: 0.6 }} />
                  </a>
                  <p style={{ margin: '3px 0 0 0', fontSize: '0.825rem', color: '#64748B', lineHeight: 1.4 }}>
                    Direct routing to Practice Leads for architectural audits and scope reviews.
                  </p>
                </div>
              </div>

              {/* Channel 2: Telephone Advisory */}
              <div
                style={{
                  padding: '1.4rem 1.6rem',
                  borderBottom: '1px solid #F1F5F9',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.25rem',
                  transition: 'background 0.2s ease',
                }}
                className="directory-item"
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(16, 185, 129, 0.08)',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#059669',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <Phone size={20} />
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '4px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.725rem',
                        fontWeight: 800,
                        color: '#64748B',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                      }}
                    >
                      Immediate Advisory Desk
                    </span>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: '#052D5D',
                        background: 'rgba(5, 45, 93, 0.06)',
                        padding: '2px 8px',
                        borderRadius: '6px',
                      }}
                    >
                      Mon – Fri 9:00 – 19:00 IST
                    </span>
                  </div>
                  <a
                    href={`tel:${settings?.phone || '+91 98765 43210'}`}
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: 'var(--navy)',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                    className="directory-link"
                  >
                    {settings?.phone || '+91 98765 43210'}
                    <ArrowRight size={14} style={{ opacity: 0.6 }} />
                  </a>
                  <p style={{ margin: '3px 0 0 0', fontSize: '0.825rem', color: '#64748B', lineHeight: 1.4 }}>
                    Direct line to Practice Leadership for active engineering transformation mandates.
                  </p>
                </div>
              </div>

              {/* Channel 3: Dual Delivery Hubs */}
              <div
                style={{
                  padding: '1.4rem 1.6rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.25rem',
                  transition: 'background 0.2s ease',
                }}
                className="directory-item"
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(245, 158, 11, 0.08)',
                    border: '1px solid rgba(245, 158, 11, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#D97706',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '4px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.725rem',
                        fontWeight: 800,
                        color: '#64748B',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                      }}
                    >
                      Strategic Delivery Hubs
                    </span>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: '#D97706',
                        background: 'rgba(245, 158, 11, 0.1)',
                        padding: '2px 8px',
                        borderRadius: '6px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                      }}
                    >
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: '#10B981',
                        }}
                      />
                      IST (UTC+5:30) Active
                    </span>
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '3px' }}>
                    Bengaluru &amp; Mumbai, India
                  </div>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '0.5rem',
                      marginTop: '6px',
                    }}
                  >
                    <div style={{ fontSize: '0.8rem', color: '#475569' }}>
                      <strong style={{ color: 'var(--navy)' }}>Bengaluru:</strong> Cloud Lakehouse &amp; MLOps R&amp;D Hub
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#475569' }}>
                      <strong style={{ color: 'var(--navy)' }}>Mumbai:</strong> Executive BI &amp; Client Solutions
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Engagement Protocol (3-Stage Workflow - Handcrafted & High-Trust) */}
            <div>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: '#64748B',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '0.85rem',
                }}
              >
                Engagement Framework
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '0.85rem',
                }}
                className="protocol-row"
              >
                <div
                  style={{
                    background: '#FFFFFF',
                    padding: '1rem',
                    borderRadius: '12px',
                    border: '1px solid #E2E8F0',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <Compass size={16} style={{ color: 'var(--blue)' }} />
                    <span style={{ fontSize: '0.825rem', fontWeight: 800, color: 'var(--navy)' }}>
                      01. Scoping Call
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.75rem', color: '#64748B', lineHeight: 1.45 }}>
                    30-min discovery led by a Principal Architect under mutual NDA.
                  </p>
                </div>

                <div
                  style={{
                    background: '#FFFFFF',
                    padding: '1rem',
                    borderRadius: '12px',
                    border: '1px solid #E2E8F0',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <FileCheck size={16} style={{ color: '#10B981' }} />
                    <span style={{ fontSize: '0.825rem', fontWeight: 800, color: 'var(--navy)' }}>
                      02. 100% Client IP
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.75rem', color: '#64748B', lineHeight: 1.45 }}>
                    Zero vendor lock-in. All pipelines, models, and code are 100% yours.
                  </p>
                </div>

                <div
                  style={{
                    background: '#FFFFFF',
                    padding: '1rem',
                    borderRadius: '12px',
                    border: '1px solid #E2E8F0',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <TrendingUp size={16} style={{ color: '#8B5CF6' }} />
                    <span style={{ fontSize: '0.825rem', fontWeight: 800, color: 'var(--navy)' }}>
                      03. Clear Roadmap
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.75rem', color: '#64748B', lineHeight: 1.45 }}>
                    Deterministic milestones, timeline estimates, and feasibility audit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bespoke "Technical Consultation Briefing" Form */}
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 25px 60px -15px rgba(5, 45, 93, 0.08), 0 0 0 1px rgba(226, 232, 240, 0.5)',
              overflow: 'hidden',
              position: 'relative',
            }}
            className="contact-briefing-card"
          >
            {/* Top Multi-Color Engineering Accent Bar */}
            <div
              style={{
                height: '4px',
                width: '100%',
                background: 'linear-gradient(90deg, #158AE2 0%, #052D5D 50%, #10B981 100%)',
              }}
            />

            <div style={{ padding: '2.5rem 2.5rem 2.25rem 2.5rem' }} className="form-inner">
              {/* Form Header */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.35rem',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.6rem',
                      fontWeight: 800,
                      color: 'var(--navy)',
                      letterSpacing: '-0.02em',
                      margin: 0,
                    }}
                  >
                    Initiate Architecture Discovery
                  </h3>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      color: 'var(--blue)',
                      background: 'rgba(21, 138, 226, 0.08)',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.6px',
                    }}
                  >
                    Confidential
                  </span>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#64748B', margin: 0 }}>
                  Share your technical parameters below to be routed directly to the appropriate Practice Specialist.
                </p>
              </div>

              {/* Status Notifications */}
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
                    marginBottom: '1.75rem',
                    fontSize: '0.925rem',
                    fontWeight: 600,
                  }}
                >
                  <CheckCircle2 size={22} style={{ color: '#10B981', flexShrink: 0 }} />
                  <span>
                    Thank you! Your briefing has been routed to our practice leadership. A Senior Solution Architect will reach out within 24 hours.
                  </span>
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
                    marginBottom: '1.75rem',
                    fontSize: '0.925rem',
                    fontWeight: 600,
                  }}
                >
                  <AlertCircle size={22} style={{ color: '#EF4444', flexShrink: 0 }} />
                  <span>{status.error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Row 1: Name & Company */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.15rem' }} className="bespoke-form-row">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '6px' }}>
                      Your Full Name <span style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bespoke-input"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '6px' }}>
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Enterprise Ltd"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="bespoke-input"
                    />
                  </div>
                </div>

                {/* Row 2: Email & Phone */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.15rem' }} className="bespoke-form-row">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '6px' }}>
                      Corporate Email <span style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bespoke-input"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '6px' }}>
                      Direct Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bespoke-input"
                    />
                  </div>
                </div>

                {/* Row 3: Interactive Practice Selector (Handcrafted Chips) */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '8px' }}>
                    Practice Area of Primary Interest
                  </label>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                    }}
                  >
                    {PRACTICES.map((p) => {
                      const isSelected = formData.service === p.label;
                      return (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, service: p.label })}
                          style={{
                            padding: '6px 12px',
                            fontSize: '0.8rem',
                            fontWeight: 700,
                            borderRadius: '8px',
                            border: isSelected
                              ? '1.5px solid var(--navy)'
                              : '1px solid #E2E8F0',
                            background: isSelected ? 'var(--navy)' : '#F8FAFC',
                            color: isSelected ? '#FFFFFF' : '#334155',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            transition: 'all 0.2s ease',
                          }}
                          className="practice-chip"
                        >
                          {isSelected && <Check size={13} style={{ color: '#10B981', strokeWidth: 3 }} />}
                          <span>{p.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Row 4: Project Objectives */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '6px' }}>
                    Project Objectives or Technical Scope <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your current tech stack (e.g. AWS, Snowflake, SQL Server), expected timeline, data volumes, or specific target business outcomes..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bespoke-input"
                    style={{ resize: 'none', lineHeight: 1.6 }}
                  />
                </div>

                {/* Security Reassurance */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.775rem',
                    color: '#64748B',
                    padding: '4px 0',
                  }}
                >
                  <Lock size={14} style={{ color: '#10B981', flexShrink: 0 }} />
                  <span>Confidentiality Guaranteed: All inquiries protected under Mutual NDA protocols.</span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status.loading}
                  style={{
                    width: '100%',
                    padding: '1.05rem',
                    fontSize: '0.98rem',
                    fontWeight: 700,
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #158AE2 0%, #0A4FA8 100%)',
                    color: '#FFFFFF',
                    border: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    cursor: status.loading ? 'not-allowed' : 'pointer',
                    boxShadow: '0 8px 20px rgba(21, 138, 226, 0.3)',
                    transition: 'all 0.25s ease',
                  }}
                  className="bespoke-submit-btn"
                >
                  {status.loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Submitting Briefing...
                    </>
                  ) : (
                    <>
                      Submit Consultation Request <ArrowRight size={17} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.bespoke-input) {
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
        :global(.bespoke-input:focus) {
          background: #FFFFFF;
          border-color: #158AE2;
          box-shadow: 0 0 0 3px rgba(21, 138, 226, 0.15);
        }
        :global(.directory-item:hover) {
          background: rgba(248, 250, 252, 0.9);
        }
        :global(.directory-link:hover) {
          color: var(--blue) !important;
        }
        :global(.practice-chip:hover) {
          border-color: #CBD5E1;
        }
        :global(.bespoke-submit-btn:hover) {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(21, 138, 226, 0.42) !important;
        }
        @media (max-width: 980px) {
          :global(.contact-split-grid) {
            grid-template-columns: 1fr !important;
            gap: 3.5rem !important;
          }
          :global(.form-inner) {
            padding: 2rem 1.5rem !important;
          }
          :global(.bespoke-form-row) {
            grid-template-columns: 1fr !important;
          }
          :global(.protocol-row) {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
          }
        }
      `}</style>
    </section>
  );
}
