export function FeaturesHero() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Powerful Tools for a More <span className="text-primary">Disciplined</span> You
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed text-balance">
                Discover how ILTIZAM AI helps you build consistency, achieve goals, and stay emotionally balanced.
              </p>
            </div>
          </div>

          {/* Right - Visual */}
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
