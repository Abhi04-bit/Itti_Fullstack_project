'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Heart, ArrowUpRight } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [storyOpen, setStoryOpen] = useState(false);
  const [commitmentsOpen, setCommitmentsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ivory/95 backdrop-blur-md shadow-sm border-b border-forest/10 py-3'
          : 'bg-ivory border-b border-forest/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo / Wordmark */}
          <Link
            href="/"
            className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest rounded-sm"
          >
            <span className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-forest group-hover:text-forest-light transition-colors">
              The Itti<span className="font-sans font-light tracking-widest text-xs uppercase block sm:inline sm:ml-2 sm:text-sm text-charcoal-muted">Foundation</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {/* Our Story Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className="flex items-center px-3 py-2 text-sm font-medium text-charcoal hover:text-forest transition-colors rounded-md focus-visible:ring-2 focus-visible:ring-forest"
                aria-expanded={storyOpen}
                onClick={() => setStoryOpen(!storyOpen)}
                onMouseEnter={() => setStoryOpen(true)}
              >
                <span>Our Story</span>
                <ChevronDown className="ml-1 w-3.5 h-3.5 text-charcoal-muted transition-transform group-hover:rotate-180" />
              </button>

              <div
                className={`absolute left-0 top-full mt-1 w-64 rounded-xl bg-white p-3 shadow-xl ring-1 ring-forest/10 transition-all duration-200 ${
                  storyOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseLeave={() => setStoryOpen(false)}
              >
                <div className="text-[11px] font-semibold uppercase tracking-wider text-charcoal-muted px-3 py-1 mb-1">
                  The Foundation
                </div>
                <Link
                  href="/#story"
                  className="block px-3 py-2 text-sm text-charcoal hover:bg-sage/40 hover:text-forest rounded-lg transition-colors"
                  onClick={() => setStoryOpen(false)}
                >
                  <span className="font-medium">Origin & Mission</span>
                  <p className="text-xs text-charcoal-muted mt-0.5">Founded 8 April 2023 on Itti&apos;s birthday</p>
                </Link>
                <Link
                  href="/#legacy"
                  className="block px-3 py-2 text-sm text-charcoal hover:bg-sage/40 hover:text-forest rounded-lg transition-colors"
                  onClick={() => setStoryOpen(false)}
                >
                  <span className="font-medium">Dr. Itti&apos;s Legacy</span>
                  <p className="text-xs text-charcoal-muted mt-0.5">The inspiration guiding our ongoing journey</p>
                </Link>
                <div className="border-t border-forest/10 my-1"></div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-charcoal-muted px-3 py-1 mb-1">
                  Governance
                </div>
                <Link
                  href="/policies#privacy"
                  className="block px-3 py-2 text-sm text-charcoal hover:bg-sage/40 hover:text-forest rounded-lg transition-colors"
                  onClick={() => setStoryOpen(false)}
                >
                  <span className="font-medium">Governance & Transparency</span>
                  <p className="text-xs text-charcoal-muted mt-0.5">Section 8 not-for-profit charter & DPDP compliance</p>
                </Link>
              </div>
            </div>

            {/* Commitments Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className="flex items-center px-3 py-2 text-sm font-medium text-charcoal hover:text-forest transition-colors rounded-md focus-visible:ring-2 focus-visible:ring-forest"
                aria-expanded={commitmentsOpen}
                onClick={() => setCommitmentsOpen(!commitmentsOpen)}
                onMouseEnter={() => setCommitmentsOpen(true)}
              >
                <span>Commitments</span>
                <ChevronDown className="ml-1 w-3.5 h-3.5 text-charcoal-muted transition-transform group-hover:rotate-180" />
              </button>

              <div
                className={`absolute left-0 top-full mt-1 w-72 rounded-xl bg-white p-3 shadow-xl ring-1 ring-forest/10 transition-all duration-200 ${
                  commitmentsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseLeave={() => setCommitmentsOpen(false)}
              >
                <div className="text-[11px] font-semibold uppercase tracking-wider text-charcoal-muted px-3 py-1 mb-1">
                  Three Core Pillars
                </div>
                <Link
                  href="/#commitments"
                  className="block px-3 py-2 text-sm text-charcoal hover:bg-sage/40 hover:text-forest rounded-lg transition-colors"
                  onClick={() => setCommitmentsOpen(false)}
                >
                  <span className="font-medium flex items-center justify-between">
                    Neurodivergence
                    <span className="text-[11px] text-forest bg-sage px-1.5 py-0.5 rounded">Pillar 1</span>
                  </span>
                  <p className="text-xs text-charcoal-muted mt-0.5">Skilling, livelihood &amp; cognitive diversity</p>
                </Link>
                <Link
                  href="/#commitments"
                  className="block px-3 py-2 text-sm text-charcoal hover:bg-sage/40 hover:text-forest rounded-lg transition-colors"
                  onClick={() => setCommitmentsOpen(false)}
                >
                  <span className="font-medium flex items-center justify-between">
                    Cancer Care
                    <span className="text-[11px] text-forest bg-sage px-1.5 py-0.5 rounded">Pillar 2</span>
                  </span>
                  <p className="text-xs text-charcoal-muted mt-0.5">Year-round family support &amp; early detection</p>
                </Link>
                <Link
                  href="/#commitments"
                  className="block px-3 py-2 text-sm text-charcoal hover:bg-sage/40 hover:text-forest rounded-lg transition-colors"
                  onClick={() => setCommitmentsOpen(false)}
                >
                  <span className="font-medium flex items-center justify-between">
                    Conservation
                    <span className="text-[11px] text-forest bg-sage px-1.5 py-0.5 rounded">Pillar 3</span>
                  </span>
                  <p className="text-xs text-charcoal-muted mt-0.5">Soil, bioenzymes, water &amp; air stewardship</p>
                </Link>
                <div className="border-t border-forest/10 my-1"></div>
                <Link
                  href="/#projects"
                  className="block px-3 py-2 text-xs font-semibold uppercase text-forest hover:underline"
                  onClick={() => setCommitmentsOpen(false)}
                >
                  Explore All Projects →
                </Link>
              </div>
            </div>

            {/* Direct Links */}
            <Link
              href="/#projects"
              className="px-3 py-2 text-sm font-medium text-charcoal hover:text-forest transition-colors rounded-md"
            >
              Projects
            </Link>

            <Link
              href="/#events"
              className="px-3 py-2 text-sm font-medium text-charcoal hover:text-forest transition-colors rounded-md"
            >
              Events
            </Link>

            <Link
              href="/#marketplace"
              className="px-3 py-2 text-sm font-medium text-charcoal hover:text-forest transition-colors rounded-md flex items-center"
            >
              <span>Marketplace</span>
              <span className="ml-1.5 text-[10px] bg-sage px-1.5 py-0.5 rounded-full text-forest font-semibold">9 Crafts</span>
            </Link>

            <Link
              href="/#join"
              className="px-3 py-2 text-sm font-medium text-charcoal hover:text-forest transition-colors rounded-md"
            >
              Join Us
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <Link
              href="/#contact"
              className="px-3.5 py-2 text-sm font-medium text-forest hover:bg-sage/60 rounded-full transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/#donate"
              className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-full bg-forest text-ivory hover:bg-forest-light shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <Heart className="w-3.5 h-3.5 mr-1.5 fill-coral text-coral" />
              <span>Donate</span>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center space-x-2">
            <Link
              href="/#donate"
              className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-full bg-forest text-ivory sm:hidden"
            >
              <Heart className="w-3 h-3 mr-1 fill-coral text-coral" />
              <span>Donate</span>
            </Link>
            <button
              type="button"
              className="p-2 rounded-lg text-charcoal hover:text-forest hover:bg-sage/50 focus:outline-none focus:ring-2 focus:ring-forest"
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-charcoal/40 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-ivory shadow-2xl p-6 overflow-y-auto flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-forest/10">
                <span className="font-serif text-xl font-medium text-forest">The Itti Foundation</span>
                <button
                  type="button"
                  className="p-2 rounded-md text-charcoal hover:bg-sage/50"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-6 space-y-4">
                <div className="space-y-1">
                  <div className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted px-2 py-1">
                    Main Navigation
                  </div>
                  <Link
                    href="/#story"
                    className="block px-3 py-2 text-base font-medium text-charcoal hover:bg-sage/40 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Our Story &amp; Legacy
                  </Link>
                  <Link
                    href="/#commitments"
                    className="block px-3 py-2 text-base font-medium text-charcoal hover:bg-sage/40 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Our Three Commitments
                  </Link>
                  <Link
                    href="/#projects"
                    className="block px-3 py-2 text-base font-medium text-charcoal hover:bg-sage/40 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Featured Projects
                  </Link>
                  <Link
                    href="/#events"
                    className="block px-3 py-2 text-base font-medium text-charcoal hover:bg-sage/40 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Upcoming Events
                  </Link>
                  <Link
                    href="/#marketplace"
                    className="block px-3 py-2 text-base font-medium text-charcoal hover:bg-sage/40 rounded-lg flex items-center justify-between"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>Marketplace Crafts</span>
                    <span className="text-xs bg-sage text-forest font-semibold px-2 py-0.5 rounded-full">9 items</span>
                  </Link>
                  <Link
                    href="/#join"
                    className="block px-3 py-2 text-base font-medium text-charcoal hover:bg-sage/40 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Join Us &amp; Volunteer
                  </Link>
                  <Link
                    href="/policies"
                    className="block px-3 py-2 text-base font-medium text-charcoal hover:bg-sage/40 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Policies &amp; Transparency
                  </Link>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-forest/10 space-y-3">
              <Link
                href="/#donate"
                className="w-full flex items-center justify-center px-4 py-3 text-base font-medium rounded-full bg-forest text-ivory hover:bg-forest-light shadow"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Heart className="w-4 h-4 mr-2 fill-coral text-coral" />
                Support &amp; Donate
              </Link>
              <div className="text-center">
                <a
                  href="mailto:hello@itti.org.in"
                  className="text-xs text-charcoal-muted hover:text-forest"
                >
                  hello@itti.org.in · +91 89282 63631
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
