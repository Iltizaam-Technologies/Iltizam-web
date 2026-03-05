import { FeatureTestimonials } from "../../../components/features/feature-testimonials"
import { FeaturesCTA } from "../../../components/features/features-cta"
import { FeaturesGrid } from "../../../components/features/features-grid"
import { FeaturesHero } from "../../../components/features/features-hero"
import { HighlightedFeatures } from "../../../components/features/highlighted-features"
import { Footer } from "../../../components/footer"
import { Header } from "../../../components/header"


export const metadata = {
  title: "Features - ILTIZAAM AI",
  description:
    "Discover the powerful features of ILTIZAAM AI that help you build consistency, achieve goals, and stay emotionally balanced through smart goal setting, AI coaching, focus mode, and more.",
}

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <FeaturesHero />
      <FeaturesGrid />
      <HighlightedFeatures />
      <FeatureTestimonials />
      <FeaturesCTA />
      <Footer />
    </main>
  )
}
