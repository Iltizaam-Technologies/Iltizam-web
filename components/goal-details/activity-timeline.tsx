"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Goal, Plus, CheckCircle2 } from "lucide-react"

export function ActivityTimeline() {
  const activities = [
    { id: 1, type: "created", text: "Goal created", timestamp: "Nov 1, 2024", icon: Goal },
    { id: 2, type: "updated", text: "Tasks added", timestamp: "Nov 3, 2024", icon: Plus },
    { id: 3, type: "progress", text: "Progress updated to 25%", timestamp: "Nov 15, 2024", icon: CheckCircle2 },
    { id: 4, type: "progress", text: "Progress updated to 45%", timestamp: "Nov 28, 2024", icon: CheckCircle2 },
  ]

  const iconConfig = {
    created: { bg: "bg-blue-50", text: "text-blue-600" },
    updated: { bg: "bg-purple-50", text: "text-purple-600" },
    progress: { bg: "bg-green-50", text: "text-green-600" },
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Activity Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => {
            const config = iconConfig[activity.type as keyof typeof iconConfig]
            const IconComponent = activity.icon
            return (
              <div key={activity.id}>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${config.bg}`}>
                      <IconComponent size={16} className={config.text} />
                    </div>
                    {index < activities.length - 1 && <div className="w-0.5 h-12 bg-border mt-2" />}
                  </div>
                  <div className="pb-4">
                    <p className="text-sm font-medium text-foreground">{activity.text}</p>
                    <p className="text-xs text-muted-foreground mt-1">{activity.timestamp}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
