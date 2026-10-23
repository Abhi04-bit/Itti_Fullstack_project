import { MetadataRoute } from 'next';
import {
  VERIFIED_COMMITMENTS,
  VERIFIED_PROJECTS,
  VERIFIED_EVENTS,
  VERIFIED_PRODUCTS,
} from '@/lib/verified-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://itti.org.in';
  const currentDate = new Date().toISOString();

  // Core public routes
  const staticRoutes = [
    '',
    '/our-story',
    '/our-story/mission',
    '/our-story/legacy',
    '/our-story/founder',
    '/our-story/team',
    '/our-story/constitution',
    '/our-story/transparency',
    '/commitments',
    '/projects',
    '/projects/past-work',
    '/projects/partners',
    '/marketplace',
    '/events',
    '/newsroom',
    '/donate',
    '/volunteer',
    '/join',
    '/contact',
    '/policies',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic commitment routes
  const commitmentRoutes = VERIFIED_COMMITMENTS.map((c) => ({
    url: `${baseUrl}/commitments/${c.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Dynamic project routes
  const projectRoutes = VERIFIED_PROJECTS.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic event routes
  const eventRoutes = VERIFIED_EVENTS.map((e) => ({
    url: `${baseUrl}/events/${e.id}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Dynamic marketplace routes
  const marketplaceRoutes = VERIFIED_PRODUCTS.map((prod) => ({
    url: `${baseUrl}/marketplace/${prod.id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...commitmentRoutes,
    ...projectRoutes,
    ...eventRoutes,
    ...marketplaceRoutes,
  ];
}
