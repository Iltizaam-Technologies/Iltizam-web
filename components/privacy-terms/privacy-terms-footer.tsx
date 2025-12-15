import Link from "next/link"

export function PrivacyTermsFooter() {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <p className="text-sm text-muted-foreground mb-4">
          © {new Date().getFullYear()} Iltizaam – Your Accountability Coach
        </p>
        <nav className="flex justify-center gap-4 text-sm">
          <Link href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">
            Privacy
          </Link>
          <span className="text-border">•</span>
          <Link href="#terms" className="text-muted-foreground hover:text-primary transition-colors">
            Terms
          </Link>
          <span className="text-border">•</span>
          <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  )
}
