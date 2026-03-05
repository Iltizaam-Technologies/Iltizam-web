"use client"

import { useState, useEffect } from "react"
import { AdminNav } from "../../../../components/admin/admin-nav"
import { Footer } from "../../../../components/footer"
import { DeliveryLogs } from "../dashboard/deliver-logs"
import { WhatsAppHeader } from "../dashboard/header"
import { MessagePreview } from "../dashboard/message-preview"
import { NotificationRules } from "../dashboard/notification-rules"
import { NotificationTypesTable } from "../dashboard/notification-types-table"
import { ProviderConfiguration } from "../dashboard/provider-configuration"
import { StatusBar } from "../dashboard/status-bar"
import {
  broadcastNotification,
  getAdminNotifications,
  type AdminNotificationItem,
  type BroadcastPayload,
} from "../../../../lib/admin-api"

export default function WhatsAppNotificationsPage() {
  const [title, setTitle] = useState("")
  const [message, setMessage] = useState("")
  const [audience, setAudience] = useState<BroadcastPayload["audience"]>("all")
  const [broadcastLoading, setBroadcastLoading] = useState(false)
  const [broadcastSuccess, setBroadcastSuccess] = useState<string | null>(null)
  const [broadcastError, setBroadcastError] = useState<string | null>(null)
  const [history, setHistory] = useState<AdminNotificationItem[]>([])
  const [historyLoading, setHistoryLoading] = useState(true)
  const [historyError, setHistoryError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    setHistoryLoading(true)
    setHistoryError(null)
    getAdminNotifications({ page: 1, limit: 50 })
      .then((res) => {
        if (!cancelled) setHistory(res.items ?? [])
      })
      .catch((err) => {
        if (!cancelled) setHistoryError(err instanceof Error ? err.message : "Failed to load notifications")
      })
      .finally(() => {
        if (!cancelled) setHistoryLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [broadcastSuccess])

  async function handleBroadcast(e: React.FormEvent) {
    e.preventDefault()
    setBroadcastError(null)
    setBroadcastSuccess(null)
    if (!title.trim() || !message.trim()) {
      setBroadcastError("Title and message are required.")
      return
    }
    setBroadcastLoading(true)
    try {
      const res = await broadcastNotification({ title: title.trim(), body: message.trim(), audience })
      setBroadcastSuccess(res.message ?? "Broadcast sent successfully.")
      setTitle("")
      setMessage("")
    } catch (err) {
      setBroadcastError(err instanceof Error ? err.message : "Broadcast failed.")
    } finally {
      setBroadcastLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <div className="flex">
        <main className="flex-1">
          <WhatsAppHeader />
          <div className="p-6 max-w-7xl mx-auto space-y-8">
            {/* Broadcast form */}
            <section className="bg-white rounded-lg border border-border shadow-sm p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">Broadcast notification</h2>
              <form onSubmit={handleBroadcast} className="space-y-4 max-w-xl">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Title</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
                    placeholder="Notification title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
                    placeholder="Message body"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Audience</label>
                  <select
                    value={audience}
                    onChange={(e) => setAudience(e.target.value as BroadcastPayload["audience"])}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
                  >
                    <option value="all">All</option>
                    <option value="free">Free</option>
                    <option value="subscribed">Subscribed</option>
                    <option value="admins">Admins</option>
                  </select>
                </div>
                {broadcastSuccess && (
                  <p className="text-sm text-green-700 bg-green-50 p-3 rounded-lg">{broadcastSuccess}</p>
                )}
                {broadcastError && (
                  <p className="text-sm text-red-700 bg-red-50 p-3 rounded-lg">{broadcastError}</p>
                )}
                <button
                  type="submit"
                  disabled={broadcastLoading}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition disabled:opacity-50"
                >
                  {broadcastLoading ? "Sending…" : "Send broadcast"}
                </button>
              </form>
            </section>

            {/* Broadcast history */}
            <section className="bg-white rounded-lg border border-border shadow-sm overflow-hidden">
              <h2 className="text-lg font-semibold text-foreground p-6 pb-0">Broadcast history</h2>
              <div className="p-6">
                {historyLoading && <p className="text-muted-foreground text-sm">Loading…</p>}
                {historyError && (
                  <p className="text-sm text-red-700 bg-red-50 p-3 rounded-lg">{historyError}</p>
                )}
                {!historyLoading && !historyError && history.length === 0 && (
                  <p className="text-muted-foreground text-sm">No broadcasts yet.</p>
                )}
                {!historyLoading && !historyError && history.length > 0 && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border text-left">
                          <th className="py-3 pr-4 font-medium text-foreground">Title</th>
                          <th className="py-3 pr-4 font-medium text-foreground">Body</th>
                          <th className="py-3 pr-4 font-medium text-foreground">Recipients</th>
                          <th className="py-3 pr-4 font-medium text-foreground">Delivered</th>
                          <th className="py-3 font-medium text-foreground">Created</th>
                        </tr>
                      </thead>
                      <tbody>
                        {history.map((n, i) => (
                          <tr key={n.broadcastId ?? i} className="border-b border-border">
                            <td className="py-3 pr-4 text-foreground">{n.title}</td>
                            <td className="py-3 pr-4 text-muted-foreground max-w-xs truncate">{n.body}</td>
                            <td className="py-3 pr-4 text-muted-foreground">{n.totalRecipients ?? "—"}</td>
                            <td className="py-3 pr-4 text-muted-foreground">{n.deliveredCount ?? "—"}</td>
                            <td className="py-3 text-muted-foreground">
                              {n.createdAt
                                ? new Date(n.createdAt).toLocaleString()
                                : "—"}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </section>

            <StatusBar />
            <ProviderConfiguration />
            <NotificationTypesTable />
            <NotificationRules />
            <MessagePreview />
            <DeliveryLogs />

            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-end border-t border-border pt-6">
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition">
                Save All Settings
              </button>
              <button className="px-6 py-2 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition">
                Reset to Defaults
              </button>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
