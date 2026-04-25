import { motion } from 'motion/react';

const artists = [
  { name: "Christopher Lucio", image: "https://storage.googleapis.com/forcotidorrecords/ChristopherLucio2.jpg", hoverImage: "https://storage.googleapis.com/forcotidorrecords/ChristopherLucio1.png" },
  { name: "GRLVENOM", image: "https://storage.googleapis.com/forcotidorrecords/GRLVENOM1.png", hoverImage: "https://storage.googleapis.com/forcotidorrecords/GRLVENOM2.png", grainy: true },
  { name: "WithPrivilege", image: "https://storage.googleapis.com/forcotidorrecords/WithPrivilege1.png", hoverImage: "https://storage.googleapis.com/forcotidorrecords/WithPrivilege2.png", grainy: true },
  { name: "Yllona Madison", image: "https://storage.googleapis.com/forcotidorrecords/YllonaMadison1.png", hoverImage: "https://storage.googleapis.com/forcotidorrecords/YllonaMadison2.png", grainy: true },
  { name: "Yohara Scott", image: "https://storage.googleapis.com/forcotidorrecords/KaleemiScott2.png", hoverImage: "https://storage.googleapis.com/forcotidorrecords/KaleemiScott1.png", grainy: true }
];

export default function JoinSection() {
  return (
    <section id="artists" className="relative w-full flex flex-col items-start justify-start px-6 pt-24 pb-32 bg-black text-white">
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        {/* Section Label */}
        <div className="mb-12">
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

        {/* ARTISTS GRID */}
        <div className="flex flex-col w-full border border-white/40">
          {/* Row 1 - 3 Artists */}
          <div className="flex flex-col md:flex-row w-full md:border-b border-white/40">
            {artists.slice(0, 3).map((artist, i) => (
              <motion.div
                key={artist.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`group relative flex flex-col w-full md:w-1/3 border-b md:border-b-0 ${i !== 2 ? 'md:border-r' : ''} border-white/40 bg-black`}
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0a0a0a]">
                  <img 
                    src={artist.image} 
                    alt={artist.name} 
                    className={`absolute inset-0 w-full h-full object-cover opacity-90 transition-all duration-700 ease-out ${artist.hoverImage ? 'group-hover:opacity-0 group-hover:scale-105' : 'group-hover:scale-105'} ${artist.grainy ? 'contrast-125 saturate-150 brightness-110 blur-[0.4px] sepia-[.15] hue-rotate-[5deg]' : ''}`} 
                    referrerPolicy="no-referrer"
                  />
                  {artist.hoverImage && (
                    <img 
                      src={artist.hoverImage} 
                      alt={`${artist.name} alternate`} 
                      className={`absolute inset-0 w-full h-full object-cover opacity-0 scale-95 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-out ${artist.grainy ? 'contrast-125 saturate-150 brightness-110 blur-[0.4px] sepia-[.15] hue-rotate-[5deg]' : ''}`} 
                      referrerPolicy="no-referrer"
                    />
                  )}
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
              </motion.div>
            ))}
          </div>

          {/* Row 2 - 2 Artists */}
          <div className="flex flex-col md:flex-row w-full justify-center bg-black">
            {artists.slice(3, 5).map((artist, i) => (
              <motion.div
                key={artist.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 3) * 0.1, duration: 0.5 }}
                className={`group relative flex flex-col w-full md:w-1/3 border-b md:border-b-0 ${i === 0 ? 'md:border-r md:border-l' : 'md:border-r'} border-white/40 bg-black last:border-b-0`}
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0a0a0a]">
                  <img 
                    src={artist.image} 
                    alt={artist.name} 
                    className={`absolute inset-0 w-full h-full object-cover opacity-90 transition-all duration-700 ease-out ${artist.hoverImage ? 'group-hover:opacity-0 group-hover:scale-105' : 'group-hover:scale-105'} ${artist.grainy ? 'contrast-125 saturate-150 brightness-110 blur-[0.4px] sepia-[.15] hue-rotate-[5deg]' : ''}`} 
                    referrerPolicy="no-referrer"
                  />
                  {artist.hoverImage && (
                    <img 
                      src={artist.hoverImage} 
                      alt={`${artist.name} alternate`} 
                      className={`absolute inset-0 w-full h-full object-cover opacity-0 scale-95 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-out ${artist.grainy ? 'contrast-125 saturate-150 brightness-110 blur-[0.4px] sepia-[.15] hue-rotate-[5deg]' : ''}`} 
                      referrerPolicy="no-referrer"
                    />
                  )}
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

