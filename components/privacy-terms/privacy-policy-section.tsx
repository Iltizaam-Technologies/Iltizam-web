import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function PrivacyPolicySection() {
  return (
    <section id="privacy" className="mb-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">Privacy Policy</h2>
        <Card className="bg-accent/10 border-accent">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-foreground mb-1">Owner</p>
                <p className="text-muted-foreground">Daud Moridiyah Omobola</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Contact Email</p>
                <p className="text-muted-foreground">iltizaamcompany@gmail.com</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Jurisdiction</p>
                <p className="text-muted-foreground">Nigeria (with international users)</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Payment Processing</p>
                <p className="text-muted-foreground">Stripe</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Effective Date</p>
                <p className="text-muted-foreground">[To be determined]</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>1. Introduction</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            <p>
              Iltizaam is an AI-powered accountability coaching mobile application designed to help users achieve their
              personal and professional goals. We are committed to protecting your privacy and handling your data with
              transparency and care. This Privacy Policy explains how we collect, use, store, and protect your personal
              information.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>2. Information We Collect</CardTitle>
            <CardDescription>We collect information in the following ways:</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-3">A. Information You Provide</h4>
              <ul className="space-y-2 text-muted-foreground ml-4 list-disc leading-relaxed">
                <li>Name</li>
                <li>Email address</li>
                <li>Optional phone number (for WhatsApp reminders)</li>
                <li>Password (securely hashed and never stored in plain text)</li>
                <li>Optional profile photo</li>
                <li>Journals, reflections, and AI chat inputs</li>
              </ul>
            </div>

            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-3">B. Automatically Collected Information</h4>
              <ul className="space-y-2 text-muted-foreground ml-4 list-disc leading-relaxed">
                <li>Push notification tokens (for reminders)</li>
                <li>Device information (model, operating system, app version)</li>
                <li>Usage information (features accessed, session duration)</li>
              </ul>
            </div>

            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-3">C. Payment Information</h4>
              <p className="text-muted-foreground leading-relaxed">
                All payment transactions are securely processed by <strong className="text-foreground">Stripe</strong>,
                our third-party payment processor. We do not store or have access to your complete credit card details.
                Stripe handles all payment data in accordance with PCI-DSS requirements.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>3. How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground ml-4 list-disc leading-relaxed">
              <li>To create and manage your user account</li>
              <li>To provide personalized AI coaching and recommendations</li>
              <li>To send reminders and notifications (push notifications, WhatsApp messages)</li>
              <li>To process subscription payments and manage billing</li>
              <li>To improve app functionality and user experience</li>
              <li>To ensure community safety and enforce our Terms of Use</li>
              <li>To communicate updates, new features, and support responses</li>
            </ul>
            <p className="mt-4 text-foreground font-semibold">We do not sell your personal data to third parties.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>4. Sharing of Information</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed space-y-4">
            <p>We may share your information only in the following circumstances:</p>
            <ul className="space-y-2 ml-4 list-disc">
              <li>
                <strong className="text-foreground">Service Providers:</strong> We work with trusted third-party service
                providers for payment processing (Stripe), cloud hosting, push notifications, and WhatsApp messaging.
                These providers are contractually obligated to protect your data.
              </li>
              <li>
                <strong className="text-foreground">Legal Requirements:</strong> We may disclose information if required
                by law, court order, or governmental authority, or to protect the rights, property, or safety of
                Iltizaam, our users, or the public.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>5. Data Security</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            <p>We implement industry-standard security measures to protect your personal information, including:</p>
            <ul className="space-y-2 mt-3 ml-4 list-disc">
              <li>Encryption of data in transit and at rest</li>
              <li>Secure password hashing using modern cryptographic algorithms</li>
              <li>Regular security audits and monitoring</li>
              <li>Access controls limiting employee access to user data</li>
            </ul>
            <p className="mt-4">
              While we take reasonable precautions, no method of transmission over the internet or electronic storage is
              100% secure. We cannot guarantee absolute security.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>6. Children & Under-18 Users</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            <p>
              Iltizaam is designed for users of all ages, including those under 18. We encourage parents and guardians
              to be aware of their children's app usage. We do not knowingly collect more information from minors than
              necessary to provide the service. If you believe we have inadvertently collected inappropriate data from a
              minor, please contact us immediately.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>7. User Rights</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            <p className="mb-3">You have the following rights regarding your personal data:</p>
            <ul className="space-y-2 ml-4 list-disc">
              <li>
                <strong className="text-foreground">Access:</strong> Request a copy of your personal data
              </li>
              <li>
                <strong className="text-foreground">Edit:</strong> Update or correct your information within the app
              </li>
              <li>
                <strong className="text-foreground">Delete:</strong> Request deletion of your account and associated
                data
              </li>
              <li>
                <strong className="text-foreground">Opt-out:</strong> Unsubscribe from marketing communications or
                disable notifications
              </li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us at{" "}
              <strong className="text-foreground">iltizaamcompany@gmail.com</strong>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>8. Data Retention</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            <p>
              We retain your personal information for as long as your account is active or as necessary to provide
              services. If you delete your account, we will remove your personal data within a reasonable timeframe,
              except where retention is required for legal, security, or fraud prevention purposes.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>9. Cookies and Tracking Technologies</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            <p>
              Iltizaam uses cookies and similar technologies for authentication, session management, and to enhance your
              user experience. These cookies do not track you across other websites or apps. You can manage cookie
              preferences through your device settings, though disabling cookies may limit app functionality.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>10. Changes to This Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal
              requirements. We will notify users of significant changes via email or in-app notification. Your continued
              use of Iltizaam after changes are posted constitutes acceptance of the updated policy.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
