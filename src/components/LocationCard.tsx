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
        group relative p-4 mb-3 rounded-xl border transition-all duration-200 cursor-pointer
        hover:shadow-md hover:-translate-y-0.5
        ${isSelected
          ? 'bg-indigo-50 border-indigo-200 shadow-sm'
          : 'bg-white border-slate-100 hover:border-slate-200'}
      `}
    >
      <div className="flex justify-between items-start">
        <div className="flex-1 min-w-0">
          <h3 className={`
            text-sm font-semibold truncate mb-1
            ${isSelected ? 'text-indigo-900' : 'text-slate-900'}
          `}>
            {loc.name}
          </h3>
          <p className="text-xs text-slate-500 line-clamp-2 mb-2">
            {loc.description}
          </p>
          <div className="flex items-center text-xs text-slate-400">
            <MapPin size={12} className="mr-1" />
            <span>{loc.lat.toFixed(2)}, {loc.lng.toFixed(2)}</span>
          </div>
        </div>

        {/* Visual indicator for selection or interaction */}
        <div className={`
          ml-3 flex items-center justify-center h-full text-slate-300 transition-colors
          ${isSelected ? 'text-indigo-500' : 'group-hover:text-slate-400'}
        `}>
          <ChevronRight size={16} />
        </div>
      </div>
    </div>
  );
});
