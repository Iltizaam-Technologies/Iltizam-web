"use client"

import { useState, useEffect } from "react"
import { AdminNav } from "../../../../components/admin/admin-nav"
import { GoalsHeader } from "../../../../components/admin/goal-management/header"
import { GoalsTable, type Goal } from "../../../../components/admin/goal-management/goals-table"
import { GoalsStats } from "../../../../components/admin/goal-management/goal-stats"
import { Footer } from "../../../../components/footer"
import { getAdminGoals, getAdminStats } from "@/lib/admin-api"

function mapStatusFromApi(s: string): "In Progress" | "Completed" | "Archived" {
  if (s === "active") return "In Progress"
  if (s === "completed") return "Completed"
  if (s === "paused") return "Archived"
  return "In Progress"
}

function mapStatusToApi(ui: string): string | undefined {
  if (ui === "In Progress") return "active"
  if (ui === "Completed") return "completed"
  if (ui === "Archived") return "paused"
  return undefined
}

function formatDate(createdAt?: string): string {
  if (!createdAt) return "—"
  try {
    return new Date(createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  } catch {
    return "—"
  }
}

function capitalize(s: string): string {
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : "—"
}

export default function GoalsManagement() {
  const [searchQuery, setSearchQuery] = useState("")
  const [goalType, setGoalType] = useState("all")
  const [goalStatus, setGoalStatus] = useState("all")
  const [page, setPage] = useState(1)
  const [goals, setGoals] = useState<Goal[]>([])
  const [pagination, setPagination] = useState<{ totalPages: number }>({ totalPages: 1 })
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState<{ total: number; active: number; completed: number; archived: number } | null>(null)

  useEffect(() => {
    setLoading(true)
    getAdminGoals({
      page,
      limit: 10,
      status: mapStatusToApi(goalStatus),
      category: goalType === "all" ? undefined : goalType,
    })
      .then((res) => {
        const mapped: Goal[] = (res.items || []).map((g) => {
          const ownerNameVal = g.userName ?? (typeof g.userId === "object" && g.userId ? (g.userId as { name?: string }).name : undefined)
          return {
          id: g._id,
          title: g.title || "—",
          ownerName: typeof ownerNameVal === "string" ? ownerNameVal : "—",
          goalType: capitalize(g.category || "personal"),
          progress: g.progress ?? 0,
          status: mapStatusFromApi(g.status || "active"),
          createdDate: formatDate(g.createdAt),
          }
        });
        setGoals(mapped)
        setPagination({ totalPages: res.pagination?.totalPages ?? 1 })
      })
      .catch(() => {
        setGoals([])
        setPagination({ totalPages: 1 })
      })
      .finally(() => setLoading(false))
  }, [page, goalType, goalStatus])

  useEffect(() => {
    getAdminStats()
      .then((data) => {
        setStats({
          total: data.content?.goals ?? 0,
          active: data.content?.goalsActive ?? 0,
          completed: data.content?.goalsCompleted ?? 0,
          archived: data.content?.goalsPaused ?? 0,
        })
      })
      .catch(() => setStats(null))
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <div className="flex">
        <main className="flex-1">
          <GoalsHeader />
          <div className="p-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <GoalsTable
                  goals={goals}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  goalType={goalType}
                  setGoalType={(v) => { setPage(1); setGoalType(v) }}
                  goalStatus={goalStatus}
                  setGoalStatus={(v) => { setPage(1); setGoalStatus(v) }}
                  pagination={{
                    page,
                    totalPages: pagination.totalPages,
                    onPageChange: setPage,
                  }}
                  loading={loading}
                />
              </div>
              <div className="hidden lg:block">
                <GoalsStats stats={stats} />
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
