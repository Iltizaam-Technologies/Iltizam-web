
import { CTA } from "../../components/cta"
import { Features } from "../../components/features"
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { Hero } from "../../components/hero"
import { Testimonials } from "../../components/testimonials"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
