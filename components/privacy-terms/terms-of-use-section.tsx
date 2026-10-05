import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LEGAL } from "./legal-constants"

export function TermsOfUseSection() {
  return (
    <section id="terms" className="scroll-mt-24 mb-16">
      <div className="mb-8 border-t border-border pt-16">
        <h2 className="text-3xl font-bold text-foreground">Terms of Use</h2>
        <p className="mt-2 text-muted-foreground">Effective {LEGAL.effectiveDate}</p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>1. Acceptance of Terms</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            <p>
              By signing up or using the App, you agree to these Terms of Use. If you do not agree, please discontinue
              use immediately.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>2. Description of Service</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
            <p>ILTIZAAM provides:</p>
            <ul className="ml-4 list-disc space-y-2">
              <li>Accountability tools</li>
              <li>AI-powered reminders and coaching</li>
              <li>Goal tracking</li>
              <li>Notifications</li>
              <li>Journaling</li>
              <li>A community space with posts + comments</li>
              <li>Subscription-based premium features</li>
            </ul>
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4">
              <p className="font-semibold text-foreground">Important</p>
              <p className="mt-2">
                The App does not provide medical, psychological, therapeutic, or legal advice.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>3. User Accounts</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            <p>
              You must provide accurate information and maintain the security of your account. You are responsible for
              all actions taken under your account.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>4. User Responsibilities</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            <p className="mb-3">You agree NOT to:</p>
            <ul className="ml-4 list-disc space-y-2">
              <li>Harass, bully, or abuse other users</li>
              <li>Share content that is hateful, violent, or harmful</li>
              <li>Share false information</li>
              <li>Upload copyrighted content you do not own</li>
              <li>Post sexually explicit content</li>
              <li>Attempt to hack, reverse engineer, or exploit the App</li>
            </ul>
            <p className="mt-4">Violation may result in account suspension or termination.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>5. Community Guidelines</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            <p className="mb-3">
              Our community is built around respect, discipline, and accountability. Users may post and comment but must:
            </p>
            <ul className="ml-4 list-disc space-y-2">
              <li>Maintain respectful communication</li>
              <li>Avoid offensive or harmful content</li>
              <li>Not promote spam or scams</li>
            </ul>
            <p className="mt-4">We reserve the right to remove any content violating these rules.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>6. Payments & Subscriptions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Subscriptions are processed securely via Stripe.</p>
            <div className="rounded-xl bg-muted/40 p-5">
              <h4 className="font-semibold text-foreground mb-3">Refund Policy</h4>
              <ul className="ml-4 list-disc space-y-2">
                <li>
                  First-time users may request a refund within <strong className="text-foreground">7 or 14 days</strong>{" "}
                  (depending on region).
                </li>
                <li>No refunds after using the service beyond the trial window.</li>
                <li>
                  Refunds apply only to billing errors, duplicate charges, or technical failures preventing access.
                </li>
              </ul>
              <p className="mt-4">
                Users can cancel anytime. Access continues until the end of the billing cycle.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>7. Intellectual Property</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            <p>
              All content, trademarks, and materials inside the App belong to ILTIZAAM. Users may not copy, reproduce, or
              distribute any part of the App without permission.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>8. User-Generated Content</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            <p className="mb-3">
              You retain ownership of your posts and journal entries, but you grant ILTIZAAM a license to:
            </p>
            <ul className="ml-4 list-disc space-y-1">
              <li>Display</li>
              <li>Process</li>
              <li>Personalize content</li>
              <li>Improve user experience</li>
            </ul>
            <p className="mt-4 font-medium text-foreground">We do NOT use your personal content for advertising.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>9. Termination of Account</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            <p>
              We may suspend or terminate accounts that violate the Terms of Use, Privacy Policy, or Community
              Guidelines. You may also delete your account at any time.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>10. Limitation of Liability</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            <p className="mb-3">ILTIZAAM is provided “as is.” We are not responsible for:</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>Loss of profits</li>
              <li>Emotional decisions made based on reminders</li>
              <li>Technical issues beyond our control</li>
              <li>User misunderstandings or misuse of the App</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>11. Governing Law</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            <p>
              These Terms are governed by the laws of the State of Wyoming, United States, regardless of user location.
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle>12. Contact</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            <p>For support, privacy questions, or account issues:</p>
            <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-5">
              <a href={`mailto:${LEGAL.email}`} className="text-lg font-semibold text-primary hover:underline">
                {LEGAL.email}
              </a>
              <p className="mt-2 text-sm">{LEGAL.company}</p>
              <p className="mt-1 text-sm">{LEGAL.address}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
