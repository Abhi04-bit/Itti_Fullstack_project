import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageShell from '@/components/PageShell';
import { Newspaper, Bell, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Newsroom & Announcements — The Itti Foundation',
  description: 'Official press statements, program announcements, and updates from The Itti Foundation.',
};

export default function NewsroomPage() {
  const articles = [
    {
      id: 'a1',
      title: 'Pedestrian Safety Action Day Concludes in Pune',
      date: '11 Dec 2023',
      category: 'Civic Learning',
      summary: 'Students took over traffic regulation and presented appeals directly to local municipal authorities on urban encroachment and pedestrian rights.',
    },
    {
      id: 'a2',
      title: 'Periods Ki Pathshala Reaches Over 500 Women Across Maharashtra',
      date: 'Sep 2024',
      category: 'Health Literacy',
      summary: 'Continuous workshops bridging the gap in menstrual physiology education and sustainable sanitary practices.',
    },
    {
      id: 'a3',
      title: 'CLAW Bioenzyme Pilot Launched with School Facilities Staff',
      date: 'Jan 2025',
      category: 'Climate Action',
      summary: 'Housekeeping teams at Amanora School master citrus waste fermentation to replace harsh chemical cleaning agents.',
    },
  ];

  return (
    <>
      <Header />
      <main id="main">
        <PageShell
          tag="Press & Updates"
          title="Newsroom &amp; Announcements"
          subtitle="Verified updates, press releases, and dispatches from our active program hubs."
          breadcrumbs={[{ label: 'Newsroom' }]}
        >
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {articles.map((art) => (
                <div
                  key={art.id}
                  className="bg-white rounded-3xl p-8 border border-forest/10 space-y-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center space-x-3 text-xs">
                    <span className="font-semibold text-forest bg-sage/60 px-2.5 py-0.5 rounded-full">
                      {art.category}
                    </span>
                    <span className="text-charcoal-muted">{art.date}</span>
                  </div>

                  <h2 className="font-serif text-2xl font-medium text-forest leading-snug">
                    {art.title}
                  </h2>

                  <p className="text-sm text-charcoal/80 leading-relaxed max-w-3xl">
                    {art.summary}
                  </p>

                  <div className="pt-2 text-xs font-semibold text-coral">
                    Verified Press Dispatch · The Itti Foundation Desk
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-sage/30 border border-forest/10 text-xs text-charcoal-muted flex items-center justify-between">
              <span>For media inquiries or interviews: <a href="mailto:hello@itti.org.in" className="text-forest underline font-medium">hello@itti.org.in</a></span>
              <span className="text-forest font-semibold">Press Office</span>
            </div>
          </div>
        </PageShell>
      </main>
      <Footer />
    </>
  );
}
