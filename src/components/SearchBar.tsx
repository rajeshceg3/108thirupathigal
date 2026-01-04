import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  className?: string;
}

export const SearchBar = ({ value, onChange, className = '' }: SearchBarProps) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search size={16} className="text-slate-400" />
      </div>
      <input
        type="text"
        placeholder="Search locations..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          block w-full pl-10 pr-10 py-2.5
          bg-white border border-slate-200
          rounded-xl
          text-sm text-slate-900 placeholder-slate-400
          focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500
          transition-all duration-200 shadow-sm hover:shadow
        "
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};
