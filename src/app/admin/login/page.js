'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, User, Eye, EyeOff, ShieldCheck, ArrowRight, Loader2, AlertCircle } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Invalid credentials');
      }

      router.push('/admin');
      router.refresh();
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #060E1C 0%, #0F2347 50%, #1B3A6B 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient background decoration */}
      <div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(61, 155, 233, 0.15) 0%, transparent 70%)',
          top: '-100px',
          right: '-100px',
          filter: 'blur(50px)',
        }}
      />

      <div
        style={{
          maxWidth: '440px',
          width: '100%',
          background: 'rgba(15, 35, 71, 0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: 'var(--radius-xl)',
          padding: '3rem 2.5rem',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* Brand Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #3D9BE9 0%, #1B3A6B 100%)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              marginBottom: '1rem',
              boxShadow: '0 8px 24px rgba(61, 155, 233, 0.4)',
            }}
          >
            <ShieldCheck size={30} />
          </div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.5px' }}>
            KD Infovision CMS
          </h1>
          <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.55)', marginTop: '0.35rem' }}>
            Sign in to access admin management portal
          </p>
        </div>

        {error && (
          <div
            style={{
              padding: '0.875rem 1rem',
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(239, 68, 68, 0.15)',
              border: '1px solid #EF4444',
              color: '#F87171',
              fontSize: '0.875rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '1.5rem',
            }}
          >
            <AlertCircle size={18} />
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.75)', marginBottom: '6px' }}>
              Username or Email
            </label>
            <div style={{ position: 'relative' }}>
              <User
                size={18}
                style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.4)' }}
              />
              <input
                type="text"
                required
                placeholder="admin"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem 0.85rem 2.75rem',
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
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.75)', marginBottom: '6px' }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <Lock
                size={18}
                style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.4)' }}
              />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.85rem 2.75rem 0.85rem 2.75rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1.5px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontSize: '0.95rem',
                  outline: 'none',
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'transparent',
                  border: 'none',
                  color: 'rgba(255,255,255,0.45)',
                  cursor: 'pointer',
                  padding: '4px',
                }}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', padding: '4px 0' }}>
            Default test credentials: <code>admin</code> / <code>admin123</code>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary"
            style={{
              width: '100%',
              padding: '0.95rem',
              fontSize: '1rem',
              marginTop: '0.5rem',
            }}
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" /> Authenticating...
              </>
            ) : (
              <>
                Sign In to Admin Portal <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
