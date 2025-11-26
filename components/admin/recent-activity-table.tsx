import { CheckCircle, Clock, XCircle } from "lucide-react"

interface Activity {
  user: string
  activity: string
  time: string
  status: "completed" | "pending" | "failed"
}

const activityData: Activity[] = [
  { user: "Sarah Johnson", activity: "Completed morning workout goal", time: "2 hours ago", status: "completed" },
  { user: "Ahmed Hassan", activity: "Submitted project proposal", time: "4 hours ago", status: "completed" },
  { user: "Maria Garcia", activity: "Reading habit tracking", time: "6 hours ago", status: "pending" },
  { user: "John Smith", activity: "Meditation session logged", time: "8 hours ago", status: "completed" },
  { user: "Lisa Chen", activity: "Study goal failed - no update", time: "10 hours ago", status: "failed" },
  { user: "Amara Okafor", activity: "Updated daily priorities", time: "12 hours ago", status: "completed" },
]

const statusConfig = {
  completed: { icon: CheckCircle, bg: "bg-green-50", text: "text-green-700", label: "Completed" },
  pending: { icon: Clock, bg: "bg-yellow-50", text: "text-yellow-700", label: "Pending" },
  failed: { icon: XCircle, bg: "bg-red-50", text: "text-red-700", label: "Failed" },
}

export function RecentActivityTable() {
  return (
    <div className="bg-white rounded-lg border border-border shadow-sm overflow-hidden">
      <div className="p-6 border-b border-border">
        <h2 className="text-lg font-semibold text-foreground">Recent Activity</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">User</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Activity</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Time</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {activityData.map((item, index) => {
              const config = statusConfig[item.status]
              const StatusIcon = config.icon
              return (
                <tr key={index} className="border-b border-border hover:bg-muted transition">
                  <td className="px-6 py-4 text-sm text-foreground font-medium">{item.user}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{item.activity}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{item.time}</td>
                  <td className="px-6 py-4">
                    <div className={`flex items-center gap-2 px-3 py-1 rounded-full w-fit ${config.bg}`}>
                      <StatusIcon size={16} className={config.text} />
                      <span className={`text-sm font-medium ${config.text}`}>{config.label}</span>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
