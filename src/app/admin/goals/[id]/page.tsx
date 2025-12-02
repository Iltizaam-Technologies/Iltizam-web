"use client"

import { AdminNav } from "../../../../../components/admin/admin-nav"
import { Footer } from "../../../../../components/footer"
import { ActivityTimeline } from "../../../../../components/goal-details/activity-timeline"
import { AdminNotesSection } from "../../../../../components/goal-details/admin-notes"
import { GoalOverview } from "../../../../../components/goal-details/goal-overview"
import { GoalDetailsHeader } from "../../../../../components/goal-details/goals-details-header"
import { TasksSection } from "../../../../../components/goal-details/tasks-section"


export default function GoalDetailsPage() {
  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <div className="flex">
        <main className="flex-1">
          <GoalDetailsHeader />
          <div className="p-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="lg:col-span-2">
                <GoalOverview />
              </div>
              <div className="space-y-6">
                <TasksSection />
                <ActivityTimeline />
              </div>
            </div>
            <div>
              <AdminNotesSection />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
