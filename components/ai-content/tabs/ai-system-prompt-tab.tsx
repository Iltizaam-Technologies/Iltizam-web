"use client"

import { useState } from "react"
import { AlertTriangle } from "lucide-react"

export function AISystemPromptsTab() {
  const [prompts, setPrompts] = useState({
    core: "You are ILTIZAAM AI, a supportive companion focused on helping users build discipline, achieve goals, and maintain emotional wellbeing. You speak with empathy, clarity, and respect.",
    emotional:
      "When providing emotional coaching, validate feelings first, then guide users toward self-compassion and actionable next steps. Never minimize their struggles.",
    financial:
      "When discussing financial discipline, focus on behavioral patterns and sustainable habits. Avoid technical investment advice. Encourage tracking, reflection, and small wins.",
    productivity:
      "Help users break tasks into manageable steps. Encourage focus over multitasking. Celebrate progress, not perfection. Remind them that consistency beats intensity.",
  })

  const handleChange = (key: string, value: string) => {
    setPrompts((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  return (
    <div className="space-y-6">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex gap-3">
        <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-yellow-800">
          <strong>Warning:</strong> Changes here affect all AI responses globally. Test thoroughly before saving.
        </p>
      </div>

      {/* Core AI Personality Prompt */}
      <div className="bg-white border border-border rounded-lg p-6 space-y-3">
        <h3 className="text-lg font-semibold text-foreground">Core AI Personality Prompt</h3>
        <p className="text-sm text-muted-foreground">Defines the foundational tone and identity of ILTIZAAM AI</p>
        <textarea
          value={prompts.core}
          onChange={(e) => handleChange("core", e.target.value)}
          rows={4}
          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
        />
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition">
            Save
          </button>
          <button className="px-4 py-2 bg-muted text-foreground text-sm font-medium rounded-lg hover:bg-muted/80 transition">
            Reset to Default
          </button>
        </div>
      </div>

      {/* Emotional Coaching Prompt */}
      <div className="bg-white border border-border rounded-lg p-6 space-y-3">
        <h3 className="text-lg font-semibold text-foreground">Emotional Coaching Prompt</h3>
        <p className="text-sm text-muted-foreground">Used when users share emotional struggles or mood logs</p>
        <textarea
          value={prompts.emotional}
          onChange={(e) => handleChange("emotional", e.target.value)}
          rows={4}
          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
        />
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition">
            Save
          </button>
          <button className="px-4 py-2 bg-muted text-foreground text-sm font-medium rounded-lg hover:bg-muted/80 transition">
            Reset to Default
          </button>
        </div>
      </div>

      {/* Financial Coaching Prompt */}
      <div className="bg-white border border-border rounded-lg p-6 space-y-3">
        <h3 className="text-lg font-semibold text-foreground">Financial Coaching Prompt</h3>
        <p className="text-sm text-muted-foreground">Guides users on budgeting and financial discipline</p>
        <textarea
          value={prompts.financial}
          onChange={(e) => handleChange("financial", e.target.value)}
          rows={4}
          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
        />
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition">
            Save
          </button>
          <button className="px-4 py-2 bg-muted text-foreground text-sm font-medium rounded-lg hover:bg-muted/80 transition">
            Reset to Default
          </button>
        </div>
      </div>

      {/* Productivity Discipline Prompt */}
      <div className="bg-white border border-border rounded-lg p-6 space-y-3">
        <h3 className="text-lg font-semibold text-foreground">Productivity Discipline Prompt</h3>
        <p className="text-sm text-muted-foreground">Helps users with task management and focus strategies</p>
        <textarea
          value={prompts.productivity}
          onChange={(e) => handleChange("productivity", e.target.value)}
          rows={4}
          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
        />
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition">
            Save
          </button>
          <button className="px-4 py-2 bg-muted text-foreground text-sm font-medium rounded-lg hover:bg-muted/80 transition">
            Reset to Default
          </button>
        </div>
      </div>
    </div>
  )
}
