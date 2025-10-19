import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { FadeInUp } from '@/components/motion/FadeInUp'
import { StaggerContainer } from '@/components/motion/StaggerContainer'
import Link from 'next/link'

export default function HomePage() {
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
              This is a scaffolded Next.js project with Tailwind CSS, shadcn/ui components, and Framer Motion animations.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <div className="flex items-center justify-center gap-3">
              <Button asChild>
                <Link href="/services">View services</Link>
              </Button>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Book appointment</Button>
                </TooltipTrigger>
                <TooltipContent>Coming soon</TooltipContent>
              </Tooltip>
            </div>
          </FadeInUp>
        </StaggerContainer>
      </section>

      <section aria-labelledby="features-title" className="container-px mx-auto grid gap-6 pb-16">
        <h2 id="features-title" className="text-2xl font-semibold">What’s included</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {['Accessible UI', 'Beautiful theme', 'Motion primitives'].map((title, i) => (
            <FadeInUp key={title} delay={0.1 * i}>
              <Card>
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>Ready-to-use building blocks</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                    <li>Shadcn UI components</li>
                    <li>Tailwind CSS tokens</li>
                    <li>Reduced-motion friendly</li>
                  </ul>
                </CardContent>
              </Card>
            </FadeInUp>
          ))}
        </div>
      </section>

      <section aria-labelledby="faq-title" className="container-px mx-auto grid gap-4 pb-16">
        <h2 id="faq-title" className="text-2xl font-semibold">FAQ</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Do you accept new patients?</AccordionTrigger>
            <AccordionContent>Yes! Contact us to schedule your first visit.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is this scaffold production-ready?</AccordionTrigger>
            <AccordionContent>
              It’s a solid starting point with strong defaults for SEO, accessibility, and performance.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section id="contact" aria-labelledby="contact-title" className="container-px mx-auto grid gap-4 pb-24">
        <h2 id="contact-title" className="text-2xl font-semibold">Contact us</h2>
        <Card>
          <CardContent className="pt-6">
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
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" name="message" rows={4} required />
              </div>
              <div>
                <Button type="submit">Send</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
