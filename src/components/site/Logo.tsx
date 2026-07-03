import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/verdescape-logo-full.png.asset.json";

/**
 * Logo with background-aware treatment.
 * - `dark`  → for light/cream backgrounds. Logo renders as-is (dark green wordmark reads well).
 * - `light` → for dark/photographic backgrounds. Logo sits in a soft cream chip so the dark
 *             green wordmark and yellow ring stay legible without recoloring the mark.
 */
export function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const isLight = variant === "light";
  return (
    <Link
      to="/"
      aria-label="VerdeScape Horti Solutions"
      className={`inline-flex items-center group transition-all duration-300 ${
        isLight
          ? "rounded-full bg-[color-mix(in_oklab,var(--cream)_92%,transparent)] backdrop-blur-md px-3 py-1.5 shadow-[var(--shadow-soft)] ring-1 ring-white/40"
          : ""
      } ${className}`}
    >
      <img
        src={logoAsset.url}
        alt="VerdeScape Horti Solutions"
        className={`w-auto object-contain transition-all duration-300 ${
          isLight ? "h-8" : "h-10"
        } group-hover:scale-[1.03]`}
        loading="eager"
        decoding="async"
      />
    </Link>
  );
}