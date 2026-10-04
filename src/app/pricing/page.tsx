import { Footer } from "../../../components/footer"
import { Header } from "../../../components/header"
import { PricingTiers } from "../../../components/pricing/pricing-tiers"

export const metadata = {
  title: "Pricing - Iltizaam Technologies LLC",
  description:
    "ILTIZAAM pricing: Free plan and $4.99 monthly Pro subscription for accountability coaching, reminders, and focus tools.",
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PricingTiers />
      <Footer />
    </main>
  )
}
