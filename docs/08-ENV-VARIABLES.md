# ToolNest — Env Variables

> `.env` (Prisma reads this) + `.env.local` (Next.js reads this) — both gitignored. `.env.example` committed as template.

## Active
```
DATABASE_URL="postgresql://postgres:...@iriguchi.proxy.rlwy.net:29907/railway?connect_timeout=15"  # Railway Postgres public URL
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
AUTH_SECRET="..."                # generated (openssl rand -base64 32)
NEXTAUTH_URL="http://localhost:3000"
NEXT_PUBLIC_ADSENSE_CLIENT=""    # empty = ads disabled (placeholders shown)
NEXT_PUBLIC_GOOGLE_VERIFICATION=""  # Google Search Console
```

## Planned / Production
```
RAZORPAY_KEY_ID=...                # Payments (future)
RAZORPAY_KEY_SECRET=...
```

## Notes
- Prisma CLI reads `.env` (NOT `.env.local`). `prisma.config.ts` loads `dotenv/config` + reads `DATABASE_URL`.
- Next.js reads `.env.local` (overrides `.env`).
- `connect_timeout=15` added to DATABASE_URL — Railway proxy slow connect (P1001 during parallel build).
- `.env.production.example` has the full production list for Vercel.
- `.env.example` has placeholder values for new setups.