import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageShell from '@/components/PageShell';
import { VERIFIED_COMMITMENTS, VERIFIED_PROJECTS } from '@/lib/verified-data';
import { MessageCircle, ArrowRight, MapPin, CheckCircle } from 'lucide-react';

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return VERIFIED_COMMITMENTS.map((c) => ({
    slug: c.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const commitment = VERIFIED_COMMITMENTS.find((c) => c.slug === params.slug);
  if (!commitment) return { title: 'Commitment Not Found — The Itti Foundation' };

  return {
    title: `${commitment.title} — The Itti Foundation Commitments`,
    description: commitment.description,
  };
}

export default function CommitmentDetailPage({ params }: Props) {
  const commitment = VERIFIED_COMMITMENTS.find((c) => c.slug === params.slug);
  if (!commitment) notFound();

  const relatedProjects = VERIFIED_PROJECTS.filter((p) => {
    if (commitment.id === 'neurodivergence') return p.category === 'Experiential Learning';
    if (commitment.id === 'cancer-care') return p.category === 'Menstrual Health';
    if (commitment.id === 'conservation') return p.category === 'Climate Action';
    return false;
  });

  return (
    <>
      <Header />
      <main id="main">
        <PageShell
          tag="Commitment Pillar"
          title={commitment.title}
          subtitle={commitment.tagline}
          breadcrumbs={[
            { label: 'Commitments', href: '/commitments' },
            { label: commitment.title },
          ]}
          sidebar={
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-6 border border-forest/10 space-y-4 shadow-sm">
                <h3 className="font-serif text-lg font-medium text-forest">Connect with Circle</h3>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  Join patients, families, educators, and volunteers in our dedicated WhatsApp support circle.
                </p>
                <a
                  href={commitment.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-forest text-ivory text-xs font-medium hover:bg-forest-light transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mr-1.5" />
                  <span>Join {commitment.title} Circle</span>
                </a>
              </div>

              <div className="bg-sage/40 rounded-3xl p-6 border border-forest/10 space-y-3">
                <span className="text-[10px] uppercase font-mono tracking-wider text-charcoal-muted">
                  Historical Plate
                </span>
                <h4 className="font-serif text-base font-semibold text-forest">
                  {commitment.historicalPlate.title}
                </h4>
                <p className="text-xs text-charcoal-muted">
                  {commitment.historicalPlate.artist} ({commitment.historicalPlate.year})
                </p>
                <p className="text-xs text-charcoal leading-relaxed">
                  {commitment.historicalPlate.description}
                </p>
                <div className="text-[10px] text-charcoal-muted pt-2 border-t border-forest/10">
                  Licence: {commitment.historicalPlate.license}
                </div>
              </div>
            </div>
          }
        >
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-forest/10 space-y-4 shadow-sm">
              <blockquote className="font-serif text-2xl sm:text-3xl text-forest font-medium italic border-l-4 border-coral pl-6 my-2">
                &ldquo;{commitment.quote}&rdquo;
              </blockquote>
              <p className="text-base text-charcoal leading-relaxed pt-2">
                {commitment.description}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-medium text-forest">
                Featured Programs in {commitment.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedProjects.map((p) => (
                  <div key={p.id} className="bg-white rounded-2xl p-6 border border-forest/10 space-y-3 shadow-sm">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-forest bg-sage/60 px-2 py-0.5 rounded">
                        {p.category}
                      </span>
                      <span className="text-charcoal-muted">{p.date}</span>
                    </div>
                    <h4 className="font-serif text-lg font-medium text-forest">{p.title}</h4>
                    <p className="text-xs text-charcoal/80 leading-relaxed">{p.summary}</p>
                    <div className="pt-2 flex items-center justify-between text-xs text-charcoal-muted">
                      <span className="flex items-center"><MapPin className="w-3.5 h-3.5 mr-1 text-forest" />{p.location}</span>
                      <span className="font-medium text-coral">{p.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-ivory border border-forest/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="font-serif text-lg font-semibold text-forest">Take Part in This Commitment</h4>
                <p className="text-xs text-charcoal-muted">Volunteer your time, propose a school workshop, or support an artisan.</p>
              </div>
              <Link
                href="/volunteer"
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-forest text-ivory text-xs font-medium hover:bg-forest-light whitespace-nowrap"
              >
                <span>Volunteer With Us</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
            </div>
          </div>
        </PageShell>
      </main>
      <Footer />
    </>
  );
}
