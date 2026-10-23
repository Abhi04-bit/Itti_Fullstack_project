import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageShell from '@/components/PageShell';
import { ArrowLeft, Home, Compass } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Page Not Found (404) — The Itti Foundation',
  description: 'The requested page could not be located on The Itti Foundation website.',
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main">
        <PageShell
          tag="Notice"
          title="Page Not Found"
          subtitle="The page you were looking for could not be found or has moved."
          breadcrumbs={[{ label: '404' }]}
        >
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-forest/10 text-center space-y-6 shadow-sm max-w-xl mx-auto">
            <div className="font-serif text-6xl font-medium text-forest">404</div>
            <p className="text-sm text-charcoal-muted leading-relaxed">
              We redesigned the foundation website to fix previous broken links and improve accessibility.
              You can navigate back to our main commitments, projects, or our home page.
            </p>

            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-2.5 rounded-full bg-forest text-ivory text-xs font-medium hover:bg-forest-light transition-colors"
              >
                <Home className="w-3.5 h-3.5 mr-1.5" />
                <span>Return to Homepage</span>
              </Link>

              <Link
                href="/commitments"
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-sage/60 text-forest text-xs font-medium hover:bg-sage transition-colors"
              >
                <Compass className="w-3.5 h-3.5 mr-1.5" />
                <span>Our Commitments</span>
              </Link>
            </div>
          </div>
        </PageShell>
      </main>
      <Footer />
    </>
  );
}
