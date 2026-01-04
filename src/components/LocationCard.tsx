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
        group relative p-3 mb-3 rounded-xl border transition-all duration-200 cursor-pointer
        hover:shadow-md hover:-translate-y-0.5
        ${isSelected
          ? 'bg-indigo-50 border-indigo-200 shadow-sm'
          : 'bg-white border-slate-100 hover:border-slate-200'}
      `}
    >
      <div className="flex items-start gap-3">
        {/* Image - Delightful square thumbnail with rounded corners */}
        <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100 shadow-inner">
          {loc.image ? (
            <img
              src={loc.image}
              alt={loc.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-300">
              <MapPin size={24} />
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0 flex flex-col justify-between h-20 py-0.5">
          <div>
            <h3 className={`
              text-sm font-bold truncate leading-tight mb-1
              ${isSelected ? 'text-indigo-900' : 'text-slate-900'}
            `}>
              {loc.name}
            </h3>
            <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
              {loc.description}
            </p>
          </div>

          <div className="flex items-center justify-between mt-auto pt-1">
             <div className="flex items-center text-[10px] font-medium text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100">
               <MapPin size={10} className="mr-1" />
               <span>{loc.lat.toFixed(2)}, {loc.lng.toFixed(2)}</span>
             </div>

             {/* Visual indicator for selection or interaction */}
             <div className={`
               flex items-center justify-center text-slate-300 transition-colors
               ${isSelected ? 'text-indigo-500' : 'group-hover:text-slate-400'}
             `}>
               <ChevronRight size={16} />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
});
