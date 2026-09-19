/**
 * Google Analytics 4 (GA4) — OFF by default.
 *
 * To turn it on, set VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX in .env (get the ID at
 * analytics.google.com: Admin -> Create Property -> Data Streams -> Web). Until then no Google
 * script is loaded and trackEvent() is a no-op.
 * When enabling it, also update the "Third-party services" section of /privacy (routes/privacy.tsx),
 * which currently says we use no tracking cookies.
 */
export const GA_MEASUREMENT_ID = (
  (import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined) ?? ""
).trim();

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Fires a GA4 event. No-ops safely if gtag hasn't loaded (blocked, offline, SSR). */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

/** Tracks a WhatsApp CTA click. `source` identifies which button/section triggered it. */
export function trackWhatsAppClick(source: string) {
  trackEvent("whatsapp_click", { source });
}
