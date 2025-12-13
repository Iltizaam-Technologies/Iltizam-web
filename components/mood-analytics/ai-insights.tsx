import { Lightbulb, TrendingUp, Users, Zap } from "lucide-react"

export function AIInsights() {
  const insights = [
    {
      icon: <TrendingUp className="w-5 h-5 text-primary" />,
      text: "Users with consistent low mood also miss more tasks.",
      impact: "High correlation detected",
    },
    {
      icon: <Zap className="w-5 h-5 text-accent" />,
      text: "Motivational nudges increase mood scores by 22%.",
      impact: "Positive intervention",
    },
    {
      icon: <Users className="w-5 h-5 text-green-600" />,
      text: "Users logging moods daily show 35% higher goal completion rates.",
      impact: "Strong engagement signal",
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-blue-600" />,
      text: "Weekend moods are 18% higher than weekday averages.",
      impact: "Weekly pattern identified",
    },
  ]

  return (
    <div className="bg-white rounded-lg border border-border p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <Lightbulb className="w-6 h-6 text-primary" />
        <h2 className="text-lg font-semibold text-foreground">AI Insights & Recommendations</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {insights.map((insight, index) => (
          <div key={index} className="flex gap-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex-shrink-0 mt-1">{insight.icon}</div>
            <div className="flex-1">
              <p className="text-sm text-foreground font-medium leading-relaxed">{insight.text}</p>
              <p className="text-xs text-muted-foreground mt-2 italic">{insight.impact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
