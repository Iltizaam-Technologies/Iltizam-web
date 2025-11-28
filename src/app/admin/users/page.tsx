"use client"

import { useState } from "react"
import { AdminNav } from "../../../../components/admin/admin-nav"
import { UserManagementHeader } from "../../../../components/admin/user-management/header"
import { UserTable } from "../../../../components/admin/user-management/user-table"
import { Footer } from "../../../../components/footer"


export default function UserManagementPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <div className="flex">
        <main className="flex-1">
          <UserManagementHeader />
          <div className="p-6 max-w-7xl mx-auto">
            <UserTable
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              filterStatus={filterStatus}
              setFilterStatus={setFilterStatus}
            />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
