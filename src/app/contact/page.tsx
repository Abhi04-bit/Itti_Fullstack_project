import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageShell from '@/components/PageShell';
import { Mail, Phone, ShieldCheck, Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us — The Itti Foundation',
  description: 'Reach The Itti Foundation in Pune. Email, telephone, and Grievance Officer details.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageShell
          tag="Direct Channels"
          title="Contact The Foundation"
          subtitle="One address, answered by people. Below is how to reach us and what to expect."
          breadcrumbs={[{ label: 'Contact' }]}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-white rounded-3xl p-8 border border-forest/10 shadow-sm space-y-6">
                <h2 className="font-serif text-2xl font-medium text-forest">Direct Enquiries</h2>
                
                <div className="space-y-4 text-sm text-charcoal">
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-forest mt-0.5" />
                    <div>
                      <span className="text-xs text-charcoal-muted block">General &amp; Partnership Inquiries</span>
                      <a href="mailto:hello@itti.org.in" className="font-medium text-forest hover:underline">
                        hello@itti.org.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-forest mt-0.5" />
                    <div>
                      <span className="text-xs text-charcoal-muted block">Working Line</span>
                      <a href="tel:+918928263631" className="font-medium text-forest hover:underline">
                        +91 89282 63631
                      </a>
                      <p className="text-xs text-charcoal-muted mt-0.5">
                        Please write if unanswered; we will call or write back promptly.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <ShieldCheck className="w-5 h-5 text-forest mt-0.5" />
                    <div>
                      <span className="text-xs text-charcoal-muted block">Grievance &amp; Data Protection Officer</span>
                      <span className="font-medium text-forest">Anuja Bali</span>
                      <p className="text-xs text-charcoal-muted mt-0.5">
                        For personal data requests or DPDP Act 2023 rights.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-sage/30 border border-forest/10 text-xs text-charcoal-muted space-y-1">
                  <span className="font-semibold text-forest block">Response Times</span>
                  <p>We respond to all email correspondence within five working days.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="bg-white rounded-3xl p-8 border border-forest/10 shadow-sm space-y-4">
                <h3 className="font-serif text-xl font-medium text-forest">Urgent Help Notice</h3>
                <p className="text-xs sm:text-sm text-charcoal leading-relaxed">
                  We are not an emergency medical service and not an acute crisis line.
                  If you or someone near you is in immediate medical danger, please contact local hospital
                  emergency services rather than waiting on email.
                </p>
                <div className="p-4 bg-coral/10 rounded-2xl text-xs text-charcoal space-y-1">
                  <span className="font-bold text-coral block">Medical Disclaimer:</span>
                  Discussions on neurodivergence or cancer care do not constitute clinical advice or establish a practitioner–patient relationship.
                </div>
              </div>
            </div>
          </div>
        </PageShell>
      </main>
      <Footer />
    </>
  );
}
