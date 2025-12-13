"use client"

import { AdminNav } from "@/components/admin/admin-nav"
import { Footer } from "@/components/footer"
import { MoodAnalyticsHeader } from "@/components/admin/mood-analytics/header"
import { MoodSummaryCards } from "@/components/admin/mood-analytics/mood-summary-cards"
import { MoodTrendsChart } from "@/components/admin/mood-analytics/mood-trends-chart"
import { MoodDistribution } from "@/components/admin/mood-analytics/mood-distribution"
import { EmotionalRiskFlags } from "@/components/admin/mood-analytics/emotional-risk-flags"
import { AIInsights } from "@/components/admin/mood-analytics/ai-insights"

export default function MoodAnalyticsPage() {
  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <div className="flex">
        <main className="flex-1">
          <MoodAnalyticsHeader />
          <div className="p-6 max-w-7xl mx-auto space-y-6">
            {/* Top Summary Cards */}
            <MoodSummaryCards />

            {/* Main Content - Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <MoodTrendsChart />
              <MoodDistribution />
            </div>

            {/* Emotional Risk Flags Table */}
            <EmotionalRiskFlags />

            {/* AI Insights */}
            <AIInsights />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
