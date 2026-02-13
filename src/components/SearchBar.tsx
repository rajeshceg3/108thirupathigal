import { Search, X, Command } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  className?: string;
  id?: string;
}

export const SearchBar = ({ value, onChange, className = '', id }: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

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
    <motion.div
        id={id}
        className={`relative group ${className}`}
        animate={isFocused ? { scale: 1.02 } : { scale: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none z-10">
        <Search size={16} className={`transition-colors duration-300 ${isFocused ? 'text-brand-500' : 'text-slate-400'}`} strokeWidth={2.5} />
      </div>
      <input
        ref={inputRef}
        type="text"
        aria-label="Search destinations"
        placeholder="Search destinations..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`
          block w-full pl-10 pr-10 py-3.5
          bg-white/80 backdrop-blur-xl border border-slate-200/50
          rounded-2xl
          text-[14px] font-medium text-slate-800 placeholder-slate-400
          focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-200
          transition-all duration-300 shadow-subtle
          hover:shadow-card
        `}
      />

      {/* Clear Button or Shortcut Hint */}
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
        <AnimatePresence mode="popLayout">
            {value ? (
              <motion.button
                key="clear"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                onClick={() => onChange('')}
                aria-label="Clear search"
                className="text-slate-400 hover:text-brand-500 transition-colors p-1 rounded-full hover:bg-brand-50"
              >
                <X size={14} strokeWidth={2.5} />
              </motion.button>
            ) : (
              <motion.div
                key="shortcut"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="hidden md:flex items-center gap-1 text-[10px] font-bold text-slate-300 border border-slate-200 rounded px-1.5 py-0.5 bg-slate-50"
              >
                <Command size={10} />
                <span>K</span>
              </motion.div>
            )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
