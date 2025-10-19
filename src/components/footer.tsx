import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t bg-background">
      <div className="container-responsive py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">© {year} BrightSide Dental Care. All rights reserved.</p>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="/" className="hover:text-primary">Home</Link>
            <Link href="/services" className="hover:text-primary">Services</Link>
            <Link href="/about" className="hover:text-primary">About</Link>
            <Link href="/insurance" className="hover:text-primary">Insurance</Link>
            <Link href="/locations" className="hover:text-primary">Locations</Link>
            <Link href="/testimonials" className="hover:text-primary">Testimonials</Link>
            <Link href="/contact" className="hover:text-primary">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
