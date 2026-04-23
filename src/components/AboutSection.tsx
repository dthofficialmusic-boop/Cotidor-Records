import { motion } from 'motion/react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-white text-black uppercase">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12 flex flex-col items-center text-center"
        >
          <div className="flex flex-col items-center gap-4">
            <span className="mono-label text-sm md:text-base text-black tracking-[0.8em] font-black">Origin Story</span>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tighter leading-none">
              Defining the <br />
              New Avant-Garde
            </h2>
          </div>

          <div className="pt-8 max-w-2xl">
            <div className="space-y-6">
              <p className="text-lg text-black leading-relaxed font-bold">
                Founded in the intersection of digital decay and sonic precision, Cotidor Records exists as a catalyst for artists who operate on the fringes of traditional structures.
              </p>
              <p className="text-lg text-black leading-relaxed font-bold">
                We don't just release music; we curate experiences that challenge the auditory landscape. Our mission is to provide a platform where complexity is celebrated and the unconventional becomes the standard.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
