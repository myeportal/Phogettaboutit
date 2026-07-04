# PHOITALIA GitHub + Vercel Deployment Checklist

## Before pushing
- [ ] Review copy and replace placeholder location/contact details if available
- [ ] Decide whether docs should remain public or be gated
- [ ] Add real photography, logo files, and favicon assets if ready
- [ ] Confirm which package docs should stay visible in the repo

## GitHub setup
- [ ] Create a new GitHub repository
- [ ] Upload the contents of `phoitalia-site/` as the repo root
- [ ] Commit `content/docs/` and `content/docs-manifest.json` so Vercel has local copies
- [ ] Optionally add branch protection for `main`

## Vercel setup
- [ ] Import the GitHub repository into Vercel
- [ ] Framework preset: Next.js
- [ ] Install command: `npm install`
- [ ] Build command: `npm run build`
- [ ] Output: default `.next`
- [ ] Add custom domain(s) later, with `phogettaboutit.com` redirecting or landing into the PHOITALIA experience as desired

## Optional next integrations
- [ ] Reservation link or embedded booking flow
- [ ] Online ordering CTA destination
- [ ] Mailing-list provider for lead capture
- [ ] Analytics (Vercel Analytics, GA4, or PostHog)
- [ ] Password protection for `/docs`
- [ ] SEO metadata per route and Open Graph images
