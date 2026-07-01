import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import corporateImg from "@/assets/project-corporate.jpg";
import residentialImg from "@/assets/project-residential.jpg";
import healthcareImg from "@/assets/project-healthcare.jpg";
import resortImg from "@/assets/project-resort.jpg";
import educationImg from "@/assets/project-education.jpg";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — VerdeScape Landscape Solutions" },
      { name: "description", content: "Landscapes tailored to corporate, residential, healthcare, hospitality, education and government sectors." },
      { property: "og:title", content: "Industries served — VerdeScape Landscape Solutions" },
      { property: "og:description", content: "Sector-specific landscape design and maintenance for corporate, healthcare, education, hospitality, government and residential clients." },
      { property: "og:url", content: "https://verdescapehortisolutions.lovable.app/industries" },
    ],
    links: [{ rel: "canonical", href: "https://verdescapehortisolutions.lovable.app/industries" }],
  }),
  component: IndustriesPage,
});

const SECTORS = [
  { t: "Corporate", d: "Rooftops, plazas and courtyards that boost employee wellbeing and brand identity.", img: corporateImg },
  { t: "Healthcare", d: "Evidence-based healing gardens shown to accelerate patient recovery.", img: healthcareImg },
  { t: "Education", d: "Learning landscapes for schools, colleges and university campuses.", img: educationImg },
  { t: "Hospitality", d: "Signature landscapes for hotels, resorts and destination properties.", img: resortImg },
  { t: "Government", d: "Civic parks, campuses and public realm at scale.", img: corporateImg },
  { t: "Residential", d: "Premium villas, townships and gated community masterplans.", img: residentialImg },
];

function IndustriesPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Industries" title="Landscapes tuned to the way each space is used." subtitle="We design and maintain outdoor environments for six sectors — each with its own brief, budget and biology." />
      <section className="py-24 md:py-32">
        <div className="container-x space-y-24">
          {SECTORS.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
              className={`grid gap-10 lg:grid-cols-12 items-center ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="lg:col-span-7">
                <div className="rounded-[2rem] overflow-hidden shadow-[var(--shadow-elegant)]">
                  <img src={s.img} alt={`${s.t} landscape project`} loading="lazy" width={1200} height={800} className="w-full h-[420px] md:h-[480px] object-cover" />
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="text-xs font-mono text-[var(--leaf)]">0{i + 1} · Sector</div>
                <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-[var(--forest-deep)]">{s.t}</h2>
                <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">{s.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}