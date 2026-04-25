import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'OUR ETHOS', href: '#values' },
  { name: 'ARTISTS', href: '#artists' },
  { name: 'ABOUT US', href: '#about' },
  { name: 'STORE', href: '#' },
];

interface NavigationProps {
  onPortalClick?: () => void;
  onStoreClick?: () => void;
  onAboutUsClick?: () => void;
}

export default function Navigation({ onPortalClick, onStoreClick, onAboutUsClick }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-white/40 px-4 md:px-8 h-20 flex justify-between items-center">
        {/* Brand Identity on the Left */}
        <div className="flex items-center gap-6 z-50">
          <a href="/" className="flex items-center gap-3 md:gap-6 hover:opacity-80 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}>
            <img 
              src="https://storage.googleapis.com/forcotidorrecords/white%20logo.png" 
              alt="Cotidor Logo" 
              className="h-8 md:h-10 w-auto"
            />
            <h1 className="font-sans font-bold text-base md:text-lg tracking-normal text-white uppercase leading-none mt-0.5 md:mt-1">
              Cotidor Records
            </h1>
          </a>
        </div>

        {/* Nav Links on the Right */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.name === 'STORE') {
                  e.preventDefault();
                  onStoreClick?.();
                } else if (link.name === 'ABOUT US') {
                  e.preventDefault();
                  onAboutUsClick?.();
                }
              }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="font-mono text-[9px] uppercase tracking-[0.3em] text-white transition-colors hover:text-white/70"
            >
              {link.name}
            </motion.a>
          ))}
          <button 
            onClick={onPortalClick}
            className="font-mono text-[9px] uppercase tracking-[0.4em] text-white border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 active:scale-95"
          >
            APPLY
          </button>
        </div>

        {/* Mobile Right */}
        <div className="flex md:hidden items-center gap-4 z-50">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-3 md:p-2 -mr-3"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center pt-20 pb-10 px-6 gap-8"
          >
            <div className="flex flex-col items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (link.name === 'STORE') {
                      e.preventDefault();
                      onStoreClick?.();
                    } else if (link.name === 'ABOUT US') {
                      e.preventDefault();
                      onAboutUsClick?.();
                    }
                    setIsMobileMenuOpen(false);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="font-display text-4xl uppercase tracking-widest text-white hover:text-white/70"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => {
                  onPortalClick?.();
                  setIsMobileMenuOpen(false);
                }}
                className="font-mono text-[14px] uppercase tracking-[0.4em] text-white border-2 border-white px-10 py-4 rounded-full mt-8 hover:bg-white hover:text-black transition-all duration-300"
              >
                APPLY
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
