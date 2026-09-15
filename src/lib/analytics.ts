/**
 * Google Analytics 4 (GA4) integration.
 *
 * SETUP: replace GA_MEASUREMENT_ID below with your real GA4 Measurement ID
 * (looks like "G-XXXXXXXXXX"). Get one free at https://analytics.google.com:
 *   Admin -> Create Property -> Data Streams -> Web -> add your domain
 *   -> copy the "Measurement ID" shown for the stream.
 * Until replaced, the gtag.js snippet loads but sends no usable data.
 */
export const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

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
