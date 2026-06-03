"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { BrandLogo } from "@/components/brand-logo"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <BrandLogo size={40} priority />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="/about" className="text-sm text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="/features" className="text-sm text-foreground hover:text-primary transition-colors font-medium">
              Features
            </a>
            <a href="/contact" className="text-sm text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
            <a href="#testimonials" className="text-sm text-foreground hover:text-primary transition-colors font-medium">
              Testimonials
            </a>
            <div className="flex items-center gap-4 border-l border-border pl-4">
              <ThemeToggle />
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity shadow-sm">
                Get Started
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4 border-t border-border pt-4">
            <a href="/" className="block text-sm text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="/about" className="block text-sm text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="/features" className="block text-sm text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="/contact" className="block text-sm text-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <a href="#testimonials" className="block text-sm text-foreground hover:text-primary transition-colors">
              Testimonials
            </a>
            <button className="w-full bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity shadow-sm">
              Get Started
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}