"use client"

import { useEffect, useState, type FormEvent } from "react"
import { formatDraftSavedAt, readBrowserDraft, writeBrowserDraft } from "../../../ai-content/browser-draft"

const PENDING_NOTE = "There is no admin endpoint to update this account. Saving does not change the server."

export type SettingsTabUser = {
  id: string
  name: string
  email: string
  role: string
  status: "Active" | "Inactive" | "Suspended"
}

type SettingsDraft = {
  fullName: string
  email: string
  role: string
  status: SettingsTabUser["status"]
}

const ROLES = ["user", "admin", "super_admin"]
const STATUSES: SettingsTabUser["status"][] = ["Active", "Inactive", "Suspended"]

function isDraft(value: unknown): value is SettingsDraft {
  if (!value || typeof value !== "object") return false
  const record = value as Record<string, unknown>
  return (
    typeof record.fullName === "string" &&
    typeof record.email === "string" &&
    typeof record.role === "string" &&
    (record.status === "Active" || record.status === "Inactive" || record.status === "Suspended")
  )
}

export function SettingsTab({ user }: { user?: SettingsTabUser | null }) {
  const [formData, setFormData] = useState<SettingsDraft | null>(null)
  const [savedAt, setSavedAt] = useState<string | null>(null)
  const [dirty, setDirty] = useState(false)
  const [saveError, setSaveError] = useState<string | null>(null)

  useEffect(() => {
    if (!user) {
      setFormData(null)
      setSavedAt(null)
      setDirty(false)
      return
    }
    const stored = readBrowserDraft<unknown>(`iltizam.admin.userSettings.${user.id}`)
    if (stored && isDraft(stored.value)) {
      setFormData(stored.value)
      setSavedAt(stored.savedAt)
    } else {
      setFormData({
        fullName: user.name,
        email: user.email,
        role: user.role,
        status: user.status,
      })
      setSavedAt(null)
    }
    setDirty(false)
    setSaveError(null)
  }, [user])

  if (!user || !formData) {
    return (
      <p className="text-sm text-muted-foreground">
        Open a user from the users list to review account settings. Nothing is loaded here.
      </p>
    )
  }

  const roleOptions = ROLES.includes(formData.role) ? ROLES : [formData.role, ...ROLES]

  const handleChange = (name: keyof SettingsDraft, value: string) => {
    setFormData((prev) => (prev ? { ...prev, [name]: value } : prev))
    setDirty(true)
    setSaveError(null)
  }

  const handleSave = (event: FormEvent) => {
    event.preventDefault()
    try {
      const draft = writeBrowserDraft(`iltizam.admin.userSettings.${user.id}`, formData)
      setSavedAt(draft.savedAt)
      setDirty(false)
      setSaveError(null)
    } catch {
      setSaveError("Could not save this draft in the browser.")
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSave}>
      <p className="text-xs text-muted-foreground">{formatDraftSavedAt(savedAt, PENDING_NOTE)}</p>
      <div>
        <label className="text-sm font-medium text-foreground block mb-2">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-foreground block mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-foreground block mb-2">Role</label>
        <select
          name="role"
          value={formData.role}
          onChange={(e) => handleChange("role", e.target.value)}
          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          {roleOptions.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-sm font-medium text-foreground block mb-2">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={(e) => handleChange("status", e.target.value)}
          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          {STATUSES.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      {dirty ? <p className="text-xs text-muted-foreground">Unsaved draft.</p> : null}
      {saveError ? <p className="text-sm text-red-600">{saveError}</p> : null}

      <button
        type="submit"
        className="w-full px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition mt-6"
      >
        {dirty || !savedAt ? "Save draft in this browser" : "Draft saved in this browser"}
      </button>
    </form>
  )
}
