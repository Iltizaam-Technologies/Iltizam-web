"use client"

import { useEffect, useState } from "react"
import { Shield } from "lucide-react"
import { formatDraftSavedAt, readBrowserDraft, writeBrowserDraft } from "../../../../components/ai-content/browser-draft"

const STORAGE_KEY = "iltizam.admin.notificationRules"
const PENDING_NOTE = "The notification scheduler does not read these rules yet."

type Rules = {
  weekdaysOnly: boolean
  skipLowMood: boolean
  delayFocusMode: boolean
  respectQuietHours: boolean
  quietStart: string
  quietEnd: string
}

const DEFAULT_RULES: Rules = {
  weekdaysOnly: true,
  skipLowMood: true,
  delayFocusMode: true,
  respectQuietHours: true,
  quietStart: "22:00",
  quietEnd: "06:00",
}

function isRules(value: unknown): value is Rules {
  if (!value || typeof value !== "object") return false
  const record = value as Record<string, unknown>
  return (
    typeof record.weekdaysOnly === "boolean" &&
    typeof record.skipLowMood === "boolean" &&
    typeof record.delayFocusMode === "boolean" &&
    typeof record.respectQuietHours === "boolean" &&
    typeof record.quietStart === "string" &&
    typeof record.quietEnd === "string"
  )
}

export function NotificationRules() {
  const [rules, setRules] = useState<Rules>(DEFAULT_RULES)
  const [savedAt, setSavedAt] = useState<string | null>(null)
  const [dirty, setDirty] = useState(false)
  const [saveError, setSaveError] = useState<string | null>(null)

  useEffect(() => {
    const stored = readBrowserDraft<unknown>(STORAGE_KEY)
    if (stored && isRules(stored.value)) {
      setRules(stored.value)
      setSavedAt(stored.savedAt)
    }
  }, [])

  const update = (next: Rules) => {
    setRules(next)
    setDirty(true)
    setSaveError(null)
  }

  const toggleRule = (key: "weekdaysOnly" | "skipLowMood" | "delayFocusMode" | "respectQuietHours") => {
    update({ ...rules, [key]: !rules[key] })
  }

  const handleSave = () => {
    try {
      const draft = writeBrowserDraft(STORAGE_KEY, rules)
      setSavedAt(draft.savedAt)
      setDirty(false)
      setSaveError(null)
    } catch {
      setSaveError("Could not save this draft in the browser.")
    }
  }

  return (
    <div className="bg-white rounded-lg border border-border shadow-sm overflow-hidden">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <Shield className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Notification Rules</h2>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">{formatDraftSavedAt(savedAt, PENDING_NOTE)}</p>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between py-3 border-b border-border">
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">Send reminders only on weekdays</p>
            <p className="text-xs text-muted-foreground mt-1">Skip Saturday and Sunday</p>
          </div>
          <button
            type="button"
            onClick={() => toggleRule("weekdaysOnly")}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
              rules.weekdaysOnly ? "bg-primary" : "bg-muted"
            }`}
            aria-pressed={rules.weekdaysOnly}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                rules.weekdaysOnly ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between py-3 border-b border-border">
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">Skip messages when user mood is &quot;Low&quot;</p>
            <p className="text-xs text-muted-foreground mt-1">Avoid overwhelming users during difficult times</p>
          </div>
          <button
            type="button"
            onClick={() => toggleRule("skipLowMood")}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
              rules.skipLowMood ? "bg-primary" : "bg-muted"
            }`}
            aria-pressed={rules.skipLowMood}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                rules.skipLowMood ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between py-3 border-b border-border">
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">Delay message if user is in Focus Mode</p>
            <p className="text-xs text-muted-foreground mt-1">Queue notifications until focus session ends</p>
          </div>
          <button
            type="button"
            onClick={() => toggleRule("delayFocusMode")}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
              rules.delayFocusMode ? "bg-primary" : "bg-muted"
            }`}
            aria-pressed={rules.delayFocusMode}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                rules.delayFocusMode ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between py-3 border-b border-border">
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">Respect user quiet hours</p>
            <p className="text-xs text-muted-foreground mt-1">No messages during sleep time</p>
          </div>
          <button
            type="button"
            onClick={() => toggleRule("respectQuietHours")}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
              rules.respectQuietHours ? "bg-primary" : "bg-muted"
            }`}
            aria-pressed={rules.respectQuietHours}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                rules.respectQuietHours ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>

        <div className="pt-3">
          <p className="text-sm font-medium text-foreground mb-3">Quiet Hours</p>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <label className="block text-xs text-muted-foreground mb-2">Start Time</label>
              <input
                type="time"
                value={rules.quietStart}
                onChange={(e) => update({ ...rules, quietStart: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div className="flex-1">
              <label className="block text-xs text-muted-foreground mb-2">End Time</label>
              <input
                type="time"
                value={rules.quietEnd}
                onChange={(e) => update({ ...rules, quietEnd: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {dirty ? <p className="text-xs text-muted-foreground">Unsaved draft.</p> : null}
        {saveError ? <p className="text-sm text-red-600">{saveError}</p> : null}
        <button
          type="button"
          onClick={handleSave}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition"
        >
          {dirty || !savedAt ? "Save draft in this browser" : "Draft saved in this browser"}
        </button>
      </div>
    </div>
  )
}
