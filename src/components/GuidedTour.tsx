import { useEffect, useState, useCallback, CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Check } from 'lucide-react';

export interface TourStep {
  targetId?: string; // Optional, if missing, centers the modal
  title: string;
  content: string;
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'center';
}

interface GuidedTourProps {
  steps: TourStep[];
  isOpen: boolean;
  onClose: () => void;
  currentStep: number;
  onStepChange: (step: number) => void;
}

export const GuidedTour = ({ steps, isOpen, onClose, currentStep, onStepChange }: GuidedTourProps) => {
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);

  // Helper to get rect
  const updateRect = useCallback(() => {
    if (!isOpen) return;
    const step = steps[currentStep];
    if (!step) return;

    if (step.targetId) {
        const element = document.getElementById(step.targetId);
        if (element) {
            const rect = element.getBoundingClientRect();
            setTargetRect(rect);
            // Scroll into view if needed
            element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        } else {
            setTargetRect(null);
        }
    } else {
        setTargetRect(null);
    }
  }, [isOpen, currentStep, steps]);

  // Update rect on step change or resize
  useEffect(() => {
    updateRect();
    window.addEventListener('resize', updateRect);
    window.addEventListener('scroll', updateRect, true); // Capture scroll events too
    return () => {
      window.removeEventListener('resize', updateRect);
      window.removeEventListener('scroll', updateRect, true);
    };
  }, [updateRect]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        if (currentStep < steps.length - 1) onStepChange(currentStep + 1);
      } else if (e.key === 'ArrowLeft') {
        if (currentStep > 0) onStepChange(currentStep - 1);
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentStep, steps.length, onStepChange, onClose]);

  if (!isOpen) return null;

  const step = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;

  // Calculate tooltip position based on placement prop or fallback
  const tooltipStyle: CSSProperties = { position: 'absolute' };

  if (targetRect && step.targetId) {
    const placement = step.placement || 'bottom';
    const padding = 16;

    // Default fallback if placement calculation fails or is off-screen could be added here
    if (placement === 'bottom') {
        tooltipStyle.top = targetRect.bottom + padding;
        tooltipStyle.left = targetRect.left + (targetRect.width / 2);
        tooltipStyle.transform = 'translateX(-50%)';
    } else if (placement === 'top') {
        tooltipStyle.bottom = window.innerHeight - targetRect.top + padding;
        tooltipStyle.left = targetRect.left + (targetRect.width / 2);
        tooltipStyle.transform = 'translateX(-50%)';
    } else if (placement === 'right') {
        tooltipStyle.top = targetRect.top + (targetRect.height / 2);
        tooltipStyle.left = targetRect.right + padding;
        tooltipStyle.transform = 'translateY(-50%)';
    } else if (placement === 'left') {
        tooltipStyle.top = targetRect.top + (targetRect.height / 2);
        tooltipStyle.right = window.innerWidth - targetRect.left + padding;
        tooltipStyle.transform = 'translateY(-50%)';
    }
  } else {
    // Center fallback
    tooltipStyle.top = '50%';
    tooltipStyle.left = '50%';
    tooltipStyle.transform = 'translate(-50%, -50%)';
  }

  return createPortal(
    <div className="fixed inset-0 z-[3000] pointer-events-none font-sans">
      {/* Dimmed Background / Spotlight */}
      <AnimatePresence>
        {targetRect && step.targetId ? (
          <motion.div
            key="spotlight"
            layout={false}
            initial={false}
            animate={{
              top: targetRect.top - 8,
              left: targetRect.left - 8,
              width: targetRect.width + 16,
              height: targetRect.height + 16,
              borderRadius: 16,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            className="absolute shadow-[0_0_0_9999px_rgba(15,23,42,0.85)] border-2 border-white/40 pointer-events-auto bg-transparent z-10 backdrop-contrast-125"
          />
        ) : (
            // Full screen dim if no target
            <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-slate-900/85 pointer-events-auto z-10"
            />
        )}
      </AnimatePresence>

      {/* Tooltip Card */}
      <AnimatePresence mode="wait">
        <motion.div
            key={currentStep} // Re-render animation on step change
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            style={tooltipStyle}
            className="absolute z-20 pointer-events-auto w-[340px] max-w-[90vw]"
        >
            <div className="bg-white/90 backdrop-blur-2xl p-6 rounded-3xl shadow-2xl border border-white/60 ring-1 ring-black/5 relative overflow-hidden">

                {/* Decorative background glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-400/20 blur-3xl rounded-full pointer-events-none"></div>

                {/* Progress Bar */}
                <div className="flex gap-1.5 mb-5">
                    {steps.map((_, idx) => (
                        <div
                            key={idx}
                            className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${idx <= currentStep ? 'bg-gradient-to-r from-brand-500 to-brand-400 shadow-sm' : 'bg-slate-200/80'}`}
                        />
                    ))}
                </div>

                <div className="mb-8 relative z-10">
                    <h3 className="text-xl font-extrabold text-slate-900 mb-2 tracking-tight">{step.title}</h3>
                    <p className="text-[14px] leading-relaxed font-medium text-slate-600">{step.content}</p>
                </div>

                <div className="flex items-center justify-between relative z-10">
                    <button
                        onClick={onClose}
                        className="text-xs font-bold text-slate-400 hover:text-slate-600 px-2 py-1 transition-colors uppercase tracking-wider"
                    >
                        Skip
                    </button>

                    <div className="flex gap-3">
                        {currentStep > 0 && (
                            <button
                                onClick={() => onStepChange(currentStep - 1)}
                                className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100/80 hover:text-slate-700 transition-all border border-transparent hover:border-slate-200"
                                aria-label="Previous step"
                            >
                                <ChevronLeft size={20} strokeWidth={2.5} />
                            </button>
                        )}
                        <button
                            onClick={() => {
                                if (isLastStep) onClose();
                                else onStepChange(currentStep + 1);
                            }}
                            className={`
                                flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white transition-all shadow-lg active:scale-95
                                ${isLastStep
                                    ? 'bg-gradient-to-r from-brand-600 to-brand-500 hover:shadow-brand-500/40'
                                    : 'bg-slate-900 hover:bg-slate-800 hover:shadow-slate-900/30'
                                }
                            `}
                        >
                            {isLastStep ? (
                                <span className="uppercase tracking-wide">Finish</span>
                            ) : (
                                <span className="uppercase tracking-wide">Next</span>
                            )}
                            {isLastStep ? <Check size={14} strokeWidth={3} /> : <ChevronRight size={14} strokeWidth={3} />}
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
      </AnimatePresence>
    </div>,
    document.body
  );
};
