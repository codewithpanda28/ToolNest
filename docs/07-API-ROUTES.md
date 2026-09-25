# ToolNest — API Routes

> Most routes planned for Phase 4+ (database connected).

## Implemented
| Method | Route | Purpose |
|---|---|---|
| POST | `/api/submit` | ✅ submit business/tool (mock) |

### POST /api/submit
- Body: `SubmissionPayload` (type, name, slug, category, description, website, email, contactName, plan, pricing?, amount?, acceptTerms)
- Response: `{ success, message, id? }` — 200 success + UUID, 400 validation errors (zod field errors)
- Note: Mock implementation — 300ms delay, logs to console. Real DB in Step 8.

### POST /api/contact
- Body: `{ name, email, subject, message }`
- Response: `{ success, message }` — 200 success, 400 validation error
- Note: Mock — 300ms delay, logs to console.

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