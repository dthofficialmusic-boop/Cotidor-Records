import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { releases } from '../data/releasesData';

export default function ReleaseSmartlinkPage() {
  const { id } = useParams<{ id: string }>();
  const release = releases.find((r) => r.id === id);

  if (!release) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="font-display font-black text-3xl tracking-tight mb-4 uppercase">Release Not Found</h1>
        <p className="text-white/60 font-mono text-xs uppercase tracking-widest mb-8">The requested link does not exist.</p>
        <Link 
          to="/" 
          className="font-mono text-xs tracking-widest uppercase border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all"
        >
          BACK TO HOME
        </Link>
      </div>
    );
  }

  return (
    <div className="relative min-h-[100dvh] bg-black text-white overflow-hidden flex flex-col justify-between p-6">
      
      {/* Blurred Background Glow of the Artwork */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-[-40px] bg-cover bg-center opacity-30 blur-[60px] md:blur-[100px] scale-110"
          style={{ backgroundImage: `url(${release.image})` }}
        />
        <div className="absolute inset-0 bg-black/60 z-[1]" />
      </div>

      {/* Header Container */}
      <header className="relative z-10 w-full flex justify-between items-center max-w-lg mx-auto py-4">
        <Link to="/" className="flex items-center gap-2 hover:opacity-85 transition-opacity">
          <img 
            src="https://storage.googleapis.com/forcotidorrecords/white%20logo.png" 
            alt="Cotidor Logo" 
            className="h-6 w-auto"
          />
          <span className="font-sans font-black text-xs tracking-wider uppercase">
            Cotidor Records
          </span>
        </Link>
        <Link 
          to="/" 
          className="font-mono text-[9px] text-white/40 hover:text-white transition-colors tracking-widest uppercase"
        >
          MAIN SITE ↗
        </Link>
      </header>

      {/* Main Card Content */}
      <main className="relative z-10 w-full max-w-sm mx-auto my-auto py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 350 }}
          className="bg-zinc-950/70 backdrop-blur-xl border border-white/10 rounded-xl p-5 md:p-7 shadow-[0_30px_100px_rgba(0,0,0,0.8)] flex flex-col items-center"
        >
          {/* Cover Art Container */}
          <div className="w-52 h-52 md:w-56 md:h-56 overflow-hidden bg-neutral-900 border border-white/10 rounded shadow-2xl mb-6 relative group">
            <img 
              src={release.image} 
              alt={release.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Title & Artist */}
          <span className="text-[10px] font-mono tracking-[0.4em] text-white/50 uppercase mb-1">
            {release.label === "NEW SINGLE" ? "SINGLE" : "ALBUM"} OUT NOW
          </span>
          <h1 className="font-sans font-black text-2xl md:text-3xl tracking-tighter text-white lowercase leading-tight text-center">
            {release.title}
          </h1>
          <p className="font-mono text-xs text-white/60 lowercase mt-1 mb-6 text-center">
            by {release.artistName}
          </p>

          {/* Social Platform Links / Buttons Container */}
          <div className="w-full flex flex-col gap-2.5">
            {release.spotify && (
              <a
                href={release.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full bg-zinc-900/40 border border-white/5 hover:border-white/15 hover:bg-zinc-900/80 px-4 py-3 transition-all duration-300 rounded-lg group"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 fill-current text-[#1DB954]" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207-2.377-1.454-5.37-1.783-8.892-1.022-.336.073-.668-.143-.74-.48-.073-.338.143-.668.48-.74 3.847-.88 7.143-.51 9.807 1.123.293.18.384.565.205.862zm1.226-2.724c-.226.367-.71.486-1.077.26-2.72-1.672-6.87-2.157-10.08-1.182-.413.125-.85-.107-.975-.52-.125-.414.107-.85.52-.976 3.666-1.11 8.236-.575 11.35 1.344.368.226.488.71.262 1.074zm.106-2.83c-3.26-1.937-8.652-2.115-11.77-.1.5-.758-1.57-.342-1.91.5-.338.156-.66.657-.503 1 .157.34.66.5.996.342 2.584-1.57 7.425-1.416 10.287.28.45.27.884.116 1.155-.333.27-.45.116-.883-.34-1.153z"/>
                  </svg>
                  <span className="font-sans font-bold text-[10px] tracking-wider text-white">SPOTIFY</span>
                </div>
                <span className="text-[9px] bg-white text-black font-mono tracking-wider font-bold py-1 px-3.5 uppercase rounded group-hover:bg-neutral-200 transition-colors">
                  PLAY
                </span>
              </a>
            )}

            {release.appleMusic && (
              <a
                href={release.appleMusic}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full bg-zinc-900/40 border border-white/5 hover:border-white/15 hover:bg-zinc-900/80 px-4 py-3 transition-all duration-300 rounded-lg group"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 fill-current text-[#FC3C44]" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11.16c0 .4-.21.78-.56.98l-5.5 3.14c-.17.1-.38.14-.58.14-.2 0-.41-.04-.58-.14-.35-.2-.56-.58-.56-.98V9.16c0-.4.21-.78.56-.98.35-.2.77-.2 1.16 0l5.5 3.14c.35.2.56.58.56.98v.86zM8.34 6h4.5v1.25H9.6v4h2.5v1.25H9.6v4.75H8.34V6z"/>
                  </svg>
                  <span className="font-sans font-bold text-[10px] tracking-wider text-white">APPLE MUSIC</span>
                </div>
                <span className="text-[9px] bg-white text-black font-mono tracking-wider font-bold py-1 px-3.5 uppercase rounded group-hover:bg-neutral-200 transition-colors">
                  PLAY
                </span>
              </a>
            )}

            {release.youtube && (
              <a
                href={release.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full bg-zinc-900/40 border border-white/5 hover:border-white/15 hover:bg-zinc-900/80 px-4 py-3 transition-all duration-300 rounded-lg group"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 fill-current text-[#FF0000]" viewBox="0 0 24 24">
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.002 3.002 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span className="font-sans font-bold text-[10px] tracking-wider text-white">YOUTUBE</span>
                </div>
                <span className="text-[9px] bg-white text-black font-mono tracking-wider font-bold py-1 px-3.5 uppercase rounded group-hover:bg-neutral-200 transition-colors">
                  WATCH
                </span>
              </a>
            )}

            {release.soundcloud && (
              <a
                href={release.soundcloud}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full bg-zinc-900/40 border border-white/5 hover:border-white/15 hover:bg-zinc-900/80 px-4 py-3 transition-all duration-300 rounded-lg group"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 fill-current text-[#FF7700]" viewBox="0 0 24 24">
                    <path d="M12.44 14.88c0 .08.02.16.02.24 0 .04-.02.08-.02.12v1.51c.36-.02.72-.08 1.07-.19.89-.28 1.62-.89 2.05-1.68.21-.38.33-.8.33-1.25 0-1.27-.9-2.34-2.13-2.58-.1-.02-.2-.03-.3-.03-.04 0-.08 0-.12.01-.13.36-.2.75-.2 1.15v2.64zm-5.71 1.03v.84h4.4v-4.63c-.15 0-.29.02-.44.05-.72.14-1.33.61-1.68 1.25-.13.25-.21.52-.25.8-.02.13-.03.26-.03.4h-2zm-3.82-1c.21 0 .4-.07.56-.18.1-.07.18-.16.24-.26a2.01 2.01 0 0 0 .28-1c0-.49-.18-.94-.48-1.29a2 2 0 0 0-1.5-.72 2.02 2.02 0 0 0-2 2 .03.03 0 0 0 .01.03V14.9h2.89zm6.3-9.58c0-.07-.02-.14-.02-.21 0-.04.02-.08.02-.12V3.41c-.34.02-.68.08-1 .18-.84.26-1.53.84-1.94 1.58-.2.36-.31.75-.31 1.18 0 1.2.85 2.21 2.01 2.43.09.02.19.03.28.03.04 0 .08 0 .11-.01.12-.34.19-.71.19-1.09V6.33zM.91 14c-.03-.13-.05-.26-.05-.4v-1.42c-.22.02-.45.07-.66.17a1.27 1.27 0 0 0-.75 1.16c0 .65.49 1.18 1.11 1.25.04 0 .08 0 .12-.01.07-.22.14-.45.23-.75zm2.84-2.83c0-.09-.01-.18-.01-.27.01-.05.02-.09.02-.14v-1.12c-.25.02-.5.06-.74.15a1.51 1.51 0 0 0-.96 1.41c0 .72.5 1.34 1.18 1.48.05 0 .1 0 .15-.01.1-.23.18-.48.24-.76.08-.2.12-.41.12-.74z"/>
                  </svg>
                  <span className="font-sans font-bold text-[10px] tracking-wider text-white">SOUNDCLOUD</span>
                </div>
                <span className="text-[9px] bg-white text-black font-mono tracking-wider font-bold py-1 px-3.5 uppercase rounded group-hover:bg-neutral-200 transition-colors">
                  STREAM
                </span>
              </a>
            )}
          </div>
        </motion.div>
      </main>

      {/* Footer Branding */}
      <footer className="relative z-10 w-full flex flex-col items-center gap-2 py-4 select-none">
        <div className="flex items-center justify-center gap-1.5 opacity-40">
          <img 
            src="https://storage.googleapis.com/forcotidorrecords/white%20logo.png" 
            alt="Cotidor Records" 
            className="h-2.5 w-auto"
          />
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] font-bold">SmartLink</span>
        </div>
        <span className="font-mono text-[8px] text-white/30 tracking-widest uppercase">
          © 2026 COTIDOR RECORDS ALL RIGHTS RESERVED
        </span>
      </footer>
    </div>
  );
}
