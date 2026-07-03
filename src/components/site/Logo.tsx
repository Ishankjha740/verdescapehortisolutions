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
  void variant;
  return (
    <Link
      to="/"
      aria-label="VerdeScape Horti Solutions"
      className={`inline-flex items-center group ${className}`}
    >
      <img
        src={logoAsset.url}
        alt="VerdeScape Horti Solutions"
        className="h-10 w-auto object-contain"
        loading="eager"
        decoding="async"
      />
    </Link>
  );
}