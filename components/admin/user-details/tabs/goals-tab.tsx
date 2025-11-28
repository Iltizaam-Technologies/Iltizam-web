import { CheckCircle2, Circle } from "lucide-react"

export function GoalsTab() {
  const goals = [
    {
      id: 1,
      title: "Exercise Daily",
      type: "Daily",
      status: "In Progress",
      progress: 80,
    },
    {
      id: 2,
      title: "Read for 30 minutes",
      type: "Daily",
      status: "Completed",
      progress: 100,
    },
    {
      id: 3,
      title: "Complete Project Alpha",
      type: "Long-term",
      status: "In Progress",
      progress: 45,
    },
    {
      id: 4,
      title: "Learn Spanish",
      type: "Long-term",
      status: "In Progress",
      progress: 30,
    },
  ]

  const typeConfig = {
    Daily: "bg-blue-50 text-blue-700",
    Weekly: "bg-purple-50 text-purple-700",
    "Long-term": "bg-amber-50 text-amber-700",
  }

  const statusConfig = {
    "In Progress": "text-amber-600",
    Completed: "text-green-600",
  }

  return (
    <div className="space-y-3">
      {goals.map((goal) => (
        <div key={goal.id} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-start gap-3">
              {goal.status === "Completed" ? (
                <CheckCircle2 size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
              ) : (
                <Circle size={20} className="text-muted-foreground mt-0.5 flex-shrink-0" />
              )}
              <div>
                <p className="font-semibold text-foreground">{goal.title}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded ${typeConfig[goal.type as keyof typeof typeConfig]}`}
                  >
                    {goal.type}
                  </span>
                  <span className={`text-xs font-medium ${statusConfig[goal.status as keyof typeof statusConfig]}`}>
                    {goal.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-8">
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-primary" style={{ width: `${goal.progress}%` }}></div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">{goal.progress}% complete</p>
          </div>
        </div>
      ))}
    </div>
  )
}
