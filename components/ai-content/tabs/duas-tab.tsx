"use client"

import { Edit, Trash2, Power } from "lucide-react"

const duas = [
  {
    context: "Morning",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا",
    english: "O Allah, I ask You for beneficial knowledge",
    status: "Active",
  },
  {
    context: "Stress",
    arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
    english: "Allah is sufficient for us, and He is the best disposer of affairs",
    status: "Active",
  },
  {
    context: "Procrastination",
    arabic: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي",
    english: "My Lord, expand for me my breast and ease for me my task",
    status: "Active",
  },
  {
    context: "Gratitude",
    arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    english: "Praise be to Allah, Lord of all the worlds",
    status: "Active",
  },
]

export function DuasTab() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">Manage spiritual messages and du'as shared with users</p>
        <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition">
          Add New Du'a
        </button>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Context</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Arabic Text</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">English Translation</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Status</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {duas.map((item, index) => (
              <tr key={index} className="border-b border-border hover:bg-muted/50 transition">
                <td className="py-3 px-4 text-sm text-foreground">{item.context}</td>
                <td className="py-3 px-4 text-base text-foreground font-arabic">{item.arabic}</td>
                <td className="py-3 px-4 text-sm text-muted-foreground max-w-md">{item.english}</td>
                <td className="py-3 px-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
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
        {duas.map((item, index) => (
          <div key={index} className="bg-white border border-border rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">{item.context}</span>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                {item.status}
              </span>
            </div>
            <p className="text-base text-foreground font-arabic leading-relaxed">{item.arabic}</p>
            <p className="text-sm text-muted-foreground italic">{item.english}</p>
            <div className="flex items-center justify-end gap-2 pt-2 border-t border-border">
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
        ))}
      </div>
    </div>
  )
}
