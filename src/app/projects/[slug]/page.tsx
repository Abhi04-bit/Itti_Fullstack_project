import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageShell from '@/components/PageShell';
import { VERIFIED_PROJECTS } from '@/lib/verified-data';
import { MapPin, Calendar, ArrowRight, Share2, ArrowLeft } from 'lucide-react';

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return VERIFIED_PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = VERIFIED_PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return { title: 'Project Not Found — The Itti Foundation' };

  return {
    title: `${project.title} — The Itti Foundation Projects`,
    description: project.summary,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = VERIFIED_PROJECTS.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <>
      <Header />
      <main id="main">
        <PageShell
          tag={project.category}
          title={project.title}
          subtitle={`A verified initiative in ${project.location || 'Pune, India'}`}
          breadcrumbs={[
            { label: 'Projects', href: '/projects' },
            { label: project.title },
          ]}
          sidebar={
            <div className="bg-white rounded-3xl p-6 border border-forest/10 space-y-4 shadow-sm">
              <h3 className="font-serif text-lg font-medium text-forest">Project Meta</h3>
              <div className="space-y-3 text-xs text-charcoal">
                <div className="flex items-center justify-between pb-2 border-b border-forest/10">
                  <span className="text-charcoal-muted">Timeline</span>
                  <span className="font-semibold text-forest">{project.date}</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-forest/10">
                  <span className="text-charcoal-muted">Status</span>
                  <span className="font-semibold text-coral">{project.status}</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-forest/10">
                  <span className="text-charcoal-muted">Location</span>
                  <span className="font-semibold text-forest">{project.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal-muted">Governance</span>
                  <span className="font-semibold text-forest">The Itti Foundation</span>
                </div>
              </div>

              <div className="pt-4 border-t border-forest/10">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-forest text-ivory text-xs font-medium hover:bg-forest-light transition-colors"
                >
                  <span>Propose Similar Workshop</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </div>
            </div>
          }
        >
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-forest/10 space-y-6 text-charcoal leading-relaxed shadow-sm">
            <h2 className="font-serif text-2xl font-medium text-forest">
              Context &amp; Execution
            </h2>
            <p className="text-base text-charcoal/90 leading-relaxed">
              {project.summary}
            </p>

            <div className="p-6 rounded-2xl bg-sage/30 border border-forest/10 space-y-2">
              <h3 className="font-serif text-lg font-medium text-forest">Core Outcomes</h3>
              <p className="text-xs text-charcoal leading-relaxed">
                By bringing learners, community workers, and civic administrators together, this program demonstrated
                how direct education and practical action build real-world responsibility.
              </p>
            </div>

            <div className="pt-6 border-t border-forest/10 flex items-center justify-between">
              <Link
                href="/projects"
                className="inline-flex items-center text-xs font-semibold text-forest hover:text-coral transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                <span>Back to All Projects</span>
              </Link>
              <Link
                href="/volunteer"
                className="text-xs font-semibold text-coral hover:underline"
              >
                Get Involved &rarr;
              </Link>
            </div>
          </div>
        </PageShell>
      </main>
      <Footer />
    </>
  );
}
