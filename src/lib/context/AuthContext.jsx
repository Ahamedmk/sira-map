import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { supabase } from "../supabase";
import { syncProgressOnLogin } from "../progressSync";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  // évite de sync plusieurs fois pour le même user dans la même session
  const lastSyncedUserIdRef = useRef(null);

  useEffect(() => {
    let mounted = true;

    async function init() {
      try {
        const { data, error } = await supabase.auth.getSession();
console.log("🔐 getSession:", data?.session);
        if (!mounted) return;

        if (error) console.warn("getSession error:", error);
        setSession(data?.session ?? null);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    init();

    const { data: sub } = supabase.auth.onAuthStateChange((_event, newSession) => {
        console.log("🔄 auth event:", event);
  console.log("👤 new session:", newSession);
      setSession(newSession ?? null);
      setLoading(false);

      // si l’utilisateur se déconnecte, on reset pour permettre une sync au prochain login
      if (!newSession?.user?.id) {
        lastSyncedUserIdRef.current = null;
      }
    });

    return () => {
      mounted = false;
      sub?.subscription?.unsubscribe?.();
    };
  }, []);

  // ✅ Sync progression au login
  useEffect(() => {
    const userId = session?.user?.id;
    console.log("🧭 AuthContext useEffect session:", session);
    if (!userId) return;

    // empêche double sync si on rerender
    if (lastSyncedUserIdRef.current === userId) {
    console.log("⛔ Sync already done for", userId);
    return;
  }
    lastSyncedUserIdRef.current = userId;

    (async () => {
    try {
      console.log("✅ AuthContext: syncing progress for", userId);
      const merged = await syncProgressOnLogin(userId);
      console.log("✅ AuthContext: sync done, merged xp =", merged?.xp);
    } catch (e) {
      console.warn("❌ Progress sync failed:", e?.message || e);
    }
  })();
}, [session?.user?.id]);

  const value = useMemo(() => {
    return {
      session,
      user: session?.user ?? null,
      loading,
      signOut: async () => {
        await supabase.auth.signOut();
      },
    };
  }, [session, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider />");
  return ctx;
}
