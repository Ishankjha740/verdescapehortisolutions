# Contributing

Thanks for your interest in improving this project! This document explains how to propose changes.

## Ground rules

- Be respectful — see the [Code of Conduct](./CODE_OF_CONDUCT.md).
- Do not open a public issue for security vulnerabilities. Follow [SECURITY.md](./SECURITY.md) instead.
- Keep pull requests focused. Prefer several small PRs over one large one.

## Development setup

1. Install [Bun](https://bun.sh) 1.1+.
2. Fork and clone the repo.
3. Install dependencies:
   ```bash
   bun install
   ```
4. Start the dev server:
   ```bash
   bun run dev
   ```
   The app runs on <http://localhost:8080>.

## Making changes

- Create a feature branch: `git checkout -b feat/short-description`.
- Follow the existing code style — TypeScript strict, Tailwind semantic tokens (no hardcoded colors), shadcn/ui components.
- Add or update route metadata (`head()`) when adding pages.
- Run checks before pushing:
  ```bash
  bun run lint
  bun run format
  bun run build
  ```

## Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

- `feat: add contact form validation`
- `fix: prevent footer newsletter double submit`
- `chore(deps): bump vite to 7.1.0`
- `docs: update README setup steps`

## Pull requests

1. Ensure `bun run build` passes locally.
2. Push your branch and open a PR against `main`.
3. Fill in the PR template: describe the change, link related issues, and include screenshots for UI changes.
4. A maintainer will review. Address feedback via additional commits (do not force-push during review).

## Reporting bugs & requesting features

Use the issue templates under **New issue** on GitHub.