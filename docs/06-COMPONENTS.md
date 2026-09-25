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

## Types
- `types/index.ts` — `Business`, `Tool`, `LeaderboardItem`.

## Mock Data
- `lib/mock-data.ts` — mockBusinesses (10), mockTools (10), helpers getTopBusinesses/getTopTools (limit=5) + toBusinessLeaderboard/toToolLeaderboard. Real DB later (Step 8-9).

## Shared Components
- `components/shared/RankBadge.tsx` (server) — rank pill. 1=gold, 2=silver, 3=bronze, 4+=gray. Props: `{ rank }`.
- `components/shared/LeaderboardTable.tsx` (server) — desktop: shadcn Table (Rank|Name|Category|Amount|Action), mobile (<md): cards via CSS. Action: "Visit"/"Try Now" → item.website. Props: `{ items, type, compact? }`.
- `components/shared/SectionHeader.tsx` (server) — title/subtitle + "View all →" link. Props: `{ title, subtitle?, viewAllHref?, viewAllLabel? }`.

## Home Components
- `components/home/Hero.tsx` (server) — gradient bg, India badge, H1 with indigo highlight, subtext, Browse Businesses/Tools buttons.
- `components/home/StatsRow.tsx` (server) — 3 stats (500+, 1,200+, 50K+).
- `components/home/LeaderboardPreview.tsx` (server) — Top Businesses + Top Tools leaderboard sections, "Bid to rank up →" → /pricing.
- `components/home/CTASection.tsx` (server) — indigo bg, "List Your Business or Tool", Get Started → /submit, "Starting from ₹100/week".

## Font
- Roboto (300/400/500/700/900) via `next/font/google`, variable `--font-roboto`. `--font-sans` maps to it in globals.css @theme.

## React Bits (vendored — components/reactbits/)
- `components/reactbits/CursorGrid.tsx` + `.css` (client) — canvas cursor-reactive grid. Props: cellSize, color, radius, falloff, holdTime, fadeDuration, lineWidth, maxOpacity, fillOpacity, gridOpacity, cellRadius, clickPulse, pulseSpeed, className.
- `components/reactbits/ScrollFloat.tsx` + `.css` (client, gsap) — scroll-triggered char animation. Props: children (string), scrollContainerRef, containerClassName, textClassName, animationDuration, ease, scrollStart, scrollEnd, stagger.
- `components/reactbits/PixelSwap.tsx` + `.css` (client) — click/hover/manual pixel dissolve between two contents. Props: firstContent, secondContent, pixelSize, gap, pixelRadius, pixelSpin, pixelScale, fade, duration, pixelDuration, pattern, randomness, easing, trigger, initialActive, active, onActiveChange, onComplete, aspectRatio, className, style.
- NOTE: React Bits components vendored here for reuse. gsap installed.

## More React Bits
- `components/reactbits/DriftWall.tsx` + `.css` (client) — 3D perspective drifting tile wall. Props: items ({image,title,href}), columns, tileWidth, tileHeight, gap, radius, tilt, turn, roll, perspective, depth, speed, direction, variance, parallax, pauseOnHover, lift, fade, dim, grayscale, overlayColor, className, style.
- `components/reactbits/DomeGallery.tsx` + `.css` (client, @use-gesture/react) — 3D dome/sphere gallery, drag to spin, click to enlarge. Props: images, fit, fitBasis, minRadius, maxRadius, padFactor, overlayBlurColor, maxVerticalRotationDeg, dragSensitivity, enlargeTransitionMs, segments, dragDampening, openedImageWidth/Height, imageBorderRadius, openedImageBorderRadius, grayscale.
- NOTE: DomeGallery used on /tools showcase.

## Businesses
- `components/businesses/BusinessDirectory.tsx` (client) — category filter pills (All + unique categories) + responsive business cards grid (whole card links to /business/[slug]). Props: `{ businesses: Business[] }`.
- NOTE: DriftWall used as hero showcase on /businesses (picsum seed images per slug).

## Tools
- `components/tools/ToolsDirectory.tsx` (client) — category filter pills + pricing filter row (All/Free/Freemium/Paid) + card grid linking to /tool/[slug]. Pricing badges color-coded. Props: `{ tools: Tool[] }`.

## Shared updates
- `components/shared/LeaderboardTable.tsx` — new prop `linkToDetail?: boolean`: name cell links to /business/[slug] or /tool/[slug] when true. Default false (no behavior change).

## Submit
- `components/submit/SubmitForm.tsx` (client) — react-hook-form + zodResolver. Tabs (business/tool), name (auto-slug on blur), slug, category (native select, business vs tool categories), description w/ char counter, website, contact name/email, pricing radio (tools only), plan cards (Free/Starter/Growth/Pro w/ price), bid amount (when plan != free), terms checkbox. POST → /api/submit → success state.
- `components/submit/SuccessState.tsx` (server) — green check, "Submission Received!", reference ID, Submit Another + Go Home buttons.
- `lib/validations/submission.ts` — zod schema + BUSINESS_CATEGORIES, TOOL_CATEGORIES, PLANS.
- `app/api/submit/route.ts` — mock POST: validates, 300ms delay, returns UUID. Real DB in Step 8.
- NOTE: Form uses react-hook-form + zod. acceptTerms uses boolean().refine (literal(true) conflicted with RHF types — same validation).

