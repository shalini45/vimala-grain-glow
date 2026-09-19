import { cn } from "@/lib/utils";
import logoFull from "@/assets/logo.png";
import logoMark from "@/assets/logo-mark.png";

/**
 * Brand emblem (flour-mill machine + wheat, no lettering) for small, round contexts such as the
 * navbar badge. Decorative by default because the business name is rendered next to it — pass
 * `alt` when it stands alone.
 */
export function LogoMark({ className, alt = "" }: { className?: string; alt?: string }) {
  return (
    <img
      src={logoMark}
      alt={alt}
      aria-hidden={alt ? undefined : true}
      width={273}
      height={273}
      decoding="async"
      className={cn("h-12 w-12 object-contain p-[3px]", className)}
    />
  );
}

/**
 * Full logo with the "Vimala Flour Mill" script. The lettering is dark brown, so place it on a
 * light surface.
 */
export function LogoFull({ className }: { className?: string }) {
  return (
    <img
      src={logoFull}
      alt="Vimala Flour Mill"
      width={353}
      height={303}
      loading="lazy"
      decoding="async"
      className={cn("h-auto w-44 object-contain", className)}
    />
  );
}
