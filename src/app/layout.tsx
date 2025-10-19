import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import { Providers } from './providers'
import { TooltipProvider } from '@/components/ui/tooltip'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Script from 'next/script'
import type { ReactNode } from 'react'
import { site } from '@/lib/data/site'
import { jsonLdOrganization } from '@/lib/seo'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#2563eb' },
    { media: '(prefers-color-scheme: dark)', color: '#60a5fa' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: site.organization.name,
    template: `%s | ${site.organization.name}`,
  },
  description: 'Compassionate, modern dental care for brighter smiles in Springfield, CA.',
  keywords: ['Dentist', 'Dental Care', 'Cleaning', 'Whitening', 'Implants', 'Invisalign'],
  openGraph: {
    type: 'website',
    title: site.organization.name,
    description: 'Compassionate, modern dental care for brighter smiles in Springfield, CA.',
    url: '/',
    siteName: site.organization.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: site.organization.name,
    description: 'Compassionate, modern dental care for brighter smiles in Springfield, CA.',
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const orgJsonLd = jsonLdOrganization()

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${GeistSans.className} min-h-screen bg-background text-foreground`}>
        <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 bg-primary text-primary-foreground px-3 py-2 rounded-md">Skip to content</a>
        <Providers>
          <TooltipProvider delayDuration={200}>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main id="content" className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </TooltipProvider>
        </Providers>
        <Script id="jsonld-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </body>
    </html>
  )
}
