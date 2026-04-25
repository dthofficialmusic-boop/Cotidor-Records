import { motion } from 'motion/react';
export default function Hero() {
  return (
    <header className="relative min-h-[80dvh] w-full flex flex-col items-center justify-center px-6 overflow-hidden bg-black">
      {/* Hero Video Background - Seamless Integration */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain md:object-cover mix-blend-screen opacity-90 mt-10 md:mt-0 md:-translate-y-16 md:scale-95"
        >
          <source src="https://storage.googleapis.com/forcotidorrecords/0422%20(1)(2).mp4" type="video/mp4" />
        </video>
        {/* Subtle vignette/fade to ensure edges are perfect */}
        <div className="absolute inset-0 bg-radial-gradient(circle, transparent 20%, black 100%) pointer-events-none" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center justify-end h-full pb-10 mt-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <h1 className="font-sans text-2xl md:text-4xl font-bold uppercase tracking-normal text-white mb-2 shadow-black drop-shadow-2xl mix-blend-normal">
            COTIDOR RECORDS
          </h1>
          <p className="mono-label text-xs md:text-sm text-white/80 tracking-[0.4em] uppercase font-bold shadow-black drop-shadow-2xl">
            An independent record label for the artist, for the people.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 5, 0] }}
            transition={{ opacity: { delay: 1, duration: 0.8 }, y: { repeat: Infinity, duration: 2 } }}
            className="mt-8 mono-label text-[10px] md:text-xs text-white/40 tracking-[0.4em] uppercase shadow-black drop-shadow-2xl"
          >
            SCROLL &darr;
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}

