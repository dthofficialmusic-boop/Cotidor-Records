import { motion } from 'motion/react';

export default function ValuesSection() {
  return (
    <section id="values" className="pt-24 pb-16 px-6 bg-black text-white relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-center"
        >
          <motion.span 
            animate={{ letterSpacing: ["0.8em", "1em", "0.8em"] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="mono-label mb-12 block text-white font-black text-sm md:text-base border-b-2 border-white inline-block pb-1"
          >
            Our Ethos
          </motion.span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-8xl font-bold lowercase tracking-tighter leading-[1.3] mx-auto max-w-4xl">
            <motion.span 
              animate={{ rotate: [-1.5, 1.5, -1.5], y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="bg-white text-black inline-block relative z-10 px-4 py-2 lg:-ml-4 origin-center"
            >
              Free help for artists.
            </motion.span>
            <br /> 
            <motion.span 
              animate={{ rotate: [1.5, -1.5, 1.5], y: [5, -5, 5] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="bg-white text-black inline-block relative z-0 px-4 py-2 origin-center mt-2 sm:mt-4"
            >
              No contracts. Ever.
            </motion.span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
