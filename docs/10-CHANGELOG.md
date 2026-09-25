# ToolNest — Changelog

> Log every change. Newest at top.

## 2025-09-25 — Step 14: AdSense prep + deploy config
- `public/ads.txt` (placeholder pub id) + `public/google-site-verification.html` (placeholder)
- `components/ads/AdSenseScript.tsx` (env-gated) + `components/ads/AdSlot.tsx` (placeholder when env empty, real ins when set)
- Ad slots added: home-top, businesses-top, tools-top, blog-list, article-top + article-bottom
- `vercel.json` (bom1, build = prisma generate && next build) + `.env.production.example`
- package.json scripts: postinstall, build (prisma generate), db:migrate:deploy, db:seed, db:studio
- `next.config.ts`: security headers (nosniff/SAMEORIGIN/referrer/permissions-policy), remotePatterns, poweredByHeader false
- sitemap.ts + robots.ts use NEXT_PUBLIC_SITE_URL; README.md rewritten; docs/DEPLOY.md added
- Verified: tsc clean, build pass, /ads.txt 200 text/plain, ad placeholders render on all routes (dev, no env), AdSense script NOT loaded (correct), security headers present, no console errors

## 2025-09-25 — Step 13: SEO polish
- `lib/seo/structured-data.ts` + `components/seo/JsonLd.tsx`
- JSON-LD applied: layout (Organization + WebSite), blog detail (BlogPosting + Breadcrumb), business detail (LocalBusiness + Breadcrumb), tool detail (SoftwareApplication + Breadcrumb), FAQ (FAQPage)
- OG images via next/og ImageResponse: base opengraph + twitter, dynamic blog/business/tool opengraph-image
- `app/icon.tsx`, `app/manifest.ts` (PWA), generated public/icon-192.png, icon-512.png, apple-icon.png
- Metadata: keywords, robots/googleBot, alternates.canonical on all public pages, icons, manifest, verification placeholder
- a11y: skip-to-content link + #main-content
- Fixed: Satori OG errors (multi-child divs need explicit display; adjacent text children → single string). Verified all OG routes 200 image/png
- Verified: tsc clean, build pass (65 pages), JSON-LD present on all key routes, manifest valid, canonical present

## 2025-09-25 — Step 12: Added 10 blog articles (15 total)
- New posts: CRM tools, freelancing start guide (featured), PM tools, WhatsApp automation (featured), payment gateway comparison, SaaS selection, freelance rates, email marketing, AI tools for creators (featured), digital marketing guide
- `content/blog/index.ts` imports all 15 posts; featured now 5
- Verified: tsc clean, build pass (61 pages), /blog shows 15 posts, all categories have 2+ posts, article word counts 2400-2900 visible text, sitemap has 15 blog URLs, new detail pages 200, no console errors

## 2025-09-25 — Step 11: Admin panel + submissions/contacts management
- `scripts/make-admin.ts` + `npm run make-admin` (switched scripts to tsx — ts-node compiler-options JSON broke under npm run)
- `lib/auth/requireAdmin.ts`; middleware authorized() now protects /admin too
- `lib/db/submissions.ts` marked "use server": added getAllSubmissions, getSubmissionById, approveSubmission (creates live listing, slug dedup), rejectSubmission (notes=reason)
- `lib/db/contact.ts`: getAllContactMessages, getContactMessageById
- Admin pages: layout (sidebar), dashboard (stats + recent), submissions list (status/type filter pills), submission detail (Approve/Reject via server actions + shadcn dialog), contacts list + detail
- `components/admin/StatusBadge.tsx` + `SubmissionActions.tsx`; UserMenu shows Admin link for admins
- Verified: tsc clean, build pass, admin /admin 200 / unauth 307→login / non-admin 307→dashboard, approve flow created live Business "Approval Test Co" visible on /businesses, no console errors

