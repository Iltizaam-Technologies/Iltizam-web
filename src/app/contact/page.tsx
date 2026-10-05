import { ContactCTA } from "../../../components/contact/contact-cta"
import { ContactForm } from "../../../components/contact/contact-form"
import { ContactHero } from "../../../components/contact/contact-hero"
import { ContactInfo } from "../../../components/contact/contact-info"
import { FAQ } from "../../../components/contact/faq"
import { Footer } from "../../../components/footer"
import { Header } from "../../../components/header"


export const metadata = {
  title: "Contact ILTIZAAM",
  description: "Get in touch with ILTIZAAM. We're here to answer your questions and guide your ILTIZAAM journey.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <FAQ />
      <ContactCTA />
      <Footer />
    </main>
  )
}
