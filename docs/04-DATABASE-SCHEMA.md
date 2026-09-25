# ToolNest — Database Schema (Planned)

> Database not set up yet. This is the planned schema for Phase 4+.

## Users
- id, email, password_hash, name, created_at

## Businesses
- id, name, slug, description, website, category, logo, votes, rank, status, created_at

## Tools
- id, name, slug, description, website, category, icon, votes, rank, status, created_at

## Submissions
- id, type (business/tool), user_id, data, status (pending/approved/rejected), created_at

## Payments (Razorpay)
- id, user_id, order_id, payment_id, amount, status, created_at
- linked to leaderboard position purchase

## Leaderboard
- weekly reset
- paid placements ranked above organic based on payment