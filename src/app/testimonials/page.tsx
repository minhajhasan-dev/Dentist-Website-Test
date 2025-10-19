import { Metadata } from 'next'
import { testimonials } from '@/lib/data/testimonials'
import { Card, CardContent } from '@/components/ui/card'
import { FadeInUp } from '@/components/motion/FadeInUp'

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'What our patients say about BrightSide Dental Care.'
}

export default function TestimonialsPage() {
  return (
    <div className="container-px mx-auto py-12">
      <h1 className="mb-6 text-3xl font-bold">Patient Stories</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <FadeInUp key={t.name} delay={i * 0.05}>
            <Card>
              <CardContent className="pt-6">
                <blockquote className="text-sm text-muted-foreground">“{t.quote}”</blockquote>
                <p className="mt-3 text-sm font-medium">— {t.name}{t.location ? `, ${t.location}` : ''}</p>
              </CardContent>
            </Card>
          </FadeInUp>
        ))}
      </div>
    </div>
  )
}
