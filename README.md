# The Ledger — deploying with a real database

This is the same dashboard you've been using, now wired to persist through
a real Postgres database instead of the temporary in-artifact storage.

## What you need to do (roughly 30–45 minutes)

### 1. Create a database
- Easiest path: in your Vercel dashboard, go to **Storage → Create Database → Postgres**.
  Vercel provisions it and automatically sets the connection environment
  variables for you when you link it to this project — you can skip step 3.
- Alternative: create a free Postgres database at [Supabase](https://supabase.com)
  or [Neon](https://neon.tech) if you'd rather not use Vercel's own Postgres.

### 2. Run the schema
Open your database's SQL editor (Vercel Storage tab, or Supabase/Neon's
built-in editor) and run everything in `schema.sql`. This creates one table
that holds your ledger, expenses, utilities, and reserves data.

### 3. Set environment variables (skip if you used Vercel Postgres + auto-link)
If you used Supabase/Neon instead of Vercel Postgres, copy your connection
string and add it in **Vercel → Project Settings → Environment Variables**:
```
POSTGRES_URL=your-connection-string-here
```
(`@vercel/postgres` reads this variable automatically.)

### 4. Push to GitHub and deploy
```bash
cd portfolio-app
git init
git add .
git commit -m "Initial commit"
```
Create a new repo on GitHub, push to it, then in Vercel: **New Project →
Import** your repo. Vercel detects Next.js automatically — just click Deploy.

### 5. Test it
Open your live URL, add a payment or expense, then reload the page. If it's
still there, the database is working.

## Local development
```bash
npm install
npm run dev
```
You'll need a `.env.local` file with `POSTGRES_URL=...` for local testing
against the same database (or a separate dev database, if you'd rather keep
test data separate from real data).

## Notes
- This is set up for **single-user, personal use** — there's no login. Anyone
  with the URL can view and edit the data. If you ever want to share the link
  more widely, add authentication (e.g. Vercel's built-in password
  protection, or a proper auth provider) before doing so.
- The schema uses one JSON column rather than fully normalized tables — see
  the comment at the top of `schema.sql` for why, and when you'd want to
  change that.
