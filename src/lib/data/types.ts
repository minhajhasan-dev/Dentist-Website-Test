export type Hours = {
  day: string
  opens: string | null
  closes: string | null
}

export type Location = {
  id: string
  name: string
  address: {
    street: string
    city: string
    state: string
    postalCode: string
  }
  phone: string
  email: string
  geo: { lat: number; lng: number }
  image: { url: string; alt: string }
  parking: string
  directions: string
  hours: Hours[]
}

export type Service = {
  slug: string
  name: string
  shortDescription: string
  description: string
  pricing: { min: number; max: number; notes?: string }
  cptLikeNotes?: string
  durationMinutes?: number
  image: { url: string; alt: string }
  highlights?: string[]
}

export type Dentist = {
  id: string
  name: string
  title: string
  credentials: string[]
  bio: string
  image: { url: string; alt: string }
}

export type InsurancePlan = {
  provider: string
  plans: string[]
  notes?: string
}

export type FAQ = {
  question: string
  answer: string
}

export type Testimonial = {
  name: string
  quote: string
  location?: string
}

export type Site = {
  organization: {
    name: string
    legalName: string
    url: string
    logo: string
    phone: string
    email: string
    sameAs: string[]
  }
  primaryLocationId: string
}
