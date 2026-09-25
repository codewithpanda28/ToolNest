# ToolNest — Components

> shadcn/ui base components will be listed here as they are added.

## shadcn/ui Installed
- button
- card
- input
- table
- badge
- avatar
- separator
- sheet
- (style: base-nova, baseColor: neutral, cssVariables: true, iconLibrary: lucide)

## Custom Layout Components
- `components/layout/Header.tsx` (server) — sticky top (h-16), white bg, border-b. Logo (Package icon, indigo-600) + "ToolNest". Desktop nav (via NavLinks), Login (ghost) + Submit (indigo) buttons, MobileMenu on <md. Props: none.
- `components/layout/NavLinks.tsx` (client) — renders NAV_LINKS with active state via `usePathname` (exact match for `/`, startsWith otherwise). Active: indigo-600, hover: gray-900. Props: `className`.
- `components/layout/MobileMenu.tsx` (client) — shadcn Sheet (side="right", w-72), hamburger trigger (md:hidden). SheetClose-wrapped nav links + Login/Submit buttons stacked. Props: none.
- `components/layout/Footer.tsx` (server) — bg-slate-900, text-slate-300, py-12. Grid 1/2/4 cols: brand+tagline+social icons (inline SVG — lucide v1 has no brand icons), Quick Links, Company, Legal. Bottom bar: © 2025 + "Made in India 🇮🇳". Props: none.

## Constants
- `lib/constants.ts` — SITE_NAME, SITE_TAGLINE, NAV_LINKS, FOOTER_LINKS (single source of truth for Header/Footer/nav).

## Planned
- LeaderboardCard (Phase 2/3)
- BusinessCard (Phase 2)
- ToolCard (Phase 2)
- SubmitForm (Phase 3)