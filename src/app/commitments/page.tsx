import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageShell from '@/components/PageShell';
import { VERIFIED_COMMITMENTS } from '@/lib/verified-data';
import { ArrowRight, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Commitments — The Itti Foundation',
  description: 'Three foundational commitments: Neurodivergence, Cancer Care, and Conservation.',
};

export default function CommitmentsIndexPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageShell
          tag="Pillars"
          title="Our Three Commitments"
          subtitle="A mind met, not mended. A cancer caught, not carried. A forest saved, not mourned."
          breadcrumbs={[{ label: 'Commitments' }]}
        >
          <div className="space-y-8">
            {VERIFIED_COMMITMENTS.map((c, idx) => (
              <div
                key={c.id}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-forest/10 shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono font-bold bg-sage text-forest px-2.5 py-0.5 rounded-full">
                      Pillar 0{idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-coral uppercase">{c.tagline}</span>
                  </div>

                  <h2 className="font-serif text-3xl font-medium text-forest">{c.title}</h2>
                  <blockquote className="font-serif text-lg text-charcoal/90 italic border-l-2 border-coral pl-4">
                    &ldquo;{c.quote}&rdquo;
                  </blockquote>
                  <p className="text-sm text-charcoal leading-relaxed">{c.description}</p>

                  <div className="pt-2 flex flex-wrap gap-4 items-center">
                    <Link
                      href={`/commitments/${c.slug}`}
                      className="inline-flex items-center px-5 py-2.5 rounded-full bg-forest text-ivory text-xs sm:text-sm font-medium hover:bg-forest-light transition-colors"
                    >
                      <span>Explore {c.title} Pillar</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Link>

                    <a
                      href={c.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2.5 rounded-full border border-forest/20 text-forest text-xs sm:text-sm font-medium hover:bg-sage/40 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                      <span>WhatsApp Group</span>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-sage/30 rounded-2xl p-6 border border-forest/10 space-y-2">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-charcoal-muted">
                    Historical Plate
                  </span>
                  <h3 className="font-serif text-base font-semibold text-forest">{c.historicalPlate.title}</h3>
                  <p className="text-xs text-charcoal-muted">{c.historicalPlate.artist} · {c.historicalPlate.year}</p>
                  <p className="text-xs text-charcoal leading-relaxed line-clamp-3">{c.historicalPlate.description}</p>
                </div>
              </div>
            ))}
          </div>
        </PageShell>
      </main>
      <Footer />
    </>
  );
}
