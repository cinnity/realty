# Cinnity Realty — deploying with a real database

This is the same dashboard you've been using, now wired to persist through
a real Postgres database instead of the temporary in-artifact storage.

## SMS reminders (optional)

A daily cron job checks for leases, insurance, and tasks due within 7 days
(or already overdue) and texts you a summary — only when there's something
to report, so you won't get a daily "nothing due" text.

### 1. Create a Twilio account
Sign up at [twilio.com](https://www.twilio.com), verify your own phone
number, and buy a Twilio phone number (a few dollars, works on the free
trial too). Note your **Account SID** and **Auth Token** from the console
dashboard.

### 2. Set environment variables
On Vercel (Project Settings → Environment Variables) and in `.env.local`
for local testing:
```
TWILIO_ACCOUNT_SID=your-account-sid
TWILIO_AUTH_TOKEN=your-auth-token
TWILIO_FROM_NUMBER=+1XXXXXXXXXX   (the Twilio number you bought)
TWILIO_TO_NUMBER=+1XXXXXXXXXX    (your own cell phone)
CRON_SECRET=a-random-string-16-chars-or-longer
```
Generate `CRON_SECRET` yourself — anything long and random works (a
password manager works fine for this). This isn't something Twilio gives
you; it's how Vercel confirms the reminder job is really being triggered
by its own scheduler and not some random request hitting the URL.

### 3. Redeploy
`vercel.json` already defines the daily schedule (13:00 UTC — adjust the
hour to whenever you want the text, remembering Vercel Cron fires
sometime within that hour on Hobby, not to the exact minute). Push to
deploy, and the cron job registers automatically. **Cron jobs only run
against your production deployment**, not preview builds.

### 4. Test it manually
Cron jobs on Hobby only fire once a day, which makes iterating slow. To
test without waiting: visit `/api/reminders` directly in your browser with
the Authorization header set (e.g. via a tool like Postman, or `curl`):
```
curl https://your-app.vercel.app/api/reminders -H "Authorization: Bearer your-cron-secret"
```
If nothing's due within 7 days, it'll report that and not send anything —
temporarily set a task's due date to tomorrow to confirm the actual text
arrives.

## Authentication

The app is gated behind HTTP Basic Auth (`proxy.js`) — a username/password
prompt your browser handles natively, covering both the pages and the API
routes. (Note: this is Next.js 16's `proxy.js` convention, not the older
`middleware.js` — a leftover `middleware.js` is silently ignored on Next.js
16+, so don't have both files present.) Set these before deploying:

**Locally:** add to `.env.local`:
```
AUTH_USERNAME=your-username
AUTH_PASSWORD=a-strong-password
```

**On Vercel:** Project Settings → Environment Variables → add `AUTH_USERNAME`
and `AUTH_PASSWORD` (Production, and Preview if you want preview deploys
protected too). Redeploy after adding them — environment variable changes
don't apply to already-running deployments.

This is basic-but-real protection appropriate for a single-user app. It is
not a substitute for a proper auth system if you ever add other users.

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
