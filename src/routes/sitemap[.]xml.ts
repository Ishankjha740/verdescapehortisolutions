import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { routeTree } from "@/routeTree.gen";

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

// Walk the generated route tree and collect every concrete, indexable URL.
// Skips: dynamic ($param) and splat ($) segments, API routes, the sitemap
// itself, and any not-found / layout-only nodes.
function discoverPaths(): string[] {
  const found = new Set<string>();
  const visit = (node: unknown) => {
    if (!node || typeof node !== "object") return;
    const n = node as { fullPath?: string; children?: Record<string, unknown> | unknown[] };
    const p = n.fullPath;
    if (
      typeof p === "string" &&
      p.length > 0 &&
      !p.includes("$") &&
      !p.startsWith("/api/") &&
      !EXCLUDED_PATHS.has(p)
    ) {
      // Normalize trailing slash on non-root paths
      const norm = p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
      found.add(norm);
    }
    const children = n.children;
    if (children) {
      const list = Array.isArray(children) ? children : Object.values(children);
      for (const c of list) visit(c);
    }
  };
  visit(routeTree);
  return Array.from(found).sort((a, b) => (a === "/" ? -1 : b === "/" ? 1 : a.localeCompare(b)));
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = discoverPaths();
        const urls = paths.map((path) => {
          const meta = META_OVERRIDES[path] ?? DEFAULT_META;
          return (
          [
            `  <url>`,
            `    <loc>${BASE_URL}${path}</loc>`,
            `    <changefreq>${meta.changefreq}</changefreq>`,
            `    <priority>${meta.priority}</priority>`,
            `  </url>`,
          ].join("\n")
          );
        });
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