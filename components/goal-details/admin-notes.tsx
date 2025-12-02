"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AdminNotesSection() {
  const [notes, setNotes] = useState(
    "Maria is making excellent progress on this project. Regular check-ins scheduled every Monday at 2 PM. Consider allocating additional resources for Q4 sprint.",
  )
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 500))
    setIsSaving(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Admin Notes</CardTitle>
      </CardHeader>
      <CardContent>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full p-4 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          rows={6}
          placeholder="Add internal notes about this goal..."
        />
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="mt-4 px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          {isSaving ? "Saving..." : "Save Notes"}
        </button>
      </CardContent>
    </Card>
  )
}
