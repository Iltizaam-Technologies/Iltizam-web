import { Target, CheckSquare, TrendingUp, MessageCircle, Zap, DollarSign } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Smart Goal Setting",
    description: "Personalized goal suggestions and guided steps to achieve your ambitions.",
  },
  {
    icon: CheckSquare,
    title: "Daily Tasks & Routine Builder",
    description: "Plan your day with clarity and structure for maximum productivity.",
  },
  {
    icon: TrendingUp,
    title: "Mood Tracking & Emotional Logs",
    description: "Track daily moods with insights and reflections for better self-awareness.",
  },
  {
    icon: MessageCircle,
    title: "AI Accountability Companion",
    description: "Chat with your AI coach for motivation and emotional support.",
  },
  {
    icon: Zap,
    title: "Focus Mode with App Blocking",
    description: "Stay in deep focus and eliminate digital distractions.",
  },
  {
    icon: DollarSign,
    title: "Financial Goal Tracking",
    description: "Set financial targets and monitor your progress toward wealth goals.",
  },
]

export function FeaturesGrid() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Complete Suite of Features
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            Everything you need to stay committed and achieve your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-background rounded-2xl p-8 hover:shadow-lg transition-shadow border border-border"
              >
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
