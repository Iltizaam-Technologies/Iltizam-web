/**
 * /download routing.
 * Android keeps the internal-test Play link unless NEXT_PUBLIC_ANDROID_PLAY_STORE_URL replaces it.
 * iOS uses NEXT_PUBLIC_IOS_APP_STORE_URL only when it is a real listing. The placeholder falls through to the site home.
 */

const IOS_APP_STORE_PLACEHOLDER = "https://apps.apple.com/app/iltizaam";

const ANDROID_INTERNAL_TEST_URL =
  "https://play.google.com/apps/internaltest/4701605396824775174";

function trimmedEnv(name: string): string {
  return process.env[name]?.trim() ?? "";
}

/** Live App Store URL, or null until NEXT_PUBLIC_IOS_APP_STORE_URL is set to a real listing. */
export function resolveIosAppStoreUrl(): string | null {
  const configured = trimmedEnv("NEXT_PUBLIC_IOS_APP_STORE_URL");
  if (!configured || configured === IOS_APP_STORE_PLACEHOLDER) return null;
  return configured;
}

export const IOS_APP_STORE_URL = resolveIosAppStoreUrl();

export const ANDROID_PLAY_STORE_URL =
  trimmedEnv("NEXT_PUBLIC_ANDROID_PLAY_STORE_URL") || ANDROID_INTERNAL_TEST_URL;

export const SITE_HOME_URL = trimmedEnv("NEXT_PUBLIC_SITE_URL") || "https://iltizaam.com";

export type DownloadDestination = "ios" | "android" | "desktop";

export function destinationFromUserAgent(userAgent: string | null): DownloadDestination {
  const ua = userAgent ?? "";

  if (/iPhone|iPad|iPod/i.test(ua)) return "ios";
  // iPadOS 13+ often reports as Macintosh with touch.
  if (/Macintosh/i.test(ua) && /Mobile|Touch/i.test(ua)) return "ios";
  if (/Android/i.test(ua)) return "android";
  return "desktop";
}

export function downloadRedirectUrl(userAgent: string | null): string {
  const dest = destinationFromUserAgent(userAgent);
  if (dest === "ios") return resolveIosAppStoreUrl() ?? SITE_HOME_URL;
  if (dest === "android") return ANDROID_PLAY_STORE_URL;
  return SITE_HOME_URL;
}
