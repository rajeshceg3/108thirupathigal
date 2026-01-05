import { memo } from 'react';
import { Location } from '../data/locations';
import { ChevronRight, MapPin } from 'lucide-react';

interface LocationCardProps {
  loc: Location;
  isSelected: boolean;
  onSelect: (id: number) => void;
}

export const LocationCard = memo(({ loc, isSelected, onSelect }: LocationCardProps) => {
  return (
    <div
      onClick={() => onSelect(loc.id)}
      className={`
        group relative p-3 mb-2 rounded-2xl transition-all duration-300 cursor-pointer
        border border-transparent
        ${isSelected
          ? 'bg-brand-50/50 shadow-sm ring-1 ring-brand-200'
          : 'hover:bg-white hover:shadow-card hover:border-slate-100'}
      `}
    >
      <div className="flex items-start gap-4">
        {/* Image */}
        <div className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-slate-100 shadow-sm ring-1 ring-black/5">
          {loc.image ? (
            <img
              src={loc.image}
              alt={loc.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
          <div>
            <h3 className={`
              text-sm font-bold truncate leading-tight mb-1
              ${isSelected ? 'text-brand-900' : 'text-slate-900 group-hover:text-brand-700'}
              transition-colors
            `}>
              {loc.name}
            </h3>
            <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed font-medium">
              {loc.description}
            </p>
          </div>

          <div className="flex items-center justify-between mt-auto pt-1">
             <div className="flex items-center text-[10px] font-semibold text-slate-400 bg-slate-100/50 px-2 py-0.5 rounded-full">
               <MapPin size={10} className="mr-1.5 text-slate-400" />
               <span>{loc.lat.toFixed(2)}, {loc.lng.toFixed(2)}</span>
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
