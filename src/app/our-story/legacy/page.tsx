import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Dr. Itti’s Legacy — The Itti Foundation',
  description: 'The story and spirit of Dr. Itti that inspires the Foundation’s dedication to inclusion and healing.',
};

export default function LegacyPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageShell
          tag="Memory & Purpose"
          title="Dr. Itti’s Legacy"
          subtitle="How one life of courage and empathy continues to shape our commitments across education, cancer support, and ecological defense."
          breadcrumbs={[
            { label: 'Our Story', href: '/our-story' },
            { label: 'Dr. Itti’s Legacy' },
          ]}
        >
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-forest/10 space-y-6 text-charcoal leading-relaxed shadow-sm">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-forest">
              Remembering 8 April
            </h2>
            <p>
              The Foundation’s official creation on 8 April 2023 was intentionally placed on Dr. Itti’s birthday.
              Her journey embodied a fierce dedication to those often left in the margins: children whose unique minds
              did not fit rigid classrooms, and individuals confronting illness with quiet strength.
            </p>
            <blockquote className="font-serif text-xl sm:text-2xl text-forest/90 italic border-l-4 border-coral pl-6 my-6">
              &ldquo;The measure of any society is how tenderly it holds those who learn differently,
              and how steadfastly it walks beside those facing the unexpected storm.&rdquo;
            </blockquote>
            <p>
              Today, this memory is not kept as a passive memorial, but as an active, pragmatic organization.
              The dragonfly emblem and the shloka recited on 8 September remain central symbols of resilience,
              renewal, and shared humanity across all our community circles.
            </p>
            <div className="p-4 rounded-xl bg-sage/30 border border-forest/10 text-xs text-charcoal-muted">
              Source: Archival foundation documents and verified commemorative dates.
            </div>
          </div>
        </PageShell>
      </main>
      <Footer />
    </>
  );
}
