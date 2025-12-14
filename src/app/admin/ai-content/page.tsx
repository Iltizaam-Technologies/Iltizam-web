"use client"

import { AdminNav } from "../../../../components/admin/admin-nav"
import { AIContentTabs } from "../../../../components/ai-content/content-tabs"
import { AIControlCards } from "../../../../components/ai-content/control-cards"
import { AIContentHeader } from "../../../../components/ai-content/hader"
import { SafetyGuardrails } from "../../../../components/ai-content/safety-guardrails"
import { Footer } from "../../../../components/footer"


export default function AIContentManagementPage() {
  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <div className="flex">
        <main className="flex-1">
          <AIContentHeader />
          <div className="p-6 max-w-7xl mx-auto space-y-6">
            {/* Top Control Cards */}
            <AIControlCards />

            {/* Main Tabbed Content */}
            <AIContentTabs />

            {/* Bottom Safety Section */}
            <SafetyGuardrails />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
