"use client"

import { useEffect, useState } from "react"
import { RecentActivityTable, type ActivityItem } from "../../recent-activity-table"
import { getUserActivity } from "@/lib/admin-api"

function formatWhen(iso: string): string {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return iso
  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  })
}

export function ActivityTab({ userId }: { userId: string }) {
  const [items, setItems] = useState<ActivityItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)
    getUserActivity(userId)
      .then((rows) => {
        if (cancelled) return
        setItems(
          (rows ?? []).map((row) => ({
            user: row.user,
            activity: row.activity,
            time: formatWhen(row.time),
            status: row.status === "pending" || row.status === "failed" ? row.status : "completed",
          }))
        )
      })
      .catch((err) => {
        if (!cancelled) setError(err instanceof Error ? err.message : "Failed to load activity")
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [userId])

  if (error) {
    return <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
  }

  return <RecentActivityTable activityData={items} loading={loading} />
}
