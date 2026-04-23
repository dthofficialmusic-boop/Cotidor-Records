import { motion } from 'motion/react';

const logo = "https://drive.google.com/uc?export=view&id=1_OrGVSULz0It-0F873ToWG0-8Nl20dFo";

const navLinks = [
  { name: 'OUR ETHOS', href: '#values' },
  { name: 'ARTISTS', href: '#artists' },
  { name: 'ABOUT US', href: '#about' },
  { name: 'STORE', href: '#' },
];

interface NavigationProps {
  onPortalClick?: () => void;
  onStoreClick?: () => void;
}

export default function Navigation({ onPortalClick, onStoreClick }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-white/40 px-8 h-20 flex justify-between items-center">
      {/* Brand Identity on the Left */}
      <div className="flex items-center gap-6">
        <a href="/" className="flex items-center gap-6 hover:opacity-80 transition-opacity">
          <img 
            src={logo} 
            alt="Cotidor Logo" 
            className="h-10 w-auto brightness-0 invert"
          />
          <h1 className="font-sans font-bold text-lg tracking-normal text-white uppercase leading-none">
            Cotidor Records
          </h1>
        </a>
      </div>

      {/* Nav Links on the Right */}
      <div className="flex items-center gap-8">
        {navLinks.map((link, i) => (
          <motion.a
            key={link.name}
            href={link.href}
            onClick={(e) => {
              if (link.name === 'STORE') {
                e.preventDefault();
                onStoreClick?.();
              }
            }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="font-mono text-[9px] uppercase tracking-[0.3em] text-white transition-colors"
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
    </nav>
  );
}
