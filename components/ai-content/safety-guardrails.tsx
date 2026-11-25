"use client"

import { useEffect, useState } from "react"
import { Shield } from "lucide-react"
import { formatDraftSavedAt, readBrowserDraft, writeBrowserDraft } from "./browser-draft"

const STORAGE_KEY = "iltizam.admin.aiSafety"

type Guardrails = {
  preventHarmful: boolean
  avoidMedicalLegal: boolean
  avoidShaming: boolean
  encourageCompassion: boolean
}

const DEFAULT_GUARDRAILS: Guardrails = {
  preventHarmful: true,
  avoidMedicalLegal: true,
  avoidShaming: true,
  encourageCompassion: true,
}

function isGuardrails(value: unknown): value is Guardrails {
  if (!value || typeof value !== "object") return false
  const record = value as Record<string, unknown>
  return (
    typeof record.preventHarmful === "boolean" &&
    typeof record.avoidMedicalLegal === "boolean" &&
    typeof record.avoidShaming === "boolean" &&
    typeof record.encourageCompassion === "boolean"
  )
}

export function SafetyGuardrails() {
  const [guardrails, setGuardrails] = useState<Guardrails>(DEFAULT_GUARDRAILS)
  const [savedAt, setSavedAt] = useState<string | null>(null)
  const [dirty, setDirty] = useState(false)
  const [saveError, setSaveError] = useState<string | null>(null)

  useEffect(() => {
    const stored = readBrowserDraft<unknown>(STORAGE_KEY)
    if (stored && isGuardrails(stored.value)) {
      setGuardrails(stored.value)
      setSavedAt(stored.savedAt)
    }
  }, [])

  const handleToggle = (key: keyof Guardrails) => {
    setGuardrails((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
    setDirty(true)
    setSaveError(null)
  }

  const handleSave = () => {
    try {
      const draft = writeBrowserDraft(STORAGE_KEY, guardrails)
      setSavedAt(draft.savedAt)
      setDirty(false)
      setSaveError(null)
    } catch {
      setSaveError("Could not save in this browser.")
    }
  }

  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-2">
        <Shield className="w-6 h-6 text-primary" />
        <h2 className="text-lg font-semibold text-foreground">Safety & Guardrails</h2>
      </div>
      <p className="text-xs text-muted-foreground mb-6">{formatDraftSavedAt(savedAt)}</p>

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

      {saveError ? <p className="mt-4 text-sm text-red-600 dark:text-red-400">{saveError}</p> : null}
      {dirty ? <p className="mt-4 text-xs text-muted-foreground">Unsaved changes on this page.</p> : null}

      <button
        type="button"
        onClick={handleSave}
        className="w-full mt-6 px-4 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition"
      >
        {dirty ? "Save Settings" : "Saved in this browser"}
      </button>
    </div>
  )
}
