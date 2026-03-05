"use client"

import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export interface ChartsSectionProps {
  userGrowthData?: Array<{ month: string; users: number }>
  weeklyActivityData?: Array<{ day: string; activity: number }>
  loading?: boolean
}

const emptyGrowth = [] as Array<{ month: string; users: number }>
const emptyActivity = [] as Array<{ day: string; activity: number }>

export function ChartsSection({ userGrowthData = emptyGrowth, weeklyActivityData = emptyActivity, loading }: ChartsSectionProps) {
  const growth = userGrowthData.length ? userGrowthData : emptyGrowth
  const activity = weeklyActivityData.length ? weeklyActivityData : emptyActivity

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-border p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4">User Growth Chart</h2>
        {loading && !growth.length ? (
          <div className="h-[300px] flex items-center justify-center text-muted-foreground">Loading…</div>
        ) : (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={growth}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
            <XAxis dataKey="month" stroke="#999" />
            <YAxis stroke="#999" />
            <Tooltip
              contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e5e5", borderRadius: "8px" }}
              cursor={{ stroke: "#bb6e27", strokeWidth: 2 }}
            />
            <Line type="monotone" dataKey="users" stroke="#bb6e27" strokeWidth={3} dot={{ fill: "#bb6e27", r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
        )}
      </div>

      <div className="bg-white rounded-lg border border-border p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4">Weekly Activity Chart</h2>
        {loading && !activity.length ? (
          <div className="h-[300px] flex items-center justify-center text-muted-foreground">Loading…</div>
        ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={activity}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
            <XAxis dataKey="day" stroke="#999" />
            <YAxis stroke="#999" />
            <Tooltip
              contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e5e5", borderRadius: "8px" }}
              cursor={{ fill: "rgba(187, 110, 39, 0.1)" }}
            />
            <Bar dataKey="activity" fill="#bb6e27" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        )}
      </div>
    </div>
  )
}
