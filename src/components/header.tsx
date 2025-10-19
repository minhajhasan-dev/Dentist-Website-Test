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

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-responsive flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Smile className="h-6 w-6 text-primary" aria-hidden="true" />
          <Link href="/" className="font-semibold">Dentist</Link>
        </div>
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  {item.href.startsWith('/') ? (
                    <Link href={item.href as Route} legacyBehavior passHref>
                      <NavigationMenuLink className={cn('px-4 py-2 text-sm font-medium hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md')}>{item.label}</NavigationMenuLink>
                    </Link>
                  ) : (
                    <a href={item.href} className={cn('px-4 py-2 text-sm font-medium hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md')}>{item.label}</a>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="md:hidden">
          <MobileMenu />
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
      </SheetContent>
    </Sheet>
  )
}
