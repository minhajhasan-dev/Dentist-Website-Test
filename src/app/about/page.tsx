import { Metadata } from 'next'
import { dentists } from '@/lib/data/dentists'
import { locations } from '@/lib/data/locations'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FadeInUp } from '@/components/motion/FadeInUp'

export const metadata: Metadata = {
  title: 'About',
  description: 'Meet the BrightSide Dental Care team and our patient‑first philosophy.'
}

export default function AboutPage() {
  const primary = locations[0]
  return (
    <div className="container-px mx-auto py-12">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">About BrightSide Dental Care</h1>
          <p className="text-muted-foreground">
            We believe great dentistry starts with listening. Our team combines modern technology with a gentle, human approach so that every visit is comfortable, transparent, and tailored to your goals.
          </p>
          <p className="text-muted-foreground">
            From routine cleanings to smile makeovers, we deliver care based on evidence, empathy, and long‑term results.
          </p>
        </div>
        <div className="relative aspect-[16/9] overflow-hidden rounded-lg border">
          <img src={primary.image.url} alt={primary.image.alt} className="h-full w-full object-cover" />
        </div>
      </div>

      <section className="mt-12 grid gap-6">
        <h2 className="text-2xl font-semibold">Our Dentists</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {dentists.map((d) => (
            <FadeInUp key={d.id}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">{d.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{d.title}</p>
                </CardHeader>
                <CardContent className="grid gap-4 md:grid-cols-[160px_1fr]">
                  <div className="relative h-40 w-full overflow-hidden rounded-md border md:h-32">
                    <img src={d.image.url} alt={d.image.alt} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{d.bio}</p>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                      {d.credentials.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </FadeInUp>
          ))}
        </div>
      </section>
    </div>
  )
}
