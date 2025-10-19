import type { InsurancePlan } from './types'

export const insurance: InsurancePlan[] = [
  {
    provider: 'Delta Dental',
    plans: ['PPO'],
    notes: 'We are an in‑network PPO provider. HMO plans not accepted.'
  },
  {
    provider: 'MetLife',
    plans: ['PDP Plus'],
  },
  {
    provider: 'Cigna',
    plans: ['DPPO'],
  },
  {
    provider: 'Aetna',
    plans: ['PPO'],
  },
  {
    provider: 'United Concordia',
    plans: ['PPO'],
  },
]
