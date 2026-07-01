import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Leaf, Wrench, ClipboardList, TreePine, Sparkles, Building2, ArrowUpRight, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — VerdeScape Landscape & Horticulture" },
      { name: "description", content: "Landscape design, execution, project management, maintenance, horticulture consultancy and institutional advisory — under one roof." },
      { property: "og:title", content: "Services — VerdeScape Landscape & Horticulture" },
      { property: "og:description", content: "Integrated horticulture services across design, build and maintain — under one accountable team." },
      { property: "og:url", content: "https://verdescapehortisolutions.lovable.app/services" },
    ],
    links: [{ rel: "canonical", href: "https://verdescapehortisolutions.lovable.app/services" }],
  }),
  component: ServicesPage,
});

const SERVICES = [
  { icon: Leaf, title: "Landscape Design", desc: "Site-sensitive master planning, planting design and hardscape strategy.", points: ["Master planning", "Planting palettes", "Hardscape & lighting", "3D visualisation"] },
  { icon: Wrench, title: "Landscape Execution", desc: "Turnkey build with soil science, irrigation and precision planting.", points: ["Site preparation", "Irrigation systems", "Softscape install", "Hardscape build"] },
  { icon: ClipboardList, title: "Project Management", desc: "Tight cost, timeline and horticulture QC control from kick-off to handover.", points: ["Cost control", "Vendor coordination", "Quality assurance", "Client reporting"] },
  { icon: TreePine, title: "Maintenance", desc: "Long-horizon programs that keep landscapes thriving for decades.", points: ["Annual care plans", "On-site teams", "Plant health monitoring", "Seasonal replanting"] },
  { icon: Sparkles, title: "Horticulture Consultancy", desc: "Research-backed advice on species, soils, water and biodiversity.", points: ["Species selection", "Soil analysis", "Water strategy", "Biodiversity audits"] },
  { icon: Building2, title: "Institutional Advisory", desc: "Campus greening strategies for schools, hospitals, IT parks and townships.", points: ["Campus master plans", "Green certifications", "Wellness landscapes", "Long-term retainer"] },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Services" title="Six services. One integrated practice." subtitle="Everything you need to design, build and sustain a premium landscape — under one accountable team." />
      <section className="py-24 md:py-32">
        <div className="container-x space-y-8">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.04 }}
              className="group grid md:grid-cols-12 gap-8 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 md:p-12 hover:border-[var(--leaf)] hover:shadow-[var(--shadow-elegant)] transition-all"
            >
              <div className="md:col-span-1">
                <div className="h-14 w-14 rounded-2xl bg-[var(--leaf)]/15 text-[var(--forest-deep)] flex items-center justify-center group-hover:bg-[var(--leaf)] transition">
                  <s.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="text-[10px] font-mono text-[var(--leaf)]">0{i + 1}</div>
                <h2 className="mt-1 text-2xl md:text-3xl font-extrabold text-[var(--forest-deep)]">{s.title}</h2>
                <p className="mt-3 text-[var(--muted-foreground)] max-w-xl">{s.desc}</p>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--forest-deep)] group-hover:text-[var(--leaf)]">Discuss this service <ArrowUpRight className="h-4 w-4" /></Link>
              </div>
              <div className="md:col-span-5">
                <ul className="grid grid-cols-2 gap-3">
                  {s.points.map((p) => (
                    <li key={p} className="text-sm text-[var(--forest-deep)] flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--leaf)]" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="pb-28">
        <div className="container-x">
          <div className="rounded-[2rem] bg-[var(--forest-deep)] text-[var(--cream)] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold">Ready for a scoping call?</h2>
              <p className="mt-3 text-[var(--cream)]/70 max-w-xl">Share your site, brief and objectives. We'll send a first perspective within 3 business days.</p>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--leaf)] text-[var(--forest-deep)] px-7 py-4 text-sm font-semibold">Start a project <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}