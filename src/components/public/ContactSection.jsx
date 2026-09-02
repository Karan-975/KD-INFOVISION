'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

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
    <section id="contact" style={{ padding: 0, background: 'var(--navy-deep)' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '620px',
        }}
        className="contact-split-grid"
      >
        {/* Left Info Pane */}
        <div
          style={{
            background: 'var(--navy-dark)',
            padding: '6rem 4.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            borderRight: '1px solid rgba(255, 255, 255, 0.08)',
          }}
          className="contact-left-pane"
        >
          <div className="sec-eye" style={{ color: 'var(--blue)' }}>
            Let&apos;s Connect
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 3.5vw, 3.25rem)',
              color: '#FFFFFF',
              lineHeight: 1.15,
              marginBottom: '1.25rem',
            }}
          >
            Build Something That Drives Real Impact.
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.75,
              color: 'rgba(255, 255, 255, 0.6)',
              marginBottom: '2.75rem',
              maxWidth: '480px',
            }}
          >
            Reach out for technical consultations, project demos, architecture reviews, or data strategy discussions.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#FFFFFF' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'rgba(61, 155, 233, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--blue-cyan)',
                }}
              >
                <Mail size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>Email Us</div>
                <a href={`mailto:${settings?.email || 'hello@kdinfovision.com'}`} style={{ color: '#FFFFFF', fontWeight: 600, textDecoration: 'none' }}>
                  {settings?.email || 'hello@kdinfovision.com'}
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#FFFFFF' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'rgba(61, 155, 233, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--blue-cyan)',
                }}
              >
                <Phone size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>Call Us</div>
                <a href={`tel:${settings?.phone || '+91 98765 43210'}`} style={{ color: '#FFFFFF', fontWeight: 600, textDecoration: 'none' }}>
                  {settings?.phone || '+91 98765 43210'}
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#FFFFFF' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'rgba(61, 155, 233, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--blue-cyan)',
                }}
              >
                <MapPin size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>Offices</div>
                <div style={{ color: '#FFFFFF', fontWeight: 600 }}>
                  {settings?.address || 'Bangalore & Mumbai, India'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Interactive Form */}
        <div
          style={{
            background: 'var(--navy-deep)',
            padding: '6rem 4.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
          className="contact-right-pane"
        >
          <h3
            style={{
              fontSize: '1.75rem',
              fontWeight: 800,
              color: '#FFFFFF',
              marginBottom: '1.75rem',
            }}
          >
            Send Us a Message
          </h3>

          {status.success && (
            <div
              style={{
                padding: '1.25rem',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(74, 222, 128, 0.15)',
                border: '1px solid #4ADE80',
                color: '#4ADE80',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '1.5rem',
                fontSize: '0.95rem',
                fontWeight: 600,
              }}
            >
              <CheckCircle2 size={20} />
              Thank you! Your message has been received. Our team will contact you within 24 hours.
            </div>
          )}

          {status.error && (
            <div
              style={{
                padding: '1.25rem',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(239, 68, 68, 0.15)',
                border: '1px solid #EF4444',
                color: '#F87171',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '1.5rem',
                fontSize: '0.95rem',
                fontWeight: 600,
              }}
            >
              <AlertCircle size={20} />
              {status.error}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1.5px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '8px',
                    color: '#FFFFFF',
                    fontSize: '0.95rem',
                    outline: 'none',
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Enterprise Co."
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1.5px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '8px',
                    color: '#FFFFFF',
                    fontSize: '0.95rem',
                    outline: 'none',
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1.5px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '8px',
                    color: '#FFFFFF',
                    fontSize: '0.95rem',
                    outline: 'none',
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1.5px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '8px',
                    color: '#FFFFFF',
                    fontSize: '0.95rem',
                    outline: 'none',
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>
                Service of Interest
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1.5px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontSize: '0.95rem',
                  outline: 'none',
                }}
              >
                <option value="AI & Machine Learning" style={{ background: '#0F2347', color: '#fff' }}>AI & Machine Learning</option>
                <option value="Data Analytics & BI" style={{ background: '#0F2347', color: '#fff' }}>Data Analytics & BI (Power BI / Qlik)</option>
                <option value="Software Development" style={{ background: '#0F2347', color: '#fff' }}>Software Development (Next.js / Laravel)</option>
                <option value="IT Consulting" style={{ background: '#0F2347', color: '#fff' }}>IT Strategy & Consulting</option>
                <option value="Digital Transformation" style={{ background: '#0F2347', color: '#fff' }}>Digital Transformation & ERP</option>
                <option value="Data Engineering & Cloud" style={{ background: '#0F2347', color: '#fff' }}>Data Engineering & Cloud (Azure / AWS)</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>
                Tell us about your project or questions *
              </label>
              <textarea
                required
                rows={3}
                placeholder="Briefly describe your objectives, data landscape, or challenges..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1.5px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontSize: '0.95rem',
                  outline: 'none',
                  resize: 'none',
                }}
              />
            </div>

            <button
              type="submit"
              disabled={status.loading}
              className="btn-primary"
              style={{
                width: '100%',
                padding: '1rem',
                fontSize: '1rem',
                marginTop: '0.5rem',
              }}
            >
              {status.loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Submitting...
                </>
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          :global(.contact-split-grid) {
            grid-template-columns: 1fr !important;
          }
          :global(.contact-left-pane),
          :global(.contact-right-pane) {
            padding: 4rem 1.5rem !important;
          }
          :global(.contact-left-pane) {
            border-right: none !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
          }
          :global(.form-row) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
