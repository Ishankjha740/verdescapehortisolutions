import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — VerdeScape Horti Solutions" },
      { name: "description", content: "How VerdeScape Horti Solutions collects, uses, and protects information shared through our website and client engagements." },
      { property: "og:title", content: "Privacy Policy — VerdeScape Horti Solutions" },
      { property: "og:description", content: "How VerdeScape handles the information you share with us." },
      { property: "og:url", content: "https://verdescapehortisolutions.lovable.app/privacy" },
    ],
    links: [{ rel: "canonical", href: "https://verdescapehortisolutions.lovable.app/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const updated = "January 2026";
  return (
    <SiteLayout>
      <PageHero eyebrow="Legal" title="Privacy Policy" subtitle={`Last updated: ${updated}. This page explains what we collect, why, and the choices you have.`} />
      <section className="py-20 md:py-28">
        <div className="container-x max-w-3xl space-y-10 text-[var(--forest-deep)]/90 leading-relaxed">
          <p>
            This Privacy Policy is maintained by VerdeScape Horti Solutions (OPC) Limited
            ("VerdeScape", "we", "us") and describes how we handle information collected
            through <strong>verdescapehortisolutions.com</strong> and our client engagements.
          </p>

          <div>
            <h2 className="text-2xl font-extrabold mb-3">1. Information we collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact details</strong> you submit via forms or email — name, organisation, email, phone, project brief.</li>
              <li><strong>Newsletter opt-ins</strong> — email address when you subscribe.</li>
              <li><strong>Basic technical data</strong> — device, browser, pages viewed, referring URL, collected via standard server logs.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold mb-3">2. How we use it</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to enquiries and prepare scoping proposals.</li>
              <li>Deliver, manage and maintain landscape and horticulture projects you have engaged us for.</li>
              <li>Send occasional updates when you opt in.</li>
              <li>Improve the website and diagnose technical issues.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold mb-3">3. Sharing</h2>
            <p>We do not sell your information. We share it only with team members, contractors and service providers who need it to deliver a project, or where required by law.</p>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold mb-3">4. Retention</h2>
            <p>We keep enquiry and project records for as long as needed to serve the engagement and to comply with tax, accounting and legal obligations.</p>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold mb-3">5. Your choices</h2>
            <p>You can request access, correction or deletion of your personal data, or unsubscribe from communications, by writing to <a className="text-[var(--leaf)] font-semibold" href="mailto:info@verdescapehortisolutions.com">info@verdescapehortisolutions.com</a>.</p>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold mb-3">6. Security</h2>
            <p>We apply reasonable administrative and technical safeguards to protect the information we hold. No system is perfectly secure — please avoid sharing sensitive information over unsecured channels.</p>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold mb-3">7. Contact</h2>
            <p>Questions about this policy? Reach us at <a className="text-[var(--leaf)] font-semibold" href="mailto:info@verdescapehortisolutions.com">info@verdescapehortisolutions.com</a> or +91 99594 23300, Kokapet, Hyderabad 500089, India.</p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}