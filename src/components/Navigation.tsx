import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'HOME', href: '/', isHash: false },
  { name: 'ARTISTS', href: '/#artists', isHash: true },
  { name: 'ABOUT US', href: '/about', isHash: false },
  { name: 'CONTACT', href: '/contact', isHash: false },
  { name: 'STORE', href: '#', isStore: true },
];

interface NavigationProps {
  onStoreClick?: () => void;
}

export default function Navigation({ onStoreClick }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-white/40 px-4 md:px-8 h-20 flex justify-between items-center">
        {/* Brand Identity on the Left */}
        <div className="flex items-center gap-6 z-50">
          <Link to="/" className="flex items-center gap-3 md:gap-6 hover:opacity-80 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}>
            <img 
              src="https://storage.googleapis.com/forcotidorrecords/white%20logo.png" 
              alt="Cotidor Logo" 
              className="h-8 md:h-10 w-auto"
            />
            <h1 className="font-sans font-bold text-base md:text-lg tracking-normal text-white uppercase leading-none mt-0.5 md:mt-1">
              Cotidor Records
            </h1>
          </Link>
        </div>

        {/* Nav Links on the Right */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => {
            return (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center pt-0.5"
              >
                {link.isStore ? (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      onStoreClick?.();
                    }}
                    className="flex items-center font-mono text-[9px] uppercase tracking-[0.3em] text-white transition-colors hover:text-white/70"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className="flex items-center font-mono text-[9px] uppercase tracking-[0.3em] text-white transition-colors hover:text-white/70"
                  >
                    {link.name}
                  </Link>
                )}
              </motion.div>
            );
          })}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: navLinks.length * 0.1 }}
            className="flex items-center pt-0.5"
          >
            <Link 
              to="/apply"
              className="inline-flex items-center justify-center font-mono text-[9px] uppercase tracking-[0.4em] text-white border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 active:scale-95"
            >
              APPLY
            </Link>
          </motion.div>
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
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {link.isStore ? (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        onStoreClick?.();
                        setIsMobileMenuOpen(false);
                      }}
                      className="font-display text-4xl uppercase tracking-widest text-white hover:text-white/70"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="font-display text-4xl uppercase tracking-widest text-white hover:text-white/70"
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  to="/apply"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display text-4xl uppercase tracking-widest text-white hover:text-white/70 bg-transparent border-none p-0 m-0 block"
                >
                  APPLY
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
