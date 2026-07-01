import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/verdescape-logo.png.asset.json";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  void variant;
  return (
    <Link to="/" className="inline-flex items-center group" aria-label="VerdeScape Horti Solutions">
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