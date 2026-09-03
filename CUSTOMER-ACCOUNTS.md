# Turn on customer profiles and Your Sauces

The pages and account connection are built. The Wingmaster Supabase project,
customer tables, ownership rules, and public connection settings have been added.
Customer sign-in is not ready for launch: the email sender, code templates, and
live two-account test still need completing. A configured public key alone does
not mean email delivery works. Without connection settings, the site displays
“Customer accounts are coming soon.” It does not create pretend accounts.

Customers sign in using a code emailed to them. Once verified, they can edit
their name and save/remove flavours. Favourites follow their account across
devices. There are no payments, real orders, rewards, or order-history features
in this update; ordering remains a clearly labelled demo.

The customer-facing collection is called **Your Sauces** at `/your-sauces`.
Existing `/favourites` bookmarks still open it. The homepage header and mobile
menu link to it. The Wing Bible and order builder share search, heat, dry-rub,
Top 10, and Your Sauces filters. Filtering does not remove selected order items
or saved sauces. Internal table names and sauce IDs have not changed.

Website profiles are separate from Zenfoody accounts. Do not claim payment
details, logins, or carts sync between the two: no checkout handoff is connected.

## One-time setup

1. Create a Supabase project controlled by the restaurant at
   https://supabase.com/dashboard. Check its plan and email-provider costs before
   activating paid services. No paid service has been purchased by this code.
2. In its SQL editor, run `supabase/customer-accounts.sql` once. This creates the
   profile and favourites tables, loads all 220 flavour IDs, and applies the
   rules that restrict customers to their own data. Do not disable those rules.
3. Under Authentication, enable email sign-in and new customer sign-ups, keep
   email verification on, and keep anonymous sign-in off. Use an email code
   length of 6–10 digits. In both the **Magic Link** and **Confirm signup** email
   templates, include the code using the exact Supabase token placeholder:

   ```html
   <h2>Your Wingmaster sign-in code</h2>
   <p>Enter this code on the Wingmaster website:</p>
   <p style="font-size:28px;font-weight:bold">{{ .Token }}</p>
   <p>If you did not request this code, you can ignore this email.</p>
   ```

   This website uses typed codes, not clickable login links. Do not leave the
   default link-only template. Configure the production Site URL too.
4. Connect a verified sending address under Authentication → SMTP Settings.
   Supabase's default sender is for testing and restricts recipients; it is not
   enough for real customers. Check sender-domain authentication, email delivery,
   and provider limits. Set an appropriate OTP expiry (for example 10 minutes)
   and retain Supabase's request/verification rate limits. This frontend does
   not yet have a CAPTCHA widget, so do not enable a CAPTCHA requirement without
   adding its corresponding widget and token handling.
5. Copy the Project URL and **publishable** key (starts `sb_publishable_`) from
   Supabase settings. In Vercel → Project → Settings → Environment Variables add:
   `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`.
   Add `NEXT_PUBLIC_SITE_URL` with your actual HTTPS website origin. Then
   redeploy: Next.js embeds these public values during the build. For local
   development put the same values in an ignored `.env.local` and restart.
   Never put a Supabase secret/service-role key in the website or ZIP.
6. Test with two email accounts before launch. Each should receive a code,
   verify, edit its name, save a sauce, refresh, sign out, sign in on another
   device, and see its own favourites only. Check wrong/expired codes, duplicate
   saves, removing a favourite, unavailable network, and sign-out on shared
   devices. The SQL policy tests included here run locally, but actual email
   delivery and cloud integration still require this setup and live testing.

## Data and privacy

- Supabase manages email identity and sessions. Its SDK stores the session in
  the browser to keep the customer signed in. Profile and favourite records
  live in Postgres, not browser storage.
- The public frontend key is not an administrator credential. Postgres row-level
  security checks the verified authenticated user for every read/write. There
  are no anonymous permissions to customer tables, no client profile creation,
  and no client writes to the sauce catalogue.
- The app clears visible customer data on account change/sign-out and ignores
  stale requests from a previous customer. Profile pages are excluded from
  search indexing. No private customer data is server-rendered or page-cached.
- Owners can remove a customer via Supabase Auth; database rows cascade-delete.
  Self-service account deletion is not included. Before launch, publish the
  restaurant's approved privacy/contact information and agree on retention and
  deletion handling. Do not invent legal terms or marketing consent.
- The street map is a lazy-loaded Google Maps embed. Apple Maps and Google Maps
  direction links both target 70 Erie Avenue, Brantford. The links remain usable
  if a visitor blocks the embed.

## Maintenance and checks

Run `npm test` for local Postgres policy, catalogue, validation and map-link
checks, and `npm run build` for the deployment build. These do not replace the
two-account hosted test above. When adding flavours in `lib/flavours.ts`, also
add their stable IDs to `wm_sauce_catalogue`; this foreign key prevents arbitrary
IDs being stored. Keep all customer table policies enabled.

Provider references: [Email codes](https://supabase.com/docs/guides/auth/auth-email-passwordless),
[Row-level security](https://supabase.com/docs/guides/database/postgres/row-level-security),
[Production email delivery](https://supabase.com/docs/guides/auth/auth-smtp).
