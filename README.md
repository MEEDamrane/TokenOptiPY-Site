# TokenOptiPy website

Static-exportable website for [TokenOptiPy](https://github.com/MEEDamrane/TokenOptiPy), synchronized with confirmed core version 0.5.0 behavior.

## Stack

- Next.js 16 App Router
- React 19
- strict TypeScript
- Tailwind CSS 4
- local SVG icon components
- Node's built-in test runner
- no backend, database, API key, paid service, analytics, or required external request

## Pages

- `/` — product landing page and interactive demonstration TokenGraph
- `/docs` — documentation overview
- `/docs/quickstart` — installation and first graph
- `/docs/cli` — CLI reference
- `/docs/mcp` — MCP server, tools, workflow, and client boundaries
- `/docs/vscode` — VS Code extension
- `/docs/token-graph` — nodes, relations, findings, estimates, and queries
- `/privacy` — privacy and security model
- `/roadmap` — available capabilities and cautious exploration areas
- `/changelog` — current 0.5.0 capability summary
- custom 404 page

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run lint
npm run typecheck
npm run test
npm run check:links
npm run build
```

The production build uses `output: "export"` and writes static files to `out/`.

## Central configuration

Edit `src/config/site.ts` to update:

- name and version;
- description;
- GitHub URL;
- Visual Studio Marketplace URL;
- extension identifier and publisher;
- documentation links;
- install and CLI commands.

Run `npm run sync:version` to read `../TokenOptiPy/pyproject.toml` and update the centralized website version. Pass another core path after `--` when the repositories are not siblings.

## Logo and social assets

The site expects the main transparent logo at:

```text
public/tokenoptipy-icon.png
```

A neutral TokenOptiPy graph placeholder is included at 256 × 256. Replace it with the official transparent PNG without changing the filename. Also review or replace:

- `public/favicon.ico`
- `public/favicon.png`
- `public/apple-touch-icon.png`
- `public/og-image.png`

## Values to complete before production

1. Set the real public URL in `NEXT_PUBLIC_SITE_URL` or change the fallback in `src/config/site.ts`.
2. Confirm the Marketplace listing is public at the configured URL.
3. Replace the placeholder logo and regenerate the derivative icons/OG image when the final brand asset is available.
4. Replace the changelog TODO with tag-by-tag release notes when the repository publishes formal release history.

Copy `.env.example` to `.env.local` for local overrides. All variables are public deployment configuration; no secret is required.

## Vercel

1. Import the project into Vercel.
2. Keep the framework preset as Next.js.
3. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS URL.
4. Leave `NEXT_PUBLIC_BASE_PATH` empty.
5. Build command: `npm run build`.
6. Vercel can serve the exported `out/` directory produced by the build.

No serverless function or database is needed.

## Netlify

`netlify.toml` is included:

- build command: `npm run build`
- publish directory: `out`
- Node version: 22

Set `NEXT_PUBLIC_SITE_URL` in the Netlify environment and leave the base path empty.

## GitHub Pages static deployment

For a project site hosted at `https://OWNER.github.io/REPOSITORY/`:

```bash
NEXT_PUBLIC_SITE_URL=https://OWNER.github.io/REPOSITORY \\
NEXT_PUBLIC_BASE_PATH=/REPOSITORY \\
npm run build
```

Publish the generated `out/` directory using your preferred Pages workflow. For a user/organization site at the domain root, leave `NEXT_PUBLIC_BASE_PATH` empty.

This repository does not include an automatic publishing workflow, so generating or opening it does not deploy anything.

## Internationalization preparation

Public copy is isolated in page components and centralized configuration. A future French version can be added through a locale route group such as `app/[locale]/...` without changing the product data model.

## Accessibility and performance

- keyboard-accessible navigation and graph nodes;
- visible focus styles and skip link;
- semantic landmarks and headings;
- reduced-motion support;
- high-contrast light and dark themes;
- no video, remote font, or large visualization library;
- client JavaScript limited to theme, copy buttons, documentation search, and the interactive graph.
