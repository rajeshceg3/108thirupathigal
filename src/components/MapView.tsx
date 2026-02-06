import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import { Location } from '../data/locations';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import L from 'leaflet';
import { renderToStaticMarkup } from 'react-dom/server';
import { MapPin } from 'lucide-react';

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

  return (
    <div className="w-full h-full relative z-0 bg-slate-100">
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
              />
            );
        })}
        <MapUpdater center={center} />
      </MapContainer>
    </div>
  );
};
