import type { Metadata } from 'next'
import Script from 'next/script'
import { notFound } from 'next/navigation'
import { services } from '@/lib/data/services'
import { site } from '@/lib/data/site'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { jsonLdBreadcrumb, jsonLdService } from '@/lib/seo'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) return {}
  const title = service.name
  const description = service.shortDescription
  const url = `${site.organization.url}/services/${service.slug}`
  return {
    title,
    description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title, description, url },
  }
}

export default function ServiceDetailPage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) return notFound()

  const breadcrumb = jsonLdBreadcrumb([
    { name: 'Home', item: '/' },
    { name: 'Services', item: '/services' },
    { name: service.name, item: `/services/${service.slug}` },
  ])
  const serviceLd = jsonLdService(service)

  return (
    <div className="container-px mx-auto py-12">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{service.name}</h1>
          <p className="text-muted-foreground">{service.shortDescription}</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
            {service.highlights?.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <div className="rounded-md border p-4 text-sm">
            <p>
              Pricing: ${'{'}service.pricing.min{'}'} – ${'{'}service.pricing.max{'}'} <span className="text-muted-foreground">USD</span>
            </p>
            {service.pricing.notes && (
              <p className="text-muted-foreground">{service.pricing.notes}</p>
            )}
            {service.cptLikeNotes && (
              <p className="mt-2 text-xs text-muted-foreground">Codes/notes: {service.cptLikeNotes}</p>
            )}
          </div>
        </div>
        <div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg border">
            <img src={service.image.url} alt={service.image.alt} className="h-full w-full object-cover" />
          </div>
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>What to expect</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{service.description}</p>
              {service.durationMinutes && (
                <p className="mt-3 text-sm">Typical duration: {service.durationMinutes} minutes</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      <Script id="jsonld-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Script id="jsonld-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
    </div>
  )
}
