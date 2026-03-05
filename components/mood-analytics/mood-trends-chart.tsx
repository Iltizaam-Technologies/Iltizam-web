"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface MoodTrendsChartProps {
  moodData?: Array<{ date: string; mood: number }>
  loading?: boolean
}

export function MoodTrendsChart({ moodData = [], loading }: MoodTrendsChartProps) {
  const data = moodData.length ? moodData.map((d) => ({ date: d.date, mood: d.mood })) : []

  return (
    <div className="bg-white rounded-lg border border-border p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-foreground mb-4">Mood Trends (Last 30 Days)</h2>
      {loading && !data.length ? (
        <div className="h-[300px] flex items-center justify-center text-muted-foreground">Loading…</div>
      ) : (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
          <XAxis dataKey="date" stroke="#999" style={{ fontSize: "12px" }} />
          <YAxis domain={[0, 5]} ticks={[1, 2, 3, 4, 5]} stroke="#999" style={{ fontSize: "12px" }} />
          <Tooltip
            contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e5e5", borderRadius: "8px" }}
            cursor={{ stroke: "#bb6e27", strokeWidth: 2 }}
          />
          <Line type="monotone" dataKey="mood" stroke="#bb6e27" strokeWidth={3} dot={{ fill: "#bb6e27", r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
      )}
      <div className="mt-4 flex items-center justify-center gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span>😔 Low (1-2)</span>
        </div>
        <div className="flex items-center gap-2">
          <span>😐 Neutral (2-3)</span>
        </div>
        <div className="flex items-center gap-2">
          <span>🙂 Good (3-4)</span>
        </div>
        <div className="flex items-center gap-2">
          <span>😄 Very Happy (4-5)</span>
        </div>
      </div>
    </div>
  )
}
