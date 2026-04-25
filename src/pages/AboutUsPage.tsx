import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface AboutUsPageProps {
  onBack: () => void;
}

export default function AboutUsPage({ onBack }: AboutUsPageProps) {
  return (
    <div className="min-h-[100dvh] bg-black text-white font-sans selection:bg-white selection:text-black flex flex-col uppercase">
      {/* HEADER */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-white/10 px-6 h-20 flex justify-between items-center">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-[10px] font-black text-white/50 hover:text-white transition-colors tracking-[0.4em]"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> BACK TO MAIN
        </button>
        <img src="https://storage.googleapis.com/forcotidorrecords/white%20logo.png" alt="Cotidor Logo" className="h-8 w-auto" />
      </nav>

      <main className="flex-grow pt-40 pb-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-32">
          {/* Hero Section */}
          <section className="text-center space-y-12">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mono-label text-xs md:text-sm tracking-[1em] font-black text-white/40 block"
            >
              IDENTITY / ORIGIN
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-[10rem] font-display font-black tracking-tighter leading-[0.85] text-white lowercase ombre-text-hover cursor-default"
            >
              about us
            </motion.h1>
          </section>

          {/* Core Identity Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 pt-24 border-t border-white/10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-black tracking-tight text-white/70">THE PHILOSOPHY</h3>
              <p className="text-lg font-medium text-white/90 leading-tight">
                Cotidor Records was founded on the belief that music should be a visceral confrontation. We exist as a platform for artists who refuse to accommodate the industry standards of accessibility and simplicity.
              </p>
              <p className="text-lg font-medium text-white/90 leading-tight">
                Our approach is rooted in digital decay and precision. We find beauty in the artifacts of synthesis and the power in unconventional rhythmic structures.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-black tracking-tight text-white/70">THE MISSION</h3>
              <p className="text-lg font-medium text-white/90 leading-tight">
                To provide a global ecosystem where the avant-garde can flourish without compromise. We bridge the gap between experimental soundscapes and high-performance resources.
              </p>
              <div className="pt-4 flex flex-col gap-4">
                {[
                  "Artist-first infrastructure",
                  "Digital-native distribution",
                  "Sonic integrity above all"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="h-[2px] w-4 bg-white/20 group-hover:w-8 group-hover:bg-white transition-all duration-500"></div>
                    <span className="text-[10px] font-black tracking-[0.3em] text-white/40 group-hover:text-white transition-colors uppercase">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Large Quote */}
          <section className="py-48 text-center bg-white text-black -mx-6 px-6">
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-display font-black leading-[0.9] tracking-tighter max-w-4xl mx-auto italic uppercase"
            >
              "WE CONSTRUCT THE TOOLS FOR THOSE WHO BUILD THE FUTURE IN THE SHADOWS OF THE PRESENT."
            </motion.p>
          </section>

          {/* Final Statement */}
          <section className="space-y-12 text-center max-w-3xl mx-auto pb-24">
             <span className="mono-label text-[10px] tracking-[0.6em] text-white/30 uppercase block">A Ryzer Music Group Venture</span>
             <h4 className="text-2xl md:text-4xl font-display font-black text-white leading-tight uppercase tracking-tight">
                Based in Florida and operating globally, we are a collective of sonic architects and curator-disruptors.
             </h4>
          </section>
        </div>
      </main>

      <footer className="py-16 bg-black border-t border-white/5 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-white/20 font-black uppercase tracking-[0.4em] text-center md:text-left">
          <div className="space-y-1">
            <p>© 2026 COTIDOR RECORDS</p>
            <p>RYZER MUSIC GROUP LLC</p>
          </div>
          <img src="https://storage.googleapis.com/forcotidorrecords/white%20logo.png" alt="Cotidor" className="h-6 w-auto opacity-10" />
          <p>5031 SW 199TH AVE, FL 33332</p>
        </div>
      </footer>
    </div>
  );
}
