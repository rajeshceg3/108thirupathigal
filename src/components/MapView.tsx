import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Location } from '../data/locations';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import L from 'leaflet';
import { renderToStaticMarkup } from 'react-dom/server';
import { MapPin, ArrowRight } from 'lucide-react';
import { SafeImage } from './SafeImage';

// Custom Marker Component - "World Class" 3D Pin Style
const CustomMarkerIcon = ({ isSelected }: { isSelected: boolean }) => (
  <div className={`
    relative flex items-center justify-center
    transition-all duration-500 ease-bounce-subtle
    ${isSelected ? 'scale-110 z-50' : 'scale-100 hover:scale-105 hover:-translate-y-1'}
  `}>
    {/* Pin Head */}
    <div className={`
        relative flex items-center justify-center w-10 h-10 rounded-full
        ${isSelected
            ? 'bg-gradient-to-b from-brand-500 to-brand-600 shadow-[0_10px_20px_-5px_rgba(99,102,241,0.5)]'
            : 'bg-white shadow-[0_4px_10px_-2px_rgba(0,0,0,0.1)]'}
        border-[3px] border-white
        transition-all duration-300
    `}>
        <MapPin
            size={isSelected ? 20 : 18}
            className={`
                ${isSelected ? 'text-white' : 'text-brand-600'}
                transition-colors duration-300 drop-shadow-sm
            `}
            strokeWidth={2.5}
            fill={isSelected ? "currentColor" : "none"}
        />
    </div>

    {/* Stem (Triangle) */}
    <div className={`
        absolute -bottom-2 w-0 h-0
        border-l-[6px] border-l-transparent
        border-r-[6px] border-r-transparent
        border-t-[8px]
        ${isSelected ? 'border-t-brand-600' : 'border-t-white'}
        transition-colors duration-300
    `}></div>

    {/* Shadow on the ground */}
    <div className={`
         absolute -bottom-4 w-8 h-2 bg-black/20 blur-[3px] rounded-[100%]
         transition-all duration-300
         ${isSelected ? 'scale-75 opacity-40' : 'scale-50 opacity-20 group-hover:scale-75 group-hover:opacity-30'}
    `}></div>

  </div>
);

// Create Leaflet DivIcons
const createCustomIcon = (isSelected: boolean) => {
  return L.divIcon({
    className: 'custom-marker-icon', // Empty class to avoid default styles
    html: renderToStaticMarkup(<CustomMarkerIcon isSelected={isSelected} />),
    iconSize: [40, 50],
    iconAnchor: [20, 50], // Anchor at bottom center
    popupAnchor: [0, -50],
  });
};

interface MapViewProps {
  locations: Location[];
  selectedId: number | null;
  onSelect: (id: number) => void;
}

const MapUpdater = ({ center }: { center: [number, number] | null }) => {
  const map = useMap();
  useEffect(() => {
    // If center is null or [0,0] (celestial), don't fly
    if (center && (center[0] !== 0 || center[1] !== 0)) {
      map.flyTo(center, 14, { // Optimal zoom for context
        animate: true,
        duration: 2, // Slower, more cinematic pan
        easeLinearity: 0.25
      });
    }
  }, [center, map]);
  return null;
};

export const MapView = ({ locations, selectedId, onSelect }: MapViewProps) => {
  const selectedLocation = locations.find(l => l.id === selectedId);
  const center: [number, number] | null = selectedLocation
    ? [selectedLocation.lat, selectedLocation.lng]
    : null;

  // Check for Celestial Location (lat/lng 0,0)
  const isCelestial = center && center[0] === 0 && center[1] === 0;

  return (
    <div className="w-full h-full relative z-0 bg-slate-100">
      {/* Celestial Overlay */}
      {isCelestial && selectedLocation && (
        <div className="absolute inset-0 z-[500] flex items-center justify-center pointer-events-none">
          <div className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl max-w-sm mx-4 text-center border border-white/20 ring-1 ring-black/5 pointer-events-auto transform transition-all duration-500 animate-in fade-in zoom-in-95">
             <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <div className="w-2 h-2 bg-brand-500 rounded-full animate-ping absolute"></div>
                <div className="w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center text-white relative z-10">
                   <span className="text-xs font-bold">★</span>
                </div>
             </div>
             <h2 className="text-xl font-bold text-slate-900 mb-2">{selectedLocation.name}</h2>
             <p className="text-slate-500 text-sm leading-relaxed mb-6">
                This divine abode resides in the celestial realm, beyond the physical coordinates of Earth.
             </p>
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-xs font-bold text-slate-600 uppercase tracking-wider">
                Celestial Domain
             </div>
          </div>
        </div>
      )}

      <MapContainer
        center={[11, 79]}
        zoom={7}
        className="w-full h-full outline-none"
        zoomControl={false}
      >
        <TileLayer
            // Clean, high-contrast Voyager style
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        {locations.map(loc => {
            const isSelected = selectedId === loc.id;
            return (
              <Marker
                key={loc.id}
                position={[loc.lat, loc.lng]}
                icon={createCustomIcon(isSelected)}
                eventHandlers={{
                  click: () => onSelect(loc.id),
                }}
                zIndexOffset={isSelected ? 1000 : 0}
              >
                <Popup className="custom-popup" minWidth={280} closeButton={true}>
                  <div className="flex flex-col group cursor-pointer" onClick={() => onSelect(loc.id)}>
                    {loc.image && (
                        <div className="h-40 w-full relative overflow-hidden bg-slate-100">
                            <SafeImage
                              src={loc.image}
                              alt={loc.name}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                <h3 className="font-bold text-white text-[16px] leading-tight drop-shadow-md tracking-tight">
                                {loc.name}
                                </h3>
                            </div>
                        </div>
                    )}
                    {!loc.image && (
                       <div className="p-5 pb-0">
                          <h3 className="font-bold text-lg text-slate-900 leading-tight">{loc.name}</h3>
                       </div>
                    )}
                    <div className="p-5 bg-white">
                        <p className="text-[13px] text-slate-600 line-clamp-3 leading-relaxed font-medium">
                          {loc.description}
                        </p>
                        <div className="mt-4 flex items-center text-brand-600 font-bold text-[11px] uppercase tracking-wider group/btn">
                            View Details
                            <ArrowRight size={12} className="ml-1.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </div>
                    </div>
                  </div>
                </Popup>
              </Marker>
            );
        })}
        <MapUpdater center={center} />
      </MapContainer>
    </div>
  );
};
