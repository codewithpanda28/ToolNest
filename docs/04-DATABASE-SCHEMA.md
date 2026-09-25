# ToolNest — Database Schema

> Live database: Railway Postgres. ORM: Prisma v6.19.3 (pinned, Node 20 compatible). Migrations in `prisma/migrations/`.

## Models (prisma/schema.prisma)

### Business
- id (cuid), slug (unique), name, logo, category, description, website, amount (Int, default 0)
- verified (bool), published (bool), createdAt, updatedAt
- Indexes: `[category]`, `[amount]`

### Tool
- id (cuid), slug (unique), name, logo, category, description, website, amount (Int)
- pricing (String), verified, published, createdAt, updatedAt
- Indexes: `[category]`, `[pricing]`, `[amount]`

### User
- id (cuid), email (unique), password (bcrypt hash), name, role (default "user")
- createdAt, updatedAt
- Relations: submissions (Submission[]), payments (Payment[])

### Submission
- id (cuid), type, name, slug, category, description, website, email, contactName
- plan, pricing?, amount?, status (default "pending"), notes?, createdAt, updatedAt
- userId? + user relation (onDelete: SetNull)
- Indexes: `[status]`, `[type]`

### ContactMessage
- id (cuid), name, email, subject, message, createdAt

### Payment (planned for Razorpay step)
- id (cuid), userId? + user relation (onDelete: SetNull), type, itemId, amount, razorpayOrderId?, razorpayPaymentId?, status (default "pending"), createdAt
- Indexes: `[status]`, `[itemId]`

## Commands
```bash
npx prisma migrate dev --name init   # create + apply migration
npx prisma generate                  # regenerate client
npx prisma db seed                   # seed businesses + tools (10 + 10)
npx prisma studio                    # visual DB viewer (localhost:5555)
```

## Seed
- `prisma/seed.ts` — inline mock data (moved from lib/mock-data.ts which was deleted)
- Clears Submission/ContactMessage/Payment/Tool/Business then inserts 10 businesses + 10 tools

## Access Layer
- `lib/db/prisma.ts` — PrismaClient singleton (avoids hot-reload leaks)
- `lib/db/businesses.ts` — getBusinesses, getBusinessBySlug, getTopBusinesses, getBusinessRank, getBusinessesByCategory
- `lib/db/tools.ts` — same for tools
- `lib/db/submissions.ts` — createSubmission, getSubmissions
- `lib/db/contact.ts` — createContactMessage
- `lib/db/leaderboard.ts` — toBusinessLeaderboard, toToolLeaderboard mappers
- Pages call these functions; they never touch Prisma directly.

## Notes
- DATABASE_URL in `.env` (Prisma reads `.env`, not `.env.local`) + `.env.local` (Next.js). Both gitignored.
- ISR `revalidate = 60` on directory/detail pages.