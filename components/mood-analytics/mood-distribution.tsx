export function MoodDistribution() {
  const distribution = [
    { emoji: "😔", label: "Low", percentage: 12, color: "bg-red-500" },
    { emoji: "😐", label: "Neutral", percentage: 23, color: "bg-yellow-500" },
    { emoji: "🙂", label: "Good", percentage: 41, color: "bg-primary" },
    { emoji: "😄", label: "Very Happy", percentage: 24, color: "bg-green-500" },
  ]

  return (
    <div className="bg-white rounded-lg border border-border p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-foreground mb-6">Mood Distribution</h2>
      <div className="space-y-4">
        {distribution.map((item, index) => (
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
          <span className="font-semibold text-foreground">Insight:</span> 65% of users report positive moods (Good +
          Very Happy), indicating strong overall wellbeing.
        </p>
      </div>
    </div>
  )
}
