import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight, ArrowUpRight, Sparkles, Leaf, Droplets, TreePine, Wrench,
  ClipboardList, Building2, ShieldCheck, Star, MessageCircle, Phone,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import heroImg from "@/assets/hero-landscape.jpg";
import aboutImg from "@/assets/about-team.jpg";
import corporateImg from "@/assets/project-corporate.jpg";
import resortImg from "@/assets/project-resort.jpg";
import residentialImg from "@/assets/project-residential.jpg";
import healthcareImg from "@/assets/project-healthcare.jpg";
import educationImg from "@/assets/project-education.jpg";
import sustainabilityImg from "@/assets/sustainability.jpg";
import leavesImg from "@/assets/texture-leaves.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <TrustStrip />
      <AboutPreview />
      <Services />
      <Industries />
      <WhyVerde />
      <FeaturedProjects />
      <Process />
      <Sustainability />
      <Testimonials />
      <Insights />
      <CTABand />
    </SiteLayout>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden text-[var(--cream)]">
      <img
        src={heroImg}
        alt="Sustainable landscape at dusk"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest-deep)] via-[var(--forest-deep)]/40 to-transparent" />

      <div className="container-x relative flex min-h-[100svh] flex-col justify-end pb-20 pt-40 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs font-medium tracking-wider uppercase text-[var(--leaf-soft)]">
            <Sparkles className="h-3.5 w-3.5" /> 30 years · South India's integrated horticulture partner
          </div>
          <h1 className="mt-6 text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[0.98] tracking-tight">
            Building sustainable
            <br />
            <span className="italic font-[Manrope] text-[var(--leaf)]">landscapes </span>
            that inspire.
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-[var(--cream)]/80 leading-relaxed">
            VerdeScape blends research, design, and hands-on horticulture to create
            outdoor environments that elevate architecture, wellbeing, and long-term value.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[var(--leaf)] px-7 py-4 text-sm font-semibold text-[var(--forest-deep)] shadow-[var(--shadow-glow)] hover:bg-[var(--leaf-soft)] transition"
            >
              Request Consultation
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-3 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-[var(--cream)] hover:bg-white/10 transition"
            >
              Explore Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>

        {/* Floating stats card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid grid-cols-3 gap-px overflow-hidden rounded-3xl glass-dark md:max-w-2xl"
        >
          {[
            { n: "30+", l: "Years Experience" },
            { n: "500+", l: "Projects Delivered" },
            { n: "95%", l: "Client Satisfaction" },
          ].map((s) => (
            <div key={s.l} className="bg-transparent p-6 md:p-7">
              <div className="text-3xl md:text-4xl font-extrabold text-[var(--leaf)]">{s.n}</div>
              <div className="mt-1 text-xs md:text-sm text-[var(--cream)]/70 tracking-wide">{s.l}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-6 hidden md:flex flex-col items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-[var(--cream)]/60">
          Scroll
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

/* ---------- TRUST STRIP ---------- */
function TrustStrip() {
  const logos = ["Prestige", "Brigade", "Sobha", "Taj Group", "ITC Hotels", "IIT Madras", "Infosys", "Manipal"];
  return (
    <section className="border-y border-[var(--border)] bg-[var(--cream)]">
      <div className="container-x py-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
        <div className="text-xs font-semibold tracking-[0.3em] uppercase text-[var(--muted-foreground)] shrink-0">
          Trusted by leading brands
        </div>
        <div className="relative flex-1 overflow-hidden">
          <div className="flex gap-10 md:gap-14 items-center animate-[marquee_35s_linear_infinite] whitespace-nowrap">
            {[...logos, ...logos].map((l, i) => (
              <span key={i} className="text-lg md:text-xl font-semibold text-[var(--forest-deep)]/40 tracking-tight">
                {l}
              </span>
            ))}
          </div>
          <style>{`@keyframes marquee { from { transform: translateX(0);} to { transform: translateX(-50%);} }`}</style>
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT PREVIEW ---------- */
function AboutPreview() {
  return (
    <section className="py-28 md:py-36">
      <div className="container-x grid gap-14 lg:grid-cols-12 items-center">
        <motion.div {...fadeUp} className="lg:col-span-6 relative">
          <div className="relative rounded-[2rem] overflow-hidden shadow-[var(--shadow-elegant)]">
            <img src={aboutImg} alt="Horticulturist inspecting garden" width={1280} height={1600} loading="lazy" className="w-full h-[560px] object-cover" />
          </div>
          <div className="absolute -bottom-8 -right-4 md:-right-8 rounded-2xl bg-[var(--forest-deep)] text-[var(--cream)] p-6 md:p-8 shadow-[var(--shadow-elegant)] max-w-[260px]">
            <div className="text-5xl font-extrabold text-[var(--leaf)]">30+</div>
            <div className="mt-1 text-sm text-[var(--cream)]/70">Years of horticulture research, design and execution.</div>
          </div>
        </motion.div>
        <motion.div {...fadeUp} className="lg:col-span-6 lg:pl-8">
          <p className="text-xs font-semibold tracking-[0.3em] text-[var(--leaf)] uppercase">Our Story</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-[1.05] text-[var(--forest-deep)]">
            A one-stop horticulture partner — from concept to canopy.
          </h2>
          <p className="mt-6 text-[var(--muted-foreground)] leading-relaxed">
            Since 1994, VerdeScape has helped architects, developers and institutions
            translate ambitious ideas into living, breathing landscapes. Our integrated
            teams handle research, design, execution and long-term maintenance under one roof.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-semibold text-[var(--forest-deep)] uppercase tracking-wider">Mission</h3>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                To transform every project into a thriving ecosystem — sustainable, functional, unforgettable.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[var(--forest-deep)] uppercase tracking-wider">Vision</h3>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                A greener South India — one institution, workplace and home at a time.
              </p>
            </div>
          </div>
          <Link to="/about" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[var(--forest-deep)] hover:text-[var(--leaf)] group">
            Learn more about us <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
const SERVICES = [
  { icon: Leaf, title: "Landscape Design", desc: "Site-sensitive master planning and planting design led by botanists and architects." },
  { icon: Wrench, title: "Landscape Execution", desc: "Turnkey build with soil science, irrigation, hardscape and precision planting." },
  { icon: ClipboardList, title: "Project Management", desc: "End-to-end delivery with tight cost, timeline and horticulture QC control." },
  { icon: TreePine, title: "Maintenance", desc: "Long-horizon care programs that keep landscapes thriving for decades." },
  { icon: Sparkles, title: "Horticulture Consultancy", desc: "Research-backed advice on species, soils, water and biodiversity for your site." },
  { icon: Building2, title: "Institutional Advisory", desc: "Campus greening strategies for schools, hospitals, IT parks and townships." },
];

function Services() {
  return (
    <section className="py-28 md:py-36 bg-[var(--muted)] relative overflow-hidden">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[var(--leaf)] uppercase">What we do</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-[1.05] text-[var(--forest-deep)] max-w-2xl">
              Six services. One integrated horticulture practice.
            </h2>
          </div>
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--forest-deep)] hover:text-[var(--leaf)]">
            All services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative rounded-3xl bg-[var(--card)] p-8 border border-[var(--border)] hover:border-[var(--leaf)] hover:shadow-[var(--shadow-elegant)] transition-all duration-500"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--leaf)]/15 text-[var(--forest-deep)] group-hover:bg-[var(--leaf)] transition-colors">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-[var(--forest-deep)]">{s.title}</h3>
              <p className="mt-3 text-sm text-[var(--muted-foreground)] leading-relaxed">{s.desc}</p>
              <Link to="/services" className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--forest-deep)] group-hover:text-[var(--leaf)]">
                Discover <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- INDUSTRIES ---------- */
const INDUSTRIES = [
  { label: "Commercial", img: corporateImg },
  { label: "Residential", img: residentialImg },
  { label: "Healthcare", img: healthcareImg },
  { label: "Hospitality", img: resortImg },
  { label: "Education", img: educationImg },
  { label: "Government", img: corporateImg },
  { label: "IT Parks", img: corporateImg },
  { label: "Townships", img: residentialImg },
];

function Industries() {
  return (
    <section className="py-28 md:py-36 bg-[var(--forest-deep)] text-[var(--cream)] relative overflow-hidden">
      <img src={leavesImg} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-10" />
      <div className="container-x relative">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-[var(--leaf)] uppercase">Industries served</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-[1.05]">
            Landscapes tuned to the way each space is used.
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.label + i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5]"
            >
              <img src={ind.img} alt={ind.label} loading="lazy" width={800} height={1000} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest-deep)] via-[var(--forest-deep)]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-sm font-semibold">{ind.label}</div>
                <div className="h-px w-8 bg-[var(--leaf)] mt-2 transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY ---------- */
const WHY = [
  { t: "30+ years expertise", d: "Three decades of horticulture depth across South Indian climate zones." },
  { t: "Research-driven", d: "In-house botany team validates every species and soil decision." },
  { t: "Customer-first", d: "Consultative process aligned to your architecture, budget and goals." },
  { t: "Sustainable by default", d: "Native palettes, water-smart irrigation, low-lifecycle carbon." },
  { t: "One-stop partner", d: "Design, build, and maintain — under a single accountable team." },
  { t: "Future-ready", d: "Resilient landscapes designed for climate change and long lifespans." },
];

function WhyVerde() {
  return (
    <section className="py-28 md:py-36">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-[var(--leaf)] uppercase">Why VerdeScape</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-[1.05] text-[var(--forest-deep)]">
            Depth, discipline, and living design.
          </h2>
        </div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {WHY.map((w, i) => (
            <motion.div key={w.t} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.05 }} className="relative pl-6 border-l-2 border-[var(--leaf)]">
              <div className="absolute -left-[7px] top-0 h-3 w-3 rounded-full bg-[var(--leaf)] shadow-[var(--shadow-glow)]" />
              <div className="text-xs font-mono text-[var(--leaf)]">0{i + 1}</div>
              <h3 className="mt-2 text-xl font-bold text-[var(--forest-deep)]">{w.t}</h3>
              <p className="mt-3 text-sm text-[var(--muted-foreground)] leading-relaxed">{w.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FEATURED PROJECTS ---------- */
const PROJECTS = [
  { title: "The Prestige Sanctuary", tag: "Commercial", img: corporateImg, size: "large" },
  { title: "Coorg Coffee Estate Villa", tag: "Residential", img: residentialImg, size: "small" },
  { title: "Aster Healing Gardens", tag: "Institutional", img: healthcareImg, size: "small" },
  { title: "Taj Serenity Retreat", tag: "Hospitality", img: resortImg, size: "large" },
  { title: "Manipal Central Campus", tag: "Institutional", img: educationImg, size: "small" },
  { title: "Prestige Bay Residences", tag: "Residential", img: residentialImg, size: "small" },
];

function FeaturedProjects() {
  const [filter, setFilter] = useState<"All" | "Commercial" | "Residential" | "Institutional" | "Hospitality">("All");
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.tag === filter);
  return (
    <section className="py-28 md:py-36 bg-[var(--muted)]">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[var(--leaf)] uppercase">Featured Projects</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-[1.05] text-[var(--forest-deep)] max-w-xl">
              Selected work from three decades of practice.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {(["All", "Commercial", "Residential", "Institutional", "Hospitality"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-4 py-2 text-xs font-semibold border transition ${
                  filter === f
                    ? "bg-[var(--forest-deep)] text-[var(--cream)] border-[var(--forest-deep)]"
                    : "border-[var(--border)] text-[var(--forest-deep)] hover:border-[var(--leaf)]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-[220px] gap-4">
          {filtered.map((p, i) => (
            <motion.div
              key={p.title + i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-3xl ${
                p.size === "large" ? "md:col-span-4 md:row-span-2" : "md:col-span-2 md:row-span-1"
              }`}
            >
              <img src={p.img} alt={p.title} loading="lazy" width={1200} height={900} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest-deep)]/95 via-[var(--forest-deep)]/20 to-transparent" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-[var(--cream)]">
                <div className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[var(--leaf)]">{p.tag}</div>
                <div className="mt-2 text-xl md:text-2xl font-bold">{p.title}</div>
                <div className="mt-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold">View Project <ArrowUpRight className="h-3.5 w-3.5" /></span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PROCESS ---------- */
const STEPS = [
  "Consultation", "Site Visit", "Planning", "Design", "Execution", "Maintenance", "Long-term Partnership",
];

function Process() {
  return (
    <section className="py-28 md:py-36">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-[var(--leaf)] uppercase">Our process</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-[1.05] text-[var(--forest-deep)]">
            Seven steps. One accountable team.
          </h2>
        </div>
        <div className="mt-16 relative">
          <div className="absolute left-0 right-0 top-6 h-px bg-gradient-to-r from-transparent via-[var(--leaf)] to-transparent hidden md:block" />
          <div className="grid grid-cols-2 md:grid-cols-7 gap-6">
            {STEPS.map((s, i) => (
              <motion.div
                key={s}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.06 }}
                className="relative text-center"
              >
                <div className="mx-auto h-12 w-12 rounded-full bg-[var(--forest-deep)] text-[var(--leaf)] flex items-center justify-center text-sm font-bold shadow-[var(--shadow-glow)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-4 text-sm font-semibold text-[var(--forest-deep)]">{s}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SUSTAINABILITY ---------- */
function Sustainability() {
  const items = [
    { icon: Droplets, t: "Water conservation", d: "Smart drip irrigation reduces water use by up to 60%." },
    { icon: Leaf, t: "Native plants", d: "Locally-adapted species that thrive with less intervention." },
    { icon: ShieldCheck, t: "Environmental impact", d: "Landscapes designed to sequester carbon and boost biodiversity." },
  ];
  return (
    <section className="py-28 md:py-36 relative overflow-hidden">
      <div className="container-x grid gap-14 lg:grid-cols-12 items-center">
        <motion.div {...fadeUp} className="lg:col-span-6 order-2 lg:order-1">
          <p className="text-xs font-semibold tracking-[0.3em] text-[var(--leaf)] uppercase">Sustainability</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-[1.05] text-[var(--forest-deep)]">
            Design that gives more than it takes.
          </h2>
          <p className="mt-6 text-[var(--muted-foreground)] leading-relaxed max-w-xl">
            Every VerdeScape landscape is engineered around lifecycle thinking —
            from native plant palettes and rainwater harvesting to soil health and long-term maintenance strategy.
          </p>
          <div className="mt-10 space-y-6">
            {items.map((it) => (
              <div key={it.t} className="flex gap-4">
                <div className="shrink-0 h-11 w-11 rounded-2xl bg-[var(--leaf)]/15 text-[var(--forest-deep)] flex items-center justify-center">
                  <it.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--forest-deep)]">{it.t}</h3>
                  <p className="mt-1 text-sm text-[var(--muted-foreground)]">{it.d}</p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/sustainability" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[var(--forest-deep)] hover:text-[var(--leaf)] group">
            Read our sustainability charter <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
        <motion.div {...fadeUp} className="lg:col-span-6 order-1 lg:order-2">
          <div className="relative rounded-[2rem] overflow-hidden shadow-[var(--shadow-elegant)]">
            <img src={sustainabilityImg} alt="Hands planting sapling" loading="lazy" width={1600} height={1200} className="w-full h-[560px] object-cover" />
            <div className="absolute top-6 left-6 rounded-2xl glass px-5 py-4">
              <div className="text-2xl font-extrabold text-[var(--forest-deep)]">60%</div>
              <div className="text-xs text-[var(--muted-foreground)]">water saved on avg. site</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
const TESTIMONIALS = [
  {
    quote: "VerdeScape didn't just design a landscape — they built a living asset for our campus that our residents genuinely love.",
    name: "Ananya Rao",
    role: "Estate Director, Prestige Group",
  },
  {
    quote: "Three decades of horticultural depth is visible in every planting decision. The healing garden has measurably improved patient recovery times.",
    name: "Dr. Kiran Menon",
    role: "COO, Aster Hospitals",
  },
  {
    quote: "The most consultative, science-led landscape partner we've worked with across our resort portfolio.",
    name: "Rohan Iyer",
    role: "VP Development, Taj Group",
  },
];

function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  return (
    <section className="py-28 md:py-36 bg-[var(--forest-deep)] text-[var(--cream)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_50%_50%,var(--leaf)_0%,transparent_50%)]" />
      <div className="container-x relative max-w-4xl">
        <p className="text-xs font-semibold tracking-[0.3em] text-[var(--leaf)] uppercase text-center">Client voices</p>
        <div className="mt-8 text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, k) => (<Star key={k} className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />))}
          </div>
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl font-[Manrope] leading-snug tracking-tight"
          >
            "{t.quote}"
          </motion.blockquote>
          <div className="mt-8 text-sm">
            <div className="font-semibold text-[var(--leaf)]">{t.name}</div>
            <div className="text-[var(--cream)]/60">{t.role}</div>
          </div>
          <div className="mt-10 flex justify-center gap-2">
            {TESTIMONIALS.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Testimonial ${k + 1}`}
                className={`h-1.5 rounded-full transition-all ${k === i ? "w-10 bg-[var(--leaf)]" : "w-4 bg-white/25"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- INSIGHTS ---------- */
const POSTS = [
  { tag: "Sustainability", title: "Native planting palettes for South Indian workplaces", read: "6 min read", img: sustainabilityImg },
  { tag: "Urban Greenery", title: "Vertical gardens: what actually thrives on Bengaluru facades", read: "8 min read", img: corporateImg },
  { tag: "Maintenance", title: "The 12-month care calendar for premium residential estates", read: "5 min read", img: residentialImg },
];

function Insights() {
  return (
    <section className="py-28 md:py-36">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[var(--leaf)] uppercase">Insights</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-[1.05] text-[var(--forest-deep)] max-w-2xl">
              Field notes from three decades of practice.
            </h2>
          </div>
          <Link to="/insights" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--forest-deep)] hover:text-[var(--leaf)]">
            All articles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {POSTS.map((p, i) => (
            <motion.article
              key={p.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              className="group rounded-3xl overflow-hidden border border-[var(--border)] bg-[var(--card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img src={p.img} alt={p.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-110" />
              </div>
              <div className="p-7">
                <div className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[var(--leaf)]">{p.tag}</div>
                <h3 className="mt-3 text-lg font-bold text-[var(--forest-deep)] leading-snug group-hover:text-[var(--leaf)] transition-colors">
                  {p.title}
                </h3>
                <div className="mt-5 flex items-center justify-between text-xs text-[var(--muted-foreground)]">
                  <span>{p.read}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA BAND ---------- */
function CTABand() {
  return (
    <section className="pb-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2.5rem] p-10 md:p-20 text-center text-[var(--cream)]" style={{ background: "var(--gradient-leaf)" }}>
          <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: `url(${leavesImg})`, backgroundSize: "cover" }} />
          <div className="relative max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.05] text-[var(--forest-deep)]">
              Ready to transform your landscape?
            </h2>
            <p className="mt-5 text-[var(--forest-deep)]/80 md:text-lg">
              Book a complimentary 30-minute consultation. We'll review your site,
              brief and objectives — and share a first perspective.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--forest-deep)] text-[var(--cream)] px-7 py-4 text-sm font-semibold hover:bg-black transition">
                Book Consultation <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a href="tel:+918045678900" className="inline-flex items-center gap-2 rounded-full bg-[var(--forest-deep)]/10 text-[var(--forest-deep)] border border-[var(--forest-deep)]/20 px-7 py-4 text-sm font-semibold hover:bg-[var(--forest-deep)]/20 transition">
                <Phone className="h-4 w-4" /> Talk to an Expert
              </a>
              <a href="https://wa.me/918045678900" className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] text-[var(--forest-deep)] px-7 py-4 text-sm font-semibold hover:brightness-95 transition">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
