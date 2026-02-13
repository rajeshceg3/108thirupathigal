import { useState, useCallback, useMemo, useEffect } from 'react';
import { locations } from './data/locations';
import { LocationCard } from './components/LocationCard';
import { SearchBar } from './components/SearchBar';
import { MapView } from './components/MapView';
import { ImmersiveLocationModal } from './components/ImmersiveLocationModal';
import { Login } from './components/Login';
import { GuidedTour, TourStep } from './components/GuidedTour';
import { useVisitedLocations } from './hooks/useVisitedLocations';
import { Map as MapIcon, List as ListIcon, Search, Sparkles, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'list' | 'map'>('map');
  const { visitedIds, toggleVisited, session } = useVisitedLocations();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Tour State
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [tourStep, setTourStep] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredLocations = useMemo(() =>
    locations.filter(loc =>
      loc.name.toLowerCase().includes(searchTerm.toLowerCase())
    ), [searchTerm]
  );

  const tourSteps: TourStep[] = useMemo(() => {
    const steps: TourStep[] = [
      {
        title: "Welcome to 108 Thirupathigal",
        content: "Embark on a spiritual journey through the 108 Divya Desams. This interactive guide will help you navigate the features of this application.",
        targetId: "",
        placement: "center"
      },
      {
        title: "Your Spiritual Passport",
        content: "Login to track your visited temples and sync your pilgrimage progress across all your devices.",
        targetId: "tour-login",
        placement: "bottom",
        requiredView: 'list'
      },
      {
        title: "Find Any Temple",
        content: "Search for Divya Desams by name, deity, or location. Try typing 'Tirupati' or 'Srirangam'.",
        targetId: "tour-search",
        placement: "bottom",
        requiredView: 'list'
      },
      {
        title: "Track Your Journey",
        content: "Monitor your pilgrimage progress here. See how many of the 108 Divya Desams you have visited.",
        targetId: "tour-list-stats",
        placement: "bottom",
        requiredView: 'list'
      },
      {
        title: "Interactive Map",
        content: "Explore the geographical locations of all temples. Click on any marker to view detailed information.",
        targetId: "tour-map",
        placement: "center",
        requiredView: 'map'
      }
    ];

    if (isMobile) {
        steps.push({
            title: "Switch Views",
            content: "Toggle between the List view and Map view on mobile devices for a seamless experience.",
            targetId: "tour-mobile-toggle",
            placement: "top",
            requiredView: 'map'
        });
    }

    return steps;
  }, [isMobile]);

  const handleTourStepChange = (step: number) => {
    setTourStep(step);
    const nextStep = tourSteps[step];

    if (isMobile && nextStep?.requiredView) {
        setViewMode(nextStep.requiredView);
    }
  };

  const startTour = () => {
    setTourStep(0);
    setIsTourOpen(true);
    if (isMobile) setViewMode('list');
  };

  const handleSelect = useCallback((id: number) => {
    setSelectedId(id);
    // Auto-open modal for Celestial locations (since they have no map marker to click)
    const loc = locations.find(l => l.id === id);
    if (loc && loc.lat === 0 && loc.lng === 0) {
      setIsModalOpen(true);
    }

    if (isMobile) {
      setViewMode('map');
    }
  }, [isMobile]);

  const handleMapSelect = useCallback((id: number) => {
    setSelectedId(id);
    setIsModalOpen(true);
  }, []);

  return (
    <div className="flex h-[100dvh] w-full bg-slate-50 overflow-hidden relative font-sans selection:bg-brand-200 selection:text-brand-900">
      <AnimatePresence>
        {isModalOpen && (
            <ImmersiveLocationModal
            key="modal"
            location={locations.find(l => l.id === selectedId) || null}
            onClose={() => setIsModalOpen(false)}
            onSelect={handleMapSelect}
            allLocations={locations}
            />
        )}
      </AnimatePresence>

      <GuidedTour
        steps={tourSteps}
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        currentStep={tourStep}
        onStepChange={handleTourStepChange}
      />

      {/* Sidebar */}
      <motion.div
        initial={false}
        animate={{ x: isMobile && viewMode === 'map' ? '-100%' : '0%' }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`
            absolute inset-0 z-30 md:static md:z-0
            flex flex-col w-full md:w-[420px] lg:w-[460px]
            bg-white/80 backdrop-blur-xl border-r border-slate-200/50 shadow-2xl md:shadow-xl
        `}
      >
        {/* Header */}
        <div className="px-6 py-6 border-b border-slate-100/50 bg-white/50 backdrop-blur-md z-10 sticky top-0" id="tour-header">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
                <div className="w-1.5 h-8 bg-gradient-to-b from-brand-500 to-brand-400 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>
                <motion.div
                    animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -top-1 -left-1 w-3.5 h-10 bg-brand-400/20 blur-md rounded-full"
                />
            </div>
            <div>
                 <h1 className="text-xl font-extrabold text-slate-900 tracking-tightest leading-none flex items-center gap-2">
                    108 Thirupathigal
                 </h1>
                 <p className="text-[13px] font-medium text-slate-500 mt-1 tracking-wide flex items-center gap-1">
                    <Sparkles size={10} className="text-brand-400" /> Divya Desam Pilgrimage
                 </p>
            </div>
            <button
                onClick={startTour}
                className="ml-auto p-2 text-slate-400 hover:text-brand-500 hover:bg-brand-50 rounded-full transition-colors"
                title="Start Guided Tour"
                aria-label="Start Guided Tour"
             >
                <HelpCircle size={20} />
             </button>
          </div>
          <div className="mb-5" id="tour-login">
            <Login />
          </div>
          <SearchBar
            id="tour-search"
            value={searchTerm}
            onChange={setSearchTerm}
            className="shadow-sm"
          />
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2 scrollbar-hide bg-slate-50/50 relative">
          <div className="flex items-center justify-between px-2 mb-4 mt-2" id="tour-list-stats">
             <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                Destinations
             </span>
             <div className="flex gap-2">
               {session && (
                 <span className="text-[10px] font-bold bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-full border border-emerald-100 shadow-sm">
                    {visitedIds.length} Visited
                 </span>
               )}
               <span className="text-[10px] font-bold bg-white text-slate-500 px-2.5 py-1 rounded-full border border-slate-200/50 shadow-sm">
                  {filteredLocations.length} Found
               </span>
             </div>
          </div>

          <div className="space-y-3 pb-24 md:pb-4">
              <AnimatePresence mode="popLayout">
                  {filteredLocations.map(loc => (
                    <LocationCard
                      key={loc.id}
                      loc={loc}
                      isSelected={selectedId === loc.id}
                      onSelect={handleSelect}
                      isVisited={visitedIds.includes(loc.id)}
                      onToggleVisited={toggleVisited}
                      showVisitedToggle={!!session}
                    />
                  ))}
              </AnimatePresence>
          </div>

          {filteredLocations.length === 0 && (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 text-slate-400"
            >
               <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 text-slate-300 shadow-card">
                  <Search size={28} />
               </div>
               <p className="font-bold text-slate-600">No locations found</p>
               <p className="text-xs mt-1 text-slate-400">Try adjusting your search</p>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Main Content (Map) */}
      <div className="flex-1 relative h-full w-full bg-slate-100" id="tour-map">
        <MapView
          locations={filteredLocations}
          selectedId={selectedId}
          onSelect={handleMapSelect}
        />

        {/* Mobile View Toggle - Refined Floating Pill */}
        <div
            id="tour-mobile-toggle"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[1000] md:hidden w-auto perspective-1000"
        >
          <motion.div
             initial={{ y: 50, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
             className="bg-slate-900/90 backdrop-blur-xl p-1.5 rounded-full shadow-float flex items-center gap-1 border border-white/10 ring-1 ring-black/20"
          >
            <button
              onClick={() => setViewMode('list')}
              className={`
                flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-bold transition-all duration-300 ease-bounce-subtle
                ${viewMode === 'list'
                  ? 'bg-white text-slate-900 shadow-lg scale-100'
                  : 'text-slate-400 hover:text-white hover:bg-white/5 scale-95'}
              `}
            >
              <ListIcon size={16} strokeWidth={2.5} />
              List
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`
                flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-bold transition-all duration-300 ease-bounce-subtle
                ${viewMode === 'map'
                  ? 'bg-white text-slate-900 shadow-lg scale-100'
                  : 'text-slate-400 hover:text-white hover:bg-white/5 scale-95'}
              `}
            >
              <MapIcon size={16} strokeWidth={2.5} />
              Map
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;
