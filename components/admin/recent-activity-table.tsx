"use client"

import { CheckCircle, Clock, XCircle } from "lucide-react"

export interface ActivityItem {
  user: string
  activity: string
  time: string
  status: "completed" | "pending" | "failed"
}

const statusConfig = {
  completed: { icon: CheckCircle, bg: "bg-green-50", text: "text-green-700", label: "Completed" },
  pending: { icon: Clock, bg: "bg-yellow-50", text: "text-yellow-700", label: "Pending" },
  failed: { icon: XCircle, bg: "bg-red-50", text: "text-red-700", label: "Failed" },
}

function formatTimeAgo(iso: string): string {
  try {
    const d = new Date(iso)
    const now = new Date()
    const diffMs = now.getTime() - d.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMs / 3600000)
    const diffDays = Math.floor(diffMs / 86400000)
    if (diffMins < 60) return `${diffMins} min ago`
    if (diffHours < 24) return `${diffHours} hours ago`
    if (diffDays < 7) return `${diffDays} days ago`
    return d.toLocaleDateString()
  } catch {
    return iso
  }
}

interface RecentActivityTableProps {
  activityData?: ActivityItem[] | null
  loading?: boolean
}

export function RecentActivityTable({ activityData = [], loading }: RecentActivityTableProps) {
  const items = activityData ?? []

  return (
    <div className="bg-white rounded-lg border border-border shadow-sm overflow-hidden">
      <div className="p-6 border-b border-border">
        <h2 className="text-lg font-semibold text-foreground">Recent Activity</h2>
      </div>
      {loading && !items.length ? (
        <div className="p-12 text-center text-muted-foreground">Loading…</div>
      ) : (
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">User</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Activity</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Time</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              const config = statusConfig[item.status]
              const StatusIcon = config.icon
              return (
                <tr key={index} className="border-b border-border hover:bg-muted transition">
                  <td className="px-6 py-4 text-sm text-foreground font-medium">{item.user}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{item.activity}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{item.time}</td>
                  <td className="px-6 py-4">
                    <div className={`flex items-center gap-2 px-3 py-1 rounded-full w-fit ${config.bg}`}>
                      <StatusIcon size={16} className={config.text} />
                      <span className={`text-sm font-medium ${config.text}`}>{config.label}</span>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      )}
      {!loading && items.length === 0 && (
        <div className="p-12 text-center text-muted-foreground">No recent activity.</div>
      )}
    </div>
  )
}
