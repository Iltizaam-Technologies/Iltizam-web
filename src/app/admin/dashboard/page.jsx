"use client"

import { useState, useEffect } from "react"
import { AdminNav } from "../../../../components/admin/admin-nav"
import { DashboardHeader } from "../../../../components/admin/dashboard-header"
import { KPICards } from "../../../../components/admin/kpi-cards"
import { ChartsSection } from "../../../../components/admin/charts-section"
import { RecentActivityTable } from "../../../../components/admin/recent-activity-table"
import { Sidebar } from "../../../../components/admin/sidebar"
import { Footer } from "../../../../components/footer"
import { getAdminStats, getUserGrowth, getActivityMetrics, getRecentActivity } from "../../../../lib/admin-api"

function formatTimeAgo(iso) {
  try {
    const d = new Date(iso)
    const now = new Date()
    const diffMs = now.getTime() - d.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMs / 3600000)
    const diffDays = Math.floor(diffMs / 86400000)
    if (diffMins < 60) return `${diffMins} min ago`
    if (diffHours < 24) return `${diffHours} hours ago`
    if (diffDays < 7) return `${diffDays} days ago`
    return d.toLocaleDateString()
  } catch {
    return iso
  }
}

export default function AdminDashboard() {
  const [stats, setStats] = useState(null)
  const [userGrowth, setUserGrowth] = useState([])
  const [activityMetrics, setActivityMetrics] = useState([])
  const [recentActivity, setRecentActivity] = useState([])
  const [loading, setLoading] = useState(true)
  const [chartsLoading, setChartsLoading] = useState(true)

  useEffect(() => {
    getAdminStats()
      .then((data) => setStats(data))
      .catch(() => setStats(null))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    setChartsLoading(true)
    Promise.all([
      getUserGrowth().then((d) => setUserGrowth(d || [])).catch(() => setUserGrowth([])),
      getActivityMetrics().then((d) => setActivityMetrics(d || [])).catch(() => setActivityMetrics([])),
      getRecentActivity(20).then((d) => setRecentActivity(d || [])).catch(() => setRecentActivity([])),
    ]).finally(() => setChartsLoading(false))
  }, [])

  const userGrowthData = (userGrowth || []).map((g) => ({ month: g.month, users: g.usersRegistered ?? 0 }))
  const weeklyActivityData = (activityMetrics || []).map((a) => ({ day: a.day, activity: a.activity ?? 0 }))
  const activityData = (recentActivity || []).map((r) => ({
    user: r.user ?? "—",
    activity: r.description ?? "—",
    time: formatTimeAgo(r.time),
    status: "completed",
  }))

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <div className="flex">
        <main className="flex-1">
          <DashboardHeader />
          <div className="p-6 max-w-7xl mx-auto">
            <KPICards stats={loading ? null : stats} />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
              <div className="lg:col-span-2">
                <ChartsSection
                  userGrowthData={userGrowthData}
                  weeklyActivityData={weeklyActivityData}
                  loading={chartsLoading}
                />
              </div>
              <div className="hidden lg:block">
                <Sidebar signupsThisWeek={stats?.users?.signupsThisWeek} />
              </div>
            </div>
            <div className="mt-8">
              <RecentActivityTable activityData={activityData} loading={chartsLoading} />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
