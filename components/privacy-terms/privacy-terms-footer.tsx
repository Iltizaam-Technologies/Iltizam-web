import Link from "next/link"

export function PrivacyTermsFooter() {
  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="container mx-auto max-w-5xl px-4 text-center">
        <p className="text-sm text-muted-foreground mb-4">
          © {new Date().getFullYear()} Iltizaam – Your Accountability Coach
        </p>
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
          <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <span className="text-border hidden sm:inline">•</span>
          <Link href="/privacy-terms#terms" className="text-muted-foreground hover:text-primary transition-colors">
            Terms of Use
          </Link>
          <span className="text-border hidden sm:inline">•</span>
          <Link href="/delete-account" className="text-muted-foreground hover:text-primary transition-colors">
            Delete Account
          </Link>
          <span className="text-border hidden sm:inline">•</span>
          <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  )
}
