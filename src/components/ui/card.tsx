import React from "react"

type PropsWithChildren<T = {}> = React.PropsWithChildren<T>

export const Card: React.FC<PropsWithChildren<{ className?: string }>> = ({ children, className = "" }) => {
  return <div className={`rounded-2xl border border-border bg-card p-0 shadow-sm ${className}`}>{children}</div>
}

export const CardHeader: React.FC<PropsWithChildren<{ className?: string }>> = ({ children, className = "" }) => {
  return <div className={`p-4 border-b border-border ${className}`}>{children}</div>
}

export const CardTitle: React.FC<PropsWithChildren<{ className?: string }>> = ({ children, className = "" }) => {
  return <h3 className={`text-lg font-semibold text-foreground ${className}`}>{children}</h3>
}

export const CardContent: React.FC<PropsWithChildren<{ className?: string }>> = ({ children, className = "" }) => {
  return <div className={`p-4 ${className}`}>{children}</div>
}

export const CardFooter: React.FC<PropsWithChildren<{ className?: string }>> = ({ children, className = "" }) => {
  return <div className={`p-4 border-t border-border ${className}`}>{children}</div>
}
