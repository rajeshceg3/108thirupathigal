import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  className?: string;
}

export const SearchBar = ({ value, onChange, className = '' }: SearchBarProps) => {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
        <Search size={18} className="text-slate-400 group-focus-within:text-brand-500 transition-colors duration-200" />
      </div>
      <input
        type="text"
        placeholder="Search 108 Divya Desams..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          block w-full pl-11 pr-10 py-3
          bg-slate-50 border border-slate-200
          rounded-xl
          text-sm font-medium text-slate-800 placeholder-slate-400
          focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500
          transition-all duration-200 shadow-sm
        "
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
        >
          <div className="bg-slate-200 rounded-full p-0.5 hover:bg-slate-300 transition-colors">
            <X size={14} />
          </div>
        </button>
      )}
    </div>
  );
};
