import { FileText, Calendar, Sparkles, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { ReportsSummary } from "@/lib/admin-api"

interface ReportsSummaryCardsProps {
  summary?: ReportsSummary | null
  loading?: boolean
}

export function ReportsSummaryCards({ summary, loading }: ReportsSummaryCardsProps) {
  const cards = [
    {
      icon: FileText,
      label: "Journals, last 7 days",
      value: summary ? String(summary.journalsLast7Days ?? 0) : "—",
      caption: summary
        ? `${summary.taskCompletionsLast7Days ?? 0} task completions from ${summary.activeUsersLast7Days ?? 0} users. ${summary.unavailable?.weeklyReportDocuments ?? ""}`
        : "Journal entries in the last 7 days.",
      bgColor: "bg-blue-50 dark:bg-blue-500/15",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Calendar,
      label: "Journals, last 30 days",
      value: summary ? String(summary.journalsLast30Days ?? 0) : "—",
      caption: summary?.unavailable?.monthlyReviewDocuments ?? "Journal entries in the last 30 days.",
      bgColor: "bg-purple-50 dark:bg-purple-500/15",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
      icon: Sparkles,
      label: "Task completions this year",
      value: summary ? String(summary.taskCompletionsThisYear ?? 0) : "—",
      caption: summary?.unavailable?.yearEndWrapDocuments ?? "Rows in task completions for the current year.",
      bgColor: "bg-amber-50 dark:bg-amber-500/15",
      iconColor: "text-amber-600 dark:text-amber-400",
    },
    {
      icon: TrendingUp,
      label: "Tasks marked complete",
      value: summary ? `${summary.averageTaskCompletionRate ?? 0}%` : "—",
      caption: summary
        ? `${summary.goalsCompleted ?? 0} of ${summary.goalsTotal ?? 0} goals are marked completed.`
        : "Share of tasks currently marked complete.",
      bgColor: "bg-green-50 dark:bg-green-500/15",
      iconColor: "text-green-600 dark:text-green-400",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <Card key={index}>
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">{card.label}</p>
                <p className="text-3xl font-bold text-foreground mt-2">{loading && !summary ? "…" : card.value}</p>
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
