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
    default: 'Dentist Website Test',
    template: '%s | Dentist Website Test',
  },
  description: 'Modern dentist website scaffolded with Next.js, Tailwind CSS, shadcn/ui, and Framer Motion.',
  keywords: ['Dentist', 'Dental Care', 'Next.js', 'Tailwind', 'shadcn', 'Framer Motion'],
  openGraph: {
    type: 'website',
    title: 'Dentist Website Test',
    description: 'Modern dentist website scaffolded with Next.js, Tailwind CSS, shadcn/ui, and Framer Motion.',
    url: '/',
    siteName: 'Dentist Website Test',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dentist Website Test',
    description: 'Modern dentist website scaffolded with Next.js, Tailwind CSS, shadcn/ui, and Framer Motion.',
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Dentist Website Test',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    logo: '/logo.png',
    sameAs: [
      'https://www.facebook.com/',
      'https://www.instagram.com/'
    ]
  }

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
        <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  )
}
