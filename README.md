# PHOITALIA Site

Vercel-ready Next.js review site for the **PHOITALIA** restaurant concept.

## Included routes
- `/` — homepage
- `/menu` — menu overview
- `/brand` — brand hierarchy and guardrails
- `/docs` — selected package docs
- `/docs/[slug]` — individual doc view

## Local development
```bash
npm install
npm run dev
```
Then open `http://localhost:3000`.

## Content sync
Selected package docs are copied into the repo for self-contained deployment.

```bash
npm run sync-content
```

## Production build
```bash
npm run build
npm run start
```

## Vercel deploy
1. Push this folder as its own GitHub repository.
2. Import the repo into Vercel.
3. Use the default **Next.js** preset.
4. Install command: `npm install`
5. Build command: `npm run build`

No environment variables are required for the current review build.

## Supporting docs
- `ARCHITECTURE.md`
- `DEPLOYMENT_CHECKLIST.md`

## Brand architecture rule
- **Primary brand:** PHOITALIA
- **Supporting domain / marketing asset:** phogettaboutit.com
- **Secondary expression only:** PHOGETTABOUTIT
