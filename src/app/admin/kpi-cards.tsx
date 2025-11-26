import type React from "react"
import { Users, Activity, Target, CheckCircle, TrendingUp, TrendingDown } from "lucide-react"

interface KPICard {
  icon: React.ReactNode
  title: string
  value: string | number
  trend: number
  isPositive: boolean
}

const kpiData: KPICard[] = [
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Total Users",
    value: "2,458",
    trend: 12,
    isPositive: true,
  },
  {
    icon: <Activity className="w-6 h-6 text-primary" />,
    title: "Active Users Today",
    value: "1,829",
    trend: 8,
    isPositive: true,
  },
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: "Goals Created This Week",
    value: "342",
    trend: 5,
    isPositive: true,
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-primary" />,
    title: "Tasks Completed Today",
    value: "1,205",
    trend: -2,
    isPositive: false,
  },
]

export function KPICards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpiData.map((kpi, index) => (
        <div key={index} className="bg-white rounded-lg border border-border p-6 shadow-sm hover:shadow-md transition">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground font-medium">{kpi.title}</p>
              <p className="text-3xl font-bold text-foreground mt-2">{kpi.value}</p>
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
            </div>
            <div className="flex-shrink-0">{kpi.icon}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
