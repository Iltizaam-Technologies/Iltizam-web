"use client"

import { AdminNav } from "@/components/admin/admin-nav"
import { DashboardHeader } from "@/components/admin/dashboard-header"
import { KPICards } from "@/components/admin/kpi-cards"
import { ChartsSection } from "@/components/admin/charts-section"
import { RecentActivityTable } from "@/components/admin/recent-activity-table"
import { Sidebar } from "@/components/admin/sidebar"
import { Footer } from "@/components/footer"

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <div className="flex">
        <main className="flex-1">
          <DashboardHeader />
          <div className="p-6 max-w-7xl mx-auto">
            <KPICards />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
              <div className="lg:col-span-2">
                <ChartsSection />
              </div>
              <div className="hidden lg:block">
                <Sidebar />
              </div>
            </div>
            <div className="mt-8">
              <RecentActivityTable />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
