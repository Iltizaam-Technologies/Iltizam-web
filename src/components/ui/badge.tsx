import React from "react"

type PropsWithChildren<T = {}> = React.PropsWithChildren<T>

export const Badge: React.FC<
  PropsWithChildren<{ className?: string }>
> = ({ children, className = "" }) => {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${className}`}
    >
      {children}
    </span>
  )
}
