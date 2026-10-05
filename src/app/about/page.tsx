import { AboutCTA } from "../../../components/about/about-cta"
import { AboutHero } from "../../../components/about/about-hero"
import { MissionStatement } from "../../../components/about/mission-statement"
import { TeamSection } from "../../../components/about/team-section"
import { WhyIltizam } from "../../../components/about/why-iltizam"
import { Footer } from "../../../components/footer"
import { Header } from "../../../components/header"

export const metadata = {
  title: "About ILTIZAAM",
  description:
    "Learn about ILTIZAAM, our mission to help you stay committed to your goals through discipline, focus, and personal growth.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AboutHero />
      <MissionStatement />
      <WhyIltizam />
      <TeamSection />
      <AboutCTA />
      <Footer />
    </main>
  )
}
