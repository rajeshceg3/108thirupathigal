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
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden relative font-sans">

      {/* Sidebar */}
      <div className={`
        absolute inset-0 z-20 md:static md:z-0
        flex flex-col w-full md:w-[400px] lg:w-[450px]
        bg-white/95 backdrop-blur-xl border-r border-slate-200/60 shadow-2xl md:shadow-none
        transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1)
        ${viewMode === 'list' ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>

        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 bg-white/50 backdrop-blur-md z-10 sticky top-0">
          <h1 className="text-xl font-bold text-slate-900 mb-4 tracking-tight flex items-center gap-2">
            <span className="w-2 h-6 bg-brand-600 rounded-full inline-block"></span>
            108 Thirupathigal
          </h1>
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2 scrollbar-hide">
          <div className="flex items-center justify-between px-2 mb-2 mt-1">
             <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Locations
             </span>
             <span className="text-[10px] font-medium bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">
                {filteredLocations.length} Found
             </span>
          </div>

          {filteredLocations.map(loc => (
            <LocationCard
              key={loc.id}
              loc={loc}
              isSelected={selectedId === loc.id}
              onSelect={handleSelect}
            />
          ))}

          {filteredLocations.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-slate-400">
               <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4 text-slate-300">
                  <ListIcon size={32} />
               </div>
               <p className="font-medium">No locations found</p>
               <p className="text-xs mt-1">Try searching for something else</p>
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
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[1000] md:hidden">
          <div className="bg-slate-900/90 backdrop-blur-lg p-1.5 rounded-full shadow-float flex items-center gap-1 border border-white/10">
            <button
              onClick={() => setViewMode('list')}
              className={`
                flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
                ${viewMode === 'list'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-400 hover:text-white'}
              `}
            >
              <ListIcon size={16} />
              List
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`
                flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
                ${viewMode === 'map'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-400 hover:text-white'}
              `}
            >
              <MapIcon size={16} />
              Map
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
