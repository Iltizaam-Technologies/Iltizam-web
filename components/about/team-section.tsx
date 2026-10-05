const team = [
  {
    name: "Fatima Al-Mansoori",
    role: "Head of Design",
    image: "/professional-woman-designer.png",
  },
  {
    name: "Layla Al-Mazrouei",
    role: "AI/ML Specialist",
    image: "/professional-woman-data-scientist.png",
  },
]

export function TeamSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Meet the Team</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Passionate individuals dedicated to helping you achieve your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="bg-background rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary font-semibold">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
