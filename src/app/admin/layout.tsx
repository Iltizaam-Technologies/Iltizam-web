"use client"

import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { getAdminMe } from "@/lib/admin-api"

function getToken(): string | null {
  if (typeof window === "undefined") return null
  return localStorage.getItem("admin_token")
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const [allowed, setAllowed] = useState<boolean | null>(null)

  const isLoginPage = pathname === "/admin/login"

  useEffect(() => {
    if (isLoginPage) {
      setAllowed(true)
      return
    }

    const token = getToken()
    if (!token) {
      router.replace("/admin/login")
      return
    }

    getAdminMe()
      .then(() => setAllowed(true))
      .catch(() => {
        localStorage.removeItem("admin_token")
        router.replace("/admin/login")
      })
  }, [isLoginPage, pathname, router])

  if (isLoginPage) {
    return <>{children}</>
  }

  if (allowed === null) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-2 border-primary border-t-transparent" />
      </div>
    )
  }

  return <>{children}</>
}
