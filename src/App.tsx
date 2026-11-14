import { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { locations } from './data/locations';
import { LocationCard } from './components/LocationCard';
import { SearchBar } from './components/SearchBar';
import { MapView } from './components/MapView';
import { ImmersiveLocationModal } from './components/ImmersiveLocationModal';
import { Login } from './components/Login';
import { GuidedTour, TourStep } from './components/GuidedTour';
import { useVisitedLocations } from './hooks/useVisitedLocations';
import { List as ListIcon, Search, HelpCircle, X } from 'lucide-react';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';

function App() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const panelRef = useRef<HTMLDivElement>(null);
  const exploreRef = useRef<HTMLButtonElement>(null);
  const [viewMode, setViewMode] = useState<'list' | 'map'>('map');
  const { visitedIds, toggleVisited, session } = useVisitedLocations();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Tour State
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [tourStep, setTourStep] = useState(0);

  useEffect(() => {
    if(viewMode !== 'list'){if(!isModalOpen)exploreRef.current?.focus();return;}
    const panel=panelRef.current;
    panel?.querySelector<HTMLButtonElement>('button')?.focus();
    const handleKey=(event:KeyboardEvent)=>{
      if(event.key==='Escape'){setViewMode('map');exploreRef.current?.focus();}
      if(event.key==='Tab'&&panel){
        const items=Array.from(panel.querySelectorAll<HTMLElement>('button:not([disabled]),input,a[href],[tabindex="0"]')).filter(el=>el.offsetParent!==null);
        const first=items[0],last=items[items.length-1];
        if(event.shiftKey&&document.activeElement===first){event.preventDefault();last?.focus();}
        if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first?.focus();}
      }
    };
    window.addEventListener('keydown',handleKey);return()=>window.removeEventListener('keydown',handleKey);
  },[viewMode,isModalOpen]);

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
    setIsModalOpen(true);

    setViewMode('map');
    exploreRef.current?.focus();
  }, []);

  const handleMapSelect = useCallback((id: number) => {
    setSelectedId(id);
    setIsModalOpen(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
    setSelectedId(null);
    exploreRef.current?.focus();
  }, []);

  return (
    <MotionConfig reducedMotion="always" transition={{duration:0}}><div className="flex h-[100dvh] w-full bg-slate-50 overflow-hidden relative font-sans selection:bg-brand-200 selection:text-brand-900">
      <AnimatePresence>
        {isModalOpen && (
            <ImmersiveLocationModal
            key="modal"
            location={locations.find(l => l.id === selectedId) || null}
            onClose={handleModalClose}
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
        ref={panelRef}
        role="dialog" aria-label="Explore temples" aria-modal="true"
        hidden={viewMode !== 'list'}
        animate={{ x: '0%' }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`
            journey-panel absolute inset-0 z-[1500]
            flex flex-col w-full
            bg-white/80 backdrop-blur-xl border-r border-slate-200/50 shadow-2xl md:shadow-xl
        `}
      >
        <button className="panel-close" aria-label="Close Explore" onClick={()=>{setViewMode('map');exploreRef.current?.focus();}}><X size={20}/></button>
        {/* Header */}
        <div className="px-6 py-6 border-b border-slate-100/50 bg-white/50 backdrop-blur-md z-10 sticky top-0" id="tour-header">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
                <div className="w-1.5 h-8 bg-gradient-to-b from-brand-500 to-brand-400 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>
                <motion.div
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0 }}
                    className="absolute -top-1 -left-1 w-3.5 h-10 bg-brand-400/20 blur-md rounded-full"
                />
            </div>
            <div>
                 <h1 className="text-xl font-extrabold text-slate-900 tracking-tightest leading-none flex items-center gap-2">
                    108 Thirupathigal
                 </h1>

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
          <div className="journey-tools">{(['in','out','reset'] as const).map((action,index)=><button key={action} aria-label={['Zoom in','Zoom out','Reset map'][index]} onClick={()=>window.dispatchEvent(new CustomEvent('journey-map-control',{detail:action}))}>{['+','−','Reset map'][index]}</button>)}</div>
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

        {viewMode === 'map' && <button ref={exploreRef} className="explore-action" onClick={()=>setViewMode('list')} aria-label="Explore temples"><ListIcon size={18}/> Explore</button>}

      </div>
    </div></MotionConfig>
  );
}

export default App;
