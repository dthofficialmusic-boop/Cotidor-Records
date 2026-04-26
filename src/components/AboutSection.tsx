import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-white text-black uppercase relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
           
           <div className="lg:col-span-5 space-y-8">
             <div className="flex flex-col gap-6">
               <span className="mono-label text-sm text-black/50 tracking-[0.8em] font-black border-b border-black/10 pb-6 inline-block w-fit">
                 ORIGIN STORY
               </span>
               <motion.h2 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="font-display text-6xl sm:text-8xl lg:text-[7rem] font-black tracking-tighter leading-[0.85]"
               >
                 DEFINING<br />
                 THE NEW<br />
                 AVANT-<br />
                 GARDE.
               </motion.h2>
             </div>
           </div>

           <div className="lg:col-span-7 lg:pt-32 space-y-12">
              <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="space-y-8"
              >
                <p className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tighter leading-[1.1] lowercase text-black/90">
                  founded in the intersection of digital decay and sonic precision, cotidor records exists as a catalyst for artists who operate on the fringes of traditional structures.
                </p>
                <div className="h-px w-full bg-black/10" />
                <p className="text-lg sm:text-xl font-medium text-black/70 leading-relaxed max-w-2xl lowercase">
                  we don't just release music; we curate experiences that challenge the auditory landscape. our mission is to provide a platform where complexity is celebrated and the unconventional becomes the standard.
                </p>
              </motion.div>

              <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
              >
                <Link 
                  to="/about"
                  className="group relative inline-flex items-center gap-4 px-12 py-6 bg-black text-white text-xs font-black tracking-[0.4em] hover:bg-black/90 transition-all active:scale-95 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-4">
                    ABOUT US
                    <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </span>
                </Link>
              </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
}
