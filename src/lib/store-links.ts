/** Replace these with live store URLs when listings are published. */
export const IOS_APP_STORE_URL =
  process.env.NEXT_PUBLIC_IOS_APP_STORE_URL ||
  "https://apps.apple.com/app/iltizaam";

export const ANDROID_PLAY_STORE_URL =
  process.env.NEXT_PUBLIC_ANDROID_PLAY_STORE_URL ||
  "https://play.google.com/store/apps/details?id=iltizaam.app";

export const SITE_HOME_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://iltizaam.com";

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
  if (dest === "ios") return IOS_APP_STORE_URL;
  if (dest === "android") return ANDROID_PLAY_STORE_URL;
  return SITE_HOME_URL;
}
