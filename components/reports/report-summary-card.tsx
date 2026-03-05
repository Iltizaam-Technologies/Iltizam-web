import { FileText, Calendar, Sparkles, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ReportsSummaryCardsProps {
  summary?: {
    weeklyReportsGenerated?: number
    monthlyReviewsCompleted?: number
    yearEndWrapsGenerated?: number
    averageCompletionRate?: number
  } | null
  loading?: boolean
}

export function ReportsSummaryCards({ summary, loading }: ReportsSummaryCardsProps) {
  const cards = [
    { icon: FileText, label: "Weekly Reports Generated", value: summary ? String(summary.weeklyReportsGenerated ?? 0) : "—", caption: "Last 7 days", bgColor: "bg-blue-50", iconColor: "text-blue-600" },
    { icon: Calendar, label: "Monthly Reviews Completed", value: summary ? String(summary.monthlyReviewsCompleted ?? 0) : "—", caption: "This month", bgColor: "bg-purple-50", iconColor: "text-purple-600" },
    { icon: Sparkles, label: "Year-End Wraps Generated", value: summary ? String(summary.yearEndWrapsGenerated ?? 0) : "—", caption: "Current cycle", bgColor: "bg-amber-50", iconColor: "text-amber-600" },
    { icon: TrendingUp, label: "Average Completion Rate", value: summary ? `${summary.averageCompletionRate ?? 0}%` : "—", caption: "Across all reports", bgColor: "bg-green-50", iconColor: "text-green-600" },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <Card key={index}>
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">{card.label}</p>
                <p className="text-3xl font-bold text-foreground mt-2">{card.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{card.caption}</p>
              </div>
              <div className={`p-3 rounded-lg ${card.bgColor}`}>
                <card.icon size={24} className={card.iconColor} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
