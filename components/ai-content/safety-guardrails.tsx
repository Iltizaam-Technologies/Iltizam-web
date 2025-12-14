"use client"

import { useState } from "react"
import { Shield } from "lucide-react"

export function SafetyGuardrails() {
  const [guardrails, setGuardrails] = useState({
    preventHarmful: true,
    avoidMedicalLegal: true,
    avoidShaming: true,
    encourageCompassion: true,
  })

  const handleToggle = (key: string) => {
    setGuardrails((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }))
  }

  return (
    <div className="bg-white rounded-lg border border-border p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <Shield className="w-6 h-6 text-primary" />
        <h2 className="text-lg font-semibold text-foreground">Safety & Guardrails</h2>
      </div>

      <div className="space-y-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={guardrails.preventHarmful}
            onChange={() => handleToggle("preventHarmful")}
            className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-2 focus:ring-primary"
          />
          <div className="flex-1">
            <span className="text-sm font-medium text-foreground">Prevent harmful advice</span>
            <p className="text-xs text-muted-foreground mt-1">
              Block suggestions that could lead to physical or mental harm
            </p>
          </div>
        </label>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={guardrails.avoidMedicalLegal}
            onChange={() => handleToggle("avoidMedicalLegal")}
            className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-2 focus:ring-primary"
          />
          <div className="flex-1">
            <span className="text-sm font-medium text-foreground">Avoid medical or legal claims</span>
            <p className="text-xs text-muted-foreground mt-1">AI will not provide medical diagnoses or legal advice</p>
          </div>
        </label>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={guardrails.avoidShaming}
            onChange={() => handleToggle("avoidShaming")}
            className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-2 focus:ring-primary"
          />
          <div className="flex-1">
            <span className="text-sm font-medium text-foreground">Avoid shaming or guilt-based language</span>
            <p className="text-xs text-muted-foreground mt-1">
              Focus on encouragement and positive reinforcement instead of guilt
            </p>
          </div>
        </label>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={guardrails.encourageCompassion}
            onChange={() => handleToggle("encourageCompassion")}
            className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-2 focus:ring-primary"
          />
          <div className="flex-1">
            <span className="text-sm font-medium text-foreground">Always encourage self-compassion</span>
            <p className="text-xs text-muted-foreground mt-1">Remind users to be kind to themselves during setbacks</p>
          </div>
        </label>
      </div>

      <button className="w-full mt-6 px-4 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition">
        Save Settings
      </button>
    </div>
  )
}
