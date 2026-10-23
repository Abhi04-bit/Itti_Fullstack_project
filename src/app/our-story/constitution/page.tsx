import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Constitution & Policies — The Itti Foundation',
  description: 'Our governing constitution as a Section 8 company and policy framework.',
};

export default function ConstitutionPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageShell
          tag="Charter"
          title="Constitution & Policies"
          subtitle="Legal status, articles of incorporation, and operating guidelines under Indian nonprofit company regulations."
          breadcrumbs={[
            { label: 'Our Story', href: '/our-story' },
            { label: 'Constitution & Policies' },
          ]}
        >
          <div className="bg-white rounded-3xl p-8 border border-forest/10 space-y-6 text-charcoal leading-relaxed shadow-sm">
            <h2 className="font-serif text-2xl font-medium text-forest">
              Section 8 Not-for-Profit Incorporation
            </h2>
            <p>
              The Foundation is incorporated under Section 8 of the Companies Act, 2013 (India) as
              <strong> Itti’s Skill School Foundation</strong>. Under the provisions of Section 8:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-charcoal/90">
              <li>All profits, income, and donations must be applied exclusively to the promotion of our charitable objects.</li>
              <li>No dividend or return of capital may be paid to any member or director.</li>
              <li>Operations are subject to statutory financial audits and regulatory oversight.</li>
            </ul>

            <div className="pt-4 border-t border-forest/10 flex items-center justify-between">
              <span className="text-xs text-charcoal-muted">For standing public legal documents:</span>
              <Link href="/policies" className="text-xs font-semibold text-coral hover:underline">
                Read Standing Policies &rarr;
              </Link>
            </div>
          </div>
        </PageShell>
      </main>
      <Footer />
    </>
  );
}
