# Private Office Consulting

Cinematic one-page site for Private Office Consulting, in French, English and Russian.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3100 — you are redirected to `/fr`, `/en` or `/ru` depending on
your browser language. The choice is remembered in a cookie afterwards.

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server on port 3100 |
| `npm run build` | Production build (writes to `.next-build`, never touches the dev cache) |
| `npm start` | Serve the production build on port 3100 |
| `npm run images` | Re-encode any PNG dropped into `public/images` to WebP |

Photography lives in `public/images` as WebP (~340 KB total). The original
PNGs are kept in `assets/source-images`, outside `public/`, so they are never
deployed. To add a new photo, drop the PNG into `public/images` and run
`npm run images`.

## Editing the copy

All text lives in [`content/`](content) — one file per language:

```
content/fr.ts   French
content/en.ts   English
content/ru.ts   Russian
content/types.ts  the shape all three must match
```

`content/types.ts` is the contract. If you add a field to one language,
TypeScript will refuse to build until the other two have it too — the three
versions cannot silently drift apart.

Headings are `{ lead, accent }` pairs: `lead` renders in ivory, `accent` in
gold italic on the line below.

Company details (email, phone, WhatsApp, address) are in
[`lib/site.ts`](lib/site.ts), not in the language files.

## Structure

```
app/[locale]/     page, layout, metadata, 404
app/api/contact/  form endpoint
components/       Header, MotionProvider, LanguageSwitcher, AmbientCanvas
components/sections/  one file per section of the page
content/          the copy, per language
lib/              i18n, fonts, site details, validation
app/globals.css   all styling, grouped and commented by section
```

## Contact form

Posts to `/api/contact`, which validates, rate-limits (5/hour per IP) and
screens a honeypot field before delivering.

- With `RESEND_API_KEY` set, enquiries are emailed to `CONTACT_TO_EMAIL`,
  with the sender's address as reply-to.
- Without it, enquiries are written to the server log so nothing is lost.

Copy `.env.example` to `.env.local` to configure. To send to a CRM instead of
email, replace the `deliver()` function in
[`app/api/contact/route.ts`](app/api/contact/route.ts) — nothing else changes.

## Typography

Italiana (display) and DM Sans (body) carry the brand but have no Cyrillic.
Cormorant and Manrope cover the Russian pages, loaded with a Cyrillic-only
subset and `preload: false`, so the French and English pages never download
them. Latin words inside Russian text still render in the brand faces.

## Stack

Next.js 14 (App Router) · TypeScript · GSAP ScrollTrigger · Lenis ·
Framer Motion · React Three Fiber

## Before going live

- Point `NEXT_PUBLIC_SITE_URL` at the real domain.
- Verify the sending domain in Resend and set `CONTACT_FROM_EMAIL`.
- Set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` if you want analytics.
- Legal pages (mentions légales, privacy) are not built yet.
