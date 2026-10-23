import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageShell from '@/components/PageShell';
import { VERIFIED_EVENTS } from '@/lib/verified-data';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Events & Workshops — The Itti Foundation',
  description: 'Upcoming volunteer meetings, webinars, and offline workshops for October and November 2026.',
};

export default function EventsListingPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageShell
          tag="Community Gatherings"
          title="Events &amp; Workshops"
          subtitle="Join our online volunteer syncs, cancer care support circles, menstrual health webinars, and environmental drives."
          breadcrumbs={[{ label: 'Events' }]}
        >
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {VERIFIED_EVENTS.map((evt) => (
                <div
                  key={evt.id}
                  className="bg-white rounded-2xl border border-forest/10 p-6 flex flex-col justify-between shadow-sm hover:border-forest/30 transition-colors"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline space-x-1.5">
                        <span className="font-serif text-2xl font-bold text-forest">{evt.dayNumber}</span>
                        <span className="text-xs font-semibold text-charcoal-muted uppercase">{evt.monthYear}</span>
                      </div>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-sage text-forest">
                        {evt.format}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-medium text-forest leading-snug">
                      <Link href={`/events/${evt.id}`} className="hover:text-coral transition-colors">
                        {evt.title}
                      </Link>
                    </h3>

                    <p className="text-xs text-charcoal/80 leading-relaxed">
                      {evt.summary}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-forest/10 flex items-center justify-between text-xs text-charcoal-muted">
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1 text-forest" />
                        <span>{evt.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-3.5 h-3.5 mr-1 text-forest" />
                        <span>{evt.location}</span>
                      </div>
                    </div>
                    <Link
                      href={`/events/${evt.id}`}
                      className="font-medium text-forest hover:text-coral flex items-center"
                    >
                      View Details &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-3xl bg-forest text-ivory flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="font-serif text-2xl font-medium">Propose a Community Workshop</h3>
                <p className="text-xs text-ivory/80 max-w-lg">
                  Want to host a bioenzyme demo or periods literacy session in your society or school?
                </p>
              </div>
              <a
                href="mailto:hello@itti.org.in?subject=Proposing%20a%20Community%20Workshop"
                className="inline-flex items-center px-6 py-3 rounded-full bg-coral text-white font-medium text-sm hover:bg-coral-dark whitespace-nowrap shadow"
              >
                <span>Write to Us</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </a>
            </div>
          </div>
        </PageShell>
      </main>
      <Footer />
    </>
  );
}
