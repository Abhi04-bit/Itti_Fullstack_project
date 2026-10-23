import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Mission & Values — The Itti Foundation',
  description: 'Our mission and guiding operating principles at The Itti Foundation.',
};

export default function MissionPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageShell
          tag="Principles"
          title="Mission & Values"
          subtitle="How we evaluate what work is worth doing, how we hold ourselves accountable, and where our resources go."
          breadcrumbs={[
            { label: 'Our Story', href: '/our-story' },
            { label: 'Mission & Values' },
          ]}
        >
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-forest/10 space-y-4">
              <h2 className="font-serif text-2xl font-medium text-forest">Our Mission</h2>
              <p className="text-charcoal leading-relaxed">
                To create inclusive educational and livelihood spaces for neurodivergent minds, provide compassionate
                year-round guidance for people walking through cancer, and take direct, grassroots ecological action
                that protects land, water, and biodiversity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-forest/10 space-y-3">
                <span className="text-xs font-mono font-bold text-coral">VALUE 01</span>
                <h3 className="font-serif text-xl font-medium text-forest">A Mind Met, Not Mended</h3>
                <p className="text-xs text-charcoal leading-relaxed">
                  Neurodivergence is not a deficit to be corrected. We design environments that meet people where they are,
                  fostering practical craft, autonomy, and vocational dignity.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-forest/10 space-y-3">
                <span className="text-xs font-mono font-bold text-coral">VALUE 02</span>
                <h3 className="font-serif text-xl font-medium text-forest">A Cancer Caught, Not Carried</h3>
                <p className="text-xs text-charcoal leading-relaxed">
                  Catching cancer early transforms survival, but surviving requires deep community. We stand beside
                  families during the months and years that no clinical visit covers alone.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-forest/10 space-y-3">
                <span className="text-xs font-mono font-bold text-coral">VALUE 03</span>
                <h3 className="font-serif text-xl font-medium text-forest">A Forest Saved, Not Mourned</h3>
                <p className="text-xs text-charcoal leading-relaxed">
                  Climate defense is everyday work: diverting plastic milk bags from landfills, fermenting bioenzymes
                  from discarded citrus, harvesting monsoon rainwater, and planting indigenous seeds.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-forest/10 space-y-3">
                <span className="text-xs font-mono font-bold text-coral">VALUE 04</span>
                <h3 className="font-serif text-xl font-medium text-forest">Radical Transparency</h3>
                <p className="text-xs text-charcoal leading-relaxed">
                  We publish verifiable outcomes, honor strict data privacy under India’s DPDP Act 2023, and never
                  inflate statistics or impact claims for publicity.
                </p>
              </div>
            </div>
          </div>
        </PageShell>
      </main>
      <Footer />
    </>
  );
}
