import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Standing Policies — The Itti Foundation',
  description: 'Four standing documents: Privacy Policy (DPDP 2023), Terms of Use, Accessibility Statement, and Contact.',
};

export default function PoliciesPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageShell
          tag="Governance"
          title="Standing Documents &amp; Policies"
          subtitle="Four standing documents: what we do with your data under the DPDP Act 2023, terms of use, accessibility conformance, and grievance contact."
          breadcrumbs={[{ label: 'Policies' }]}
        >
          <div className="space-y-12 text-charcoal">
            {/* Section 1: Privacy Policy */}
            <section id="privacy" className="bg-white rounded-3xl p-8 sm:p-10 border border-forest/10 space-y-4 shadow-sm scroll-mt-24">
              <div className="flex items-center justify-between border-b border-forest/10 pb-3">
                <h2 className="font-serif text-2xl font-medium text-forest">Privacy Policy</h2>
                <span className="text-xs text-charcoal-muted">Version 2.0 · September 2026</span>
              </div>
              <div className="text-xs sm:text-sm space-y-3 leading-relaxed">
                <p>
                  <strong>1. Scope and Controller:</strong> This policy applies to itti.org.in and the registry behind it.
                  The data fiduciary is <em>Itti’s Skill School Foundation</em>, a Section 8 not-for-profit company incorporated in India.
                  It is written under India’s Digital Personal Data Protection (DPDP) Act, 2023.
                </p>
                <p>
                  <strong>2. Personal Data We Collect:</strong> Contact details you supply upon registration. We do not use third-party tracking, advertising, or automated profiling.
                </p>
                <p>
                  <strong>3. Children:</strong> Under the DPDP Act, individuals under 18 require verifiable parental/guardian consent.
                </p>
                <p>
                  <strong>4. Data Hosting:</strong> Stored securely in Supabase’s Mumbai, India region.
                </p>
                <p>
                  <strong>5. Grievance Officer:</strong> Anuja Bali (<a href="mailto:hello@itti.org.in" className="text-forest underline">hello@itti.org.in</a>).
                </p>
              </div>
            </section>

            {/* Section 2: Terms of Use */}
            <section id="terms" className="bg-white rounded-3xl p-8 sm:p-10 border border-forest/10 space-y-4 shadow-sm scroll-mt-24">
              <div className="flex items-center justify-between border-b border-forest/10 pb-3">
                <h2 className="font-serif text-2xl font-medium text-forest">Terms of Use &amp; Refunds</h2>
                <span className="text-xs text-charcoal-muted">Version 2.0</span>
              </div>
              <div className="text-xs sm:text-sm space-y-3 leading-relaxed">
                <p>
                  <strong>1. Non-Profit Service:</strong> Operated by Itti’s Skill School Foundation. All material may be quoted or shared for educational purposes with attribution.
                </p>
                <p>
                  <strong>2. Donations and Refunds:</strong> Donations are voluntary and put directly to work. Refunds are honored without argument in cases of duplicate processing, technical transmission error, or unauthorized card use within 7 working days.
                </p>
                <p>
                  <strong>3. Medical Disclaimer:</strong> Content on this site does not constitute professional medical diagnosis or clinical treatment advice.
                </p>
              </div>
            </section>

            {/* Section 3: Accessibility */}
            <section id="accessibility" className="bg-white rounded-3xl p-8 sm:p-10 border border-forest/10 space-y-4 shadow-sm scroll-mt-24">
              <div className="flex items-center justify-between border-b border-forest/10 pb-3">
                <h2 className="font-serif text-2xl font-medium text-forest">Accessibility Statement</h2>
                <span className="text-xs text-charcoal-muted">Target: WCAG 2.2 Level AA</span>
              </div>
              <div className="text-xs sm:text-sm space-y-3 leading-relaxed">
                <p>
                  The Itti Foundation is committed to making itti.org.in accessible to everyone, including neurodivergent individuals and those using assistive screen readers.
                  We implement high color contrast (minimum 4.5:1), keyboard-navigable controls, clear typography, and complete support for <code className="bg-sage/50 px-1 py-0.5 rounded text-xs">prefers-reduced-motion</code>.
                </p>
              </div>
            </section>
          </div>
        </PageShell>
      </main>
      <Footer />
    </>
  );
}
