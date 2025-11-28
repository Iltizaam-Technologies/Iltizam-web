import React from "react"

type PropsWithChildren<T = {}> = React.PropsWithChildren<T>

export const Card: React.FC<PropsWithChildren<{ className?: string }>> = ({ children, className = "" }) => {
  return <div className={`rounded-2xl border border-border bg-card p-4 shadow-sm ${className}`}>{children}</div>
}

export const CardContent: React.FC<PropsWithChildren<{ className?: string }>> = ({ children, className = "" }) => {
  return <div className={`p-4 ${className}`}>{children}</div>
}

export const CardFooter: React.FC<PropsWithChildren<{ className?: string }>> = ({ children, className = "" }) => {
  return <div className={`p-4 border-t border-border ${className}`}>{children}</div>
}
