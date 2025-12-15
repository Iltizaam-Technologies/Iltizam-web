"use client"

import { useState } from "react"
import { FileText } from "lucide-react"

interface LogEntry {
  id: string
  user: string
  messageType: string
  sentTime: string
  status: "Delivered" | "Failed" | "Pending"
  error: string | null
}

const sampleLogs: LogEntry[] = [
  {
    id: "1",
    user: "Sarah Johnson",
    messageType: "Daily Goal Reminder",
    sentTime: "Today, 8:00 AM",
    status: "Delivered",
    error: null,
  },
  {
    id: "2",
    user: "Ahmed Hassan",
    messageType: "Motivation Boost",
    sentTime: "Today, 7:45 AM",
    status: "Delivered",
    error: null,
  },
  {
    id: "3",
    user: "Maria Garcia",
    messageType: "Weekly Summary",
    sentTime: "Yesterday, 9:00 PM",
    status: "Failed",
    error: "Invalid phone number",
  },
  {
    id: "4",
    user: "John Smith",
    messageType: "Daily Goal Reminder",
    sentTime: "Yesterday, 8:00 AM",
    status: "Delivered",
    error: null,
  },
  {
    id: "5",
    user: "Lisa Chen",
    messageType: "Missed Task Nudge",
    sentTime: "2 days ago, 6:00 PM",
    status: "Pending",
    error: null,
  },
]

export function DeliveryLogs() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5
  const totalPages = Math.ceil(sampleLogs.length / itemsPerPage)
  const startIdx = (currentPage - 1) * itemsPerPage
  const paginatedLogs = sampleLogs.slice(startIdx, startIdx + itemsPerPage)

  return (
    <div className="bg-white rounded-lg border border-border shadow-sm overflow-hidden">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <FileText className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Logs & Delivery Status</h2>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">User</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Message Type</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Sent Time</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Error</th>
            </tr>
          </thead>
          <tbody>
            {paginatedLogs.map((log) => (
              <tr key={log.id} className="border-b border-border hover:bg-muted transition">
                <td className="px-6 py-4 text-sm font-medium text-foreground">{log.user}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{log.messageType}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{log.sentTime}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                      log.status === "Delivered"
                        ? "bg-green-50 text-green-700"
                        : log.status === "Failed"
                          ? "bg-red-50 text-red-700"
                          : "bg-yellow-50 text-yellow-700"
                    }`}
                  >
                    {log.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-red-600">{log.error || "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-6 border-t border-border flex items-center justify-center gap-2">
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="px-3 py-2 border border-border rounded-lg text-sm font-medium text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
              page === currentPage
                ? "bg-primary text-primary-foreground"
                : "border border-border text-foreground hover:bg-muted"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="px-3 py-2 border border-border rounded-lg text-sm font-medium text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Next
        </button>
      </div>
    </div>
  )
}
