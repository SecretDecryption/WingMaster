'use client';

import { createClient, type SupabaseClient } from '@supabase/supabase-js';

let client: SupabaseClient | null = null;

// Only the publishable key belongs here. Database policies enforce ownership;
// never put a service-role/secret key in a NEXT_PUBLIC environment variable.
export function getCustomerClient() {
  if (typeof window === 'undefined') return null;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key || !url.startsWith('https://') || !key.startsWith('sb_publishable_')) return null;
  try { new URL(url); } catch { return null; }
  if (!client) client = createClient(url, key, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      // This app uses entered email codes, never credentials in redirect URLs.
      detectSessionInUrl: false,
    },
  });
  return client;
}
