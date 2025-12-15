"use client"

import { useState } from "react"
import { Bell, Edit } from "lucide-react"

interface NotificationType {
  id: string
  name: string
  description: string
  channel: string
  status: "Enabled" | "Disabled"
}

const notificationTypes: NotificationType[] = [
  {
    id: "1",
    name: "Daily Goal Reminder",
    description: "Reminds users to complete their daily goals",
    channel: "WhatsApp",
    status: "Enabled",
  },
  {
    id: "2",
    name: "Missed Task Nudge",
    description: "Notifies users when tasks are overdue",
    channel: "WhatsApp",
    status: "Enabled",
  },
  {
    id: "3",
    name: "Motivation Boost",
    description: "Sends inspirational messages to keep users motivated",
    channel: "WhatsApp",
    status: "Enabled",
  },
  {
    id: "4",
    name: "Focus Mode Start",
    description: "Confirms when focus mode is activated",
    channel: "WhatsApp",
    status: "Disabled",
  },
  {
    id: "5",
    name: "Weekly Summary",
    description: "Weekly progress report sent every Sunday",
    channel: "WhatsApp",
    status: "Enabled",
  },
]

export function NotificationTypesTable() {
  const [types, setTypes] = useState(notificationTypes)

  const toggleStatus = (id: string) => {
    setTypes((prev) =>
      prev.map((type) =>
        type.id === id ? { ...type, status: type.status === "Enabled" ? "Disabled" : "Enabled" } : type,
      ),
    )
  }

  return (
    <div className="bg-white rounded-lg border border-border shadow-sm overflow-hidden">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <Bell className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Notification Types</h2>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Notification Type</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Description</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Channel</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {types.map((type) => (
              <tr key={type.id} className="border-b border-border hover:bg-muted transition">
                <td className="px-6 py-4 text-sm font-medium text-foreground">{type.name}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{type.description}</td>
                <td className="px-6 py-4">
                  <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                    {type.channel}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                      type.status === "Enabled" ? "bg-green-50 text-green-700" : "bg-gray-50 text-gray-700"
                    }`}
                  >
                    {type.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleStatus(type.id)}
                      className="px-3 py-1 text-xs font-medium border border-border rounded-lg hover:bg-muted transition"
                    >
                      {type.status === "Enabled" ? "Disable" : "Enable"}
                    </button>
                    <button className="p-2 hover:bg-muted rounded-lg transition text-muted-foreground hover:text-foreground">
                      <Edit size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
