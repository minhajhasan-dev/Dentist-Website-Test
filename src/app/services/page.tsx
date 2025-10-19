import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FadeInUp } from '@/components/motion/FadeInUp'
import { services } from '@/lib/data/services'
import { jsonLdBreadcrumb } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore our dental services',
}

export default function ServicesPage() {
  return (
    <div className="container-responsive section-y">
      <h1 className="mb-6">Our Services</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {services.map((s, idx) => (
          <FadeInUp key={s.slug} delay={idx * 0.05}>
            <Card>
              <CardHeader>
                <CardTitle>
                  <Link href={`/services/${s.slug}`} className="hover:text-primary">
                    {s.name}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3">
                <div className="relative aspect-[16/9] overflow-hidden rounded-md border">
                  <img src={s.image.url} alt={s.image.alt} className="h-full w-full object-cover" />
                </div>
                <p className="text-sm text-muted-foreground">{s.shortDescription}</p>
                <p className="text-sm">${'{'}s.pricing.min{'}'} – ${'{'}s.pricing.max{'}'} <span className="text-muted-foreground">USD</span></p>
              </CardContent>
            </Card>
          </FadeInUp>
        ))}
      </div>
      <Script id="jsonld-breadcrumb-services" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Home', item: '/' }, { name: 'Services', item: '/services' }])) }} />
    </div>
  )
}
