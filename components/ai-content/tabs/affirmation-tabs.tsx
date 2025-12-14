"use client"

import { Edit, Trash2, Power } from "lucide-react"

const affirmations = [
  {
    category: "Confidence",
    text: "I am capable of achieving my goals through consistent effort.",
    language: "English",
    status: "Active",
  },
  {
    category: "Focus",
    text: "I choose to stay present and focused on what truly matters.",
    language: "English",
    status: "Active",
  },
  {
    category: "Discipline",
    text: "Every small step I take brings me closer to success.",
    language: "English",
    status: "Active",
  },
  {
    category: "Healing",
    text: "I release what no longer serves me and embrace peace.",
    language: "English",
    status: "Draft",
  },
]

export function AffirmationsTab() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">Manage positive affirmations shown to users</p>
        <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition">
          Add New Affirmation
        </button>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Category</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Text Preview</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Language</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Status</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {affirmations.map((item, index) => (
              <tr key={index} className="border-b border-border hover:bg-muted/50 transition">
                <td className="py-3 px-4 text-sm text-foreground">{item.category}</td>
                <td className="py-3 px-4 text-sm text-foreground max-w-md truncate">{item.text}</td>
                <td className="py-3 px-4 text-sm text-foreground">{item.language}</td>
                <td className="py-3 px-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-muted rounded transition">
                      <Edit size={16} className="text-muted-foreground" />
                    </button>
                    <button className="p-2 hover:bg-muted rounded transition">
                      <Power size={16} className="text-muted-foreground" />
                    </button>
                    <button className="p-2 hover:bg-red-50 rounded transition">
                      <Trash2 size={16} className="text-red-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-3">
        {affirmations.map((item, index) => (
          <div key={index} className="bg-white border border-border rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">{item.category}</span>
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  item.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                }`}
              >
                {item.status}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{item.text}</p>
            <div className="flex items-center justify-between pt-2 border-t border-border">
              <span className="text-xs text-muted-foreground">{item.language}</span>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-muted rounded transition">
                  <Edit size={16} className="text-muted-foreground" />
                </button>
                <button className="p-2 hover:bg-muted rounded transition">
                  <Power size={16} className="text-muted-foreground" />
                </button>
                <button className="p-2 hover:bg-red-50 rounded transition">
                  <Trash2 size={16} className="text-red-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
