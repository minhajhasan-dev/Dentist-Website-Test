import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t bg-background">
      <div className="container-px mx-auto py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">© {year} Dentist. All rights reserved.</p>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="/" className="hover:text-primary">Home</Link>
            <Link href="/services" className="hover:text-primary">Services</Link>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
