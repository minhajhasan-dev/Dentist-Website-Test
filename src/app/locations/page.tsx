import { Metadata } from 'next'
import { locations } from '@/lib/data/locations'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Script from 'next/script'
import { jsonLdBreadcrumb, jsonLdLocalBusiness } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Locations',
  description: 'Find our dental clinic, view hours, and parking information.'
}

export default function LocationsPage() {
  const breadcrumb = jsonLdBreadcrumb([
    { name: 'Home', item: '/' },
    { name: 'Locations', item: '/locations' },
  ])
  return (
    <div className="container-px mx-auto py-12">
      <h1 className="mb-6 text-3xl font-bold">Our Location</h1>
      <div className="grid gap-6 lg:grid-cols-2">
        {locations.map((loc) => (
          <Card key={loc.id}>
            <CardHeader>
              <CardTitle>{loc.name}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="relative aspect-[16/9] overflow-hidden rounded-md border">
                <img src={loc.image.url} alt={loc.image.alt} className="h-full w-full object-cover" />
              </div>
              <div className="text-sm">
                <p>
                  {loc.address.street}, {loc.address.city}, {loc.address.state} {loc.address.postalCode}
                </p>
                <p>
                  Phone: <a className="text-primary" href={`tel:${loc.phone}`}>{loc.phone}</a> · Email: <a className="text-primary" href={`mailto:${loc.email}`}>{loc.email}</a>
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-medium">Hours</h3>
                <ul className="grid grid-cols-2 gap-x-6 text-sm md:grid-cols-3">
                  {loc.hours.map((h) => (
                    <li key={h.day} className="flex justify-between">
                      <span className="text-muted-foreground">{h.day}</span>
                      <span>{h.opens && h.closes ? `${h.opens} – ${h.closes}` : 'Closed'}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-2 font-medium">Parking</h3>
                <p className="text-sm text-muted-foreground">{loc.parking}</p>
              </div>
              <div>
                <h3 className="mb-2 font-medium">Directions</h3>
                <p className="text-sm text-muted-foreground">{loc.directions}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Script id="jsonld-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {locations.map((loc) => {
        const ld = jsonLdLocalBusiness(loc.id)
        return ld ? (
          <Script key={loc.id} id={`jsonld-localbusiness-${loc.id}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        ) : null
      })}
    </div>
  )
}
