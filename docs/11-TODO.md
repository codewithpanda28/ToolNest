# ToolNest — TODO

> Mark items as completed when done.

## Current: Phase 1 — Setup & Layout
- [x] Step 1: Project setup + docs
- [x] Step 2: Header + Footer
- [x] Step 3: Homepage (Hero + Leaderboard preview)
- [x] Step 3.5: UI Polish (React Bits: CursorGrid, ScrollFloat, PixelSwap)

## Phase 2 — Directories (mock data)
- [x] Step 4: /businesses page (DriftWall showcase + leaderboard + directory)
  - [ ] Wire real search on /businesses (DB step)
  - [ ] Add pagination when >50 businesses
- [x] Step 5: /tools page + detail pages (DomeGallery showcase + leaderboard + directory)
  - [ ] Use DomeGallery for tools showcase ✅
  - [ ] Add tool screenshots (real images) when DB ready
  - [ ] Add reviews section on detail pages

## Future (React Bits)
- [ ] ProfileCard for testimonials
- [ ] ImageTrail for gallery page

## Phase 3 — Detail + Submit
- [x] Step 6: Submit form
  - [x] Wire real database (Step 9 — Submission model)
  - [ ] Email notification on submission
  - [ ] Admin approval flow

## Phase 4 — Database
- [x] Step 9: Database setup (Railway Postgres + Prisma v6)
  - [ ] Backup strategy for DB (e.g. Railway scheduled backups)

## Phase 5 — Auth
- [x] Step 10: Auth (NextAuth v5 — login/signup/dashboard/middleware)
  - [ ] Add OAuth (Google login) for future
  - [ ] Require auth on /submit (later)
  - [ ] Password reset flow

## Phase 6 — Admin (Payments deferred)
- [x] Step 11: Admin panel (submissions + contacts)
  - [ ] Admin: edit/delete listings
  - [ ] Email notifications on approve/reject
  - [ ] Admin: Businesses/Tools management pages (sidebar placeholders exist)

## Phase 7 — Legal
- [x] Step 7: Legal pages (Privacy, Terms, Refund, About, Contact, FAQ, Disclaimer) — AdSense ready
  - [ ] Get real contact email + address before AdSense apply
  - [ ] Add blog posts (Step 8)
  - [ ] Add sitemap.xml + robots.txt

## Phase 8 — Blog + SEO
- [x] Step 8: Blog system + 5 SEO articles (invoice, automation, listing, SEO tools, GST)
- [x] Step 12: Blog expanded to 15 articles (AdSense threshold met)
- [x] Step 13: SEO polish (JSON-LD, OG images, manifest, canonical, a11y)
- [x] Step 14: AdSense prep + deploy config
  - [ ] Deploy to Vercel (Step 15)
  - [ ] Buy domain (toolnest.in or similar)
  - [ ] Setup Google Search Console (drop verification file / set env)
  - [ ] Apply to AdSense (then set NEXT_PUBLIC_ADSENSE_CLIENT + ads.txt pub id)
  - [ ] Replace placeholder icons with real logo
  - [ ] Add blog search functionality
  - [ ] Add author pages (future)

## Phase 9 — AdSense
- [ ] Step 13: AdSense apply