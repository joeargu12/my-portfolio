# my-portfolio

A professional portfolio website for marketing professionals with case studies, embedded videos, and dark mode support.

Built with [Next.js](https://nextjs.org) (App Router, static export) and [Tailwind CSS](https://tailwindcss.com).

## Pages

- **Home** — intro, tagline, and featured work
- **About** — bio, focus areas, and experience
- **Case Studies** — a grid of campaigns, each with its own detail page including an embedded video (YouTube or Vimeo), a description, the platform it ran on, and results/metrics
- **Contact** — a contact form plus direct email and social links

## Customize

- Edit `lib/site-config.ts` for your name, tagline, bio, experience, and social links.
- Edit `lib/case-studies.ts` to add or update case studies. Each entry supports:
  - `video`: `{ provider: "youtube" | "vimeo", id: "..." }`
  - `platform`, `description`, `tags`, and a `metrics` array of `{ label, value }`
- The contact form posts to a [Formspree](https://formspree.io) endpoint — replace `YOUR_FORM_ID` in `app/contact/page.tsx` with your own form ID (or swap in another form backend).

## Development

```bash
npm install
npm run dev
```

## Build (static export)

```bash
npm run build
```

The static site is output to the `out/` directory, ready to deploy to any static host (Vercel, Netlify, GitHub Pages, S3, etc.).
