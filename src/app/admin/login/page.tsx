'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Lock, ShieldCheck, ArrowRight, AlertCircle } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@itti.org.in');
  const [password, setPassword] = useState('IttiAdmin@2026');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/v1/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setError(data.error || 'Authentication failed. Please check credentials.');
        setLoading(false);
        return;
      }

      router.push('/admin');
      router.refresh();
    } catch (err: any) {
      setError(err.message || 'Network error occurred during login');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-ivory flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center space-y-2">
        <Link href="/" className="font-serif text-3xl font-medium text-forest inline-block">
          The Itti Foundation
        </Link>
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-forest text-ivory text-xs font-semibold">
          <ShieldCheck className="w-3.5 h-3.5 text-coral" />
          <span>Administration Portal</span>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow-xl rounded-3xl sm:px-10 border border-forest/10 space-y-6">
          <div className="border-b border-forest/10 pb-4">
            <h2 className="font-serif text-2xl font-medium text-forest">Staff &amp; Editor Sign In</h2>
            <p className="text-xs text-charcoal-muted mt-1">
              Access content management, volunteer review, and compliance audit logs.
            </p>
          </div>

          {error && (
            <div className="p-3.5 rounded-xl bg-coral/10 border border-coral/30 flex items-center space-x-2 text-xs text-coral">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="admin-email" className="block text-xs font-semibold text-charcoal mb-1">
                Authorised Email
              </label>
              <input
                id="admin-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-forest/20 bg-ivory/50 text-sm text-charcoal focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest"
              />
            </div>

            <div>
              <label htmlFor="admin-password" className="block text-xs font-semibold text-charcoal mb-1">
                Password
              </label>
              <input
                id="admin-password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-forest/20 bg-ivory/50 text-sm text-charcoal focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full bg-forest text-ivory text-sm font-medium hover:bg-forest-light transition-colors shadow disabled:opacity-50"
            >
              <Lock className="w-4 h-4 mr-2" />
              <span>{loading ? 'Verifying...' : 'Sign In to Dashboard'}</span>
            </button>
          </form>

          <div className="pt-4 border-t border-forest/10 text-xs text-charcoal-muted space-y-1">
            <p className="font-medium text-forest">Preloaded Local Demo Credentials:</p>
            <p>Email: <code className="bg-sage/40 px-1 py-0.5 rounded text-charcoal">admin@itti.org.in</code></p>
            <p>Password: <code className="bg-sage/40 px-1 py-0.5 rounded text-charcoal">IttiAdmin@2026</code></p>
          </div>
        </div>
      </div>
    </div>
  );
}