## 2025-09-25 — Step 10: Auth (NextAuth v5 + Prisma)
- Prisma: added User model + userId relations on Submission/Payment; migration `add_user_auth` applied
- Installed next-auth@5.0.0-beta.32, @auth/prisma-adapter, bcryptjs (3.x); added @types/bcryptjs
- `lib/auth/`: auth.config.ts (JWT, protected /dashboard, id+role in token/session), auth.ts (Credentials + bcrypt)
- `types/next-auth.d.ts`: session user id + role augmentation
- `app/api/auth/[...nextauth]/route.ts` (node runtime) + `app/api/auth/signup/route.ts` + `lib/validations/auth.ts`
- `middleware.ts` (NextAuth auth wrapper, matcher excludes api/static/assets)
- `components/auth/`: SessionProvider, LoginForm, SignupForm, UserMenu (shadcn dropdown-menu), SignOutButton
- `app/login`, `app/signup`, `app/dashboard` pages; Header now uses UserMenu; layout wrapped in SessionProvider
- `lib/db/users.ts` (getUserById) + submissions.getSubmissionsByUser
- Env: AUTH_SECRET (generated) + NEXTAUTH_URL added to .env/.env.local/.env.example
- Fixed build P1001 by adding `connect_timeout=15` to DATABASE_URL
- Verified: tsc clean, build pass, signup 200 / duplicate 409, login 302 + session cookie, /dashboard 200 authed + 307 unauth, wrong password → CredentialsSignin, bcrypt hash confirmed (not plaintext), header user menu renders, no console errors

## 2025-09-25 — Step 9: Prisma full setup + DB-backed pages
- Installed prisma@6.19.3 + @prisma/client@6.19.3 (pinned, Node 20 compat) + ts-node + dotenv
- `prisma init` created prisma.config.ts (dotenv); wrote real DATABASE_URL to `.env` (Prisma reads .env, not .env.local)
- `prisma/schema.prisma`: Business, Tool, Submission, ContactMessage, Payment models + indexes
- Migration `init` applied to Railway Postgres; `prisma generate` done
- `prisma/seed.ts`: 10 businesses + 10 tools (inline data); seeded successfully
- `lib/db/`: prisma singleton, businesses, tools, submissions, contact, leaderboard mappers
- Pages now async + ISR revalidate=60, fetch from DB (/, /businesses, /tools, detail pages, sitemap)
- API routes /api/submit + /api/contact write to DB (Submission + ContactMessage)
- Deleted `lib/mock-data.ts` (no imports remained); created `.env.example`
- Verified: tsc clean, build pass (ISR 1m), all routes 200, forms create DB rows (Submission + ContactMessage verified then cleaned), no console errors

