# VCWS monorepo

Victoria Cultural & Wellness Society — org website today, Eco2Zero mobile next.

## Structure

```text
apps/
  web/       # Next.js org website (@vcws/web) → deploy on Vercel
  eco2zero-web/ # Next.js Eco2Zero zone → served at /eco2zero
  mobile/    # Expo Eco2Zero shell (@vcws/mobile)
packages/
  content/        # Shared bilingual copy — VCWS + Eco2Zero (English-first)
  design-tokens/  # Shared colors / type / space for web + React Native
```

`@vcws/content` and `@vcws/design-tokens` are the shared contract so the Eco2Zero app can stay aligned with web brand and copy from the product design doc (*Small Actions, Big Impact*, impact counters, how-it-works steps, etc.).

## Prerequisites

- Node 20+
- pnpm 9+

```bash
corepack enable
# or: npm install -g pnpm
```

## Develop

```bash
pnpm install

pnpm dev:web      # http://localhost:3000 — VCWS site
pnpm dev:eco2zero # http://localhost:3001/eco2zero — Eco2Zero website
pnpm dev:mobile   # Expo — Eco2Zero shell using shared tokens/content
```

## Deploy website (Vercel free)

Project name must be **lowercase** (use `vcws`, not `VCWS`).

Deploy from the **repo root** (not `apps/web`), so workspace packages are included:

```bash
cd ~/repos/vcws
npx vercel --prod
```

Live production URL after deploy: https://vcws-flame.vercel.app

### Eco2Zero multi-zone deployment

Eco2Zero is an independent Next.js zone with `basePath: /eco2zero` and a
unique `assetPrefix`. Create a second Vercel project from this repository with
`apps/eco2zero-web` as its root directory. Deploy it, then set `ECO2ZERO_ORIGIN`
on the primary VCWS project to that deployment origin (for example,
`https://eco2zero-vcws.vercel.app`) and redeploy the primary project. The main
site rewrites `/eco2zero`, its child routes, and Eco2Zero static assets to the
new project while keeping the public URL on the VCWS domain.

`vercel.json` runs `pnpm install`, builds `@vcws/web`, then exposes `.next` at the monorepo root for Vercel’s Next.js builder.

## Eco2Zero design alignment

Mobile shell already consumes:

- `@vcws/content/eco2zero` — hero, mission, 3-step flow, impact metrics, nav
- `@vcws/design-tokens` — sea/eco palette for native `StyleSheet`

Next increments can add: impact tracker screens, action logging, rewards/badges, and a dedicated `apps/eco2zero-web` marketing site if needed.
