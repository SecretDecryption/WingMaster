# Wingmaster redesign — Vercel package

This folder is ready to deploy as a Next.js project on Vercel.

## Deploy

1. Add this folder to a GitHub repository, or unzip it and run `npx vercel` inside the folder.
2. Vercel will detect Next.js and use the included build settings.
3. After you have a final domain, add `NEXT_PUBLIC_SITE_URL` in Vercel with the full `https://` URL and redeploy. This makes the social preview image use the final domain.

The order buttons currently send visitors to Wingmaster's existing online-ordering page. Phone, email, directions, hours, and menu links are already connected.
