import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageShell from '@/components/PageShell';
import { ArrowRight, BookOpen, Heart, ShieldCheck, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Story & Purpose — The Itti Foundation',
  description: 'Born on 8 April 2023 on Itti’s birthday. We work where a different mind meets an education built for one kind, and where land, air and water need practical defense.',
};

export default function OurStoryPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageShell
          tag="The Foundation"
          title="Born from Purpose. Built for Change."
          subtitle="The Itti Foundation (Itti’s Skill School Foundation) is a Section 8 not-for-profit company incorporated in India."
          breadcrumbs={[{ label: 'Our Story' }]}
          sidebar={
            <div className="bg-sage/40 rounded-3xl p-6 border border-forest/10 space-y-4">
              <h3 className="font-serif text-xl font-medium text-forest">Story Navigation</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/our-story/mission" className="text-forest hover:text-coral font-medium flex items-center justify-between">
                    <span>Mission &amp; Values</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </li>
                <li>
                  <Link href="/our-story/legacy" className="text-forest hover:text-coral font-medium flex items-center justify-between">
                    <span>Dr. Itti’s Legacy</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </li>
                <li>
                  <Link href="/our-story/founder" className="text-forest hover:text-coral font-medium flex items-center justify-between">
                    <span>Founder’s Journey</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </li>
                <li>
                  <Link href="/our-story/team" className="text-forest hover:text-coral font-medium flex items-center justify-between">
                    <span>Team &amp; Governance</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </li>
                <li>
                  <Link href="/our-story/constitution" className="text-forest hover:text-coral font-medium flex items-center justify-between">
                    <span>Constitution &amp; Policies</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </li>
                <li>
                  <Link href="/our-story/transparency" className="text-forest hover:text-coral font-medium flex items-center justify-between">
                    <span>Transparency &amp; Reports</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </li>
              </ul>
            </div>
          }
        >
          <div className="prose prose-forest max-w-none text-charcoal leading-relaxed space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-forest/10 shadow-sm space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-forest">
                Our Genesis: 8 April 2023
              </h2>
              <p>
                Founded on 8 April 2023, on Itti’s birthday, The Itti Foundation was born out of an acute awareness
                of the systemic gaps facing neurodivergent children and adults, families dealing with cancer treatment,
                and fragile natural ecosystems.
              </p>
              <p>
                We do not believe in institutionalized charity that patronizes. Instead, we invest in direct livelihood,
                scientific dignity, and practical action across land, air, and water.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-forest/10 space-y-2">
                <span className="text-xs font-semibold text-coral uppercase">Core Triad</span>
                <h3 className="font-serif text-xl font-medium text-forest">Neurodivergence</h3>
                <p className="text-xs text-charcoal-muted">Skilling, sensory dignity, and inclusive vocational education.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-forest/10 space-y-2">
                <span className="text-xs font-semibold text-coral uppercase">Core Triad</span>
                <h3 className="font-serif text-xl font-medium text-forest">Cancer Care</h3>
                <p className="text-xs text-charcoal-muted">Companion circles and year-round navigation for families.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-forest/10 space-y-2">
                <span className="text-xs font-semibold text-coral uppercase">Core Triad</span>
                <h3 className="font-serif text-xl font-medium text-forest">Conservation</h3>
                <p className="text-xs text-charcoal-muted">Native seeds, bioenzyme fermenting, and water regeneration.</p>
              </div>
            </div>
          </div>
        </PageShell>
      </main>
      <Footer />
    </>
  );
}
