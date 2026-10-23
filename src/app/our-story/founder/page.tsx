import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Founder’s Journey — The Itti Foundation',
  description: 'The personal path and turning points that led to the founding of The Itti Foundation.',
};

export default function FounderPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageShell
          tag="Origins"
          title="The Founder’s Journey"
          subtitle="From personal caregiving and educational advocacy to building an enduring institution for social change."
          breadcrumbs={[
            { label: 'Our Story', href: '/our-story' },
            { label: 'Founder’s Journey' },
          ]}
        >
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-forest/10 space-y-6 text-charcoal leading-relaxed shadow-sm">
            <h2 className="font-serif text-2xl font-medium text-forest">
              Turning Grief into Grounded Action
            </h2>
            <p>
              The path to founding The Itti Foundation did not start in a boardroom. It began in hospital corridors,
              special education classrooms, and conversations with families facing the isolation of a severe medical diagnosis
              or the frustration of an inflexible schooling system.
            </p>
            <p>
              In 2023, following years of direct community engagement in Pune, the decision was taken to formalize this work
              into an independent Section 8 company—ensuring that every rupee donated, every artisan craft made, and every
              volunteer hour invested would be governed by transparent public service rules.
            </p>
            <div className="p-4 rounded-xl bg-ivory border border-forest/10 text-xs text-charcoal-muted">
              Note: Archival photographs and founder correspondence will be published here upon archival digitization.
            </div>
          </div>
        </PageShell>
      </main>
      <Footer />
    </>
  );
}
