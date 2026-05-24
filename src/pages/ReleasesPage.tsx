import { motion } from 'motion/react';
import { releases } from '../data/releasesData';

export default function ReleasesPage() {

  return (
    <div className="min-h-[100dvh] bg-black text-white font-sans selection:bg-white selection:text-black flex flex-col lowercase overflow-hidden relative">
      {/* Subtle background grain/noise texture to match premium aesthetic */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')", 
          backgroundSize: '150px' 
        }} 
      />

      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Main Container */}
      <main className="flex-grow flex flex-col px-6 pt-32 pb-24 relative z-10 max-w-7xl mx-auto w-full">
        {/* Header Title Section */}
        <div className="mb-16 md:mb-20 space-y-6">
          <div className="inline-flex items-center gap-4">
            <div className="w-12 h-0.5 bg-white"></div>
            <span className="font-mono text-[10px] md:text-sm tracking-[0.4em] uppercase font-bold text-white/50">cotidor discography</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl sm:text-7xl md:text-8xl font-sans font-black tracking-tighter leading-[0.85] text-white lowercase cursor-default"
          >
            our <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>releases.</span>
          </motion.h1>
        </div>

        {/* Releases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 w-full">
          {releases.map((release, index) => (
            <motion.div
              key={release.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group flex flex-col justify-between"
            >
              {/* Cover Art and Info Container */}
              <a 
                href={`/release/${release.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer focus:outline-none"
              >
                {/* Image Container with Custom Zoom & Hover Shadow effects */}
                <div className="relative aspect-square overflow-hidden bg-neutral-900 border border-white/10 rounded-lg mb-6 shadow-2xl transition-all duration-500 group-hover:border-white/30 group-hover:shadow-[0_20px_50px_rgba(255,255,255,0.05)]">
                  <img 
                    src={release.image} 
                    alt={release.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 z-10">
                    <span className="font-mono text-[10px] text-white/70 tracking-widest uppercase">
                    view smartlink ↗
                    </span>
                  </div>
                </div>

                {/* Info Text */}
                <div className="space-y-2 text-left">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest">
                      {release.label}
                    </span>
                  </div>
                  
                  {/* Release Title - Lowercase as requested */}
                  <h2 className="font-sans font-black text-2xl tracking-tighter text-white lowercase group-hover:text-white/80 transition-colors leading-tight">
                    {release.title}
                  </h2>
                  
                  {/* Artist Name */}
                  <p className="font-mono text-xs text-white/50 lowercase">
                    by {release.artistName}
                  </p>
                </div>
              </a>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-white/5 flex justify-start">
                <a 
                  href={`/release/${release.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center inline-flex items-center justify-center gap-2 font-mono text-[10px] tracking-[0.3em] text-white bg-transparent border border-white/20 hover:border-white hover:bg-white hover:text-black py-3.5 px-6 rounded transition-all duration-300 uppercase font-bold"
                >
                  open smartlink ↗
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Decorative page margin line */}
      <div className="mx-6 border-b border-white/10" />

      {/* Footer */}
      <footer className="py-16 bg-black text-white relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-white/50 font-black tracking-[0.4em] text-center md:text-left lowercase">
          <div className="space-y-1">
            <p>© 2026 cotidor records</p>
            <p>ryzer music group llc</p>
          </div>
          <img src="https://storage.googleapis.com/forcotidorrecords/white%20logo.png" alt="Cotidor" className="h-6 w-auto opacity-70" />
          <p>5031 sw 199th ave, fl 33332</p>
        </div>
      </footer>
    </div>
  );
}
