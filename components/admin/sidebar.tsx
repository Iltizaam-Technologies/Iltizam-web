import { Server, TrendingUp } from "lucide-react"

interface SidebarProps {
  signupsThisWeek?: number | null
}

export function Sidebar({ signupsThisWeek }: SidebarProps) {
  const signups = signupsThisWeek ?? 0

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-border p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-foreground mb-4">System Health</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">CPU Usage</span>
            <span className="text-sm font-semibold text-foreground">—</span>
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-primary" style={{ width: "0%" }}></div>
          </div>
        </div>

        <div className="space-y-3 mt-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Memory</span>
            <span className="text-sm font-semibold text-foreground">—</span>
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-accent" style={{ width: "0%" }}></div>
          </div>
        </div>

        <div className="space-y-3 mt-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Storage</span>
            <span className="text-sm font-semibold text-foreground">—</span>
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-green-600" style={{ width: "0%" }}></div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-border p-6 shadow-sm">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Server Status</h3>
          <div className="w-3 h-3 bg-green-600 rounded-full"></div>
        </div>
        <p className="text-sm text-muted-foreground mb-3">All systems operational</p>
        <div className="flex items-center gap-2 text-sm text-primary font-medium">
          <Server size={16} />
          <span>API: Stable</span>
        </div>
      </div>

      <div className="bg-gradient-to-br from-primary to-primary/80 rounded-lg p-6 shadow-sm text-white">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-semibold">New Signups</h3>
          <TrendingUp size={20} />
        </div>
        <p className="text-3xl font-bold">{signups.toLocaleString()}</p>
        <p className="text-sm text-primary-foreground/80 mt-1">This week</p>
      </div>
    </div>
  )
}
