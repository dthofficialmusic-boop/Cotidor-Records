import { motion } from 'motion/react';

interface StoreModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

export default function StoreModal({ onClose, onConfirm }: StoreModalProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-6 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 10 }}
        className="bg-brand-bg border border-brand-border text-brand-text max-w-sm w-full p-8 shadow-2xl relative"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
          title="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
            <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
          </svg>
        </button>

        <h2 className="font-display font-bold text-2xl uppercase tracking-tighter mb-4 text-white">External Link</h2>
        
        <p className="text-white/80 text-sm leading-relaxed mb-10">
          We will redirect you to Cotidor Record's merchandise store in partnership with Teemill. Would you like to continue?
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={onClose}
            className="flex-1 font-mono text-[10px] uppercase tracking-[0.2em] border border-brand-border py-3 hover:bg-white hover:text-black transition-colors"
          >
            No / Cancel
          </button>
          
          <button 
            onClick={onConfirm}
            className="flex-1 font-mono text-[10px] uppercase tracking-[0.2em] bg-white text-black border border-white py-3 hover:bg-black hover:text-white transition-colors"
          >
            Yes / Continue
          </button>
        </div>
      </motion.div>
    </div>
  );
}
