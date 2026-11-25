import type { UserOverviewStats } from "@/lib/admin-api"

function formatWhen(value?: string | null): string {
  if (!value) return "—"
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return "—"
  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  })
}

export function OverviewTab({ stats }: { stats?: UserOverviewStats | null }) {
  const goals = stats?.goalsCount ?? 0
  const completed = stats?.goalsCompleted ?? 0
  const rate = goals > 0 ? Math.round((completed / goals) * 100) : 0
  const streak = stats?.highestHabitStreak

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="bg-muted rounded-lg p-4">
        <p className="text-xs text-muted-foreground font-medium mb-1">Last login</p>
        <p className="text-lg font-semibold text-foreground">Not tracked</p>
        <p className="text-xs text-muted-foreground mt-1">The users table does not store a last login time.</p>
      </div>

      <div className="bg-muted rounded-lg p-4">
        <p className="text-xs text-muted-foreground font-medium mb-1">Goals created</p>
        <p className="text-lg font-semibold text-foreground">{goals}</p>
        <p className="text-xs text-muted-foreground mt-1">All goals stored for this user</p>
      </div>

      <div className="bg-muted rounded-lg p-4">
        <p className="text-xs text-muted-foreground font-medium mb-1">Goals marked completed</p>
        <p className="text-lg font-semibold text-foreground">{completed}</p>
        <p className="text-xs text-muted-foreground mt-1">{goals ? `${rate}% of stored goals` : "No goals yet"}</p>
      </div>

      <div className="bg-muted rounded-lg p-4">
        <p className="text-xs text-muted-foreground font-medium mb-1">Highest habit streak</p>
        <p className="text-lg font-semibold text-foreground">{streak == null ? "—" : `${streak} days`}</p>
        <p className="text-xs text-muted-foreground mt-1">
          {stats?.taskCompletions ?? 0} task completions are stored. Login streaks are not tracked.
        </p>
      </div>

      <div className="sm:col-span-2 bg-muted rounded-lg p-4">
        <p className="text-xs text-muted-foreground font-medium mb-2">Latest stored activity</p>
        <p className="text-foreground">{stats?.lastActivityText || "No journal, task completion, or goal is stored yet."}</p>
        <p className="text-xs text-muted-foreground mt-2">{formatWhen(stats?.lastActivityAt)}</p>
      </div>
    </div>
  )
}
