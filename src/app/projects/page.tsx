'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageShell from '@/components/PageShell';
import { VERIFIED_PROJECTS } from '@/lib/verified-data';
import { MapPin, Search, Filter, ArrowRight } from 'lucide-react';

export default function ProjectsListingPage() {
  const [filterCategory, setFilterCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['ALL', 'Experiential Learning', 'Menstrual Health', 'Climate Action'];

  const filteredProjects = VERIFIED_PROJECTS.filter((p) => {
    const matchesCategory = filterCategory === 'ALL' || p.category === filterCategory;
    const matchesSearch =
      searchQuery === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Header />
      <main id="main">
        <PageShell
          tag="Field Initiatives"
          title="Projects & Programs"
          subtitle="Explore our experiential learning days, menstrual health education, and practical climate defense."
          breadcrumbs={[{ label: 'Projects' }]}
        >
          {/* Controls: Search and Filter Tabs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl border border-forest/10 shadow-sm">
            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3 top-3 text-charcoal-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects..."
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-forest/15 text-xs text-charcoal bg-ivory/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    filterCategory === cat
                      ? 'bg-forest text-ivory'
                      : 'bg-sage/40 text-charcoal hover:bg-sage'
                  }`}
                >
                  {cat === 'ALL' ? 'All Initiatives' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {filteredProjects.length === 0 ? (
              <div className="col-span-3 text-center py-12 bg-white rounded-3xl border border-forest/10 p-8 text-charcoal-muted text-sm">
                No projects matched your search criteria.
              </div>
            ) : (
              filteredProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="bg-white rounded-2xl border border-forest/10 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold px-2.5 py-1 rounded-full bg-sage/60 text-forest">
                        {proj.category}
                      </span>
                      <span className="text-charcoal-muted">{proj.date}</span>
                    </div>

                    <h3 className="font-serif text-xl font-medium text-forest leading-snug">
                      <Link href={`/projects/${proj.slug}`} className="hover:text-coral transition-colors">
                        {proj.title}
                      </Link>
                    </h3>

                    <p className="text-xs text-charcoal/80 leading-relaxed">
                      {proj.summary}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-forest/10 flex items-center justify-between text-xs">
                    <div className="flex items-center text-charcoal-muted">
                      <MapPin className="w-3.5 h-3.5 mr-1 text-forest" />
                      <span>{proj.location}</span>
                    </div>
                    <Link
                      href={`/projects/${proj.slug}`}
                      className="font-medium text-forest hover:text-coral flex items-center"
                    >
                      Read Story <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Quick links to Past Work and Partners */}
          <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/projects/past-work"
              className="p-5 rounded-2xl bg-sage/30 border border-forest/10 hover:bg-sage/50 transition-colors flex items-center justify-between"
            >
              <div>
                <h4 className="font-serif text-base font-medium text-forest">Past Work Archive</h4>
                <p className="text-xs text-charcoal-muted mt-0.5">View our foundational milestones and historical work</p>
              </div>
              <ArrowRight className="w-4 h-4 text-forest" />
            </Link>

            <Link
              href="/projects/partners"
              className="p-5 rounded-2xl bg-sage/30 border border-forest/10 hover:bg-sage/50 transition-colors flex items-center justify-between"
            >
              <div>
                <h4 className="font-serif text-base font-medium text-forest">Partners &amp; Collaborators</h4>
                <p className="text-xs text-charcoal-muted mt-0.5">Schools, civic groups, and environmental alliances</p>
              </div>
              <ArrowRight className="w-4 h-4 text-forest" />
            </Link>
          </div>
        </PageShell>
      </main>
      <Footer />
    </>
  );
}
