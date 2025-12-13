
import React from "react"

export const Table = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <table className={`w-full border-collapse ${className || ""}`}>
      {children}
    </table>
  )
}

export const TableHeader = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <thead className={className}>{children}</thead>
}

export const TableBody = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <tbody className={className}>{children}</tbody>
}

export const TableRow = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <tr className={`border-b ${className || ""}`}>{children}</tr>
}

export const TableHead = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <th className={`text-left font-medium px-4 py-2 ${className || ""}`}>{children}</th>
}

export const TableCell = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <td className={`px-4 py-2 ${className || ""}`}>{children}</td>
}
