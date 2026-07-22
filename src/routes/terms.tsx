import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — VerdeScape Horti Solutions" },
      { name: "description", content: "The terms that govern use of the VerdeScape Horti Solutions website and the content, materials, and services provided through it." },
      { property: "og:title", content: "Terms of Service — VerdeScape Horti Solutions" },
      { property: "og:description", content: "Terms governing use of the VerdeScape website and services." },
      { property: "og:url", content: "https://verdescapehortisolutions.lovable.app/terms" },
    ],
    links: [{ rel: "canonical", href: "https://verdescapehortisolutions.lovable.app/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  const updated = "January 2026";
  return (
    <SiteLayout>
      <PageHero eyebrow="Legal" title="Terms of Service" subtitle={`Last updated: ${updated}. By using this website you agree to the terms below.`} />
      <section className="py-20 md:py-28">
        <div className="container-x max-w-3xl space-y-10 text-[var(--forest-deep)]/90 leading-relaxed">
          <p>
            These Terms govern your use of the website operated by VerdeScape Horti
            Solutions (OPC) Limited ("VerdeScape", "we", "us"). Project engagements are
            governed by a separate signed agreement; these Terms cover the website only.
          </p>

          <div>
            <h2 className="text-2xl font-extrabold mb-3">1. Use of the site</h2>
            <p>You agree to use the site lawfully and not to attempt to disrupt it, reverse-engineer it, scrape it at scale, or use it to transmit harmful code.</p>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold mb-3">2. Content and intellectual property</h2>
            <p>All text, images, project photography, logos and design on this site are owned by VerdeScape or its licensors and are protected by applicable IP laws. You may share links to public pages; you may not republish, resell or create derivative works without written permission.</p>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold mb-3">3. Enquiries and proposals</h2>
            <p>Information provided on the site (services, timelines, sample deliverables) is indicative. Binding scope, pricing and warranties are only those set out in a signed proposal or contract.</p>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold mb-3">4. Third-party links</h2>
            <p>The site may link to third-party resources. We are not responsible for the content, privacy or practices of those sites.</p>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold mb-3">5. Disclaimer</h2>
            <p>The site is provided on an "as is" basis. To the extent permitted by law, VerdeScape disclaims all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.</p>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold mb-3">6. Limitation of liability</h2>
            <p>To the maximum extent permitted by law, VerdeScape will not be liable for any indirect, incidental, or consequential losses arising from your use of the site.</p>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold mb-3">7. Governing law</h2>
            <p>These Terms are governed by the laws of India. Courts at Hyderabad, Telangana shall have exclusive jurisdiction over any dispute arising from the site.</p>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold mb-3">8. Contact</h2>
            <p>Questions about these Terms? Write to <a className="text-[var(--leaf)] font-semibold" href="mailto:info@verdescapehortisolutions.com">info@verdescapehortisolutions.com</a>.</p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}