"use client"

import { AdminNav } from "@/components/admin/admin-nav"
import { Footer } from "@/components/footer"
import { ReportsHeader } from "@/components/admin/reports/header"
import { ReportsSummaryCards } from "@/components/admin/reports/reports-summary-cards"
import { ReportsTabsContent } from "@/components/admin/reports/reports-tabs-content"
import { ReportInsights } from "@/components/admin/reports/report-insights"

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
