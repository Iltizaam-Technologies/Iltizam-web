"use client"

import { Edit, Trash2 } from "lucide-react"

const scripts = [
  {
    trigger: "Missed task",
    preview: "It's okay to stumble. What matters is getting back on track. Let's try again.",
    tone: "Gentle & Calm",
    channel: "In-app",
  },
  {
    trigger: "Low mood",
    preview: "You're doing better than you think. Take a deep breath and focus on one small win today.",
    tone: "Gentle & Calm",
    channel: "WhatsApp",
  },
  {
    trigger: "Focus start",
    preview: "Time to lock in. You've got this. Let's eliminate distractions and get it done.",
    tone: "Firm & Disciplined",
    channel: "In-app",
  },
  {
    trigger: "Goal completion",
    preview: "Amazing work! You just crushed that goal. Keep this momentum going!",
    tone: "Cheerful & Friendly",
    channel: "In-app",
  },
]

export function MotivationalScriptsTab() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">Used in nudges, Focus Mode, and WhatsApp reminders</p>
        <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition">
          Add New Script
        </button>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Trigger</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Script Preview</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Tone</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Channel</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {scripts.map((item, index) => (
              <tr key={index} className="border-b border-border hover:bg-muted/50 transition">
                <td className="py-3 px-4 text-sm text-foreground font-medium">{item.trigger}</td>
                <td className="py-3 px-4 text-sm text-muted-foreground max-w-md truncate">{item.preview}</td>
                <td className="py-3 px-4 text-sm text-foreground">{item.tone}</td>
                <td className="py-3 px-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      item.channel === "In-app" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"
                    }`}
                  >
                    {item.channel}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-muted rounded transition">
                      <Edit size={16} className="text-muted-foreground" />
                    </button>
                    <button className="p-2 hover:bg-red-50 rounded transition">
                      <Trash2 size={16} className="text-red-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-3">
        {scripts.map((item, index) => (
          <div key={index} className="bg-white border border-border rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">{item.trigger}</span>
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  item.channel === "In-app" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"
                }`}
              >
                {item.channel}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{item.preview}</p>
            <div className="flex items-center justify-between pt-2 border-t border-border">
              <span className="text-xs text-muted-foreground">{item.tone}</span>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-muted rounded transition">
                  <Edit size={16} className="text-muted-foreground" />
                </button>
                <button className="p-2 hover:bg-red-50 rounded transition">
                  <Trash2 size={16} className="text-red-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
