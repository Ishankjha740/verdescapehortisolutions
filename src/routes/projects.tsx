import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { ArrowUpRight } from "lucide-react";
import corporateImg from "@/assets/project-corporate.jpg";
import residentialImg from "@/assets/project-residential.jpg";
import healthcareImg from "@/assets/project-healthcare.jpg";
import resortImg from "@/assets/project-resort.jpg";
import educationImg from "@/assets/project-education.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Selected landscape work by VerdeScape" },
      { name: "description", content: "A portfolio of landscape design and execution across corporate, residential, hospitality, healthcare and institutional projects." },
    ],
  }),
  component: ProjectsPage,
});

const PROJECTS = [
  { title: "Prestige Sanctuary", city: "Bengaluru", year: 2024, sector: "Commercial", size: "8 acres", img: corporateImg },
  { title: "Coorg Coffee Estate Villa", city: "Coorg", year: 2023, sector: "Residential", size: "2 acres", img: residentialImg },
  { title: "Aster Healing Gardens", city: "Chennai", year: 2023, sector: "Healthcare", size: "4 acres", img: healthcareImg },
  { title: "Taj Serenity Retreat", city: "Kumarakom", year: 2022, sector: "Hospitality", size: "12 acres", img: resortImg },
  { title: "Manipal Central Campus", city: "Manipal", year: 2022, sector: "Institutional", size: "30 acres", img: educationImg },
  { title: "Brigade Bay Residences", city: "Chennai", year: 2021, sector: "Residential", size: "6 acres", img: residentialImg },
  { title: "Infosys Mysuru Green Belt", city: "Mysuru", year: 2020, sector: "Commercial", size: "20 acres", img: corporateImg },
  { title: "ITC Grand Chola Courts", city: "Chennai", year: 2020, sector: "Hospitality", size: "5 acres", img: resortImg },
];

const SECTORS = ["All", "Commercial", "Residential", "Healthcare", "Hospitality", "Institutional"] as const;

function ProjectsPage() {
  const [sector, setSector] = useState<(typeof SECTORS)[number]>("All");
  const filtered = sector === "All" ? PROJECTS : PROJECTS.filter((p) => p.sector === sector);

  return (
    <SiteLayout>
      <PageHero eyebrow="Projects" title="Three decades of landscapes." subtitle="A selection of built work across sectors and geographies." />
      <section className="py-16">
        <div className="container-x">
          <div className="flex flex-wrap gap-2 mb-10">
            {SECTORS.map((s) => (
              <button
                key={s}
                onClick={() => setSector(s)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold border transition ${sector === s ? "bg-[var(--forest-deep)] text-[var(--cream)] border-[var(--forest-deep)]" : "border-[var(--border)] text-[var(--forest-deep)] hover:border-[var(--leaf)]"}`}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-3xl aspect-[4/5]">
                  <img src={p.img} alt={p.title} loading="lazy" width={800} height={1000} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest-deep)]/90 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-[var(--cream)]">
                    <div className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[var(--leaf)]">{p.sector}</div>
                    <div className="mt-2 text-xl font-bold">{p.title}</div>
                    <div className="mt-1 text-xs opacity-75">{p.city} · {p.year} · {p.size}</div>
                  </div>
                  <div className="absolute top-5 right-5 h-10 w-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <ArrowUpRight className="h-4 w-4 text-[var(--forest-deep)]" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}