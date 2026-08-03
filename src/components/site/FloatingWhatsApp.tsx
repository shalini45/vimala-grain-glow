import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site-config";

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Hi Vimala Flour Mill, I'd like to enquire.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full text-white shadow-[var(--shadow-warm)] transition-transform hover:scale-110"
      style={{ background: "var(--whatsapp)" }}
    >
      <MessageCircle className="h-7 w-7" />
      <span
        className="absolute inset-0 -z-10 animate-ping rounded-full opacity-30"
        style={{ background: "var(--whatsapp)" }}
      />
    </a>
  );
}
