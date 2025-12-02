"use client"

import { useState } from "react"
import { AdminNav } from "../../../../components/admin/admin-nav"
import { GoalsHeader } from "../../../../components/admin/goal-management/header"
import { GoalsTable } from "../../../../components/admin/goal-management/goals-table"
import { GoalsStats } from "../../../../components/admin/goal-management/goal-stats"
import { Footer } from "../../../../components/footer"



export default function GoalsManagement() {
  const [searchQuery, setSearchQuery] = useState("")
  const [goalType, setGoalType] = useState("all")
  const [goalStatus, setGoalStatus] = useState("all")

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <div className="flex">
        <main className="flex-1">
          <GoalsHeader />
          <div className="p-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <GoalsTable
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  goalType={goalType}
                  setGoalType={setGoalType}
                  goalStatus={goalStatus}
                  setGoalStatus={setGoalStatus}
                />
              </div>
              <div className="hidden lg:block">
                <GoalsStats />
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
