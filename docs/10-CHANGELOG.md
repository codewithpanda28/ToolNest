# ToolNest — Changelog

> Log every change. Newest at top.

## 2025-09-25 — Step 1: Project setup + docs (COMPLETED)
- Created `docs/` folder with all master docs (00-12)
- Set up project rules (TypeScript, shadcn/ui, mobile responsive, docs-first)
- Created Phase plan (9 phases, 15 steps)
- Ran `create-next-app` — Next.js 16.3.6, TypeScript, Tailwind v4, App Router, Turbopack, ESLint
- Ran `shadcn init` — style base-nova, neutral base color, CSS variables yes
- Added shadcn/ui components: button, card, input, table, badge, avatar, separator, sheet
- Installed `lucide-react`
- Verified: `npm run build` passes (no TS errors), dev server serves HTTP 200
- NOTE: Next.js 16 has breaking changes vs older versions — read `node_modules/next/dist/docs/` before writing code (AGENTS.md)