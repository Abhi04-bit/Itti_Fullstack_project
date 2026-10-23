import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageShell from '@/components/PageShell';
import { FileText, Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Transparency & Reports — The Itti Foundation',
  description: 'Annual reports, financial summaries, and transparency disclosures for The Itti Foundation.',
};

export default function TransparencyPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageShell
          tag="Accountability"
          title="Transparency & Reports"
          subtitle="Verifiable disclosures on funding allocation, program execution, and governance filings."
          breadcrumbs={[
            { label: 'Our Story', href: '/our-story' },
            { label: 'Transparency & Reports' },
          ]}
        >
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-forest/10 space-y-4 shadow-sm">
              <h2 className="font-serif text-2xl font-medium text-forest">Disclosures &amp; Filings</h2>
              <p className="text-sm text-charcoal leading-relaxed">
                We believe that trust in civil society is built on full transparency.
                All foundation accounting, statutory tax returns, and activity reports are maintained
                in compliance with the Ministry of Corporate Affairs and the Income Tax Department of India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 border border-forest/10 flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-forest" />
                    <h3 className="font-medium text-sm text-forest">Annual Activity Summary 2024–2025</h3>
                  </div>
                  <p className="text-xs text-charcoal-muted">Pune civic, menstrual health &amp; bioenzyme programs</p>
                </div>
                <span className="text-xs font-semibold text-charcoal-muted bg-sage/50 px-2 py-1 rounded">Archived</span>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-forest/10 flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-forest" />
                    <h3 className="font-medium text-sm text-forest">Founding Resolution (April 2023)</h3>
                  </div>
                  <p className="text-xs text-charcoal-muted">Statutory incorporation charter &amp; board records</p>
                </div>
                <span className="text-xs font-semibold text-charcoal-muted bg-sage/50 px-2 py-1 rounded">Permanent</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-sage/30 border border-forest/10 text-xs text-charcoal-muted">
              Audited balance sheets are available for inspection by verified stakeholders upon written request to <a href="mailto:hello@itti.org.in" className="text-forest underline">hello@itti.org.in</a>.
            </div>
          </div>
        </PageShell>
      </main>
      <Footer />
    </>
  );
}
