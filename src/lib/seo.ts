import { site } from './data/site'
import { locations } from './data/locations'
import type { Service } from './data/types'

export function jsonLdOrganization() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.organization.name,
    legalName: site.organization.legalName,
    url: site.organization.url,
    logo: site.organization.logo,
    contactPoint: [{
      '@type': 'ContactPoint',
      telephone: site.organization.phone,
      contactType: 'customer service',
      email: site.organization.email,
      areaServed: 'US',
      availableLanguage: ['English'],
    }],
    sameAs: site.organization.sameAs,
  }
}

export function jsonLdLocalBusiness(locationId?: string) {
  const loc = locations.find((l) => l.id === (locationId || site.primaryLocationId))
  if (!loc) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: site.organization.name,
    image: loc.image.url,
    '@id': `${site.organization.url}/#${loc.id}`,
    url: site.organization.url,
    telephone: loc.phone,
    email: loc.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: loc.address.street,
      addressLocality: loc.address.city,
      addressRegion: loc.address.state,
      postalCode: loc.address.postalCode,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: loc.geo.lat,
      longitude: loc.geo.lng,
    },
    openingHoursSpecification: loc.hours
      .filter((h) => h.opens && h.closes)
      .map((h) => ({ '@type': 'OpeningHoursSpecification', dayOfWeek: h.day, opens: h.opens, closes: h.closes })),
    sameAs: site.organization.sameAs,
  }
}

export function jsonLdService(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.shortDescription || service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: site.organization.name,
      url: site.organization.url,
    },
    areaServed: 'US',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Dental Services',
    },
    image: [service.image.url],
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: service.pricing.min,
      highPrice: service.pricing.max,
      offerCount: 1,
      url: `${site.organization.url}/services/${service.slug}`,
    },
  }
}

export function jsonLdBreadcrumb(items: { name: string; item: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: it.name,
      item: it.item,
    })),
  }
}
