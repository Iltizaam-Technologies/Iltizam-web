import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { HOME_SCREEN_PATH } from "@/components/brand-logo"

export function Hero() {
  return (
    <section className="py-20 md:py-32 overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-50 translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] opacity-50 -translate-x-1/3 translate-y-1/3" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                Productivity Redefined
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
                Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Committed</span> <br/> Companion
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                ILTIZAAM AI is your personal accountability partner, designed to help you set ambitious goals, stay focused, and achieve greatness through intelligent habit tracking.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-primary/25 transition-all flex items-center justify-center gap-2 group">
                Get Started Free
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-secondary/50 backdrop-blur-sm border border-border text-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-secondary transition-colors">
                Watch Demo
              </button>
            </div>
            
            <div className="flex items-center gap-4 pt-4 border-t border-border/50">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center overflow-hidden">
                    <img src={`/testimonials_portrait_1780448157418.png`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-amber-500">
                  {"★".repeat(5)}
                </div>
                <span className="font-medium">Loved by 10,000+ users</span>
              </div>
            </div>
          </div>

          {/* Right - Phone Illustration */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-3xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/20 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <Image
                src={HOME_SCREEN_PATH}
                alt="ILTIZAAM app home screen"
                width={800}
                height={600}
                className="object-contain w-full h-auto group-hover:scale-[1.02] transition-transform duration-700 ease-out bg-background"
                priority
              />
            </div>
            {/* Floating Badges */}
            <div className="absolute -left-8 top-12 bg-background/80 backdrop-blur-md p-4 rounded-2xl border border-border shadow-xl hidden md:block animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                  ✓
                </div>
                <div>
                  <p className="text-sm font-semibold">Goal Reached</p>
                  <p className="text-xs text-muted-foreground">+500 points</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-8 bottom-1/4 bg-background/80 backdrop-blur-md p-4 rounded-2xl border border-border shadow-xl hidden md:block animate-pulse-slow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  ⚡
                </div>
                <div>
                  <p className="text-sm font-semibold">7 Day Streak</p>
                  <p className="text-xs text-muted-foreground">Keep it up!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}