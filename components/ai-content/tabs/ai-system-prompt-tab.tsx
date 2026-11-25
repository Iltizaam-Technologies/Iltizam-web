"use client"

import { useEffect, useState } from "react"
import { AlertTriangle } from "lucide-react"
import { formatDraftSavedAt, readBrowserDraft, writeBrowserDraft } from "../browser-draft"

const STORAGE_KEY = "iltizam.admin.aiSystemPrompts"

const DEFAULT_PROMPTS = {
  core: "You are ILTIZAAM, a supportive companion focused on helping users build discipline, achieve goals, and maintain emotional wellbeing. You speak with empathy, clarity, and respect.",
  emotional:
    "When providing emotional coaching, validate feelings first, then guide users toward self-compassion and actionable next steps. Never minimize their struggles.",
  financial:
    "When discussing financial discipline, focus on behavioral patterns and sustainable habits. Avoid technical investment advice. Encourage tracking, reflection, and small wins.",
  productivity:
    "Help users break tasks into manageable steps. Encourage focus over multitasking. Celebrate progress, not perfection. Remind them that consistency beats intensity.",
}

type PromptKey = keyof typeof DEFAULT_PROMPTS
type Prompts = Record<PromptKey, string>

const PROMPT_FIELDS: Array<{ key: PromptKey; title: string; description: string }> = [
  {
    key: "core",
    title: "Core AI Personality Prompt",
    description: "Defines the foundational tone and identity of ILTIZAAM",
  },
  {
    key: "emotional",
    title: "Emotional Coaching Prompt",
    description: "Used when users share emotional struggles or mood logs",
  },
  {
    key: "financial",
    title: "Financial Coaching Prompt",
    description: "Guides users on budgeting and financial discipline",
  },
  {
    key: "productivity",
    title: "Productivity Discipline Prompt",
    description: "Helps users with task management and focus strategies",
  },
]

function isPrompts(value: unknown): value is Prompts {
  if (!value || typeof value !== "object") return false
  const record = value as Record<string, unknown>
  return PROMPT_FIELDS.every((field) => typeof record[field.key] === "string")
}

export function AISystemPromptsTab() {
  const [prompts, setPrompts] = useState<Prompts>(DEFAULT_PROMPTS)
  const [savedAt, setSavedAt] = useState<string | null>(null)
  const [dirty, setDirty] = useState(false)
  const [saveError, setSaveError] = useState<string | null>(null)

  useEffect(() => {
    const stored = readBrowserDraft<unknown>(STORAGE_KEY)
    if (stored && isPrompts(stored.value)) {
      setPrompts(stored.value)
      setSavedAt(stored.savedAt)
    }
  }, [])

  const handleChange = (key: PromptKey, value: string) => {
    setPrompts((prev) => ({
      ...prev,
      [key]: value,
    }))
    setDirty(true)
    setSaveError(null)
  }

  const handleSave = () => {
    try {
      const draft = writeBrowserDraft(STORAGE_KEY, prompts)
      setSavedAt(draft.savedAt)
      setDirty(false)
      setSaveError(null)
    } catch {
      setSaveError("Could not save in this browser.")
    }
  }

  const handleReset = (key: PromptKey) => {
    setPrompts((prev) => ({
      ...prev,
      [key]: DEFAULT_PROMPTS[key],
    }))
    setDirty(true)
    setSaveError(null)
  }

  return (
    <div className="space-y-6">
      <div className="bg-yellow-50 dark:bg-yellow-500/15 border border-yellow-200 dark:border-yellow-500/30 rounded-lg p-4 flex gap-3">
        <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-yellow-800 dark:text-yellow-400">
          <p>
            <strong>Draft only.</strong> There is no server setting for these prompts. Save stores them in this browser.
            The live coach still uses the prompt sent by the mobile app.
          </p>
          <p className="mt-2">{formatDraftSavedAt(savedAt)}</p>
          {dirty ? <p className="mt-2">Unsaved changes.</p> : null}
          {saveError ? <p className="mt-2">{saveError}</p> : null}
        </div>
      </div>

      {PROMPT_FIELDS.map((field) => (
        <div key={field.key} className="bg-card border border-border rounded-lg p-6 space-y-3">
          <h3 className="text-lg font-semibold text-foreground">{field.title}</h3>
          <p className="text-sm text-muted-foreground">{field.description}</p>
          <textarea
            value={prompts[field.key]}
            onChange={(e) => handleChange(field.key, e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleSave}
              className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition"
            >
              {dirty ? "Save" : "Saved in this browser"}
            </button>
            <button
              type="button"
              onClick={() => handleReset(field.key)}
              className="px-4 py-2 bg-muted text-foreground text-sm font-medium rounded-lg hover:bg-muted/80 transition"
            >
              Reset to Default
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
