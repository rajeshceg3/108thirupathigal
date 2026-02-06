import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if we have valid configuration
const isPlaceholder = !supabaseUrl || supabaseUrl === 'https://placeholder.supabase.co';
export const isConfigured = !!supabaseUrl && !!supabaseAnonKey && !isPlaceholder;

if (!isConfigured) {
  const msg = 'Missing Supabase environment variables. VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY must be set.';
  if (import.meta.env.PROD) {
    console.error(`[CRITICAL] ${msg}`);
  } else {
    console.warn(`[DEV] ${msg}`);
  }
}

// Ensure we don't crash in test environment or when env vars are missing
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder',
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  }
);
