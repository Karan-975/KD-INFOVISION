'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';

export default function ContactSection({ settings }) {
  const displayAddress =
    settings?.address ||
    'Shop No 9, Ananat Kanakar Marg, Bandra East, Mumbai, Maharashtra 400051';
  const displayPhone = settings?.phone || '+91 9820536031';
  const displayEmail = settings?.email || 'admin@kdinfovision.com';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    jobTitle: '',
    company: '',
    city: '',
    message: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          company: formData.company
            ? `${formData.company}${formData.jobTitle ? ' (' + formData.jobTitle + ')' : ''}`
            : formData.jobTitle || null,
          service: formData.city
            ? `Inquiry from ${formData.city}`
            : 'Enterprise Consultation',
          message: formData.message,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit message');
      }

      setStatus({ loading: false, success: true, error: null });
      setFormData({
        name: '',
        phone: '',
        email: '',
        jobTitle: '',
        company: '',
        city: '',
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
        padding: '95px 0 100px',
        background: '#000000',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid #141414',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1.05fr 1.35fr',
            gap: '60px',
            alignItems: 'flex-start',
          }}
          className="contact-layout-grid"
        >
          {/* Left Column: Let's Connect Header + Contact Information (Exact Image-2 Layout) */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 'clamp(2.4rem, 3.6vw, 3.2rem)',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                margin: '0 0 18px 0',
              }}
            >
              Let&apos;s Connect.
            </h2>

            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.65,
                color: '#9ca3af',
                margin: '0 0 35px 0',
                maxWidth: '460px',
              }}
            >
              Reach out to us for any questions or support. Our dedicated team is
              here to provide prompt and helpful assistance.
            </p>

            {/* Contact Details List (Image-2 exact format) */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
              }}
            >
              {/* Direct Phone */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '8px',
                    background: '#1a1a1f',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#2b6df5',
                    flexShrink: 0,
                  }}
                >
                  <Phone size={18} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '11px',
                      color: '#9ca3af',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                      letterSpacing: '0.8px',
                      marginBottom: '2px',
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    DIRECT PHONE
                  </div>
                  <a
                    href={`tel:${displayPhone.replace(/\s+/g, '')}`}
                    style={{
                      color: '#FFFFFF',
                      fontSize: '15px',
                      fontWeight: 500,
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#2b6df5')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  >
                    {displayPhone}
                  </a>
                </div>
              </div>

              {/* Official Email */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '8px',
                    background: '#1a1a1f',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#2b6df5',
                    flexShrink: 0,
                  }}
                >
                  <Mail size={18} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '11px',
                      color: '#9ca3af',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                      letterSpacing: '0.8px',
                      marginBottom: '2px',
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    OFFICIAL EMAIL
                  </div>
                  <a
                    href={`mailto:${displayEmail}`}
                    style={{
                      color: '#FFFFFF',
                      fontSize: '15px',
                      fontWeight: 500,
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#2b6df5')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  >
                    {displayEmail}
                  </a>
                </div>
              </div>

              {/* Corporate Headquarters */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '8px',
                    background: '#1a1a1f',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#2b6df5',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <MapPin size={18} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '11px',
                      color: '#9ca3af',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                      letterSpacing: '0.8px',
                      marginBottom: '2px',
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    CORPORATE HEADQUARTERS
                  </div>
                  <div
                    style={{
                      color: '#FFFFFF',
                      fontSize: '14.5px',
                      fontWeight: 500,
                      lineHeight: 1.5,
                      maxWidth: '380px',
                    }}
                  >
                    {displayAddress}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Form (Exact Image-2 Fields & Layout: NO outer card) */}
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '18px',
              width: '100%',
              background: 'transparent',
              border: 'none',
              padding: 0,
              boxShadow: 'none',
            }}
          >
            {/* Status alerts */}
            {status.success && (
              <div
                style={{
                  background: 'rgba(43, 109, 245, 0.1)',
                  border: '1px solid rgba(43, 109, 245, 0.3)',
                  color: '#60a5fa',
                  padding: '12px 18px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              >
                <CheckCircle2 size={18} />
                <span>Thank you! Your message has been sent successfully. We will contact you shortly.</span>
              </div>
            )}

            {status.error && (
              <div
                style={{
                  background: 'rgba(239, 68, 68, 0.15)',
                  border: '1px solid rgba(239, 68, 68, 0.4)',
                  color: '#f87171',
                  padding: '12px 18px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              >
                <AlertCircle size={18} />
                <span>{status.error}</span>
              </div>
            )}

            {/* Row 1: Full Name & Phone */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '18px',
              }}
              className="form-row-2col"
            >
              <div>
                <label className="field-label">FULL NAME</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  required
                  className="contact-dark-input"
                />
              </div>

              <div>
                <label className="field-label">PHONE</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="contact-dark-input"
                />
              </div>
            </div>

            {/* Row 2: Email Address (Full Width) */}
            <div>
              <label className="field-label">EMAIL ADDRESS</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                required
                className="contact-dark-input"
              />
            </div>

            {/* Row 3: Job Title & Company */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '18px',
              }}
              className="form-row-2col"
            >
              <div>
                <label className="field-label">JOB TITLE</label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  placeholder="Job title"
                  className="contact-dark-input"
                />
              </div>

              <div>
                <label className="field-label">COMPANY</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company"
                  className="contact-dark-input"
                />
              </div>
            </div>

            {/* Row 4: City */}
            <div>
              <label className="field-label">CITY</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="contact-dark-input"
              />
            </div>

            {/* Row 5: Message */}
            <div>
              <label className="field-label">MESSAGE</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows={4}
                required
                className="contact-dark-input"
                style={{ resize: 'vertical', minHeight: '110px' }}
              />
            </div>

            {/* Submit Button (Exact Image-2 Team Computers Style: #2b6df5) */}
            <div style={{ marginTop: '6px' }}>
              <button
                type="submit"
                disabled={status.loading}
                className="contact-submit-btn"
                style={{
                  background: '#2b6df5',
                  color: '#ffffff',
                  padding: '14px 44px',
                  borderRadius: '8px',
                  fontSize: '15px',
                  fontWeight: 600,
                  fontFamily: "'Montserrat', sans-serif",
                  border: 'none',
                  cursor: status.loading ? 'not-allowed' : 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'background 0.3s ease, transform 0.2s ease',
                }}
              >
                {status.loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit</span>
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        .field-label {
          display: block;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: #9ca3af;
          margin-bottom: 8px;
          font-family: 'Montserrat', sans-serif;
        }

        .contact-dark-input {
          width: 100%;
          background: #1a1a1f;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 14px 18px;
          color: #ffffff;
          font-size: 15px;
          font-family: inherit;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
          box-sizing: border-box;
          outline: none;
        }

        .contact-dark-input::placeholder {
          color: #555d70;
        }

        .contact-dark-input:focus {
          border-color: #2b6df5;
          box-shadow: 0 0 0 2px rgba(43, 109, 245, 0.25);
          background: #1e1e24;
        }

        .contact-submit-btn:hover {
          background: #4a84f7 !important;
          transform: translateY(-2px);
        }

        @media (max-width: 960px) {
          :global(.contact-layout-grid) {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          :global(.form-row-2col) {
            grid-template-columns: 1fr !important;
            gap: 18px !important;
          }
        }
      `}</style>
    </section>
  );
}
