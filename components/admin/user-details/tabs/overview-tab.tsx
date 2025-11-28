export function OverviewTab() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="bg-muted rounded-lg p-4">
        <p className="text-xs text-muted-foreground font-medium mb-1">Last Login</p>
        <p className="text-lg font-semibold text-foreground">Nov 28, 2024</p>
        <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
      </div>

      <div className="bg-muted rounded-lg p-4">
        <p className="text-xs text-muted-foreground font-medium mb-1">Total Goals Created</p>
        <p className="text-lg font-semibold text-foreground">24</p>
        <p className="text-xs text-muted-foreground mt-1">All time</p>
      </div>

      <div className="bg-muted rounded-lg p-4">
        <p className="text-xs text-muted-foreground font-medium mb-1">Goals Completed</p>
        <p className="text-lg font-semibold text-foreground">18</p>
        <p className="text-xs text-muted-foreground mt-1">75% completion rate</p>
      </div>

      <div className="bg-muted rounded-lg p-4">
        <p className="text-xs text-muted-foreground font-medium mb-1">Current Streak</p>
        <p className="text-lg font-semibold text-foreground">12 days</p>
        <p className="text-xs text-muted-foreground mt-1">Keep it up!</p>
      </div>

      <div className="sm:col-span-2 bg-muted rounded-lg p-4">
        <p className="text-xs text-muted-foreground font-medium mb-2">Last Activity</p>
        <p className="text-foreground">Completed goal: "Read for 30 minutes"</p>
        <p className="text-xs text-muted-foreground mt-2">Nov 28, 2024 at 2:15 PM</p>
      </div>
    </div>
  )
}
