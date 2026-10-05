import Link from "next/link"
import { PrivacyPolicySection } from "../../../components/privacy-terms/privacy-policy-section"
import { PrivacyTermsFooter } from "../../../components/privacy-terms/privacy-terms-footer"
import { PrivacyTermsHeader } from "../../../components/privacy-terms/privacy-terms-header"
import { LegalHero } from "../../../components/privacy-terms/legal-hero"

export const metadata = {
  title: "Privacy Policy | ILTIZAAM",
  description:
    "Privacy Policy for the ILTIZAAM mobile app. Learn how we collect, use, and protect your data. Contact: management@iltizaam.com",
}

/** Standalone privacy URL for Google Play & App Store verification */
export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <PrivacyTermsHeader />
      <LegalHero title="Privacy Policy" subtitle="ILTIZAAM" showBadges />
      <div className="container mx-auto max-w-5xl px-4 py-12 md:py-16">
        <PrivacyPolicySection />
        <p className="text-center text-sm text-muted-foreground">
          See also our{" "}
          <Link href="/privacy-terms#terms" className="text-primary font-medium hover:underline">
            Terms of Use
          </Link>
          .
        </p>
      </div>
      <PrivacyTermsFooter />
    </main>
  )
}
