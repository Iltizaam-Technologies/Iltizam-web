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
  users: { total: number; active: number; paying: number; activeSubscriptions: number; signupsThisWeek?: number };
  content: {
    goals: number;
    goalsActive?: number;
    goalsCompleted?: number;
    goalsPaused?: number;
    habits: number;
    journals: number;
  };
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

export interface AdminGoalItem {
  _id: string;
  title: string;
  userId: { _id: string; name?: string; email?: string } | string;
  userName?: string | null;
  status: string;
  category?: string;
  progress: number;
  createdAt?: string;
  updatedAt?: string;
  [key: string]: unknown;
}

export interface AdminGoalsResponse {
  items: AdminGoalItem[];
  pagination: { page: number; limit: number; total: number; totalPages: number };
}

export function getAdminGoals(params?: {
  page?: number;
  limit?: number;
  status?: string;
  category?: string;
}): Promise<AdminGoalsResponse> {
  const search = new URLSearchParams();
  if (params?.page != null) search.set("page", String(params.page));
  if (params?.limit != null) search.set("limit", String(params.limit));
  if (params?.status) search.set("status", params.status);
  if (params?.category) search.set("category", params.category);
  const q = search.toString();
  return apiRequest<AdminGoalsResponse>(`/api/admin/goals${q ? `?${q}` : ""}`);
}

export interface AdminGoalDetail {
  _id: string;
  title: string;
  description?: string;
  userId?: { _id: string; name?: string; email?: string } | string;
  owner?: { _id: string; name?: string; email?: string };
  userName?: string | null;
  userEmail?: string | null;
  status: string;
  category?: string;
  targetDate?: string;
  tasks: Array<{
    _id: string;
    title: string;
    completed: boolean;
    dueDate?: string;
    createdAt?: string;
    [key: string]: unknown;
  }>;
  progress: number;
  createdAt?: string;
  updatedAt?: string;
  [key: string]: unknown;
}

export function getAdminGoalById(id: string): Promise<AdminGoalDetail> {
  return apiRequest<AdminGoalDetail>(`/api/admin/goals/${id}`);
}

export interface AdminCommunityPost {
  _id: string;
  title: string;
  content: string;
  userId?: { _id: string; name?: string; email?: string; displayName?: string } | string;
  likes?: number;
  isDeleted?: boolean;
  isFlagged?: boolean;
  createdAt?: string;
  [key: string]: unknown;
}

export interface AdminCommunityPostsResponse {
  items: AdminCommunityPost[];
  pagination: { page: number; limit: number; total: number; totalPages: number };
}

export function getAdminCommunityPosts(params?: {
  page?: number;
  limit?: number;
  isDeleted?: boolean;
  isFlagged?: boolean;
}): Promise<AdminCommunityPostsResponse> {
  const search = new URLSearchParams();
  if (params?.page != null) search.set("page", String(params.page));
  if (params?.limit != null) search.set("limit", String(params.limit));
  if (params?.isDeleted !== undefined) search.set("isDeleted", String(params.isDeleted));
  if (params?.isFlagged !== undefined) search.set("isFlagged", String(params.isFlagged));
  const q = search.toString();
  return apiRequest<AdminCommunityPostsResponse>(`/api/admin/community/posts${q ? `?${q}` : ""}`);
}

export function deleteCommunityPost(id: string): Promise<void> {
  return apiRequest<void>(`/api/community/posts/${id}`, { method: "DELETE" });
}

export interface UserGrowthPoint {
  month: string;
  usersRegistered: number;
}

export function getUserGrowth(): Promise<UserGrowthPoint[]> {
  return apiRequest<UserGrowthPoint[]>("/api/admin/analytics/user-growth");
}

export interface ActivityMetricPoint {
  day: string;
  date?: string;
  activity: number;
  goalsCreated?: number;
  tasksCompleted?: number;
}

export function getActivityMetrics(): Promise<ActivityMetricPoint[]> {
  return apiRequest<ActivityMetricPoint[]>("/api/admin/analytics/activity");
}

export interface RecentActivityItem {
  type: string;
  user: string;
  description: string;
  time: string;
}

export function getRecentActivity(limit?: number): Promise<RecentActivityItem[]> {
  const q = limit != null ? `?limit=${limit}` : "";
  return apiRequest<RecentActivityItem[]>(`/api/admin/analytics/recent${q}`);
}

export interface MoodSummary {
  averageMood: string;
  totalEntries: number;
  happiestDay: string;
  engagementRate: number;
  usersWithMood?: number;
}

export function getMoodSummary(): Promise<MoodSummary> {
  return apiRequest<MoodSummary>("/api/admin/mood/summary");
}

export interface MoodTrendPoint {
  date: string;
  mood: number;
  count?: number;
}

export function getMoodTrends(): Promise<MoodTrendPoint[]> {
  return apiRequest<MoodTrendPoint[]>("/api/admin/mood/trends");
}

export interface MoodDistributionItem {
  emoji: string;
  label: string;
  percentage: number;
  color: string;
}

export function getMoodDistribution(): Promise<MoodDistributionItem[]> {
  return apiRequest<MoodDistributionItem[]>("/api/admin/mood/distribution");
}

export interface MoodRiskFlag {
  userId: string;
  user: string;
  lastMood: string;
  trend: string;
  riskLevel: "Low" | "Medium" | "High";
}

export function getMoodRiskFlags(limit?: number): Promise<MoodRiskFlag[]> {
  const q = limit != null ? `?limit=${limit}` : "";
  return apiRequest<MoodRiskFlag[]>(`/api/admin/mood/risk-flags${q}`);
}

export interface ReportsSummary {
  weeklyReportsGenerated?: number;
  monthlyReviewsCompleted?: number;
  yearEndWrapsGenerated?: number;
  averageCompletionRate?: number;
}

export function getReportsSummary(): Promise<ReportsSummary> {
  return apiRequest<ReportsSummary>("/api/admin/reports/summary");
}

export interface WeeklyReportItem {
  id: string;
  user: string;
  weekRange: string;
  tasksCompleted: number;
  averageMood: string;
  status: string;
}

export function getReportsWeekly(params?: { page?: number; limit?: number }): Promise<{ items: WeeklyReportItem[]; pagination: { page: number; totalPages: number } }> {
  const search = new URLSearchParams();
  if (params?.page != null) search.set("page", String(params.page));
  if (params?.limit != null) search.set("limit", String(params.limit));
  const q = search.toString();
  return apiRequest(`/api/admin/reports/weekly${q ? `?${q}` : ""}`);
}

export interface ReportInsight {
  text: string;
  impact: string;
}

export function getReportsInsights(): Promise<ReportInsight[]> {
  return apiRequest<ReportInsight[]>("/api/admin/reports/insights");
}

export interface NotificationLogItem {
  id: string;
  notificationId?: string;
  user: string;
  status: string;
  sentAt: string;
  error: string | null;
}

export function getNotificationLogs(params?: { page?: number; limit?: number }): Promise<{
  items: NotificationLogItem[];
  pagination: { page: number; limit: number; total: number; totalPages: number };
}> {
  const search = new URLSearchParams();
  if (params?.page != null) search.set("page", String(params.page));
  if (params?.limit != null) search.set("limit", String(params.limit));
  const q = search.toString();
  return apiRequest(`/api/admin/notifications/logs${q ? `?${q}` : ""}`);
}
