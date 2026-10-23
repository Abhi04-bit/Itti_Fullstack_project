'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageShell from '@/components/PageShell';
import { VERIFIED_PRODUCTS } from '@/lib/verified-data';
import { ShoppingBag, ArrowRight, Sparkles, Filter } from 'lucide-react';

export default function MarketplacePage() {
  const [activeCollection, setActiveCollection] = useState<string>('ALL');

  const collections = ['ALL', 'Conservation', 'Neurodivergence', 'Cancer Care'];

  const filteredProducts = VERIFIED_PRODUCTS.filter((prod) => {
    if (activeCollection === 'ALL') return true;
    return prod.category === activeCollection;
  });

  return (
    <>
      <Header />
      <main id="main">
        <PageShell
          tag="Artisan Crafts"
          title="Marketplace"
          subtitle="Made in the workshops, by the people the Foundation teaches. No warehouse, no markup — money reaches the maker first."
          breadcrumbs={[{ label: 'Marketplace' }]}
        >
          {/* How It Works Banner */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-forest/10 shadow-sm space-y-4">
            <h2 className="font-serif text-xl font-medium text-forest">
              How Our Marketplace Works: Direct Artisan Orders
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs text-charcoal">
              <div className="p-4 rounded-xl bg-sage/30 space-y-1">
                <span className="font-mono font-bold text-coral">01 · You Write</span>
                <p className="text-charcoal-muted">Say what you want and how many.</p>
              </div>
              <div className="p-4 rounded-xl bg-sage/30 space-y-1">
                <span className="font-mono font-bold text-coral">02 · We Answer</span>
                <p className="text-charcoal-muted">What is made, shipping costs, and time.</p>
              </div>
              <div className="p-4 rounded-xl bg-sage/30 space-y-1">
                <span className="font-mono font-bold text-coral">03 · It is Made</span>
                <p className="text-charcoal-muted">By hand, by somebody paid directly for it.</p>
              </div>
              <div className="p-4 rounded-xl bg-sage/30 space-y-1">
                <span className="font-mono font-bold text-coral">04 · Money Returns</span>
                <p className="text-charcoal-muted">To the maker first, then the training program.</p>
              </div>
            </div>
          </div>

          {/* Collection Filter Buttons */}
          <div className="flex flex-wrap gap-2 items-center justify-between pt-2">
            <div className="flex flex-wrap gap-2">
              {collections.map((col) => (
                <button
                  key={col}
                  onClick={() => setActiveCollection(col)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                    activeCollection === col
                      ? 'bg-forest text-ivory'
                      : 'bg-white text-charcoal border border-forest/15 hover:bg-sage/40'
                  }`}
                >
                  {col === 'ALL' ? 'All 9 Products' : `${col} Collection`}
                </button>
              ))}
            </div>

            <div className="text-xs text-charcoal-muted">
              First making cycle active · Prices indicative
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {filteredProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-forest/10 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="w-7 h-7 rounded-full bg-forest text-ivory font-mono font-bold flex items-center justify-center text-[11px]">
                      {item.code}
                    </span>
                    <span className="font-serif font-bold text-forest text-base">₹{item.price}</span>
                  </div>

                  <h3 className="font-serif text-lg font-medium text-forest group-hover:text-forest-light transition-colors">
                    <Link href={`/marketplace/${item.id}`} className="hover:underline">
                      {item.name}
                    </Link>
                  </h3>

                  <p className="text-xs font-semibold text-coral">{item.craftInfo}</p>
                  <p className="text-xs text-charcoal/80 leading-relaxed">{item.description}</p>
                </div>

                <div className="pt-5 mt-5 border-t border-forest/10 flex items-center justify-between gap-2">
                  <Link
                    href={`/marketplace/${item.id}`}
                    className="text-xs font-semibold text-forest hover:text-coral"
                  >
                    Details &rarr;
                  </Link>

                  <a
                    href={item.inquiryMailto}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-sage/60 hover:bg-forest hover:text-ivory text-forest text-xs font-medium transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 mr-1" />
                    <span>Ask to Order</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="p-6 rounded-2xl bg-ivory border border-forest/10 text-xs text-charcoal-muted text-center">
            For bulk inquiries for events or schools, email us at <a href="mailto:hello@itti.org.in" className="text-forest underline font-medium">hello@itti.org.in</a>.
          </div>
        </PageShell>
      </main>
      <Footer />
    </>
  );
}
