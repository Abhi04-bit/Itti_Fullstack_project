import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageShell from '@/components/PageShell';
import { VERIFIED_PRODUCTS } from '@/lib/verified-data';
import { ShoppingBag, ArrowLeft, ShieldCheck, Heart } from 'lucide-react';

interface Props {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return VERIFIED_PRODUCTS.map((p) => ({
    id: p.id,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = VERIFIED_PRODUCTS.find((p) => p.id === params.id);
  if (!product) return { title: 'Product Not Found — The Itti Foundation' };

  return {
    title: `${product.name} (₹${product.price}) — The Itti Foundation Marketplace`,
    description: product.description,
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = VERIFIED_PRODUCTS.find((p) => p.id === params.id);
  if (!product) notFound();

  return (
    <>
      <Header />
      <main id="main">
        <PageShell
          tag={`${product.category} Collection`}
          title={product.name}
          subtitle={product.craftInfo}
          breadcrumbs={[
            { label: 'Marketplace', href: '/marketplace' },
            { label: product.name },
          ]}
          sidebar={
            <div className="bg-white rounded-3xl p-6 border border-forest/10 space-y-6 shadow-sm">
              <div className="space-y-1">
                <span className="text-xs text-charcoal-muted uppercase">Indicative Price</span>
                <div className="font-serif text-3xl font-bold text-forest">₹{product.price}</div>
                <p className="text-[11px] text-charcoal-muted">Shipping calculated on inquiry based on destination.</p>
              </div>

              <div className="space-y-3">
                <a
                  href={product.inquiryMailto}
                  className="w-full inline-flex items-center justify-center px-5 py-3 rounded-full bg-forest text-ivory text-sm font-medium hover:bg-forest-light transition-colors shadow"
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  <span>Ask About This Craft</span>
                </a>

                <div className="p-3 bg-sage/30 rounded-xl text-xs text-charcoal space-y-1">
                  <span className="font-semibold text-forest block">Livelihood Guarantee</span>
                  <p className="text-charcoal-muted">
                    Money from this order goes directly to the individual artisan first, then replenishes workshop materials.
                  </p>
                </div>
              </div>
            </div>
          }
        >
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-forest/10 space-y-6 shadow-sm">
            <div className="flex items-center space-x-3">
              <span className="w-10 h-10 rounded-full bg-forest text-ivory font-mono font-bold flex items-center justify-center text-sm">
                {product.code}
              </span>
              <div>
                <h2 className="font-serif text-2xl font-medium text-forest">{product.name}</h2>
                <span className="text-xs text-coral font-medium">{product.craftInfo}</span>
              </div>
            </div>

            <p className="text-base text-charcoal/90 leading-relaxed">
              {product.description}
            </p>

            <div className="pt-6 border-t border-forest/10">
              <Link
                href="/marketplace"
                className="inline-flex items-center text-xs font-semibold text-forest hover:text-coral transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                <span>Back to Marketplace</span>
              </Link>
            </div>
          </div>
        </PageShell>
      </main>
      <Footer />
    </>
  );
}
