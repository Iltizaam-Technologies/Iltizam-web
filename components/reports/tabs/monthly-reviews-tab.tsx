"use client"

import { useEffect, useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { getReportsMonthly, type MonthlyReportItem } from "@/lib/admin-api"

const moodTrendConfig: Record<string, string> = {
  Improving: "text-green-700 dark:text-green-400",
  Stable: "text-blue-700 dark:text-blue-400",
  Declining: "text-red-700 dark:text-red-400",
}

export function MonthlyReviewsTab() {
  const [reviews, setReviews] = useState<MonthlyReportItem[]>([])
  const [note, setNote] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    getReportsMonthly({ page: 1, limit: 20 })
      .then((result) => {
        if (cancelled) return
        setReviews(result.items ?? [])
        setNote(result.note ?? null)
      })
      .catch((err) => {
        if (!cancelled) setError(err instanceof Error ? err.message : "Failed to load monthly activity")
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
        {note ?? "Monthly rows are aggregated from journals, task completions, and completed goals."}
      </p>
      {error ? <p className="text-sm text-red-600 dark:text-red-400 mb-4">{error}</p> : null}
      {loading ? <p className="text-sm text-muted-foreground">Loading monthly activity…</p> : null}
      {!loading && !reviews.length ? (
        <p className="text-sm text-muted-foreground">No monthly journal, task, or completed-goal activity is stored yet.</p>
      ) : null}

      <div className="hidden md:block border border-border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Month</TableHead>
              <TableHead>Goals marked completed</TableHead>
              <TableHead>Mood trend</TableHead>
              <TableHead>AI summary</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reviews.map((review) => (
              <TableRow key={review.id}>
                <TableCell className="font-medium">{review.user}</TableCell>
                <TableCell>{review.month}</TableCell>
                <TableCell>{review.goalsAchieved}</TableCell>
                <TableCell>
                  <span className={`font-medium ${moodTrendConfig[review.moodTrend] ?? ""}`}>{review.moodTrend}</span>
                </TableCell>
                <TableCell>{review.aiSummary}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="md:hidden space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="border border-border rounded-lg p-4">
            <p className="font-semibold text-foreground">{review.user}</p>
            <p className="text-sm text-muted-foreground mt-1">{review.month}</p>
            <div className="space-y-2 text-sm mt-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Goals marked completed:</span>
                <span className="font-medium">{review.goalsAchieved}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Mood trend:</span>
                <span className={`font-medium ${moodTrendConfig[review.moodTrend] ?? ""}`}>{review.moodTrend}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">AI summary:</span>
                <span className="font-medium">{review.aiSummary}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
