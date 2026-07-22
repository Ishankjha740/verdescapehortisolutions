import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import aboutImg from "@/assets/about-team.jpg";
import { Award, Leaf, Users, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About VerdeScape — 30 years of horticulture practice" },
      { name: "description", content: "Founder story, mission, vision and the team behind VerdeScape's integrated horticulture practice across India." },
      { property: "og:title", content: "About VerdeScape" },
      { property: "og:description", content: "30+ years of horticulture research, design and execution." },
      { property: "og:url", content: "https://verdescapehortisolutions.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://verdescapehortisolutions.lovable.app/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Leaf, t: "Sustainability", d: "Native, low-input palettes tuned to climate resilience." },
  { icon: Award, t: "Expertise", d: "Three decades of hands-on horticulture and design." },
  { icon: Sparkles, t: "Innovation", d: "Research-driven planting, irrigation and soil systems." },
  { icon: Users, t: "Partnership", d: "Long-term maintenance relationships that outlast a project." },
];

const TIMELINE = [
  ["1994", "Founded in Bengaluru as a specialist horticulture consultancy."],
  ["2003", "Expanded into integrated landscape design & build."],
  ["2011", "Opened dedicated maintenance division for institutional clients."],
  ["2018", "Launched sustainability practice with in-house botany research."],
  ["2024", "500th major project delivered across India."],
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About"
        title="Green spaces built on 30 years of practice."
        subtitle="VerdeScape is a South India-based integrated horticulture and landscape practice. We combine research, design, execution and long-term care under a single accountable team."
      />

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6">
            <img src={aboutImg} width={1280} height={1600} alt="Founder in the garden" loading="lazy" className="rounded-[2rem] w-full h-[560px] object-cover shadow-[var(--shadow-elegant)]" />
          </div>
          <div className="lg:col-span-6 lg:pl-8">
            <p className="text-xs font-semibold tracking-[0.3em] text-[var(--leaf)] uppercase">Founder story</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-[var(--forest-deep)] leading-tight">A practice born in the soil.</h2>
            <p className="mt-6 text-[var(--muted-foreground)] leading-relaxed">
              VerdeScape started in 1994 with a simple thesis — landscapes deserve the same rigor as architecture.
              What began as a small consultancy has grown into an integrated practice serving India's most
              demanding developers, hoteliers, hospitals and institutions.
            </p>
            <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
              Our teams pair botanists with landscape architects, irrigation engineers with maintenance leads —
              so that every design decision is field-tested and every install is built to thrive for decades.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[var(--muted)]">
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mb-14">
            <div>
              <h3 className="text-sm font-semibold text-[var(--leaf)] uppercase tracking-[0.3em]">Mission</h3>
              <p className="mt-3 text-2xl font-[Manrope] font-bold text-[var(--forest-deep)] leading-snug">
                Transform every project into a thriving ecosystem — sustainable, functional, unforgettable.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[var(--leaf)] uppercase tracking-[0.3em]">Vision</h3>
              <p className="mt-3 text-2xl font-[Manrope] font-bold text-[var(--forest-deep)] leading-snug">
                A greener South India — one institution, workplace and home at a time.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v, i) => (
              <motion.div key={v.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-2xl bg-[var(--card)] p-6 border border-[var(--border)]">
                <div className="h-11 w-11 rounded-xl bg-[var(--leaf)]/15 text-[var(--forest-deep)] flex items-center justify-center"><v.icon className="h-5 w-5" /></div>
                <h4 className="mt-4 font-bold text-[var(--forest-deep)]">{v.t}</h4>
                <p className="mt-2 text-sm text-[var(--muted-foreground)]">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-[var(--leaf)] uppercase">Timeline</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-[var(--forest-deep)]">Three decades in the field.</h2>
          <div className="mt-14 space-y-8">
            {TIMELINE.map(([year, t]) => (
              <div key={year} className="grid grid-cols-[80px_1fr] gap-6 border-b border-[var(--border)] pb-6">
                <div className="text-2xl font-extrabold text-[var(--leaf)]">{year}</div>
                <p className="text-[var(--forest-deep)]">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}