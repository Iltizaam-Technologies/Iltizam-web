import * as React from "react"

export function Breadcrumb({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return <nav className={`flex items-center space-x-1 ${className}`} {...props} />
}

export function BreadcrumbList({
  className = "",
  ...props
}: React.HTMLAttributes<ol>) {
  return <ol className={`flex items-center space-x-1 ${className}`} {...props} />
}

export function BreadcrumbItem({
  className = "",
  ...props
}: React.HTMLAttributes<li>) {
  return <li className={className} {...props} />
}

export function BreadcrumbLink({
  asChild,
  className = "",
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { asChild?: boolean }) {
  return (
    <span className={className}>
      {props.children}
    </span>
  )
}

export function BreadcrumbSeparator({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={`text-muted-foreground px-1 ${className}`} {...props}>
      /
    </span>
  )
}

export function BreadcrumbPage({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={`font-semibold text-foreground ${className}`} {...props} />
  )
}
