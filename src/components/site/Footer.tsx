import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, Camera, Briefcase, Share2 } from "lucide-react";
import { Logo } from "./Logo";

export function SiteFooter() {
  const [subEmail, setSubEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  return (
    <footer className="bg-[var(--forest-deep)] text-[var(--cream)]/85 pt-24 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[radial-gradient(circle_at_20%_20%,var(--leaf)_0%,transparent_45%),radial-gradient(circle_at_80%_60%,var(--gold)_0%,transparent_40%)]" />
      <div className="container-x relative">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="[&_a>span:last-child]:!text-[var(--cream)]">
              <Logo variant="light" />
            </div>
            <p className="mt-5 text-sm leading-relaxed max-w-sm">
              Transforming ideas into thriving green spaces through science,
              creativity, and 30+ years of horticulture execution across India.
            </p>
            <form
              className="mt-8 flex items-center gap-2 max-w-sm"
              onSubmit={(e) => {
                e.preventDefault();
                if (!subEmail) return;
                const subject = "Newsletter signup — VerdeScape";
                const body = `Please add this address to the VerdeScape newsletter:\n\n${subEmail}`;
                window.location.href = `mailto:info@verdescapehortisolutions.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                setSubscribed(true);
                setSubEmail("");
              }}
            >
              <input
                type="email"
                required
                value={subEmail}
                onChange={(e) => setSubEmail(e.target.value)}
                placeholder="Your work email"
                className="flex-1 rounded-full bg-white/10 border border-white/15 px-5 py-3 text-sm text-[var(--cream)] placeholder:text-[var(--cream)]/50 focus:outline-none focus:border-[var(--leaf)]"
              />
              <button type="submit" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--leaf)] text-[var(--forest-deep)] hover:scale-105 transition" aria-label="Subscribe">
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            {subscribed && (
              <p className="mt-3 text-xs text-[var(--leaf)]">Thanks — your email client will open to confirm your subscription.</p>
            )}
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-[var(--cream)] mb-4">Explore</h4>
            <ul className="space-y-3 text-sm">
              {[
                ["/about", "About"],
                ["/services", "Services"],
                ["/projects", "Projects"],
                ["/industries", "Industries"],
              ].map(([to, l]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-[var(--leaf)] transition-colors">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-[var(--cream)] mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              {[
                ["/sustainability", "Sustainability"],
                ["/insights", "Insights"],
                ["/contact", "Contact"],
              ].map(([to, l]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-[var(--leaf)] transition-colors">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-sm font-semibold text-[var(--cream)] mb-4">Get in touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5 text-[var(--leaf)]" /> Kokapet, Hyderabad 500089, India</li>
              <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-[var(--leaf)]" /> +91 99594 23300</li>
              <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-[var(--leaf)]" /> info@verdescapehortisolutions.com</li>
            </ul>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Camera, label: "Instagram" },
                { Icon: Briefcase, label: "LinkedIn" },
                { Icon: Share2, label: "Facebook" },
              ].map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={label} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:bg-[var(--leaf)] hover:text-[var(--forest-deep)] transition">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[var(--cream)]/60">
          <p>© {new Date().getFullYear()} VerdeScape Horti Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-[var(--leaf)]">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[var(--leaf)]">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}