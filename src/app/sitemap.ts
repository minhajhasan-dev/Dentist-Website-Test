import type { MetadataRoute } from 'next'
import { services } from '@/lib/data/services'

export default function sitemap(): MetadataRoute.Sitemap {
  const site = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const routes = ['', '/services', '/about', '/insurance', '/locations', '/testimonials', '/contact']
  const staticEntries = routes.map((route) => ({
    url: `${site}${route || '/'}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.7,
  }))
  const serviceEntries = services.map((s) => ({
    url: `${site}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))
  return [...staticEntries, ...serviceEntries]
}
