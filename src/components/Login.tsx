import { useState, useEffect } from 'react';
import { supabase, isConfigured } from '../lib/supabase';
import { Session } from '@supabase/supabase-js';
import { LogIn, LogOut, User, AlertCircle, Loader2 } from 'lucide-react';

export const Login = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data?.session ?? null);
      setLoading(false);
    }).catch((error) => {
      console.error('Error checking auth session:', error);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async () => {
    setError(null);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      });
      if (error) throw error;
    } catch (err) {
      console.error('Login error:', err);
      const message = err instanceof Error ? err.message : 'Failed to login';
      setError(message);
    }
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  if (!isConfigured) {
    return (
      <div className="flex items-center gap-3 px-4 py-3 bg-amber-50/50 backdrop-blur-sm text-amber-900/80 rounded-xl border border-amber-200/50 text-[13px] font-medium shadow-sm group transition-all hover:bg-amber-50">
        <div className="p-1.5 bg-amber-100 rounded-lg text-amber-600 group-hover:scale-110 transition-transform">
            <AlertCircle size={16} />
        </div>
        <span>Auth not configured</span>
      </div>
    );
  }

  if (loading) {
      return (
        <div className="flex items-center gap-2 px-1 py-1 text-slate-400 text-[13px] font-medium animate-pulse">
            <Loader2 size={14} className="animate-spin" />
            <span>Connecting...</span>
        </div>
      );
  }

  if (!session) {
    return (
      <div className="flex flex-col gap-2">
        <button
          onClick={handleLogin}
          className="
            relative w-full flex items-center justify-center gap-2.5 px-4 py-3
            bg-slate-900 hover:bg-slate-800 text-white
            rounded-xl
            text-[14px] font-semibold tracking-wide
            shadow-lg shadow-slate-900/20 hover:shadow-xl hover:shadow-slate-900/30
            hover:-translate-y-0.5 active:translate-y-0
            transition-all duration-300 ease-bounce-subtle
            overflow-hidden group
          "
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
          <LogIn size={18} className="text-slate-300 group-hover:text-white transition-colors" />
          <span>Login with Google</span>
        </button>
        {error && (
          <p className="px-2 text-[11px] font-bold text-red-500 bg-red-50 py-1 rounded-md border border-red-100">{error}</p>
        )}
      </div>
    );
  }

  return (
    <div className="group flex items-center gap-3 bg-white/60 backdrop-blur-md p-2 rounded-2xl border border-white/40 shadow-sm hover:shadow-md hover:bg-white/80 transition-all duration-300">
      <div className="relative">
          {session.user.user_metadata.avatar_url ? (
            <img
                src={session.user.user_metadata.avatar_url}
                alt="Profile"
                className="w-10 h-10 rounded-xl border-2 border-white shadow-sm transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
              <div className="w-10 h-10 rounded-xl bg-slate-100 border-2 border-white shadow-sm flex items-center justify-center text-slate-400 group-hover:text-brand-500 transition-colors">
                  <User size={18} />
              </div>
          )}
          <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full shadow-sm"></div>
      </div>

      <div className="flex-1 min-w-0 py-0.5">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Pilgrim</p>
          <p className="text-[13px] font-bold text-slate-800 truncate leading-none">
              {session.user.user_metadata.full_name || session.user.email?.split('@')[0]}
          </p>
      </div>

      <button
        onClick={handleLogout}
        className="
            p-2 text-slate-400 rounded-xl
            hover:text-red-500 hover:bg-red-50
            transition-all duration-200
            opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0
        "
        title="Logout"
      >
        <LogOut size={18} />
      </button>
    </div>
  );
};
