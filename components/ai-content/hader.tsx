import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function AIContentHeader() {
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
              <BreadcrumbLink>AI & Content</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-3xl font-bold text-foreground">AI & Content Management</h1>
        <p className="text-muted-foreground mt-2">Control how ILTIZAM speaks, motivates, and supports users.</p>
      </div>
    </div>
  )
}
