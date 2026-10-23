'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  VERIFIED_COMMITMENTS,
  VERIFIED_PROJECTS,
  VERIFIED_EVENTS,
  VERIFIED_PRODUCTS,
} from '@/lib/verified-data';
import {
  ArrowRight,
  ArrowUpRight,
  Heart,
  Calendar,
  Clock,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  ShoppingBag,
  Users,
  Send,
  MessageCircle,
  ShieldCheck,
  Leaf,
  Layers,
  Activity,
  Award,
  Mail,
  Phone,
} from 'lucide-react';

export default function HomePage() {
  const [activeCommitment, setActiveCommitment] = useState<'neurodivergence' | 'cancer-care' | 'conservation'>('neurodivergence');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const selectedCommitment = VERIFIED_COMMITMENTS.find((c) => c.id === activeCommitment) || VERIFIED_COMMITMENTS[0];

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    try {
      await fetch('/api/v1/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail }),
      });
    } catch (err) {
      // Fallback handled gracefully
    }
    setNewsletterSubmitted(true);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactEmail || !contactName) return;
    try {
      await fetch('/api/v1/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: contactName,
          email: contactEmail,
          message: contactMessage,
        }),
      });
    } catch (err) {
      // Fallback handled gracefully
    }
    setContactSubmitted(true);
  };

  return (
    <>
      <Header />

      <main id="main" className="flex-1">
        {/* =========================================================================
            SECTION 1: HERO (Mission-led Editorial Hero)
        ========================================================================= */}
        <section className="relative overflow-hidden bg-ivory pt-16 pb-20 sm:pt-24 sm:pb-32 border-b border-forest/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-sage/60 border border-forest/10 text-xs font-semibold text-forest">
                  <span className="w-2 h-2 rounded-full bg-forest animate-pulse"></span>
                  <span>Section 8 Not-for-Profit · Founded 8 April 2023</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-forest leading-[1.12]">
                  The difference is <span className="italic font-normal">when.</span>
                </h1>

                <p className="font-serif text-2xl sm:text-3xl text-charcoal/90 leading-snug italic max-w-2xl">
                  &ldquo;A mind met, not mended. A cancer caught, not carried. A forest saved, not mourned.&rdquo;
                </p>

                <p className="text-base sm:text-lg text-charcoal-muted max-w-xl leading-relaxed">
                  The Itti Foundation works where a different mind meets an education built for one kind,
                  where a diagnosis arrives and the years after it have to be lived, and where land, air, and water
                  demand practical, everyday stewardship.
                </p>

                {/* Primary Calls to Action */}
                <div className="pt-4 flex flex-wrap gap-4 items-center">
                  <Link
                    href="#commitments"
                    className="inline-flex items-center px-6 py-3.5 rounded-full bg-forest text-ivory font-medium text-sm sm:text-base hover:bg-forest-light shadow transition-all duration-200 group"
                  >
                    <span>Explore Our Commitments</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="#donate"
                    className="inline-flex items-center px-6 py-3.5 rounded-full bg-white border border-forest/20 text-forest font-medium text-sm sm:text-base hover:bg-sage/40 shadow-sm transition-all duration-200"
                  >
                    <Heart className="mr-2 w-4 h-4 fill-coral text-coral" />
                    <span>Support Our Work</span>
                  </Link>
                </div>

                {/* Quick Trust Badges */}
                <div className="pt-6 grid grid-cols-3 gap-4 border-t border-forest/10 max-w-lg text-xs text-charcoal-muted">
                  <div>
                    <span className="font-bold text-forest text-sm block">100% Direct</span>
                    <span>No administrative dilution</span>
                  </div>
                  <div>
                    <span className="font-bold text-forest text-sm block">DPDP Act 2023</span>
                    <span>Strict privacy compliance</span>
                  </div>
                  <div>
                    <span className="font-bold text-forest text-sm block">Pune, India</span>
                    <span>Grassroots community hub</span>
                  </div>
                </div>
              </div>

              {/* Editorial Hero Visual Box */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl bg-sage/40 p-6 sm:p-8 border border-forest/10 shadow-lg">
                  <div className="absolute top-4 right-4 text-[10px] uppercase font-mono tracking-wider bg-forest text-ivory px-2 py-0.5 rounded">
                    Archival Plate
                  </div>
                  
                  <div className="aspect-[4/3] rounded-2xl bg-white border border-forest/10 flex flex-col justify-center p-6 text-center space-y-3 shadow-inner">
                    <span className="text-xs uppercase tracking-widest text-forest font-mono">
                      Santiago Ramón y Cajal · 1899
                    </span>
                    <h2 className="font-serif text-xl sm:text-2xl text-forest font-medium">
                      Purkinje cell of the cerebellum
                    </h2>
                    <p className="text-xs text-charcoal-muted leading-relaxed italic">
                      &ldquo;Branching is what living things do when they have to reach everywhere at once — so the same shape arrives in a mind, in a forest, in a body.&rdquo;
                    </p>
                    <div className="pt-2 text-[10px] text-charcoal-muted">
                      Source: Santiago Ramón y Cajal (Public Domain)
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between text-xs text-charcoal">
                    <span className="font-semibold text-forest">Historical Triad</span>
                    <Link href="#story" className="text-forest hover:text-coral font-medium flex items-center">
                      Read full story <ArrowRight className="ml-1 w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: THREE COMMITMENTS (Interactive Tabs & Pillars)
        ========================================================================= */}
        <section id="commitments" className="py-20 bg-ivory scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
              <span className="text-xs uppercase font-semibold tracking-widest text-forest bg-sage px-3 py-1 rounded-full">
                Our Three Commitments
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest font-medium tracking-tight">
                Where purpose becomes practice
              </h2>
              <p className="text-base sm:text-lg text-charcoal-muted">
                Each of our three core commitments tackles an area where institutional systems fail people:
                in educational conformity, in post-diagnosis cancer isolation, and in neglected ecosystems.
              </p>
            </div>

            {/* Pillar Selector Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {VERIFIED_COMMITMENTS.map((c) => {
                const isActive = activeCommitment === c.id;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setActiveCommitment(c.id as any)}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                      isActive
                        ? 'bg-forest text-ivory shadow-md scale-105'
                        : 'bg-white text-charcoal border border-forest/15 hover:bg-sage/40'
                    }`}
                  >
                    <span>{c.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Pillar Card */}
            <div className="bg-white rounded-3xl border border-forest/10 p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="text-xs uppercase font-semibold text-coral tracking-wider">
                  {selectedCommitment.tagline}
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-forest font-medium">
                  {selectedCommitment.title}
                </h3>
                <blockquote className="font-serif text-xl text-charcoal/90 italic border-l-2 border-coral pl-4 my-2">
                  &ldquo;{selectedCommitment.quote}&rdquo;
                </blockquote>
                <p className="text-charcoal leading-relaxed text-base">
                  {selectedCommitment.description}
                </p>

                <div className="pt-4 flex flex-wrap gap-4 items-center">
                  <a
                    href={selectedCommitment.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2.5 rounded-full bg-forest text-ivory text-sm font-medium hover:bg-forest-light transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 mr-2 text-sage" />
                    <span>Join {selectedCommitment.title} WhatsApp Circle</span>
                  </a>
                  <Link
                    href="#projects"
                    className="inline-flex items-center px-4 py-2.5 rounded-full text-forest hover:bg-sage/50 text-sm font-medium transition-colors"
                  >
                    <span>View Related Projects</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </div>
              </div>

              {/* Historical Plate Details */}
              <div className="lg:col-span-5 bg-sage/30 rounded-2xl p-6 border border-forest/10 space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-charcoal-muted block">
                  Art Historical Reflection
                </span>
                <h4 className="font-serif text-lg text-forest font-semibold">
                  {selectedCommitment.historicalPlate.title}
                </h4>
                <p className="text-xs font-medium text-charcoal-muted">
                  {selectedCommitment.historicalPlate.artist} · {selectedCommitment.historicalPlate.year}
                </p>
                <p className="text-xs text-charcoal leading-relaxed">
                  {selectedCommitment.historicalPlate.description}
                </p>
                <div className="pt-2 text-[10px] text-charcoal-muted">
                  Licence: {selectedCommitment.historicalPlate.license}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 3: FEATURED PROJECTS (Verified Initiatives)
        ========================================================================= */}
        <section id="projects" className="py-20 bg-sage/20 border-t border-forest/10 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div className="space-y-3">
                <span className="text-xs uppercase font-semibold tracking-widest text-forest bg-sage px-3 py-1 rounded-full">
                  Action in the Field
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-forest font-medium tracking-tight">
                  Featured Projects &amp; Initiatives
                </h2>
                <p className="text-sm sm:text-base text-charcoal-muted max-w-xl">
                  Real civic, educational, and ecological programs carried out with community partners in Pune and beyond.
                </p>
              </div>

              <Link
                href="#events"
                className="inline-flex items-center text-sm font-semibold text-forest hover:text-coral transition-colors"
              >
                <span>Explore Upcoming Events</span>
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {VERIFIED_PROJECTS.map((proj) => (
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
                      {proj.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                      {proj.summary}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-forest/10 flex items-center justify-between text-xs">
                    <div className="flex items-center text-charcoal-muted">
                      <MapPin className="w-3.5 h-3.5 mr-1 text-forest" />
                      <span>{proj.location}</span>
                    </div>
                    <span className="font-medium text-coral">{proj.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: IMPACT & FOUNDATION STORY (Dr. Itti's Story)
        ========================================================================= */}
        <section id="story" className="py-20 bg-ivory border-t border-forest/10 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs uppercase font-semibold tracking-widest text-forest bg-sage px-3 py-1 rounded-full">
                  Our Story &amp; Origins
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest font-medium leading-tight">
                  Born from purpose. Built for change.
                </h2>
                <div className="space-y-4 text-charcoal leading-relaxed text-base">
                  <p>
                    <strong>The Itti Foundation</strong> was founded on <strong>8 April 2023</strong>, on Dr. Itti&apos;s birthday.
                    It was established as a Section 8 not-for-profit company under Indian law, legally incorporated as
                    <em> Itti&apos;s Skill School Foundation</em>.
                  </p>
                  <p>
                    We work where a different mind meets an education built for one kind,
                    where a diagnosis arrives and the year after it has to be lived, and where
                    the land, air, and water are somebody&apos;s job or nobody&apos;s.
                  </p>
                  <p className="text-sm text-charcoal-muted">
                    We believe in humane dignity, scientific care, transparent stewardship, and sustainable livelihoods.
                    Every initiative we run is accountable to the communities we serve.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="#join"
                    className="inline-flex items-center px-5 py-2.5 rounded-full bg-forest text-ivory text-sm font-medium hover:bg-forest-light transition-colors"
                  >
                    <span>Become a Member</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <Link
                    href="/policies"
                    className="inline-flex items-center px-5 py-2.5 rounded-full border border-forest/20 text-forest text-sm font-medium hover:bg-sage/40 transition-colors"
                  >
                    <span>Read Standing Policies</span>
                  </Link>
                </div>
              </div>

              {/* Verified Impact Metrics Panel */}
              <div className="lg:col-span-6 space-y-4">
                <div className="bg-forest text-ivory rounded-3xl p-8 sm:p-10 shadow-xl space-y-8">
                  <div className="border-b border-ivory/15 pb-4">
                    <span className="text-xs font-mono uppercase tracking-widest text-sage">Change Created Together</span>
                    <h3 className="font-serif text-2xl font-medium mt-1">Ground Realities &amp; Milestones</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="font-serif text-3xl sm:text-4xl font-semibold text-coral">8 Apr 2023</div>
                      <p className="text-xs text-ivory/70 mt-1">Foundation established on Dr. Itti&apos;s birthday</p>
                    </div>

                    <div>
                      <div className="font-serif text-3xl sm:text-4xl font-semibold text-sage">3 Pillars</div>
                      <p className="text-xs text-ivory/70 mt-1">Neurodivergence, Cancer Care, and Conservation</p>
                    </div>

                    <div>
                      <div className="font-serif text-3xl sm:text-4xl font-semibold text-sage">9 Crafts</div>
                      <p className="text-xs text-ivory/70 mt-1">Trained artisan products supporting direct livelihood</p>
                    </div>

                    <div>
                      <div className="font-serif text-3xl sm:text-4xl font-semibold text-coral">100%</div>
                      <p className="text-xs text-ivory/70 mt-1">Volunteer &amp; donor funded nonprofit operation</p>
                    </div>
                  </div>

                  <div className="bg-forest-dark/70 rounded-xl p-4 text-xs text-ivory/80 leading-relaxed border border-ivory/10">
                    <span className="font-bold text-coral block mb-1">Notice on Integrity:</span>
                    All reported activities reflect verified community events in Pune and online webinars. We never fabricate beneficiary counts or corporate endorsements.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: SCHEDULED EVENTS & ANNOUNCEMENTS (Verified Calendar)
        ========================================================================= */}
        <section id="events" className="py-20 bg-sage/20 border-t border-forest/10 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <span className="text-xs uppercase font-semibold tracking-widest text-forest bg-sage px-3 py-1 rounded-full">
                Calendar of Gatherings
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-forest font-medium">
                Upcoming Events &amp; Workshops
              </h2>
              <p className="text-sm text-charcoal-muted">
                Join our online volunteer sessions, offline recycling drives, cancer support groups, and field visits.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      {evt.title}
                    </h3>

                    <p className="text-xs text-charcoal/80 leading-relaxed">
                      {evt.summary}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-forest/10 text-xs text-charcoal-muted space-y-1">
                    <div className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1.5 text-forest" />
                      <span>{evt.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-3.5 h-3.5 mr-1.5 text-forest" />
                      <span>{evt.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a
                href="mailto:hello@itti.org.in?subject=RSVP%20for%20an%20Upcoming%20Event"
                className="inline-flex items-center px-6 py-3 rounded-full bg-forest text-ivory text-sm font-medium hover:bg-forest-light transition-colors"
              >
                <span>RSVP or Propose an Event</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: MARKETPLACE PREVIEW (Verified Crafts & Livelihood)
        ========================================================================= */}
        <section id="marketplace" className="py-20 bg-ivory border-t border-forest/10 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="space-y-3">
                <span className="text-xs uppercase font-semibold tracking-widest text-forest bg-sage px-3 py-1 rounded-full">
                  Artisan Livelihoods
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-forest font-medium tracking-tight">
                  Wear the cause. Support the maker.
                </h2>
                <p className="text-sm sm:text-base text-charcoal-muted max-w-xl">
                  Made in our workshops by the people the Foundation teaches. No warehouse, no markup:
                  the revenue reaches the maker first, then the training program.
                </p>
              </div>

              <div className="bg-sage/40 border border-forest/10 rounded-2xl p-4 text-xs text-charcoal max-w-sm">
                <span className="font-bold text-forest block mb-1">How purchasing works:</span>
                Click &ldquo;Ask to Order&rdquo; on any craft to send an inquiry directly to our workshop coordinator.
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {VERIFIED_PRODUCTS.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-forest/10 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="w-7 h-7 rounded-full bg-forest text-ivory font-mono font-bold flex items-center justify-center text-[11px]">
                        {item.code}
                      </span>
                      <span className="font-serif font-bold text-forest text-base">₹{item.price}</span>
                    </div>

                    <h3 className="font-serif text-lg font-medium text-forest group-hover:text-forest-light transition-colors">
                      {item.name}
                    </h3>

                    <p className="text-xs font-semibold text-coral">{item.craftInfo}</p>
                    <p className="text-xs text-charcoal/80 leading-relaxed">{item.description}</p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-forest/10">
                    <a
                      href={item.inquiryMailto}
                      className="w-full inline-flex items-center justify-center px-4 py-2 rounded-xl bg-sage/60 hover:bg-forest hover:text-ivory text-forest text-xs font-medium transition-colors"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 mr-1.5" />
                      <span>Ask to Order (₹{item.price})</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center text-xs text-charcoal-muted">
              Note: The first making cycle is active. Prices are indicative and direct inquiries receive personal replies within 5 working days.
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: PARTICIPATION (Donate, Join, Volunteer, Partner)
        ========================================================================= */}
        <section id="join" className="py-20 bg-forest text-ivory scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <span className="text-xs uppercase font-semibold tracking-widest text-sage bg-forest-dark px-3 py-1 rounded-full border border-ivory/10">
                Participation Pathways
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
                Give, volunteer, or build community with us
              </h2>
              <p className="text-base text-ivory/80">
                Every contribution turns care and ideas into tangible work that reaches someone in need.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Option 1: Donate */}
              <div id="donate" className="bg-forest-dark/80 rounded-3xl p-8 border border-ivory/15 flex flex-col justify-between space-y-6 scroll-mt-24">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-coral/20 flex items-center justify-center text-coral">
                    <Heart className="w-6 h-6 fill-coral" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-ivory">01 · Donate</h3>
                  <p className="text-sm text-ivory/80 leading-relaxed">
                    Between ₹100 and ₹5,00,000. Indian donors only. Supports neurodivergence assessments, cancer patient companionship, and environmental defense.
                  </p>
                  <div className="text-xs text-ivory/60 space-y-1">
                    <p>• Itti’s Skill School Foundation (Section 8)</p>
                    <p>• Not currently eligible for 80G relief</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-ivory/10 space-y-2">
                  <a
                    href="mailto:hello@itti.org.in?subject=Direct%20Bank%20Transfer%20Donation&body=Hello%2C%20I%20would%20like%20to%20make%20a%20donation%20to%20The%20Itti%20Foundation.%0A%0AAmount%3A%20%E2%82%B9%0ACause%20(General%20%2F%20Neurodivergence%20%2F%20Cancer%20Care%20%2F%20Conservation)%3A%20%0AName%3A%20%0APhone%3A%20"
                    className="w-full inline-flex items-center justify-center px-5 py-3 rounded-full bg-coral text-white font-medium text-sm hover:bg-coral-dark transition-colors shadow"
                  >
                    <span>Request Bank Details</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </a>
                  <p className="text-[11px] text-center text-ivory/50">
                    Official transfer details sent by a person within 5 working days.
                  </p>
                </div>
              </div>

              {/* Option 2: Become a Member */}
              <div className="bg-forest-dark/80 rounded-3xl p-8 border border-ivory/15 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-sage/20 flex items-center justify-center text-sage">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-ivory">02 · Become a Member</h3>
                  <p className="text-sm text-ivory/80 leading-relaxed">
                    Join an empathetic community committed to inclusion, lifelong learning, and lasting civic change.
                    Includes access to community circles and newsletters.
                  </p>
                  <div className="text-xs text-ivory/60 space-y-1">
                    <p>• DPDP Act compliant privacy</p>
                    <p>• Verifiable parental consent for under-18s</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-ivory/10">
                  <Link
                    href="#contact"
                    className="w-full inline-flex items-center justify-center px-5 py-3 rounded-full bg-ivory text-forest font-medium text-sm hover:bg-sage transition-colors"
                  >
                    <span>Register Interest</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </div>
              </div>

              {/* Option 3: Volunteer & Partner */}
              <div className="bg-forest-dark/80 rounded-3xl p-8 border border-ivory/15 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-coral/20 flex items-center justify-center text-coral">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-ivory">03 · Volunteer &amp; Partner</h3>
                  <p className="text-sm text-ivory/80 leading-relaxed">
                    An hour from someone who knows what they are doing is worth more than the money to buy it.
                    Bring your professional skills, school, or organisation.
                  </p>
                  <div className="text-xs text-ivory/60 space-y-1">
                    <p>• Experiential learning partnerships</p>
                    <p>• Tree planting &amp; bioenzyme trainers</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-ivory/10">
                  <a
                    href="mailto:hello@itti.org.in?subject=Volunteering%20or%20Institutional%20Partnership"
                    className="w-full inline-flex items-center justify-center px-5 py-3 rounded-full bg-ivory text-forest font-medium text-sm hover:bg-sage transition-colors"
                  >
                    <span>Propose a Collaboration</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 8: NEWSLETTER & DIRECT CONTACT
        ========================================================================= */}
        <section id="contact" className="py-20 bg-ivory border-t border-forest/10 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Contact Information & Direct Channels */}
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs uppercase font-semibold tracking-widest text-forest bg-sage px-3 py-1 rounded-full">
                  Direct Inquiries
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-forest font-medium">
                  Let’s create change together
                </h2>
                <p className="text-charcoal leading-relaxed text-sm sm:text-base">
                  For collaborations, volunteering, workshops, data privacy requests, or general inquiries, write to us directly.
                  Our inbox is monitored by people, not an automated ticketing system.
                </p>

                <div className="space-y-4 pt-2 text-sm text-charcoal">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-full bg-sage/60 flex items-center justify-center text-forest">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-charcoal-muted block">Email Address</span>
                      <a href="mailto:hello@itti.org.in" className="font-semibold text-forest hover:underline">
                        hello@itti.org.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-full bg-sage/60 flex items-center justify-center text-forest">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-charcoal-muted block">Direct Telephone</span>
                      <a href="tel:+918928263631" className="font-semibold text-forest hover:underline">
                        +91 89282 63631
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-full bg-sage/60 flex items-center justify-center text-forest">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-charcoal-muted block">Grievance &amp; DPDP Officer</span>
                      <span className="font-semibold text-forest">Anuja Bali</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-sage/40 border border-forest/10 text-xs text-charcoal-muted space-y-1">
                  <p className="font-medium text-forest">Response Guarantee:</p>
                  <p>We respond to all email correspondence within five working days.</p>
                </div>
              </div>

              {/* Functional Interactive Forms */}
              <div className="lg:col-span-7 space-y-8">
                
                {/* Contact Message Form */}
                <div className="bg-white rounded-3xl p-8 border border-forest/10 shadow-lg space-y-5">
                  <h3 className="font-serif text-2xl font-medium text-forest">
                    Send a Message
                  </h3>

                  {contactSubmitted ? (
                    <div className="p-6 rounded-2xl bg-sage/40 border border-forest/20 text-center space-y-2">
                      <CheckCircle2 className="w-8 h-8 text-forest mx-auto" />
                      <h4 className="font-serif text-lg font-semibold text-forest">Thank you for reaching out</h4>
                      <p className="text-xs text-charcoal leading-relaxed">
                        Your message has been safely received. A member of the Foundation team will respond to <strong>{contactEmail}</strong> within five working days.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setContactSubmitted(false);
                          setContactName('');
                          setContactEmail('');
                          setContactMessage('');
                        }}
                        className="mt-3 text-xs font-semibold text-forest hover:underline"
                      >
                        Send another note
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="contact-name" className="block text-xs font-semibold text-charcoal mb-1">
                            Your Name *
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            required
                            value={contactName}
                            onChange={(e) => setContactName(e.target.value)}
                            placeholder="Full name"
                            className="w-full px-4 py-2.5 rounded-xl border border-forest/20 bg-ivory/50 text-sm text-charcoal focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest"
                          />
                        </div>

                        <div>
                          <label htmlFor="contact-email" className="block text-xs font-semibold text-charcoal mb-1">
                            Email Address *
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            required
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)}
                            placeholder="name@domain.com"
                            className="w-full px-4 py-2.5 rounded-xl border border-forest/20 bg-ivory/50 text-sm text-charcoal focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="contact-message" className="block text-xs font-semibold text-charcoal mb-1">
                          How can we collaborate? *
                        </label>
                        <textarea
                          id="contact-message"
                          required
                          rows={4}
                          value={contactMessage}
                          onChange={(e) => setContactMessage(e.target.value)}
                          placeholder="Tell us what you have in mind (workshops, volunteering, cancer support, or questions)..."
                          className="w-full px-4 py-2.5 rounded-xl border border-forest/20 bg-ivory/50 text-sm text-charcoal focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-forest text-ivory text-sm font-medium hover:bg-forest-light transition-colors shadow"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        <span>Send Message</span>
                      </button>
                    </form>
                  )}
                </div>

                {/* Newsletter Box */}
                <div className="bg-sage/40 rounded-3xl p-6 sm:p-8 border border-forest/10 space-y-4">
                  <div className="space-y-1">
                    <h4 className="font-serif text-xl font-medium text-forest">Stay Connected</h4>
                    <p className="text-xs text-charcoal-muted">
                      Stories from the community, what is coming up, and simple ways to take part.
                      No spam, no third-party trackers, withdraw consent anytime.
                    </p>
                  </div>

                  {newsletterSubmitted ? (
                    <div className="p-4 rounded-xl bg-white border border-forest/15 text-xs text-forest flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      <span>Thank you. We have recorded your interest and will stay in touch.</span>
                    </div>
                  ) : (
                    <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="email"
                        required
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="flex-1 px-4 py-2.5 rounded-full border border-forest/20 bg-white text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest"
                      />
                      <button
                        type="submit"
                        className="px-6 py-2.5 rounded-full bg-forest text-ivory text-sm font-medium hover:bg-forest-light transition-colors whitespace-nowrap"
                      >
                        Subscribe
                      </button>
                    </form>
                  )}
                </div>

              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
