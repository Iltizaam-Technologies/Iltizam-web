"use client"

import { useEffect, useState } from "react"
import { getUserFinancialGoals, type AdminFinancialGoal } from "@/lib/admin-api"

function money(amount: number, currency: string): string {
  try {
    return new Intl.NumberFormat(undefined, { style: "currency", currency }).format(amount)
  } catch {
    return `${currency} ${amount.toLocaleString()}`
  }
}

export function FinancialTab({ userId }: { userId: string }) {
  const [goals, setGoals] = useState<AdminFinancialGoal[]>([])
  const [totals, setTotals] = useState<Array<{ currency: string; currentSaved: number; targetAmount: number }>>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)
    getUserFinancialGoals(userId)
      .then((result) => {
        if (cancelled) return
        setGoals(result.items ?? [])
        setTotals(result.totalsByCurrency ?? [])
      })
      .catch((err) => {
        if (!cancelled) setError(err instanceof Error ? err.message : "Failed to load financial goals")
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [userId])

  if (loading) return <p className="text-sm text-muted-foreground">Loading financial goals…</p>
  if (error) return <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
  if (!goals.length) {
    return <p className="text-sm text-muted-foreground">This user has no financial goals stored.</p>
  }

  return (
    <div className="space-y-6">
      <div className="bg-muted rounded-lg p-6">
        <p className="text-xs text-muted-foreground font-medium mb-2">Saved, by currency</p>
        <div className="space-y-1">
          {totals.map((total) => (
            <p key={total.currency} className="text-2xl font-bold text-foreground">
              {money(total.currentSaved, total.currency)}
              <span className="text-sm font-medium text-muted-foreground ml-2">
                of {money(total.targetAmount, total.currency)}
              </span>
            </p>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {goals.map((goal) => {
          const target = Number(goal.targetAmount) || 0
          const current = Number(goal.currentSaved) || 0
          const percentage = target > 0 ? Math.min(100, Math.round((current / target) * 100)) : 0
          return (
            <div key={goal.id} className="border border-border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="font-semibold text-foreground">{goal.title}</p>
                <p className="text-sm font-medium text-foreground">{percentage}%</p>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden mb-2">
                <div className="h-full bg-primary" style={{ width: `${percentage}%` }}></div>
              </div>
              <p className="text-xs text-muted-foreground">
                {money(current, goal.currency)} of {money(target, goal.currency)}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
