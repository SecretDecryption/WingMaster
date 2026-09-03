# Wingmaster Vercel package

This is the updated Next.js package for Vercel. It includes the supplied Wingmaster redesign plus:

- `/flavours` — the separate Wing Bible with searchable flavours, heat filters, dry-rub filter, and “Use this flavour” links.
- `/order` — the food menu, portion and flavour builder, extras, cart, pickup/delivery preview, and demo checkout.

The checkout is intentionally a demo: it does not send orders, save customer information, or collect card details. Connect an approved restaurant ordering and payment provider before launch.

The prices are a reference snapshot and need to be confirmed by Wingmaster before launch because their online menu and takeout PDF contain differences.

## Deploy to Vercel

Unzip this package and deploy the contained Next.js project to Vercel using your usual project workflow. Vercel detects Next.js automatically and uses the included build settings. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain when you deploy. Vercel’s deployment URL is used automatically when available; the included Wingmaster preview URL is only a fallback for local previews. The share card is `public/og.png`, which is the Wingmaster mark (the illustrated man holding a wing), so crawlers that fall back to `/og.png` also receive the logo.

## Customer profiles, favourite sauces, and directions

This version adds `/profile`, `/favourites`, sauce-saving hearts, a real street
map, and Apple Maps / Google Maps directions. Customer accounts are intentionally
unavailable until the owner connects Supabase. Follow `CUSTOMER-ACCOUNTS.md` before
enabling sign-in for real customers. Ordering is still a demo, not connected to
the restaurant. The ZIP contains no customer data or private keys.
