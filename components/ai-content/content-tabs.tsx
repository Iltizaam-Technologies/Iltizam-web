"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { AffirmationsTab } from "./tabs/affirmations-tab"
import { DuasTab } from "./tabs/duas-tab"
import { MotivationalScriptsTab } from "./tabs/motivational-scripts-tab"
import { AISystemPromptsTab } from "./tabs/ai-system-prompts-tab"

export function AIContentTabs() {
  const [activeTab, setActiveTab] = useState("affirmations")

  return (
    <Card>
      <CardContent className="pt-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="affirmations">Affirmations</TabsTrigger>
            <TabsTrigger value="duas">Du'as / Spiritual Messages</TabsTrigger>
            <TabsTrigger value="scripts">Motivational Scripts</TabsTrigger>
            <TabsTrigger value="prompts">AI System Prompts</TabsTrigger>
          </TabsList>

          <div className="mt-6">
            <TabsContent value="affirmations">
              <AffirmationsTab />
            </TabsContent>
            <TabsContent value="duas">
              <DuasTab />
            </TabsContent>
            <TabsContent value="scripts">
              <MotivationalScriptsTab />
            </TabsContent>
            <TabsContent value="prompts">
              <AISystemPromptsTab />
            </TabsContent>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  )
}
