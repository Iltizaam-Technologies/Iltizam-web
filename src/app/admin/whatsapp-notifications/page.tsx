"use client"

import { AdminNav } from "../../../../components/admin/admin-nav"
import { Footer } from "../../../../components/footer"
import { DeliveryLogs } from "../dashboard/deliver-logs"
import { WhatsAppHeader } from "../dashboard/header"
import { MessagePreview } from "../dashboard/message-preview"
import { NotificationRules } from "../dashboard/notification-rules"
import { NotificationTypesTable } from "../dashboard/notification-types-table"
import { ProviderConfiguration } from "../dashboard/provider-configuration"
import { StatusBar } from "../dashboard/status-bar"


export default function WhatsAppNotificationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <div className="flex">
        <main className="flex-1">
          <WhatsAppHeader />
          <div className="p-6 max-w-7xl mx-auto space-y-8">
            <StatusBar />
            <ProviderConfiguration />
            <NotificationTypesTable />
            <NotificationRules />
            <MessagePreview />
            <DeliveryLogs />

            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-end border-t border-border pt-6">
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition">
                Save All Settings
              </button>
              <button className="px-6 py-2 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition">
                Reset to Defaults
              </button>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
