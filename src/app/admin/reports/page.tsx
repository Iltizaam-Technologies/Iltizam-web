"use client"

import { AdminNav } from "../../../../components/admin/admin-nav"
import { Footer } from "../../../../components/footer"
import { ReportsHeader } from "../../../../components/reports/header"
import { ReportInsights } from "../../../../components/reports/report-insights"
import { ReportsSummaryCards } from "../../../../components/reports/report-summary-card"
import { ReportsTabsContent } from "../../../../components/reports/reports-tabs-content"



export default function ReportsWrapsPage() {
  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <div className="flex">
        <main className="flex-1">
          <ReportsHeader />
          <div className="p-6 max-w-7xl mx-auto space-y-6">
            {/* Top Summary Cards */}
            <ReportsSummaryCards />

            {/* Tabbed Content */}
            <ReportsTabsContent />

            {/* Bottom Insights Section */}
            <ReportInsights />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
