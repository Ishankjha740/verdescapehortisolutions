import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";

const CANONICAL = "https://verdescapehortisolutions.lovable.app/guides/sustainable-landscapes";

export const Route = createFileRoute("/guides/sustainable-landscapes")({
  head: () => ({
    meta: [
      { title: "Sustainable Landscapes in South India — VerdeScape" },
      { name: "description", content: "Native plant palettes, drip irrigation and soil health — a practitioner's guide to sustainable landscapes for South India." },
      { property: "og:title", content: "How to Create Sustainable Landscapes in South India" },
      { property: "og:description", content: "Native palettes, water-smart irrigation and soil health — a practitioner's guide to sustainable landscapes for South Indian climate zones." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: CANONICAL },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "How to Create Sustainable Landscapes in South India",
          description: "Native plant selection, drip irrigation and soil health for sustainable landscapes in South India.",
          author: { "@type": "Organization", name: "VerdeScape Horti Solutions" },
          publisher: { "@type": "Organization", name: "VerdeScape Horti Solutions" },
          mainEntityOfPage: CANONICAL,
        }),
      },
    ],
  }),
  component: GuidePage,
});

function GuidePage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Guide"
        title="How to create sustainable landscapes in South India"
        subtitle="A practitioner's guide to native plant selection, water-smart irrigation and soil health — tuned to Deccan, coastal and Western Ghats climate zones."
      />
      <section className="py-20 md:py-28">
        <article className="container-x prose prose-lg mx-auto max-w-3xl text-[var(--foreground)] leading-relaxed space-y-10">
          <div>
            <h2 className="text-3xl font-extrabold text-[var(--forest-deep)]">Why sustainability starts at the site</h2>
            <p className="mt-4">
              A sustainable landscape isn't a style — it's a set of decisions about which
              plants belong, how water moves, and how soil is built. In South India, where
              the same district can host a dry Deccan plateau, a humid coastal belt and a
              high-rainfall Ghats slope, those decisions have to be made locally, not
              imported from a temperate template.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-[var(--forest-deep)]">1. Choose native and climate-adapted plants</h2>
            <p className="mt-4">
              Start with species that already thrive within 200 km of the site. Native
              trees like <em>Pongamia pinnata</em>, <em>Terminalia arjuna</em> and
              <em> Millingtonia hortensis</em>, ground covers like <em>Wedelia trilobata</em>
              and grasses like <em>Cymbopogon flexuosus</em> establish faster, need less
              irrigation once mature, and support pollinators the region depends on.
            </p>
            <p className="mt-4">
              Avoid decorative exotics that demand year-round watering or fungicide programs
              — they read as "green" for a season, then fail in the first bad summer.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-[var(--forest-deep)]">2. Design for water, then irrigate</h2>
            <p className="mt-4">
              A well-planned South Indian landscape can cut irrigation demand by 50–70%
              through three moves: harvest rainwater into swales and recharge pits, group
              plantings by water need (hydrozoning), and switch overhead sprinklers to
              inline drip with soil-moisture sensors.
            </p>
            <p className="mt-4">
              Drip lines placed under mulch deliver water directly to root zones with almost
              no evaporation loss — critical in April and May when open-air sprinkler
              systems lose 40% of their output before it reaches the soil.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-[var(--forest-deep)]">3. Build living soils</h2>
            <p className="mt-4">
              Most South Indian landscape sites arrive as compacted red or black cotton
              subsoil with no biology left in it. Long-term sustainability requires
              rebuilding that biology: compost tea drenches, mycorrhizal inoculants at
              planting, and a permanent 3–5 cm mulch layer that decomposes into humus each
              monsoon.
            </p>
            <p className="mt-4">
              Healthy soil holds three times more water than depleted soil, resists erosion
              during monsoon downpours, and stores carbon quietly for decades.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-[var(--forest-deep)]">4. Match the climate zone</h2>
            <p className="mt-4">
              South India isn't one climate. The Deccan interior (Hyderabad, Bengaluru,
              Pune fringe) is semi-arid with hot summers — favour drought-tolerant
              natives and deep-rooted trees for shade. The coastal belt (Chennai, Kochi,
              Mangaluru) is humid and salt-influenced — choose species that tolerate high
              humidity and occasional cyclonic wind. The Western Ghats slope
              (Coorg, Wayanad, parts of Nilgiris) is high-rainfall — design for drainage,
              slope stabilisation and shade-tolerant understorey.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-[var(--forest-deep)]">5. Maintain for the long term</h2>
            <p className="mt-4">
              The most sustainable landscape is the one that survives its first three years.
              Budget for a 24-month establishment plan with quarterly pruning, mulch top-ups,
              and irrigation audits — then transition to a lighter-touch maintenance
              rhythm once the planting matures.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-[var(--forest-deep)]">Where to go next</h2>
            <p className="mt-4">
              Sustainable landscapes are cumulative — every planting cycle, irrigation tweak
              and soil amendment compounds. If you'd like a review of an existing site or
              help designing one from scratch, VerdeScape's team works across South India.
            </p>
          </div>
        </article>
      </section>
    </SiteLayout>
  );
}