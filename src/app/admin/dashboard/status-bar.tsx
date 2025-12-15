"use client"

import { useState } from "react"
import { CheckCircle, Power, MessageSquare } from "lucide-react"

export function StatusBar() {
  const [isEnabled, setIsEnabled] = useState(true)
  const [dailyLimit, setDailyLimit] = useState(3)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-white rounded-lg border border-border p-6 shadow-sm hover:shadow-md transition">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm text-muted-foreground font-medium">WhatsApp Integration Status</p>
            <div className="mt-3">
              <span className="inline-flex px-3 py-1 rounded-full text-sm font-semibold bg-green-50 text-green-700 items-center gap-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                Connected
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-3">Provider: Twilio WhatsApp API</p>
            <button className="mt-3 text-sm text-primary font-medium hover:underline">Reconnect</button>
          </div>
          <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
        </div>
      </div>

      <div className="bg-white rounded-lg border border-border p-6 shadow-sm hover:shadow-md transition">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm text-muted-foreground font-medium">Global WhatsApp Toggle</p>
            <div className="mt-3 flex items-center gap-3">
              <button
                onClick={() => setIsEnabled(!isEnabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                  isEnabled ? "bg-primary" : "bg-muted"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    isEnabled ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span className="text-sm font-medium text-foreground">{isEnabled ? "Enabled" : "Disabled"}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-3">Turn WhatsApp notifications on or off for all users</p>
          </div>
          <Power className="w-6 h-6 text-primary flex-shrink-0" />
        </div>
      </div>

      <div className="bg-white rounded-lg border border-border p-6 shadow-sm hover:shadow-md transition">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm text-muted-foreground font-medium">Daily Message Limit</p>
            <input
              type="number"
              min="1"
              max="10"
              value={dailyLimit}
              onChange={(e) => setDailyLimit(Number(e.target.value))}
              className="mt-3 w-20 px-3 py-2 border border-border rounded-lg bg-background text-foreground font-bold text-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <p className="text-xs text-muted-foreground mt-3">Max WhatsApp messages per user per day</p>
          </div>
          <MessageSquare className="w-6 h-6 text-primary flex-shrink-0" />
        </div>
      </div>
    </div>
  )
}
