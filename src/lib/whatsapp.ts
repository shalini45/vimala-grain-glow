/** Opens a WhatsApp link and reports whether the browser actually let it open (not popup-blocked). */
export function openWhatsApp(url: string): boolean {
  if (typeof window === "undefined") return false;
  const win = window.open(url, "_blank", "noopener,noreferrer");
  return !!win;
}
