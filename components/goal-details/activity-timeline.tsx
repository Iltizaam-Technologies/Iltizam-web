"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Goal, Plus, CheckCircle2 } from "lucide-react"
import { getGoalActivity, type GoalActivityEvent } from "@/lib/admin-api"

const iconConfig = {
  created: { bg: "bg-blue-50 dark:bg-blue-500/15", text: "text-blue-600 dark:text-blue-400", icon: Goal },
  updated: { bg: "bg-purple-50 dark:bg-purple-500/15", text: "text-purple-600 dark:text-purple-400", icon: Plus },
  progress: { bg: "bg-green-50 dark:bg-green-500/15", text: "text-green-600 dark:text-green-400", icon: CheckCircle2 },
}

function formatWhen(value: string): string {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  })
}

export function ActivityTimeline({ goalId }: { goalId: string }) {
  const [events, setEvents] = useState<GoalActivityEvent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!goalId) return
    let cancelled = false
    setLoading(true)
    setError(null)
    getGoalActivity(goalId)
      .then((rows) => {
        if (!cancelled) setEvents(rows ?? [])
      })
      .catch((err) => {
        if (!cancelled) setError(err instanceof Error ? err.message : "Failed to load goal activity")
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [goalId])

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Activity Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-muted-foreground mb-4">
          Created goals, added tasks, and task completions. Percentage history is not stored.
        </p>
        {loading ? <p className="text-sm text-muted-foreground">Loading activity…</p> : null}
        {error ? <p className="text-sm text-red-600 dark:text-red-400">{error}</p> : null}
        {!loading && !error && !events.length ? (
          <p className="text-sm text-muted-foreground">No stored events for this goal.</p>
        ) : null}
        <div className="space-y-4">
          {events.map((activity, index) => {
            const config = iconConfig[activity.type] ?? iconConfig.updated
            const IconComponent = config.icon
            return (
              <div key={activity.id}>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${config.bg}`}>
                      <IconComponent size={16} className={config.text} />
                    </div>
                    {index < events.length - 1 && <div className="w-0.5 h-12 bg-border mt-2" />}
                  </div>
                  <div className="pb-4">
                    <p className="text-sm font-medium text-foreground">{activity.text}</p>
                    <p className="text-xs text-muted-foreground mt-1">{formatWhen(activity.timestamp)}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
