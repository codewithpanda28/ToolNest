# ToolNest

A directory website for discovering and ranking businesses and tools in India. Weekly leaderboards, free listings, community rankings, blog, and admin review workflow.

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript, Tailwind v4)
- **Database:** Railway Postgres + Prisma 6
- **Auth:** NextAuth v5 (credentials + JWT)
- **UI:** shadcn/ui (Base UI), lucide-react, React Bits animations (CursorGrid, ScrollFloat, PixelSwap, DriftWall, DomeGallery)
- **Forms:** react-hook-form + zod

## Local Setup

```bash
# 1. Install deps
npm install

# 2. Create .env files
cp .env.example .env.local
# .env.local → DATABASE_URL, NEXT_PUBLIC_SITE_URL
# .env → same DATABASE_URL (Prisma CLI reads .env)
# Optional: AUTH_SECRET, NEXTAUTH_URL (auth)

# 3. Migrate + seed
npx prisma migrate deploy
npm run db:seed        # 10 businesses + 10 tools

# 4. Run
npm run dev            # http://localhost:3000
```

## Env Variables

| Variable | Description |
|---|---|
| `DATABASE_URL` | Postgres connection string (Railway public URL). Prisma CLI reads `.env`. |
| `NEXT_PUBLIC_SITE_URL` | Public site URL (`http://localhost:3000` locally, `https://toolnest.in` prod) |
| `AUTH_SECRET` | Generate: `openssl rand -base64 32` |
| `NEXTAUTH_URL` | Site URL for NextAuth |
| `NEXT_PUBLIC_ADSENSE_CLIENT` | AdSense `ca-pub-XXX`. **Leave empty** until AdSense approved (ads show as placeholders). |
| `NEXT_PUBLIC_GOOGLE_VERIFICATION` | Google Search Console verification token |

## Scripts

```bash
npm run dev            # dev server
npm run build          # prisma generate + next build
npm run start          # production server
npm run db:migrate:deploy  # apply migrations
npm run db:seed        # seed DB
npm run db:studio      # Prisma Studio UI
npm run make-admin -- user@example.com  # grant admin role
```

## Deploy (Vercel)

1. Push repo to GitHub.
2. Import to Vercel. `vercel.json` handles build command (`prisma generate && next build`).
3. Add env vars in Vercel → Settings → Environment Variables (see `.env.production.example`).
4. Set `DATABASE_URL` to the Railway **public** URL (`?connect_timeout=15`).
5. Deploy. See `docs/DEPLOY.md` for full steps + common errors.

## AdSense (after approval)

1. Set `NEXT_PUBLIC_ADSENSE_CLIENT="ca-pub-XXXXXXXX"` in Vercel.
2. Update `public/ads.txt` with your publisher ID (replace `pub-XXXXXXXXXXXXXXXX`).
3. Ad slots (home, businesses, tools, blog, article) activate automatically.
4. Ads are **disabled by default** — they render as placeholder boxes until the env var is set.

## Docs

See `docs/` folder: `00-MASTER.md` (status dashboard), `05-PAGES-LIST.md`, `09-DECISIONS-LOG.md`, `10-CHANGELOG.md`, `11-TODO.md`, `DEPLOY.md`.