import { Eye, Download, Flag } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function WeeklyReportsTab() {
  const weeklyReports = [
    {
      id: 1,
      user: "Sarah Johnson",
      weekRange: "Nov 25 - Dec 1",
      tasksCompleted: 24,
      averageMood: "Happy",
      status: "Completed",
    },
    {
      id: 2,
      user: "Michael Chen",
      weekRange: "Nov 25 - Dec 1",
      tasksCompleted: 18,
      averageMood: "Neutral",
      status: "Completed",
    },
    {
      id: 3,
      user: "Emily Davis",
      weekRange: "Nov 25 - Dec 1",
      tasksCompleted: 0,
      averageMood: "N/A",
      status: "Skipped",
    },
    {
      id: 4,
      user: "James Wilson",
      weekRange: "Nov 25 - Dec 1",
      tasksCompleted: 31,
      averageMood: "Happy",
      status: "Completed",
    },
    {
      id: 5,
      user: "Sophia Martinez",
      weekRange: "Nov 25 - Dec 1",
      tasksCompleted: 22,
      averageMood: "Satisfied",
      status: "Completed",
    },
  ]

  const statusConfig = {
    Completed: "bg-green-50 text-green-700",
    Skipped: "bg-red-50 text-red-700",
  }

  return (
    <div>
      {/* Desktop Table View */}
      <div className="hidden md:block border border-border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Week Range</TableHead>
              <TableHead>Tasks Completed</TableHead>
              <TableHead>Average Mood</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {weeklyReports.map((report) => (
              <TableRow key={report.id}>
                <TableCell className="font-medium">{report.user}</TableCell>
                <TableCell>{report.weekRange}</TableCell>
                <TableCell>{report.tasksCompleted}</TableCell>
                <TableCell>{report.averageMood}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${statusConfig[report.status as keyof typeof statusConfig]}`}
                  >
                    {report.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 hover:bg-muted rounded transition" title="View Report">
                      <Eye size={16} className="text-muted-foreground" />
                    </button>
                    <button className="p-2 hover:bg-muted rounded transition" title="Download">
                      <Download size={16} className="text-muted-foreground" />
                    </button>
                    <button className="p-2 hover:bg-muted rounded transition" title="Flag Issue">
                      <Flag size={16} className="text-muted-foreground" />
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
        {weeklyReports.map((report) => (
          <div key={report.id} className="border border-border rounded-lg p-4">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="font-semibold text-foreground">{report.user}</p>
                <p className="text-sm text-muted-foreground mt-1">{report.weekRange}</p>
              </div>
              <span
                className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${statusConfig[report.status as keyof typeof statusConfig]}`}
              >
                {report.status}
              </span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tasks:</span>
                <span className="font-medium">{report.tasksCompleted}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Avg Mood:</span>
                <span className="font-medium">{report.averageMood}</span>
              </div>
            </div>
            <div className="flex gap-2 mt-4 pt-4 border-t border-border">
              <button className="flex-1 px-3 py-2 bg-muted hover:bg-muted/80 rounded text-sm font-medium transition">
                <Eye size={14} className="inline mr-1" />
                View
              </button>
              <button className="flex-1 px-3 py-2 bg-muted hover:bg-muted/80 rounded text-sm font-medium transition">
                <Download size={14} className="inline mr-1" />
                Download
              </button>
              <button className="px-3 py-2 bg-muted hover:bg-muted/80 rounded text-sm font-medium transition">
                <Flag size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
