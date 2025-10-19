import type { Site } from './types'

export const site: Site = {
  organization: {
    name: 'BrightSide Dental Care',
    legalName: 'BrightSide Dental Care LLC',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    logo: '/logo.svg',
    phone: '+1-555-0100',
    email: 'info@brightsidedental.example',
    sameAs: [
      'https://www.facebook.com/',
      'https://www.instagram.com/',
      'https://www.yelp.com/'
    ],
  },
  primaryLocationId: 'main-office',
}
