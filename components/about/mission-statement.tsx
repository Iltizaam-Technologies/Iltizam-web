import { Target } from "lucide-react"

export function MissionStatement() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Icon */}
          <div className="flex justify-center md:justify-start">
            <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
              <Target className="text-primary" size={64} />
            </div>
          </div>

          {/* Mission Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Our Mission</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              ILTIZAAM is built to help individuals stay committed to their goals, improve productivity, and develop
              strong personal discipline through AI-guided routines, emotional support, and consistent accountability.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              We believe that commitment is not just about willpower—it's about having a trusted companion that
              understands your challenges and guides you toward sustainable success.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
