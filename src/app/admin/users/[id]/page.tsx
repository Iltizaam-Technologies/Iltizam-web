"use client"
// import { AdminNav } from "@/components/admin/admin-nav"
// import { Footer } from "@/components/footer"
// import { UserDetailsContent } from "@/components/admin/user-details/user-details-content"
import { AdminNav } from "../../../../../components/admin/admin-nav"
import { Footer } from "../../../../../components/footer"

export default function UserDetailsPage() {
  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <div className="flex">
        <main className="flex-1">
          <div className="bg-white border-b border-border">
            <div className="max-w-7xl mx-auto px-6 py-8">
              <h1 className="text-3xl font-bold text-foreground">User Details</h1>
              <p className="text-muted-foreground mt-2">View and manage user information, goals, and activity.</p>
            </div>
          </div>
          <div className="p-6 max-w-7xl mx-auto">
            <UserDetailsContent />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
