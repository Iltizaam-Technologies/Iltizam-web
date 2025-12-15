import { PrivacyPolicySection } from "../../../components/privacy-terms/privacy-policy-section"
import { PrivacyTermsFooter } from "../../../components/privacy-terms/privacy-terms-footer"
import { PrivacyTermsHeader } from "../../../components/privacy-terms/privacy-terms-header"
import { TermsOfUseSection } from "../../../components/privacy-terms/terms-of-use-section"


export const metadata = {
  title: "Privacy Policy & Terms of Use - Iltizaam",
  description: "Privacy Policy and Terms of Use for Iltizaam – Your Accountability Coach mobile app",
}

export default function PrivacyTermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <PrivacyTermsHeader />
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <PrivacyPolicySection />
        <TermsOfUseSection />
      </div>
      <PrivacyTermsFooter />
    </main>
  )
}
