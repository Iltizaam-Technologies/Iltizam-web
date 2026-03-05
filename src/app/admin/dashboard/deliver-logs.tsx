"use client"

import { useState, useEffect } from "react"
import { FileText } from "lucide-react"
import { getNotificationLogs } from "../../../../lib/admin-api"

function formatSentAt(iso?: string): string {
  if (!iso) return "—"
  try {
    return new Date(iso).toLocaleString()
  } catch {
    return iso
  }
}

function mapStatus(s: string): string {
  if (s === "sent") return "Delivered"
  if (s === "failed") return "Failed"
  return s
}

export function DeliveryLogs() {
  const [logs, setLogs] = useState<Array<{ id: string; user: string; status: string; sentAt: string; error: string | null }>>([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getNotificationLogs({ page, limit: 10 })
      .then((r) => {
        setLogs(r.items ?? [])
        setTotalPages(r.pagination?.totalPages ?? 1)
      })
      .catch(() => {
        setLogs([])
        setTotalPages(1)
      })
      .finally(() => setLoading(false))
  }, [page])

  return (
    <div className="bg-white rounded-lg border border-border shadow-sm overflow-hidden">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <FileText className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Logs & Delivery Status</h2>
        </div>
      </div>

      {loading && !logs.length ? (
        <div className="p-8 text-center text-muted-foreground">Loading…</div>
      ) : (
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">User</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Sent Time</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Error</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr key={log.id} className="border-b border-border hover:bg-muted transition">
                <td className="px-6 py-4 text-sm font-medium text-foreground">{log.user}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{formatSentAt(log.sentAt)}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                      log.status === "sent" || log.status === "Delivered"
                        ? "bg-green-50 text-green-700"
                        : log.status === "failed" || log.status === "Failed"
                          ? "bg-red-50 text-red-700"
                          : "bg-yellow-50 text-yellow-700"
                    }`}
                  >
                    {mapStatus(log.status)}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-red-600">{log.error || "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      )}
      {!loading && logs.length === 0 && (
        <div className="p-8 text-center text-muted-foreground">No delivery logs yet.</div>
      )}

      {totalPages > 1 && (
      <div className="p-6 border-t border-border flex items-center justify-center gap-2">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-3 py-2 border border-border rounded-lg text-sm font-medium text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Previous
        </button>
        <span className="px-3 py-2 text-sm text-muted-foreground">Page {page} of {totalPages}</span>
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="px-3 py-2 border border-border rounded-lg text-sm font-medium text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Next
        </button>
      </div>
      )}
    </div>
  )
}
