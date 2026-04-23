import { motion } from 'motion/react';

const artists = [
  "AKA dollie",
  "Alex McAllen",
  "Cherri sue",
  "Chris The Guy",
  "Christopher Lucio",
  "MH4JA3 KOPIA",
  "YLLONA MADISON",
  "yunah"
];

export default function JoinSection() {
  return (
    <section id="artists" className="relative w-full min-h-screen flex items-center justify-center px-6 overflow-hidden bg-black group">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-60 grayscale transition-all duration-1000 group-hover:scale-110"
        >
          <source src="/join-us.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Floating Section Label - Absolute to not affect cloud centering */}
      <div className="absolute top-12 left-0 right-0 z-20 text-center pointer-events-none">
        <motion.span 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mono-label text-white tracking-[0.8em] font-black text-xs md:text-sm uppercase bg-black/20 px-4 py-2 backdrop-blur-sm rounded-full"
        >
          Artists
        </motion.span>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-20 py-32">
        {/* ARTISTS CLOUD */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-12 md:gap-y-10"
        >
          {artists.map((artist, i) => (
            <motion.div
              key={artist}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="font-display text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter cursor-crosshair transition-all duration-300 select-none text-white hover:text-white hover:scale-110 text-center"
            >
              {artist}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
