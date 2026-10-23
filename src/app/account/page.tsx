import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageShell from '@/components/PageShell';
import { Lock, ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Account Login — The Itti Foundation',
  description: 'Member sign in for The Itti Foundation to manage communication consents and preferences.',
};

export default function AccountLoginPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageShell
          tag="Community Portal"
          title="Sign in to Your Account"
          subtitle="If you registered with an email address, you may sign in to view and amend the record we hold about you."
          breadcrumbs={[{ label: 'Account Login' }]}
        >
          <div className="max-w-md mx-auto bg-white rounded-3xl p-8 border border-forest/10 shadow-sm space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="login-email" className="block text-xs font-semibold text-charcoal mb-1">
                  Registered Email Address
                </label>
                <input
                  id="login-email"
                  type="email"
                  placeholder="name@domain.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-forest/20 bg-ivory/50 text-sm text-charcoal focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest"
                />
              </div>

              <div>
                <label htmlFor="login-password" className="block text-xs font-semibold text-charcoal mb-1">
                  Password / Magic Link Key
                </label>
                <input
                  id="login-password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 rounded-xl border border-forest/20 bg-ivory/50 text-sm text-charcoal focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest"
                />
              </div>

              <button
                type="button"
                className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full bg-forest text-ivory text-sm font-medium hover:bg-forest-light transition-colors shadow"
              >
                <Lock className="w-4 h-4 mr-2" />
                <span>Sign In to Account</span>
              </button>
            </div>

            <div className="pt-4 border-t border-forest/10 text-center text-xs text-charcoal-muted space-y-2">
              <p>
                Not yet registered?{' '}
                <Link href="/join" className="text-forest font-semibold hover:underline">
                  Join the Foundation here
                </Link>
              </p>
              <div className="p-3 rounded-xl bg-sage/30 text-[11px] text-charcoal-muted">
                Under the DPDP Act 2023, you have full access to view, download, or delete your registered record.
              </div>
            </div>
          </div>
        </PageShell>
      </main>
      <Footer />
    </>
  );
}
