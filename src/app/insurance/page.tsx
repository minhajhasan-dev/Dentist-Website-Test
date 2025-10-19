import { Metadata } from 'next'
import { insurance } from '@/lib/data/insurance'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Insurance',
  description: 'Insurance plans we accept and how we help you maximize benefits.'
}

export default function InsurancePage() {
  return (
    <div className="container-px mx-auto py-12">
      <h1 className="mb-6 text-3xl font-bold">Insurance & Payments</h1>
      <p className="mb-8 max-w-2xl text-muted-foreground">
        We are in‑network with select PPO plans and will help confirm your coverage and provide clear estimates before treatment.
        Don’t see your plan? We can still see many out‑of‑network patients and file claims as a courtesy.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {insurance.map((ins) => (
          <Card key={ins.provider}>
            <CardHeader>
              <CardTitle>{ins.provider}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Plans: {ins.plans.join(', ')}</p>
              {ins.notes && <p className="mt-2 text-sm text-muted-foreground">{ins.notes}</p>}
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="mt-8 text-sm text-muted-foreground">We also accept major credit cards and offer flexible financing options.</p>
    </div>
  )
}
