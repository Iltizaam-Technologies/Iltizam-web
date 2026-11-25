"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { formatDraftSavedAt, readBrowserDraft, writeBrowserDraft } from "../ai-content/browser-draft"

const PENDING_NOTE = "Goal notes are not stored on the server yet."

export function AdminNotesSection({ goalId }: { goalId: string }) {
  const storageKey = `iltizam.admin.goalNotes.${goalId || "unknown"}`
  const [notes, setNotes] = useState("")
  const [savedAt, setSavedAt] = useState<string | null>(null)
  const [dirty, setDirty] = useState(false)
  const [saveError, setSaveError] = useState<string | null>(null)

  useEffect(() => {
    const stored = readBrowserDraft<unknown>(storageKey)
    if (stored && typeof stored.value === "string") {
      setNotes(stored.value)
      setSavedAt(stored.savedAt)
      setDirty(false)
    } else {
      setNotes("")
      setSavedAt(null)
      setDirty(false)
    }
  }, [storageKey])

  const handleSave = () => {
    try {
      const draft = writeBrowserDraft(storageKey, notes)
      setSavedAt(draft.savedAt)
      setDirty(false)
      setSaveError(null)
    } catch {
      setSaveError("Could not save this draft in the browser.")
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Admin Notes</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-3 text-xs text-muted-foreground">{formatDraftSavedAt(savedAt, PENDING_NOTE)}</p>
        <textarea
          value={notes}
          onChange={(e) => {
            setNotes(e.target.value)
            setDirty(true)
            setSaveError(null)
          }}
          className="w-full p-4 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          rows={6}
          placeholder="Draft an internal note about this goal. It stays in this browser."
        />
        {dirty ? <p className="mt-3 text-xs text-muted-foreground">Unsaved draft.</p> : null}
        {saveError ? <p className="mt-3 text-sm text-red-600 dark:text-red-400">{saveError}</p> : null}
        <button
          type="button"
          onClick={handleSave}
          className="mt-4 px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition"
        >
          {dirty || !savedAt ? "Save draft in this browser" : "Draft saved in this browser"}
        </button>
      </CardContent>
    </Card>
  )
}
