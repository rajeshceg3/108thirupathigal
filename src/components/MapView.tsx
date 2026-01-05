import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Location } from '../data/locations';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import L from 'leaflet';
import { renderToStaticMarkup } from 'react-dom/server';
import { MapPin } from 'lucide-react';

// Custom Marker Component
const CustomMarkerIcon = ({ isSelected }: { isSelected: boolean }) => (
  <div className={`
    relative flex items-center justify-center
    transition-transform duration-300
    ${isSelected ? 'scale-110 z-50' : 'scale-100'}
  `}>
    <div className={`
        relative flex items-center justify-center w-10 h-10 rounded-full shadow-lg
        border-2 border-white
        ${isSelected ? 'bg-brand-600' : 'bg-slate-800'}
        transition-colors duration-300
    `}>
        <MapPin size={20} className="text-white" strokeWidth={2.5} />
    </div>
    {/* Pulse effect for selected marker */}
    {isSelected && (
        <span className="absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75 animate-ping"></span>
    )}
    <div className="absolute -bottom-1 w-2 h-2 bg-black/20 rotate-45 transform translate-y-1/2 blur-[1px]" />
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
      map.flyTo(center, 12, {
        animate: true,
        duration: 1.2,
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
                <Popup className="custom-popup" minWidth={240} closeButton={true}>
                  <div className="flex flex-col">
                    {loc.image && (
                        <div className="h-32 w-full relative overflow-hidden bg-slate-100">
                            <img
                              src={loc.image}
                              alt={loc.name}
                              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <h3 className="absolute bottom-3 left-3 right-3 font-bold text-white text-base leading-tight drop-shadow-md">
                              {loc.name}
                            </h3>
                        </div>
                    )}
                    {!loc.image && (
                       <div className="p-4 pb-0">
                          <h3 className="font-bold text-base text-slate-900 leading-tight">{loc.name}</h3>
                       </div>
                    )}
                    <div className="p-4 bg-white">
                        <p className="text-xs text-slate-600 line-clamp-4 leading-relaxed font-medium">
                          {loc.description}
                        </p>
                        <button
                            className="mt-3 text-xs font-bold text-brand-600 hover:text-brand-700 uppercase tracking-wide"
                            onClick={(e) => {
                                e.stopPropagation();
                                onSelect(loc.id);
                            }}
                        >
                            View Details
                        </button>
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
