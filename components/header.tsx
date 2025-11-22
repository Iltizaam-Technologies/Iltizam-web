"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">I</span>
            </div>
            <span className="font-bold text-xl text-foreground">ILTIZAM AI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="/about" className="text-sm text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#features" className="text-sm text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-sm text-foreground hover:text-primary transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-sm text-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
            <a href="#features" className="block text-sm text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#testimonials" className="block text-sm text-foreground hover:text-primary transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="block text-sm text-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <button className="w-full bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
