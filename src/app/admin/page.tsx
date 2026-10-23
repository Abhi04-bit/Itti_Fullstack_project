'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  ShieldCheck,
  FolderKanban,
  Calendar,
  ShoppingBag,
  Users,
  MessageSquare,
  FileText,
  Activity,
  LogOut,
  Search,
  CheckCircle,
  Clock,
  ExternalLink,
  Plus,
  Trash2,
  Edit3,
} from 'lucide-react';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'overview' | 'submissions' | 'content'>('overview');
  const [submissionType, setSubmissionType] = useState<'volunteers' | 'memberships' | 'contact'>('volunteers');
  const [stats, setStats] = useState<any>(null);
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    fetchStats();
  }, []);

  useEffect(() => {
    if (activeTab === 'submissions') {
      fetchSubmissions(submissionType);
    }
  }, [activeTab, submissionType]);

  const fetchStats = async () => {
    try {
      const res = await fetch('/api/v1/admin/stats');
      const data = await res.json();
      if (!res.ok || !data.success) {
        router.push('/admin/login');
        return;
      }
      setStats(data.stats);
      setUser(data.user);
    } catch {
      router.push('/admin/login');
    } finally {
      setLoading(false);
    }
  };

  const fetchSubmissions = async (type: string) => {
    try {
      const res = await fetch(`/api/v1/admin/submissions?type=${type}`);
      const data = await res.json();
      if (data.success) {
        setSubmissions(data.data || []);
      }
    } catch {
      // Fallback
    }
  };

  const handleUpdateStatus = async (id: string, newStatus: string) => {
    try {
      await fetch('/api/v1/admin/submissions', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, type: submissionType, status: newStatus }),
      });
      fetchSubmissions(submissionType);
    } catch {
      //
    }
  };

  const handleLogout = async () => {
    await fetch('/api/v1/admin/auth', { method: 'DELETE' });
    router.push('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center text-sm font-medium text-forest">
        Loading administration dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory flex flex-col">
      {/* Top Admin Navbar */}
      <header className="bg-forest text-ivory border-b border-forest-dark py-3.5 px-4 sm:px-8 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center space-x-4">
          <Link href="/" className="font-serif text-xl font-medium text-ivory flex items-center">
            <span>The Itti Foundation</span>
          </Link>
          <span className="hidden sm:inline-block text-xs bg-forest-dark text-sage px-2.5 py-0.5 rounded-full font-semibold">
            {user?.role || 'ADMIN'}
          </span>
        </div>

        <div className="flex items-center space-x-4 text-xs">
          <div className="hidden md:block text-right">
            <span className="block font-medium">{user?.name}</span>
            <span className="text-ivory/60 text-[11px]">{user?.email}</span>
          </div>

          <Link
            href="/"
            target="_blank"
            className="hidden sm:flex items-center px-3 py-1.5 rounded-full bg-forest-dark hover:bg-forest-light transition-colors text-ivory"
          >
            <span>View Live Site</span>
            <ExternalLink className="w-3 h-3 ml-1" />
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center px-3 py-1.5 rounded-full bg-coral hover:bg-coral-dark text-white font-medium transition-colors"
          >
            <LogOut className="w-3.5 h-3.5 mr-1" />
            <span>Sign Out</span>
          </button>
        </div>
      </header>

      {/* Main Admin Workspace */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex-1 space-y-6">
        
        {/* Tab Navigation */}
        <div className="flex items-center space-x-2 border-b border-forest/10 pb-4">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors ${
              activeTab === 'overview'
                ? 'bg-forest text-ivory'
                : 'bg-white text-charcoal hover:bg-sage/50 border border-forest/10'
            }`}
          >
            Dashboard Overview
          </button>
          <button
            onClick={() => setActiveTab('submissions')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors flex items-center ${
              activeTab === 'submissions'
                ? 'bg-forest text-ivory'
                : 'bg-white text-charcoal hover:bg-sage/50 border border-forest/10'
            }`}
          >
            <span>Submissions &amp; DPDP Consent</span>
            {stats?.volunteersPending > 0 && (
              <span className="ml-1.5 w-4 h-4 rounded-full bg-coral text-white text-[10px] flex items-center justify-center">
                {stats.volunteersPending}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('content')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors ${
              activeTab === 'content'
                ? 'bg-forest text-ivory'
                : 'bg-white text-charcoal hover:bg-sage/50 border border-forest/10'
            }`}
          >
            Content &amp; Catalog Management
          </button>
        </div>

        {/* =========================================================================
            TAB 1: OVERVIEW METRICS
        ========================================================================= */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-forest/10 shadow-sm space-y-1">
                <span className="text-xs font-medium text-charcoal-muted uppercase">Pending Volunteers</span>
                <div className="font-serif text-3xl font-bold text-coral">{stats?.volunteersPending ?? 0}</div>
                <p className="text-[11px] text-charcoal-muted">Awaiting skill review &amp; onboarding</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-forest/10 shadow-sm space-y-1">
                <span className="text-xs font-medium text-charcoal-muted uppercase">Registered Members</span>
                <div className="font-serif text-3xl font-bold text-forest">{stats?.membershipsTotal ?? 0}</div>
                <p className="text-[11px] text-charcoal-muted">Active DPDP 2023 consent records</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-forest/10 shadow-sm space-y-1">
                <span className="text-xs font-medium text-charcoal-muted uppercase">Unread Inquiries</span>
                <div className="font-serif text-3xl font-bold text-coral">{stats?.contactInquiriesUnread ?? 0}</div>
                <p className="text-[11px] text-charcoal-muted">Within 5-day response window</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-forest/10 shadow-sm space-y-1">
                <span className="text-xs font-medium text-charcoal-muted uppercase">Catalogued Crafts</span>
                <div className="font-serif text-3xl font-bold text-forest">{stats?.productsCount ?? 9}</div>
                <p className="text-[11px] text-charcoal-muted">Direct artisan workshop products</p>
              </div>
            </div>

            {/* Audit Logs */}
            <div className="bg-white rounded-3xl p-6 border border-forest/10 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-forest/10 pb-3">
                <div className="flex items-center space-x-2">
                  <Activity className="w-4 h-4 text-forest" />
                  <h3 className="font-serif text-lg font-medium text-forest">Recent Governance &amp; Audit Trail</h3>
                </div>
                <span className="text-[11px] text-charcoal-muted">Immutable DPDP record</span>
              </div>

              <div className="space-y-3">
                {stats?.recentAudits?.map((log: any) => (
                  <div key={log.id} className="p-3 rounded-xl bg-ivory/60 border border-forest/10 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-mono font-bold text-coral uppercase mr-2">[{log.action}]</span>
                      <span className="text-charcoal">{log.details}</span>
                    </div>
                    <span className="text-charcoal-muted text-[11px]">{new Date(log.createdAt).toLocaleDateString()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 2: SUBMISSIONS & CONSENT REVIEW
        ========================================================================= */}
        {activeTab === 'submissions' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-forest/10 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-forest/10 pb-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setSubmissionType('volunteers')}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    submissionType === 'volunteers' ? 'bg-forest text-ivory' : 'bg-sage/40 text-charcoal'
                  }`}
                >
                  Volunteers
                </button>
                <button
                  onClick={() => setSubmissionType('memberships')}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    submissionType === 'memberships' ? 'bg-forest text-ivory' : 'bg-sage/40 text-charcoal'
                  }`}
                >
                  Memberships (DPDP Minor Records)
                </button>
                <button
                  onClick={() => setSubmissionType('contact')}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    submissionType === 'contact' ? 'bg-forest text-ivory' : 'bg-sage/40 text-charcoal'
                  }`}
                >
                  Contact Messages
                </button>
              </div>

              <span className="text-xs text-charcoal-muted">{submissions.length} records</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-charcoal border-collapse">
                <thead>
                  <tr className="border-b border-forest/10 text-charcoal-muted uppercase text-[10px]">
                    <th className="py-3 px-3">Applicant / Sender</th>
                    <th className="py-3 px-3">Contact</th>
                    <th className="py-3 px-3">Details / Request</th>
                    <th className="py-3 px-3">Status</th>
                    <th className="py-3 px-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-forest/5">
                  {submissions.map((sub: any) => (
                    <tr key={sub.id} className="hover:bg-ivory/50">
                      <td className="py-3 px-3 font-semibold text-forest">
                        {sub.name}
                        {sub.isUnder18 && (
                          <span className="ml-1.5 bg-coral/10 text-coral px-1.5 py-0.5 rounded text-[10px]">
                            Minor (&lt;18)
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-3">
                        <div>{sub.email}</div>
                        {sub.phone && <div className="text-charcoal-muted text-[11px]">{sub.phone}</div>}
                      </td>
                      <td className="py-3 px-3 max-w-xs truncate">
                        {sub.skills || sub.message || (sub.isUnder18 ? `Guardian: ${sub.guardianContact}` : 'General member')}
                      </td>
                      <td className="py-3 px-3">
                        <span className={`px-2 py-0.5 rounded text-[11px] font-medium ${
                          sub.status === 'PENDING' ? 'bg-coral/10 text-coral' : 'bg-sage text-forest'
                        }`}>
                          {sub.status}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right space-x-1">
                        <button
                          onClick={() => handleUpdateStatus(sub.id, 'RESOLVED')}
                          className="px-2 py-1 rounded bg-forest text-ivory hover:bg-forest-light text-[10px]"
                        >
                          Mark Resolved
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 3: CONTENT & CATALOG MANAGEMENT
        ========================================================================= */}
        {activeTab === 'content' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-forest/10 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-forest/10 pb-4">
              <div>
                <h3 className="font-serif text-xl font-medium text-forest">Editorial Content &amp; Marketplace</h3>
                <p className="text-xs text-charcoal-muted">Manage published projects, calendar gatherings, and direct artisan crafts.</p>
              </div>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 rounded-full bg-forest text-ivory text-xs font-medium hover:bg-forest-light"
              >
                <Plus className="w-3.5 h-3.5 mr-1" />
                <span>New Item</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-ivory/80 border border-forest/10 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-base font-semibold text-forest">Projects</h4>
                  <span className="text-xs bg-sage px-2 py-0.5 rounded text-forest font-bold">3 Active</span>
                </div>
                <p className="text-xs text-charcoal-muted">
                  Pedestrian Safety Day, Periods Ki Pathshala, Bioenzyme Training.
                </p>
                <Link href="/projects" className="text-xs font-semibold text-coral block hover:underline">
                  View Public Listing &rarr;
                </Link>
              </div>

              <div className="p-5 rounded-2xl bg-ivory/80 border border-forest/10 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-base font-semibold text-forest">Events Calendar</h4>
                  <span className="text-xs bg-sage px-2 py-0.5 rounded text-forest font-bold">7 Events</span>
                </div>
                <p className="text-xs text-charcoal-muted">
                  October &amp; November 2026 volunteer syncs, webinars, and field visits.
                </p>
                <Link href="/events" className="text-xs font-semibold text-coral block hover:underline">
                  View Public Calendar &rarr;
                </Link>
              </div>

              <div className="p-5 rounded-2xl bg-ivory/80 border border-forest/10 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-base font-semibold text-forest">Marketplace</h4>
                  <span className="text-xs bg-sage px-2 py-0.5 rounded text-forest font-bold">9 Crafts</span>
                </div>
                <p className="text-xs text-charcoal-muted">
                  Fermented bioenzymes, hand-loomed vetiver mats, seed balls, totes, journals.
                </p>
                <Link href="/marketplace" className="text-xs font-semibold text-coral block hover:underline">
                  View Public Catalog &rarr;
                </Link>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
