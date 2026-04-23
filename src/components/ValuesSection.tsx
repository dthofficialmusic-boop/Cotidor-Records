import { motion } from 'motion/react';

const values = [
  "Your vision leads.",
  "You keep full ownership.",
  "You take the lion's share.",
  "You see every number.",
  "No long-term traps.",
  "You make the final call."
];

export default function ValuesSection() {
  return (
    <section id="values" className="pt-12 pb-24 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <span className="mono-label mb-8 block text-white tracking-[0.8em] font-black text-sm md:text-base border-b-2 border-white inline-block pb-1">Our Ethos</span>
          <h2 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.9] mx-auto max-w-4xl">
            <span className="bg-white text-black inline">Global team.</span><br /> 
            <span className="bg-white text-black inline">Real resources.</span><br /> 
            <span className="bg-white text-black inline">No compromise.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 border-t border-brand-border pt-12">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-baseline gap-6 pb-6 border-b border-brand-border/30 last:border-0"
            >
              <span className="mono-label text-white">{`0${i + 1}`}</span>
              <h3 className="font-display uppercase font-medium tracking-tight text-xl md:text-2xl text-white hover:text-white transition-colors">
                {value}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
