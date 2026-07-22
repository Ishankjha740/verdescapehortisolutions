import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Droplets, Leaf, Recycle, TreePine, Sprout, Sun } from "lucide-react";
import sustainabilityImg from "@/assets/sustainability.jpg";
import leaves from "@/assets/texture-leaves.jpg";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability — VerdeScape Horti Solutions" },
      { name: "description", content: "Native palettes, water-smart irrigation, low-lifecycle carbon. How VerdeScape designs and maintains landscapes that give more than they take." },
      { property: "og:title", content: "Sustainability — Landscapes that give more than they take" },
      { property: "og:description", content: "Native palettes, water-smart irrigation and lifecycle thinking behind every VerdeScape landscape." },
      { property: "og:url", content: "https://verdescapehortisolutions.lovable.app/sustainability" },
    ],
    links: [{ rel: "canonical", href: "https://verdescapehortisolutions.lovable.app/sustainability" }],
  }),
  component: SustainabilityPage,
});

const PILLARS = [
  { icon: Droplets, t: "Water efficiency", d: "Drip and sensor-based irrigation cuts consumption by up to 60%." },
  { icon: Leaf, t: "Plant selection", d: "Native and climate-adapted species that thrive with minimal input." },
  { icon: Recycle, t: "Lifecycle thinking", d: "Every material choice weighed for embodied carbon and reuse." },
  { icon: TreePine, t: "Biodiversity", d: "Habitat layering that invites pollinators and small wildlife." },
  { icon: Sprout, t: "Soil health", d: "Living soils built with compost, mycorrhiza and mulch cycles." },
  { icon: Sun, t: "Climate resilience", d: "Designs that anticipate hotter summers and erratic monsoons." },
];

function SustainabilityPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Sustainability" title="Design that gives more than it takes." subtitle="Landscapes engineered around lifecycle thinking — from native palettes and rainwater harvesting to soil health and long-term maintenance." />

      <section className="py-24 md:py-32 relative overflow-hidden">
        <img src={leaves} alt="" aria-hidden className="absolute -right-40 top-20 w-[500px] opacity-20 pointer-events-none" />
        <div className="container-x grid gap-14 lg:grid-cols-12 items-center relative">
          <div className="lg:col-span-6">
            <img src={sustainabilityImg} alt="Planting sapling" loading="lazy" width={1600} height={1200} className="rounded-[2rem] w-full h-[520px] object-cover shadow-[var(--shadow-elegant)]" />
          </div>
          <div className="lg:col-span-6 lg:pl-8">
            <p className="text-xs font-semibold tracking-[0.3em] text-[var(--leaf)] uppercase">Our charter</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-[var(--forest-deep)] leading-tight">Landscapes as long-term climate infrastructure.</h2>
            <p className="mt-6 text-[var(--muted-foreground)] leading-relaxed">
              A well-designed landscape sequesters carbon, cools microclimates, filters stormwater
              and supports biodiversity — for decades. We treat every project as a chance to build
              this quiet infrastructure into the fabric of a place.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[var(--forest-deep)] text-[var(--cream)]">
        <div className="container-x">
          <h2 className="text-3xl md:text-5xl font-extrabold max-w-2xl">Six pillars, one commitment.</h2>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PILLARS.map((p, i) => (
              <motion.div key={p.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-3xl glass-dark p-8">
                <div className="h-11 w-11 rounded-xl bg-[var(--leaf)] text-[var(--forest-deep)] flex items-center justify-center"><p.icon className="h-5 w-5" /></div>
                <h3 className="mt-5 text-xl font-bold text-[var(--cream)]">{p.t}</h3>
                <p className="mt-3 text-sm text-[var(--cream)]/90">{p.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}