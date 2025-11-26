"use client"

import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const userGrowthData = [
  { month: "Jan", users: 400 },
  { month: "Feb", users: 520 },
  { month: "Mar", users: 680 },
  { month: "Apr", users: 890 },
  { month: "May", users: 1200 },
  { month: "Jun", users: 1450 },
  { month: "Jul", users: 2458 },
]

const weeklyActivityData = [
  { day: "Mon", activity: 240 },
  { day: "Tue", activity: 320 },
  { day: "Wed", activity: 280 },
  { day: "Thu", activity: 410 },
  { day: "Fri", activity: 580 },
  { day: "Sat", activity: 320 },
  { day: "Sun", activity: 280 },
]

export function ChartsSection() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-border p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4">User Growth Chart</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={userGrowthData}>
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
      </div>

      <div className="bg-white rounded-lg border border-border p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4">Weekly Activity Chart</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={weeklyActivityData}>
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
      </div>
    </div>
  )
}
