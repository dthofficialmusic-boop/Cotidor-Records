import { motion } from 'motion/react';
import { Artist } from '../types';

const artists: Artist[] = [
  { id: '1', name: 'not lucio', genre: 'Industrial Techno', imageUrl: 'https://images.unsplash.com/photo-1543132220-4bf3de82180c?q=80&w=1887&auto=format&fit=crop' },
  { id: '2', name: 'Lumina', genre: 'Ambient Core', imageUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=1760&auto=format&fit=crop' },
  { id: '3', name: 'Vector Void', genre: 'Experimental Elec', imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop' },
];

export default function ArtistSection() {
  return (
    <section id="artists" className="py-24 px-6 border-t border-brand-border">
      <div className="flex justify-between items-baseline mb-20">
        <h2 className="font-display text-4xl uppercase font-bold tracking-tighter">Artists</h2>
        <span className="mono-label">Talent Index / 2026</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-brand-border">
        {artists.map((artist, i) => (
          <motion.div
            key={artist.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="group cursor-pointer border-r last:border-r-0 border-brand-border aspect-[3/4] relative overflow-hidden"
          >
            <img 
              src={artist.imageUrl} 
              alt={artist.name} 
              className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
            
            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="mono-label text-white/60 mb-1 block">{artist.genre}</span>
              <h3 className="font-display text-2xl uppercase font-bold text-white">{artist.name}</h3>
            </div>
            
            {/* Corner ID */}
            <div className="absolute top-4 right-6 mono-label opacity-0 group-hover:opacity-100 transition-opacity">
              {`0${i + 1}`}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
