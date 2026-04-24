import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onAboutClick?: () => void;
}

export default function AboutSection({ onAboutClick }: AboutSectionProps) {
  return (
    <section id="about" className="py-24 px-6 bg-white text-black uppercase">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center space-y-12"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="mono-label text-sm md:text-base text-black tracking-[0.8em] font-black">Origin Story</span>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tighter leading-none">
              Defining the <br />
              New Avant-Garde
            </h2>
          </div>

          <div className="max-w-2xl space-y-8">
            <div className="space-y-3">
              <p className="text-base font-medium text-black/80 leading-relaxed">
                Founded in the intersection of digital decay and sonic precision, Cotidor Records exists as a catalyst for artists who operate on the fringes of traditional structures.
              </p>
              <p className="text-base font-medium text-black/80 leading-relaxed">
                We don't just release music; we curate experiences that challenge the auditory landscape. Our mission is to provide a platform where complexity is celebrated and the unconventional becomes the standard.
              </p>
            </div>

            <button 
              onClick={onAboutClick}
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-black text-white text-xs font-black tracking-[0.4em] hover:bg-black/90 transition-all active:scale-95"
            >
              ABOUT US
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
