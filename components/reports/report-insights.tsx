import { Lightbulb, TrendingUp, Users, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const defaultInsights = [
  { icon: TrendingUp, text: "Users who complete weekly reviews are 2× more consistent with their goals.", color: "text-green-600", bgColor: "bg-green-50" },
  { icon: Calendar, text: "Positive mood streaks peak mid-week, typically on Wednesday.", color: "text-blue-600", bgColor: "bg-blue-50" },
  { icon: Users, text: "Monthly reviews with AI summaries have 35% higher engagement rates.", color: "text-purple-600", bgColor: "bg-purple-50" },
  { icon: Lightbulb, text: "Year-End Wraps are shared 3× more often than other report types.", color: "text-amber-600", bgColor: "bg-amber-50" },
]

interface ReportInsightsProps {
  insights?: Array<{ text: string; impact?: string }>
}

export function ReportInsights({ insights }: ReportInsightsProps) {
  const list = insights?.length ? insights.map((i, idx) => ({ ...defaultInsights[idx] ?? defaultInsights[0], text: i.text })) : defaultInsights

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb size={20} className="text-accent" />
          Insights from Reports
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {list.map((insight, index) => (
            <div key={index} className={`${insight.bgColor} rounded-lg p-4 flex items-start gap-3`}>
              <div className={`p-2 rounded-lg bg-white`}>
                <insight.icon size={20} className={insight.color} />
              </div>
              <p className="text-sm text-foreground flex-1">{insight.text}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
