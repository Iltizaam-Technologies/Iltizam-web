import { ArrowRight } from "lucide-react"

const highlightedFeatures = [
  {
    title: "Your AI Companion that Understands You",
    description:
      "Get personalized guidance from an AI that learns your patterns, goals, and challenges. Your ILTIZAM AI companion provides contextual motivation and strategies tailored specifically to your needs.",
    image: "/ai-companion-interface-dashboard.jpg",
    order: "normal",
  },
  {
    title: "Stay Focused with Distraction Blocking",
    description:
      "Eliminate app distractions during focus sessions. ILTIZAM AI helps you maintain deep work by blocking notifications and apps that interrupt productivity. Reclaim hours of focused time each week.",
    image: "/focus-mode-app-blocking-interface.jpg",
    order: "reverse",
  },
  {
    title: "Visual Reports to Track Your Growth",
    description:
      "See your progress at a glance with beautiful, comprehensive dashboards. Track goal completion, mood trends, and financial progress with intuitive charts and visualizations.",
    image: "/analytics-dashboard.png",
    order: "normal",
  },
]

export function HighlightedFeatures() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-20">
        {highlightedFeatures.map((feature, index) => (
          <div
            key={index}
            className={`grid lg:grid-cols-2 gap-12 items-center ${
              feature.order === "reverse" ? "lg:auto-cols-max" : ""
            }`}
          >
            {/* Content */}
            <div className={`space-y-6 ${feature.order === "reverse" ? "lg:order-last" : ""}`}>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground text-balance">{feature.title}</h3>
              <p className="text-lg text-foreground/70 leading-relaxed">{feature.description}</p>
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                Learn More
                <ArrowRight size={20} />
              </button>
            </div>

            {/* Image */}
            <div className={`flex justify-center ${feature.order === "reverse" ? "lg:order-first" : ""}`}>
              <div className="w-full max-w-sm aspect-square bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl overflow-hidden flex items-center justify-center">
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
