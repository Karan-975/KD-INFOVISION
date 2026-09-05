'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  Settings,
  Sliders,
  Cpu,
  BarChart2,
  Building,
  GitBranch,
  Hash,
  MessageSquareQuote,
  Network,
  BookOpen,
  Inbox,
  Image as ImageIcon,
  Database,
  LogOut,
  Plus,
  Trash2,
  Edit2,
  Save,
  CheckCircle,
  ExternalLink,
  Download,
  Upload,
  RefreshCw,
  Search,
  Filter,
  Eye,
  Loader2,
} from 'lucide-react';
import MediaLibraryModal from '@/components/admin/MediaLibraryModal';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ text: '', type: 'success' });
  const [mediaModalOpen, setMediaModalOpen] = useState(false);
  const [mediaTargetField, setMediaTargetField] = useState(null);

  // Data states
  const [settings, setSettings] = useState({});
  const [heroSlides, setHeroSlides] = useState([]);
  const [services, setServices] = useState([]);
  const [caseStudies, setCaseStudies] = useState([]);
  const [industries, setIndustries] = useState([]);
  const [processSteps, setProcessSteps] = useState([]);
  const [statCounters, setStatCounters] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [partners, setPartners] = useState([]);
  const [insights, setInsights] = useState([]);
  const [inquiries, setInquiries] = useState([]);

  // Inquiry filters
  const [inquirySearch, setInquirySearch] = useState('');
  const [inquiryFilter, setInquiryFilter] = useState('ALL');
  const [selectedInquiry, setSelectedInquiry] = useState(null);

  // Edit Modals / Inline states
  const [editingItem, setEditingItem] = useState(null);
  const [editingType, setEditingType] = useState('');

  const showNotification = (text, type = 'success') => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: '', type: 'success' }), 4000);
  };

  const getAuthHeaders = (extraHeaders = {}) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('admin_token') : null;
    return {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...extraHeaders,
    };
  };

  const checkAuthAndFetchData = async () => {
    try {
      const authRes = await fetch('/api/auth/me', {
        headers: getAuthHeaders(),
      });
      const authData = await authRes.json();
      if (!authData.success) {
        router.push('/admin/login');
        return;
      }
      setUser(authData.user);

      // Fetch all CMS data
      const [
        setRes,
        sliRes,
        srvRes,
        casRes,
        indRes,
        prcRes,
        staRes,
        tesRes,
        parRes,
        insRes,
        inqRes,
      ] = await Promise.all([
        fetch('/api/admin/settings', { headers: getAuthHeaders() }).then((r) => r.json()),
        fetch('/api/admin/slides', { headers: getAuthHeaders() }).then((r) => r.json()),
        fetch('/api/admin/services', { headers: getAuthHeaders() }).then((r) => r.json()),
        fetch('/api/admin/cases', { headers: getAuthHeaders() }).then((r) => r.json()),
        fetch('/api/admin/industries', { headers: getAuthHeaders() }).then((r) => r.json()),
        fetch('/api/admin/process', { headers: getAuthHeaders() }).then((r) => r.json()),
        fetch('/api/admin/stats', { headers: getAuthHeaders() }).then((r) => r.json()),
        fetch('/api/admin/testimonials', { headers: getAuthHeaders() }).then((r) => r.json()),
        fetch('/api/admin/partners', { headers: getAuthHeaders() }).then((r) => r.json()),
        fetch('/api/admin/insights', { headers: getAuthHeaders() }).then((r) => r.json()),
        fetch('/api/admin/inquiries', { headers: getAuthHeaders() }).then((r) => r.json()),
      ]);

      if (setRes.success) setSettings(setRes.settings || {});
      if (sliRes.success) setHeroSlides(sliRes.slides || []);
      if (srvRes.success) setServices(srvRes.services || []);
      if (casRes.success) setCaseStudies(casRes.cases || []);
      if (indRes.success) setIndustries(indRes.industries || []);
      if (prcRes.success) setProcessSteps(prcRes.steps || []);
      if (staRes.success) setStatCounters(staRes.stats || []);
      if (tesRes.success) setTestimonials(tesRes.testimonials || []);
      if (parRes.success) setPartners(parRes.partners || []);
      if (insRes.success) setInsights(insRes.insights || []);
      if (inqRes.success) setInquiries(inqRes.inquiries || []);
    } catch (err) {
      console.error('Error fetching admin data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuthAndFetchData();
  }, []);

  const handleLogout = async () => {
    try {
      localStorage.removeItem('admin_token');
    } catch (e) {}
    await fetch('/api/auth/me', { method: 'POST', headers: getAuthHeaders() });
    router.push('/admin/login');
  };

  // --- SAVE SETTINGS ---
  const handleSaveSettings = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: getAuthHeaders({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(settings),
      });
      const data = await res.json();
      if (data.success) {
        setSettings(data.settings);
        showNotification('Site settings updated successfully!');
      } else {
        throw new Error(data.error);
      }
    } catch (err) {
      showNotification(err.message, 'error');
    } finally {
      setSaving(false);
    }
  };

  // --- GENERIC CRUD HANDLERS ---
  const handleSaveGeneric = async (type, item, isNew = false) => {
    setSaving(true);
    const endpoint = `/api/admin/${type}`;
    const method = isNew ? 'POST' : 'PUT';

    try {
      const res = await fetch(endpoint, {
        method,
        headers: getAuthHeaders({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(item),
      });
      const data = await res.json();
      if (data.success) {
        showNotification(`${type.slice(0, -1)} saved successfully!`);
        setEditingItem(null);
        checkAuthAndFetchData();
      } else {
        throw new Error(data.error);
      }
    } catch (err) {
      showNotification(err.message, 'error');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteGeneric = async (type, id) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    try {
      const res = await fetch(`/api/admin/${type}?id=${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
      });
      const data = await res.json();
      if (data.success) {
        showNotification('Item deleted successfully!');
        checkAuthAndFetchData();
      } else {
        throw new Error(data.error);
      }
    } catch (err) {
      showNotification(err.message, 'error');
    }
  };

  // --- INQUIRY STATUS CHANGE ---
  const handleInquiryStatus = async (id, status) => {
    try {
      const res = await fetch('/api/admin/inquiries', {
        method: 'PUT',
        headers: getAuthHeaders({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({ id, status }),
      });
      const data = await res.json();
      if (data.success) {
        setInquiries((prev) => prev.map((inq) => (inq.id === id ? { ...inq, status } : inq)));
        showNotification('Lead status updated!');
      }
    } catch (err) {
      showNotification(err.message, 'error');
    }
  };

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--navy-dark)', color: '#FFFFFF' }}>
        <div style={{ textAlign: 'center' }}>
          <Loader2 size={40} className="animate-spin" color="var(--blue)" style={{ margin: '0 auto 1rem auto' }} />
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700 }}>Loading KD Infovision CMS...</div>
        </div>
      </div>
    );
  }

  const menuItems = [
    { id: 'overview', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'settings', label: 'Site Settings & Branding', icon: Settings },
    { id: 'slides', label: 'Hero Banner Slider', icon: Sliders, badge: heroSlides.length },
    { id: 'services', label: 'Services & Solutions', icon: Cpu, badge: services.length },
    { id: 'cases', label: 'Case Studies & Metrics', icon: BarChart2, badge: caseStudies.length },
    { id: 'industries', label: 'Industry Reach', icon: Building, badge: industries.length },
    { id: 'process', label: 'Process Steps', icon: GitBranch, badge: processSteps.length },
    { id: 'stats', label: 'Milestone Counters', icon: Hash, badge: statCounters.length },
    { id: 'testimonials', label: 'Testimonials', icon: MessageSquareQuote, badge: testimonials.length },
    { id: 'partners', label: 'Partners Marquee', icon: Network, badge: partners.length },
    { id: 'insights', label: 'Insights & Blogs', icon: BookOpen, badge: insights.length },
    { id: 'inquiries', label: 'Leads & Inquiries', icon: Inbox, badge: inquiries.filter((i) => i.status === 'NEW').length, badgeColor: '#EF4444' },
    { id: 'backup', label: 'Backup & Restore', icon: Database },
  ];

  const filteredInquiries = inquiries.filter((inq) => {
    const matchesFilter = inquiryFilter === 'ALL' || inq.status === inquiryFilter;
    const matchesSearch =
      (inq.name || '').toLowerCase().includes(inquirySearch.toLowerCase()) ||
      (inq.email || '').toLowerCase().includes(inquirySearch.toLowerCase()) ||
      (inq.company || '').toLowerCase().includes(inquirySearch.toLowerCase()) ||
      (inq.service || '').toLowerCase().includes(inquirySearch.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--gray-50)' }}>
      {/* SIDEBAR */}
      <aside
        style={{
          width: '280px',
          background: 'var(--navy-dark)',
          color: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          flexShrink: 0,
          position: 'sticky',
          top: 0,
          height: '100vh',
          borderRight: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        {/* Brand */}
        <div style={{ padding: '1.75rem 1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img
            src="/logo-mark.png"
            alt="KD Logo Mark"
            style={{
              height: '38px',
              width: 'auto',
              objectFit: 'contain',
              display: 'block',
            }}
          />
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.05rem', color: '#FFFFFF' }}>
              KD INFOVISION
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--blue-cyan)', fontWeight: 600, textTransform: 'uppercase' }}>
              Management Portal
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <nav style={{ flex: 1, overflowY: 'auto', padding: '1rem 0.75rem', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {menuItems.map((item) => {
            const IconComp = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setEditingItem(null);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  background: isActive ? 'var(--blue)' : 'transparent',
                  color: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '0.875rem',
                  transition: 'all 0.2s',
                  textAlign: 'left',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.background = 'transparent';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <IconComp size={18} />
                  <span>{item.label}</span>
                </div>
                {item.badge !== undefined && item.badge > 0 && (
                  <span
                    style={{
                      padding: '2px 8px',
                      borderRadius: '10px',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      background: item.badgeColor || 'rgba(255, 255, 255, 0.15)',
                      color: '#FFFFFF',
                    }}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* User Footer */}
        <div style={{ padding: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF' }}>{user?.username || 'Admin'}</div>
            <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)' }}>Logged in</div>
          </div>
          <button
            onClick={handleLogout}
            title="Logout"
            style={{
              background: 'rgba(239, 68, 68, 0.15)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#F87171',
              borderRadius: '8px',
              padding: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <LogOut size={16} />
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        {/* Top bar */}
        <header
          style={{
            height: '66px',
            background: '#FFFFFF',
            borderBottom: '1px solid var(--gray-200)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 2.5rem',
            position: 'sticky',
            top: 0,
            zIndex: 100,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy)' }}>
              {menuItems.find((m) => m.id === activeTab)?.label}
            </h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={() => setMediaModalOpen(true)}
              className="btn-secondary"
              style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
            >
              <ImageIcon size={16} /> Media Assets
            </button>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--blue)',
                textDecoration: 'none',
              }}
            >
              Live Website <ExternalLink size={14} />
            </a>
          </div>
        </header>

        {/* Notification Alert */}
        {message.text && (
          <div
            style={{
              padding: '1rem 2.5rem',
              background: message.type === 'error' ? '#FEE2E2' : '#DCFCE7',
              color: message.type === 'error' ? '#DC2626' : '#16A34A',
              fontWeight: 600,
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              borderBottom: '1px solid rgba(0,0,0,0.05)',
            }}
          >
            <CheckCircle size={18} />
            {message.text}
          </div>
        )}

        {/* Tab Body */}
        <div style={{ padding: '2.5rem', flex: 1, overflowY: 'auto' }}>
          {/* TAB: OVERVIEW */}
          {activeTab === 'overview' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {/* Metrics Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
                <div style={{ padding: '1.75rem', borderRadius: 'var(--radius-lg)', background: '#FFFFFF', border: '1.5px solid var(--gray-200)', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase' }}>Total Inquiries</div>
                  <div style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--navy)', marginTop: '6px' }}>{inquiries.length}</div>
                  <div style={{ fontSize: '0.8rem', color: '#16A34A', marginTop: '4px', fontWeight: 600 }}>{inquiries.filter((i) => i.status === 'NEW').length} New Leads</div>
                </div>
                <div style={{ padding: '1.75rem', borderRadius: 'var(--radius-lg)', background: '#FFFFFF', border: '1.5px solid var(--gray-200)', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase' }}>Active Services</div>
                  <div style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--blue)', marginTop: '6px' }}>{services.length}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '4px' }}>Published on site</div>
                </div>
                <div style={{ padding: '1.75rem', borderRadius: 'var(--radius-lg)', background: '#FFFFFF', border: '1.5px solid var(--gray-200)', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase' }}>Case Studies</div>
                  <div style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--navy)', marginTop: '6px' }}>{caseStudies.length}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '4px' }}>Client success stories</div>
                </div>
                <div style={{ padding: '1.75rem', borderRadius: 'var(--radius-lg)', background: '#FFFFFF', border: '1.5px solid var(--gray-200)', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase' }}>Database Engine</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#16A34A', marginTop: '12px' }}>MySQL 8.0</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '4px' }}>Connected via Prisma</div>
                </div>
              </div>

              {/* Recent Inquiries List */}
              <div style={{ background: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--gray-200)', padding: '2rem', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy)' }}>Latest Customer Inquiries</h3>
                  <button onClick={() => setActiveTab('inquiries')} className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                    View All Inquiries
                  </button>
                </div>

                {inquiries.length === 0 ? (
                  <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>No customer inquiries yet.</p>
                ) : (
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                      <thead>
                        <tr style={{ borderBottom: '2px solid var(--gray-200)', color: 'var(--muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                          <th style={{ padding: '0.75rem 1rem' }}>Date</th>
                          <th style={{ padding: '0.75rem 1rem' }}>Name</th>
                          <th style={{ padding: '0.75rem 1rem' }}>Company</th>
                          <th style={{ padding: '0.75rem 1rem' }}>Service</th>
                          <th style={{ padding: '0.75rem 1rem' }}>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {inquiries.slice(0, 5).map((inq) => (
                          <tr key={inq.id} style={{ borderBottom: '1px solid var(--gray-100)' }}>
                            <td style={{ padding: '1rem', color: 'var(--muted)' }}>{new Date(inq.createdAt).toLocaleDateString()}</td>
                            <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--navy)' }}>{inq.name}</td>
                            <td style={{ padding: '1rem', color: 'var(--body)' }}>{inq.company || '-'}</td>
                            <td style={{ padding: '1rem', color: 'var(--blue)', fontWeight: 600 }}>{inq.service}</td>
                            <td style={{ padding: '1rem' }}>
                              <span
                                style={{
                                  padding: '4px 10px',
                                  borderRadius: '12px',
                                  fontSize: '0.75rem',
                                  fontWeight: 700,
                                  background: inq.status === 'NEW' ? '#DCFCE7' : inq.status === 'CONTACTED' ? '#DBEAFE' : '#F3F4F6',
                                  color: inq.status === 'NEW' ? '#16A34A' : inq.status === 'CONTACTED' ? '#2563EB' : '#4B5563',
                                }}
                              >
                                {inq.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB: SITE SETTINGS */}
          {activeTab === 'settings' && (
            <div style={{ background: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--gray-200)', padding: '2.5rem', maxWidth: '800px', boxShadow: 'var(--shadow-sm)' }}>
              <form onSubmit={handleSaveSettings} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '6px' }}>Site Brand Name</label>
                    <input
                      type="text"
                      value={settings.siteName || ''}
                      onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1.5px solid var(--gray-300)', fontSize: '0.95rem' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '6px' }}>Tagline</label>
                    <input
                      type="text"
                      value={settings.tagline || ''}
                      onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1.5px solid var(--gray-300)', fontSize: '0.95rem' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '6px' }}>Contact Email</label>
                    <input
                      type="email"
                      value={settings.email || ''}
                      onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1.5px solid var(--gray-300)', fontSize: '0.95rem' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '6px' }}>Contact Phone</label>
                    <input
                      type="text"
                      value={settings.phone || ''}
                      onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1.5px solid var(--gray-300)', fontSize: '0.95rem' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '6px' }}>Office Address</label>
                  <input
                    type="text"
                    value={settings.address || ''}
                    onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1.5px solid var(--gray-300)', fontSize: '0.95rem' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '6px' }}>LinkedIn URL</label>
                    <input
                      type="text"
                      value={settings.socialLinkedin || ''}
                      onChange={(e) => setSettings({ ...settings, socialLinkedin: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1.5px solid var(--gray-300)', fontSize: '0.95rem' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '6px' }}>Twitter URL</label>
                    <input
                      type="text"
                      value={settings.socialTwitter || ''}
                      onChange={(e) => setSettings({ ...settings, socialTwitter: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1.5px solid var(--gray-300)', fontSize: '0.95rem' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '6px' }}>GitHub URL</label>
                    <input
                      type="text"
                      value={settings.socialGithub || ''}
                      onChange={(e) => setSettings({ ...settings, socialGithub: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1.5px solid var(--gray-300)', fontSize: '0.95rem' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '6px' }}>SEO Meta Description</label>
                  <textarea
                    rows={3}
                    value={settings.metaDesc || ''}
                    onChange={(e) => setSettings({ ...settings, metaDesc: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1.5px solid var(--gray-300)', fontSize: '0.95rem', resize: 'none' }}
                  />
                </div>

                <div>
                  <button type="submit" disabled={saving} className="btn-primary" style={{ padding: '0.85rem 2rem' }}>
                    {saving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />} Save All Changes
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB: HERO SLIDES */}
          {activeTab === 'slides' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy)' }}>Hero Banner Slides</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>Manage slides, headlines, visualizers, and call-to-actions</p>
                </div>
                <button
                  onClick={() => {
                    setEditingType('slides');
                    setEditingItem({
                      tag: 'New Tag',
                      headline: 'Turning Data Into',
                      headlineEmp: 'Competitive Advantage',
                      subtext: '',
                      primaryBtn: 'Explore Services',
                      primaryUrl: '#solutions',
                      secBtn: 'Talk to an Expert →',
                      secUrl: '#contact',
                      svgType: 'analytics',
                      bgGradient: 'linear-gradient(135deg,#0F2347 0%,#1B3A6B 55%,#0D2B5E 100%)',
                      isActive: true,
                    });
                  }}
                  className="btn-primary"
                >
                  <Plus size={18} /> Add New Slide
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
                {heroSlides.map((slide, idx) => (
                  <div key={slide.id} style={{ background: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--gray-200)', padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem', boxShadow: 'var(--shadow-sm)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--blue)', textTransform: 'uppercase' }}>SLIDE #{idx + 1}</span>
                      <span style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '6px', background: slide.isActive ? '#DCFCE7' : '#FEE2E2', color: slide.isActive ? '#16A34A' : '#DC2626', fontWeight: 700 }}>
                        {slide.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </div>

                    <div style={{ fontSize: '0.8rem', color: 'var(--muted)', fontWeight: 600 }}>Tag: {slide.tag}</div>
                    <h4 style={{ fontSize: '1.15rem', color: 'var(--navy)', lineHeight: 1.3 }}>
                      {slide.headline} <span style={{ color: 'var(--blue)' }}>{slide.headlineEmp}</span>
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--body)', lineHeight: 1.6, flex: 1 }}>{slide.subtext}</p>
                    <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Visualizer: <strong>{slide.svgType}</strong></div>

                    <div style={{ display: 'flex', gap: '8px', borderTop: '1px solid var(--gray-200)', paddingTop: '1rem', marginTop: 'auto' }}>
                      <button
                        onClick={() => {
                          setEditingType('slides');
                          setEditingItem({ ...slide });
                        }}
                        className="btn-secondary"
                        style={{ flex: 1, padding: '0.5rem', fontSize: '0.85rem' }}
                      >
                        <Edit2 size={14} /> Edit
                      </button>
                      <button
                        onClick={() => handleDeleteGeneric('slides', slide.id)}
                        style={{ padding: '0.5rem 0.85rem', borderRadius: '8px', background: '#FEE2E2', color: '#DC2626', border: 'none', cursor: 'pointer' }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: SERVICES */}
          {activeTab === 'services' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy)' }}>Services & Solutions Catalog</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>Manage all 8+ core service offerings and deep-dive modal content</p>
                </div>
                <button
                  onClick={() => {
                    setEditingType('services');
                    setEditingItem({
                      num: `0${services.length + 1}`,
                      title: 'New Service',
                      description: 'Comprehensive enterprise solution description...',
                      icon: 'BrainCircuit',
                      details: 'Detailed implementation workflow and technologies...',
                      linkUrl: '#contact',
                      isActive: true,
                    });
                  }}
                  className="btn-primary"
                >
                  <Plus size={18} /> Add New Service
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
                {services.map((srv) => (
                  <div key={srv.id} style={{ background: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--gray-200)', padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.85rem', boxShadow: 'var(--shadow-sm)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--blue)' }}>NUM: {srv.num}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 600 }}>Icon: {srv.icon}</span>
                    </div>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--navy)' }}>{srv.title}</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.6, flex: 1 }}>{srv.description}</p>
                    <div style={{ display: 'flex', gap: '8px', borderTop: '1px solid var(--gray-200)', paddingTop: '1rem', marginTop: 'auto' }}>
                      <button
                        onClick={() => {
                          setEditingType('services');
                          setEditingItem({ ...srv });
                        }}
                        className="btn-secondary"
                        style={{ flex: 1, padding: '0.5rem', fontSize: '0.85rem' }}
                      >
                        <Edit2 size={14} /> Edit
                      </button>
                      <button
                        onClick={() => handleDeleteGeneric('services', srv.id)}
                        style={{ padding: '0.5rem 0.85rem', borderRadius: '8px', background: '#FEE2E2', color: '#DC2626', border: 'none', cursor: 'pointer' }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: CASE STUDIES */}
          {activeTab === 'cases' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy)' }}>Case Studies & Impact Metrics</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>Manage client transformation stories and quantitative result badges</p>
                </div>
                <button
                  onClick={() => {
                    setEditingType('cases');
                    setEditingItem({
                      tag: 'BFSI',
                      resultNum: '50%',
                      resultLabel: 'Cost Reduction',
                      title: 'New Client Impact Case',
                      summary: 'Brief overview of the transformation...',
                      fullStory: 'Detailed challenge, architecture, and outcomes...',
                      isActive: true,
                    });
                  }}
                  className="btn-primary"
                >
                  <Plus size={18} /> Add Case Study
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '1.5rem' }}>
                {caseStudies.map((cs) => (
                  <div key={cs.id} style={{ background: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--gray-200)', padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem', boxShadow: 'var(--shadow-sm)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ padding: '4px 10px', borderRadius: '6px', background: 'var(--blue-light)', color: 'var(--blue)', fontWeight: 700, fontSize: '0.75rem' }}>
                        {cs.tag}
                      </span>
                      <span style={{ fontWeight: 800, color: '#16A34A', fontSize: '1.25rem' }}>{cs.resultNum}</span>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--muted)', fontWeight: 600 }}>Metric: {cs.resultLabel}</div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--navy)' }}>{cs.title}</h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.6, flex: 1 }}>{cs.summary}</p>
                    <div style={{ display: 'flex', gap: '8px', borderTop: '1px solid var(--gray-200)', paddingTop: '1rem', marginTop: 'auto' }}>
                      <button
                        onClick={() => {
                          setEditingType('cases');
                          setEditingItem({ ...cs });
                        }}
                        className="btn-secondary"
                        style={{ flex: 1, padding: '0.5rem', fontSize: '0.85rem' }}
                      >
                        <Edit2 size={14} /> Edit
                      </button>
                      <button
                        onClick={() => handleDeleteGeneric('cases', cs.id)}
                        style={{ padding: '0.5rem 0.85rem', borderRadius: '8px', background: '#FEE2E2', color: '#DC2626', border: 'none', cursor: 'pointer' }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: INQUIRIES & LEADS */}
          {activeTab === 'inquiries' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy)' }}>Customer Leads & Inquiries Inbox</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>Real-time consultation requests received from website contact form</p>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <a href="/api/admin/inquiries?export=csv" download className="btn-secondary" style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}>
                    <Download size={16} /> Export to CSV
                  </a>
                </div>
              </div>

              {/* Filters */}
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ position: 'relative', flex: 1, minWidth: '240px' }}>
                  <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }} />
                  <input
                    type="text"
                    placeholder="Search by name, company, email, or service..."
                    value={inquirySearch}
                    onChange={(e) => setInquirySearch(e.target.value)}
                    style={{ width: '100%', padding: '0.7rem 1rem 0.7rem 2.5rem', borderRadius: '8px', border: '1.5px solid var(--gray-300)', fontSize: '0.9rem' }}
                  />
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {['ALL', 'NEW', 'IN_PROGRESS', 'CONTACTED', 'ARCHIVED'].map((st) => (
                    <button
                      key={st}
                      onClick={() => setInquiryFilter(st)}
                      style={{
                        padding: '0.6rem 1rem',
                        borderRadius: '8px',
                        border: '1px solid var(--gray-300)',
                        background: inquiryFilter === st ? 'var(--navy)' : '#FFFFFF',
                        color: inquiryFilter === st ? '#FFFFFF' : 'var(--body)',
                        fontWeight: 600,
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                      }}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Table */}
              <div style={{ background: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--gray-200)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                {filteredInquiries.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--muted)' }}>No leads matching current search/filter.</div>
                ) : (
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                    <thead>
                      <tr style={{ background: 'var(--gray-50)', borderBottom: '2px solid var(--gray-200)', color: 'var(--muted)', fontSize: '0.75rem', textTransform: 'uppercase' }}>
                        <th style={{ padding: '1rem' }}>Received</th>
                        <th style={{ padding: '1rem' }}>Lead Name</th>
                        <th style={{ padding: '1rem' }}>Contact Info</th>
                        <th style={{ padding: '1rem' }}>Service</th>
                        <th style={{ padding: '1rem' }}>Status</th>
                        <th style={{ padding: '1rem', textAlign: 'right' }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredInquiries.map((inq) => (
                        <tr key={inq.id} style={{ borderBottom: '1px solid var(--gray-100)' }}>
                          <td style={{ padding: '1rem', color: 'var(--muted)' }}>{new Date(inq.createdAt).toLocaleDateString()}</td>
                          <td style={{ padding: '1rem' }}>
                            <div style={{ fontWeight: 700, color: 'var(--navy)' }}>{inq.name}</div>
                            {inq.company && <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{inq.company}</div>}
                          </td>
                          <td style={{ padding: '1rem' }}>
                            <div><a href={`mailto:${inq.email}`} style={{ color: 'var(--blue)', textDecoration: 'none' }}>{inq.email}</a></div>
                            {inq.phone && <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{inq.phone}</div>}
                          </td>
                          <td style={{ padding: '1rem', color: 'var(--navy)', fontWeight: 600 }}>{inq.service}</td>
                          <td style={{ padding: '1rem' }}>
                            <select
                              value={inq.status}
                              onChange={(e) => handleInquiryStatus(inq.id, e.target.value)}
                              style={{
                                padding: '4px 8px',
                                borderRadius: '6px',
                                border: '1px solid var(--gray-300)',
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                background: inq.status === 'NEW' ? '#DCFCE7' : inq.status === 'CONTACTED' ? '#DBEAFE' : '#F3F4F6',
                                color: inq.status === 'NEW' ? '#16A34A' : inq.status === 'CONTACTED' ? '#2563EB' : '#4B5563',
                              }}
                            >
                              <option value="NEW">NEW</option>
                              <option value="IN_PROGRESS">IN_PROGRESS</option>
                              <option value="CONTACTED">CONTACTED</option>
                              <option value="ARCHIVED">ARCHIVED</option>
                            </select>
                          </td>
                          <td style={{ padding: '1rem', textAlign: 'right' }}>
                            <div style={{ display: 'inline-flex', gap: '8px' }}>
                              <button
                                onClick={() => setSelectedInquiry(inq)}
                                style={{ padding: '6px 12px', borderRadius: '6px', background: 'var(--blue-light)', color: 'var(--blue)', border: 'none', fontWeight: 600, fontSize: '0.8rem', cursor: 'pointer' }}
                              >
                                View Message
                              </button>
                              <button
                                onClick={() => handleDeleteGeneric('inquiries', inq.id)}
                                style={{ padding: '6px 10px', borderRadius: '6px', background: '#FEE2E2', color: '#DC2626', border: 'none', cursor: 'pointer' }}
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          )}

          {/* TAB: INDUSTRIES */}
          {activeTab === 'industries' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy)' }}>Industry Reach & Verticals</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>Manage sector cards and domain descriptions</p>
                </div>
                <button
                  onClick={() => {
                    setEditingType('industries');
                    setEditingItem({
                      title: 'New Industry Vertical',
                      description: 'Sector specific capabilities and solutions...',
                      icon: 'Building2',
                      isActive: true,
                    });
                  }}
                  className="btn-primary"
                >
                  <Plus size={18} /> Add Industry Card
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {industries.map((ind) => (
                  <div key={ind.id} style={{ background: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--gray-200)', padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.85rem', boxShadow: 'var(--shadow-sm)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--blue)' }}>ICON: {ind.icon}</span>
                      <span style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '6px', background: ind.isActive ? '#DCFCE7' : '#FEE2E2', color: ind.isActive ? '#16A34A' : '#DC2626', fontWeight: 700 }}>
                        {ind.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--navy)' }}>{ind.title}</h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.6, flex: 1 }}>{ind.description}</p>
                    <div style={{ display: 'flex', gap: '8px', borderTop: '1px solid var(--gray-200)', paddingTop: '1rem', marginTop: 'auto' }}>
                      <button
                        onClick={() => {
                          setEditingType('industries');
                          setEditingItem({ ...ind });
                        }}
                        className="btn-secondary"
                        style={{ flex: 1, padding: '0.5rem', fontSize: '0.85rem' }}
                      >
                        <Edit2 size={14} /> Edit
                      </button>
                      <button
                        onClick={() => handleDeleteGeneric('industries', ind.id)}
                        style={{ padding: '0.5rem 0.85rem', borderRadius: '8px', background: '#FEE2E2', color: '#DC2626', border: 'none', cursor: 'pointer' }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: PROCESS STEPS */}
          {activeTab === 'process' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy)' }}>Delivery Process Pipeline</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>Manage the 4-step delivery workflow (Discover, Design, Build, Support)</p>
                </div>
                <button
                  onClick={() => {
                    setEditingType('process');
                    setEditingItem({
                      stepNum: `0${processSteps.length + 1}`,
                      title: 'New Step',
                      description: 'Step methodology and deliverables...',
                      icon: 'Search',
                      isActive: true,
                    });
                  }}
                  className="btn-primary"
                >
                  <Plus size={18} /> Add Step
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {processSteps.map((step) => (
                  <div key={step.id} style={{ background: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--gray-200)', padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.85rem', boxShadow: 'var(--shadow-sm)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--blue)' }}>{step.stepNum}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Icon: {step.icon}</span>
                    </div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--navy)' }}>{step.title}</h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.6, flex: 1 }}>{step.description}</p>
                    <div style={{ display: 'flex', gap: '8px', borderTop: '1px solid var(--gray-200)', paddingTop: '1rem', marginTop: 'auto' }}>
                      <button
                        onClick={() => {
                          setEditingType('process');
                          setEditingItem({ ...step });
                        }}
                        className="btn-secondary"
                        style={{ flex: 1, padding: '0.5rem', fontSize: '0.85rem' }}
                      >
                        <Edit2 size={14} /> Edit
                      </button>
                      <button
                        onClick={() => handleDeleteGeneric('process', step.id)}
                        style={{ padding: '0.5rem 0.85rem', borderRadius: '8px', background: '#FEE2E2', color: '#DC2626', border: 'none', cursor: 'pointer' }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: MILESTONE STAT COUNTERS */}
          {activeTab === 'stats' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy)' }}>Milestone Counter Numbers</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>Manage live animated numbers in About Us section (e.g. 50+, 25+, 8+, 100%)</p>
                </div>
                <button
                  onClick={() => {
                    setEditingType('stats');
                    setEditingItem({
                      target: 100,
                      suffix: '+',
                      label: 'Metric Label',
                      isActive: true,
                    });
                  }}
                  className="btn-primary"
                >
                  <Plus size={18} /> Add Counter
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.5rem' }}>
                {statCounters.map((st) => (
                  <div key={st.id} style={{ background: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--gray-200)', padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', boxShadow: 'var(--shadow-sm)' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--navy)', lineHeight: 1 }}>
                      {st.target}<span style={{ color: 'var(--blue)' }}>{st.suffix}</span>
                    </div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase' }}>{st.label}</div>
                    <div style={{ display: 'flex', gap: '8px', borderTop: '1px solid var(--gray-200)', paddingTop: '1rem', marginTop: 'auto' }}>
                      <button
                        onClick={() => {
                          setEditingType('stats');
                          setEditingItem({ ...st });
                        }}
                        className="btn-secondary"
                        style={{ flex: 1, padding: '0.5rem', fontSize: '0.85rem' }}
                      >
                        <Edit2 size={14} /> Edit
                      </button>
                      <button
                        onClick={() => handleDeleteGeneric('stats', st.id)}
                        style={{ padding: '0.5rem 0.85rem', borderRadius: '8px', background: '#FEE2E2', color: '#DC2626', border: 'none', cursor: 'pointer' }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: TESTIMONIALS */}
          {activeTab === 'testimonials' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy)' }}>Client Testimonials & Reviews</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>Manage executive reviews and quotes</p>
                </div>
                <button
                  onClick={() => {
                    setEditingType('testimonials');
                    setEditingItem({
                      quote: 'Outstanding partnership and real-time delivery...',
                      name: 'Client Name',
                      role: 'VP of Technology',
                      company: 'Enterprise Corp',
                      avatarInit: 'CN',
                      isActive: true,
                    });
                  }}
                  className="btn-primary"
                >
                  <Plus size={18} /> Add Testimonial
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
                {testimonials.map((t) => (
                  <div key={t.id} style={{ background: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--gray-200)', padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem', boxShadow: 'var(--shadow-sm)' }}>
                    <p style={{ fontSize: '0.925rem', color: 'var(--body)', fontStyle: 'italic', lineHeight: 1.7, flex: 1 }}>
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderTop: '1px solid var(--gray-200)', paddingTop: '1rem' }}>
                      <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--navy), var(--blue))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem' }}>
                        {t.avatarInit || t.name[0]}
                      </div>
                      <div>
                        <div style={{ fontWeight: 800, color: 'var(--navy)', fontSize: '0.95rem' }}>{t.name}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{t.role} {t.company && `• ${t.company}`}</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '8px', marginTop: '0.5rem' }}>
                      <button
                        onClick={() => {
                          setEditingType('testimonials');
                          setEditingItem({ ...t });
                        }}
                        className="btn-secondary"
                        style={{ flex: 1, padding: '0.5rem', fontSize: '0.85rem' }}
                      >
                        <Edit2 size={14} /> Edit
                      </button>
                      <button
                        onClick={() => handleDeleteGeneric('testimonials', t.id)}
                        style={{ padding: '0.5rem 0.85rem', borderRadius: '8px', background: '#FEE2E2', color: '#DC2626', border: 'none', cursor: 'pointer' }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: PARTNERS MARQUEE */}
          {activeTab === 'partners' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy)' }}>Technology Partners Marquee</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>Manage platform badges displayed in the infinite marquee</p>
                </div>
                <button
                  onClick={() => {
                    setEditingType('partners');
                    setEditingItem({
                      name: 'New Platform',
                      isActive: true,
                    });
                  }}
                  className="btn-primary"
                >
                  <Plus size={18} /> Add Partner
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
                {partners.map((p) => (
                  <div key={p.id} style={{ background: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--gray-200)', padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: 'var(--shadow-sm)' }}>
                    <span style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '0.95rem' }}>{p.name}</span>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <button
                        onClick={() => {
                          setEditingType('partners');
                          setEditingItem({ ...p });
                        }}
                        style={{ padding: '4px 8px', borderRadius: '6px', background: 'var(--gray-100)', border: 'none', cursor: 'pointer' }}
                      >
                        <Edit2 size={14} />
                      </button>
                      <button
                        onClick={() => handleDeleteGeneric('partners', p.id)}
                        style={{ padding: '4px 8px', borderRadius: '6px', background: '#FEE2E2', color: '#DC2626', border: 'none', cursor: 'pointer' }}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: INSIGHTS & BLOGS */}
          {activeTab === 'insights' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy)' }}>Insights, Blogs & Trends Hub</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>Publish articles, technical guides, and trending insights</p>
                </div>
                <button
                  onClick={() => {
                    setEditingType('insights');
                    setEditingItem({
                      category: 'Blog',
                      title: 'New Enterprise Article',
                      summary: 'Executive summary of the insight...',
                      content: 'Full article body and implementation guidance...',
                      dateLabel: 'August 2026',
                      isFeatured: false,
                      isTrending: true,
                      isActive: true,
                    });
                  }}
                  className="btn-primary"
                >
                  <Plus size={18} /> Publish New Article
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '1.5rem' }}>
                {insights.map((ins) => (
                  <div key={ins.id} style={{ background: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--gray-200)', padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem', boxShadow: 'var(--shadow-sm)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ padding: '4px 10px', borderRadius: '6px', background: 'var(--blue-light)', color: 'var(--blue)', fontWeight: 700, fontSize: '0.75rem' }}>
                        {ins.category} {ins.isFeatured ? '• FEATURED' : ''}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{ins.dateLabel}</span>
                    </div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--navy)', lineHeight: 1.35 }}>{ins.title}</h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.6, flex: 1 }}>{ins.summary}</p>
                    <div style={{ display: 'flex', gap: '8px', borderTop: '1px solid var(--gray-200)', paddingTop: '1rem', marginTop: 'auto' }}>
                      <button
                        onClick={() => {
                          setEditingType('insights');
                          setEditingItem({ ...ins });
                        }}
                        className="btn-secondary"
                        style={{ flex: 1, padding: '0.5rem', fontSize: '0.85rem' }}
                      >
                        <Edit2 size={14} /> Edit Article
                      </button>
                      <button
                        onClick={() => handleDeleteGeneric('insights', ins.id)}
                        style={{ padding: '0.5rem 0.85rem', borderRadius: '8px', background: '#FEE2E2', color: '#DC2626', border: 'none', cursor: 'pointer' }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: BACKUP & RESTORE */}
          {activeTab === 'backup' && (
            <div style={{ background: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--gray-200)', padding: '2.5rem', maxWidth: '700px', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.5rem' }}>Database Backup & Snapshot</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '2rem' }}>
                Download a complete JSON snapshot of all your settings, hero slides, services, case studies, blogs, and inquiries.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ padding: '1.5rem', borderRadius: 'var(--radius-md)', background: 'var(--gray-50)', border: '1px solid var(--gray-200)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--navy)' }}>Export Entire Database</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '2px' }}>Download snapshot JSON file</div>
                  </div>
                  <a href="/api/admin/backup" download className="btn-primary" style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}>
                    <Download size={16} /> Export Backup
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* EDIT MODAL DIALOG */}
      {editingItem && (
        <div className="modal-overlay" onClick={() => setEditingItem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '2.5rem', maxWidth: '640px' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '1.5rem' }}>
              {editingItem.id ? 'Edit Item' : 'Add New Item'}
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSaveGeneric(editingType, editingItem, !editingItem.id);
              }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
            >
              {Object.keys(editingItem)
                .filter((key) => !['id', 'createdAt', 'updatedAt'].includes(key))
                .map((key) => (
                  <div key={key}>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '4px', textTransform: 'capitalize' }}>
                      {key.replace(/([A-Z])/g, ' $1')}
                    </label>
                    {typeof editingItem[key] === 'boolean' ? (
                      <select
                        value={editingItem[key] ? 'true' : 'false'}
                        onChange={(e) => setEditingItem({ ...editingItem, [key]: e.target.value === 'true' })}
                        style={{ width: '100%', padding: '0.7rem 1rem', borderRadius: '8px', border: '1.5px solid var(--gray-300)', fontSize: '0.9rem' }}
                      >
                        <option value="true">Active (Yes)</option>
                        <option value="false">Inactive (No)</option>
                      </select>
                    ) : key === 'svgType' ? (
                      <select
                        value={editingItem[key] || 'analytics'}
                        onChange={(e) => setEditingItem({ ...editingItem, [key]: e.target.value })}
                        style={{ width: '100%', padding: '0.7rem 1rem', borderRadius: '8px', border: '1.5px solid var(--gray-300)', fontSize: '0.9rem' }}
                      >
                        <option value="analytics">Analytics & BI Bar Chart</option>
                        <option value="neural">Machine Learning Neural Network</option>
                        <option value="cloud">Cloud Migration Architecture</option>
                      </select>
                    ) : ['description', 'summary', 'fullStory', 'subtext', 'content', 'details', 'quote'].includes(key) ? (
                      <textarea
                        rows={3}
                        value={editingItem[key] || ''}
                        onChange={(e) => setEditingItem({ ...editingItem, [key]: e.target.value })}
                        style={{ width: '100%', padding: '0.7rem 1rem', borderRadius: '8px', border: '1.5px solid var(--gray-300)', fontSize: '0.9rem', resize: 'none' }}
                      />
                    ) : (
                      <input
                        type={typeof editingItem[key] === 'number' ? 'number' : 'text'}
                        value={editingItem[key] || ''}
                        onChange={(e) => setEditingItem({ ...editingItem, [key]: typeof editingItem[key] === 'number' ? Number(e.target.value) : e.target.value })}
                        style={{ width: '100%', padding: '0.7rem 1rem', borderRadius: '8px', border: '1.5px solid var(--gray-300)', fontSize: '0.9rem' }}
                      />
                    )}
                  </div>
                ))}

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
                <button type="button" onClick={() => setEditingItem(null)} style={{ padding: '0.75rem 1.5rem', borderRadius: '8px', background: 'var(--gray-100)', border: 'none', fontWeight: 600, cursor: 'pointer' }}>
                  Cancel
                </button>
                <button type="submit" disabled={saving} className="btn-primary" style={{ padding: '0.75rem 1.5rem' }}>
                  {saving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />} Save Item
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* INQUIRY MESSAGE MODAL */}
      {selectedInquiry && (
        <div className="modal-overlay" onClick={() => setSelectedInquiry(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '2.5rem', maxWidth: '560px' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem' }}>
              Inquiry from {selectedInquiry.name}
            </h3>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
              Received on {new Date(selectedInquiry.createdAt).toLocaleString()}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem', padding: '1rem', background: 'var(--gray-50)', borderRadius: '8px' }}>
              <div><strong>Email:</strong> <a href={`mailto:${selectedInquiry.email}`}>{selectedInquiry.email}</a></div>
              <div><strong>Phone:</strong> {selectedInquiry.phone || 'Not provided'}</div>
              <div><strong>Company:</strong> {selectedInquiry.company || 'Not provided'}</div>
              <div><strong>Service:</strong> {selectedInquiry.service}</div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>Message:</div>
              <p style={{ fontSize: '0.95rem', color: 'var(--body)', lineHeight: 1.7, background: 'var(--gray-100)', padding: '1rem', borderRadius: '8px' }}>
                {selectedInquiry.message}
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
              <button onClick={() => setSelectedInquiry(null)} className="btn-secondary" style={{ padding: '0.65rem 1.25rem' }}>
                Close
              </button>
              <a href={`mailto:${selectedInquiry.email}?subject=Regarding your inquiry on KD Infovision`} className="btn-primary" style={{ padding: '0.65rem 1.25rem' }}>
                Reply via Email
              </a>
            </div>
          </div>
        </div>
      )}

      {/* MEDIA MODAL */}
      <MediaLibraryModal
        isOpen={mediaModalOpen}
        onClose={() => setMediaModalOpen(false)}
        onSelect={(url) => {
          if (mediaTargetField) {
            setEditingItem((prev) => ({ ...prev, [mediaTargetField]: url }));
          }
          setMediaModalOpen(false);
        }}
      />
    </div>
  );
}
