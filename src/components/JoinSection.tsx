import { motion } from 'motion/react';

const artists = [
  { name: "Christopher Lucio", image: "https://storage.googleapis.com/forcotidorrecords/ChristopherLucio1.png" },
  { name: "GRLVENOM", image: "https://storage.googleapis.com/forcotidorrecords/GRLVENOM1.png" },
  { name: "WithPrivilege", image: "https://storage.googleapis.com/forcotidorrecords/WithPrivilege1.png" },
  { name: "Yllona Madison", image: "https://storage.googleapis.com/forcotidorrecords/YllonaMadison1.png" },
  { name: "Yohara Scott", image: "https://storage.googleapis.com/forcotidorrecords/KaleemiScott1.png" }
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
        <div className="flex flex-col w-full border border-white/20">
          {/* Row 1 - 3 Artists */}
          <div className="flex flex-col md:flex-row w-full border-b border-white/20">
            {artists.slice(0, 3).map((artist, i) => (
              <motion.div
                key={artist.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`group relative flex flex-col w-full md:w-1/3 border-b md:border-b-0 ${i !== 2 ? 'md:border-r' : ''} border-white/20 last:border-b-0 bg-black`}
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0a0a0a]">
                  <img 
                    src={artist.image} 
                    alt={artist.name} 
                    className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <h3 className="font-sans font-bold text-base md:text-lg lg:text-xl text-white lowercase tracking-normal whitespace-nowrap overflow-hidden text-ellipsis text-left">
                      {artist.name}
                    </h3>
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
                className={`group relative flex flex-col w-full md:w-1/3 border-b md:border-b-0 ${i === 0 ? 'md:border-r md:border-l' : 'md:border-r'} border-white/20 last:border-b-0 bg-black`}
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0a0a0a]">
                  <img 
                    src={artist.image} 
                    alt={artist.name} 
                    className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <h3 className="font-sans font-bold text-base md:text-lg lg:text-xl text-white lowercase tracking-normal whitespace-nowrap overflow-hidden text-ellipsis text-left">
                      {artist.name}
                    </h3>
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

