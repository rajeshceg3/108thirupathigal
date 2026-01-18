import { Search, X, Command } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  className?: string;
}

export const SearchBar = ({ value, onChange, className = '' }: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`relative group ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none z-10">
        <Search size={16} className="text-slate-400 group-focus-within:text-brand-500 transition-colors duration-300" strokeWidth={2.5} />
      </div>
      <input
        ref={inputRef}
        type="text"
        aria-label="Search destinations"
        placeholder="Search destinations..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          block w-full pl-10 pr-10 py-3
          bg-white border-0
          rounded-xl
          text-[14px] font-medium text-slate-800 placeholder-slate-400
          focus:outline-none focus:ring-0
          transition-all duration-300 shadow-subtle
          group-focus-within:shadow-glow
        "
      />

      {/* Clear Button or Shortcut Hint */}
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
        {value ? (
          <button
            onClick={() => onChange('')}
            aria-label="Clear search"
            className="text-slate-300 hover:text-slate-500 transition-colors p-1 rounded-full hover:bg-slate-100"
          >
            <X size={14} strokeWidth={2.5} />
          </button>
        ) : (
          <div className="hidden md:flex items-center gap-1 text-[10px] font-bold text-slate-300 border border-slate-200 rounded px-1.5 py-0.5 bg-slate-50">
            <Command size={10} />
            <span>K</span>
          </div>
        )}
      </div>
    </div>
  );
};
