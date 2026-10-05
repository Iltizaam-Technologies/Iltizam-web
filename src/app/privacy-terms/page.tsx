import { PrivacyPolicySection } from "../../../components/privacy-terms/privacy-policy-section"
import { PrivacyTermsFooter } from "../../../components/privacy-terms/privacy-terms-footer"
import { PrivacyTermsHeader } from "../../../components/privacy-terms/privacy-terms-header"
import { LegalHero } from "../../../components/privacy-terms/legal-hero"
import { TermsOfUseSection } from "../../../components/privacy-terms/terms-of-use-section"

export const metadata = {
  title: "Privacy Policy & Terms of Use | ILTIZAAM",
  description:
    "Privacy Policy and Terms of Use for ILTIZAAM, operated by Iltizaam Technologies LLC in Wyoming, United States.",
}

export default function PrivacyTermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <PrivacyTermsHeader />
      <LegalHero />
      <div className="container mx-auto max-w-5xl px-4 py-12 md:py-16">
        <PrivacyPolicySection />
        <TermsOfUseSection />
      </div>
      <PrivacyTermsFooter />
    </main>
  )
}
