"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Circle } from "lucide-react"

export function TasksSection() {
  const tasks = [
    { id: 1, title: "Research and planning", status: "Done", dueDate: "Nov 5" },
    { id: 2, title: "Design system architecture", status: "Done", dueDate: "Nov 12" },
    { id: 3, title: "Backend development phase 1", status: "Pending", dueDate: "Nov 25" },
    { id: 4, title: "Frontend implementation", status: "Pending", dueDate: "Dec 5" },
    { id: 5, title: "Testing and QA", status: "Pending", dueDate: "Dec 20" },
  ]

  const completedCount = tasks.filter((t) => t.status === "Done").length

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Tasks</CardTitle>
        <p className="text-xs text-muted-foreground font-medium mt-1">
          Completed {completedCount} of {tasks.length}
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {tasks.map((task, index) => (
            <div key={task.id}>
              <div className="flex items-start gap-3 py-3">
                {task.status === "Done" ? (
                  <CheckCircle2 size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
                ) : (
                  <Circle size={18} className="text-muted-foreground mt-0.5 flex-shrink-0" />
                )}
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-sm font-medium ${task.status === "Done" ? "line-through text-muted-foreground" : "text-foreground"}`}
                  >
                    {task.title}
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded ${
                        task.status === "Done" ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      {task.status}
                    </span>
                    <span className="text-xs text-muted-foreground">{task.dueDate}</span>
                  </div>
                </div>
              </div>
              {index < tasks.length - 1 && <div className="border-b border-border" />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
