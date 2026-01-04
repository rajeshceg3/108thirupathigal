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
        zoomControl={false} // We can add custom zoom control later or let standard stay, false helps clean UI
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
            <Popup className="custom-popup">
              <div className="p-1">
                <h3 className="font-semibold text-slate-900">{loc.name}</h3>
                <p className="text-xs text-slate-500 mt-1">{loc.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
        <MapUpdater center={center} />
      </MapContainer>
    </div>
  );
};
