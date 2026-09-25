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