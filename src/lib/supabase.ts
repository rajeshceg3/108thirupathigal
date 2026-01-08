import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta as any).env.VITE_SUPABASE_URL;
const supabaseAnonKey = (import.meta as any).env.VITE_SUPABASE_ANON_KEY;

// Check if we have valid configuration
const isPlaceholder = !supabaseUrl || supabaseUrl === 'https://placeholder.supabase.co';
export const isConfigured = !!supabaseUrl && !!supabaseAnonKey && !isPlaceholder;

if (!isConfigured) {
  console.warn('Missing Supabase environment variables. VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY must be set.');
}

// Ensure we don't crash in test environment or when env vars are missing
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder'
);
