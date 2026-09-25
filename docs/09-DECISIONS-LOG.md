# ToolNest — Decisions Log

> Why we did what we did.

| Date | Decision | Reason |
|---|---|---|
| 2025-09-25 | Documentation-first approach | Keep track across multiple days, never forget context |
| 2025-09-25 | Next.js + TypeScript + Tailwind + App Router | Modern stack, SEO friendly, shadcn/ui compatible |
| 2025-09-25 | shadcn/ui (Slate color) | Fast consistent UI, easy customization |
| 2025-09-25 | Railway + Postgres | Cheap reliable hosting for database |
| 2025-09-25 | Razorpay | Indian payment gateway |
| 2025-09-25 | Leaderboard: weekly reset | Fresh competition, recurring engagement |
| 2025-09-25 | Paid leaderboard: pay more than #1 to rank up | Monetization model |
| 2025-09-25 | AdSense-ready from day 1 (legal + blog + SEO) | 2-month approval target after launch |
| 2025-09-25 | Header/Footer use constants from lib/constants.ts | Single source of truth for nav/footer links |
| 2025-09-25 | MobileMenu + NavLinks are separate client components | Keeps Header a server component, only interactive parts hydrate |
| 2025-09-25 | Used Next.js 16 App Router conventions | Link from next/link, LayoutProps<"/"> typed layout, global typegen helpers |
| 2025-09-25 | lucide-react v1 removed brand icons (Twitter/LinkedIn/Instagram/GitHub) | Used inline SVG brand paths in Footer instead |
| 2025-09-25 | Font: Geist → Roboto | More readable/Indian-market friendly, common default |
| 2025-09-25 | Mock data for Step 3 | Real DB later (Step 8-9) |
| 2025-09-25 | LeaderboardTable = server component; mobile cards via CSS | No JS needed — responsive via hidden/md:block |
| 2025-09-25 | Emoji as logos for now | Fast mock; real images later |
| 2025-09-25 | Homepage title uses `absolute` metadata | Avoids layout template appending "| ToolNest" |
| 2025-09-25 | Added React Bits components (CursorGrid, ScrollFloat, PixelSwap) for premium UI | Vendored into components/reactbits/, logic unchanged |
| 2025-09-25 | gsap installed for animation components | Required by ScrollFloat (ScrollTrigger) |
| 2025-09-25 | CursorGrid as hero background | Interactive cursor effect, indigo grid |
| 2025-09-25 | ScrollFloat for hero heading | Scroll-triggered letter animation, sr-only h1 kept for SEO |
| 2025-09-25 | PixelSwap for CTA | Click-to-reveal interaction (trigger="click") |
| 2025-09-25 | Other React Bits components (DriftWall, DomeGallery, ImageTrail, ProfileCard) reserved for future steps | Step 4+ |
| 2025-09-25 | Used DriftWall for /businesses hero showcase | 3D tile wall, picsum seed images per slug |
| 2025-09-25 | Business directory uses client-side filtering (mock data volume small) | No server round-trip needed yet |
| 2025-09-25 | Will wire real search when DB is added | Search input is UI-only for now |
| 2025-09-25 | @use-gesture/react installed | Needed for DomeGallery (next step) |
| 2025-09-25 | DomeGallery for /tools hero | 3D rotating sphere of tool images, drag to spin, click to enlarge |
| 2025-09-25 | Detail pages use generateStaticParams for SSG (mock data) | 10 business + 10 tool pages prerendered; 404 for unknown slugs |
| 2025-09-25 | LeaderboardTable now supports optional linkToDetail prop | Name links to detail pages only when enabled |
| 2025-09-25 | Pricing badge color-coded across all surfaces | free=green, freemium=blue, paid=orange |
| 2025-09-25 | react-hook-form + zod for form | Type-safe, industry standard validation |
| 2025-09-25 | Mock API route so we can wire DB later without touching the form | POST /api/submit returns UUID; Step 8 replaces internals |
| 2025-09-25 | Slug auto-generated from name but user-editable | Auto-fill on name blur if slug empty |
| 2025-09-25 | Two-step: submit → success state (no page redirect) | "Submit Another" resets form in place |
| 2025-09-25 | acceptTerms uses boolean().refine instead of z.literal(true) | literal(true) clashes with react-hook-form types; validation identical |
| 2025-09-25 | Legal content written manually (not template) for AdSense quality | Original 500-2000 word pages, not generic filler |
| 2025-09-25 | Privacy Policy explicitly mentions AdSense, DART cookie, opt-out URLs | Mandatory for Google AdSense approval (policies.google.com/technologies/ads + aboutads.info) |
| 2025-09-25 | Contact form uses same RHF + zod pattern | Reuse across Submit + Contact forms |
| 2025-09-25 | Disclaimer page added for ad-network compliance | Google requires disclaimers + contact info |
| 2025-09-25 | Placeholder contact support@toolnest.in + Mumbai address | To be replaced before AdSense apply (Step 13) |
| 2025-09-25 | Blog content in TS files (not MDX) for simplicity | No MDX build setup needed; content as data |
| 2025-09-25 | Markdown-lite renderer supports ## headings and - lists | No external lib, covers blog needs |
| 2025-09-25 | Sitemap + robots.txt for SEO | app/sitemap.ts + app/robots.ts (MetadataRoute) |
| 2025-09-25 | Placeholder domain toolnest.in in sitemap/metadata | Update to real domain before AdSense |
| 2025-09-25 | Prisma v6 pinned (Node 20 compat) | Latest is RC requiring Node 22+ |
| 2025-09-25 | ISR revalidate=60 on directory pages | Fresh leaderboard data without full rebuild |
| 2025-09-25 | DB access layer in lib/db/* — pages call functions, not Prisma directly | Clean separation, easy swapping |
| 2025-09-25 | Blog stays in TS (content/blog/) | Not in DB — static content is fine |
| 2025-09-25 | DATABASE_URL in .env (Prisma) + .env.local (Next) | Prisma CLI only reads .env; both gitignored |
| 2025-09-25 | Seed data moved inline into prisma/seed.ts | lib/mock-data.ts deleted (no imports remain) |
| 2025-09-25 | NextAuth v5 (beta.32) + Credentials provider + JWT sessions | Works with Next.js 16 (verified); OAuth later |
| 2025-09-25 | bcrypt for password hashing (10 rounds) | bcryptjs pure-JS, no native build issues |
| 2025-09-25 | Middleware protects /dashboard (authorized callback) | /login, /signup public; /submit stays public |
| 2025-09-25 | User model links to Submission + Payment (onDelete: SetNull) | Keeps history if user deleted |
| 2025-09-25 | connect_timeout=15 added to DATABASE_URL | Railway TCP proxy slow under parallel build connections (P1001) |
| 2025-09-25 | Admin panel for manual submission review | Payments deferred; review flow needed now |
| 2025-09-25 | Approving a submission creates a live Business/Tool record | Slug conflict → append -2, -3; free AND paid both create listings (amount drives rank) |
| 2025-09-25 | Role-based protection for /admin | Middleware checks auth (→/login); requireAdmin() checks role (→/dashboard) |
| 2025-09-25 | Server actions for approve/reject (no separate API route) | lib/db/submissions.ts marked "use server"; client imports directly |
| 2025-09-25 | tsx replaces ts-node for scripts | ts-node --compiler-options JSON quote-mangled under npm run; tsx handles ESM/TS cleanly |
| 2025-09-25 | Blog expanded to 15 posts, spread across 5 categories | Freelancing 3, Business 4, Tools 4, Automation 2, Finance 2 — AdSense threshold met |
| 2025-09-25 | Content stays in TS, no MDX | Existing renderer handles all posts automatically |
| 2025-09-25 | Structured data (JSON-LD) via helper functions | Vanilla, no schema-dts lib; org/web/breadcrumb/article/localbusiness/software/faq |
| 2025-09-25 | Dynamic OG images via next/og ImageResponse | Satori requires explicit display on multi-child divs + single-string children (fixed 000 errors) |
| 2025-09-25 | PWA manifest added | Helps future Capacitor wrapping |
| 2025-09-25 | Skip-to-content for a11y | sr-only link with focus styles |
| 2025-09-25 | Placeholder icons generated (solid indigo PNGs) | User replaces with real logo later |
| 2025-09-25 | AdSense script loaded but ads disabled in dev (env-driven) | NEXT_PUBLIC_ADSENSE_CLIENT empty → placeholders; set after approval |
| 2025-09-25 | Ad slots at safe positions — never inside 3D components | Max 2-3 per page, between sections |
| 2025-09-25 | Vercel for hosting (Next.js native), Railway for DB | vercel.json build = prisma generate && next build, region bom1 |
| 2025-09-25 | Security headers set at Next.js config level | nosniff, SAMEORIGIN, referrer-policy, permissions-policy |
| 2025-09-25 | ads.txt + google-site-verification.html placeholders in public/ | Fill after AdSense/GSC setup |