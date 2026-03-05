"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, MoreVertical, Eye, Lock } from "lucide-react"
import { UserAvatar } from "./user-avatar"

export interface User {
  id: string
  name: string
  email: string
  role: "User" | "Student" | "Premium" | string
  joinedDate: string
  status: "Active" | "Inactive" | "Suspended"
  avatar: string
}

const statusConfig = {
  Active: { bg: "bg-green-50", text: "text-green-700", label: "Active" },
  Inactive: { bg: "bg-yellow-50", text: "text-yellow-700", label: "Inactive" },
  Suspended: { bg: "bg-red-50", text: "text-red-700", label: "Suspended" },
}

interface UserTableProps {
  users: User[]
  searchQuery: string
  setSearchQuery: (query: string) => void
  filterStatus: string
  setFilterStatus: (status: string) => void
  filterRole?: string
  setFilterRole?: (role: string) => void
  pagination?: { page: number; totalPages: number; onPageChange: (page: number) => void }
  loading?: boolean
}

export function UserTable({ users, searchQuery, setSearchQuery, filterStatus, setFilterStatus, filterRole, setFilterRole, pagination, loading }: UserTableProps) {
  const [expandedRow, setExpandedRow] = useState<string | null>(null)

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = filterStatus === "all" || user.status === filterStatus
    return matchesSearch && matchesFilter
  })

  return (
    <div className="bg-white rounded-lg border border-border shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              placeholder="Search users…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          {setFilterRole && (
            <select
              value={filterRole ?? "all"}
              onChange={(e) => setFilterRole(e.target.value)}
              className="px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="all">All Roles</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="super_admin">Super Admin</option>
            </select>
          )}
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="all">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Suspended">Suspended</option>
          </select>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Avatar</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Email</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Role</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Joined Date</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {(loading ? [] : filteredUsers).map((user) => {
              const config = statusConfig[user.status]
              return (
                <tr key={user.id} className="border-b border-border hover:bg-muted transition">
                  <td className="px-6 py-4">
                    <UserAvatar initials={user.avatar} />
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-foreground">{user.name}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{user.email}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{user.role}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{user.joinedDate}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${config.bg} ${config.text}`}
                    >
                      {config.label}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex items-center gap-2">
                    <Link
                      href={`/admin/users/${user.id}`}
                      className="p-2 hover:bg-muted rounded-lg transition inline-flex items-center gap-1 text-sm text-primary font-medium"
                    >
                      <Eye size={16} />
                      View
                    </Link>
                    <button className="p-2 hover:bg-muted rounded-lg transition">
                      <MoreVertical size={18} className="text-muted-foreground" />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4 p-6">
        {filteredUsers.map((user) => {
          const config = statusConfig[user.status]
          const isExpanded = expandedRow === user.id
          return (
            <div key={user.id} className="border border-border rounded-lg p-4 bg-muted/50">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <UserAvatar initials={user.avatar} />
                  <div>
                    <p className="font-semibold text-foreground">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                </div>
                <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
                  {config.label}
                </span>
              </div>

              {isExpanded && (
                <div className="border-t border-border pt-3 mt-3 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Role:</span>
                    <span className="text-foreground font-medium">{user.role}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Joined:</span>
                    <span className="text-foreground font-medium">{user.joinedDate}</span>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Link
                      href={`/admin/users/${user.id}`}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg text-xs font-medium hover:bg-primary/90 transition"
                    >
                      <Eye size={14} />
                      View
                    </Link>
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-border rounded-lg text-xs font-medium text-foreground hover:bg-muted transition">
                      <Lock size={14} />
                      Deactivate
                    </button>
                  </div>
                </div>
              )}

              <button
                onClick={() => setExpandedRow(isExpanded ? null : user.id)}
                className="w-full text-xs text-primary font-medium mt-2 py-2 hover:bg-muted rounded transition"
              >
                {isExpanded ? "Show Less" : "Show More"}
              </button>
            </div>
          )
        })}
      </div>

      {/* Empty State */}
      {!loading && filteredUsers.length === 0 && (
        <div className="p-12 text-center">
          <p className="text-muted-foreground">No users found matching your criteria.</p>
        </div>
      )}

      {/* Pagination */}
      {pagination && pagination.totalPages > 1 && (
        <div className="p-6 border-t border-border flex items-center justify-center gap-2">
          <button
            onClick={() => pagination.onPageChange(Math.max(1, pagination.page - 1))}
            disabled={pagination.page === 1}
            className="px-3 py-2 border border-border rounded-lg text-sm font-medium text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Previous
          </button>
          <span className="px-3 py-2 text-sm text-muted-foreground">
            Page {pagination.page} of {pagination.totalPages}
          </span>
          <button
            onClick={() => pagination.onPageChange(Math.min(pagination.totalPages, pagination.page + 1))}
            disabled={pagination.page === pagination.totalPages}
            className="px-3 py-2 border border-border rounded-lg text-sm font-medium text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}
