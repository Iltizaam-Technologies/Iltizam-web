import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Shield, CreditCard, Users, RefreshCw } from "lucide-react"
import { LEGAL } from "./legal-constants"

type LegalHeroProps = {
  title?: string
  subtitle?: string
  showBadges?: boolean
}

export function LegalHero({
  title = "Privacy Policy & Terms of Use",
  subtitle = LEGAL.appName,
  showBadges = true,
}: LegalHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="container relative mx-auto max-w-5xl px-4 py-14 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-4 bg-secondary text-secondary-foreground px-3 py-1 text-xs font-medium">
            Legal · App Store & Play Store ready
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">{title}</h1>
          <p className="mt-3 text-lg text-muted-foreground md:text-xl">{subtitle}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Effective {LEGAL.effectiveDate} · {LEGAL.jurisdiction}
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-card/80 p-4 backdrop-blur-sm">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Owner</p>
            <p className="mt-1 font-semibold text-foreground">{LEGAL.owner}</p>
            <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              {LEGAL.country}
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card/80 p-4 backdrop-blur-sm">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Contact</p>
            <a
              href={`mailto:${LEGAL.email}`}
              className="mt-1 flex items-center gap-1.5 font-semibold text-primary hover:underline"
            >
              <Mail className="h-4 w-4 shrink-0" />
              {LEGAL.email}
            </a>
          </div>
          <div className="rounded-xl border border-border bg-card/80 p-4 backdrop-blur-sm sm:col-span-2 lg:col-span-1">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Payments</p>
            <p className="mt-1 flex items-center gap-1.5 font-semibold text-foreground">
              <CreditCard className="h-4 w-4 shrink-0 text-primary" />
              Secured via Stripe
            </p>
          </div>
        </div>

        {showBadges && (
          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-2">
            <Badge className="gap-1.5 border border-border bg-background py-1.5">
              <Shield className="h-3.5 w-3.5" />
              Hashed passwords
            </Badge>
            <Badge className="gap-1.5 border border-border bg-background py-1.5">
              <Users className="h-3.5 w-3.5" />
              Community posts & comments
            </Badge>
            <Badge className="gap-1.5 border border-border bg-background py-1.5">
              Users under 18 allowed
            </Badge>
            <Badge className="gap-1.5 border border-border bg-background py-1.5">
              <RefreshCw className="h-3.5 w-3.5" />
              7–14 day refund (first-time)
            </Badge>
          </div>
        )}
      </div>
    </section>
  )
}
