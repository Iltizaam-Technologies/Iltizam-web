"use client"

import { useState } from "react"
import { Shield } from "lucide-react"

export function NotificationRules() {
  const [rules, setRules] = useState({
    weekdaysOnly: true,
    skipLowMood: true,
    delayFocusMode: true,
    respectQuietHours: true,
    quietStart: "22:00",
    quietEnd: "06:00",
  })

  const toggleRule = (key: keyof typeof rules) => {
    setRules((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="bg-white rounded-lg border border-border shadow-sm overflow-hidden">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <Shield className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Notification Rules</h2>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between py-3 border-b border-border">
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">Send reminders only on weekdays</p>
            <p className="text-xs text-muted-foreground mt-1">Skip Saturday and Sunday</p>
          </div>
          <button
            onClick={() => toggleRule("weekdaysOnly")}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
              rules.weekdaysOnly ? "bg-primary" : "bg-muted"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                rules.weekdaysOnly ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between py-3 border-b border-border">
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">Skip messages when user mood is "Low"</p>
            <p className="text-xs text-muted-foreground mt-1">Avoid overwhelming users during difficult times</p>
          </div>
          <button
            onClick={() => toggleRule("skipLowMood")}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
              rules.skipLowMood ? "bg-primary" : "bg-muted"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                rules.skipLowMood ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between py-3 border-b border-border">
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">Delay message if user is in Focus Mode</p>
            <p className="text-xs text-muted-foreground mt-1">Queue notifications until focus session ends</p>
          </div>
          <button
            onClick={() => toggleRule("delayFocusMode")}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
              rules.delayFocusMode ? "bg-primary" : "bg-muted"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                rules.delayFocusMode ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between py-3 border-b border-border">
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">Respect user quiet hours</p>
            <p className="text-xs text-muted-foreground mt-1">No messages during sleep time</p>
          </div>
          <button
            onClick={() => toggleRule("respectQuietHours")}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
              rules.respectQuietHours ? "bg-primary" : "bg-muted"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                rules.respectQuietHours ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>

        <div className="pt-3">
          <p className="text-sm font-medium text-foreground mb-3">Quiet Hours</p>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <label className="block text-xs text-muted-foreground mb-2">Start Time</label>
              <input
                type="time"
                value={rules.quietStart}
                onChange={(e) => setRules({ ...rules, quietStart: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div className="flex-1">
              <label className="block text-xs text-muted-foreground mb-2">End Time</label>
              <input
                type="time"
                value={rules.quietEnd}
                onChange={(e) => setRules({ ...rules, quietEnd: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
