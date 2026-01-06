import { useState, useCallback, useMemo } from 'react';
import { locations } from './data/locations';
import { LocationCard } from './components/LocationCard';
import { SearchBar } from './components/SearchBar';
import { MapView } from './components/MapView';
import { Map as MapIcon, List as ListIcon } from 'lucide-react';

function App() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'list' | 'map'>('map');

  const filteredLocations = useMemo(() =>
    locations.filter(loc =>
      loc.name.toLowerCase().includes(searchTerm.toLowerCase())
    ), [searchTerm]
  );

  const handleSelect = useCallback((id: number) => {
    setSelectedId(id);
    if (window.innerWidth < 768) {
      setViewMode('map');
    }
  }, []);

  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden relative font-sans selection:bg-brand-500 selection:text-white">

      {/* Sidebar */}
      <div className={`
        absolute inset-0 z-30 md:static md:z-0
        flex flex-col w-full md:w-[420px] lg:w-[450px]
        bg-white/90 backdrop-blur-xl border-r border-slate-200/60 shadow-2xl md:shadow-xl
        transition-transform duration-500 cubic-bezier(0.2, 0.8, 0.2, 1)
        ${viewMode === 'list' ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>

        {/* Header */}
        <div className="px-6 py-6 border-b border-slate-100 bg-white/50 backdrop-blur-md z-10 sticky top-0">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1.5 h-8 bg-gradient-to-b from-brand-500 to-brand-600 rounded-full shadow-lg shadow-brand-500/30"></div>
            <div>
                 <h1 className="text-xl font-extrabold text-slate-900 tracking-tight leading-none">
                    108 Thirupathigal
                 </h1>
                 <p className="text-xs font-medium text-slate-500 mt-0.5 tracking-wide">
                    Divya Desam Pilgrimage
                 </p>
            </div>
          </div>
          <SearchBar value={searchTerm} onChange={setSearchTerm} className="shadow-sm" />
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2 scrollbar-hide">
          <div className="flex items-center justify-between px-2 mb-3">
             <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                Destinations
             </span>
             <span className="text-[10px] font-bold bg-slate-100 text-slate-500 px-2.5 py-1 rounded-full border border-slate-200/50">
                {filteredLocations.length} Found
             </span>
          </div>

          <div className="space-y-3 pb-24 md:pb-4">
              {filteredLocations.map(loc => (
                <LocationCard
                  key={loc.id}
                  loc={loc}
                  isSelected={selectedId === loc.id}
                  onSelect={handleSelect}
                />
              ))}
          </div>

          {filteredLocations.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-slate-400">
               <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-4 text-slate-300 shadow-inner">
                  <ListIcon size={32} />
               </div>
               <p className="font-semibold text-slate-600">No locations found</p>
               <p className="text-xs mt-1 text-slate-400">Try searching for something else</p>
            </div>
          )}
        </div>
      </div>

      {/* Main Content (Map) */}
      <div className="flex-1 relative h-full w-full bg-slate-100">
        <MapView
          locations={filteredLocations}
          selectedId={selectedId}
          onSelect={handleSelect}
        />

        {/* Mobile View Toggle - Floating Pill */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[1000] md:hidden w-auto">
          <div className="bg-slate-900/95 backdrop-blur-2xl p-1.5 rounded-full shadow-float flex items-center gap-1 border border-white/10 ring-1 ring-black/5">
            <button
              onClick={() => setViewMode('list')}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-bold transition-all duration-300
                ${viewMode === 'list'
                  ? 'bg-white text-slate-900 shadow-md scale-105'
                  : 'text-slate-400 hover:text-white hover:bg-white/10'}
              `}
            >
              <ListIcon size={16} strokeWidth={2.5} />
              List
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-bold transition-all duration-300
                ${viewMode === 'map'
                  ? 'bg-white text-slate-900 shadow-md scale-105'
                  : 'text-slate-400 hover:text-white hover:bg-white/10'}
              `}
            >
              <MapIcon size={16} strokeWidth={2.5} />
              Map
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
