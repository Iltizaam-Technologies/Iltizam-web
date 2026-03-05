"use client"

import Link from "next/link"
import { Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AdminForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-lg text-center">
        <div className="mb-4 flex justify-center">
          <div className="rounded-lg bg-primary p-3">
            <Lock className="h-8 w-8 text-primary-foreground" />
          </div>
        </div>
        <h1 className="mb-2 text-2xl font-semibold text-foreground">Forgot password?</h1>
        <p className="mb-6 text-sm text-muted-foreground">
          Admin password reset is not available here. Contact your system administrator to reset your password.
        </p>
        <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          <Link href="/admin/login">Back to login</Link>
        </Button>
      </div>
    </div>
  )
}
