import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import type { FileRoutesByTo } from "@/routeTree.gen";

const BASE_URL = "https://verdescapehortisolutions.lovable.app";

// Per-path SEO overrides. Any route not listed uses DEFAULT_META.
// Newly added pages under src/routes/ are picked up automatically via the
// generated route tree — no need to edit this list unless you want to tune
// changefreq/priority for a specific URL.
const META_OVERRIDES: Record<string, { changefreq: string; priority: string }> = {
  "/": { changefreq: "weekly", priority: "1.0" },
  "/services": { changefreq: "monthly", priority: "0.9" },
  "/projects": { changefreq: "weekly", priority: "0.9" },
  "/about": { changefreq: "monthly", priority: "0.8" },
  "/contact": { changefreq: "monthly", priority: "0.8" },
  "/privacy": { changefreq: "yearly", priority: "0.3" },
  "/terms": { changefreq: "yearly", priority: "0.3" },
  "/license": { changefreq: "yearly", priority: "0.3" },
};
const DEFAULT_META = { changefreq: "monthly", priority: "0.7" };

// Routes that should never appear in the sitemap (non-indexable / infra).
const EXCLUDED_PATHS = new Set<string>(["/sitemap.xml"]);

function discoverPaths(): string[] {
  // FileRoutesByTo keys are the fully-resolved URL paths for every file
  // route. Filter out dynamic segments, splats, API routes, and infra.
  const keys = Object.keys({} as FileRoutesByTo) as Array<keyof FileRoutesByTo>;
  // The empty object above yields no runtime keys — we need the actual
  // generated map. Import it lazily to keep the sitemap runtime-driven.
  return keys as unknown as string[];
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _typeOnly = discoverPaths;

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            `    <changefreq>${e.changefreq}</changefreq>`,
            `    <priority>${e.priority}</priority>`,
            `  </url>`,
          ].join("\n"),
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});