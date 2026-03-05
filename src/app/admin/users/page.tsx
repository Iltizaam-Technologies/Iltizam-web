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

function mapStatusToApi(ui: string): string | undefined {
  if (ui === "Active") return "active"
  if (ui === "Inactive") return "free"
  if (ui === "Suspended") return "canceled"
  return undefined
}

export default function UserManagementPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterRole, setFilterRole] = useState("all")
  const [users, setUsers] = useState<User[]>([])
  const [pagination, setPagination] = useState({ page: 1, totalPages: 1 })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const limit = 20

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)
    getUsers({
      page: pagination.page,
      limit,
      role: filterRole === "all" ? undefined : filterRole,
      subscriptionStatus: mapStatusToApi(filterStatus),
    })
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
        setPagination((prev) => ({
          ...prev,
          totalPages: res.pagination?.totalPages ?? 1,
        }))
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
  }, [pagination.page, filterStatus, filterRole])

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
            {loading && !users.length ? (
              <div className="py-12 text-center text-muted-foreground">Loading users…</div>
            ) : (
              <UserTable
                users={users}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                filterStatus={filterStatus}
                setFilterStatus={(v) => { setPagination((p) => ({ ...p, page: 1 })); setFilterStatus(v) }}
                filterRole={filterRole}
                setFilterRole={(v) => { setPagination((p) => ({ ...p, page: 1 })); setFilterRole(v) }}
                pagination={{
                  page: pagination.page,
                  totalPages: pagination.totalPages,
                  onPageChange: (p) => setPagination((prev) => ({ ...prev, page: p })),
                }}
                loading={loading}
              />
            )}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
