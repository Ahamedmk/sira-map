import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log("🔌 Supabase URL:", supabaseUrl);
console.log("🔑 Supabase anon key loaded:", !!supabaseAnonKey);
if (!supabaseUrl || !supabaseAnonKey) {
  // Aide debug: si tu oublies .env
  console.warn("⚠️ Supabase env vars missing: VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});
