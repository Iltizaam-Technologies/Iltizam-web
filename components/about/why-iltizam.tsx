import { ArrowRight } from "lucide-react"

export function WhyIltizam() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 md:mb-16 text-balance">
          Why ILTIZAM AI Exists
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Illustration */}
          <div className="flex justify-center md:justify-start">
            <div className="w-full max-w-sm aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center">
              <div className="space-y-6 p-8 w-full">
                <div className="space-y-2">
                  <div className="h-3 bg-primary/40 rounded w-full"></div>
                  <div className="h-3 bg-accent/40 rounded w-5/6"></div>
                  <div className="h-3 bg-primary/40 rounded w-4/5"></div>
                </div>
                <div className="h-32 bg-primary/20 rounded-lg"></div>
                <div className="space-y-2">
                  <div className="h-2 bg-accent/30 rounded w-full"></div>
                  <div className="h-2 bg-accent/30 rounded w-4/5"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">The Problem</h3>
              <p className="text-lg text-foreground/70 leading-relaxed">
                In today's world, distraction is everywhere. We set ambitious goals but struggle with inconsistency.
                Without accountability, even the best intentions fade. That's where ILTIZAM AI comes in.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Our Solution</h3>
              <p className="text-lg text-foreground/70 leading-relaxed">
                We provide an AI-powered companion that combines smart routines, personalized motivation, and real-time
                accountability. No judgment, just support. No excuses, just progress.
              </p>
            </div>

            <button className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2">
              Start Your Journey
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
