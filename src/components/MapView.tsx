import { setWorkerUrl, type StyleSpecification } from 'maplibre-gl';
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url';
setWorkerUrl(workerUrl);
import { MapContainer, useMap } from 'react-leaflet';
import { Location } from '../data/locations';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import { maplibreGL } from '@maplibre/maplibre-gl-leaflet';
import 'maplibre-gl/dist/maplibre-gl.css';
import warmMapStyle from '../vendor/warm-map/style.json';
import L from 'leaflet';
import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import { renderToStaticMarkup } from 'react-dom/server';
import { MapPin } from 'lucide-react';

// Custom Marker Component - "World Class" 3D Pin Style
const CustomMarkerIcon = ({ isSelected }: { isSelected: boolean }) => (
  <div className={`
    relative flex items-center justify-center
    transition-all duration-500 ease-bounce-subtle
    ${isSelected ? 'scale-125 z-50' : 'scale-100 hover:scale-110 hover:-translate-y-1'}
  `}>
    {/* Pin Head */}
    <div className={`
        relative flex items-center justify-center w-10 h-10 rounded-full
        ${isSelected
            ? 'bg-gradient-to-b from-brand-400 to-brand-500 shadow-[0_10px_20px_-5px_rgba(139,92,246,0.5)]'
            : 'bg-white shadow-[0_4px_10px_-2px_rgba(0,0,0,0.1)]'}
        border-[3px] border-white
        transition-all duration-300
    `}>
        <MapPin
            size={isSelected ? 20 : 18}
            className={`
                ${isSelected ? 'text-white' : 'text-brand-500'}
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
        ${isSelected ? 'border-t-brand-500' : 'border-t-white'}
        transition-colors duration-300
    `}></div>

    {/* Shadow on the ground */}
    <div className={`
         absolute -bottom-4 w-8 h-2 bg-black/20 blur-[3px] rounded-[100%]
         transition-all duration-300
         ${isSelected ? 'scale-90 opacity-40' : 'scale-50 opacity-20 group-hover:scale-75 group-hover:opacity-30'}
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

const DEFAULT_CENTER: [number, number] = [11, 79];
const DEFAULT_ZOOM = 7;

const MapUpdater = ({ center }: { center: [number, number] | null }) => {
  const map = useMap();
  useEffect(() => {
    // If center is null, reset to default map view.
    if (!center) {
      map.flyTo(DEFAULT_CENTER, DEFAULT_ZOOM, {
        animate: false,
        duration: 1.8,
        easeLinearity: 0.1
      });
      return;
    }

    // If center is [0,0] (celestial), don't fly.
    if (center[0] !== 0 || center[1] !== 0) {
      map.flyTo(center, 14, { // Optimal zoom for context
        animate: false,
        duration: 2.5, // Slower, more cinematic pan
        easeLinearity: 0.1
      });
    }
  }, [center, map]);
  return null;
};

// Warm paper basemap (worlds shared module): OpenFreeMap vector tiles,
// custom watercolor-wash style. Free public instance, no API key.
const WarmPaperBasemap = () => {
  const map = useMap();
  useEffect(() => {
    const control=(event:Event)=>{const action=(event as CustomEvent).detail;if(action==='in')map.zoomIn(1,{animate:false});if(action==='out')map.zoomOut(1,{animate:false});if(action==='reset')map.setView(DEFAULT_CENTER,DEFAULT_ZOOM,{animate:false});};
    window.addEventListener('journey-map-control',control);
    const layer = maplibreGL({ style: warmMapStyle as StyleSpecification });
    layer.addTo(map);
    (map.getContainer() as HTMLElement & {_warmMap?: unknown})._warmMap = layer.getMaplibreMap?.();
    map.attributionControl.addAttribution('<a href="https://openfreemap.org" target="_blank">OpenFreeMap</a> <a href="https://www.openmaptiles.org/" target="_blank">&copy; OpenMapTiles</a> Data from <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>');
    return () => {
      window.removeEventListener('journey-map-control',control);
      map.removeLayer(layer);
    };
  }, [map]);
  return null;
};

const TempleMarkers = ({locations,selectedId,onSelect}:MapViewProps) => {
 const map=useMap();
 useEffect(()=>{
  const cluster=L.markerClusterGroup({animate:false,showCoverageOnHover:false,spiderfyOnMaxZoom:true,maxClusterRadius:42,iconCreateFunction:group=>L.divIcon({className:'temple-cluster',html:`<span>${group.getChildCount()}</span>`,iconSize:[44,44]})});
  locations.filter(loc=>loc.lat!==0||loc.lng!==0).forEach(loc=>{const marker=L.marker([loc.lat,loc.lng],{icon:createCustomIcon(loc.id===selectedId),title:loc.name,alt:loc.name});marker.on('click',()=>onSelect(loc.id));cluster.addLayer(marker);});
  map.addLayer(cluster);return()=>{map.removeLayer(cluster);};
 },[locations,selectedId,onSelect,map]);
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
        center={DEFAULT_CENTER}
        zoom={DEFAULT_ZOOM}
        className="w-full h-full outline-none"
        zoomControl={false}
        maxZoom={18} zoomAnimation={false} fadeAnimation={false} markerZoomAnimation={false}
      >
        <WarmPaperBasemap />
        <TempleMarkers locations={locations} selectedId={selectedId} onSelect={onSelect}/>
        <MapUpdater center={center} />
      </MapContainer>
    </div>
  );
};
