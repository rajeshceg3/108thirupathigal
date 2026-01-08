import { useState, useEffect } from 'react';
import { supabase, isConfigured } from '../lib/supabase';
import { Session } from '@supabase/supabase-js';
import { LogIn, LogOut, User, AlertCircle } from 'lucide-react';

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
    } catch (err: any) {
      console.error('Login error:', err);
      setError(err.message || 'Failed to login');
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
      <div className="flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-lg border border-amber-200 text-sm font-medium">
        <AlertCircle size={16} />
        <span>Auth not configured</span>
      </div>
    );
  }

  if (loading) {
      return <div className="text-slate-400 text-xs">Loading auth...</div>;
  }

  if (!session) {
    return (
      <div className="flex flex-col gap-2">
        <button
          onClick={handleLogin}
          className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm font-semibold shadow-sm"
        >
          <LogIn size={16} />
          Login with Google
        </button>
        {error && (
          <p className="text-xs text-red-600">{error}</p>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 bg-white p-2 rounded-lg border border-slate-200 shadow-sm">
      {session.user.user_metadata.avatar_url ? (
        <img
            src={session.user.user_metadata.avatar_url}
            alt="Profile"
            className="w-8 h-8 rounded-full border border-slate-200"
        />
      ) : (
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
              <User size={16} />
          </div>
      )}
      <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-slate-700 truncate">
              {session.user.user_metadata.full_name || session.user.email}
          </p>
      </div>
      <button
        onClick={handleLogout}
        className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-md transition-colors"
        title="Logout"
      >
        <LogOut size={16} />
      </button>
    </div>
  );
};
