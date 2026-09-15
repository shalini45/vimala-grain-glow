import { trackWhatsAppClick } from "./analytics";

/** Opens a WhatsApp link, tracks it as a GA4 conversion, and reports whether the browser
 * actually let it open (not popup-blocked). `source` identifies the triggering CTA. */
export function openWhatsApp(url: string, source: string): boolean {
  if (typeof window === "undefined") return false;
  trackWhatsAppClick(source);
  const win = window.open(url, "_blank", "noopener,noreferrer");
  return !!win;
}
