"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AdminLoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      // Simulate API call - replace with actual authentication logic
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Success - redirect to dashboard
      console.log("Login attempt with:", { email, password, rememberMe })
      // window.location.href = '/admin/dashboard'
    } catch (err) {
      setError("Invalid credentials. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Main Container */}
      <div className="flex min-h-screen flex-col lg:flex-row">
        {/* Left Section - Branding & Illustration */}
        <div className="flex w-full flex-col items-center justify-center bg-gradient-to-br from-background to-background px-6 py-12 lg:w-1/2 lg:px-12">
          <div className="w-full max-w-md text-center">
            {/* Logo Section */}
            <div className="mb-8 flex justify-center">
              <div className="rounded-lg bg-primary p-3">
                <Lock className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>

            {/* Headline */}
            <h1 className="mb-3 text-3xl font-bold text-foreground">Welcome back, Admin</h1>

            {/* Subtext */}
            <p className="mb-12 text-base text-muted-foreground">
              Manage users, monitor progress, and oversee the ILTIZAM AI system.
            </p>

            {/* Illustration Placeholder */}
            <div className="relative mb-8 aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10">
              <svg className="h-full w-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Dashboard illustration */}
                <rect x="40" y="50" width="120" height="80" rx="4" stroke="#BB6E27" strokeWidth="2" />
                <rect x="50" y="60" width="100" height="8" rx="2" fill="#BB6E27" opacity="0.3" />
                <rect x="50" y="75" width="100" height="4" rx="1" fill="#BB6E27" opacity="0.2" />
                <rect x="50" y="85" width="100" height="4" rx="1" fill="#BB6E27" opacity="0.2" />
                <rect x="50" y="95" width="70" height="4" rx="1" fill="#BB6E27" opacity="0.2" />

                {/* Decorative circles */}
                <circle cx="70" cy="130" r="6" fill="#F3C64B" opacity="0.6" />
                <circle cx="100" cy="135" r="4" fill="#BB6E27" opacity="0.4" />
                <circle cx="130" cy="128" r="5" fill="#F3C64B" opacity="0.5" />
              </svg>
            </div>

            {/* Security Note */}
            <p className="text-xs text-muted-foreground">Only authorized personnel can access this dashboard.</p>
          </div>
        </div>

        {/* Right Section - Login Form */}
        <div className="flex w-full flex-col items-center justify-center bg-background px-6 py-12 lg:w-1/2 lg:px-12">
          <div className="w-full max-w-[420px]">
            {/* Form Card */}
            <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
              {/* Form Header */}
              <h2 className="mb-2 text-2xl font-semibold text-foreground">Admin Login</h2>
              <p className="mb-6 text-sm text-muted-foreground">Sign in to access your admin dashboard</p>

              {/* Error Message */}
              {error && <div className="mb-4 rounded-md bg-destructive/10 p-3 text-sm text-destructive">{error}</div>}

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@iltizam.ai"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                    className="border-border bg-input"
                  />
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-sm font-medium text-foreground">
                      Password
                    </label>
                    <Link href="/admin/forgot-password" className="text-xs text-primary hover:underline">
                      Forgot Password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={isLoading}
                    className="border-border bg-input"
                  />
                </div>

                {/* Remember Me */}
                <div className="flex items-center gap-2">
                  <input
                    id="remember"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    disabled={isLoading}
                    className="h-4 w-4 rounded border-border"
                  />
                  <label htmlFor="remember" className="text-sm text-muted-foreground">
                    Remember me
                  </label>
                </div>

                {/* Login Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {isLoading ? (
                    <>
                      <span className="inline-block animate-spin mr-2">⟳</span>
                      Signing in...
                    </>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </form>

              {/* Security Info */}
              <p className="mt-6 text-center text-xs text-muted-foreground">
                <Lock className="mb-1 inline-block h-3 w-3" /> Your connection is secure and encrypted.
              </p>
            </div>

            {/* Footer */}
            <div className="mt-8 text-center text-xs text-muted-foreground">
              © 2025 ILTIZAM AI. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
