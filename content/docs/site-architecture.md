# PHOITALIA Site Architecture

## Suggested repo structure
- `app/` — Next.js App Router pages (`/`, `/menu`, `/brand`, `/docs`, `/docs/[slug]`)
- `components/` — shared site shell and future reusable sections
- `content/docs/` — copied markdown snapshots used by the docs library
- `content/docs-manifest.json` — metadata that maps doc slugs to files and source paths
- `lib/` — site data and doc-loading helpers
- `scripts/extract-content.mjs` — content sync script for package-sourced docs
- `README.md` — local run and Vercel deployment instructions

## Content source mapping
### Homepage (`/`)
Uses messaging distilled from:
- `Phogettaboutit_Master_Package/17_Website_Copy.md`
- `Phogettaboutit_Master_Package/32_PHOITALIA_Homepage_Menu_Storefront_Copy_Pack.md`
- `Phogettaboutit_Master_Package/PHOITALIA_BRAND_IDENTITY_GUIDE.md`

### Menu (`/menu`)
Uses dish names and section framing from:
- `Phogettaboutit_Master_Package/32_PHOITALIA_Homepage_Menu_Storefront_Copy_Pack.md`
- `Phogettaboutit_Master_Package/15_Complete_Recipe_Bible.md` (future expansion source)

### Brand (`/brand`)
Uses positioning and guardrails from:
- `Phogettaboutit_Master_Package/PHOITALIA_BRAND_IDENTITY_GUIDE.md`
- `Phogettaboutit_Master_Package/NAMING_DECISION_MEMO__PHOITALIA_PRIMARY_DIRECTION.md`
- `Phogettaboutit_IP_Master_Package/IP/09_Secondary_Use_Brand_Architecture.md`

### Docs listing and detail (`/docs`, `/docs/[slug]`)
Uses markdown snapshots copied into `content/docs/` from:
- `Phogettaboutit_Master_Package/docs/01_Executive_Summary.md`
- `Phogettaboutit_Master_Package/PHOITALIA_BRAND_IDENTITY_GUIDE.md`
- `Phogettaboutit_Master_Package/17_Website_Copy.md`
- `Phogettaboutit_Master_Package/NAMING_DECISION_MEMO__PHOITALIA_PRIMARY_DIRECTION.md`
- `Phogettaboutit_Master_Package/docs/33_PhoItalia_whitepaper.md`
- `Phogettaboutit_IP_Master_Package/IP/09_Secondary_Use_Brand_Architecture.md`
- `Phogettaboutit_IP_Master_Package/Brand_Assets/01_Brand_Style_Guide.md`

## How docs are surfaced
1. `npm run sync-content` copies selected source markdown into `content/docs/`.
2. The same script updates `content/docs-manifest.json` with slug, title, category, description, and original package path.
3. `/docs` reads the manifest and renders review cards.
4. `/docs/[slug]` reads markdown from the copied local file so the repo stays self-contained for GitHub/Vercel.

## GitHub/Vercel handoff later
- Create a GitHub repo and push the `phoitalia-site/` folder contents as the repository root.
- In Vercel, import the repo with default Next.js settings.
- Build command: `npm run build`
- Install command: `npm install`
- No required environment variables for the current static review build.
- If later connecting reservations, ordering, forms, or analytics, add env vars in Vercel Project Settings.

## Optional password gating ideas for docs
- **Middleware + basic auth style gate:** protect `/docs` and `/docs/[slug]` behind a simple credential check using middleware and environment variables.
- **Vercel password protection:** use Vercel deployment protection or team access for private review environments.
- **Draft mode / token gate:** require a signed preview token or secret query flow for selected reviewers.
- **Split strategy:** keep public marketing routes open and move sensitive package docs into a separate protected app or subdomain.

## Notes
- The build intentionally keeps PHOITALIA visually primary.
- `phogettaboutit.com` is referenced only as a supporting traffic asset.
- Future expansions can add CMS-backed content, gallery assets, reservation links, ordering integrations, and location data without changing the route structure.
