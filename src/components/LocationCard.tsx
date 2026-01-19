import { memo } from 'react';
import { Location } from '../data/locations';
import { ChevronRight, MapPin, CheckCircle2 } from 'lucide-react';
import { SafeImage } from './SafeImage';

interface LocationCardProps {
  loc: Location;
  isSelected: boolean;
  onSelect: (id: number) => void;
  isVisited?: boolean;
  onToggleVisited?: (id: number) => void;
  showVisitedToggle?: boolean;
}

export const LocationCard = memo(({ loc, isSelected, onSelect, isVisited, onToggleVisited, showVisitedToggle }: LocationCardProps) => {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`Select ${loc.name}`}
      onClick={() => onSelect(loc.id)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(loc.id);
        }
      }}
      className={`
        group relative p-4 rounded-2xl transition-all duration-500 ease-stripe cursor-pointer
        ${isSelected
          ? 'bg-white shadow-highlight z-10 scale-[1.02]'
          : 'bg-white shadow-card hover:shadow-card-hover hover:-translate-y-1'}
      `}
    >
      {/* Selection indicator line - Refined */}
      {isSelected && (
        <div className="absolute left-0 top-6 bottom-6 w-1 bg-brand-500 rounded-r-full shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
      )}

      <div className="flex items-start gap-4">
        {/* Image */}
        <div className={`
            relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-slate-100
            ring-1 ring-black/5 transition-all duration-500
            ${isSelected ? 'shadow-lg' : 'group-hover:shadow-lg'}
        `}>
          {loc.image ? (
            <SafeImage
              src={loc.image}
              alt={loc.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ease-stripe"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-300">
              <MapPin size={24} />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 flex flex-col justify-between h-20 py-0.5">
          <div className="flex justify-between items-start gap-2">
            <div className="min-w-0 pr-1">
              <h3 className={`
                text-[15px] font-bold truncate leading-tight mb-1.5 tracking-tightest
                ${isSelected ? 'text-brand-600' : 'text-slate-800 group-hover:text-brand-600'}
                transition-colors duration-300
              `}>
                {loc.name}
              </h3>
              <p className="text-[13px] text-slate-500 line-clamp-2 leading-relaxed font-medium">
                {loc.description}
              </p>
            </div>
            {showVisitedToggle && onToggleVisited && (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onToggleVisited(loc.id);
                    }}
                    aria-label={isVisited ? `Mark ${loc.name} as unvisited` : `Mark ${loc.name} as visited`}
                    className={`
                        flex-shrink-0 transition-all duration-300 p-1.5 rounded-full
                        ${isVisited
                            ? 'text-green-500 bg-green-50 ring-1 ring-green-500/20'
                            : 'text-slate-300 hover:text-slate-500 hover:bg-slate-50'}
                    `}
                    title={isVisited ? "Mark as unvisited" : "Mark as visited"}
                >
                    <CheckCircle2 size={18} className={`transition-transform duration-300 ${isVisited ? "fill-current scale-110" : ""}`} />
                </button>
            )}
          </div>

          <div className="flex items-center justify-between mt-auto pt-1">
             <div className="flex items-center text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-md border border-slate-100 shadow-sm">
               <MapPin size={10} className="mr-1 text-slate-400" />
               <span className="tabular-nums tracking-wider">{loc.lat.toFixed(2)}, {loc.lng.toFixed(2)}</span>
             </div>

             {/* Visual indicator */}
             <div className={`
               flex items-center justify-center transition-all duration-500 ease-bounce-subtle
               ${isSelected
                  ? 'text-brand-500 translate-x-0 opacity-100'
                  : 'text-slate-300 -translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}
             `}>
               <ChevronRight size={16} strokeWidth={2.5} />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
});
