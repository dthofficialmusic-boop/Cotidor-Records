import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Play, Instagram, ExternalLink } from 'lucide-react';
import { artistsData } from '../data/artists';

export default function ArtistProfilePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isSporadic, setIsSporadic] = useState(false);
  
  const artist = artistsData.find(a => a.id === id);

  useEffect(() => {
    if (!artist?.hoverImage) return;
    let timeout: any;
    const toggle = () => {
      setIsSporadic(true);
      setTimeout(() => setIsSporadic(false), 150 + Math.random() * 350);
      timeout = setTimeout(toggle, 2000 + Math.random() * 5000);
    };
    timeout = setTimeout(toggle, Math.random() * 3000);
    return () => clearTimeout(timeout);
  }, [artist]);

  const showAlt = isHovered || isSporadic;

  if (!artist) {
    return (
      <div className="min-h-[100dvh] bg-black text-white flex flex-col items-center justify-center lowercase">
        <h1 className="text-4xl font-display font-black tracking-tighter mb-4">artist not found.</h1>
        <button 
          onClick={() => navigate('/')}
          className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors"
        >
          back to main
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] bg-black text-white font-sans selection:bg-white selection:text-black flex flex-col lowercase">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-sm border-b border-white/10 px-6 h-20 flex justify-between items-center">
          <button 
          onClick={() => navigate('/')}
          className="group flex items-center gap-2 text-[10px] font-black text-white/50 hover:text-white transition-colors tracking-[0.4em] lowercase"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> back to main
        </button>
        <img src="https://storage.googleapis.com/forcotidorrecords/white%20logo.png" alt="Cotidor Logo" className="h-8 w-auto" />
      </nav>

      <main className="flex-grow pt-20">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-24">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start justify-start w-full">
            
            {/* Image Column */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative aspect-[3/4] w-full md:w-[35%] max-w-sm mx-0 overflow-hidden bg-[#0a0a0a] shrink-0"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img 
                src={artist.image} 
                alt={artist.name} 
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out hover:scale-105 ${artist.grainy ? 'contrast-125 saturate-150 brightness-110 blur-[0.4px] sepia-[.15] hue-rotate-[5deg]' : ''} ${artist.hoverImage && showAlt ? 'opacity-0 scale-105' : 'scale-100'}`}
                referrerPolicy="no-referrer"
              />
              {artist.hoverImage && (
                <img 
                  src={artist.hoverImage} 
                  alt={`${artist.name} alternate`} 
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${artist.grainy ? 'contrast-125 saturate-150 brightness-110 blur-[0.4px] sepia-[.15] hue-rotate-[5deg]' : ''} ${showAlt ? '!opacity-90 !scale-105' : 'opacity-0 scale-95'}`}
                  referrerPolicy="no-referrer"
                />
              )}
              {artist.grainy && (
                <div className="absolute inset-0 z-[5] mix-blend-overlay opacity-[0.1] bg-neutral-400 pointer-events-none" style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')" }} />
              )}
            </motion.div>

            {/* Content Column */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex-1 space-y-10 w-full text-left"
            >
              <div className="space-y-4">
                <span className="mono-label text-xs tracking-[0.5em] font-black text-white/40 block lowercase">
                  {artist.genre}
                </span>
                <h1 className="text-5xl md:text-7xl font-display font-black leading-[0.9] text-white tracking-tighter">
                  {artist.name}
                </h1>
              </div>

              <div className="text-lg text-white/80 leading-relaxed font-medium space-y-6 normal-case">
                {artist.bio.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="flex flex-col gap-6">
                <h3 className="text-sm font-black tracking-widest text-white/50">listen / follow</h3>
                {!['christopher-lucio', 'grlvenom', 'withprivilege', 'yohara-scott'].includes(artist.id) && (
                  <div className="flex flex-wrap gap-4">
                    {artist.id !== 'yllona-madison' && (
                      <>
                        <a href="#" className="flex items-center gap-2 border border-white/20 px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
                          <Play size={16} /> spotify
                        </a>
                        <a href="#" className="flex items-center gap-2 border border-white/20 px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
                          <Play size={16} /> soundcloud
                        </a>
                      </>
                    )}
                    <a href={artist.id === 'yllona-madison' ? "https://www.instagram.com/yllonaamadison/" : "#"} target={artist.id === 'yllona-madison' ? "_blank" : undefined} rel={artist.id === 'yllona-madison' ? "noopener noreferrer" : undefined} className="flex items-center gap-2 border border-white/20 px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
                      <Instagram size={16} /> instagram
                    </a>
                  </div>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </main>

      <footer className="py-16 bg-black border-t border-white/5 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-white/70 font-black tracking-[0.4em] text-center md:text-left lowercase">
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
