"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { WeeklyReportsTab } from "./tabs/weekly-reports-tab"
import { MonthlyReviewsTab } from "./tabs/monthly-reviews-tab"
import { YearEndWrapsTab } from "./tabs/year-end-wraps-tab"

export function ReportsTabsContent() {
  const [activeTab, setActiveTab] = useState("weekly")

  return (
    <Card>
      <CardContent className="pt-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="weekly">Weekly Reports</TabsTrigger>
            <TabsTrigger value="monthly">Monthly Reviews</TabsTrigger>
            <TabsTrigger value="yearend">Year-End Wraps</TabsTrigger>
          </TabsList>

          <div className="mt-6">
            <TabsContent value="weekly">
              <WeeklyReportsTab />
            </TabsContent>
            <TabsContent value="monthly">
              <MonthlyReviewsTab />
            </TabsContent>
            <TabsContent value="yearend">
              <YearEndWrapsTab />
            </TabsContent>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  )
}
