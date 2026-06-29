import Link from "next/link"
import { BrandLogo } from "@/components/brand-logo"

export function PrivacyTermsHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md">
      <div className="container mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <BrandLogo size={32} textClassName="font-bold text-foreground" />
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-4 text-sm">
          <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
            Privacy
          </Link>
          <Link href="/privacy-terms#terms" className="text-muted-foreground hover:text-primary transition-colors">
            Terms
          </Link>
          <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
