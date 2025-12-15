"use client"

import { AdminNav } from "@/components/admin/admin-nav"
import { WhatsAppHeader } from "@/components/admin/whatsapp-notifications/header"
import { StatusBar } from "@/components/admin/whatsapp-notifications/status-bar"
import { ProviderConfiguration } from "@/components/admin/whatsapp-notifications/provider-configuration"
import { NotificationTypesTable } from "@/components/admin/whatsapp-notifications/notification-types-table"
import { NotificationRules } from "@/components/admin/whatsapp-notifications/notification-rules"
import { MessagePreview } from "@/components/admin/whatsapp-notifications/message-preview"
import { DeliveryLogs } from "@/components/admin/whatsapp-notifications/delivery-logs"
import { Footer } from "@/components/footer"

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
