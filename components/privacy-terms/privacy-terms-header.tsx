import Link from "next/link"

export function PrivacyTermsHeader() {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6 max-w-5xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Iltizaam – Your Accountability Coach</h1>
          <p className="text-lg text-muted-foreground">Privacy Policy & Terms of Use</p>
        </div>

        <nav className="flex justify-center gap-6 text-sm">
          <Link href="/" className="text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="#privacy" className="text-foreground hover:text-primary transition-colors">
            Privacy
          </Link>
          <Link href="#terms" className="text-foreground hover:text-primary transition-colors">
            Terms
          </Link>
          <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
