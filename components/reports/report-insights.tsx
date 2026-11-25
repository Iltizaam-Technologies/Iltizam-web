import { Lightbulb, TrendingUp, Users, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const icons = [TrendingUp, Calendar, Users, Lightbulb]
const colors = [
  { color: "text-green-600 dark:text-green-400", bgColor: "bg-green-50 dark:bg-green-500/15" },
  { color: "text-blue-600 dark:text-blue-400", bgColor: "bg-blue-50 dark:bg-blue-500/15" },
  { color: "text-purple-600 dark:text-purple-400", bgColor: "bg-purple-50 dark:bg-purple-500/15" },
  { color: "text-amber-600 dark:text-amber-400", bgColor: "bg-amber-50 dark:bg-amber-500/15" },
]

interface ReportInsightsProps {
  insights?: Array<{ text: string; impact?: string }>
  loading?: boolean
}

export function ReportInsights({ insights = [], loading }: ReportInsightsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb size={20} className="text-accent" />
          Insights from current records
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading && !insights.length ? (
          <p className="text-sm text-muted-foreground">Loading insights…</p>
        ) : null}
        {!loading && !insights.length ? (
          <p className="text-sm text-muted-foreground">No insights could be computed from the current records.</p>
        ) : null}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {insights.map((insight, index) => {
            const Icon = icons[index % icons.length]
            const tone = colors[index % colors.length]
            return (
              <div key={index} className={`${tone.bgColor} rounded-lg p-4 flex items-start gap-3`}>
                <div className="p-2 rounded-lg bg-card">
                  <Icon size={20} className={tone.color} />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-foreground">{insight.text}</p>
                  {insight.impact ? <p className="text-xs text-muted-foreground mt-1">{insight.impact}</p> : null}
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
