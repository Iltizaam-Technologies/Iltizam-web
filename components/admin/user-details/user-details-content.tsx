"use client"

import { useState, type FormEvent } from "react"
import { Mail, MapPin, Calendar, Lock, LogOut } from "lucide-react"
import { OverviewTab } from "./tabs/overview-tab"
import { GoalsTab } from "./tabs/goals-tab"
import { ActivityTab } from "./tabs/activity-tab"
import { FinancialTab } from "./tabs/financial-tab"
import { SettingsTab } from "./tabs/settings-tab"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { resetAdminUserPassword, type UserOverviewStats } from "@/lib/admin-api"


export interface UserDetailsUser {
  id: string
  name: string
  email: string
  role: string
  status: "Active" | "Inactive" | "Suspended"
  joinedDate: string
  avatar: string
  location?: string
}

interface UserDetailsContentProps {
  user: UserDetailsUser | null
  stats?: UserOverviewStats | null
  loading?: boolean
  error?: string | null
  onUserUpdated?: (next: { name: string; email: string; role: string }) => void
}

export function UserDetailsContent({ user: userProp, stats, loading, error, onUserUpdated }: UserDetailsContentProps) {
  const [activeTab, setActiveTab] = useState("overview")
  const [resetOpen, setResetOpen] = useState(false)
  const [password, setPassword] = useState("")
  const [resetting, setResetting] = useState(false)
  const [resetError, setResetError] = useState<string | null>(null)
  const [resetMessage, setResetMessage] = useState<string | null>(null)

  const statusConfig = {
    Active: { bg: "bg-green-50 dark:bg-green-500/15", text: "text-green-700 dark:text-green-400", label: "Active" },
    Inactive: { bg: "bg-yellow-50 dark:bg-yellow-500/15", text: "text-yellow-700 dark:text-yellow-400", label: "Inactive" },
    Suspended: { bg: "bg-red-50 dark:bg-red-500/15", text: "text-red-700 dark:text-red-400", label: "Suspended" },
  }

  if (loading) {
    return (
      <div className="py-12 text-center text-muted-foreground">Loading user…</div>
    )
  }
  if (error) {
    return (
      <div className="p-4 rounded-lg bg-red-50 dark:bg-red-500/15 text-red-700 dark:text-red-400 text-sm">{error}</div>
    )
  }
  if (!userProp) {
    return (
      <div className="p-4 rounded-lg bg-muted text-muted-foreground text-sm">User not found.</div>
    )
  }

  const user = userProp
  const config = statusConfig[user.status as keyof typeof statusConfig]

  const handleResetPassword = async (event: FormEvent) => {
    event.preventDefault()
    setResetting(true)
    setResetError(null)
    setResetMessage(null)
    try {
      await resetAdminUserPassword(user.id, password)
      setPassword("")
      setResetOpen(false)
      setResetMessage("Password updated. It is not shown again.")
    } catch (err) {
      setResetError(err instanceof Error ? err.message : "Could not reset the password.")
    } finally {
      setResetting(false)
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Panel - User Summary */}
      <div className="lg:col-span-1">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="mb-4">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{user.avatar}</span>
                </div>
              </div>
              <h2 className="text-xl font-bold text-foreground">{user.name}</h2>
              <p className="text-muted-foreground text-sm mt-1">{user.email}</p>
              <span
                className={`inline-flex px-3 py-1 rounded-full text-sm font-medium mt-3 ${config.bg} ${config.text}`}
              >
                {config.label}
              </span>
            </div>

            <div className="space-y-4 border-t border-border pt-6">
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-muted-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Email</p>
                  <p className="text-sm text-foreground">{user.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-muted-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Location</p>
                  <p className="text-sm text-foreground">{user.location ?? "Not stored"}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar size={18} className="text-muted-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Joined On</p>
                  <p className="text-sm text-foreground">{user.joinedDate}</p>
                </div>
              </div>

              <div className="bg-muted rounded-lg p-3 mt-4">
                <p className="text-xs text-muted-foreground font-medium mb-1">User Role</p>
                <p className="text-sm font-semibold text-foreground">{user.role}</p>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-3 pt-6 border-t border-border">
            <button
              type="button"
              disabled
              title="Users have no deactivate flag."
              className="w-full px-4 py-2 border border-border text-muted-foreground text-sm font-medium rounded-lg opacity-70 cursor-not-allowed"
            >
              <LogOut size={16} className="inline mr-2" />
              Deactivate unavailable
            </button>
            <p className="text-xs text-muted-foreground">
              The status badge comes from subscription and active goals or habits. There is no suspended flag to turn off.
            </p>
            <button
              type="button"
              onClick={() => {
                setResetOpen((open) => !open)
                setResetError(null)
              }}
              className="w-full px-4 py-2 border border-border text-foreground text-sm font-medium rounded-lg hover:bg-muted transition"
            >
              <Lock size={16} className="inline mr-2" />
              Reset Password
            </button>
            {resetOpen ? (
              <form className="w-full space-y-2" onSubmit={handleResetPassword}>
                <input
                  type="password"
                  value={password}
                  minLength={8}
                  autoComplete="new-password"
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="New password, at least 8 characters"
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-sm"
                />
                <button
                  type="submit"
                  disabled={resetting || password.length < 8}
                  className="w-full px-3 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium disabled:opacity-60"
                >
                  {resetting ? "Updating…" : "Set password"}
                </button>
              </form>
            ) : null}
            {resetError ? <p className="text-xs text-red-600 dark:text-red-400">{resetError}</p> : null}
            {resetMessage ? <p className="text-xs text-green-700 dark:text-green-400">{resetMessage}</p> : null}
          </CardFooter>
        </Card>
      </div>

      {/* Right Panel - Tabs */}
      <div className="lg:col-span-2">
        <Card>
          <CardContent className="pt-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="goals">Goals</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="financial">Financial</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <div className="mt-6">
                <TabsContent value="overview">
                  <OverviewTab stats={stats} />
                </TabsContent>
                <TabsContent value="goals">
                  <GoalsTab userId={user.id} />
                </TabsContent>
                <TabsContent value="activity">
                  <ActivityTab userId={user.id} />
                </TabsContent>
                <TabsContent value="financial">
                  <FinancialTab userId={user.id} />
                </TabsContent>
                <TabsContent value="settings">
                  <SettingsTab
                    user={{
                      id: user.id,
                      name: user.name,
                      email: user.email,
                      role: user.role,
                      status: user.status,
                    }}
                    onSaved={onUserUpdated}
                  />
                </TabsContent>
              </div>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
