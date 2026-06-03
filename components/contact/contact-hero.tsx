import { BrandLogo } from "@/components/brand-logo"

export function ContactHero() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <div className="flex justify-center mb-8">
          <div className="p-4 rounded-3xl bg-background/50 border border-border/50 backdrop-blur-xl shadow-2xl">
            <BrandLogo size={72} href={null} priority />
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Touch</span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          We're here to answer your questions and guide your ILTIZAAM journey. Let's start a conversation.
        </p>
      </div>
    </section>
  )
}
