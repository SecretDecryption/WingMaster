# Wingmaster redesign — Vercel package

This folder is ready to deploy as a Next.js project on Vercel.

## Deploy

1. Add this folder to a GitHub repository, or unzip it and run `npx vercel` inside the folder.
2. Vercel will detect Next.js and use the included build settings.
3. After you have a final domain, add `NEXT_PUBLIC_SITE_URL` in Vercel with the full `https://` URL and redeploy. This makes the social preview image use the final domain.

## Ordering

All "Order now" buttons and menu links now go to `/order`, a self-contained order
builder — nothing links out to wingmaster.ca or the old Zenfoody ordering page.

The order flow:
1. Pick a wing style (breaded / boneless / cauli)
2. Pick a size
3. Pick one flavour, then **Add this to my order**
4. Repeat as many times as needed — each addition is its own cart line, so a
   customer can order 12 Buffalo Medium breaded wings *and* 6 Honey Garlic
   boneless wings in the same order
5. Checkout collects name, phone, pickup/delivery, and notes

**Pricing:** the per-size prices in `lib/data.ts` (`portionSizes`) are
placeholders — update them with the shop's real prices before launch.

**Payment:** checkout currently ends with "pay in store" — there's a clearly
marked spot in `app/order/page.tsx` (the `payment-placeholder` block and the
`placeOrder` function) where a real payment processor (Stripe, Square, etc.)
can be dropped in later without changing the rest of the flow.

Phone, email, Instagram, directions, and hours are still real links to
Wingmaster's actual contact info — only the ordering/menu flow was replatformed.
