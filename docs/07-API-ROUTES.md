# ToolNest — API Routes

> Most routes planned for Phase 4+ (database connected).

## Implemented
| Method | Route | Purpose |
|---|---|---|
| POST | `/api/submit` | ✅ submit business/tool (mock) |

### POST /api/submit
- Body: `SubmissionPayload` (type, name, slug, category, description, website, email, contactName, plan, pricing?, amount?, acceptTerms)
- Response: `{ success, message, id? }` — 200 success + DB id, 400 validation errors (zod), 500 DB error
- ✅ Now writes to DB (Submission model, status="pending") via lib/db/submissions.ts

### POST /api/contact
- Body: `{ name, email, subject, message }`
- Response: `{ success, message }` — 200 success, 400 validation error, 500 DB error
- ✅ Now writes to DB (ContactMessage model) via lib/db/contact.ts

### POST /api/auth/signup
- Body: `{ name, email, password, confirmPassword }`
- Response: 200 `{ success, message }`, 400 validation, 409 duplicate email, 500
- Creates User with bcrypt hash (10 rounds). No auto-login.

### GET/POST /api/auth/[...nextauth]
- NextAuth v5 handlers (credentials provider, JWT sessions). Node runtime.
- Endpoints: /api/auth/providers, /csrf, /session, /callback/credentials, /signout, etc.

## Server Actions (lib/db/*)
- `approveSubmission(id)` — sets status=approved + creates live Business/Tool listing (slug dedup -2, -3). Decision: creates listing for ALL approved plans (free too) — amount drives rank; paid gating deferred to payments step.
- `rejectSubmission(id, reason)` — status=rejected + notes=reason.
- Used by components/admin/SubmissionActions.tsx (no REST route).

## Planned
| Method | Route | Purpose |
|---|---|---|
| GET | `/api/businesses` | list businesses |
| GET | `/api/tools` | list tools |
| POST | `/api/auth/...` | login/signup |
| POST | `/api/payments/razorpay` | create Razorpay order |
| POST | `/api/payments/webhook` | Razorpay webhook |
| GET | `/api/leaderboard` | weekly leaderboard |
| POST | `/api/leaderboard/upgrade` | pay to rank up |