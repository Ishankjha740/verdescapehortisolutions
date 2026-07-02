import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Book a landscape consultation with VerdeScape" },
      { name: "description", content: "Talk to VerdeScape about your landscape design, execution or maintenance project. Studio in Hyderabad serving all South India." },
      { property: "og:title", content: "Contact VerdeScape — Book a landscape consultation" },
      { property: "og:description", content: "Reach the VerdeScape team for landscape design, execution and maintenance projects across South India." },
      { property: "og:url", content: "https://verdescapehortisolutions.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://verdescapehortisolutions.lovable.app/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageHero eyebrow="Contact" title="Let's grow something exceptional." subtitle="Book a 30-minute consultation. Share your site, brief and objectives — we'll come back with a first perspective." />

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-8 md:p-12 shadow-[var(--shadow-soft)]">
              {sent ? (
                <div className="py-10 text-center">
                  <div className="text-2xl font-extrabold text-[var(--forest-deep)]">Thank you.</div>
                  <p className="mt-3 text-[var(--muted-foreground)]">A senior consultant will be in touch within 2 business days.</p>
                </div>
              ) : (
                <form
                  className="space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const fd = new FormData(e.currentTarget);
                    const get = (k: string) => String(fd.get(k) ?? "").trim();
                    const subject = `Consultation request — ${get("name") || "VerdeScape site"}`;
                    const body = [
                      `Name: ${get("name")}`,
                      `Organisation: ${get("org")}`,
                      `Email: ${get("email")}`,
                      `Phone: ${get("phone")}`,
                      `Project type: ${get("projectType")}`,
                      "",
                      "Brief:",
                      get("brief"),
                    ].join("\n");
                    window.location.href = `mailto:info@verdescapehortisolutions.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                    setSent(true);
                  }}
                >
                  <div className="grid md:grid-cols-2 gap-5">
                    <Field label="Full name" name="name" />
                    <Field label="Organisation" name="org" />
                    <Field label="Email" name="email" type="email" />
                    <Field label="Phone" name="phone" type="tel" />
                  </div>
                  <div>
                    <label htmlFor="project-type" className="text-xs font-semibold uppercase tracking-widest text-[var(--forest-deep)]">Project type</label>
                    <select id="project-type" name="projectType" required aria-label="Project type" className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--leaf)]">
                      <option>Landscape Design</option>
                      <option>Landscape Execution</option>
                      <option>Maintenance</option>
                      <option>Consultancy</option>
                      <option>Institutional Advisory</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="project-brief" className="text-xs font-semibold uppercase tracking-widest text-[var(--forest-deep)]">Tell us about the site & brief</label>
                    <textarea id="project-brief" name="brief" required rows={5} className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--leaf)]" />
                  </div>
                  <button className="rounded-full bg-[var(--forest-deep)] text-[var(--cream)] px-7 py-4 text-sm font-semibold hover:bg-[var(--leaf)] hover:text-[var(--forest-deep)] transition">
                    Request Consultation
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <InfoCard icon={MapPin} title="Studio" body="Kokapet, Hyderabad 500089, India" />
            <InfoCard icon={Phone} title="Call" body="+91 99594 23300" href="tel:+919959423300" />
            <InfoCard icon={Mail} title="Email" body="info@verdescapehortisolutions.com" href="mailto:info@verdescapehortisolutions.com" />
            <InfoCard icon={MessageCircle} title="WhatsApp" body="Chat with our team" href="https://wa.me/919959423300" />
            <InfoCard icon={Clock} title="Hours" body="Mon–Sat · 9:30 AM – 6:30 PM IST" />

            <div className="rounded-3xl overflow-hidden border border-[var(--border)] aspect-video">
              <iframe
                title="Studio location"
                className="w-full h-full"
                src="https://www.google.com/maps?q=Kokapet+Hyderabad+500089&output=embed"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-widest text-[var(--forest-deep)]">{label}</label>
      <input name={name} type={type} required className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--leaf)]" />
    </div>
  );
}

function InfoCard({ icon: Icon, title, body, href }: { icon: any; title: string; body: string; href?: string }) {
  const inner = (
    <div className="flex gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 hover:border-[var(--leaf)] transition">
      <div className="h-11 w-11 shrink-0 rounded-xl bg-[var(--leaf)]/15 text-[var(--forest-deep)] flex items-center justify-center">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)]">{title}</div>
        <div className="mt-1 font-semibold text-[var(--forest-deep)]">{body}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}