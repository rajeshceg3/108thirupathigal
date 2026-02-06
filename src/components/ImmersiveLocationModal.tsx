import { useEffect, useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { Location } from '../data/locations';
import { X, MapPin, Share2, Navigation, Star } from 'lucide-react';
import { SafeImage } from './SafeImage';

interface ImmersiveLocationModalProps {
  location: Location | null;
  onClose: () => void;
  onSelect: (id: number) => void;
  allLocations: Location[];
}

// Haversine formula
const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
};

const deg2rad = (deg: number) => {
  return deg * (Math.PI / 180);
};

export const ImmersiveLocationModal = ({ location, onClose, onSelect, allLocations }: ImmersiveLocationModalProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (location) {
      // Small timeout to allow render before animating in
      requestAnimationFrame(() => setIsVisible(true));
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [location]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const nearbyLocations = useMemo(() => {
    if (!location) return [];
    // If celestial (0,0), no nearby
    if (location.lat === 0 && location.lng === 0) return [];

    return allLocations
      .filter(l => l.id !== location.id && (l.lat !== 0 || l.lng !== 0))
      .map(l => ({
        ...l,
        distance: calculateDistance(location.lat, location.lng, l.lat, l.lng)
      }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 3);
  }, [location, allLocations]);

  if (!location) return null;

  const isCelestial = location.lat === 0 && location.lng === 0;

  return createPortal(
    <div className={`fixed inset-0 z-[2000] flex items-center justify-center transition-opacity duration-500 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
       {/* Backdrop */}
       <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-500" onClick={onClose} />

       {/* Modal Container */}
       <div className={`
          relative w-full h-full md:h-[95vh] md:w-[95vw] md:max-w-none md:rounded-2xl
          bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row
          transform transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)
          ${isVisible ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-8 opacity-0'}
       `}>
          {/* Close Button */}
          <button
             onClick={onClose}
             className="absolute top-4 right-4 z-50 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-sm transition-colors cursor-pointer"
             aria-label="Close modal"
          >
             <X size={24} />
          </button>

          {/* Left Panel: Hero Image */}
          <div className="w-full md:w-1/2 h-64 md:h-full relative shrink-0 bg-slate-100">
             {location.image ? (
               <SafeImage
                 src={location.image}
                 alt={location.name}
                 className="w-full h-full object-cover"
               />
             ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-300">
                   <MapPin size={64} />
                </div>
             )}
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 md:hidden" />
             <div className="absolute bottom-6 left-6 right-6 md:hidden text-white z-10">
                <div className="flex items-center gap-2 mb-2">
                    {isCelestial && (
                        <span className="px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider border border-white/30">
                            Celestial
                        </span>
                    )}
                </div>
                <h2 className="text-2xl font-bold leading-tight drop-shadow-md">{location.name}</h2>
             </div>
          </div>

          {/* Right Panel: Content */}
          <div className="flex-1 overflow-y-auto bg-white p-6 md:p-10 lg:p-12 scrollbar-hide">
             <div className="max-w-2xl mx-auto space-y-8">

                 {/* Header (Desktop) */}
                 <div className="hidden md:block">
                    <div className="flex items-center gap-2 mb-4">
                       {location.tags?.map(tag => (
                          <span key={tag} className="px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-xs font-bold uppercase tracking-wider border border-brand-100">
                             {tag}
                          </span>
                       ))}
                       {isCelestial && (
                           <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-bold uppercase tracking-wider flex items-center gap-1 border border-purple-100">
                              <Star size={12} fill="currentColor" /> Celestial
                           </span>
                       )}
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                        {location.name}
                    </h1>
                 </div>

                 {/* Actions */}
                 <div className="flex flex-wrap gap-3">
                     {!isCelestial && (
                         <a
                           href={`https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`}
                           target="_blank"
                           rel="noreferrer"
                           className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-brand-500/30 active:scale-95 hover:-translate-y-0.5"
                         >
                            <Navigation size={18} />
                            Get Directions
                         </a>
                     )}
                     <button
                        onClick={() => {
                             if (navigator.share) {
                                 navigator.share({
                                     title: location.name,
                                     text: location.description,
                                     url: `${window.location.origin}?location=${location.id}`
                                 }).catch(console.error);
                             } else {
                                 navigator.clipboard.writeText(`${window.location.origin}?location=${location.id}`);
                                 // Ideally show a toast
                                 alert('Link copied to clipboard');
                             }
                        }}
                        className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3.5 rounded-xl font-bold transition-all active:scale-95 hover:-translate-y-0.5"
                     >
                        <Share2 size={18} />
                        Share
                     </button>
                 </div>

                 {/* Description */}
                 <div className="prose prose-lg prose-slate text-slate-600 leading-relaxed">
                     <p>{location.description}</p>
                 </div>

                 {/* Celestial Content */}
                 {isCelestial && (
                     <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100">
                         <h3 className="text-lg font-bold text-purple-900 mb-2 flex items-center gap-2">
                             <Star className="text-purple-600" />
                             Celestial Domain
                         </h3>
                         <p className="text-purple-800/80 leading-relaxed">
                             This divine abode resides in the celestial realm, beyond the physical coordinates of Earth. It represents the spiritual Vaikuntha, the ultimate destination of the soul, reachable only through devotion and liberation.
                         </p>
                     </div>
                 )}

                 {/* Nearby Section */}
                 {!isCelestial && nearbyLocations.length > 0 && (
                     <div className="pt-8 border-t border-slate-100">
                         <h3 className="text-sm font-bold text-slate-400 mb-6 uppercase tracking-widest">
                             Nearby Temples
                         </h3>
                         <div className="grid grid-cols-1 gap-3">
                             {nearbyLocations.map(loc => (
                                 <div
                                    key={loc.id}
                                    className="flex items-center gap-4 p-3 rounded-xl bg-white hover:bg-slate-50 transition-colors border border-slate-100 group cursor-pointer shadow-sm hover:shadow-md"
                                    onClick={() => onSelect(loc.id)}
                                 >
                                     <div className="w-16 h-16 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0 relative">
                                         {loc.image ? (
                                             <SafeImage src={loc.image} alt={loc.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                         ) : (
                                             <MapPin className="m-auto text-slate-300" />
                                         )}
                                     </div>
                                     <div className="flex-1 min-w-0">
                                         <h4 className="font-bold text-slate-900 truncate group-hover:text-brand-600 transition-colors">{loc.name}</h4>
                                         <p className="text-sm text-slate-500">{loc.distance.toFixed(1)} km away</p>
                                     </div>
                                 </div>
                             ))}
                         </div>
                     </div>
                 )}
             </div>
          </div>
       </div>
    </div>,
    document.body
  );
};
