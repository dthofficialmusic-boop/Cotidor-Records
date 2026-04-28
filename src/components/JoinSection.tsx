import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { artistsData as artists } from '../data/artists';

function ArtistCard({ artist, className, index }: { artist: any, className: string, index: number, key?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`group relative flex flex-col ${className} focus:outline-none`}
    >
      <Link to={`/artist/${artist.id}`} className="block focus:outline-none" aria-label={`View ${artist.name}`}>
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0a0a0a] cursor-pointer">
          <img 
            src={artist.image} 
            alt={artist.name} 
            className={`absolute inset-0 w-full h-full object-cover opacity-90 transition-all duration-700 ease-out group-hover:scale-105 ${artist.grainy ? 'contrast-125 saturate-150 brightness-110 blur-[0.4px] sepia-[.15] hue-rotate-[5deg]' : ''}`} 
            referrerPolicy="no-referrer"
          />
          {artist.grainy && (
            <div className="absolute inset-0 z-[5] mix-blend-overlay opacity-[0.1] bg-neutral-400 pointer-events-none" style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')" }} />
          )}
          <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end z-10 w-full">
            <div className="w-full h-[1px] bg-white opacity-40"></div>
            <div className="p-4 md:p-6 pt-3 md:pt-4 w-full bg-black">
              <h3 className="font-sans font-bold text-2xl md:text-lg lg:text-xl text-white lowercase tracking-normal whitespace-nowrap overflow-hidden text-ellipsis text-left">
                {artist.name}
              </h3>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function JoinSection() {
  return (
    <section id="artists" className="relative w-full flex flex-col items-start justify-start px-6 pt-16 pb-32 bg-black text-white">
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        {/* ARTISTS GRID */}
        <div className="flex flex-col w-full border border-white/40">
          {/* Section Header (Now inside table) */}
          <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/40 bg-black">
            <div>
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-mono text-xs md:text-sm text-white/50 lowercase mb-2"
              >
                explore
              </motion.p>
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display tracking-normal font-black text-4xl md:text-5xl lowercase text-left"
              >
                our artists
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="hidden md:flex flex-col items-start md:items-end justify-end mt-8 md:mt-0"
            >
              <p className="font-mono text-xs md:text-sm text-white/50 lowercase mb-2">want to be a cotidor artist?</p>
              <Link to="/apply" className="font-display tracking-normal font-black text-4xl md:text-5xl lowercase text-left md:text-right hover:text-white/80 transition-colors">
                apply now
              </Link>
            </motion.div>
          </div>

          {/* Row 1 - 3 Artists */}
          <div className="flex flex-col md:flex-row w-full md:border-b border-white/40">
            {artists.slice(0, 3).map((artist, i) => (
              <ArtistCard
                key={artist.name}
                artist={artist}
                index={i}
                className={`w-full md:w-1/3 border-b md:border-b-0 ${i !== 2 ? 'md:border-r' : ''} border-white/40 bg-black`}
              />
            ))}
          </div>

          {/* Row 2 - Remaining Artists (Centered) */}
          <div className="flex flex-col md:flex-row w-full bg-black justify-center">
            {artists.slice(3).map((artist, i) => (
              <ArtistCard
                key={artist.name}
                artist={artist}
                index={i + 3}
                className={`w-full md:w-1/3 border-b md:border-b-0 ${i !== (artists.slice(3).length - 1) ? 'md:border-r' : ''} border-white/40 bg-black last:border-b-0`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Apply Now (Below grid) */}
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex md:hidden flex-col items-start justify-end mt-12"
          >
            <p className="font-mono text-xs md:text-sm text-white/50 lowercase mb-2">want to be a cotidor artist?</p>
            <Link to="/apply" className="font-display tracking-normal font-black text-4xl md:text-5xl lowercase text-left hover:text-white/80 transition-colors">
              apply now
            </Link>
        </motion.div>
      </div>
    </section>
  );
}

