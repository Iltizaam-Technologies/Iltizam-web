import { BrandLogo } from "@/components/brand-logo"
import Image from "next/image"

export function AboutHero() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute top-40 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-12">
        <div className="space-y-6 max-w-4xl">
          <div className="flex justify-center mb-8">
            <div className="p-4 rounded-3xl bg-background/50 border border-border/50 backdrop-blur-xl shadow-2xl">
              <BrandLogo size={80} href={null} priority />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">ILTIZAAM AI</span>
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed">
            Your journey to discipline, focus, and personal growth starts here. We believe in empowering individuals to achieve their highest potential through intelligent technology.
          </p>
        </div>

        <div className="relative w-full max-w-5xl aspect-[21/9] rounded-3xl overflow-hidden border border-border shadow-2xl">
          <Image
            src="/about_team_1780448130466.png"
            alt="The ILTIZAAM AI Team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
