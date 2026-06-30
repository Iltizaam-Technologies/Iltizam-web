import type { MetadataRoute } from "next"

const BASE = "https://www.iltizaamai.com.ng"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    { url: BASE, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/privacy-policy`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/privacy-terms`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/delete-account`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/contact`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/about`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/features`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ]
}
