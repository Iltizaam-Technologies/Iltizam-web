import { Sparkles } from "lucide-react"

export function YearEndWrapsTab() {
  const yearEndWraps = [
    {
      id: 1,
      user: "Sarah Johnson",
      year: "2024",
      topStat: "124 Tasks Completed",
      moodHighlight: "Most Happy Days",
    },
    {
      id: 2,
      user: "Michael Chen",
      year: "2024",
      topStat: "89 Goals Achieved",
      moodHighlight: "Consistent Mood",
    },
    {
      id: 3,
      user: "Emily Davis",
      year: "2024",
      topStat: "156 Tasks Completed",
      moodHighlight: "Best Productivity",
    },
    {
      id: 4,
      user: "James Wilson",
      year: "2024",
      topStat: "98 Tasks Completed",
      moodHighlight: "Strong Finisher",
    },
    {
      id: 5,
      user: "Sophia Martinez",
      year: "2024",
      topStat: "112 Tasks Completed",
      moodHighlight: "Top Performer",
    },
    {
      id: 6,
      user: "David Brown",
      year: "2024",
      topStat: "143 Tasks Completed",
      moodHighlight: "Marathon Runner",
    },
  ]

  return (
    <div>
      {/* Grid of Wrap Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {yearEndWraps.map((wrap) => (
          <div
            key={wrap.id}
            className="border border-border rounded-xl p-6 hover:shadow-lg transition bg-gradient-to-br from-white to-muted/30"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">ILTIZAM WRAP</p>
                <p className="text-lg font-bold text-foreground mt-1">{wrap.year}</p>
              </div>
              <Sparkles size={20} className="text-accent" />
            </div>

            <div className="mb-4">
              <p className="font-semibold text-foreground text-lg">{wrap.user}</p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="bg-primary/5 rounded-lg p-3 border border-primary/20">
                <p className="text-xs text-muted-foreground font-medium mb-1">Top Achievement</p>
                <p className="text-sm font-bold text-primary">{wrap.topStat}</p>
              </div>

              <div className="bg-accent/10 rounded-lg p-3 border border-accent/20">
                <p className="text-xs text-muted-foreground font-medium mb-1">Mood Highlight</p>
                <p className="text-sm font-semibold text-foreground">{wrap.moodHighlight}</p>
              </div>
            </div>

            <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition">
              Preview Wrap
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
