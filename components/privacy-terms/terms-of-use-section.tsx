import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TermsOfUseSection() {
  return (
    <section id="terms" className="mb-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground">Terms of Use</h2>
        <p className="text-muted-foreground mt-2">Last Updated: [To be determined]</p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>1. Acceptance of Terms</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            <p>
              By downloading, installing, or using the Iltizaam mobile application, you agree to be bound by these Terms
              of Use. If you do not agree with these terms, please do not use the app. These terms constitute a legally
              binding agreement between you and Iltizaam.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>2. Description of Service</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed space-y-4">
            <p>Iltizaam provides the following features:</p>
            <ul className="space-y-2 ml-4 list-disc">
              <li>AI-powered accountability coaching and personalized recommendations</li>
              <li>Goal tracking and progress monitoring</li>
              <li>Journaling and reflection tools</li>
              <li>Community posts and comments for peer support</li>
              <li>Subscription-based premium features (reminders, advanced analytics, etc.)</li>
            </ul>
            <div className="bg-accent/10 border border-accent rounded-lg p-4 mt-4">
              <p className="font-semibold text-foreground">Important Disclaimer:</p>
              <p className="mt-2">
                Iltizaam is designed as a productivity and accountability tool. It does not provide medical,
                psychological, therapeutic, or legal advice. If you are experiencing mental health concerns, please
                consult a licensed professional.
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
              To use Iltizaam, you must create an account with accurate and complete information. You are responsible
              for maintaining the confidentiality of your account credentials and for all activities that occur under
              your account. You must notify us immediately of any unauthorized use of your account.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>4. User Responsibilities</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            <p className="mb-3">You agree not to:</p>
            <ul className="space-y-2 ml-4 list-disc">
              <li>Use the app for any illegal or unauthorized purpose</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Post false, misleading, or offensive content</li>
              <li>Attempt to hack, reverse engineer, or compromise the app's security</li>
              <li>Spam, advertise, or solicit other users without permission</li>
              <li>Violate any applicable laws, regulations, or third-party rights</li>
              <li>Share your account credentials with others</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>5. Community Guidelines</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            <p className="mb-3">When participating in community features (posts, comments), you must:</p>
            <ul className="space-y-2 ml-4 list-disc">
              <li>Be respectful and supportive of other users</li>
              <li>Avoid hate speech, harassment, or discriminatory language</li>
              <li>Refrain from posting spam, advertisements, or irrelevant content</li>
              <li>Report inappropriate content or behavior to our moderation team</li>
            </ul>
            <p className="mt-4">
              Violations of these guidelines may result in content removal, account suspension, or permanent ban at our
              discretion.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>6. Payments & Subscriptions</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Payment Processing</h4>
              <p>
                All payments are processed securely through Stripe. By subscribing to premium features, you authorize
                Iltizaam to charge your payment method on a recurring basis until you cancel.
              </p>
            </div>

            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-2">Refund Policy</h4>
              <ul className="space-y-2 ml-4 list-disc">
                <li>
                  <strong className="text-foreground">First-Time Users:</strong> You may request a refund within 7-14
                  days of your initial subscription purchase if you are unsatisfied with the service.
                </li>
                <li>
                  <strong className="text-foreground">Billing Errors:</strong> If you are charged incorrectly due to a
                  technical issue, we will issue a full refund.
                </li>
                <li>
                  <strong className="text-foreground">Technical Issues:</strong> If the app is unavailable or
                  non-functional for an extended period, you may request a prorated refund.
                </li>
                <li>
                  <strong className="text-foreground">No Refunds After Trial Usage:</strong> Once you have actively used
                  premium features beyond the trial period, refunds will not be issued for partial subscription periods.
                </li>
              </ul>
              <p className="mt-3">
                To request a refund, contact us at{" "}
                <strong className="text-foreground">iltizaamcompany@gmail.com</strong> with your account details and
                reason for the refund.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Cancellation</h4>
              <p>
                You may cancel your subscription at any time through your account settings or by contacting support.
                Cancellations take effect at the end of the current billing cycle. You will retain access to premium
                features until the subscription expires.
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
              All content, features, functionality, and materials within Iltizaam, including but not limited to text,
              graphics, logos, software, and AI-generated recommendations, are the property of Iltizaam or its licensors
              and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify,
              distribute, or create derivative works without our express written permission.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>8. User-Generated Content</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            <p>
              You retain ownership of all content you create within Iltizaam (journals, posts, comments, reflections).
              However, by using the app, you grant Iltizaam a non-exclusive, worldwide, royalty-free license to use,
              store, process, and display your content solely for the purpose of providing and improving the service. We
              will not share your private content publicly without your consent.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>9. Account Termination</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            <p>
              We reserve the right to suspend or terminate your account at any time for violations of these Terms of
              Use, fraudulent activity, or behavior that harms other users or the integrity of the platform. You may
              also delete your account at any time through the app settings. Upon termination, your access to premium
              features will cease immediately.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>10. Limitation of Liability</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            <p className="mb-3">
              Iltizaam is provided on an "as is" and "as available" basis without warranties of any kind, either express
              or implied. We do not guarantee that the app will be error-free, secure, or uninterrupted.
            </p>
            <p>
              To the fullest extent permitted by law, Iltizaam and its affiliates shall not be liable for any indirect,
              incidental, consequential, or punitive damages arising from your use of the app, including but not limited
              to loss of data, revenue, or opportunities.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>11. Governing Law</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            <p>
              These Terms of Use are governed by and construed in accordance with the laws of Nigeria. Any disputes
              arising from these terms or your use of Iltizaam shall be resolved in the courts of Nigeria, without
              regard to conflict of law principles.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>12. Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            <p>
              If you have any questions, concerns, or requests regarding these Terms of Use or the Privacy Policy,
              please contact us:
            </p>
            <div className="mt-4 bg-accent/10 border border-accent rounded-lg p-4">
              <p className="font-semibold text-foreground">Email: iltizaamcompany@gmail.com</p>
              <p className="text-sm mt-2">Owner: Daud Moridiyah Omobola</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
