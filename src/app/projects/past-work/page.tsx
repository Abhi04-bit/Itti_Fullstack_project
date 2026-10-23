import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageShell from '@/components/PageShell';
import { VERIFIED_PROJECTS } from '@/lib/verified-data';
import { ArrowLeft, History } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Past Work & Historical Archive — The Itti Foundation',
  description: 'Archive of past community projects and milestones carried out by The Itti Foundation.',
};

export default function PastWorkPage() {
  const completedProjects = VERIFIED_PROJECTS.filter((p) => p.status === 'Completed');

  return (
    <>
      <Header />
      <main id="main">
        <PageShell
          tag="Archive"
          title="Past Work &amp; Milestones"
          subtitle="A transparent record of completed community actions, traffic safety drives, and bioenzyme trainings."
          breadcrumbs={[
            { label: 'Projects', href: '/projects' },
            { label: 'Past Work' },
          ]}
        >
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-forest/10 space-y-4">
              <h2 className="font-serif text-2xl font-medium text-forest">Archival Log of Completed Initiatives</h2>
              <p className="text-sm text-charcoal leading-relaxed">
                Every project we undertake produces measurable community outcomes. Below are the verified initiatives
                concluded and documented by our field teams.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {completedProjects.map((p) => (
                <div key={p.id} className="bg-white rounded-2xl p-6 border border-forest/10 space-y-3 shadow-sm">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-forest bg-sage/60 px-2 py-0.5 rounded">
                      {p.category}
                    </span>
                    <span className="text-charcoal-muted">{p.date}</span>
                  </div>
                  <h3 className="font-serif text-lg font-medium text-forest">{p.title}</h3>
                  <p className="text-xs text-charcoal/80 leading-relaxed">{p.summary}</p>
                  <div className="pt-2 text-xs text-coral font-medium">Status: Concluded &amp; Documented</div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/projects"
                className="inline-flex items-center text-xs font-semibold text-forest hover:text-coral"
              >
                <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                <span>Return to Active Projects</span>
              </Link>
            </div>
          </div>
        </PageShell>
      </main>
      <Footer />
    </>
  );
}
