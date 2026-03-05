"use client"

import { useState, useEffect } from "react"
import { AdminNav } from "../../../../components/admin/admin-nav"
import { UserManagementHeader } from "../../../../components/admin/user-management/header"
import { UserTable, type User } from "../../../../components/admin/user-management/user-table"
import { Footer } from "../../../../components/footer"
import { getUsers } from "../../../../lib/admin-api"

function mapSubscriptionToStatus(subscriptionStatus?: string): "Active" | "Inactive" | "Suspended" {
  if (!subscriptionStatus) return "Inactive"
  const s = subscriptionStatus.toLowerCase()
  if (s === "suspended" || s === "banned") return "Suspended"
  if (s === "active" || s === "trial" || s === "subscribed") return "Active"
  return "Inactive"
}

function formatJoinedDate(createdAt?: string): string {
  if (!createdAt) return "—"
  try {
    const d = new Date(createdAt)
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
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

export default function UserManagementPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const limit = 20

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)
    getUsers({ page, limit })
      .then((res) => {
        if (cancelled) return
        const mapped: User[] = (res.items || []).map((u) => ({
          id: u._id,
          name: u.name ?? "—",
          email: u.email ?? "—",
          role: (u.role as string) ?? "User",
          joinedDate: formatJoinedDate(u.createdAt),
          status: mapSubscriptionToStatus(u.subscriptionStatus),
          avatar: initials(u.name ?? "U"),
        }))
        setUsers(mapped)
      })
      .catch((err) => {
        if (!cancelled) setError(err instanceof Error ? err.message : "Failed to load users")
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [page])

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <div className="flex">
        <main className="flex-1">
          <UserManagementHeader />
          <div className="p-6 max-w-7xl mx-auto">
            {error && (
              <div className="mb-4 p-4 rounded-lg bg-red-50 text-red-700 text-sm">
                {error}
              </div>
            )}
            {loading ? (
              <div className="py-12 text-center text-muted-foreground">Loading users…</div>
            ) : (
              <UserTable
                users={users}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                filterStatus={filterStatus}
                setFilterStatus={setFilterStatus}
              />
            )}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
