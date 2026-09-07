# Wingmaster Vercel package

This is the updated Next.js package for Vercel. It includes the supplied Wingmaster redesign plus:

- `/flavours` — the separate Wing Bible with searchable flavours, heat filters, dry-rub filter, and “Use this flavour” links.
- `/order` — the food menu, portion and flavour builder, extras, cart, pickup/delivery preview, and demo checkout.
- `/blackenstein` — the 10 Million Scoville challenge page, safety warning, and mandatory waiver acknowledgement.
- `/profile` and `/your-sauces` — customer sign-in, profiles, and saved sauces.

The checkout is intentionally a demo: it does not send orders, save customer information, or collect card details. Connect an approved restaurant ordering and payment provider before launch.

All prices, menu options, heat ratings, waiver language, and availability need to be confirmed by Wingmaster before launch.

## Deploy to Vercel

Unzip this package and deploy the contained Next.js project to Vercel using your usual project workflow. Vercel detects Next.js automatically and uses the included build settings. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain when you deploy. Vercel’s deployment URL is used automatically when available; the included Wingmaster preview URL is only a fallback for local previews. The share card is `public/og.png`, which is the Wingmaster mark (the illustrated man holding a wing), so crawlers that fall back to `/og.png` also receive the logo.

## Customer profiles, Your Sauces, and directions

This version includes `/profile`, `/your-sauces` (also accessible at the older
`/favourites` address), sauce-saving hearts, a real street map, and Apple Maps /
Google Maps directions. Your Sauces has a homepage header link and its own filter
alongside heat, dry rubs, Top 10, and search in the Wing Bible and order builder.

The Supabase database and public connection settings are prepared. Sign-in email
delivery, code templates, and a live two-account test still need finishing.
Follow `CUSTOMER-ACCOUNTS.md` before enabling sign-in for real customers. The
safe `.env.example` shows which Vercel environment variables to add. The ZIP
contains no customer data, private keys, or local environment files.

Website profiles remain separate from Zenfoody. Ordering is still a demo; no
cart transfer, real-order submission, payment, or saved-card connection is built.

The website waiver currently unlocks Blackenstein only for the active browser
tab and does not store the customer’s typed details. Before launch, the owner
should approve the final waiver with legal counsel and connect secure waiver
records plus staff verification to the real ordering workflow.
