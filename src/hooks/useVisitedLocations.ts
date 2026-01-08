import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { Session } from '@supabase/supabase-js';

export const useVisitedLocations = () => {
  const [visitedIds, setVisitedIds] = useState<number[]>([]);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session?.user) {
      setVisitedIds([]);
      setLoading(false);
      return;
    }

    const fetchVisited = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('visited_locations')
        .select('location_id')
        .eq('user_id', session.user.id);

      if (error) {
        console.error('Error fetching visited locations:', error);
      } else {
        setVisitedIds(data.map((item: { location_id: number }) => item.location_id));
      }
      setLoading(false);
    };

    fetchVisited();
  }, [session]);

  const toggleVisited = useCallback(async (locationId: number) => {
    if (!session?.user) return;

    const isVisited = visitedIds.includes(locationId);

    // Optimistic update
    setVisitedIds(prev =>
      isVisited ? prev.filter(id => id !== locationId) : [...prev, locationId]
    );

    if (isVisited) {
      const { error } = await supabase
        .from('visited_locations')
        .delete()
        .eq('user_id', session.user.id)
        .eq('location_id', locationId);

      if (error) {
          console.error('Error removing visited location:', error);
          // Revert optimistic update
          setVisitedIds(prev => [...prev, locationId]);
      }
    } else {
      const { error } = await supabase
        .from('visited_locations')
        .insert({ user_id: session.user.id, location_id: locationId });

      if (error) {
          console.error('Error adding visited location:', error);
          // Revert optimistic update
          setVisitedIds(prev => prev.filter(id => id !== locationId));
      }
    }
  }, [visitedIds, session]);

  return { visitedIds, toggleVisited, loading, session };
};
