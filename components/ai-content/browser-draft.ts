export type BrowserDraft<T> = {
  value: T
  savedAt: string
}

export function readBrowserDraft<T>(key: string): BrowserDraft<T> | null {
  if (typeof window === "undefined") return null
  try {
    const raw = window.localStorage.getItem(key)
    if (!raw) return null
    const parsed = JSON.parse(raw) as BrowserDraft<T>
    if (!parsed || typeof parsed !== "object" || !("value" in parsed) || typeof parsed.savedAt !== "string") {
      return null
    }
    return parsed
  } catch {
    return null
  }
}

export function writeBrowserDraft<T>(key: string, value: T): BrowserDraft<T> {
  const draft: BrowserDraft<T> = { value, savedAt: new Date().toISOString() }
  window.localStorage.setItem(key, JSON.stringify(draft))
  return draft
}

export function formatDraftSavedAt(
  savedAt: string | null,
  pendingNote = "The live coach does not use this draft."
): string {
  if (!savedAt) return `Not saved in this browser yet. ${pendingNote}`
  const when = new Date(savedAt)
  const label = Number.isNaN(when.getTime()) ? savedAt : when.toLocaleString()
  return `Saved in this browser at ${label}. ${pendingNote}`
}
