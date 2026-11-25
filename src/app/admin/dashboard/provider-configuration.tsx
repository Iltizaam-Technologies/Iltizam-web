"use client"

import { Settings } from "lucide-react"

export function ProviderConfiguration() {
  return (
    <div className="bg-white rounded-lg border border-border shadow-sm overflow-hidden">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <Settings className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Provider Configuration</h2>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <p className="text-sm text-foreground">
          WhatsApp is sent by the API through Meta&apos;s Cloud API. The token, phone number ID, template name, and
          webhook verify token are server environment variables. This page cannot read or change them.
        </p>
        <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
          <li>WHATSAPP_TOKEN</li>
          <li>WHATSAPP_PHONE_NUMBER_ID</li>
          <li>WHATSAPP_TEMPLATE_NAME</li>
          <li>WHATSAPP_VERIFY_TOKEN</li>
        </ul>
        <p className="text-sm text-muted-foreground">
          Broadcasts on this page use the existing notification API. A green &quot;Connected&quot; state is not shown
          here because this screen does not test Meta.
        </p>
      </div>
    </div>
  )
}
