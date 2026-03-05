/**
 * Admin API client — all admin backend requests with JWT
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("admin_token");
}

export function setAdminToken(token: string): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("admin_token", token);
  }
}

export function clearAdminToken(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem("admin_token");
  }
}

async function apiRequest<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const token = getToken();
  const url = `${API_BASE_URL}${endpoint}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers as Record<string, string>),
    },
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    const message =
      (data as { error?: { message?: string }; message?: string })?.error?.message ||
      (data as { message?: string })?.message ||
      "API request failed";
    throw new Error(message);
  }

  return ((data as { data?: T }).data !== undefined ? (data as { data: T }).data : data) as T;
}

export interface LoginResponse {
  user: Record<string, unknown>;
  token: string;
}

export function loginAdmin(email: string, password: string): Promise<LoginResponse> {
  return apiRequest<LoginResponse>("/api/admin/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

export function getAdminMe(): Promise<Record<string, unknown>> {
  return apiRequest<Record<string, unknown>>("/api/admin/me");
}

export interface AdminStats {
  users: { total: number; active: number; paying: number; activeSubscriptions: number };
  content: { goals: number; habits: number; journals: number };
  community: { posts: number; activePosts: number; flaggedPosts: number };
}

export function getAdminStats(): Promise<AdminStats> {
  return apiRequest<AdminStats>("/api/admin/stats");
}

export interface AdminUsersResponse {
  items: Array<{
    _id: string;
    name: string;
    email: string;
    role?: string;
    subscriptionStatus?: string;
    createdAt?: string;
    [key: string]: unknown;
  }>;
  pagination: { page: number; limit: number; total: number; totalPages: number };
}

export function getUsers(params?: { page?: number; limit?: number; role?: string; subscriptionStatus?: string }): Promise<AdminUsersResponse> {
  const search = new URLSearchParams();
  if (params?.page != null) search.set("page", String(params.page));
  if (params?.limit != null) search.set("limit", String(params.limit));
  if (params?.role) search.set("role", params.role);
  if (params?.subscriptionStatus) search.set("subscriptionStatus", params.subscriptionStatus);
  const q = search.toString();
  return apiRequest<AdminUsersResponse>(`/api/admin/users${q ? `?${q}` : ""}`);
}

export function getUserById(id: string): Promise<Record<string, unknown>> {
  return apiRequest<Record<string, unknown>>(`/api/admin/users/${id}`);
}

export interface BroadcastPayload {
  title: string;
  body: string;
  data?: Record<string, unknown>;
  audience: "all" | "free" | "subscribed" | "admins";
}

export interface BroadcastResponse {
  message: string;
  broadcastId?: string;
  stats?: { sent: number; failed: number; total: number };
}

export function broadcastNotification(payload: BroadcastPayload): Promise<BroadcastResponse> {
  return apiRequest<BroadcastResponse>("/api/admin/notifications/broadcast", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export interface AdminNotificationItem {
  broadcastId?: string;
  title: string;
  body: string;
  createdAt: string;
  totalRecipients: number;
  deliveredCount: number;
}

export interface AdminNotificationsResponse {
  items: AdminNotificationItem[];
  pagination: { page: number; limit: number; total: number; totalPages: number };
}

export function getAdminNotifications(params?: { page?: number; limit?: number }): Promise<AdminNotificationsResponse> {
  const search = new URLSearchParams();
  if (params?.page != null) search.set("page", String(params.page));
  if (params?.limit != null) search.set("limit", String(params.limit));
  const q = search.toString();
  return apiRequest<AdminNotificationsResponse>(`/api/admin/notifications${q ? `?${q}` : ""}`);
}
