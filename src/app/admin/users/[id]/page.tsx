"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { AdminNav } from "../../../../../components/admin/admin-nav"
import { UserDetailsContent, type UserDetailsUser } from "../../../../../components/admin/user-details/user-details-content"
import { Footer } from "../../../../../components/footer"
import { getUserById, type UserOverviewStats } from "@/lib/admin-api"

function mapAdminStatus(s?: string): "Active" | "Inactive" | "Suspended" {
  if (s === "suspended") return "Suspended"
  if (s === "active") return "Active"
  return "Inactive"
}

function readStats(value: unknown): UserOverviewStats | null {
  if (!value || typeof value !== "object") return null
  const stats = value as Record<string, unknown>
  return {
    goalsCount: Number(stats.goalsCount) || 0,
    goalsCompleted: Number(stats.goalsCompleted) || 0,
    habitsCount: Number(stats.habitsCount) || 0,
    journalsCount: Number(stats.journalsCount) || 0,
    taskCompletions: Number(stats.taskCompletions) || 0,
    highestHabitStreak: stats.highestHabitStreak == null ? null : Number(stats.highestHabitStreak),
    lastActivityText: typeof stats.lastActivityText === "string" ? stats.lastActivityText : null,
    lastActivityAt: stats.lastActivityAt ? String(stats.lastActivityAt) : null,
  }
}

function formatJoinedDate(createdAt?: string): string {
  if (!createdAt) return "—"
  try {
    return new Date(createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
  } catch {
    return "—"
  }
}

function initials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .map((p) => p[0])
    .join("")
    .toUpperCase()
    .slice(0, 2) || "?"
}

export default function UserDetailsPage() {
  const params = useParams()
  const id = typeof params?.id === "string" ? params.id : ""
  const [user, setUser] = useState<UserDetailsUser | null>(null)
  const [stats, setStats] = useState<UserOverviewStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) {
      setLoading(false)
      setError("Invalid user ID")
      return
    }
    let cancelled = false
    setLoading(true)
    setError(null)
    getUserById(id)
      .then((data) => {
        if (cancelled) return
        const u = data as Record<string, unknown>
        const name = (u.name as string) ?? "—"
        setUser({
          id: (u._id as string) ?? id,
          name,
          email: (u.email as string) ?? "—",
          role: (u.role as string) ?? "User",
          status: mapAdminStatus(u.adminAccountStatus as string),
          joinedDate: formatJoinedDate(u.createdAt as string),
          avatar: initials(name),
          location: (u.location as string) || undefined,
        })
        setStats(readStats(u.stats))
      })
      .catch((err) => {
        if (!cancelled) setError(err instanceof Error ? err.message : "Failed to load user")
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [id])

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <div className="flex">
        <main className="flex-1">
          <div className="bg-card border-b border-border">
            <div className="max-w-7xl mx-auto px-6 py-8">
              <h1 className="text-3xl font-bold text-foreground">User Details</h1>
              <p className="text-muted-foreground mt-2">View and manage user information, goals, and activity.</p>
            </div>
          </div>
          <div className="p-6 max-w-7xl mx-auto">
            <UserDetailsContent
              user={user}
              stats={stats}
              loading={loading}
              error={error}
              onUserUpdated={(next) =>
                setUser((current) =>
                  current
                    ? { ...current, name: next.name, email: next.email, role: next.role, avatar: initials(next.name) }
                    : current
                )
              }
            />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
