import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { FadeInUp } from '@/components/motion/FadeInUp'
import { StaggerContainer } from '@/components/motion/StaggerContainer'
import Link from 'next/link'
import { Spotlight } from '@/components/magic-ui/Spotlight'
import { GradientBlobs } from '@/components/magic-ui/GradientBlobs'
import { RevealOnView } from '@/components/magic-ui/RevealOnView'
import { ShimmerButton } from '@/components/magic-ui/ShimmerButton'
import { BentoGrid, BentoCard } from '@/components/magic-ui/BentoGrid'
import { WaveSeparator } from '@/components/magic-ui/WaveSeparator'
import { StickyCTA } from '@/components/magic-ui/StickyCTA'
import { ParallaxContainer } from '@/components/magic-ui/ParallaxContainer'
import { HoverCardLift } from '@/components/magic-ui/HoverCardLift'

export default function HomePage() {
  return (
    <div>
      {/* Hero with spotlight and blobs */}
      <section className="relative overflow-hidden pb-20 pt-28">
        <GradientBlobs />
        <Spotlight>
          <div className="container-px mx-auto grid gap-8 text-center">
            <ParallaxContainer strength={12} className="grid gap-6">
              <FadeInUp>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">Modern dental clinic</p>
              </FadeInUp>
              <FadeInUp>
                <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl">
                  Compassionate care for brighter <span className="text-gradient">smiles</span>
                </h1>
              </FadeInUp>
              <FadeInUp delay={0.1}>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  Magic UI primitives, shadcn/ui, and Tailwind theme tokens combined into a dribbble-inspired design.
                </p>
              </FadeInUp>
              <FadeInUp delay={0.2}>
                <div className="flex items-center justify-center gap-3">
                  <ShimmerButton asChild className="rounded-full px-6">
                    <Link href="/services">View services</Link>
                  </ShimmerButton>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" className="rounded-full">Book appointment</Button>
                    </TooltipTrigger>
                    <TooltipContent>Coming soon</TooltipContent>
                  </Tooltip>
                </div>
              </FadeInUp>
            </ParallaxContainer>
          </div>
        </Spotlight>
      </section>

      <WaveSeparator />

      {/* Bento grid with glassy cards */}
      <section aria-labelledby="features-title" className="container-px mx-auto grid gap-6 py-16">
        <h2 id="features-title" className="text-2xl font-semibold">What’s included</h2>
        <BentoGrid>
          <RevealOnView>
            <BentoCard span="md:col-span-2" className="flex flex-col justify-between">
              <div>
                <h3 className="mb-2 text-xl font-semibold">Glassy cards</h3>
                <p className="text-sm text-muted-foreground">Soft blur, subtle borders, and shadows.</p>
              </div>
              <div className="mt-6 h-24 rounded-lg bg-brand-gradient" />
            </BentoCard>
          </RevealOnView>
          <RevealOnView delay={0.1}>
            <HoverCardLift className="p-6">
              <h3 className="mb-2 text-xl font-semibold">Wave separators</h3>
              <p className="text-sm text-muted-foreground">Curved transitions between sections.</p>
            </HoverCardLift>
          </RevealOnView>
          <RevealOnView delay={0.15}>
            <BentoCard>
              <h3 className="mb-2 text-xl font-semibold">Spotlight gradients</h3>
              <p className="text-sm text-muted-foreground">Subtle stage-light background glow.</p>
            </BentoCard>
          </RevealOnView>
          <RevealOnView delay={0.2}>
            <BentoCard className="md:col-span-2">
              <h3 className="mb-2 text-xl font-semibold">Animated primitives</h3>
              <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>ScrollProgress</li>
                <li>RevealOnView</li>
                <li>ParallaxContainer</li>
                <li>ShimmerButton</li>
                <li>HoverCardLift</li>
              </ul>
            </BentoCard>
          </RevealOnView>
          <RevealOnView delay={0.25}>
            <BentoCard>
              <h3 className="mb-2 text-xl font-semibold">Bento layouts</h3>
              <p className="text-sm text-muted-foreground">Composable grid spans and responsive design.</p>
            </BentoCard>
          </RevealOnView>
        </BentoGrid>
      </section>

      <WaveSeparator />

      {/* FAQ */}
      <section aria-labelledby="faq-title" className="container-px mx-auto grid gap-4 py-16">
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

      {/* Contact */}
      <section id="contact" aria-labelledby="contact-title" className="container-px mx-auto grid gap-4 pb-24">
        <h2 id="contact-title" className="text-2xl font-semibold">Contact us</h2>
        <Card className="glass rounded-xl">
          <CardContent className="pt-6">
            <form className="grid gap-4 sm:grid-cols-2">
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
                <Button type="button" className="rounded-full">Send</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>

      <StickyCTA />
    </div>
  )
}
