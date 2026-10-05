import Image from "next/image"

export function FeaturesHero() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm font-medium text-accent backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-accent mr-2"></span>
              Next-Gen Features
            </div>
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
                Powerful Tools for a More <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Disciplined</span> You
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Discover how ILTIZAAM helps you build consistency, achieve goals, and stay emotionally balanced with our intelligent suite of tools.
              </p>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-3xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/20 aspect-square group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <Image
                src="/features_ai_1780448143478.png"
                alt="AI Technology Nodes"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}