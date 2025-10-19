import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { FadeInUp } from '@/components/motion/FadeInUp'
import { StaggerContainer } from '@/components/motion/StaggerContainer'
import Link from 'next/link'
import Script from 'next/script'
import { services } from '@/lib/data/services'
import { faqs } from '@/lib/data/faqs'
import { locations } from '@/lib/data/locations'
import { jsonLdLocalBusiness } from '@/lib/seo'

export default function HomePage() {
  const featured = services.slice(0, 3)
  const primary = locations[0]
  const localBusinessLd = jsonLdLocalBusiness(primary.id)

  return (
    <div>
      <section className="container-px mx-auto grid gap-8 py-16">
        <StaggerContainer className="grid gap-6 text-center">
          <FadeInUp>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Compassionate dental care for brighter smiles
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Modern, prevention‑first dentistry in a warm, comfortable setting. From routine cleanings to smile makeovers—we’ve got you.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <div className="flex items-center justify-center gap-3">
              <Button asChild>
                <Link href="/services">View services</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Book appointment</Link>
              </Button>
            </div>
          </FadeInUp>
        </StaggerContainer>
      </section>

      <section aria-labelledby="features-title" className="container-px mx-auto grid gap-6 pb-16">
        <h2 id="features-title" className="text-2xl font-semibold">Featured services</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((s, i) => (
            <FadeInUp key={s.slug} delay={i * 0.05}>
              <Card>
                <CardHeader>
                  <CardTitle>
                    <Link href={`/services/${s.slug}`} className="hover:text-primary">{s.name}</Link>
                  </CardTitle>
                  <CardDescription>{s.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative aspect-[16/9] overflow-hidden rounded-md border">
                    <img src={s.image.url} alt={s.image.alt} className="h-full w-full object-cover" />
                  </div>
                </CardContent>
              </Card>
            </FadeInUp>
          ))}
        </div>
      </section>

      <section aria-labelledby="faq-title" className="container-px mx-auto grid gap-4 pb-16">
        <h2 id="faq-title" className="text-2xl font-semibold">FAQ</h2>
        <Accordion type="single" collapsible>
          {faqs.map((f, idx) => (
            <AccordionItem key={f.question} value={`item-${idx}`}>
              <AccordionTrigger>{f.question}</AccordionTrigger>
              <AccordionContent>{f.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section aria-labelledby="visit-title" className="container-px mx-auto grid gap-4 pb-24">
        <h2 id="visit-title" className="text-2xl font-semibold">Visit us</h2>
        <Card>
          <CardContent className="grid gap-4 pt-6 md:grid-cols-2">
            <div>
              <p className="text-sm">
                Address: {primary.address.street}, {primary.address.city}, {primary.address.state} {primary.address.postalCode}
              </p>
              <p className="text-sm">
                Phone: <a className="text-primary" href={`tel:${primary.phone}`}>{primary.phone}</a>
              </p>
              <p className="text-sm">
                Hours today: {primary.hours.find(h => h.day === new Date().toLocaleDateString('en-US', { weekday: 'long' }))?.opens ? `${primary.hours.find(h => h.day === new Date().toLocaleDateString('en-US', { weekday: 'long' }))?.opens} – ${primary.hours.find(h => h.day === new Date().toLocaleDateString('en-US', { weekday: 'long' }))?.closes}` : 'Closed'}
              </p>
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-md border">
              <img src={primary.image.url} alt={primary.image.alt} className="h-full w-full object-cover" />
            </div>
          </CardContent>
        </Card>
      </section>

      {localBusinessLd && (
        <Script id="jsonld-localbusiness-home" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }} />
      )}
    </div>
  )
}
