import { ArrowRight } from "lucide-react"

export function FeaturesCTA() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground text-balance">
          Begin Your ILTIZAAM Journey Today
        </h2>
        <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto text-balance">
          Your disciplined future starts with one step. Download ILTIZAAM and unlock your full potential.
        </p>
        <button className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2">
          Download the App
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  )
}
