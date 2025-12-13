import { Eye, MessageCircle, AlertTriangle } from "lucide-react"

interface RiskFlag {
  user: string
  lastMood: string
  trend: string
  riskLevel: "Low" | "Medium" | "High"
}

const riskData: RiskFlag[] = [
  { user: "Sarah Johnson", lastMood: "😔 Low (2.1)", trend: "Declining", riskLevel: "High" },
  { user: "Ahmed Hassan", lastMood: "😐 Neutral (2.8)", trend: "Stable", riskLevel: "Medium" },
  { user: "Lisa Chen", lastMood: "😔 Low (1.9)", trend: "Declining", riskLevel: "High" },
  { user: "John Smith", lastMood: "😐 Neutral (3.0)", trend: "Improving", riskLevel: "Low" },
  { user: "Maria Garcia", lastMood: "😔 Low (2.3)", trend: "Declining", riskLevel: "Medium" },
  { user: "David Martinez", lastMood: "😐 Neutral (2.9)", trend: "Stable", riskLevel: "Low" },
]

const riskConfig = {
  Low: { bg: "bg-green-50", text: "text-green-700" },
  Medium: { bg: "bg-amber-50", text: "text-amber-700" },
  High: { bg: "bg-red-50", text: "text-red-700" },
}

export function EmotionalRiskFlags() {
  return (
    <div className="bg-white rounded-lg border border-border shadow-sm overflow-hidden">
      <div className="p-6 border-b border-border flex items-center gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-600" />
        <h2 className="text-lg font-semibold text-foreground">Emotional Risk Flags</h2>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">User</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Last Mood Logged</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Trend</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Risk Level</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Action</th>
            </tr>
          </thead>
          <tbody>
            {riskData.map((item, index) => {
              const config = riskConfig[item.riskLevel]
              return (
                <tr key={index} className="border-b border-border hover:bg-muted transition">
                  <td className="px-6 py-4 text-sm font-medium text-foreground">{item.user}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{item.lastMood}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{item.trend}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}
                    >
                      {item.riskLevel}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition">
                        <Eye size={14} />
                        View User
                      </button>
                      <button className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border border-border rounded-lg hover:bg-muted transition">
                        <MessageCircle size={14} />
                        Send Support
                      </button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4 p-6">
        {riskData.map((item, index) => {
          const config = riskConfig[item.riskLevel]
          return (
            <div key={index} className="border border-border rounded-lg p-4 bg-muted/50">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-semibold text-foreground">{item.user}</p>
                  <p className="text-sm text-muted-foreground mt-1">{item.lastMood}</p>
                </div>
                <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
                  {item.riskLevel}
                </span>
              </div>
              <div className="mb-3">
                <span className="text-xs text-muted-foreground">Trend: </span>
                <span className="text-xs font-medium text-foreground">{item.trend}</span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-primary text-primary-foreground rounded-lg text-xs font-medium hover:bg-primary/90 transition">
                  <Eye size={14} />
                  View
                </button>
                <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 border border-border rounded-lg text-xs font-medium hover:bg-muted transition">
                  <MessageCircle size={14} />
                  Support
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
