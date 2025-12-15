"use client"

import { useState } from "react"
import { Settings, CheckCircle } from "lucide-react"

export function ProviderConfiguration() {
  const [config, setConfig] = useState({
    providerName: "Twilio",
    apiKey: "••••••••••••••••",
    senderPhone: "08012121212",
    webhookUrl: "https://iltizam-ai.vercel.app/api/webhooks/whatsapp",
  })

  return (
    <div className="bg-white rounded-lg border border-border shadow-sm overflow-hidden">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <Settings className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Provider Configuration</h2>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Provider Name</label>
            <input
              type="text"
              value={config.providerName}
              onChange={(e) => setConfig({ ...config, providerName: e.target.value })}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">API Key</label>
            <input
              type="password"
              value={config.apiKey}
              onChange={(e) => setConfig({ ...config, apiKey: e.target.value })}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Sender Phone Number</label>
            <input
              type="text"
              value={config.senderPhone}
              onChange={(e) => setConfig({ ...config, senderPhone: e.target.value })}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Webhook URL</label>
            <input
              type="text"
              value={config.webhookUrl}
              readOnly
              className="w-full px-4 py-2 border border-border rounded-lg bg-muted text-muted-foreground cursor-not-allowed"
            />
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span className="text-sm text-green-700 font-medium">Connected</span>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition">
            Save Configuration
          </button>
          <button className="px-6 py-2 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition">
            Test Connection
          </button>
        </div>
      </div>
    </div>
  )
}
