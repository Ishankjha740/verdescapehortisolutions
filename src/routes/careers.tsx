import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { ArrowUpRight, Heart, GraduationCap, Coins } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Join the VerdeScape team" },
      { name: "description", content: "Open roles in landscape architecture, horticulture, project management and maintenance at VerdeScape." },
    ],
  }),
  component: CareersPage,
});

const ROLES = [
  { title: "Senior Landscape Architect", loc: "Bengaluru", type: "Full-time" },
  { title: "Horticulture Consultant", loc: "Chennai", type: "Full-time" },
  { title: "Project Manager — Institutional", loc: "Bengaluru", type: "Full-time" },
  { title: "Site Maintenance Lead", loc: "Kochi", type: "Full-time" },
  { title: "Botany Researcher (Native Species)", loc: "Bengaluru", type: "Full-time" },
];

const BENEFITS = [
  { icon: Heart, t: "Wellbeing-first", d: "Comprehensive health cover, family leave and outdoor-friendly hours." },
  { icon: GraduationCap, t: "Continuous learning", d: "Annual budget for courses, conferences and certifications." },
  { icon: Coins, t: "Meaningful ownership", d: "Long-term incentive plan for senior contributors." },
];

function CareersPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Careers" title="Build living landscapes with us." subtitle="Join a 130+ person practice of botanists, architects, project managers and maintenance crews shaping South India's green future." />

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {BENEFITS.map((b) => (
            <div key={b.t} className="rounded-3xl border border-[var(--border)] p-8 bg-[var(--card)]">
              <div className="h-11 w-11 rounded-xl bg-[var(--leaf)]/15 text-[var(--forest-deep)] flex items-center justify-center"><b.icon className="h-5 w-5" /></div>
              <h3 className="mt-4 text-lg font-bold text-[var(--forest-deep)]">{b.t}</h3>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[var(--muted)]">
        <div className="container-x">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--forest-deep)]">Open roles</h2>
          <div className="mt-10 space-y-3">
            {ROLES.map((r) => (
              <a key={r.title} href="#apply" className="group flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 hover:border-[var(--leaf)] hover:shadow-[var(--shadow-soft)] transition">
                <div>
                  <div className="font-bold text-[var(--forest-deep)] text-lg">{r.title}</div>
                  <div className="text-sm text-[var(--muted-foreground)]">{r.loc} · {r.type}</div>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--forest-deep)] group-hover:text-[var(--leaf)]">Apply <ArrowUpRight className="h-4 w-4" /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="py-24 md:py-32">
        <div className="container-x max-w-2xl">
          <h2 className="text-3xl font-extrabold text-[var(--forest-deep)]">Apply</h2>
          <p className="mt-3 text-[var(--muted-foreground)]">Send us a quick note — we'll respond within a week.</p>
          <form className="mt-8 space-y-4">
            {[
              { label: "Full name", type: "text", name: "name" },
              { label: "Email", type: "email", name: "email" },
              { label: "Role you're applying for", type: "text", name: "role" },
              { label: "Portfolio / LinkedIn URL", type: "url", name: "portfolio" },
            ].map((f) => (
              <div key={f.name}>
                <label className="text-xs font-semibold uppercase tracking-widest text-[var(--forest-deep)]">{f.label}</label>
                <input type={f.type} required className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--leaf)]" />
              </div>
            ))}
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest text-[var(--forest-deep)]">Why VerdeScape?</label>
              <textarea rows={4} className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--leaf)]" />
            </div>
            <button type="submit" className="rounded-full bg-[var(--forest-deep)] text-[var(--cream)] px-7 py-4 text-sm font-semibold hover:bg-[var(--leaf)] hover:text-[var(--forest-deep)] transition">Send application</button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}