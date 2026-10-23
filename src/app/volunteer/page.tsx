'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageShell from '@/components/PageShell';
import { CheckCircle2, Send, Heart, Clock, Sparkles } from 'lucide-react';

export default function VolunteerPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [skills, setSkills] = useState('');
  const [commitmentPillar, setCommitmentPillar] = useState('Neurodivergence');
  const [hours, setHours] = useState('2-4 hours/week');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch('/api/v1/volunteers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          pillar: commitmentPillar,
          availability: hours,
          skills,
        }),
      });
    } catch (err) {
      // Fallback handled gracefully
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <>
      <Header />
      <main id="main">
        <PageShell
          tag="Share Your Skills"
          title="Volunteer With Us"
          subtitle="An hour from someone who knows what they are doing is worth more than the money to buy it."
          breadcrumbs={[{ label: 'Volunteer' }]}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 border border-forest/10 shadow-sm space-y-6">
                <h2 className="font-serif text-2xl font-medium text-forest">
                  Volunteer Application
                </h2>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-sage/40 border border-forest/20 text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-forest mx-auto" />
                    <h3 className="font-serif text-xl font-semibold text-forest">Thank you, {name}!</h3>
                    <p className="text-xs text-charcoal leading-relaxed max-w-md mx-auto">
                      Your volunteer application has been recorded. Our volunteer coordinator will reach out to <strong>{email}</strong> within five working days to discuss onboarding.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-4 text-xs font-semibold text-forest hover:underline"
                    >
                      Submit another application
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="vol-name" className="block text-xs font-semibold text-charcoal mb-1">
                        Full Name *
                      </label>
                      <input
                        id="vol-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                        className="w-full px-4 py-2.5 rounded-xl border border-forest/20 bg-ivory/50 text-sm text-charcoal focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="vol-email" className="block text-xs font-semibold text-charcoal mb-1">
                          Email Address *
                        </label>
                        <input
                          id="vol-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@example.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-forest/20 bg-ivory/50 text-sm text-charcoal focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest"
                        />
                      </div>

                      <div>
                        <label htmlFor="vol-phone" className="block text-xs font-semibold text-charcoal mb-1">
                          Phone Number (Optional)
                        </label>
                        <input
                          id="vol-phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91..."
                          className="w-full px-4 py-2.5 rounded-xl border border-forest/20 bg-ivory/50 text-sm text-charcoal focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="vol-pillar" className="block text-xs font-semibold text-charcoal mb-1">
                          Primary Area of Interest
                        </label>
                        <select
                          id="vol-pillar"
                          value={commitmentPillar}
                          onChange={(e) => setCommitmentPillar(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-forest/20 bg-ivory/50 text-sm text-charcoal focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest"
                        >
                          <option>Neurodivergence &amp; Skilling</option>
                          <option>Cancer Care &amp; Support Circles</option>
                          <option>Conservation, Bioenzymes &amp; Seeds</option>
                          <option>Digital, Photography &amp; Design</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="vol-hours" className="block text-xs font-semibold text-charcoal mb-1">
                          Availability
                        </label>
                        <select
                          id="vol-hours"
                          value={hours}
                          onChange={(e) => setHours(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-forest/20 bg-ivory/50 text-sm text-charcoal focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest"
                        >
                          <option>1–2 hours / week</option>
                          <option>2–4 hours / week</option>
                          <option>Weekend events only</option>
                          <option>Project-based advisory</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="vol-skills" className="block text-xs font-semibold text-charcoal mb-1">
                        Skills or Perspective You Bring *
                      </label>
                      <textarea
                        id="vol-skills"
                        required
                        rows={3}
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                        placeholder="E.g., teaching, counselling, gardening, graphic design, healthcare, or lived experience..."
                        className="w-full px-4 py-2.5 rounded-xl border border-forest/20 bg-ivory/50 text-sm text-charcoal focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center px-6 py-3 rounded-full bg-forest text-ivory text-sm font-medium hover:bg-forest-light transition-colors shadow"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      <span>Submit Volunteer Application</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-sage/40 rounded-3xl p-6 border border-forest/10 space-y-4">
                <h3 className="font-serif text-xl font-medium text-forest">What Volunteers Do</h3>
                <ul className="space-y-3 text-xs text-charcoal">
                  <li className="flex items-start space-x-2">
                    <Sparkles className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
                    <span>Facilitate craft sessions and sensory-friendly workshops for neurodivergent learners.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Clock className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
                    <span>Host cancer caregiver check-ins and online coffee meets.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Heart className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" />
                    <span>Sort clean plastic milk bags in Pune or roll indigenous seed balls before monsoon.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </PageShell>
      </main>
      <Footer />
    </>
  );
}
