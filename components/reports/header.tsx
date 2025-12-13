import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function ReportsHeader() {
  return (
    <div className="bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Breadcrumb className="mb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin/dashboard">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>Reports & Wraps</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-3xl font-bold text-foreground">Reports & Wraps</h1>
        <p className="text-muted-foreground mt-2">Monitor user progress reports and end-of-year summaries.</p>
      </div>
    </div>
  )
}
