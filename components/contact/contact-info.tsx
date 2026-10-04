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
                  <h3 className="font-semibold text-foreground mb-1">Business Email</h3>
                  <a
                    href="mailto:management@iltizaam.com"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    management@iltizaam.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a
                    href="tel:+13072162518"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    +1 (307) 216-2518
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Business Address</h3>
                  <p className="text-foreground/70">
                    Iltizaam Technologies LLC
                    <br />
                    32 N Gould St, Sheridan, WY 82801, USA
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
                <p className="text-foreground/50 font-medium">Sheridan, Wyoming</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
