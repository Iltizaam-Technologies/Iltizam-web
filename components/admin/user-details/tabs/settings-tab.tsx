"use client"

import { useEffect, useState, type FormEvent } from "react"
import { getAdminMe, updateAdminUser } from "@/lib/admin-api"

export type SettingsTabUser = {
  id: string
  name: string
  email: string
  role: string
  status: "Active" | "Inactive" | "Suspended"
}

type SettingsForm = {
  fullName: string
  email: string
  role: string
}

const ROLES = ["user", "admin", "super_admin"]

export function SettingsTab({
  user,
  onSaved,
}: {
  user?: SettingsTabUser | null
  onSaved?: (next: { name: string; email: string; role: string }) => void
}) {
  const [formData, setFormData] = useState<SettingsForm | null>(null)
  const [actorRole, setActorRole] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [saveError, setSaveError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    getAdminMe()
      .then((me) => {
        if (!cancelled) setActorRole(typeof me.role === "string" ? me.role : null)
      })
      .catch(() => {
        if (!cancelled) setActorRole(null)
      })
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    if (!user) {
      setFormData(null)
      return
    }
    setFormData({
      fullName: user.name,
      email: user.email,
      role: user.role,
    })
    setMessage(null)
    setSaveError(null)
  }, [user])

  if (!user || !formData) {
    return (
      <p className="text-sm text-muted-foreground">
        Open a user from the users list to review account settings. Nothing is loaded here.
      </p>
    )
  }

  const canEditRole = actorRole === "super_admin"
  const roleOptions = ROLES.includes(formData.role) ? ROLES : [formData.role, ...ROLES]

  const handleChange = (name: keyof SettingsForm, value: string) => {
    setFormData((prev) => (prev ? { ...prev, [name]: value } : prev))
    setMessage(null)
    setSaveError(null)
  }

  const handleSave = async (event: FormEvent) => {
    event.preventDefault()
    setSaving(true)
    setSaveError(null)
    setMessage(null)
    try {
      const payload: { name: string; email: string; role?: string } = {
        name: formData.fullName.trim(),
        email: formData.email.trim(),
      }
      if (canEditRole) payload.role = formData.role
      const saved = await updateAdminUser(user.id, payload)
      const name = typeof saved.name === "string" ? saved.name : payload.name
      const email = typeof saved.email === "string" ? saved.email : payload.email
      const role = typeof saved.role === "string" ? saved.role : formData.role
      setFormData({ fullName: name, email, role })
      setMessage("Name and email are saved on the server.")
      onSaved?.({ name, email, role })
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : "Could not save this account.")
    } finally {
      setSaving(false)
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSave}>
      <p className="text-xs text-muted-foreground">
        Name, email, and role are stored on the user. Account status is derived from subscription and active goals or habits. There is no deactivate flag to save.
      </p>
      <div>
        <label className="text-sm font-medium text-foreground block mb-2">Full name</label>
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
          disabled={!canEditRole}
          onChange={(e) => handleChange("role", e.target.value)}
          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-60"
        >
          {roleOptions.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
        {!canEditRole ? (
          <p className="text-xs text-muted-foreground mt-1">Only a super admin can change roles.</p>
        ) : null}
      </div>

      <div>
        <label className="text-sm font-medium text-foreground block mb-2">Status</label>
        <p className="text-sm text-foreground">{user.status}</p>
        <p className="text-xs text-muted-foreground mt-1">Shown from live subscription and engagement. It is not an editable account flag.</p>
      </div>

      {saveError ? <p className="text-sm text-red-600 dark:text-red-400">{saveError}</p> : null}
      {message ? <p className="text-sm text-green-700 dark:text-green-400">{message}</p> : null}

      <button
        type="submit"
        disabled={saving}
        className="w-full px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition mt-6 disabled:opacity-60"
      >
        {saving ? "Saving…" : "Save account"}
      </button>
    </form>
  )
}
