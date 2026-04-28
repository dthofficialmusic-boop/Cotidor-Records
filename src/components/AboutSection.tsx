import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 bg-white text-black relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-5 pointer-events-none">
        <motion.div
           animate={{ rotate: -360 }}
           transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
        >
          <svg width="600" height="600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
             <circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path>
          </svg>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-10"
          >
            <div className="flex flex-col items-start gap-4">
              <span className="mono-label text-sm text-black/50 tracking-[0.8em] font-black uppercase border-b-2 border-black pb-2">
                Origin Story
              </span>
              <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] lowercase">
                defining the <br />
                <span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>new avant-garde.</span>
              </h2>
            </div>
            
            <div className="flex gap-4">
              <Link 
                to="/about"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-5 bg-black text-white text-xs font-black tracking-[0.4em] uppercase hover:bg-black/80 transition-all active:scale-95"
              >
                ABOUT US
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -left-8 top-0 w-1 h-full bg-black/10 hidden lg:block" />
            <div className="space-y-8 lg:pl-8">
              <p className="text-xl md:text-2xl font-medium text-black leading-snug lowercase tracking-tight">
                founded in the intersection of digital decay and sonic precision, cotidor records exists as a catalyst for artists who operate on the fringes of traditional structures.
              </p>
              <div className="w-16 h-1 bg-black/20" />
              <p className="text-base md:text-lg text-black/60 font-medium leading-relaxed lowercase">
                we don't just release music; we curate experiences that challenge the auditory landscape. our mission is to provide a platform where complexity is celebrated and the unconventional becomes the standard.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
