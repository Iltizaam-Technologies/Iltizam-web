import Link from "next/link"
import { Check } from "lucide-react"

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Start building discipline with core accountability tools.",
    features: [
      "Goal and promise tracking",
      "Daily reminders",
      "Basic progress insights",
      "Journal and habit basics",
    ],
    cta: "Get started",
    href: "/contact",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$4.99",
    period: "per month",
    description: "Monthly subscription for deeper coaching and focus support.",
    features: [
      "Everything in Free",
      "AI coach conversations",
      "Advanced progress and identity insights",
      "Focus Timer notification silence",
      "Priority WhatsApp reminder delivery",
    ],
    cta: "Subscribe to Pro",
    href: "/contact",
    highlighted: true,
  },
]

export function PricingTiers() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Pricing</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Simple plans for individuals who want to stay consistent. Start free, upgrade to Pro when
            you are ready for the full subscription experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl border p-8 bg-card ${
                tier.highlighted ? "border-primary shadow-lg" : "border-border"
              }`}
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground">{tier.name}</h2>
                <p className="mt-2 text-foreground/70">{tier.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                <span className="ml-2 text-foreground/60">{tier.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-foreground/80">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={tier.href}
                className={`inline-flex w-full items-center justify-center rounded-xl px-5 py-3 font-semibold transition-colors ${
                  tier.highlighted
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-border text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
