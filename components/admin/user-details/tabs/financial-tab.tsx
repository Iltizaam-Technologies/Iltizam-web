export function FinancialTab() {
  const financialGoals = [
    {
      id: 1,
      title: "Save for Emergency Fund",
      target: 5000,
      current: 3200,
    },
    {
      id: 2,
      title: "Save for Vacation",
      target: 2000,
      current: 1450,
    },
    {
      id: 3,
      title: "Invest in Portfolio",
      target: 10000,
      current: 6800,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="bg-muted rounded-lg p-6 text-center">
        <p className="text-xs text-muted-foreground font-medium mb-2">Total Saved</p>
        <p className="text-4xl font-bold text-foreground">$11,450</p>
        <p className="text-xs text-muted-foreground mt-2">All financial goals combined</p>
      </div>

      <div className="space-y-4">
        {financialGoals.map((goal) => {
          const percentage = Math.round((goal.current / goal.target) * 100)
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
                ${goal.current.toLocaleString()} of ${goal.target.toLocaleString()}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
