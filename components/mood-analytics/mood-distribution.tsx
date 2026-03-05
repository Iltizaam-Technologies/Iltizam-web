interface MoodDistributionProps {
  distribution?: Array<{ emoji: string; label: string; percentage: number; color: string }>
  loading?: boolean
}

export function MoodDistribution({ distribution = [], loading }: MoodDistributionProps) {
  const items = distribution.length ? distribution : [
    { emoji: "😔", label: "Low", percentage: 0, color: "bg-red-500" },
    { emoji: "😐", label: "Neutral", percentage: 0, color: "bg-yellow-500" },
    { emoji: "🙂", label: "Good", percentage: 0, color: "bg-primary" },
    { emoji: "😄", label: "Very Happy", percentage: 0, color: "bg-green-500" },
  ]
  const positivePct = items.reduce((acc, i) => (i.label === "Good" || i.label === "Very Happy" ? acc + i.percentage : acc), 0)

  return (
    <div className="bg-white rounded-lg border border-border p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-foreground mb-6">Mood Distribution</h2>
      {loading && !distribution.length && (
        <div className="py-8 text-center text-muted-foreground">Loading…</div>
      )}
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="flex items-center gap-2 w-32">
              <span className="text-2xl">{item.emoji}</span>
              <span className="text-sm font-medium text-foreground">{item.label}</span>
            </div>
            <div className="flex-1">
              <div className="w-full h-8 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full ${item.color} flex items-center justify-end pr-3`}
                  style={{ width: `${item.percentage}%` }}
                >
                  <span className="text-xs font-semibold text-white">{item.percentage}%</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-muted rounded-lg">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Insight:</span> {positivePct}% of entries are positive moods (Good +
          Very Happy).
        </p>
      </div>
    </div>
  )
}
