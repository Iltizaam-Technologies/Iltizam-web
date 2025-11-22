import { Mail, Phone, MapPin } from "lucide-react"

export function ContactInfo() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Contact Information</h2>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a
                    href="mailto:support@iltizam.ai"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    support@iltizam.ai
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-foreground/70">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Office Address</h3>
                  <p className="text-foreground/70">
                    123 Innovation Street
                    <br />
                    San Francisco, CA 94105
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Placeholder Illustration */}
          <div className="flex items-center justify-center">
            <div className="w-full aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-border flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary/30 mx-auto mb-4" />
                <p className="text-foreground/50 font-medium">Map & Illustration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
