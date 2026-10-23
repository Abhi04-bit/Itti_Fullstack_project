import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageShell from '@/components/PageShell';
import { VERIFIED_EVENTS } from '@/lib/verified-data';
import { Calendar, Clock, MapPin, ArrowLeft, Send } from 'lucide-react';

interface Props {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return VERIFIED_EVENTS.map((e) => ({
    id: e.id,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const event = VERIFIED_EVENTS.find((e) => e.id === params.id);
  if (!event) return { title: 'Event Not Found — The Itti Foundation' };

  return {
    title: `${event.title} (${event.dateStr}) — The Itti Foundation Events`,
    description: event.summary,
  };
}

export default function EventDetailPage({ params }: Props) {
  const event = VERIFIED_EVENTS.find((e) => e.id === params.id);
  if (!event) notFound();

  return (
    <>
      <Header />
      <main id="main">
        <PageShell
          tag={event.format}
          title={event.title}
          subtitle={`${event.dateStr} · ${event.time} · ${event.location}`}
          breadcrumbs={[
            { label: 'Events', href: '/events' },
            { label: event.title },
          ]}
          sidebar={
            <div className="bg-white rounded-3xl p-6 border border-forest/10 space-y-4 shadow-sm">
              <h3 className="font-serif text-lg font-medium text-forest">Event Details</h3>
              <div className="space-y-3 text-xs text-charcoal">
                <div className="flex items-center justify-between pb-2 border-b border-forest/10">
                  <span className="text-charcoal-muted">Date</span>
                  <span className="font-semibold text-forest">{event.dateStr} {event.monthYear}</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-forest/10">
                  <span className="text-charcoal-muted">Time</span>
                  <span className="font-semibold text-forest">{event.time}</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-forest/10">
                  <span className="text-charcoal-muted">Format</span>
                  <span className="font-semibold text-forest">{event.format}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal-muted">Venue</span>
                  <span className="font-semibold text-forest">{event.location}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-forest/10">
                <a
                  href={`mailto:hello@itti.org.in?subject=RSVP%20for%20${encodeURIComponent(event.title)}`}
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-forest text-ivory text-xs font-medium hover:bg-forest-light transition-colors"
                >
                  <Send className="w-3.5 h-3.5 mr-1.5" />
                  <span>RSVP for this Event</span>
                </a>
              </div>
            </div>
          }
        >
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-forest/10 space-y-6 text-charcoal leading-relaxed shadow-sm">
            <h2 className="font-serif text-2xl font-medium text-forest">Session Overview</h2>
            <p className="text-base text-charcoal/90 leading-relaxed">
              {event.summary}
            </p>

            <div className="p-6 rounded-2xl bg-sage/30 border border-forest/10 space-y-2">
              <h3 className="font-serif text-base font-semibold text-forest">Who should attend?</h3>
              <p className="text-xs text-charcoal leading-relaxed">
                Open to volunteers, patients, caregivers, students, and citizens. Pre-registration helps us coordinate
                sensory seating and materials.
              </p>
            </div>

            <div className="pt-6 border-t border-forest/10">
              <Link
                href="/events"
                className="inline-flex items-center text-xs font-semibold text-forest hover:text-coral transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                <span>Back to All Events</span>
              </Link>
            </div>
          </div>
        </PageShell>
      </main>
      <Footer />
    </>
  );
}
