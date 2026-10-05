import Link from "next/link"
import {
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  Mail,
  Smartphone,
  Trash2,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LEGAL } from "../privacy-terms/legal-constants"

const DELETION_STEPS = [
  "Open the ILTIZAAM app on your device.",
  "Sign in to your account.",
  "Tap the Profile tab in the bottom navigation.",
  "Scroll to the Account section.",
  'Tap "Delete account".',
  'Review the warning, then tap "Delete permanently" to confirm.',
]

const REMOVED_DATA = [
  "User profile and account information",
  "Saved preferences and notification settings",
  "Goals, tasks, habits, and completion history",
  "Journal entries and reflections",
  "Financial goals and related data",
  "Community posts, comments, and likes",
  "In-app notifications and push notification tokens",
  "AI coaching chat history stored on our servers",
]

export function DeleteAccountContent() {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <Card className="border-primary/20 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
            <Smartphone className="h-5 w-5 text-primary shrink-0" />
            Account deletion in the app
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            <strong className="text-foreground">{LEGAL.appName}</strong> allows every user to permanently delete
            their account directly from within the mobile application — no email request required.
          </p>
          <p>
            This page explains how deletion works, what data is removed, and how to get help. It is published to
            meet{" "}
            <a
              href="https://support.google.com/googleplay/android-developer/answer/13327111"
              className="text-primary font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Play&apos;s Account Deletion policy
            </a>{" "}
            and to help users understand the process before they delete their account.
          </p>
        </CardContent>
      </Card>

      {/* How to delete */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trash2 className="h-5 w-5 text-primary shrink-0" />
            How to delete your account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="space-y-4">
            {DELETION_STEPS.map((step, index) => (
              <li key={step} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {index + 1}
                </span>
                <p className="pt-1 text-muted-foreground leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 rounded-lg bg-muted/50 px-4 py-3 text-sm text-muted-foreground">
            After confirmation, your account is deleted immediately and you are signed out on that device.
          </p>
        </CardContent>
      </Card>

      {/* What happens after */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
            What happens after deletion
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Account deletion is <strong className="text-foreground">permanent</strong> and cannot be undone. The
            following data associated with your account is removed from our servers:
          </p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {REMOVED_DATA.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 rounded-lg border border-border bg-muted/30 px-3 py-2.5 text-sm text-muted-foreground"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-5">
            <div className="flex gap-3">
              <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" />
              <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                <p className="font-semibold text-foreground">Data we may retain</p>
                <p>
                  We may retain limited information where required by applicable law or for legitimate security and
                  fraud-prevention purposes. Any retained information is stored only for the period required by law
                  or legitimate business obligations (for example, payment records processed by Stripe may be kept
                  as required for tax, accounting, or dispute resolution).
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Need help */}
      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-primary shrink-0" />
            Need help?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            If you cannot access the app or need assistance with account deletion, contact our support team. Include
            the email address associated with your account so we can verify your request.
          </p>
          <a
            href={`mailto:${LEGAL.email}?subject=Account%20Deletion%20Support`}
            className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-background px-4 py-3 font-semibold text-primary transition-colors hover:bg-primary/5"
          >
            <Mail className="h-4 w-4" />
            {LEGAL.email}
          </a>
          <p className="text-sm">
            See also our{" "}
            <Link href="/privacy-policy" className="text-primary font-medium hover:underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/privacy-terms#terms" className="text-primary font-medium hover:underline">
              Terms of Use
            </Link>
            .
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
