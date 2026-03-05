"use client"

import { useState, useEffect } from "react"
import { AdminNav } from "../../../../components/admin/admin-nav"
import { Footer } from "../../../../components/footer"
import { AIInsights } from "../../../../components/mood-analytics/ai-insights"
import { EmotionalRiskFlags } from "../../../../components/mood-analytics/emotional-risk-flags"
import { MoodAnalyticsHeader } from "../../../../components/mood-analytics/header"
import { MoodDistribution } from "../../../../components/mood-analytics/mood-distribution"
import { MoodSummaryCards } from "../../../../components/mood-analytics/mood-summary-cards"
import { MoodTrendsChart } from "../../../../components/mood-analytics/mood-trends-chart"
import {
  getMoodSummary,
  getMoodTrends,
  getMoodDistribution,
  getMoodRiskFlags,
} from "@/lib/admin-api"

export default function MoodAnalyticsPage() {
  const [summary, setSummary] = useState<Record<string, unknown> | null>(null)
  const [trends, setTrends] = useState<Array<{ date: string; mood: number }>>([])
  const [distribution, setDistribution] = useState<Array<{ emoji: string; label: string; percentage: number; color: string }>>([])
  const [riskFlags, setRiskFlags] = useState<Array<{ user: string; lastMood: string; trend: string; riskLevel: "Low" | "Medium" | "High"; userId?: string }>>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    Promise.all([
      getMoodSummary().then(setSummary).catch(() => setSummary(null)),
      getMoodTrends().then((d) => setTrends(d || [])).catch(() => setTrends([])),
      getMoodDistribution().then((d) => setDistribution(d || [])).catch(() => setDistribution([])),
      getMoodRiskFlags(20).then((d) => setRiskFlags(d || [])).catch(() => setRiskFlags([])),
    ]).finally(() => setLoading(false))
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <div className="flex">
        <main className="flex-1">
          <MoodAnalyticsHeader />
          <div className="p-6 max-w-7xl mx-auto space-y-6">
            <MoodSummaryCards summary={summary} loading={loading} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <MoodTrendsChart moodData={trends} loading={loading} />
              <MoodDistribution distribution={distribution} loading={loading} />
            </div>
            <EmotionalRiskFlags riskData={riskFlags} loading={loading} />
            <AIInsights />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
