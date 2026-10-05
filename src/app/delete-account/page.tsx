import { Metadata } from "next"
import { DeleteAccountContent } from "../../../components/delete-account/delete-account-content"
import { PrivacyTermsFooter } from "../../../components/privacy-terms/privacy-terms-footer"
import { PrivacyTermsHeader } from "../../../components/privacy-terms/privacy-terms-header"
import { Trash2 } from "lucide-react"
import { LEGAL } from "../../../components/privacy-terms/legal-constants"

export const metadata: Metadata = {
  title: "Delete Your ILTIZAAM Account",
  description:
    "Learn how to permanently delete your ILTIZAAM account and understand what happens to your data after deletion.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/delete-account",
  },
}

export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-background">
      <PrivacyTermsHeader />
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-red-500/5 via-background to-primary/5">
        <div className="container relative mx-auto max-w-5xl px-4 py-14 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10">
              <Trash2 className="h-7 w-7 text-red-600 dark:text-red-400" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Delete Your ILTIZAAM Account
            </h1>
            <p className="mt-3 text-lg text-muted-foreground md:text-xl">{LEGAL.appName}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Permanent deletion · In-app · Google Play compliant
            </p>
          </div>
        </div>
      </section>
      <div className="container mx-auto max-w-5xl px-4 py-12 md:py-16">
        <DeleteAccountContent />
      </div>
      <PrivacyTermsFooter />
    </main>
  )
}
