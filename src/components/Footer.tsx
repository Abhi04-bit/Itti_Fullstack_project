import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Heart, Mail, Phone, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-forest text-ivory pt-16 pb-12 border-t border-forest-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-ivory/10">
          
          {/* Column 1: Organization & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-ivory block">
              The Itti Foundation
            </span>
            <p className="text-ivory/80 text-sm max-w-sm leading-relaxed">
              Itti’s Skill School Foundation is a registered Section 8 not-for-profit company incorporated in India.
              Embracing different minds, supporting people through cancer, and protecting the world we share.
            </p>

            <div className="pt-2 text-xs text-ivory/70 space-y-1">
              <p>Founded 8 April 2023 · Pune, Maharashtra, India</p>
              <p>Data Fiduciary &amp; Grievance Officer: Anuja Bali</p>
            </div>

            <div className="pt-3 flex items-center space-x-3">
              <a
                href="https://www.instagram.com/ittifoundation/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-forest-dark flex items-center justify-center text-ivory/90 hover:text-coral hover:bg-forest-light transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/ittifoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-forest-dark flex items-center justify-center text-ivory/90 hover:text-coral hover:bg-forest-light transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@ittifoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-forest-dark flex items-center justify-center text-ivory/90 hover:text-coral hover:bg-forest-light transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Our Story! */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-sage">The Foundation</p>
            <ul className="space-y-2 text-sm text-ivory/80">
              <li>
                <Link href="/#story" className="hover:text-coral transition-colors">
                  Mission &amp; Values
                </Link>
              </li>
              <li>
                <Link href="/#legacy" className="hover:text-coral transition-colors">
                  Dr. Itti&apos;s Legacy
                </Link>
              </li>
              <li>
                <Link href="/#story" className="hover:text-coral transition-colors">
                  Founder&apos;s Journey
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-coral transition-colors">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link href="/policies" className="hover:text-coral transition-colors">
                  Transparency &amp; Governance
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Commitments & Action */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-sage">Commitments</p>
            <ul className="space-y-2 text-sm text-ivory/80">
              <li>
                <Link href="/#commitments" className="hover:text-coral transition-colors">
                  Neurodivergence
                </Link>
              </li>
              <li>
                <Link href="/#commitments" className="hover:text-coral transition-colors">
                  Cancer Care
                </Link>
              </li>
              <li>
                <Link href="/#commitments" className="hover:text-coral transition-colors">
                  Conservation
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-coral transition-colors">
                  Current Projects
                </Link>
              </li>
              <li>
                <Link href="/#events" className="hover:text-coral transition-colors">
                  Events &amp; Webinars
                </Link>
              </li>
              <li>
                <Link href="/#marketplace" className="hover:text-coral transition-colors">
                  Artisan Marketplace
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Take Part & Policies */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-sage">Take Part</p>
            <ul className="space-y-2 text-sm text-ivory/80">
              <li>
                <Link href="/#donate" className="hover:text-coral transition-colors font-medium text-ivory flex items-center">
                  <Heart className="w-3.5 h-3.5 mr-1.5 fill-coral text-coral" />
                  Make a Gift
                </Link>
              </li>
              <li>
                <Link href="/#join" className="hover:text-coral transition-colors">
                  Become a Member
                </Link>
              </li>
              <li>
                <Link href="/#join" className="hover:text-coral transition-colors">
                  Volunteer Your Time
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-coral transition-colors">
                  Partner With Us
                </Link>
              </li>
              <li className="pt-2">
                <Link href="/policies" className="hover:text-coral transition-colors text-xs text-ivory/60">
                  Privacy Policy (DPDP 2023)
                </Link>
              </li>
              <li>
                <Link href="/policies" className="hover:text-coral transition-colors text-xs text-ivory/60">
                  Terms of Use &amp; Refunds
                </Link>
              </li>
              <li>
                <Link href="/policies" className="hover:text-coral transition-colors text-xs text-ivory/60">
                  Accessibility Statement
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-ivory/60 gap-4">
          <p>© {new Date().getFullYear()} The Itti Foundation (Itti’s Skill School Foundation). All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span>Section 8 Not-for-Profit</span>
            <span>Indian Donors Only</span>
            <a href="mailto:hello@itti.org.in" className="hover:text-coral">
              hello@itti.org.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
