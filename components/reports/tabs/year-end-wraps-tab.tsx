"use client"

import { useEffect, useState } from "react"
import { Sparkles } from "lucide-react"
import { getReportsYearly, type YearlyReportItem } from "@/lib/admin-api"

export function YearEndWrapsTab() {
  const [wraps, setWraps] = useState<YearlyReportItem[]>([])
  const [note, setNote] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    getReportsYearly({ page: 1, limit: 24 })
      .then((result) => {
        if (cancelled) return
        setWraps(result.items ?? [])
        setNote(result.note ?? null)
      })
      .catch((err) => {
        if (!cancelled) setError(err instanceof Error ? err.message : "Failed to load yearly activity")
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div>
      <p className="text-xs text-muted-foreground mb-4">
        {note ?? "Yearly cards count stored task completions and journal moods. A wrap preview is not generated."}
      </p>
      {error ? <p className="text-sm text-red-600 dark:text-red-400 mb-4">{error}</p> : null}
      {loading ? <p className="text-sm text-muted-foreground">Loading yearly activity…</p> : null}
      {!loading && !wraps.length ? (
        <p className="text-sm text-muted-foreground">No yearly journal, task, or completed-goal activity is stored yet.</p>
      ) : null}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {wraps.map((wrap) => (
          <div
            key={wrap.id}
            className="border border-border rounded-xl p-6 bg-gradient-to-br from-white to-muted/30 dark:from-card dark:to-muted/20"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Yearly activity</p>
                <p className="text-lg font-bold text-foreground mt-1">{wrap.year}</p>
              </div>
              <Sparkles size={20} className="text-accent" />
            </div>
            <p className="font-semibold text-foreground text-lg mb-4">{wrap.user}</p>
            <div className="space-y-3">
              <div className="bg-primary/5 rounded-lg p-3 border border-primary/20">
                <p className="text-xs text-muted-foreground font-medium mb-1">Recorded activity</p>
                <p className="text-sm font-bold text-primary">{wrap.topStat}</p>
              </div>
              <div className="bg-accent/10 rounded-lg p-3 border border-accent/20">
                <p className="text-xs text-muted-foreground font-medium mb-1">Mood highlight</p>
                <p className="text-sm font-semibold text-foreground">{wrap.moodHighlight}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
