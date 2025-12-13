"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const moodData = [
  { date: "Dec 1", mood: 3.2 },
  { date: "Dec 4", mood: 3.5 },
  { date: "Dec 7", mood: 3.8 },
  { date: "Dec 10", mood: 3.4 },
  { date: "Dec 13", mood: 4.1 },
  { date: "Dec 16", mood: 3.9 },
  { date: "Dec 19", mood: 4.2 },
  { date: "Dec 22", mood: 3.7 },
  { date: "Dec 25", mood: 4.5 },
  { date: "Dec 28", mood: 4.0 },
  { date: "Dec 31", mood: 3.8 },
]

export function MoodTrendsChart() {
  return (
    <div className="bg-white rounded-lg border border-border p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-foreground mb-4">Mood Trends (Last 30 Days)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={moodData}>
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
