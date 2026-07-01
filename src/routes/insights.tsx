import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { ArrowUpRight } from "lucide-react";
import sustainabilityImg from "@/assets/sustainability.jpg";
import corporateImg from "@/assets/project-corporate.jpg";
import residentialImg from "@/assets/project-residential.jpg";
import resortImg from "@/assets/project-resort.jpg";
import healthcareImg from "@/assets/project-healthcare.jpg";
import educationImg from "@/assets/project-education.jpg";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Landscape and horticulture articles by VerdeScape" },
      { name: "description", content: "Field notes on landscape trends, urban greenery, gardening, maintenance and sustainability." },
      { property: "og:title", content: "Insights — Landscape & horticulture field notes" },
      { property: "og:description", content: "Articles on landscape trends, urban greenery, plant science, maintenance and sustainability from the VerdeScape studio." },
      { property: "og:url", content: "https://verdescapehortisolutions.lovable.app/insights" },
    ],
    links: [{ rel: "canonical", href: "https://verdescapehortisolutions.lovable.app/insights" }],
  }),
  component: InsightsPage,
});

const POSTS = [
  { tag: "Sustainability", title: "Native planting palettes for South Indian workplaces", read: "6 min", img: sustainabilityImg },
  { tag: "Urban Greenery", title: "Vertical gardens: what actually thrives on Bengaluru facades", read: "8 min", img: corporateImg },
  { tag: "Maintenance", title: "The 12-month care calendar for premium residential estates", read: "5 min", img: residentialImg },
  { tag: "Trends", title: "Why healing gardens are the fastest-growing hospital investment", read: "7 min", img: healthcareImg },
  { tag: "Hospitality", title: "Designing arrival sequences for luxury resorts", read: "9 min", img: resortImg },
  { tag: "Education", title: "Campus landscapes that shape how students learn outdoors", read: "6 min", img: educationImg },
];

function InsightsPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Insights" title="Field notes from the practice." subtitle="Perspectives on landscape trends, plant science, maintenance and sustainability from the VerdeScape studio." />
      <section className="py-24 md:py-32">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group rounded-3xl overflow-hidden border border-[var(--border)] bg-[var(--card)] hover:shadow-[var(--shadow-elegant)] transition-all"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img src={p.img} alt={p.title} loading="lazy" width={800} height={600} className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110" />
              </div>
              <div className="p-7">
                <div className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[var(--leaf)]">{p.tag}</div>
                <h2 className="mt-3 text-lg font-bold text-[var(--forest-deep)] leading-snug group-hover:text-[var(--leaf)] transition-colors">{p.title}</h2>
                <div className="mt-5 flex items-center justify-between text-xs text-[var(--muted-foreground)]">
                  <span>{p.read} read</span>
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}