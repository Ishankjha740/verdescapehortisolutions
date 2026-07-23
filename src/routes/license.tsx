import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/license")({
  head: () => ({
    meta: [
      { title: "License — VerdeScape Horti Solutions" },
      { name: "description", content: "VerdeScape Horti Solutions website source code is licensed under the MIT License." },
      { property: "og:title", content: "License — VerdeScape Horti Solutions" },
      { property: "og:description", content: "VerdeScape website source code is licensed under the MIT License." },
      { property: "og:url", content: "https://verdescapehortisolutions.lovable.app/license" },
    ],
    links: [{ rel: "canonical", href: "https://verdescapehortisolutions.lovable.app/license" }],
  }),
  component: LicensePage,
});

function LicensePage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Legal" title="License" subtitle="The VerdeScape website source code is made available under the MIT License." />
      <section className="py-20 md:py-28">
        <div className="container-x max-w-3xl space-y-8 text-[var(--forest-deep)]/90 leading-relaxed">
          <p className="text-sm text-[var(--muted-foreground)]">Last updated: 2026</p>

          <div className="p-8 rounded-2xl bg-[var(--cream)] border border-[var(--border)] shadow-sm">
            <h2 className="text-xl font-extrabold mb-4">MIT License</h2>
            <p className="mb-4">Copyright (c) 2026 VerdeScape Horti Solutions (OPC) Limited</p>
            <p className="mb-4">
              Permission is hereby granted, free of charge, to any person obtaining a copy
              of this software and associated documentation files (the "Software"), to deal
              in the Software without restriction, including without limitation the rights
              to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              copies of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:
            </p>
            <p className="mb-4">
              The above copyright notice and this permission notice shall be included in all
              copies or substantial portions of the Software.
            </p>
            <p>
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              SOFTWARE.
            </p>
          </div>

          <p>
            Questions? Reach us at{" "}
            <a className="text-[var(--leaf)] font-semibold" href="mailto:info@verdescapehortisolutions.com">
              info@verdescapehortisolutions.com
            </a>
            .
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