## 2025-09-25 — Step 8: Blog system + 5 articles + SEO infrastructure
- `types/index.ts`: added BlogCategory, BlogPost
- `content/blog/`: 5 original articles (invoice tools, automation tools, listing guide, SEO tools, GST guide) 800-2000 words each + index.ts helpers
- `lib/renderContent.tsx`: markdown-lite renderer (## headings, - lists, paragraphs)
- `components/blog/BlogCard.tsx` + `BlogFilters.tsx`; `app/blog/page.tsx` (featured + filter grid) + `app/blog/[slug]/page.tsx` (SSG, OG article meta, related)
- `app/page.tsx`: "From the Blog" teaser section
- `app/sitemap.ts` (37 URLs) + `app/robots.ts`; layout.tsx metadataBase + OG + twitter defaults
- Verified: tsc clean, build pass (5 blog SSG), /blog + 2 detail routes 200, sitemap valid XML (37 <url>), robots valid, article visible-word counts 2791-3105, no console errors

## 2025-09-25 — Step 7: All legal + content pages (AdSense ready)
- Added shadcn accordion (Base UI)
- Created `components/legal/LegalLayout.tsx` (reusable wrapper)
- Created `lib/validations/contact.ts` + `app/api/contact/route.ts` (mock) + `components/contact/ContactForm.tsx`
- Rewrote /about (Our Mission, What We Do, Why, How It Works, Story, Contact)
- Rewrote /privacy — AdSense critical: Google AdSense, DART cookie, opt-out URLs (policies.google.com/technologies/ads, aboutads.info), GDPR + DPDP rights, Children's info
- Rewrote /terms (12 sections) + /refund (eligible/non-refundable/process/cancellations)
- Rewrote /faq (accordion, 12 Q&As in 3 groups) + created /disclaimer
- Updated footer legal links (+ Disclaimer, + FAQ)
- Verified: tsc clean, build pass, all 7 routes 200, contact API 200, DART keywords present, word counts 1100-2200 (targets exceeded)

## 2025-09-25 — Step 6: Submit form with validation + mock API + success state
- Installed react-hook-form, zod, @hookform/resolvers + shadcn select/textarea/label/radio-group/tabs/checkbox (Base UI). No shadcn `form` in base-nova registry → used RHF directly.
- `types/index.ts`: added SubmissionType, SubmissionPayload, SubmissionResponse
- `lib/utils.ts`: added slugify
- `lib/validations/submission.ts`: zod schema + category/plan constants
- `app/api/submit/route.ts`: mock POST (validate → 300ms → UUID), 400 w/ field errors
- `components/submit/SubmitForm.tsx` + `SuccessState.tsx`: full form + success state
- `app/submit/page.tsx`: hero + form + contact link
- Verified: tsc clean, build pass, /submit 200, API 200 (UUID) + 400 (field errors), all /submit CTA links present
- NOTE: acceptTerms uses boolean().refine (literal(true) breaks RHF typing — validation same)

## 2025-09-25 — Step 5: DomeGallery + /tools page + detail pages
- Vendored `components/reactbits/DomeGallery.tsx` + `.css` (JSX→TSX from React Bits repo, logic identical; fixed style.zIndex string typing)
- Created `components/tools/ToolsDirectory.tsx` (client, category + pricing filters, color-coded badges)
- Created `app/tools/page.tsx` — hero + DomeGallery showcase + tools leaderboard + directory + CTA
- Created `app/business/[slug]/page.tsx` + `app/tool/[slug]/page.tsx` — breadcrumb/header/stats/details/similar/CTA, generateStaticParams SSG, notFound() for bad slugs
- `lib/mock-data.ts`: added getBusinessBySlug, getToolBySlug, getBusinessRank, getToolRank
- `components/shared/LeaderboardTable.tsx`: added linkToDetail prop; BusinessDirectory cards now link to detail pages
- Verified: tsc clean, build pass (20 SSG routes), dev routes all 200 + 404 for invalid slugs, no console errors

## 2025-09-25 — Step 4: DriftWall + /businesses page
- Installed `@use-gesture/react`
- Vendored `components/reactbits/DriftWall.tsx` + `.css` (JSX→TSX, logic identical)
- Created `components/businesses/BusinessDirectory.tsx` (client, category filter pills + card grid)
- Created `app/businesses/page.tsx` — 5 sections: compact hero + search UI, DriftWall showcase (dark), top-10 leaderboard, directory grid, CTA
- Verified: tsc clean, build pass (route /businesses generated), dev HTTP 200, no console errors

## 2025-09-25 — Step 3.5: UI polish — CursorGrid + ScrollFloat + PixelSwap
- Installed `gsap`
- Vendored React Bits components into `components/reactbits/`:
  - CursorGrid (tsx + css) — canvas cursor-reactive grid, click pulse, converted to TSX
  - ScrollFloat (tsx + css) — gsap scroll-triggered char-by-char heading animation
  - PixelSwap (tsx + css) — click-to-reveal pixel dissolve (full source from React Bits repo, TSX)
- Hero: CursorGrid background (indigo grid, clickPulse) + ScrollFloat gradient heading (sr-only h1 kept for SEO)
- CTA: PixelSwap click reveal — "List Your Business or Tool / Click to Reveal →" → "Ready to Rank #1? / Get Started"
- page.tsx: leaderboard section spacing py-20 md:py-28
- Verified: tsc clean (fixed CursorGrid props via Required<>), build pass, dev HTTP 200, 0 hydration/console errors

## 2025-09-25 — Step 3: Homepage + Roboto font + mock data + shared components
- Font: Geist → Roboto (next/font/google, --font-roboto, font-sans mapping in globals.css @theme)
- Created `types/index.ts` (Business, Tool, LeaderboardItem)
- Created `lib/mock-data.ts` (10 businesses, 10 tools + leaderboard helpers)
- Created shared: RankBadge, LeaderboardTable (desktop table + mobile cards), SectionHeader
- Created home: Hero, StatsRow, LeaderboardPreview, CTASection
- Rewrote `app/page.tsx` (Hero → Stats → Leaderboards → CTA), absolute title metadata
- Verified: tsc clean, build pass, dev server HTTP 200, Roboto @font-face loaded (46 faces), no console errors
- NOTE: NO git commit this step (user request — "Git baad mein")

## 2025-09-25 — Step 2: Header + Footer + constants
- Created `lib/constants.ts` (SITE_NAME, SITE_TAGLINE, NAV_LINKS, FOOTER_LINKS)
- Created `components/layout/Header.tsx` (server, sticky, logo + nav + auth buttons)
- Created `components/layout/NavLinks.tsx` (client, active link state via usePathname)
- Created `components/layout/MobileMenu.tsx` (client, shadcn Sheet, hamburger)
- Created `components/layout/Footer.tsx` (dark, 4 columns, inline SVG social icons)
- Updated `app/layout.tsx` (Header + Footer, metadata title template, main flex-1)
- Verified: tsc --noEmit clean, `npm run build` pass, dev server HTTP 200, no console errors

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