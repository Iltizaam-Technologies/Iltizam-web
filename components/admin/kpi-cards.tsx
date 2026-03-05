import type React from "react"
import { Users, Activity, Target, CheckCircle, TrendingUp, TrendingDown } from "lucide-react"

export interface AdminStats {
  users: { total: number; active: number; paying?: number; activeSubscriptions?: number }
  content: { goals: number; habits: number; journals: number }
  community?: { posts: number; activePosts?: number; flaggedPosts?: number }
}

interface KPICard {
  icon: React.ReactNode
  title: string
  value: string | number
  trend: number
  isPositive: boolean
}

function buildKpiData(stats: AdminStats | null): KPICard[] {
  if (!stats) {
    return [
      { icon: <Users className="w-6 h-6 text-primary" />, title: "Total Users", value: "—", trend: 0, isPositive: true },
      { icon: <Activity className="w-6 h-6 text-primary" />, title: "Active Users", value: "—", trend: 0, isPositive: true },
      { icon: <Target className="w-6 h-6 text-primary" />, title: "Goals", value: "—", trend: 0, isPositive: true },
      { icon: <CheckCircle className="w-6 h-6 text-primary" />, title: "Habits", value: "—", trend: 0, isPositive: true },
    ]
  }
  return [
    { icon: <Users className="w-6 h-6 text-primary" />, title: "Total Users", value: stats.users.total.toLocaleString(), trend: 0, isPositive: true },
    { icon: <Activity className="w-6 h-6 text-primary" />, title: "Active Users", value: stats.users.active.toLocaleString(), trend: 0, isPositive: true },
    { icon: <Target className="w-6 h-6 text-primary" />, title: "Goals", value: stats.content.goals.toLocaleString(), trend: 0, isPositive: true },
    { icon: <CheckCircle className="w-6 h-6 text-primary" />, title: "Habits", value: stats.content.habits.toLocaleString(), trend: 0, isPositive: true },
  ]
}

export function KPICards({ stats }: { stats: AdminStats | null }) {
  const kpiData = buildKpiData(stats)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpiData.map((kpi, index) => (
        <div key={index} className="bg-white rounded-lg border border-border p-6 shadow-sm hover:shadow-md transition">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground font-medium">{kpi.title}</p>
              <p className="text-3xl font-bold text-foreground mt-2">{kpi.value}</p>
              {kpi.trend !== 0 && (
                <div className="flex items-center gap-1 mt-3">
                  {kpi.isPositive ? (
                    <TrendingUp size={16} className="text-green-600" />
                  ) : (
                    <TrendingDown size={16} className="text-red-600" />
                  )}
                  <span className={`text-sm font-medium ${kpi.isPositive ? "text-green-600" : "text-red-600"}`}>
                    {kpi.isPositive ? "+" : ""}
                    {kpi.trend}%
                  </span>
                </div>
              )}
            </div>
            <div className="flex-shrink-0">{kpi.icon}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
