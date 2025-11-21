import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Ahmed",
    comment:
      "ILTIZAM AI transformed how I approach my goals. The accountability feature keeps me motivated every single day.",
    image: "/professional-woman-avatar.png",
  },
  {
    name: "Marcus Johnson",
    comment:
      "The AI companion feature is incredible. It understands my struggles and provides exactly the motivation I need.",
    image: "/professional-man-avatar.png",
  },
  {
    name: "Emma Williams",
    comment:
      "This app helped me achieve goals I thought were impossible. Highly recommended for anyone serious about productivity.",
    image: "/professional-woman-avatar-glasses.png",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            What Our Users Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl p-8">
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
