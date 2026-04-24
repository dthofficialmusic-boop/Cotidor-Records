import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface MerchSectionProps {
  onStoreClick?: () => void;
}

export default function MerchSection({ onStoreClick }: MerchSectionProps) {
  const products = [
    { 
      name: "COTIDOR RECORDS - ADULT TEE", 
      price: "VIEW ITEM", 
      url: "https://cotidor-records.teemill.com/product/cotidor-records-adult-tee-womens/",
      image: "https://images.podos.io/e59071983ab9e0b6fb5469ba4a47598afbeadc9f1c56264e.png.webp?w=1080&v=2"
    },
    { 
      name: "COTIDOR RECORDS - ADULT LONG SLEEVE TEE", 
      price: "VIEW ITEM",
      url: "https://cotidor-records.teemill.com/product/cotidor-records-adult-long-sleeve-tee-white-ver-men/",
      image: "https://images.podos.io/aa44f22e620336458d989384fb969aa9eba581c38043cdd9.png.webp?w=1080&v=2"
    },
    { 
      name: "COTIDOR RECORDS - VEST TOP", 
      price: "VIEW ITEM",
      url: "https://cotidor-records.teemill.com/product/cotidor-records-vest-top-women/",
      image: "https://images.podos.io/b87819931d9c931f9022800b0cf3faecd0cf5f89e55ad6b7.png.webp?w=1080&v=2"
    },
  ];

  const handleProductClick = (url?: string) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else if (onStoreClick) {
      onStoreClick();
    }
  };

  return (
    <section className="py-24 px-6 bg-black text-white uppercase border-t border-white/10">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="space-y-4 max-w-lg">
             <span className="mono-label text-sm text-white/40 tracking-[0.8em] font-black block">HARDWARE</span>
             <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tighter leading-none">
                UNIFORMS OF <br/> THE FRINGE
             </h2>
             <p className="text-white/60 text-xs tracking-widest uppercase mt-4 block">
                PRODUCED IN PARTNERSHIP WITH <span className="text-white font-black">TEEMILL</span>
             </p>
          </div>
          <button 
            onClick={onStoreClick}
            className="group flex flex-shrink-0 items-center justify-center gap-2 px-8 py-4 bg-white text-black text-xs font-black tracking-[0.4em] hover:bg-white/90 transition-all active:scale-95"
          >
            SHOP ALL PRODUCTS
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="group cursor-pointer"
               onClick={() => handleProductClick(p.url)}
             >
                <div className="aspect-[4/5] bg-white/5 relative overflow-hidden mb-4 border border-white/10 group-hover:bg-white/10 transition-colors flex items-center justify-center">
                    <img 
                      src={p.image || "https://storage.googleapis.com/forcotidorrecords/white%20logo.png"} 
                      alt={p.name} 
                      className={p.image ? "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" : "w-16 h-16 object-contain opacity-20 group-hover:scale-110 transition-transform duration-700"} 
                    />
                </div>
                <div className="flex flex-col items-start gap-3 mt-2">
                    <h3 className="text-sm font-black tracking-widest text-white/80 group-hover:text-white transition-colors text-left leading-snug">{p.name}</h3>
                    <span className="text-[10px] font-black tracking-[0.2em] uppercase px-4 py-2 border border-white/10 text-white/40 group-hover:border-white/30 group-hover:text-white transition-all whitespace-nowrap">
                        {p.price}
                    </span>
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
