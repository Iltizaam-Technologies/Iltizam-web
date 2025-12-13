import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Eye, Download, RefreshCw } from "lucide-react"


export function MonthlyReviewsTab() {
  const monthlyReviews = [
    {
      id: 1,
      user: "Sarah Johnson",
      month: "November 2024",
      goalsAchieved: 8,
      moodTrend: "Improving",
      aiSummary: "Yes",
    },
    {
      id: 2,
      user: "Michael Chen",
      month: "November 2024",
      goalsAchieved: 6,
      moodTrend: "Stable",
      aiSummary: "Yes",
    },
    {
      id: 3,
      user: "Emily Davis",
      month: "November 2024",
      goalsAchieved: 4,
      moodTrend: "Declining",
      aiSummary: "No",
    },
    {
      id: 4,
      user: "James Wilson",
      month: "November 2024",
      goalsAchieved: 10,
      moodTrend: "Improving",
      aiSummary: "Yes",
    },
    {
      id: 5,
      user: "Sophia Martinez",
      month: "November 2024",
      goalsAchieved: 7,
      moodTrend: "Stable",
      aiSummary: "Yes",
    },
  ]

  const moodTrendConfig = {
    Improving: "text-green-700",
    Stable: "text-blue-700",
    Declining: "text-red-700",
  }

  return (
    <div>
      {/* Desktop Table View */}
      <div className="hidden md:block border border-border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Month</TableHead>
              <TableHead>Goals Achieved</TableHead>
              <TableHead>Mood Trend</TableHead>
              <TableHead>AI Summary Generated</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {monthlyReviews.map((review) => (
              <TableRow key={review.id}>
                <TableCell className="font-medium">{review.user}</TableCell>
                <TableCell>{review.month}</TableCell>
                <TableCell>{review.goalsAchieved}</TableCell>
                <TableCell>
                  <span className={`font-medium ${moodTrendConfig[review.moodTrend as keyof typeof moodTrendConfig]}`}>
                    {review.moodTrend}
                  </span>
                </TableCell>
                <TableCell>{review.aiSummary}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 hover:bg-muted rounded transition" title="Preview">
                      <Eye size={16} className="text-muted-foreground" />
                    </button>
                    <button className="p-2 hover:bg-muted rounded transition" title="Download">
                      <Download size={16} className="text-muted-foreground" />
                    </button>
                    <button className="p-2 hover:bg-muted rounded transition" title="Regenerate">
                      <RefreshCw size={16} className="text-muted-foreground" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {monthlyReviews.map((review) => (
          <div key={review.id} className="border border-border rounded-lg p-4">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="font-semibold text-foreground">{review.user}</p>
                <p className="text-sm text-muted-foreground mt-1">{review.month}</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Goals:</span>
                <span className="font-medium">{review.goalsAchieved}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Mood Trend:</span>
                <span className={`font-medium ${moodTrendConfig[review.moodTrend as keyof typeof moodTrendConfig]}`}>
                  {review.moodTrend}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">AI Summary:</span>
                <span className="font-medium">{review.aiSummary}</span>
              </div>
            </div>
            <div className="flex gap-2 mt-4 pt-4 border-t border-border">
              <button className="flex-1 px-3 py-2 bg-muted hover:bg-muted/80 rounded text-sm font-medium transition">
                <Eye size={14} className="inline mr-1" />
                Preview
              </button>
              <button className="flex-1 px-3 py-2 bg-muted hover:bg-muted/80 rounded text-sm font-medium transition">
                <Download size={14} className="inline mr-1" />
                Download
              </button>
              <button className="px-3 py-2 bg-muted hover:bg-muted/80 rounded text-sm font-medium transition">
                <RefreshCw size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
