import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Aisha Patel",
    comment:
      "The focus mode completely changed my productivity. I've never been able to concentrate this deeply before. Absolutely life-changing.",
    image: "/professional-woman-diverse.png",
  },
  {
    name: "James Chen",
    comment:
      "Having an AI coach that actually understands my financial goals has been incredible. I'm tracking my savings better than ever.",
    image: "/professional-man.jpg",
  },
  {
    name: "Sofia Martinez",
    comment:
      "The mood tracking feature helped me understand my emotional patterns. Combined with the AI support, I feel so much more balanced.",
    image: "/professional-woman-smiling.png",
  },
]

export function FeatureTestimonials() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            What Early Users Are Saying
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.comment}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
