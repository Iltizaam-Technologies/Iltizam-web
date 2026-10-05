"use client"

import { useState } from "react"
import { Eye, Send } from "lucide-react"

export function MessagePreview() {
  const [config, setConfig] = useState({
    notificationType: "daily-goal",
    tone: "gentle",
    timeOfDay: "morning",
  })

  const messageTemplates: Record<string, string> = {
    "daily-goal-gentle-morning":
      "Good morning! 🌅\n\nIt's a beautiful day to work on your goals. Remember: small steps lead to big achievements.\n\n💪 Let's make today count!",
    "daily-goal-firm-morning":
      "Rise and shine! ⏰\n\nYour goals are waiting. Time to take action and show what you're made of.\n\n🎯 No excuses, just results.",
    "daily-goal-spiritual-morning":
      "As-salamu alaykum 🌙\n\nAllah's blessings are renewed each morning. Let's use this day to fulfill our commitments with sincerity.\n\n🤲 May your efforts be rewarded.",
  }

  const getPreviewMessage = () => {
    const key = `${config.notificationType}-${config.tone}-${config.timeOfDay}`
    return messageTemplates[key] || messageTemplates["daily-goal-gentle-morning"]
  }

  return (
    <div className="bg-white rounded-lg border border-border shadow-sm overflow-hidden">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <Eye className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Message Preview</h2>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Select Notification Type</label>
              <select
                value={config.notificationType}
                onChange={(e) => setConfig({ ...config, notificationType: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="daily-goal">Daily Goal Reminder</option>
                <option value="missed-task">Missed Task Nudge</option>
                <option value="motivation">Motivation Boost</option>
                <option value="focus-mode">Focus Mode Start</option>
                <option value="weekly-summary">Weekly Summary</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Select Tone</label>
              <select
                value={config.tone}
                onChange={(e) => setConfig({ ...config, tone: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="gentle">Gentle</option>
                <option value="firm">Firm</option>
                <option value="spiritual">Spiritual</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Time of Day</label>
              <select
                value={config.timeOfDay}
                onChange={(e) => setConfig({ ...config, timeOfDay: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">WhatsApp Preview</label>
            <div className="bg-[#E5DDD5] rounded-lg p-4 min-h-[300px] relative">
              <div className="absolute top-0 left-0 right-0 h-20 bg-[#075E54]"></div>
              <div className="relative z-10 pt-14">
                <div className="bg-white rounded-lg shadow-sm p-4 max-w-[85%]">
                  <p className="text-xs text-muted-foreground font-medium mb-2">ILTIZAAM</p>
                  <p className="text-sm text-foreground whitespace-pre-line leading-relaxed">{getPreviewMessage()}</p>
                  <p className="text-xs text-muted-foreground text-right mt-3">8:00 AM</p>
                </div>
              </div>
            </div>
            <button className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition">
              <Send size={16} />
              Send Test Message
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
