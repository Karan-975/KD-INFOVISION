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
        padding: '5rem 0 7rem',
        background: '#040612',
        position: 'relative',
        overflow: 'hidden',
        color: '#FFFFFF',
      }}
    >
      {/* Background Ambient Lighting Combination matching Image 3 */}
      {/* Left Purple/Violet Glowing Nebula */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '-15%',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(139, 92, 246, 0.22) 0%, rgba(124, 58, 237, 0.1) 45%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      {/* Right Teal/Cyan/Emerald Glowing Nebula */}
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '-15%',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(6, 182, 212, 0.12) 45%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1.05fr 1.35fr',
            gap: '4.5rem',
            alignItems: 'start',
          }}
          className="contact-layout-grid"
        >
          {/* Left Column: Let's Connect Header + Contact Information (Exact Image-2 Layout) */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 'clamp(2.4rem, 3.6vw, 3.4rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                marginBottom: '1.25rem',
              }}
            >
              Let&apos;s Connect.
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: 'rgba(255, 255, 255, 0.72)',
                marginBottom: '3rem',
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
                gap: '2rem',
              }}
            >
              {/* Direct Phone */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(14, 52, 98, 0.35)',
                    border: '1px solid rgba(0, 200, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38BDF8',
                    flexShrink: 0,
                  }}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 800,
                      letterSpacing: '0.8px',
                      color: '#8b949e',
                      textTransform: 'uppercase',
                      marginBottom: '4px',
                    }}
                  >
                    DIRECT PHONE
                  </div>
                  <a
                    href={`tel:${displayPhone.replace(/\s+/g, '')}`}
                    style={{
                      color: '#FFFFFF',
                      fontSize: '15px',
                      fontWeight: 600,
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#38BDF8')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  >
                    {displayPhone}
                  </a>
                </div>
              </div>

              {/* Official Email */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(14, 52, 98, 0.35)',
                    border: '1px solid rgba(0, 200, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38BDF8',
                    flexShrink: 0,
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 800,
                      letterSpacing: '0.8px',
                      color: '#8b949e',
                      textTransform: 'uppercase',
                      marginBottom: '4px',
                    }}
                  >
                    OFFICIAL EMAIL
                  </div>
                  <a
                    href={`mailto:${displayEmail}`}
                    style={{
                      color: '#FFFFFF',
                      fontSize: '15px',
                      fontWeight: 600,
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#38BDF8')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  >
                    {displayEmail}
                  </a>
                </div>
              </div>

              {/* Corporate Headquarters */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(14, 52, 98, 0.35)',
                    border: '1px solid rgba(0, 200, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38BDF8',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 800,
                      letterSpacing: '0.8px',
                      color: '#8b949e',
                      textTransform: 'uppercase',
                      marginBottom: '4px',
                    }}
                  >
                    CORPORATE HEADQUARTERS
                  </div>
                  <div
                    style={{
                      color: '#FFFFFF',
                      fontSize: '14.5px',
                      fontWeight: 600,
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

          {/* Right Column: The Form (Exact Image-2 Fields & Layout) */}
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              width: '100%',
            }}
          >
            {/* Status alerts */}
            {status.success && (
              <div
                style={{
                  background: 'rgba(13, 177, 106, 0.15)',
                  border: '1px solid rgba(13, 177, 106, 0.4)',
                  color: '#19D58A',
                  padding: '12px 18px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '14px',
                  fontWeight: 600,
                }}
              >
                <CheckCircle2 size={18} />
                <span>Thank you! Your message has been sent successfully. Our architects will contact you shortly.</span>
              </div>
            )}

            {status.error && (
              <div
                style={{
                  background: 'rgba(239, 68, 68, 0.15)',
                  border: '1px solid rgba(239, 68, 68, 0.4)',
                  color: '#f87171',
                  padding: '12px 18px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '14px',
                  fontWeight: 600,
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
                gap: '1.25rem',
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
                gap: '1.25rem',
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
                style={{ resize: 'vertical' }}
              />
            </div>

            {/* Submit Button (Matching Image 3 "Let's Connect ->" gradient) */}
            <div style={{ marginTop: '0.5rem' }}>
              <button
                type="submit"
                disabled={status.loading}
                className="contact-submit-btn"
                style={{
                  background:
                    'linear-gradient(259.44deg, #9DA8FB 25.03%, #9266FD 90.57%)',
                  color: '#FFFFFF',
                  padding: '14px 40px',
                  borderRadius: '40px',
                  fontSize: '15px',
                  fontWeight: 700,
                  fontFamily: "'Montserrat', sans-serif",
                  border: 'none',
                  cursor: status.loading ? 'not-allowed' : 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: '0 8px 24px rgba(157, 168, 251, 0.3)',
                }}
              >
                {status.loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Let&apos;s Connect</span>
                    <ArrowRight size={17} style={{ strokeWidth: 2.5 }} />
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
          font-weight: 800;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: #8b949e;
          margin-bottom: 6px;
          font-family: 'Montserrat', sans-serif;
        }

        .contact-dark-input {
          width: 100%;
          background: #11141c;
          border: 1px solid #1f2535;
          border-radius: 8px;
          padding: 13px 16px;
          color: #ffffff;
          font-size: 14.5px;
          font-family: inherit;
          transition: all 0.25s ease;
          box-sizing: border-box;
        }

        .contact-dark-input::placeholder {
          color: #555d70;
        }

        .contact-dark-input:focus {
          outline: none;
          border-color: #9da8fb;
          background: #141722;
          box-shadow: 0 0 12px rgba(157, 168, 251, 0.25);
        }

        .contact-submit-btn:hover {
          background: linear-gradient(
            259.44deg,
            #9266fd 25.03%,
            #9da8fb 90.57%
          ) !important;
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(157, 168, 251, 0.45) !important;
        }

        @media (max-width: 960px) {
          :global(.contact-layout-grid) {
            grid-template-columns: 1fr !important;
            gap: 3.5rem !important;
          }
          :global(.form-row-2col) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
