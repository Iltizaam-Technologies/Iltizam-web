import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Your <span className="text-primary">Committed</span> Companion
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed text-balance">
                ILTIZAM AI is your personal accountability partner, designed to help you set ambitious goals and stay
                committed to achieving them.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                Get Started
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold text-lg hover:bg-primary/5 transition-colors">
                Download App
              </button>
            </div>
          </div>

          {/* Right - Phone Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl flex items-center justify-center">
                <div className="w-56 h-96 bg-primary rounded-2xl shadow-2xl flex flex-col items-center justify-center space-y-4 p-6">
                  <div className="w-32 h-32 bg-accent rounded-lg opacity-40"></div>
                  <div className="space-y-2 w-full">
                    <div className="h-2 bg-accent/40 rounded w-full"></div>
                    <div className="h-2 bg-accent/40 rounded w-5/6"></div>
                    <div className="h-2 bg-accent/40 rounded w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
