import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { locations } from '@/lib/data/locations'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact BrightSide Dental Care. No health information required—just basic contact details.'
}

export default function ContactPage() {
  const primary = locations[0]
  return (
    <div className="container-px mx-auto py-12">
      <h1 className="mb-6 text-3xl font-bold">Contact Us</h1>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Send a message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <Input id="name" name="name" autoComplete="name" required />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" name="email" type="email" autoComplete="email" required />
              </div>
              <div className="grid gap-2 sm:col-span-2">
                <label htmlFor="message" className="text-sm font-medium">Message (no health info, please)</label>
                <Textarea id="message" name="message" rows={4} placeholder="Hi! I would like to schedule a consultation..." required />
              </div>
              <div>
                <Button type="submit">Send</Button>
              </div>
            </form>
            <p className="mt-3 text-xs text-muted-foreground">Note: Please do not include personal health information in your message.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Call or visit</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-2 text-sm">
            <p>
              Phone: <a className="text-primary" href={`tel:${primary.phone}`}>{primary.phone}</a>
            </p>
            <p>
              Email: <a className="text-primary" href={`mailto:${primary.email}`}>{primary.email}</a>
            </p>
            <p>
              Address: {primary.address.street}, {primary.address.city}, {primary.address.state} {primary.address.postalCode}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
