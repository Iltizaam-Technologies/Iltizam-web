"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { CheckCircle2, Circle, Plus } from "lucide-react"
import { createUserGoal, getUserGoals, type AdminGoalItem } from "@/lib/admin-api"

const CATEGORIES = ["health", "career", "spiritual", "financial", "personal"] as const

const typeConfig: Record<string, string> = {
  health: "bg-blue-50 dark:bg-blue-500/15 text-blue-700 dark:text-blue-400",
  career: "bg-purple-50 dark:bg-purple-500/15 text-purple-700 dark:text-purple-400",
  spiritual: "bg-amber-50 dark:bg-amber-500/15 text-amber-700 dark:text-amber-400",
  financial: "bg-green-50 dark:bg-green-500/15 text-green-700 dark:text-green-400",
  personal: "bg-pink-50 dark:bg-pink-500/15 text-pink-700 dark:text-pink-400",
}

function mapStatusLabel(status: string): string {
  if (status === "completed") return "Completed"
  if (status === "paused") return "Paused"
  return "In Progress"
}

interface GoalsTabProps {
  userId: string
}

export function GoalsTab({ userId }: GoalsTabProps) {
  const [goals, setGoals] = useState<AdminGoalItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("personal")
  const [targetDate, setTargetDate] = useState("")

  const loadGoals = () => {
    setLoading(true)
    setError(null)
    getUserGoals(userId, { page: 1, limit: 100 })
      .then((res) => setGoals(res.items || []))
      .catch((err) => setError(err instanceof Error ? err.message : "Failed to load goals"))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    if (!userId) return
    loadGoals()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId])

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = title.trim()
    if (!trimmed) {
      setFormError("Title is required")
      return
    }
    setSaving(true)
    setFormError(null)
    try {
      await createUserGoal(userId, {
        title: trimmed,
        description: description.trim() || undefined,
        category,
        targetDate: targetDate || undefined,
        status: "active",
      })
      setTitle("")
      setDescription("")
      setTargetDate("")
      setCategory("personal")
      loadGoals()
    } catch (err) {
      setFormError(err instanceof Error ? err.message : "Failed to create goal")
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleCreate} className="border border-border rounded-lg p-4 bg-muted/30 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="font-semibold text-foreground">Create another goal</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Users can have as many goals as needed. This always adds a new one.
            </p>
          </div>
        </div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Goal title"
          className="w-full px-3 py-2 border border-border rounded-lg bg-background text-sm"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description (optional)"
          rows={2}
          className="w-full px-3 py-2 border border-border rounded-lg bg-background text-sm"
        />
        <div className="flex flex-col sm:flex-row gap-3">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as (typeof CATEGORIES)[number])}
            className="px-3 py-2 border border-border rounded-lg bg-background text-sm"
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c.charAt(0).toUpperCase() + c.slice(1)}
              </option>
            ))}
          </select>
          <input
            type="date"
            value={targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
            className="px-3 py-2 border border-border rounded-lg bg-background text-sm"
          />
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 disabled:opacity-50"
          >
            <Plus size={16} />
            {saving ? "Creating…" : "Create goal"}
          </button>
        </div>
        {formError ? <p className="text-sm text-red-700 dark:text-red-400">{formError}</p> : null}
      </form>

      {loading ? (
        <p className="text-sm text-muted-foreground">Loading goals…</p>
      ) : error ? (
        <p className="text-sm text-red-700 dark:text-red-400">{error}</p>
      ) : goals.length === 0 ? (
        <p className="text-sm text-muted-foreground">No goals yet. Create the first one above.</p>
      ) : (
        <div className="space-y-3">
          {goals.map((goal) => {
            const status = mapStatusLabel(goal.status)
            const categoryKey = (goal.category || "personal").toLowerCase()
            return (
              <div key={goal._id} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3">
                    {goal.status === "completed" ? (
                      <CheckCircle2 size={20} className="text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    ) : (
                      <Circle size={20} className="text-muted-foreground mt-0.5 flex-shrink-0" />
                    )}
                    <div>
                      <Link href={`/admin/goals/${goal._id}`} className="font-semibold text-foreground hover:underline">
                        {goal.title}
                      </Link>
                      <div className="flex items-center gap-2 mt-2">
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded ${typeConfig[categoryKey] || "bg-muted text-muted-foreground"}`}
                        >
                          {categoryKey}
                        </span>
                        <span
                          className={`text-xs font-medium ${goal.status === "completed" ? "text-green-600 dark:text-green-400" : "text-amber-600 dark:text-amber-400"}`}
                        >
                          {status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-8">
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${goal.progress ?? 0}%` }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{goal.progress ?? 0}% complete</p>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
