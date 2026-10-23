import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageShell from '@/components/PageShell';
import { Heart, ShieldAlert, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Donate — The Itti Foundation',
  description: 'Support neurodivergence assessments, cancer care circles, and practical conservation. Where your gift goes and legal accounting.',
};

export default function DonatePage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageShell
          tag="Support Our Work"
          title="Make a Gift"
          subtitle="Between ₹100 and ₹5,00,000. Indian donors only. Neurodivergence, cancer care, and conservation."
          breadcrumbs={[{ label: 'Donate' }]}
          sidebar={
            <div className="bg-white rounded-3xl p-6 border border-forest/10 space-y-4 shadow-sm">
              <h3 className="font-serif text-lg font-medium text-forest">Direct Bank Transfer</h3>
              <p className="text-xs text-charcoal leading-relaxed">
                To make a direct contribution via NEFT / RTGS / UPI, please write to our finance desk.
              </p>
              <a
                href="mailto:hello@itti.org.in?subject=Direct%20Bank%20Transfer%20Donation&body=Hello%2C%20I%20would%20like%20to%20make%20a%20gift%20to%20The%20Itti%20Foundation.%0A%0AAmount%3A%20%E2%82%B9%0ACause%3A%20%0AName%3A%20%0APhone%3A%20"
                className="w-full inline-flex items-center justify-center px-4 py-3 rounded-full bg-coral text-white font-medium text-xs hover:bg-coral-dark transition-colors shadow"
              >
                <Heart className="w-3.5 h-3.5 mr-1.5 fill-white" />
                <span>Request Account Details</span>
              </a>
              <div className="text-[11px] text-charcoal-muted text-center">
                A member of the team replies with official Section 8 details within 5 working days.
              </div>
            </div>
          }
        >
          <div className="space-y-8">
            {/* Status Notice */}
            <div className="p-6 rounded-3xl bg-sage/40 border border-forest/10 space-y-2">
              <span className="text-xs font-semibold text-coral uppercase tracking-wider block">
                Statutory Disclosure on 80G Relief
              </span>
              <p className="text-xs sm:text-sm text-charcoal leading-relaxed">
                Itti’s Skill School Foundation is a registered Section 8 not-for-profit company incorporated in India.
                Contributions are restricted to Indian donors. The foundation is currently <strong>not yet eligible for 80G tax relief</strong>.
                We believe in total transparency so every donor knows the exact legal standing of their gift.
              </p>
            </div>

            {/* Where Your Gift Goes */}
            <div className="bg-white rounded-3xl p-8 border border-forest/10 space-y-6 shadow-sm">
              <h2 className="font-serif text-2xl font-medium text-forest">
                Where Your Gift Goes
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-ivory/80 border border-forest/10 space-y-2">
                  <span className="text-xs font-mono font-bold text-coral">I · Neurodivergence</span>
                  <h3 className="font-serif text-base font-semibold text-forest">Affordable Assessment</h3>
                  <p className="text-xs text-charcoal leading-relaxed">
                    Assessment a family can afford, and the years of vocational and craft mentorship that follow.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-ivory/80 border border-forest/10 space-y-2">
                  <span className="text-xs font-mono font-bold text-coral">II · Cancer Care</span>
                  <h3 className="font-serif text-base font-semibold text-forest">The Year That Follows</h3>
                  <p className="text-xs text-charcoal leading-relaxed">
                    Diagnosis is a day. The year that follows is everything else. Emotional circles and patient companionship.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-ivory/80 border border-forest/10 space-y-2">
                  <span className="text-xs font-mono font-bold text-coral">III · Conservation</span>
                  <h3 className="font-serif text-base font-semibold text-forest">Ordinary Defense</h3>
                  <p className="text-xs text-charcoal leading-relaxed">
                    The ordinary defense of places with nobody arguing for them: tree planting, bioenzymes, and clean water.
                  </p>
                </div>
              </div>
            </div>

            {/* Other Ways to Help */}
            <div className="bg-white rounded-3xl p-8 border border-forest/10 space-y-4 shadow-sm">
              <h2 className="font-serif text-2xl font-medium text-forest">
                Other Ways to Help
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-charcoal">
                <Link href="/volunteer" className="p-4 rounded-xl bg-sage/30 hover:bg-sage/50 transition-colors block">
                  <span className="font-semibold text-forest block mb-1">Give Time</span>
                  <p className="text-charcoal-muted">An hour from someone who knows what they are doing is worth more than the money to buy it.</p>
                </Link>
                <Link href="/contact" className="p-4 rounded-xl bg-sage/30 hover:bg-sage/50 transition-colors block">
                  <span className="font-semibold text-forest block mb-1">Bring Your Organisation</span>
                  <p className="text-charcoal-muted">Companies wanting to do more than a cheque in December through workshops and alliances.</p>
                </Link>
              </div>
            </div>
          </div>
        </PageShell>
      </main>
      <Footer />
    </>
  );
}
