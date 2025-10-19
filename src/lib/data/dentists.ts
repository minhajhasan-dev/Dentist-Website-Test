import type { Dentist } from './types'

export const dentists: Dentist[] = [
  {
    id: 'emily-chen-dds',
    name: 'Emily Chen, DDS',
    title: 'General & Cosmetic Dentist',
    credentials: ['DDS, UCLA School of Dentistry', 'Member, ADA & CDA', 'Invisalign Certified Provider'],
    bio:
      'Dr. Chen is passionate about prevention‑first dentistry and patient comfort. She blends advanced technology with a gentle, communicative approach so patients understand their options and feel at ease.',
    image: {
      url: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1600&auto=format&fit=crop',
      alt: 'Smiling female dentist in clinic wearing a white coat',
    },
  },
  {
    id: 'marcus-reed-dmd',
    name: 'Marcus Reed, DMD',
    title: 'Restorative Dentist',
    credentials: ['DMD, University of Pennsylvania', 'Fellow, Academy of General Dentistry', 'Implantology Continuum Graduate'],
    bio:
      'Dr. Reed focuses on long‑lasting, functional results—whether restoring a single tooth or full‑mouth rehabilitation. He values transparency and designs treatment plans collaboratively with patients.',
    image: {
      url: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1600&auto=format&fit=crop',
      alt: 'Male dentist in operatory with equipment',
    },
  },
]
