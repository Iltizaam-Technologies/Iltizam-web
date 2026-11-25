"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface WeeklyReportRow {
  id: string
  user: string
  weekRange: string
  tasksCompleted: number
  averageMood: string
  status: string
}

interface WeeklyReportsTabProps {
  weeklyReports?: WeeklyReportRow[]
  loading?: boolean
}

export function WeeklyReportsTab({ weeklyReports = [], loading }: WeeklyReportsTabProps) {
  const statusConfig: Record<string, string> = {
    Journaled: "bg-green-50 dark:bg-green-500/15 text-green-700 dark:text-green-400",
    "Tasks only": "bg-blue-50 dark:bg-blue-500/15 text-blue-700 dark:text-blue-400",
    Completed: "bg-green-50 dark:bg-green-500/15 text-green-700 dark:text-green-400",
    Skipped: "bg-red-50 dark:bg-red-500/15 text-red-700 dark:text-red-400",
  }

  return (
    <div>
      <p className="text-xs text-muted-foreground mb-4">
        Each row is one user and one Monday–Sunday week with a journal entry or a task completion. Downloads and flags are not stored.
      </p>
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
            </TableRow>
          </TableHeader>
          <TableBody>
            {(loading && !weeklyReports.length ? [] : weeklyReports).map((report) => (
              <TableRow key={report.id}>
                <TableCell className="font-medium">{report.user}</TableCell>
                <TableCell>{report.weekRange}</TableCell>
                <TableCell>{report.tasksCompleted}</TableCell>
                <TableCell>{report.averageMood}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${statusConfig[report.status] ?? ""}`}
                  >
                    {report.status}
                  </span>
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
                className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${statusConfig[report.status] ?? ""}`}
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
          </div>
        ))}
      </div>
      {!loading && weeklyReports.length === 0 ? (
        <p className="text-sm text-muted-foreground">No journal entries or task completions are stored yet.</p>
      ) : null}
    </div>
  )
}
