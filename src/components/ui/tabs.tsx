"use client"

import React, { createContext, useContext } from "react"

type TabsContextType = {
  value: string
  onValueChange?: (val: string) => void
}

const TabsContext = createContext<TabsContextType | null>(null)

export type TabsProps = {
  value: string
  onValueChange?: (val: string) => void
  children?: React.ReactNode
}

/**
 * Tabs — provides controlled value via context
 */
export const Tabs: React.FC<TabsProps> = ({ value, onValueChange, children }) => {
  return <TabsContext.Provider value={{ value, onValueChange }}>{children}</TabsContext.Provider>
}

/**
 * TabsList — wrapper for tab triggers (visual container)
 */
export const TabsList: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className }) => {
  return (
    <div role="tablist" className={`flex gap-2 ${className || ""}`}>
      {children}
    </div>
  )
}

/**
 * TabsTrigger — a single tab button; provide a `value` prop for the tab key
 */
export const TabsTrigger: React.FC<
  React.PropsWithChildren<{ value: string; className?: string }>
> = ({ value, children, className }) => {
  const ctx = useContext(TabsContext)
  if (!ctx) {
    console.warn("TabsTrigger must be used inside <Tabs>");
    return null
  }

  const selected = ctx.value === value
  return (
    <button
      role="tab"
      aria-selected={selected}
      onClick={() => ctx.onValueChange?.(value)}
      className={`px-3 py-1 text-sm rounded ${selected ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"} ${className || ""}`}
      type="button"
    >
      {children}
    </button>
  )
}

/**
 * TabsContent — renders its children only when its `value` matches the active tab
 */
export const TabsContent: React.FC<React.PropsWithChildren<{ value: string; className?: string }>> = ({
  value,
  children,
  className,
}) => {
  const ctx = useContext(TabsContext)
  if (!ctx) {
    console.warn("TabsContent must be used inside <Tabs>");
    return null
  }

  return ctx.value === value ? <div className={className}>{children}</div> : null
}
