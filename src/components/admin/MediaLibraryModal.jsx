'use client';

import React, { useState, useEffect } from 'react';
import { X, Upload, Check, Trash2, Copy, Image as ImageIcon, Loader2 } from 'lucide-react';

export default function MediaLibraryModal({ isOpen, onClose, onSelect }) {
  const [mediaList, setMediaList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState('');

  const fetchMedia = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/upload');
      const data = await res.json();
      if (data.success) {
        setMediaList(data.files || []);
      }
    } catch (error) {
      console.error('Failed to load media:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchMedia();
    }
  }, [isOpen]);

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        await fetchMedia();
      }
    } catch (err) {
      alert('Upload failed: ' + err.message);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (fileName) => {
    if (!confirm('Are you sure you want to delete this media file?')) return;

    try {
      const res = await fetch('/api/upload', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fileName }),
      });

      const data = await res.json();
      if (data.success) {
        setMediaList((prev) => prev.filter((item) => item.name !== fileName));
      }
    } catch (err) {
      alert('Delete failed: ' + err.message);
    }
  };

  const copyToClipboard = (url) => {
    navigator.clipboard.writeText(window.location.origin + url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(''), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '850px',
          padding: '2rem',
          maxHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--navy)' }}>Media Asset Library</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>
              Upload and select images or assets for your website sections
            </p>
          </div>
          <button
            onClick={onClose}
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

        {/* Upload Drop Zone */}
        <div
          style={{
            border: '2px dashed var(--gray-300)',
            borderRadius: 'var(--radius-md)',
            padding: '2rem',
            textAlign: 'center',
            background: 'var(--gray-50)',
            marginBottom: '1.5rem',
            cursor: 'pointer',
            position: 'relative',
          }}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            disabled={uploading}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0,
              cursor: 'pointer',
            }}
          />
          {uploading ? (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: 'var(--blue)' }}>
              <Loader2 size={24} className="animate-spin" /> Uploading asset to /public/uploads/...
            </div>
          ) : (
            <div>
              <Upload size={32} color="var(--blue)" style={{ margin: '0 auto 0.75rem auto' }} />
              <div style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '0.95rem' }}>
                Click to upload an image from your computer
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '4px' }}>
                Supports PNG, JPG, WEBP, SVG
              </div>
            </div>
          )}
        </div>

        {/* Media Grid */}
        <div style={{ flex: 1, overflowY: 'auto', minHeight: '220px' }}>
          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '3rem', color: 'var(--muted)' }}>
              <Loader2 size={28} className="animate-spin" />
            </div>
          ) : mediaList.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--muted)' }}>
              <ImageIcon size={40} style={{ margin: '0 auto 0.75rem auto', opacity: 0.4 }} />
              <p>No uploaded media found yet. Upload your first image above.</p>
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                gap: '1rem',
              }}
            >
              {mediaList.map((item) => (
                <div
                  key={item.name}
                  style={{
                    border: '1.5px solid var(--gray-200)',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    background: '#FFFFFF',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      height: '120px',
                      background: 'var(--gray-100)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={item.url}
                      alt={item.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div style={{ padding: '0.75rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: 'var(--navy)',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                      title={item.name}
                    >
                      {item.name}
                    </div>
                    <div style={{ display: 'flex', gap: '6px', marginTop: 'auto' }}>
                      {onSelect && (
                        <button
                          onClick={() => {
                            onSelect(item.url);
                            onClose();
                          }}
                          style={{
                            flex: 1,
                            padding: '4px 8px',
                            borderRadius: '4px',
                            background: 'var(--blue)',
                            color: '#FFFFFF',
                            border: 'none',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            cursor: 'pointer',
                          }}
                        >
                          Select
                        </button>
                      )}
                      <button
                        onClick={() => copyToClipboard(item.url)}
                        title="Copy URL"
                        style={{
                          padding: '4px 8px',
                          borderRadius: '4px',
                          background: 'var(--gray-100)',
                          border: 'none',
                          cursor: 'pointer',
                          color: copiedUrl === item.url ? '#16A34A' : 'var(--muted)',
                        }}
                      >
                        {copiedUrl === item.url ? <Check size={14} /> : <Copy size={14} />}
                      </button>
                      <button
                        onClick={() => handleDelete(item.name)}
                        title="Delete asset"
                        style={{
                          padding: '4px 8px',
                          borderRadius: '4px',
                          background: '#FEE2E2',
                          color: '#DC2626',
                          border: 'none',
                          cursor: 'pointer',
                        }}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
