"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, MoreVertical, Eye, Archive } from "lucide-react"

export interface Goal {
  id: string
  title: string
  ownerName: string
  goalType: string
  progress: number
  status: "In Progress" | "Completed" | "Archived"
  createdDate: string
}

const goalTypeConfig: Record<string, string> = {
  Daily: "bg-blue-50 text-blue-700",
  Weekly: "bg-purple-50 text-purple-700",
  Monthly: "bg-orange-50 text-orange-700",
  "Long-term": "bg-pink-50 text-pink-700",
  health: "bg-blue-50 text-blue-700",
  career: "bg-purple-50 text-purple-700",
  spiritual: "bg-amber-50 text-amber-700",
  financial: "bg-green-50 text-green-700",
  personal: "bg-pink-50 text-pink-700",
}

const statusConfig = {
  "In Progress": { bg: "bg-amber-50", text: "text-amber-700", label: "In Progress" },
  Completed: { bg: "bg-green-50", text: "text-green-700", label: "Completed" },
  Archived: { bg: "bg-gray-50", text: "text-gray-700", label: "Archived" },
}

interface GoalsTableProps {
  goals: Goal[]
  searchQuery: string
  setSearchQuery: (query: string) => void
  goalType: string
  setGoalType: (type: string) => void
  goalStatus: string
  setGoalStatus: (status: string) => void
  pagination?: { page: number; totalPages: number; onPageChange: (page: number) => void }
  loading?: boolean
}

export function GoalsTable({
  goals,
  searchQuery,
  setSearchQuery,
  goalType,
  setGoalType,
  goalStatus,
  setGoalStatus,
  pagination,
  loading,
}: GoalsTableProps) {
  const [expandedRow, setExpandedRow] = useState<string | null>(null)
  const [localPage, setLocalPage] = useState(1)
  const itemsPerPage = 10
  const useServerPagination = pagination && pagination.totalPages > 0

  const filteredGoals = goals.filter((goal) => {
    const matchesSearch =
      goal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      goal.ownerName.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = goalType === "all" || goal.goalType === goalType
    const matchesStatus = goalStatus === "all" || goal.status === goalStatus
    return matchesSearch && matchesType && matchesStatus
  })

  const totalPages = useServerPagination ? pagination!.totalPages : Math.ceil(filteredGoals.length / itemsPerPage) || 1
  const currentPage = useServerPagination ? pagination!.page : localPage
  const onPageChange = useServerPagination ? pagination!.onPageChange : setLocalPage
  const startIdx = (currentPage - 1) * itemsPerPage
  const paginatedGoals = useServerPagination ? filteredGoals : filteredGoals.slice(startIdx, startIdx + itemsPerPage)

  const handleReset = () => {
    setSearchQuery("")
    setGoalType("all")
    setGoalStatus("all")
    if (useServerPagination) pagination!.onPageChange(1)
    else setLocalPage(1)
  }

  return (
    <div className="bg-white rounded-lg border border-border shadow-sm overflow-hidden">
      {/* Header with Search and Filters */}
      <div className="p-6 border-b border-border">
        <div className="flex flex-col gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              placeholder="Search goals or users…"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                onPageChange(1)
              }}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            <select
              value={goalType}
              onChange={(e) => {
                setGoalType(e.target.value)
                onPageChange(1)
              }}
              className="px-4 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="all">All Types</option>
              <option value="health">Health</option>
              <option value="career">Career</option>
              <option value="spiritual">Spiritual</option>
              <option value="financial">Financial</option>
              <option value="personal">Personal</option>
            </select>

            <select
              value={goalStatus}
              onChange={(e) => {
                setGoalStatus(e.target.value)
                onPageChange(1)
              }}
              className="px-4 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="Archived">Archived</option>
            </select>

            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition">
              Apply Filters
            </button>

            <button
              onClick={handleReset}
              className="px-4 py-2 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-muted transition"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Goal Title</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Owner Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Type</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Progress</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Created</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {(loading ? [] : paginatedGoals).map((goal) => {
              const statusBadge = statusConfig[goal.status as keyof typeof statusConfig]
              const typeBadge = goalTypeConfig[goal.goalType] || "bg-muted text-muted-foreground"
              return (
                <tr key={goal.id} className="border-b border-border hover:bg-muted transition">
                  <td className="px-6 py-4 text-sm font-medium text-foreground">{goal.title}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{goal.ownerName}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${typeBadge}`}>
                      {goal.goalType}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-24">
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden mb-1">
                        <div className="h-full bg-primary" style={{ width: `${goal.progress}%` }}></div>
                      </div>
                      <span className="text-xs text-muted-foreground font-medium">{goal.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${statusBadge.bg} ${statusBadge.text}`}
                    >
                      {statusBadge.label}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{goal.createdDate}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/admin/goals/${goal.id}`}
                        className="p-2 hover:bg-muted rounded-lg transition text-muted-foreground hover:text-foreground inline-flex"
                      >
                        <Eye size={18} />
                      </Link>
                      <button className="p-2 hover:bg-muted rounded-lg transition text-muted-foreground hover:text-foreground">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4 p-6">
        {(loading ? [] : paginatedGoals).map((goal) => {
          const statusBadge = statusConfig[goal.status as keyof typeof statusConfig]
          const typeBadge = goalTypeConfig[goal.goalType] || "bg-muted text-muted-foreground"
          const isExpanded = expandedRow === goal.id

          return (
            <div key={goal.id} className="border border-border rounded-lg p-4 bg-muted/50">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{goal.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{goal.ownerName}</p>
                </div>
                <span
                  className={`inline-flex px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 ml-2 ${statusBadge.bg} ${statusBadge.text}`}
                >
                  {statusBadge.label}
                </span>
              </div>

              <div className="mb-3">
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden mb-1">
                  <div className="h-full bg-primary" style={{ width: `${goal.progress}%` }}></div>
                </div>
                <p className="text-xs text-muted-foreground">{goal.progress}% complete</p>
              </div>

              {isExpanded && (
                <div className="border-t border-border pt-3 mt-3 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type:</span>
                    <span className={`inline-flex px-2 py-1 rounded text-xs font-medium ${typeBadge}`}>
                      {goal.goalType}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Created:</span>
                    <span className="text-foreground font-medium">{goal.createdDate}</span>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Link
                      href={`/admin/goals/${goal.id}`}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg text-xs font-medium hover:bg-primary/90 transition"
                    >
                      <Eye size={14} />
                      View
                    </Link>
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-border rounded-lg text-xs font-medium text-foreground hover:bg-muted transition">
                      <Archive size={14} />
                      Archive
                    </button>
                  </div>
                </div>
              )}

              <button
                onClick={() => setExpandedRow(isExpanded ? null : goal.id)}
                className="w-full text-xs text-primary font-medium mt-2 py-2 hover:bg-muted rounded transition"
              >
                {isExpanded ? "Show Less" : "Show More"}
              </button>
            </div>
          )
        })}
      </div>

      {/* Empty State */}
      {!loading && paginatedGoals.length === 0 && (
        <div className="p-12 text-center">
          <p className="text-muted-foreground">No goals found matching your criteria.</p>
        </div>
      )}

      {loading && (
        <div className="p-12 text-center">
          <p className="text-muted-foreground">Loading goals…</p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="p-6 border-t border-border flex items-center justify-center gap-2">
          <button
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-3 py-2 border border-border rounded-lg text-sm font-medium text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Previous
          </button>

          {Array.from({ length: Math.min(totalPages, 10) }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                page === currentPage
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-foreground hover:bg-muted"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-2 border border-border rounded-lg text-sm font-medium text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}
