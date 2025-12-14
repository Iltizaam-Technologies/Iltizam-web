"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"

export function AIControlCards() {
  const [aiEnabled, setAiEnabled] = useState(true)
  const [spiritualMode, setSpiritualMode] = useState(true)
  const [emotionalLevel, setEmotionalLevel] = useState([2])
  const [messageTone, setMessageTone] = useState("gentle")

  const emotionalLabels = ["Low", "Medium", "High", "Very High"]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* AI Status */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-foreground">AI Status</h3>
            <Switch checked={aiEnabled} onCheckedChange={setAiEnabled} />
          </div>
          <p className="text-xs text-muted-foreground">Global AI availability</p>
          <div className="mt-3">
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                aiEnabled ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
              }`}
            >
              {aiEnabled ? "Enabled" : "Disabled"}
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Emotional Intelligence Level */}
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-sm font-semibold text-foreground mb-2">Emotional Intelligence Level</h3>
          <p className="text-xs text-muted-foreground mb-4">How emotionally expressive the AI responds</p>
          <Slider min={0} max={3} step={1} value={emotionalLevel} onValueChange={setEmotionalLevel} className="mb-2" />
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            {emotionalLabels.map((label, index) => (
              <span key={index} className={emotionalLevel[0] === index ? "text-primary font-medium" : ""}>
                {label}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Spiritual Mode */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-foreground">Spiritual Mode</h3>
            <Switch checked={spiritualMode} onCheckedChange={setSpiritualMode} />
          </div>
          <p className="text-xs text-muted-foreground">Include du'as, Islamic reminders, faith-based motivation</p>
          <div className="mt-3">
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                spiritualMode ? "bg-primary/10 text-primary" : "bg-gray-100 text-gray-700"
              }`}
            >
              {spiritualMode ? "On" : "Off"}
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Message Tone Preset */}
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-sm font-semibold text-foreground mb-2">Message Tone Preset</h3>
          <p className="text-xs text-muted-foreground mb-4">Default communication style</p>
          <select
            value={messageTone}
            onChange={(e) => setMessageTone(e.target.value)}
            className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="gentle">Gentle & Calm</option>
            <option value="firm">Firm & Disciplined</option>
            <option value="cheerful">Cheerful & Friendly</option>
            <option value="reflective">Reflective & Deep</option>
          </select>
        </CardContent>
      </Card>
    </div>
  )
}
