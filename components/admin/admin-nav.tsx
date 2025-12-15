import { LayoutDashboard, Users, Settings, User, Target, Heart, FileText, Brain } from "lucide-react"
import Link from "next/link"

export function AdminNav() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/admin/dashboard" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">AI</span>
              </div>
              <span className="font-semibold text-foreground hidden sm:inline">ILTIZAM</span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/admin/dashboard"
                className="flex items-center gap-2 text-foreground hover:text-primary transition"
              >
                <LayoutDashboard size={18} />
                <span className="text-sm">Dashboard</span>
              </Link>
              <Link
                href="/admin/users"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition"
              >
                <Users size={18} />
                <span className="text-sm">Users</span>
              </Link>
              <Link
                href="/admin/goals"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition"
              >
                <Target size={18} />
                <span className="text-sm">Goals</span>
              </Link>
              <Link
                href="/admin/mood-analytics"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition"
              >
                <Heart size={18} />
                <span className="text-sm">Mood Analytics</span>
              </Link>
              <Link
                href="/admin/user-details"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition"
              >
                <User size={18} />
                <span className="text-sm">User Details</span>
              </Link>
              <Link
                href="/admin/reports"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition"
              >
                <FileText size={18} />
                <span className="text-sm">Reports</span>
              </Link>
              <Link
                href="/admin/ai-content"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition"
              >
                <Brain size={18} />
                <span className="text-sm">AI & Content</span>
              </Link>
              <Link href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition">
                <Settings size={18} />
                <span className="text-sm">Settings</span>
              </Link>
            </div>
          </div>

          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-muted">
            <User size={20} className="text-muted-foreground" />
          </button>
        </div>
      </div>
    </nav>
  )
}
