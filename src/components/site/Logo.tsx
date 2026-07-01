import { Link } from "@tanstack/react-router";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isLight = variant === "light";
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--leaf)] shadow-[var(--shadow-glow)]">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-[var(--forest-deep)]" fill="currentColor" aria-hidden>
          <path d="M12 2C7 6 4 10 4 14a8 8 0 0 0 16 0c0-4-3-8-8-12Zm0 5.5c2.2 1.9 4 4.2 4 6.5a4 4 0 0 1-8 0c0-2.3 1.8-4.6 4-6.5Z" />
        </svg>
      </span>
      <span className={`font-[var(--font-display)] text-lg font-extrabold tracking-tight ${isLight ? "text-[var(--cream)]" : "text-[var(--forest-deep)]"}`}>
        Verde<span className="text-[var(--leaf)]">Scape</span>
      </span>
    </Link>
  );
}