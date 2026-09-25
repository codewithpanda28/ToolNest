# ToolNest — Pages List

| Page | Route | Status | Phase |
|---|---|---|---|
| Home | `/` | ✅ Done | 1 |
| Businesses | `/businesses` | ✅ Done | 2 |
| Tools | `/tools` | ✅ Done | 2 |
| Business detail | `/business/[slug]` | ✅ Done | 3 |
| Tool detail | `/tool/[slug]` | ✅ Done | 3 |
| Submit | `/submit` | ✅ Done | 3 |
| About | `/about` | ✅ Done | 7 |
| Contact | `/contact` | ✅ Done | 7 |
| Privacy Policy | `/privacy` | ✅ Done | 7 |
| Terms | `/terms` | ✅ Done | 7 |
| Refund Policy | `/refund` | ✅ Done | 7 |
| FAQ | `/faq` | ✅ Done | 7 |
| Disclaimer | `/disclaimer` | ✅ Done | 7 |
| Login | `/login` | Pending | 5 |
| Signup | `/signup` | Pending | 5 |
| Blog | `/blog` | ✅ Done | 8 |
| Blog post | `/blog/[slug]` | ✅ Done | 8 |

## Planned Features Per Page
- Home: Hero + leaderboard preview (top businesses + top tools) ✅
- Businesses (`/businesses`): compact hero + search UI → DriftWall showcase (dark) → top-10 leaderboard → category-filtered directory grid → CTA. Categories: All, SaaS, Design, Dev Agency, Data, Hosting, Logistics, E-commerce, Fintech, Marketing.
- Tools (`/tools`): compact hero + search UI → DomeGallery showcase (dark, 3D rotating dome) → top-10 leaderboard → category + pricing filtered grid → CTA.
- Business detail (`/business/[slug]`): breadcrumb, header (logo, name, rank, Visit/Share), stats (rank/bid/category/listed), About + Why, similar businesses grid, claim CTA. SSG via generateStaticParams. 404 for unknown slug.
- Tool detail (`/tool/[slug]`): same + pricing badge (free=green/freemium=blue/paid=orange) + screenshots placeholders.
- Submit (`/submit`): compact hero + form (type tabs, name/slug auto-generate, category, description w/ counter, website, contact, pricing for tools, plan cards, bid amount, terms checkbox). react-hook-form + zod. Mock API POST /api/submit → success state w/ reference ID.
- Legal/content pages (AdSense-ready): About, Contact (+ form + mock API), Privacy (AdSense/DART cookie/opt-out URLs/GDPR+DPDP), Terms, Refund, FAQ (accordion, 12 Q&As), Disclaimer. All 500+ words, `LegalLayout` wrapper. Placeholder contact: support@toolnest.in, Mumbai.
- Blog (`/blog`): featured posts + category filter pills + all articles grid. Blog detail (`/blog/[slug]`): breadcrumb, hero, rendered content (## headings + lists), tags, author bio, related posts. 5 posts live (need 10+ more for AdSense). Sitemap (`/sitemap.xml`) + robots.txt live (placeholder domain toolnest.in).