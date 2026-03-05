"use client"

import { useState, useEffect } from "react"
import { AdminNav } from "../../../../components/admin/admin-nav"
import { Footer } from "../../../../components/footer"
import { ReportsHeader } from "../../../../components/reports/header"
import { ReportInsights } from "../../../../components/reports/report-insights"
import { ReportsSummaryCards } from "../../../../components/reports/report-summary-card"
import { ReportsTabsContent } from "../../../../components/reports/reports-tabs-content"
import { getReportsSummary, getReportsWeekly, getReportsInsights } from "../../../../lib/admin-api"

export default function ReportsWrapsPage() {
  const [summary, setSummary] = useState<Record<string, unknown> | null>(null)
  const [weeklyItems, setWeeklyItems] = useState<Array<{ id: string; user: string; weekRange: string; tasksCompleted: number; averageMood: string; status: string }>>([])
  const [insights, setInsights] = useState<Array<{ text: string; impact: string }>>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    Promise.all([
      getReportsSummary().then((d) => setSummary(d)).catch(() => setSummary(null)),
      getReportsWeekly({ page: 1, limit: 20 }).then((r) => setWeeklyItems(r.items ?? [])).catch(() => setWeeklyItems([])),
      getReportsInsights().then((d) => setInsights(d ?? [])).catch(() => setInsights([])),
    ]).finally(() => setLoading(false))
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <div className="flex">
        <main className="flex-1">
          <ReportsHeader />
          <div className="p-6 max-w-7xl mx-auto space-y-6">
            <ReportsSummaryCards summary={summary} loading={loading} />
            <ReportsTabsContent weeklyReports={weeklyItems} weeklyLoading={loading} />
            <ReportInsights insights={insights} />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
