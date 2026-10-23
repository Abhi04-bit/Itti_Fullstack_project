import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageShell from '@/components/PageShell';
import { Building2, School, Users2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Partners & Collaborators — The Itti Foundation',
  description: 'Schools, community centers, and environmental alliances collaborating with The Itti Foundation.',
};

export default function PartnersPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageShell
          tag="Collaboration"
          title="Partners &amp; Alliances"
          subtitle="We collaborate with educational institutions, waste management champions, and cancer support communities."
          breadcrumbs={[
            { label: 'Projects', href: '/projects' },
            { label: 'Partners' },
          ]}
        >
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-forest/10 space-y-4">
              <h2 className="font-serif text-2xl font-medium text-forest">Institutional Collaborations</h2>
              <p className="text-sm text-charcoal leading-relaxed">
                Lasting systemic change requires alliances across schools, local government bodies, and grassroots communities.
                Below are verified institutional settings where our initiatives have been successfully implemented.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-forest/10 space-y-3 shadow-sm">
                <School className="w-8 h-8 text-forest" />
                <h3 className="font-serif text-lg font-medium text-forest">Amanora School</h3>
                <p className="text-xs text-charcoal leading-relaxed">
                  Partner in experiential ecological training, hosting hands-on bioenzyme workshops for campus housekeeping teams.
                </p>
                <span className="text-[11px] font-semibold text-forest bg-sage/60 px-2 py-0.5 rounded inline-block">
                  Pune, Maharashtra
                </span>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-forest/10 space-y-3 shadow-sm">
                <Building2 className="w-8 h-8 text-forest" />
                <h3 className="font-serif text-lg font-medium text-forest">Pune Traffic Police &amp; Civic Ward</h3>
                <p className="text-xs text-charcoal leading-relaxed">
                  Collaborated on the Shiv Shakti Chowk Pedestrian Safety Action Day and student civic representation.
                </p>
                <span className="text-[11px] font-semibold text-forest bg-sage/60 px-2 py-0.5 rounded inline-block">
                  Civic Action Partner
                </span>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-forest/10 space-y-3 shadow-sm">
                <Users2 className="w-8 h-8 text-forest" />
                <h3 className="font-serif text-lg font-medium text-forest">CLAW Workshops</h3>
                <p className="text-xs text-charcoal leading-relaxed">
                  Artisan skilling hub training neurodivergent learners in hand-loomed vetiver root, seed balls, and clean chemistry.
                </p>
                <span className="text-[11px] font-semibold text-forest bg-sage/60 px-2 py-0.5 rounded inline-block">
                  Skilling Alliance
                </span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-forest text-ivory flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center sm:text-left">
                <h3 className="font-serif text-2xl font-medium">Partner with The Foundation</h3>
                <p className="text-xs text-ivory/80 max-w-lg">
                  Bring our menstrual health literacy workshops or bioenzyme training to your school or workplace.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-full bg-coral text-white font-medium text-sm hover:bg-coral-dark whitespace-nowrap shadow"
              >
                <span>Propose Partnership</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>
        </PageShell>
      </main>
      <Footer />
    </>
  );
}
