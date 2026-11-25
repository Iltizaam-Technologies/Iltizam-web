"use client"

import { useEffect, useState } from "react"
import { MessageSquare, Power, Settings } from "lucide-react"
import { formatDraftSavedAt, readBrowserDraft, writeBrowserDraft } from "../../../../components/ai-content/browser-draft"

const STORAGE_KEY = "iltizam.admin.whatsappStatusDraft"
const PENDING_NOTE = "The WhatsApp sender does not read this draft. Credentials stay in server environment variables."

type StatusDraft = {
  enabled: boolean
  dailyLimit: number
}

function isStatusDraft(value: unknown): value is StatusDraft {
  if (!value || typeof value !== "object") return false
  const record = value as Record<string, unknown>
  return typeof record.enabled === "boolean" && typeof record.dailyLimit === "number" && Number.isFinite(record.dailyLimit)
}

export function StatusBar() {
  const [enabled, setEnabled] = useState(true)
  const [dailyLimit, setDailyLimit] = useState(3)
  const [savedAt, setSavedAt] = useState<string | null>(null)
  const [dirty, setDirty] = useState(false)
  const [saveError, setSaveError] = useState<string | null>(null)

  useEffect(() => {
    const stored = readBrowserDraft<unknown>(STORAGE_KEY)
    if (stored && isStatusDraft(stored.value)) {
      setEnabled(stored.value.enabled)
      setDailyLimit(stored.value.dailyLimit)
      setSavedAt(stored.savedAt)
    }
  }, [])

  const handleSave = () => {
    const limit = Math.min(10, Math.max(1, Math.round(dailyLimit) || 1))
    try {
      const draft = writeBrowserDraft(STORAGE_KEY, { enabled, dailyLimit: limit })
      setDailyLimit(limit)
      setSavedAt(draft.savedAt)
      setDirty(false)
      setSaveError(null)
    } catch {
      setSaveError("Could not save this draft in the browser.")
    }
  }

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">{formatDraftSavedAt(savedAt, PENDING_NOTE)}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg border border-border p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground font-medium">WhatsApp integration</p>
              <p className="mt-3 text-sm font-medium text-foreground">Not checked from this page</p>
              <p className="text-xs text-muted-foreground mt-3">
                Sending uses Meta Cloud API credentials on the server, not a Twilio form.
              </p>
            </div>
            <Settings className="w-6 h-6 text-muted-foreground flex-shrink-0" />
          </div>
        </div>

        <div className="bg-white rounded-lg border border-border p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground font-medium">Global WhatsApp toggle</p>
              <div className="mt-3 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setEnabled((value) => !value)
                    setDirty(true)
                    setSaveError(null)
                  }}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                    enabled ? "bg-primary" : "bg-muted"
                  }`}
                  aria-pressed={enabled}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                      enabled ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
                <span className="text-sm font-medium text-foreground">{enabled ? "Enabled" : "Disabled"}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-3">Local draft only. It does not stop live sends.</p>
            </div>
            <Power className="w-6 h-6 text-primary flex-shrink-0" />
          </div>
        </div>

        <div className="bg-white rounded-lg border border-border p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground font-medium">Daily message limit</p>
              <input
                type="number"
                min="1"
                max="10"
                value={dailyLimit}
                onChange={(e) => {
                  setDailyLimit(Number(e.target.value))
                  setDirty(true)
                  setSaveError(null)
                }}
                className="mt-3 w-20 px-3 py-2 border border-border rounded-lg bg-background text-foreground font-bold text-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <p className="text-xs text-muted-foreground mt-3">Local draft only. The sender does not enforce this number.</p>
            </div>
            <MessageSquare className="w-6 h-6 text-primary flex-shrink-0" />
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
  )
}
