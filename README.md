# Khizar.dev Portfolio

Built with **Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion**.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Where to edit things

| What | File |
|---|---|
| All text, projects, experience, links | `data/portfolio.ts` |
| Colors, fonts, shared styles | `app/globals.css` |
| SEO title / description | `app/layout.tsx` |
| Page sections | `components/sections/*` |
| Contact form backend | `app/api/contact/route.ts` |

## Before going live

1. Set your real domain in `profile.siteUrl` (`data/portfolio.ts`).
2. Replace the `#` project links (`codeUrl`, `liveUrl`) with real URLs.
3. Connect the contact form: in `app/api/contact/route.ts`, send the message by email (e.g. Resend / Nodemailer) or save it to MongoDB. Right now messages are only logged on the server.
4. Deploy: push to GitHub → import on [vercel.com](https://vercel.com).
