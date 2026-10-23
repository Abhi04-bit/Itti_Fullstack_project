import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageShellProps {
  title: string;
  subtitle?: string;
  tag?: string;
  breadcrumbs?: BreadcrumbItem[];
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}

export default function PageShell({
  title,
  subtitle,
  tag,
  breadcrumbs = [],
  children,
  sidebar,
}: PageShellProps) {
  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs text-charcoal-muted flex-wrap">
            <li>
              <Link href="/" className="hover:text-forest flex items-center">
                <Home className="w-3.5 h-3.5 mr-1" />
                <span>Home</span>
              </Link>
            </li>
            {breadcrumbs.map((crumb, idx) => (
              <li key={idx} className="flex items-center space-x-2">
                <ChevronRight className="w-3 h-3 text-forest/30" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-forest">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-forest font-medium">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Page Header */}
        <div className="border-b border-forest/10 pb-8 mb-10">
          {tag && (
            <span className="text-xs uppercase font-semibold tracking-widest text-forest bg-sage px-3 py-1 rounded-full mb-3 inline-block">
              {tag}
            </span>
          )}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest font-medium tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-base sm:text-lg text-charcoal-muted max-w-3xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Content Area with Optional Sidebar */}
        <div className={sidebar ? 'grid grid-cols-1 lg:grid-cols-12 gap-10 items-start' : ''}>
          <div className={sidebar ? 'lg:col-span-8 space-y-8' : 'space-y-8'}>
            {children}
          </div>
          {sidebar && (
            <aside className="lg:col-span-4 sticky top-24 space-y-6">
              {sidebar}
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}
