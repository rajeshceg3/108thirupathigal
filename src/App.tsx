import { useState, useCallback, useMemo } from 'react';
import { locations } from './data/locations';
import { LocationCard } from './components/LocationCard';
import { SearchBar } from './components/SearchBar';
import { MapView } from './components/MapView';
import { Map as MapIcon, List as ListIcon } from 'lucide-react';

function App() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  // View mode for mobile: 'list' or 'map'
  const [viewMode, setViewMode] = useState<'list' | 'map'>('map');

  const filteredLocations = useMemo(() =>
    locations.filter(loc =>
      loc.name.toLowerCase().includes(searchTerm.toLowerCase())
    ), [searchTerm]
  );

  const handleSelect = useCallback((id: number) => {
    setSelectedId(id);
    // On mobile, switch to map view when a location is selected
    if (window.innerWidth < 768) {
      setViewMode('map');
    }
  }, []);

  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden relative">

      {/* Sidebar - Desktop: Always visible. Mobile: Toggled. */}
      <div className={`
        absolute inset-0 z-20 md:static md:z-0
        flex flex-col w-full md:w-[400px] lg:w-[450px]
        bg-white border-r border-slate-200 shadow-xl md:shadow-none
        transition-transform duration-300 ease-in-out
        ${viewMode === 'list' ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        {/* Header / Search Area */}
        <div className="p-4 border-b border-slate-100 bg-white/80 backdrop-blur-md z-10 sticky top-0">
          <h1 className="text-xl font-bold text-slate-800 mb-4 px-1">108 Thirupathigal</h1>
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
        </div>

        {/* List Area */}
        <div className="flex-1 overflow-y-auto px-4 py-2 space-y-1 scrollbar-hide">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 mt-2 px-1">
            {filteredLocations.length} Locations Found
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
            <div className="text-center py-10 text-slate-400">
              No locations found matching "{searchTerm}"
            </div>
          )}
        </div>
      </div>

      {/* Main Content (Map) */}
      <div className="flex-1 relative h-full w-full">
        <MapView
          locations={filteredLocations}
          selectedId={selectedId}
          onSelect={handleSelect}
        />

        {/* Mobile Toggle Button (Floating) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[1000] md:hidden">
          <button
            onClick={() => setViewMode(viewMode === 'map' ? 'list' : 'map')}
            className="
              flex items-center gap-2 px-6 py-3
              bg-slate-900 text-white
              rounded-full shadow-lg shadow-slate-900/20
              font-medium text-sm
              active:scale-95 transition-transform
            "
          >
            {viewMode === 'map' ? (
              <>
                <ListIcon size={18} />
                Show List
              </>
            ) : (
              <>
                <MapIcon size={18} />
                Show Map
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
