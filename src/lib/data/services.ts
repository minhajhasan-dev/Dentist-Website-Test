import type { Service } from './types'

export const services: Service[] = [
  {
    slug: 'comprehensive-exam-and-cleaning',
    name: 'Comprehensive Exam & Cleaning',
    shortDescription: 'Thorough oral exam, digital X‑rays as needed, and a gentle professional cleaning.',
    description:
      'Our comprehensive exam includes a complete evaluation of your teeth, gums, and bite. We use low‑radiation digital X‑rays when clinically indicated, then perform a gentle prophylaxis cleaning to remove plaque and tartar. You will leave with a personalized prevention plan and tips for at‑home care.',
    pricing: { min: 120, max: 220, notes: 'Pricing varies based on X‑rays and periodontal condition.' },
    cptLikeNotes: 'ADA D0150, D0274, D1110 (as applicable)',
    durationMinutes: 60,
    image: {
      url: 'https://images.unsplash.com/photo-1588771930290-6b88429b44d9?q=80&w=1600&auto=format&fit=crop',
      alt: 'Dental hygienist performing a professional tooth cleaning',
    },
    highlights: ['Digital X‑rays', 'Gum health assessment', 'Personalized prevention plan'],
  },
  {
    slug: 'teeth-whitening',
    name: 'Teeth Whitening',
    shortDescription: 'Professional in‑office whitening for a brighter smile in about an hour.',
    description:
      'Brighten your smile safely and effectively with professional whitening. We protect your gums, apply a high‑grade whitening gel, and monitor your comfort and results. Post‑care instructions and optional custom trays are available for at‑home maintenance.',
    pricing: { min: 250, max: 450, notes: 'Includes take‑home sensitivity gel and after‑care kit.' },
    cptLikeNotes: 'Cosmetic procedure; not typically covered by insurance.',
    durationMinutes: 75,
    image: {
      url: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1600&auto=format&fit=crop',
      alt: 'Patient smiling with shade guide used for teeth whitening',
    },
    highlights: ['Quick results', 'Low sensitivity approach', 'Optional take‑home trays'],
  },
  {
    slug: 'dental-implants',
    name: 'Dental Implants',
    shortDescription: 'Permanent tooth replacement for natural look, feel, and function.',
    description:
      'Dental implants replace missing teeth with titanium posts and lifelike crowns. We collaborate with top specialists when needed to ensure predictable outcomes. After a consultation and 3D imaging, we design a treatment plan tailored to your goals and budget.',
    pricing: { min: 2500, max: 4800, notes: 'Pricing depends on bone grafting, abutment, and crown type.' },
    cptLikeNotes: 'ADA D6010, D6056, D6065 (as applicable)',
    durationMinutes: 90,
    image: {
      url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1600&auto=format&fit=crop',
      alt: 'Close‑up of a dental implant model with crown and abutment',
    },
    highlights: ['3D imaging', 'Collaborative care', 'Natural‑looking crowns'],
  },
  {
    slug: 'invisalign-clear-aligners',
    name: 'Invisalign Clear Aligners',
    shortDescription: 'Discrete orthodontic treatment using removable clear aligners.',
    description:
      'Invisalign aligners gradually straighten teeth with a series of custom trays. Most patients enjoy fewer office visits, easier oral hygiene, and minimal lifestyle disruption compared to braces. We use digital scans to map your smile transformation and review expected timelines and costs up‑front.',
    pricing: { min: 3500, max: 6500, notes: 'Pricing depends on case complexity and length of treatment.' },
    cptLikeNotes: 'Orthodontic service; coverage varies by plan.',
    durationMinutes: 45,
    image: {
      url: 'https://images.unsplash.com/photo-1606813907291-76a245d9f660?q=80&w=1600&auto=format&fit=crop',
      alt: 'Transparent Invisalign aligner held by gloved hand',
    },
    highlights: ['Removable trays', 'Digital 3D planning', 'Fewer office visits'],
  },
  {
    slug: 'tooth-colored-fillings',
    name: 'Tooth‑Colored Fillings',
    shortDescription: 'Durable composite fillings that blend naturally with your smile.',
    description:
      'We restore cavities and minor fractures using high‑quality, BPA‑free composite resin. After isolating the tooth and removing decay, we sculpt and polish a filling for a natural look and comfortable bite.',
    pricing: { min: 150, max: 350, notes: 'Price varies by tooth surface and size of restoration.' },
    cptLikeNotes: 'ADA D2330–D2394 (as applicable)',
    durationMinutes: 45,
    image: {
      url: 'https://images.unsplash.com/photo-1629909613573-0da4f1a6c1e5?q=80&w=1600&auto=format&fit=crop',
      alt: 'Dentist preparing a tooth for a composite filling',
    },
    highlights: ['Shade‑matched', 'Metal‑free', 'Conservative treatment'],
  },
]
