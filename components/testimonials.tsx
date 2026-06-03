import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Ahmed",
    comment:
      "ILTIZAAM AI transformed how I approach my goals. The accountability feature keeps me motivated every single day.",
    image: "/testimonials_portrait_1780448157418.png",
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
    <section id="testimonials" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-secondary/30">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm mb-6">
            Real Stories
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Thousands</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how ILTIZAAM AI is helping people around the world achieve their most ambitious goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative bg-background/50 backdrop-blur-xl border border-border/50 rounded-3xl p-8 hover:bg-background transition-colors duration-300 shadow-xl shadow-black/5">
              <Quote className="absolute top-6 right-8 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors duration-300" />
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-lg text-foreground mb-8 leading-relaxed italic">"{testimonial.comment}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">Pro User</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
