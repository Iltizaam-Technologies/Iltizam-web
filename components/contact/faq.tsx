"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How does ILTIZAM AI work?",
      answer:
        "ILTIZAM AI is your committed companion that helps you build discipline through intelligent tracking, personalized insights, and accountability features. It uses advanced AI to understand your goals and provide guidance tailored to your unique journey.",
    },
    {
      question: "Is the app free?",
      answer:
        "Yes, ILTIZAM AI offers a free tier with essential features. We also provide premium plans with advanced analytics, priority support, and exclusive features for users who want to unlock their full potential.",
    },
    {
      question: "Can I sync across multiple devices?",
      answer:
        "Your ILTIZAM account syncs seamlessly across all your devices. Start tracking on your phone and continue on your desktop—your progress is always in sync.",
    },
    {
      question: "How is my data protected?",
      answer:
        "We take security seriously. All your data is encrypted with industry-standard protocols, and we never share your information with third parties. Your privacy and trust are our top priorities.",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-foreground/70">Find answers to common questions about ILTIZAM AI</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 bg-card hover:bg-card/80 transition-colors"
              >
                <h3 className="font-semibold text-foreground text-left">{faq.question}</h3>
                <ChevronDown
                  className={`flex-shrink-0 w-5 h-5 text-primary transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-background border-t border-border">
                  <p className="text-foreground/70 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
