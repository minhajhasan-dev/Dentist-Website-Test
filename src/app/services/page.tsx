import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FadeInUp } from '@/components/motion/FadeInUp'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore our dental services',
}

export default function ServicesPage() {
  const services = [
    { title: 'Teeth Cleaning' },
    { title: 'Whitening' },
    { title: 'Implants' },
    { title: 'Braces' },
  ]

  return (
    <div className="container-responsive section-y">
      <h1 className="mb-6">Our Services</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {services.map((s, idx) => (
          <FadeInUp key={s.title} delay={idx * 0.05}>
            <Card>
              <CardHeader>
                <CardTitle>{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Short description about {s.title.toLowerCase()}.</p>
              </CardContent>
            </Card>
          </FadeInUp>
        ))}
      </div>
    </div>
  )
}
