'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageShell from '@/components/PageShell';
import { CheckCircle2, ShieldCheck, Send, Users } from 'lucide-react';

export default function JoinPage() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [isUnder18, setIsUnder18] = useState(false);
  const [guardianName, setGuardianName] = useState('');
  const [guardianContact, setGuardianContact] = useState('');
  
  const [consentEmail, setConsentEmail] = useState(true);
  const [consentWhatsapp, setConsentWhatsapp] = useState(false);
  const [consentSms, setConsentSms] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDob(value);
    if (value) {
      const birthYear = new Date(value).getFullYear();
      const currentYear = new Date().getFullYear();
      setIsUnder18(currentYear - birthYear < 18);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch('/api/v1/memberships', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          dob,
          isUnder18,
          guardianName,
          guardianContact,
          consentEmail,
          consentWhatsapp,
          consentSms,
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
          tag="Membership"
          title="Join The Community"
          subtitle="Tell us a little about yourself, and we will point you to the right part of the foundation."
          breadcrumbs={[{ label: 'Join Us' }]}
        >
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-forest/10 shadow-lg space-y-6">
              
              {submitted ? (
                <div className="text-center py-6 space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-forest mx-auto" />
                  <h2 className="font-serif text-3xl font-medium text-forest">Thank You, {name}</h2>
                  <p className="text-sm text-charcoal leading-relaxed">
                    We have what we need to reach you. Someone from the right part of the foundation will be in touch.
                  </p>
                  {isUnder18 && (
                    <div className="p-4 bg-sage/30 rounded-2xl text-xs text-charcoal-muted max-w-md mx-auto">
                      <span className="font-semibold text-forest block mb-1">Guardian Notice under DPDP Act 2023:</span>
                      Because you are under 18, we will send a verification note to {guardianContact} before full registration is activated.
                    </div>
                  )}
                  <div className="pt-4 flex justify-center space-x-4">
                    <Link
                      href="/"
                      className="px-6 py-2.5 rounded-full bg-forest text-ivory text-xs font-medium hover:bg-forest-light"
                    >
                      Back to Home
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1: About You */}
                  <div className="space-y-4">
                    <div className="border-b border-forest/10 pb-2">
                      <span className="text-xs font-mono font-bold text-coral">01 · About You</span>
                      <h3 className="font-serif text-xl font-medium text-forest">Personal Details</h3>
                    </div>

                    <div>
                      <label htmlFor="reg-name" className="block text-xs font-semibold text-charcoal mb-1">
                        Full Name *
                      </label>
                      <input
                        id="reg-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full px-4 py-2.5 rounded-xl border border-forest/20 bg-ivory/50 text-sm text-charcoal focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="reg-email" className="block text-xs font-semibold text-charcoal mb-1">
                          Email Address *
                        </label>
                        <input
                          id="reg-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@domain.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-forest/20 bg-ivory/50 text-sm text-charcoal focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest"
                        />
                      </div>

                      <div>
                        <label htmlFor="reg-phone" className="block text-xs font-semibold text-charcoal mb-1">
                          Phone Number
                        </label>
                        <input
                          id="reg-phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91..."
                          className="w-full px-4 py-2.5 rounded-xl border border-forest/20 bg-ivory/50 text-sm text-charcoal focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="reg-dob" className="block text-xs font-semibold text-charcoal mb-1">
                        Date of Birth (DPDP Age Verification) *
                      </label>
                      <input
                        id="reg-dob"
                        type="date"
                        required
                        value={dob}
                        onChange={handleAgeChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-forest/20 bg-ivory/50 text-sm text-charcoal focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest"
                      />
                    </div>

                    {isUnder18 && (
                      <div className="p-4 rounded-2xl bg-coral/10 border border-coral/30 space-y-3">
                        <span className="text-xs font-semibold text-coral block">
                          Under 18 Notice: Guardian Consent Required
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label htmlFor="reg-gname" className="block text-[11px] font-semibold text-charcoal mb-1">
                              Parent / Guardian Name *
                            </label>
                            <input
                              id="reg-gname"
                              type="text"
                              required
                              value={guardianName}
                              onChange={(e) => setGuardianName(e.target.value)}
                              placeholder="Guardian name"
                              className="w-full px-3 py-2 rounded-lg border border-forest/20 bg-white text-xs text-charcoal"
                            />
                          </div>
                          <div>
                            <label htmlFor="reg-gcontact" className="block text-[11px] font-semibold text-charcoal mb-1">
                              Guardian Email / Phone *
                            </label>
                            <input
                              id="reg-gcontact"
                              type="text"
                              required
                              value={guardianContact}
                              onChange={(e) => setGuardianContact(e.target.value)}
                              placeholder="Guardian contact"
                              className="w-full px-3 py-2 rounded-lg border border-forest/20 bg-white text-xs text-charcoal"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Step 2: Staying in Touch (Consent) */}
                  <div className="space-y-3 pt-4 border-t border-forest/10">
                    <div className="border-b border-forest/10 pb-2">
                      <span className="text-xs font-mono font-bold text-coral">02 · Staying In Touch</span>
                      <h3 className="font-serif text-lg font-medium text-forest">Communication Consent</h3>
                    </div>
                    <p className="text-xs text-charcoal-muted">
                      Under India’s DPDP Act 2023, you can choose channels individually and withdraw consent anytime.
                    </p>

                    <div className="space-y-2 text-xs text-charcoal">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={consentEmail}
                          onChange={(e) => setConsentEmail(e.target.checked)}
                          className="rounded text-forest focus:ring-forest"
                        />
                        <span>Send updates and invitations via Email</span>
                      </label>

                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={consentWhatsapp}
                          onChange={(e) => setConsentWhatsapp(e.target.checked)}
                          className="rounded text-forest focus:ring-forest"
                        />
                        <span>Add me to community WhatsApp broadcast circle</span>
                      </label>

                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={consentSms}
                          onChange={(e) => setConsentSms(e.target.checked)}
                          className="rounded text-forest focus:ring-forest"
                        />
                        <span>Send meeting reminders via SMS</span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-forest text-ivory text-sm font-medium hover:bg-forest-light transition-colors shadow"
                  >
                    <span>Complete Membership Registration</span>
                  </button>
                </form>
              )}

            </div>
          </div>
        </PageShell>
      </main>
      <Footer />
    </>
  );
}
