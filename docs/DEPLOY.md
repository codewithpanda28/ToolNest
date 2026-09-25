# ToolNest — Deploy Guide

## 1. Deploy to Vercel

1. Push the repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → Add New Project → Import the repo.
3. Vercel detects `vercel.json`:
   - Framework: Next.js
   - Build command: `prisma generate && next build`
   - Region: `bom1` (Mumbai — near your audience)
4. Set environment variables (Settings → Environment Variables):

   ```
   DATABASE_URL                # Railway PUBLIC url
   NEXT_PUBLIC_SITE_URL        # https://your-domain.in
   AUTH_SECRET                 # openssl rand -base64 32
   NEXTAUTH_URL                # https://your-domain.in
   NEXT_PUBLIC_ADSENSE_CLIENT  # leave empty until AdSense approved
   NEXT_PUBLIC_GOOGLE_VERIFICATION
   ```

5. Deploy. On first build, Vercel runs `postinstall` → `prisma generate`, then `prisma generate && next build`.

> **Build-time DB note:** Pages use ISR (`revalidate = 60`) and `generateStaticParams`, so the build queries the DB. If the Railway proxy is slow, build may hit `P1001` — the URL already includes `?connect_timeout=15`. Retry the build; it is transient.

## 2. Railway Postgres — Internal vs Public URL

- **Internal** (`postgres.railway.internal:5432`) — only reachable inside Railway. Vercel **cannot** use it.
- **Public** (`<proxy>.proxy.rlwy.net:PORT`) — reachable from anywhere via Railway's TCP proxy.
- Enable: Railway → Postgres service → **Networking** → **Add Public Access**, then copy `DATABASE_PUBLIC_URL`.
- Use the public URL in Vercel env. Add `?connect_timeout=15`.

## 3. Domain

1. Buy a domain (`toolnest.in` etc.) at Namecheap / GoDaddy / Cloudflare.
2. In Vercel → Project → Settings → Domains → add the domain.
3. Point DNS: Vercel gives a `CNAME` (www) + `A` record. Follow the exact values shown.
4. Update `NEXT_PUBLIC_SITE_URL` + `NEXTAUTH_URL` to the real domain. Re-deploy.
5. `sitemap.ts` and `robots.ts` read `NEXT_PUBLIC_SITE_URL` automatically.

## 4. Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console) → add property (Domain or URL prefix).
2. Choose verification method:
   - **HTML file:** download the `google-site-verification.html`, drop it into `public/`, deploy, and verify. (A placeholder file already exists in `public/`.)
   - **Meta tag:** set `NEXT_PUBLIC_GOOGLE_VERIFICATION` and verify.
3. After verified: submit sitemap at `https://your-domain.in/sitemap.xml`.

## 5. AdSense Application

Prerequisites (all present in this repo):
- 15+ original articles (15 live), each 1000+ words
- Privacy Policy with AdSense/DART cookie/opt-out text
- Terms, Refund, About, Contact, Disclaimer, FAQ
- ads.txt, sitemap, robots.txt, security headers, OG images

Apply steps:
1. Go to [adsense.google.com](https://adsense.google.com) → apply with the live domain.
2. After approval, set `NEXT_PUBLIC_ADSENSE_CLIENT="ca-pub-XXXXXXXX"` in Vercel.
3. Update `public/ads.txt` publisher ID.
4. Re-deploy — ad slots activate (home, businesses, tools, blog, article).

## 6. Common Errors

| Error | Fix |
|---|---|
| Build `P1001` DB unreachable | Railway proxy transient — retry; ensure `?connect_timeout=15` |
| `PrismaClientInitializationError` | Check `DATABASE_URL` in Vercel env (public URL, not internal) |
| OG image `failed to pipe response` | Satori: multi-child divs need `display:flex`; avoid adjacent text children |
| AdSense script not loading | `NEXT_PUBLIC_ADSENSE_CLIENT` not set in Vercel env |
| Login fails in prod | `NEXTAUTH_URL` / `AUTH_SECRET` must match production domain |
| Middleware redirect loop | Ensure `AUTH_SECRET` is set consistently |