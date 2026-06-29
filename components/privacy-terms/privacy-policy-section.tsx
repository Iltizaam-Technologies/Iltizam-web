import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LEGAL } from "./legal-constants"

export function PrivacyPolicySection() {
  return (
    <section id="privacy" className="scroll-mt-24 mb-20">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground">Privacy Policy</h2>
        <p className="mt-2 text-muted-foreground">
          How {LEGAL.appName} collects, uses, and protects your information.
        </p>
      </div>

      <div className="space-y-6">
        <Card className="border-primary/20 shadow-sm">
          <CardHeader>
            <CardTitle>1. Introduction</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
            <p>
              This Privacy Policy explains how <strong className="text-foreground">{LEGAL.appName}</strong> (“Iltizaam”,
              “we”, “our”, “the App”) collects, uses, and protects your personal information.
            </p>
            <p>
              By creating an account or using the App, you consent to the practices outlined below. We are committed to
              protecting your privacy and ensuring transparency about how your information is handled.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>2. Information We Collect</CardTitle>
            <CardDescription>
              We only collect information necessary for personalization, user experience, and core app functionality.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="rounded-xl bg-muted/40 p-5">
              <h4 className="font-semibold text-foreground mb-3">A. Information You Provide</h4>
              <ul className="space-y-2 text-muted-foreground ml-4 list-disc leading-relaxed">
                <li>
                  <strong className="text-foreground">Name</strong> — required for your account profile
                </li>
                <li>
                  <strong className="text-foreground">Email address</strong> — required for login and communication
                </li>
                <li>
                  <strong className="text-foreground">Phone number</strong> — optional; used for WhatsApp reminders
                </li>
                <li>
                  <strong className="text-foreground">Password</strong> — securely hashed; never stored in plain text
                </li>
                <li>
                  <strong className="text-foreground">Profile photo</strong> — optional
                </li>
                <li>
                  <strong className="text-foreground">Journal entries, reflections, chat inputs</strong> — used only to
                  personalize your accountability experience and generate AI-based coaching responses
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-muted/40 p-5">
              <h4 className="font-semibold text-foreground mb-3">B. Automatically Collected Information</h4>
              <ul className="space-y-2 text-muted-foreground ml-4 list-disc leading-relaxed">
                <li>
                  <strong className="text-foreground">Push notification token</strong> — used to send reminders and
                  updates
                </li>
                <li>
                  <strong className="text-foreground">Device information</strong> — may include device type, version,
                  and basic usage logs
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
              <h4 className="font-semibold text-foreground mb-3">C. Payment Information</h4>
              <p className="text-muted-foreground leading-relaxed">
                Payments are processed by <strong className="text-foreground">Stripe</strong>, a secure third-party
                provider. We do not store or access your full payment card details.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>3. How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-3">Your data is used to:</p>
            <ul className="space-y-2 text-muted-foreground ml-4 list-disc leading-relaxed">
              <li>Create and manage your account</li>
              <li>Send reminders, notifications, and updates</li>
              <li>Provide personalized accountability coaching</li>
              <li>Improve user experience and app functionality</li>
              <li>Process payments and subscriptions</li>
              <li>Maintain community safety (posts + comments)</li>
            </ul>
            <p className="mt-5 rounded-lg bg-accent/10 border border-accent/30 px-4 py-3 font-semibold text-foreground">
              We do NOT sell your data to third parties.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>4. Sharing Your Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
            <p>We only share data with:</p>
            <div>
              <h4 className="font-semibold text-foreground mb-2">A. Essential Service Providers</h4>
              <ul className="ml-4 list-disc space-y-1">
                <li>Stripe (payment processing)</li>
                <li>Cloud hosting providers (secure data storage)</li>
                <li>Notification services (for push reminders)</li>
              </ul>
              <p className="mt-2">All third parties follow strict data protection standards.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">B. Legal Requirements</h4>
              <p>
                We may disclose information if required by law, court order, or to protect user safety.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>5. Data Security</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            <p>
              We implement industry-standard security measures, including encryption, hashed passwords, access controls,
              and secure servers. No method of electronic transmission is 100% secure, but we take all reasonable steps
              to protect your information.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>6. Children & Under-18 Users</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            <p>
              Users under 18 may use the App with parental knowledge or consent. We do not knowingly collect extra
              information beyond what is required for functionality.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>7. User Rights</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            <p className="mb-3">You can request at any time to:</p>
            <ul className="space-y-2 ml-4 list-disc">
              <li>Access your data</li>
              <li>Update or correct your data</li>
              <li>Delete your account</li>
              <li>Request removal of journal entries or posts</li>
              <li>Opt out of notifications</li>
            </ul>
            <p className="mt-4">
              Contact:{" "}
              <a href={`mailto:${LEGAL.email}`} className="font-semibold text-primary hover:underline">
                {LEGAL.email}
              </a>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>8. Data Retention</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            <p>
              We keep your data as long as your account is active. If you delete your account, your data is permanently
              removed except where legally required.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>9. Cookies</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            <p className="mb-3">The App uses cookies and similar technologies for:</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>Authentication</li>
              <li>Session management</li>
              <li>Personalization</li>
            </ul>
            <p className="mt-3">
              You can disable cookies through your device settings, but the App may not function fully.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>10. Changes to This Policy</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            <p>
              We may update this Privacy Policy periodically. Users will be notified of major changes.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
