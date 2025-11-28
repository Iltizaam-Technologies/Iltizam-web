"use client"

import type React from "react"

import { useState } from "react"

export function SettingsTab() {
  const [formData, setFormData] = useState({
    fullName: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    role: "Premium",
    status: "Active",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <form className="space-y-4">
      <div>
        <label className="text-sm font-medium text-foreground block mb-2">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-foreground block mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-foreground block mb-2">Role</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="User">User</option>
          <option value="Student">Student</option>
          <option value="Premium">Premium</option>
        </select>
      </div>

      <div>
        <label className="text-sm font-medium text-foreground block mb-2">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Suspended">Suspended</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition mt-6"
      >
        Save Changes
      </button>
    </form>
  )
}
