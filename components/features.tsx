import { Target, Zap, Brain } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Goal Setting",
    description: "Create clear, measurable goals and break them down into actionable steps for success.",
  },
  {
    icon: Zap,
    title: "Focus Mode",
    description: "Minimize distractions and enter a state of deep focus with our powerful Focus Mode.",
  },
  {
    icon: Brain,
    title: "AI Companion",
    description: "Get personalized insights and motivation powered by advanced AI technology.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            What Makes ILTIZAM AI Special
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            Discover the features that set us apart and help you achieve your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="bg-background rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-6">
                  <Icon className="text-accent-foreground" size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
