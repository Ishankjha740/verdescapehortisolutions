import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/projects", label: "Projects" },
  { to: "/sustainability", label: "Sustainability" },
  { to: "/insights", label: "Insights" },
  { to: "/careers", label: "Careers" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[color-mix(in_oklab,var(--cream)_88%,transparent)] backdrop-blur-xl border-b border-[var(--border)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-x flex items-center justify-between gap-6">
        <Logo variant={scrolled ? "dark" : "dark"} />
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-3 py-2 text-sm font-medium text-[var(--forest-deep)]/80 hover:text-[var(--leaf)] transition-colors"
              activeProps={{ className: "px-3 py-2 text-sm font-semibold text-[var(--leaf)]" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[var(--forest-deep)] px-5 py-2.5 text-sm font-semibold text-[var(--cream)] hover:bg-[var(--leaf)] hover:text-[var(--forest-deep)] transition-colors shadow-[var(--shadow-soft)]"
          >
            Request Consultation <ArrowUpRight className="h-4 w-4" />
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--cream)]/80"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden container-x mt-4 pb-4 animate-fade-in">
          <div className="glass rounded-2xl p-4 flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-base font-medium text-[var(--forest-deep)] hover:bg-[var(--muted)] rounded-lg"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[var(--forest-deep)] px-5 py-3 text-center text-sm font-semibold text-[var(--cream)]"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}