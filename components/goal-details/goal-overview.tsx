"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge, CalendarDays, TrendingUp } from "lucide-react"

export interface GoalOverviewData {
  title: string
  ownerName: string
  ownerEmail: string
  ownerAvatar: string
  type: string
  status: string
  progress: number
  startDate: string
  endDate: string
  description: string
}

interface GoalOverviewProps {
  goal?: GoalOverviewData | null
}

const goalTypeConfig = {
    "Long-term": { bg: "bg-pink-50", text: "text-pink-700" },
  Monthly: { bg: "bg-orange-50", text: "text-orange-700" },
  Weekly: { bg: "bg-purple-50", text: "text-purple-700" },
  Daily: { bg: "bg-blue-50", text: "text-blue-700" },
  health: { bg: "bg-blue-50", text: "text-blue-700" },
  career: { bg: "bg-purple-50", text: "text-purple-700" },
  spiritual: { bg: "bg-amber-50", text: "text-amber-700" },
  financial: { bg: "bg-green-50", text: "text-green-700" },
  personal: { bg: "bg-pink-50", text: "text-pink-700" },
}

const statusConfig = {
  "In Progress": { bg: "bg-amber-50", text: "text-amber-700" },
  Completed: { bg: "bg-green-50", text: "text-green-700" },
  Archived: { bg: "bg-gray-50", text: "text-gray-700" },
}

export function GoalOverview({ goal: goalProp }: GoalOverviewProps) {
  const goal = goalProp ?? {
    title: "—",
    ownerName: "—",
    ownerEmail: "—",
    ownerAvatar: "—",
    type: "—",
    status: "In Progress",
    progress: 0,
    startDate: "—",
    endDate: "—",
    description: "No description.",
  }
  const typeConfig = goalTypeConfig[goal.type as keyof typeof goalTypeConfig] ?? { bg: "bg-muted", text: "text-muted-foreground" }
  const statusBadge = statusConfig[goal.status as keyof typeof statusConfig] ?? statusConfig["In Progress"]

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">{goal.title}</h2>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Badge className={`${typeConfig.bg} ${typeConfig.text} hover:${typeConfig.bg}`}>{goal.type}</Badge>
            <Badge className={`${statusBadge.bg} ${statusBadge.text} hover:${statusBadge.bg}`}>{goal.status}</Badge>
          </div>
        </div>

        <div className="space-y-4 mb-6 border-b border-border pb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="font-semibold text-primary text-sm">{goal.ownerAvatar}</span>
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">Owner</p>
              <p className="text-sm font-semibold text-foreground">{goal.ownerName}</p>
              <p className="text-xs text-muted-foreground">{goal.ownerEmail}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                <TrendingUp size={16} className="text-primary" />
                Progress
              </label>
              <span className="text-sm font-bold text-primary">{goal.progress}%</span>
            </div>
            <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-primary" style={{ width: `${goal.progress}%` }}></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <CalendarDays size={16} className="text-muted-foreground" />
                <p className="text-xs text-muted-foreground font-medium">Start Date</p>
              </div>
              <p className="text-sm font-semibold text-foreground">{goal.startDate}</p>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <CalendarDays size={16} className="text-muted-foreground" />
                <p className="text-xs text-muted-foreground font-medium">End Date</p>
              </div>
              <p className="text-sm font-semibold text-foreground">{goal.endDate}</p>
            </div>
          </div>
        </div>

        <div className="mb-6 border-t border-border pt-6">
          <h3 className="text-sm font-semibold text-foreground mb-3">Description</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{goal.description}</p>
        </div>

        <div className="flex gap-3 pt-6 border-t border-border">
          <button className="flex-1 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition">
            Mark as Completed
          </button>
          <button className="flex-1 px-4 py-2.5 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition">
            Archive Goal
          </button>
        </div>
      </CardContent>
    </Card>
  )
}
