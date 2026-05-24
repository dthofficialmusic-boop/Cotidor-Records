import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { releases } from '../data/releasesData';

export default function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const currentSlide = releases[currentIdx];

  useEffect(() => {
    const isLeeLeeJ = currentSlide?.id === "what-do-i-have-to-ask";
    const delay = isLeeLeeJ ? 4000 : 8000;

    const timer = setInterval(() => {
      handleNext();
    }, delay);
    return () => clearInterval(timer);
  }, [currentIdx, currentSlide]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIdx((prev) => (prev === 0 ? releases.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIdx((prev) => (prev === releases.length - 1 ? 0 : prev + 1));
  };

  const handleListenNow = () => {
    window.open(`/release/${currentSlide.id}`, '_blank');
  };

  return (
    <section 
      id="hero"
      className="relative w-full h-[95vh] md:h-[90vh] lg:h-[95vh] min-h-[600px] overflow-hidden bg-black text-white flex flex-col justify-center"
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0 w-full h-full z-0">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Soft, less dark moody Vignette Overlays for better visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-[2]" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent z-[2]" />
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 to-transparent z-[2]" />
            <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black/40 to-transparent z-[2]" />
            
            <img 
              src={currentSlide.image} 
              alt={`${currentSlide.artistName} background`} 
              className="w-full h-full object-cover object-center scale-[1.01] brightness-90 contrast-110 saturate-[0.95]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Layer (Centered vertically by removing top heavy paddings) */}
      <div className="absolute inset-0 z-10 w-full h-full flex items-center">
        <div className="w-full max-w-4xl mx-auto px-6 py-12 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 flex flex-col items-start text-left max-w-xl py-6">
              {/* Slide Counter on Mobile / Subtitle */}
              <div className="flex items-center gap-3 mb-4">
                <span className="mono-label text-[10px] md:text-xs text-white/40 tracking-[0.5em] font-black uppercase">
                  {currentSlide.label}
                </span>
                <span className="w-6 h-[1px] bg-white/20" />
                <span className="font-mono text-[10px] md:text-xs text-white/55 tracking-widest lowercase">
                  0{currentIdx + 1} / 0{releases.length}
                </span>
              </div>

              {/* Massive Title */}
              <div className="overflow-hidden mb-4">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={currentIdx}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="font-sans font-black tracking-tighter text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl leading-[0.85] lowercase"
                  >
                    {currentSlide.title}
                  </motion.h1>
                </AnimatePresence>
              </div>

              {/* Subtitle / Artist */}
              <div className="overflow-hidden mb-8 md:mb-10">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentIdx}
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-white/70 font-sans text-base md:text-lg lg:text-xl font-medium tracking-tight normal-case"
                  >
                    {currentSlide.subtitle}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 md:gap-8 w-full sm:w-auto">
                <button 
                  onClick={handleListenNow}
                  className="group relative flex items-center justify-center gap-3 bg-white text-black font-semibold text-xs py-4 px-10 tracking-[0.3em] uppercase hover:bg-neutral-200 transition-all duration-300 w-full sm:w-auto shrink-0 select-none shadow-2xl overflow-hidden cursor-pointer"
                >
                  <span className="absolute inset-0 bg-neutral-100 transition-transform origin-left scale-x-0 group-hover:scale-x-100 duration-500 -z-10" />
                  <Play size={12} className="fill-current text-black shrink-0 animate-pulse" />
                  <span>LISTEN NOW</span>
                </button>

                {/* Platform Icons Container */}
                <div className="flex items-center gap-5 justify-center sm:justify-start">
                  {currentSlide.spotify && (
                    <a 
                      href={currentSlide.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/50 hover:text-white transition-colors p-1"
                      title="Spotify"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207-2.377-1.454-5.37-1.783-8.892-1.022-.336.073-.668-.143-.74-.48-.073-.338.143-.668.48-.74 3.847-.88 7.143-.51 9.807 1.123.293.18.384.565.205.862zm1.226-2.724c-.226.367-.71.486-1.077.26-2.72-1.672-6.87-2.157-10.08-1.182-.413.125-.85-.107-.975-.52-.125-.414.107-.85.52-.976 3.666-1.11 8.236-.575 11.35 1.344.368.226.488.71.262 1.074zm.106-2.83c-3.26-1.937-8.652-2.115-11.77-.1.5-.758-1.57-.342-1.91.5-.338.156-.66.657-.503 1 .157.34.66.5.996.342 2.584-1.57 7.425-1.416 10.287.28.45.27.884.116 1.155-.333.27-.45.116-.883-.34-1.153z"/>
                      </svg>
                    </a>
                  )}
                  {currentSlide.appleMusic && (
                    <a 
                      href={currentSlide.appleMusic}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/50 hover:text-white transition-colors p-1"
                      title="Apple Music"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11.16c0 .4-.21.78-.56.98l-5.5 3.14c-.17.1-.38.14-.58.14-.2 0-.41-.04-.58-.14-.35-.2-.56-.58-.56-.98V9.16c0-.4.21-.78.56-.98.35-.2.77-.2 1.16 0l5.5 3.14c.35.2.56.58.56.98v.86zM8.34 6h4.5v1.25H9.6v4h2.5v1.25H9.6v4.75H8.34V6z"/>
                      </svg>
                    </a>
                  )}
                  {currentSlide.youtube && (
                    <a 
                      href={currentSlide.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/50 hover:text-white transition-colors p-1"
                      title="YouTube"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.002 3.002 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  )}
                  {currentSlide.soundcloud && (
                    <a 
                      href={currentSlide.soundcloud}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/50 hover:text-white transition-colors p-1"
                      title="SoundCloud"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12.44 14.88c0 .08.02.16.02.24 0 .04-.02.08-.02.12v1.51c.36-.02.72-.08 1.07-.19.89-.28 1.62-.89 2.05-1.68.21-.38.33-.8.33-1.25 0-1.27-.9-2.34-2.13-2.58-.1-.02-.2-.03-.3-.03-.04 0-.08 0-.12.01-.13.36-.2.75-.2 1.15v2.64zm-5.71 1.03v.84h4.4v-4.63c-.15 0-.29.02-.44.05-.72.14-1.33.61-1.68 1.25-.13.25-.21.52-.25.8-.02.13-.03.26-.03.4h-2zm-3.82-1c.21 0 .4-.07.56-.18.1-.07.18-.16.24-.26a2.01 2.01 0 0 0 .28-1c0-.49-.18-.94-.48-1.29a2 2 0 0 0-1.5-.72 2.02 2.02 0 0 0-2 2 .03.03 0 0 0 .01.03V14.9h2.89zm6.3-9.58c0-.07-.02-.14-.02-.21 0-.04.02-.08.02-.12V3.41c-.34.02-.68.08-1 .18-.84.26-1.53.84-1.94 1.58-.2.36-.31.75-.31 1.18 0 1.2.85 2.21 2.01 2.43.09.02.19.03.28.03.04 0 .08 0 .11-.01.12-.34.19-.71.19-1.09V6.33zM.91 14c-.03-.13-.05-.26-.05-.4v-1.42c-.22.02-.45.07-.66.17a1.27 1.27 0 0 0-.75 1.16c0 .65.49 1.18 1.11 1.25.04 0 .08 0 .12-.01.07-.22.14-.45.23-.75zm2.84-2.83c0-.09-.01-.18-.01-.27.01-.05.02-.09.02-.14v-1.12c-.25.02-.5.06-.74.15a1.51 1.51 0 0 0-.96 1.41c0 .72.5 1.34 1.18 1.48.05 0 .1 0 .15-.01.1-.23.18-.48.24-.76.08-.2.12-.41.12-.74z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Right Controls Column */}
            <div className="lg:col-span-4 flex items-center justify-between lg:justify-end gap-6 w-full lg:w-auto">
              {/* Pagination indicators */}
              <div className="flex items-center gap-2.5">
                {releases.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > currentIdx ? 1 : -1);
                      setCurrentIdx(idx);
                    }}
                    className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer ${
                      currentIdx === idx ? "w-8 bg-white" : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Arrow Buttons */}
              <div className="flex items-center gap-3">
                <button 
                  onClick={handlePrev}
                  className="w-11 h-11 flex items-center justify-center rounded-full border border-white/20 hover:border-white/50 hover:bg-white/10 text-white transition-all active:scale-95 shrink-0 cursor-pointer"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={18} />
                </button>
                <button 
                  onClick={handleNext}
                  className="w-11 h-11 flex items-center justify-center rounded-full border border-white/20 hover:border-white/50 hover:bg-white/10 text-white transition-all active:scale-95 shrink-0 cursor-pointer"
                  aria-label="Next slide"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
