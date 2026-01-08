import { memo } from 'react';
import { Location } from '../data/locations';
import { ChevronRight, MapPin, CheckCircle2 } from 'lucide-react';

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
      onClick={() => onSelect(loc.id)}
      className={`
        group relative p-3 mb-3 rounded-xl transition-all duration-300 cursor-pointer
        border
        ${isSelected
          ? 'bg-white border-brand-500/30 shadow-highlight z-10 scale-[1.02]'
          : 'bg-white border-transparent hover:border-slate-200 hover:shadow-card hover:-translate-y-0.5'}
      `}
    >
      {/* Selection indicator line */}
      {isSelected && (
        <div className="absolute left-0 top-3 bottom-3 w-1 bg-brand-500 rounded-r-full" />
      )}

      <div className="flex items-start gap-4">
        {/* Image */}
        <div className={`
            relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100
            ring-1 ring-black/5 transition-shadow duration-300
            ${isSelected ? 'shadow-md' : 'group-hover:shadow-md'}
        `}>
          {loc.image ? (
            <img
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
            <div className="min-w-0">
              <h3 className={`
                text-[15px] font-bold truncate leading-tight mb-1 tracking-tight
                ${isSelected ? 'text-brand-700' : 'text-slate-800 group-hover:text-brand-600'}
                transition-colors
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
                    className={`
                        flex-shrink-0 transition-all duration-300 p-1 rounded-full
                        ${isVisited ? 'text-green-500 bg-green-50' : 'text-slate-200 hover:text-slate-400 hover:bg-slate-50'}
                    `}
                    title={isVisited ? "Mark as unvisited" : "Mark as visited"}
                >
                    <CheckCircle2 size={20} className={isVisited ? "fill-current" : ""} />
                </button>
            )}
          </div>

          <div className="flex items-center justify-between mt-auto pt-1">
             <div className="flex items-center text-[11px] font-semibold text-slate-400 bg-slate-50 px-2 py-1 rounded-md border border-slate-100/50">
               <MapPin size={10} className="mr-1.5 text-slate-400" />
               <span className="tabular-nums tracking-wide">{loc.lat.toFixed(2)}, {loc.lng.toFixed(2)}</span>
             </div>

             {/* Visual indicator */}
             <div className={`
               flex items-center justify-center transition-all duration-300
               ${isSelected
                  ? 'text-brand-500 translate-x-0 opacity-100'
                  : 'text-slate-300 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}
             `}>
               <ChevronRight size={18} strokeWidth={2.5} />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
});
