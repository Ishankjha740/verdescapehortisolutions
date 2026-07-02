# Security Policy

## Supported versions

Only the latest `main` branch receives security updates.

| Version | Supported |
| ------- | --------- |
| `main`  | ✅        |
| Older   | ❌        |

## Reporting a vulnerability

**Please do not open a public GitHub issue for security vulnerabilities.**

Report privately using one of these channels:

- Preferred: [GitHub Private Vulnerability Reporting](https://github.com/) — open the repo's **Security** tab → **Report a vulnerability**.
- Email: **security@verdescape.example** (PGP available on request).

Please include:

- A description of the issue and its impact
- Steps to reproduce (proof-of-concept if possible)
- The affected version / commit SHA
- Your name and contact for follow-up (optional)

## What to expect

- **Acknowledgement** within 3 business days.
- **Initial assessment** within 7 business days.
- **Fix or mitigation timeline** shared once triaged. Critical issues are typically patched within 14 days.
- We will credit reporters in release notes unless you prefer to remain anonymous.

## Automated updates

Dependency vulnerabilities are tracked via Dependabot (`.github/dependabot.yml`) with auto-merge for security, patch, and minor updates (`.github/workflows/dependabot-auto-merge.yml`). Static analysis runs via CodeQL (`.github/workflows/codeql.yml`).

## Out of scope

- Reports generated purely by automated scanners without demonstrated impact
- Vulnerabilities in third-party dependencies already tracked upstream (please link to the upstream advisory)
- Social engineering of maintainers or users