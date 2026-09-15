# Tomorrow's Tech — Free AI Tools Directory

A standalone, static Next.js site. No database, no Supabase, no backend —
the tool list lives in `data/tools.json` and everything else (search,
category filtering) runs client-side in the browser.

## Run it locally
```bash
npm install
npm run dev
```
Then open http://localhost:3000

## Deploy to Vercel
1. Push this folder to a new GitHub repo (e.g. `tomorrows-tech-free-tools`)
2. In Vercel: New Project → Import that repo → Deploy
   (no environment variables needed — there's no backend to configure)

## Updating the tool list
Edit `data/tools.json` — each entry is:
```json
{ "name": "Tool Name", "category": "One of the categories list", "url": "https://...", "free_tier_fact": "One sourced, specific fact." }
```
Add/remove entries, save, and redeploy (Vercel auto-deploys on push if
connected to GitHub). No code changes needed for new tools.

**Before publishing new facts:** free-tier limits change often. Verify
any specific number (credits, minutes, tokens) on the tool's own pricing
page before adding it — this directory's whole value is that it's more
accurate than a "50 free AI tools" listicle.

## Branding
- Colors, fonts, and the mascot mark all live in `tailwind.config.js` and
  `components/RobotMark.tsx` — edit there to adjust brand-wide.
- The robot mark is a hand-built SVG (not the reference PNGs), so it
  stays crisp at any size and can be easily re-colored or animated later.

## Stack
Next.js 14 (App Router, static export) + Tailwind CSS + TypeScript.
No database. No API routes. Deploys as pure static files, so it will
never hit a Supabase (or any backend) usage limit.
