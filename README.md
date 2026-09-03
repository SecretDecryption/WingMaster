# Wingmaster Vercel package

This is the updated Next.js package for Vercel. It includes the supplied Wingmaster redesign plus:

- `/flavours` — the separate Wing Bible with searchable flavours, heat filters, dry-rub filter, and “Use this flavour” links.
- `/order` — the food menu, portion and flavour builder, extras, cart, pickup/delivery preview, and demo checkout.

The checkout is intentionally a demo: it does not send orders, save customer information, or collect card details. Connect an approved restaurant ordering and payment provider before launch.

The prices are a reference snapshot and need to be confirmed by Wingmaster before launch because their online menu and takeout PDF contain differences.

## Deploy to Vercel

Import this folder into Vercel or upload the included ZIP. Vercel detects Next.js automatically and uses the included build settings. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain if you want the Open Graph metadata to use that domain.