## Legal & Contact
- `components/legal/LegalLayout.tsx` (server) — reusable hero (badge/title/subtitle/lastUpdated) + max-w-3xl content + bottom contact note. Used by all legal/content pages.
- `components/contact/ContactForm.tsx` (client) — RHF + zod contact form (name/email/subject/message), inline success state. POST /api/contact.
- `lib/validations/contact.ts` — zod contact schema.
- `app/api/contact/route.ts` — mock POST (validate → 300ms → success). Logs to console.
- `components/ui/accordion.tsx` — shadcn accordion (Base UI), used on /faq.

## Blog
- `components/blog/BlogCard.tsx` (server) — post card (emoji, category, title, excerpt, date + reading time), hover lift. Props: `{ post, featured? }`.
- `components/blog/BlogFilters.tsx` (client) — category filter pills (All + 5 categories). Props: `{ posts }`.
- `lib/renderContent.tsx` — markdown-lite renderer: `## ` → h2, `- ` blocks → ul, else p.
- `content/blog/` — 5 articles as TS files + `index.ts` (allPosts sorted, getPostBySlug, getPostsByCategory, getFeaturedPosts, getRecentPosts, getRelatedPosts).
- `app/sitemap.ts` + `app/robots.ts` — SEO infra (placeholder domain toolnest.in).

## SEO
- `components/seo/JsonLd.tsx` (server) — renders one `<script type="application/ld+json">` per data item.
- `lib/seo/structured-data.ts` — organizationSchema, websiteSchema, breadcrumbSchema, articleSchema (BlogPosting), faqSchema, localBusinessSchema, softwareApplicationSchema.
- OG images (next/og ImageResponse, 1200x630, indigo gradient, system font): `app/opengraph-image.tsx`, `app/twitter-image.tsx`, `app/blog/[slug]/opengraph-image.tsx`, `app/business/[slug]/opengraph-image.tsx`, `app/tool/[slug]/opengraph-image.tsx`.
- Icons: `app/icon.tsx` (32px "T"), `public/icon-192.png`, `public/icon-512.png`, `public/apple-icon.png` (generated placeholders — replace with real logo).
- `app/manifest.ts` — PWA manifest (name, theme #4f46e5, 192/512 icons).
- Applied on: layout (org + website + skip link), blog/business/tool detail (article/localBusiness/softwareApplication + breadcrumb), FAQ (FAQPage), canonical URLs on all public pages.

## Ads
- `components/ads/AdSenseScript.tsx` (client) — loads AdSense script only when NEXT_PUBLIC_ADSENSE_CLIENT set (afterInteractive).
- `components/ads/AdSlot.tsx` (client) — renders placeholder ("Ad slot · {slot}") when env empty; real `<ins class="adsbygoogle">` + adsbygoogle.push when set.
- `public/ads.txt` — placeholder publisher ID (replace after approval).
- Slots: home-top, businesses-top, tools-top, blog-list, article-top, article-bottom.

## Auth
- `components/auth/SessionProvider.tsx` (client) — wraps app layout with next-auth/react SessionProvider.
- `components/auth/LoginForm.tsx` (client) — RHF + zod, signIn('credentials', redirect:false), error banner, → /dashboard.
- `components/auth/SignupForm.tsx` (client) — POST /api/auth/signup, → /login?signup=success.
- `components/auth/UserMenu.tsx` (client) — useSession; unauthed → Login ghost button; authed → avatar dropdown (Dashboard, Submit, Sign out) via shadcn dropdown-menu (Base UI render prop).
- `components/auth/SignOutButton.tsx` (client) — signOut() → /.
- `lib/auth/auth.config.ts` — NextAuthConfig: JWT strategy, pages, authorized() protects /dashboard, jwt/session callbacks inject id + role.
- `lib/auth/auth.ts` — NextAuth instance + Credentials provider (bcrypt compare vs Prisma User).
- `lib/validations/auth.ts` — signupSchema (name/email/password letter+number/confirm), loginSchema.
- `types/next-auth.d.ts` — Session.user.id + role augmentation.

## Admin
- `components/admin/StatusBadge.tsx` (server) — color-coded status pill (pending/approved/rejected).
- `components/admin/SubmissionActions.tsx` (client) — Approve button + Reject dialog (reason textarea); calls server actions from lib/db/submissions.ts; router.refresh() on success.
- `app/admin/layout.tsx` — sidebar nav (Dashboard/Submissions/Contacts + future Businesses/Tools), requires requireAdmin().
- `lib/auth/requireAdmin.ts` — session → not authed → /login, role !== admin → /dashboard.
- `scripts/make-admin.ts` — `npm run make-admin -- email` sets role=admin.
- Uses shadcn dialog (Base UI render prop).

## Planned