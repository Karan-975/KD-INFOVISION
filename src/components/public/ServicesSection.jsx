'use client';

import React, { useState } from 'react';
import {
  BrainCircuit,
  BarChart3,
  Code2,
  Compass,
  Layers,
  Database,
  Cloud,
  Activity,
  ArrowRight,
  X,
  CheckCircle,
  Sparkles,
} from 'lucide-react';

const iconMap = {
  BrainCircuit,
  BarChart3,
  Code2,
  Compass,
  Layers,
  Database,
  Cloud,
  Activity,
};

function ServiceCard({ service, onSelect }) {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const IconComp = iconMap[service.icon] || BrainCircuit;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rx = ((e.clientY - rect.top - cy) / cy) * -6;
    const ry = ((e.clientX - rect.left - cx) / cx) * 6;
    setTilt({ rx, ry });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(service)}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateY(${tilt.rx !== 0 ? -8 : 0}px)`,
        padding: '2.25rem 1.75rem',
        borderRadius: 'var(--radius-lg)',
        background: '#FFFFFF',
        border: '1.5px solid var(--gray-200)',
        boxShadow: tilt.rx !== 0 ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.15rem',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease',
      }}
    >
      {/* Bottom Gradient Accent on hover */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #1B3A6B, #3D9BE9)',
        }}
      />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span
          style={{
            fontSize: '0.75rem',
            fontWeight: 800,
            color: 'var(--blue)',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
          }}
        >
          {service.num}
        </span>
        <div
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '12px',
            background: 'var(--blue-light)',
            border: '1px solid rgba(61, 155, 233, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--blue)',
          }}
        >
          <IconComp size={22} />
        </div>
      </div>

      <h3
        style={{
          fontSize: '1.15rem',
          fontWeight: 800,
          color: 'var(--navy)',
          lineHeight: 1.3,
        }}
      >
        {service.title}
      </h3>

      <p
        style={{
          fontSize: '0.9rem',
          lineHeight: 1.65,
          color: 'var(--muted)',
          flex: 1,
        }}
      >
        {service.description}
      </p>

      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '0.85rem',
          fontWeight: 700,
          color: 'var(--blue)',
          marginTop: '0.5rem',
        }}
      >
        Learn More <ArrowRight size={14} />
      </div>
    </div>
  );
}

export default function ServicesSection({ services = [] }) {
  const [selectedService, setSelectedService] = useState(null);

  const ModalIcon = selectedService ? iconMap[selectedService.icon] || BrainCircuit : null;

  return (
    <section id="solutions" style={{ background: 'var(--gray-50)' }}>
      <div className="container">
        {/* Header Row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '3.5rem',
            gap: '2rem',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div className="sec-eye">What We Do</div>
            <h2 className="sec-title" style={{ marginBottom: 0 }}>
              Explore Our Tech Solutions
            </h2>
          </div>
          <p className="sec-sub" style={{ maxWidth: '380px' }}>
            Eight powerful specializations built for enterprise-scale performance and competitive advantage.
          </p>
        </div>

        {/* 4x2 Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
          }}
          className="services-grid"
        >
          {services.map((service) => (
            <ServiceCard key={service.id || service.num} service={service} onSelect={setSelectedService} />
          ))}
        </div>
      </div>

      {/* Deep-Dive Detail Modal */}
      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: 'var(--blue-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--blue)',
                  }}
                >
                  {ModalIcon && <ModalIcon size={28} />}
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--blue)', letterSpacing: '1px' }}>
                    SOLUTION {selectedService.num}
                  </span>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--navy)' }}>
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedService(null)}
                style={{
                  background: 'var(--gray-100)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--muted)',
                }}
              >
                <X size={20} />
              </button>
            </div>

            <p style={{ fontSize: '1.05rem', color: 'var(--body)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {selectedService.description}
            </p>

            {selectedService.details && (
              <div
                style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--blue-xlight)',
                  border: '1px solid var(--blue-light)',
                  marginBottom: '2rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>
                  <Sparkles size={18} color="var(--blue)" />
                  Enterprise Implementation
                </div>
                <p style={{ fontSize: '0.925rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                  {selectedService.details}
                </p>
              </div>
            )}

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setSelectedService(null)}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--gray-100)',
                  border: 'none',
                  fontWeight: 600,
                  cursor: 'pointer',
                  color: 'var(--body)',
                }}
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="btn-primary"
                style={{ padding: '0.75rem 1.5rem' }}
              >
                Inquire for this Service
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 1100px) {
          :global(.services-grid) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          :global(.services-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
