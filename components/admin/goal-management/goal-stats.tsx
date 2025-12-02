import { Target, CheckCircle, Archive, Zap } from "lucide-react"

export function GoalsStats() {
  const stats = [
    { icon: <Target className="w-6 h-6 text-primary" />, label: "Total Goals", value: "1,245", color: "primary" },
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      label: "Active Goals",
      value: "842",
      color: "amber",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      label: "Completed Goals",
      value: "356",
      color: "green",
    },
    {
      icon: <Archive className="w-6 h-6 text-gray-500" />,
      label: "Archived Goals",
      value: "47",
      color: "gray",
    },
  ]

  return (
    <div className="space-y-4">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg border border-border p-6 shadow-sm hover:shadow-md transition">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              <p className="text-3xl font-bold text-foreground mt-2">{stat.value}</p>
            </div>
            <div className="flex-shrink-0">{stat.icon}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
