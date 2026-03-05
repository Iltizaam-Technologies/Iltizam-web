import { Smile, Calendar, TrendingDown, Activity } from "lucide-react"

interface MoodSummaryCardsProps {
  summary?: {
    averageMood?: string;
    happiestDay?: string;
    engagementRate?: number;
  } | null
  loading?: boolean
}

export function MoodSummaryCards({ summary, loading }: MoodSummaryCardsProps) {
  const cards = [
    {
      icon: <Smile className="w-6 h-6 text-primary" />,
      title: "Average Mood Score",
      value: summary ? `${summary.averageMood ?? "—"} / 5` : "—",
      caption: "Across all users",
      badge: false,
    },
    {
      icon: <Calendar className="w-6 h-6 text-primary" />,
      title: "Happiest Day",
      value: summary?.happiestDay ?? "—",
      caption: "Peak engagement",
      badge: false,
    },
    {
      icon: <TrendingDown className="w-6 h-6 text-amber-600" />,
      title: "Low Mood Alerts",
      value: summary ? "View risk flags below" : "—",
      caption: "Check risk flags table",
      badge: true,
    },
    {
      icon: <Activity className="w-6 h-6 text-primary" />,
      title: "Emotional Engagement Rate",
      value: summary ? `${summary.engagementRate ?? 0}%` : "—",
      caption: "Users logging moods regularly",
      badge: false,
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {loading && !summary && (
        <div className="col-span-full py-8 text-center text-muted-foreground">Loading…</div>
      )}
      {cards.map((card, index) => (
        <div key={index} className="bg-white rounded-lg border border-border p-6 shadow-sm hover:shadow-md transition">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground font-medium">{card.title}</p>
              {card.badge ? (
                <div className="mt-2">
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-semibold bg-amber-50 text-amber-700">
                    {card.value}
                  </span>
                </div>
              ) : (
                <p className="text-3xl font-bold text-foreground mt-2">{card.value}</p>
              )}
              <p className="text-xs text-muted-foreground mt-2">{card.caption}</p>
            </div>
            <div className="flex-shrink-0">{card.icon}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
