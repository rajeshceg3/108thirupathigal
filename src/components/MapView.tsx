import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Location } from '../data/locations';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import L from 'leaflet';
import { renderToStaticMarkup } from 'react-dom/server';
import { MapPin, ArrowRight } from 'lucide-react';

// Custom Marker Component
const CustomMarkerIcon = ({ isSelected }: { isSelected: boolean }) => (
  <div className={`
    relative flex items-center justify-center
    transition-all duration-500 ease-stripe
    ${isSelected ? 'scale-125 z-50 drop-shadow-xl' : 'scale-100 hover:scale-110 drop-shadow-md'}
  `}>
    <div className={`
        relative flex items-center justify-center w-10 h-10 rounded-full
        border-[3px] border-white
        ${isSelected
            ? 'bg-gradient-to-br from-brand-500 to-brand-600 shadow-inner'
            : 'bg-gradient-to-br from-slate-700 to-slate-800'}
        transition-colors duration-300
    `}>
        <MapPin size={20} className="text-white drop-shadow-sm" strokeWidth={2.5} />
    </div>

    {/* Pulse effect for selected marker */}
    {isSelected && (
        <>
            <span className="absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-30 animate-ping duration-1000"></span>
            <span className="absolute -bottom-2 w-4 h-1 bg-black/30 blur-[2px] rounded-full"></span>
        </>
    )}
    {!isSelected && (
         <div className="absolute -bottom-1.5 w-3 h-1 bg-black/20 blur-[1px] rounded-full transition-all duration-300 group-hover:w-4 group-hover:bg-black/30" />
    )}
  </div>
);

// Create Leaflet DivIcons
const createCustomIcon = (isSelected: boolean) => {
  return L.divIcon({
    className: 'custom-marker-icon', // Empty class to avoid default styles
    html: renderToStaticMarkup(<CustomMarkerIcon isSelected={isSelected} />),
    iconSize: [40, 40],
    iconAnchor: [20, 40], // Anchor at bottom center
    popupAnchor: [0, -44],
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
    if (center) {
      map.flyTo(center, 13, { // Slightly closer zoom for better context
        animate: true,
        duration: 1.5,
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
            // Using a cleaner, more muted map style (Voyager)
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
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
                <Popup className="custom-popup" minWidth={260} closeButton={true}>
                  <div className="flex flex-col group cursor-pointer" onClick={() => onSelect(loc.id)}>
                    {loc.image && (
                        <div className="h-36 w-full relative overflow-hidden bg-slate-100">
                            <img
                              src={loc.image}
                              alt={loc.name}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <h3 className="font-bold text-white text-[15px] leading-tight drop-shadow-md">
                                {loc.name}
                                </h3>
                            </div>
                        </div>
                    )}
                    {!loc.image && (
                       <div className="p-4 pb-0">
                          <h3 className="font-bold text-base text-slate-900 leading-tight">{loc.name}</h3>
                       </div>
                    )}
                    <div className="p-4 bg-white">
                        <p className="text-[13px] text-slate-600 line-clamp-3 leading-relaxed font-medium">
                          {loc.description}
                        </p>
                        <div className="mt-3 flex items-center text-brand-600 font-bold text-[11px] uppercase tracking-wider group/btn">
                            View Details
                            <ArrowRight size={12} className="ml-1 transition-transform duration-300 group-hover/btn:translate-x-1" />
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
