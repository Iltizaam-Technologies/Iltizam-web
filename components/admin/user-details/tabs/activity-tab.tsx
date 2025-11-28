"use client"

import { useState } from "react"
import { Mail, MapPin, Calendar, Lock, LogOut } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { OverviewTab } from "./tabs/overview-tab"
import { GoalsTab } from "./tabs/goals-tab"
import { ActivityTab } from "./tabs/activity-tab"
import { FinancialTab } from "./tabs/financial-tab"
import { SettingsTab } from "./tabs/settings-tab"

export function UserDetailsContent() {
  const [activeTab, setActiveTab] = useState("overview")

  // Sample user data
  const user = {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    role: "Premium",
    status: "Active",
    joinedDate: "November 15, 2024",
    avatar: "SJ",
    location: "San Francisco, CA",
  }

  const statusConfig = {
    Active: { bg: "bg-green-50", text: "text-green-700", label: "Active" },
    Inactive: { bg: "bg-yellow-50", text: "text-yellow-700", label: "Inactive" },
    Suspended: { bg: "bg-red-50", text: "text-red-700", label: "Suspended" },
  }

  const config = statusConfig[user.status as keyof typeof statusConfig]

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
                  <p className="text-sm text-foreground">{user.location}</p>
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

          <CardFooter className="flex gap-2 pt-6 border-t border-border">
            <button className="flex-1 px-4 py-2 border border-red-200 text-red-700 text-sm font-medium rounded-lg hover:bg-red-50 transition">
              <LogOut size={16} className="inline mr-2" />
              Deactivate
            </button>
            <button className="flex-1 px-4 py-2 border border-border text-foreground text-sm font-medium rounded-lg hover:bg-muted transition">
              <Lock size={16} className="inline mr-2" />
              Reset Password
            </button>
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
                  <OverviewTab />
                </TabsContent>
                <TabsContent value="goals">
                  <GoalsTab />
                </TabsContent>
                <TabsContent value="activity">
                  <ActivityTab />
                </TabsContent>
                <TabsContent value="financial">
                  <FinancialTab />
                </TabsContent>
                <TabsContent value="settings">
                  <SettingsTab />
                </TabsContent>
              </div>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
