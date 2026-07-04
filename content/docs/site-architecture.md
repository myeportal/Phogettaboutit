# PHOITALIA Site Architecture

## Purpose
This project is a Vercel-ready Next.js review build for the PHOITALIA restaurant concept.

## Route map
- `/` — premium homepage for the concept story and launch-ready review
- `/menu` — Vietnamese lunch + Italia dinner menu framing
- `/brand` — brand hierarchy and usage guardrails
- `/docs` — selected package docs index
- `/docs/[slug]` — markdown detail view for copied docs

## Source mapping
- Homepage messaging comes from the website copy and homepage/storefront copy packs.
- Menu framing comes from the homepage/menu copy pack and can later expand from the recipe bible.
- Brand rules come from the PHOITALIA brand identity guide, naming decision memo, and IP architecture memo.
- Docs are synced into local markdown so the deployment stays self-contained on Vercel.

## GitHub + Vercel connection later
Push this folder as its own GitHub repo, then import it into Vercel with default Next.js settings.

## Password gating options
- protect `/docs` with middleware and a shared secret
- keep docs behind Vercel deployment protection
- split docs to a separate gated subdomain if needed
