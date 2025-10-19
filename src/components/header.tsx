"use client"

import Link from 'next/link'
import { Menu, Smile } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import type { Route } from 'next'
import { useEffect, useState } from 'react'
import { ShimmerButton } from '@/components/magic-ui/ShimmerButton'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-4 z-40 w-full transition-all duration-300',
        scrolled ? 'top-0' : 'top-4'
      )}
    >
      <div
        className={cn(
          'mx-auto max-w-7xl rounded-full border px-4 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60',
          scrolled ? 'bg-background/80' : 'bg-background/50'
        )}
      >
        <div className="container-px mx-auto flex h-14 items-center justify-between">
          <div className="flex items-center gap-2">
            <Smile className="h-6 w-6 text-primary" aria-hidden="true" />
            <Link href="/" className="font-semibold">Dentist</Link>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    {item.href.startsWith('/') ? (
                      <Link href={item.href as Route} legacyBehavior passHref>
                        <NavigationMenuLink className={cn('underline-anim px-4 py-2 text-sm font-medium hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md')}>{item.label}</NavigationMenuLink>
                      </Link>
                    ) : (
                      <a href={item.href} className={cn('underline-anim px-4 py-2 text-sm font-medium hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md')}>{item.label}</a>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <ShimmerButton className="rounded-full">Book now</ShimmerButton>
          </div>
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button aria-label="Open menu" variant="outline" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col gap-4">
        <nav className="mt-8 grid gap-2">
          {navItems.map((item) => (
            item.href.startsWith('/') ? (
              <Link key={item.href} href={item.href as Route} className="rounded-md px-3 py-2 text-base hover:bg-accent hover:text-accent-foreground">
                {item.label}
              </Link>
            ) : (
              <a key={item.href} href={item.href} className="rounded-md px-3 py-2 text-base hover:bg-accent hover:text-accent-foreground">
                {item.label}
              </a>
            )
          ))}
        </nav>
        <ShimmerButton className="rounded-full">Book now</ShimmerButton>
      </SheetContent>
    </Sheet>
  )
}
