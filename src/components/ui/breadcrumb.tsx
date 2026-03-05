import React from "react"

type Props = React.HTMLAttributes<HTMLElement>

export const Breadcrumb: React.FC<Props> = ({ children, className = "", ...props }) => {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center ${className}`} {...props}>
      {children}
    </nav>
  )
}

export const BreadcrumbList: React.FC<React.OlHTMLAttributes<HTMLOListElement>> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <ol className={`flex items-center space-x-2 ${className}`} {...props}>
      {children}
    </ol>
  )
}

export const BreadcrumbItem: React.FC<React.LiHTMLAttributes<HTMLLIElement>> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <li className={`flex items-center ${className}`} {...props}>
      {children}
    </li>
  )
}

export const BreadcrumbLink: React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { asChild?: boolean }
> = ({ children, className = "", asChild = false, ...props }) => {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<{ className?: string }>, {
      className: [className, (children as React.ReactElement<{ className?: string }>).props?.className].filter(Boolean).join(" "),
      ...props,
    })
  }
  return (
    <a className={className} {...props}>
      {children}
    </a>
  )
}

export const BreadcrumbSeparator: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  className = "",
  ...props
}) => {
  return (
    <span aria-hidden="true" className={`text-muted-foreground ${className}`} {...props}>
      /
    </span>
  )
}

export const BreadcrumbPage: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <span aria-current="page" className={`font-semibold text-foreground ${className}`} {...props}>
      {children}
    </span>
  )
}
