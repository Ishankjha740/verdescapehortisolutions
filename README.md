# Verdescape

Marketing site for Verdescape, a sustainability consultancy. Built with TanStack Start, React 19, Tailwind CSS v4, and shadcn/ui, and deployed on Lovable Cloud.

## Tech stack

- [TanStack Start](https://tanstack.com/start) v1 (SSR + file-based routing)
- React 19 + TypeScript (strict)
- Vite 7
- Tailwind CSS v4 + shadcn/ui + Radix primitives
- Lovable Cloud (Supabase-backed) for backend, auth, and storage

## Getting started

Requires [Bun](https://bun.sh) 1.1+.

```bash
bun install
bun run dev        # start dev server on http://localhost:8080
bun run build      # production build
bun run lint       # eslint
bun run format     # prettier --write .
```

## Project layout

```
src/
  routes/          # file-based routes (see src/routes/README.md)
  components/      # UI + site components (shadcn/ui under components/ui)
  lib/             # shared utilities and *.functions.ts server functions
  styles.css       # Tailwind v4 entry
public/            # static assets (robots.txt, llms.txt, favicons)
.github/           # Dependabot, workflows, community health files
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). By participating you agree to the [Code of Conduct](./CODE_OF_CONDUCT.md). Security issues: see [SECURITY.md](./SECURITY.md).

## License

Proprietary — all rights reserved unless a `LICENSE` file states otherwise.