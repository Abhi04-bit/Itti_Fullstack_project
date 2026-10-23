import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageShell from '@/components/PageShell';
import { ShieldCheck, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Team & Governance — The Itti Foundation',
  description: 'The people, trustees, and operational leads responsible for The Itti Foundation.',
};

export default function TeamPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageShell
          tag="People"
          title="Team & Governance"
          subtitle="Our board, operational coordinators, and community advisors serving The Itti Foundation."
          breadcrumbs={[
            { label: 'Our Story', href: '/our-story' },
            { label: 'Team & Governance' },
          ]}
        >
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-forest/10 space-y-4">
              <h2 className="font-serif text-2xl font-medium text-forest">Leadership &amp; Compliance</h2>
              <p className="text-sm text-charcoal leading-relaxed">
                As a registered Section 8 not-for-profit company (Itti’s Skill School Foundation), our leadership
                operates under statutory fiduciary standards. We maintain designated officers for legal compliance,
                program oversight, and data protection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-forest/10 space-y-3 shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-forest text-ivory font-serif text-lg font-bold flex items-center justify-center">
                    AB
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-forest">Anuja Bali</h3>
                    <p className="text-xs text-coral font-medium">Grievance &amp; Data Protection Officer</p>
                  </div>
                </div>
                <p className="text-xs text-charcoal leading-relaxed">
                  Designated Data Fiduciary contact under India’s Digital Personal Data Protection (DPDP) Act, 2023.
                  Coordinates donor relations, consent management, and institutional transparency.
                </p>
                <div className="pt-2 text-xs text-charcoal-muted">
                  Email: <a href="mailto:hello@itti.org.in" className="text-forest hover:underline">hello@itti.org.in</a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-forest/10 space-y-3 shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-sage text-forest font-serif text-lg font-bold flex items-center justify-center">
                    CW
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-forest">CLAW Workshop Leads</h3>
                    <p className="text-xs text-forest font-medium">Conservation &amp; Skilling Coordinators</p>
                  </div>
                </div>
                <p className="text-xs text-charcoal leading-relaxed">
                  Trainers and master artisans leading community bioenzyme workshops, seed ball creation,
                  and hand-woven vetiver craft programs in Pune schools and centers.
                </p>
                <div className="pt-2 text-xs text-charcoal-muted">
                  Pune Operations Hub
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-sage/30 border border-forest/10 text-xs text-charcoal-muted">
              Note: Full bios and board member disclosures are updated in accordance with annual filings with the Ministry of Corporate Affairs (MCA).
            </div>
          </div>
        </PageShell>
      </main>
      <Footer />
    </>
  );
}
