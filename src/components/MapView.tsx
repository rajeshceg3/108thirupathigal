import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Location } from '../data/locations';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import L from 'leaflet';

// Fix Leaflet default icon issue
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [12, 41],
    popupAnchor: [0, -41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapViewProps {
  locations: Location[];
  selectedId: number | null;
  onSelect: (id: number) => void;
}

// Component to handle map movement when selection changes
const MapUpdater = ({ center }: { center: [number, number] | null }) => {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.flyTo(center, 10, {
        duration: 1.5
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
    <div className="w-full h-full relative z-0">
      <MapContainer
        center={[11, 79]}
        zoom={6}
        className="w-full h-full"
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        {locations.map(loc => (
          <Marker
            key={loc.id}
            position={[loc.lat, loc.lng]}
            eventHandlers={{
              click: () => onSelect(loc.id),
            }}
          >
            <Popup className="custom-popup" minWidth={200} closeButton={false}>
              <div className="p-0 overflow-hidden rounded-lg">
                {loc.image && (
                    <div className="h-24 w-full overflow-hidden bg-slate-100 relative">
                        <img
                          src={loc.image}
                          alt={loc.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <h3 className="absolute bottom-2 left-2 right-2 font-bold text-white text-sm leading-tight drop-shadow-md">
                          {loc.name}
                        </h3>
                    </div>
                )}
                {!loc.image && (
                   <div className="p-3 pb-0">
                      <h3 className="font-bold text-sm text-slate-900 leading-tight">{loc.name}</h3>
                   </div>
                )}
                <div className="p-3 pt-2">
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {loc.description}
                    </p>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
        <MapUpdater center={center} />
      </MapContainer>
    </div>
  );
};
