"use client"

import { useState, useEffect } from "react"
import { AdminNav } from "../../../../components/admin/admin-nav"
import { Footer } from "../../../../components/footer"
import { getAdminCommunityPosts, deleteCommunityPost, type AdminCommunityPost } from "@/lib/admin-api"

function authorName(post: AdminCommunityPost): string {
  const u = post.userId
  if (!u) return "—"
  if (typeof u === "object" && u.name) return u.name
  if (typeof u === "object" && u.displayName) return u.displayName as string
  return "—"
}

function formatDate(d?: string): string {
  if (!d) return "—"
  try {
    return new Date(d).toLocaleString()
  } catch {
    return "—"
  }
}

export default function CommunityModerationPage() {
  const [posts, setPosts] = useState<AdminCommunityPost[]>([])
  const [pagination, setPagination] = useState({ page: 1, totalPages: 1 })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filterDeleted, setFilterDeleted] = useState<boolean | undefined>(undefined)
  const [deletingId, setDeletingId] = useState<string | null>(null)

  function fetchPosts(page: number) {
    setLoading(true)
    setError(null)
    getAdminCommunityPosts({
      page,
      limit: 20,
      isDeleted: filterDeleted,
      isFlagged: undefined,
    })
      .then((res) => {
        setPosts(res.items ?? [])
        setPagination({ page: res.pagination?.page ?? 1, totalPages: res.pagination?.totalPages ?? 1 })
      })
      .catch((err) => setError(err instanceof Error ? err.message : "Failed to load posts"))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchPosts(pagination.page)
  }, [pagination.page, filterDeleted])

  function handleDelete(postId: string) {
    if (!confirm("Delete this post? This can be reverted by support.")) return
    setDeletingId(postId)
    deleteCommunityPost(postId)
      .then(() => fetchPosts(pagination.page))
      .catch((err) => setError(err instanceof Error ? err.message : "Delete failed"))
      .finally(() => setDeletingId(null))
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <div className="flex">
        <main className="flex-1">
          <div className="bg-white border-b border-border">
            <div className="max-w-7xl mx-auto px-6 py-8">
              <h1 className="text-3xl font-bold text-foreground">Community Moderation</h1>
              <p className="text-muted-foreground mt-2">Review and moderate community posts.</p>
            </div>
          </div>
          <div className="p-6 max-w-7xl mx-auto">
            <div className="mb-4 flex flex-wrap items-center gap-4">
              <select
                value={filterDeleted === undefined ? "all" : filterDeleted ? "deleted" : "visible"}
                onChange={(e) => {
                  const v = e.target.value
                  setFilterDeleted(v === "all" ? undefined : v === "deleted")
                  setPagination((p) => ({ ...p, page: 1 }))
                }}
                className="px-4 py-2 border border-border rounded-lg bg-background text-foreground"
              >
                <option value="all">All posts</option>
                <option value="visible">Visible only</option>
                <option value="deleted">Deleted only</option>
              </select>
            </div>
            {error && (
              <div className="mb-4 p-4 rounded-lg bg-red-50 text-red-700 text-sm">{error}</div>
            )}
            {loading ? (
              <div className="py-12 text-center text-muted-foreground">Loading posts…</div>
            ) : (
              <div className="bg-white rounded-lg border border-border shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted">
                        <th className="px-6 py-4 text-left font-semibold text-foreground">Post ID</th>
                        <th className="px-6 py-4 text-left font-semibold text-foreground">Author</th>
                        <th className="px-6 py-4 text-left font-semibold text-foreground">Content</th>
                        <th className="px-6 py-4 text-left font-semibold text-foreground">Created</th>
                        <th className="px-6 py-4 text-left font-semibold text-foreground">Likes</th>
                        <th className="px-6 py-4 text-left font-semibold text-foreground">Status</th>
                        <th className="px-6 py-4 text-left font-semibold text-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {posts.map((post) => (
                        <tr key={post._id} className="border-b border-border hover:bg-muted/50">
                          <td className="px-6 py-4 text-muted-foreground font-mono text-xs">{post._id}</td>
                          <td className="px-6 py-4 font-medium text-foreground">{authorName(post)}</td>
                          <td className="px-6 py-4 text-muted-foreground max-w-xs truncate">{post.title}: {post.content}</td>
                          <td className="px-6 py-4 text-muted-foreground">{formatDate(post.createdAt)}</td>
                          <td className="px-6 py-4 text-muted-foreground">{post.likes ?? 0}</td>
                          <td className="px-6 py-4">
                            {post.isDeleted ? (
                              <span className="inline-flex px-2 py-1 rounded text-xs font-medium bg-red-50 text-red-700">Deleted</span>
                            ) : post.isFlagged ? (
                              <span className="inline-flex px-2 py-1 rounded text-xs font-medium bg-amber-50 text-amber-700">Flagged</span>
                            ) : (
                              <span className="inline-flex px-2 py-1 rounded text-xs font-medium bg-green-50 text-green-700">Visible</span>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            {!post.isDeleted && (
                              <button
                                onClick={() => handleDelete(post._id)}
                                disabled={deletingId === post._id}
                                className="px-3 py-1.5 text-xs font-medium bg-red-50 text-red-700 rounded-lg hover:bg-red-100 disabled:opacity-50"
                              >
                                {deletingId === post._id ? "Deleting…" : "Delete"}
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {posts.length === 0 && !loading && (
                  <div className="p-12 text-center text-muted-foreground">No posts found.</div>
                )}
                {pagination.totalPages > 1 && (
                  <div className="p-4 border-t border-border flex justify-center gap-2">
                    <button
                      onClick={() => setPagination((p) => ({ ...p, page: Math.max(1, p.page - 1) }))}
                      disabled={pagination.page === 1}
                      className="px-3 py-2 border border-border rounded-lg text-sm disabled:opacity-50"
                    >
                      Previous
                    </button>
                    <span className="px-3 py-2 text-sm text-muted-foreground">
                      Page {pagination.page} of {pagination.totalPages}
                    </span>
                    <button
                      onClick={() => setPagination((p) => ({ ...p, page: Math.min(p.totalPages, p.page + 1) }))}
                      disabled={pagination.page === pagination.totalPages}
                      className="px-3 py-2 border border-border rounded-lg text-sm disabled:opacity-50"
                    >
                      Next
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
