"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { AdminNav } from "../../../../../components/admin/admin-nav"
import { Footer } from "../../../../../components/footer"
import { ActivityTimeline } from "../../../../../components/goal-details/activity-timeline"
import { AdminNotesSection } from "../../../../../components/goal-details/admin-notes"
import { GoalOverview, type GoalOverviewData } from "../../../../../components/goal-details/goal-overview"
import { GoalDetailsHeader } from "../../../../../components/goal-details/goals-details-header"
import { TasksSection, type TaskItem } from "../../../../../components/goal-details/tasks-section"
import { getAdminGoalById } from "@/lib/admin-api"

function initials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .map((p) => p[0])
    .join("")
    .toUpperCase()
    .slice(0, 2) || "?"
}

function formatDate(d?: string): string {
  if (!d) return "—"
  try {
    return new Date(d).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
  } catch {
    return "—"
  }
}

function mapStatus(s: string): string {
  if (s === "active") return "In Progress"
  if (s === "completed") return "Completed"
  if (s === "paused") return "Archived"
  return "In Progress"
}

function capitalize(s: string): string {
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : "—"
}

export default function GoalDetailsPage() {
  const params = useParams()
  const id = typeof params?.id === "string" ? params.id : ""
  const [goalOverview, setGoalOverview] = useState<GoalOverviewData | null>(null)
  const [tasks, setTasks] = useState<TaskItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) {
      setLoading(false)
      setError("Invalid goal ID")
      return
    }
    let cancelled = false
    setLoading(true)
    setError(null)
    getAdminGoalById(id)
      .then((data) => {
        if (cancelled) return
        const owner = data.owner ?? data.userId
        const name = data.userName ?? (typeof owner === "object" && owner?.name) ?? "—"
        const email = data.userEmail ?? (typeof owner === "object" && owner?.email) ?? "—"
        setGoalOverview({
          title: data.title ?? "—",
          ownerName: name,
          ownerEmail: email,
          ownerAvatar: initials(name),
          type: capitalize(data.category ?? "personal"),
          status: mapStatus(data.status ?? "active"),
          progress: data.progress ?? 0,
          startDate: formatDate(data.createdAt),
          endDate: data.targetDate ? formatDate(data.targetDate) : "—",
          description: data.description ?? "No description.",
        })
        setTasks(
          (data.tasks ?? []).map((t: { _id: string; title?: string; completed?: boolean; dueDate?: string }) => ({
            id: t._id,
            title: t.title ?? "—",
            status: t.completed ? "Done" as const : "Pending" as const,
            dueDate: t.dueDate ? new Date(t.dueDate).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "—",
          }))
        )
      })
      .catch((err) => {
        if (!cancelled) setError(err instanceof Error ? err.message : "Failed to load goal")
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => { cancelled = true }
  }, [id])

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <div className="flex">
        <main className="flex-1">
          <GoalDetailsHeader />
          <div className="p-6 max-w-7xl mx-auto">
            {error && (
              <div className="mb-4 p-4 rounded-lg bg-red-50 text-red-700 text-sm">{error}</div>
            )}
            {loading ? (
              <div className="py-12 text-center text-muted-foreground">Loading goal…</div>
            ) : (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                  <div className="lg:col-span-2">
                    <GoalOverview goal={goalOverview} />
                  </div>
                  <div className="space-y-6">
                    <TasksSection tasks={tasks} />
                    <ActivityTimeline />
                  </div>
                </div>
                <div>
                  <AdminNotesSection />
                </div>
              </>
            )}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
