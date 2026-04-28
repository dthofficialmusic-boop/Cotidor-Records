import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowLeft, ArrowDown, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';

export default function AboutUsPage() {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="min-h-[100dvh] bg-black text-white font-sans selection:bg-white selection:text-black flex flex-col lowercase overflow-hidden">
      <main className="flex-grow pt-20 pb-0 px-0">
        <div className="w-full">
          
          {/* Hero Section */}
          <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
            {/* Animated Background Graphic */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.05] z-0">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, ease: "linear", duration: 80 }}
              >
                <svg width="600" height="600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path>
                </svg>
              </motion.div>
            </div>

            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mono-label items-center gap-4 text-xs md:text-sm tracking-[1em] font-black text-white/50 flex lowercase mb-12"
            >
              <div className="w-12 h-px bg-white/20 hidden sm:block"></div>
              identity / origin
              <div className="w-12 h-px bg-white/20 hidden sm:block"></div>
            </motion.span>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10 w-full max-w-7xl mx-auto"
            >
              <h1 className="text-[15vw] md:text-[12vw] font-display font-black tracking-tighter leading-[0.8] text-white lowercase cursor-default">
                about<br/>
                <span className="text-transparent relative inline-block group" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.9)' }}>
                  cotidor.
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 1, ease: "anticipate" }}
                    className="absolute -bottom-4 md:-bottom-8 left-0 w-full h-[0.1em] bg-white origin-left"
                  />
                </span>
              </h1>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute bottom-16 left-1/2 -translate-x-1/2"
            >
              <ArrowDown className="text-white/50" />
            </motion.div>
          </section>



          {/* Mission & Vision */}
          <div className="relative bg-white text-black py-0 border-y border-white/10 overflow-hidden">
             {/* Decorative Background */}
             <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')", backgroundSize: '200px' }} />

            <div className="max-w-[120rem] mx-auto flex flex-col lg:flex-row relative z-10 w-full">
              
              {/* Sticky Left - The Statement */}
              <div className="w-full lg:w-1/2 lg:sticky lg:top-0 h-auto lg:h-[100vh] flex flex-col justify-center px-6 md:px-16 py-24 lg:py-0 border-b lg:border-b-0 lg:border-r border-black/10">
                <div className="mb-4 lg:mb-8 inline-flex items-center gap-4">
                  <div className="w-12 h-0.5 bg-black"></div>
                  <span className="mono-label font-black tracking-[0.4em] uppercase text-xs md:text-sm">The Philosophy</span>
                </div>
                <h2 className="text-[15vw] lg:text-[7vw] font-display font-black leading-[0.85] tracking-tighter mb-8 lg:mb-12 lowercase pr-4">
                  we're not here <br/> <span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>to own you.</span>
                </h2>
                <div className="w-24 h-2 bg-black mb-8 lg:mb-12" />
                <p className="text-xl md:text-3xl font-medium tracking-tight opacity-80 leading-[1.3] max-w-xl lowercase">
                  cotidor records exists to serve artists, not the other way around. your vision. your voice. your timeline.
                </p>
                <div className="hidden lg:block absolute bottom-12 right-12">
                   <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }}>
                       <span className="text-6xl text-black/10 font-bold block">✶</span>
                   </motion.div>
                </div>
              </div>
              
              {/* Scrolling Right - The Details */}
              <div className="w-full lg:w-1/2 bg-black text-white border-l border-white/10">
                 {[
                  {
                    title: "artist-first",
                    content: "founded in 2020 and relaunched in 2026, cotidor records is an artist-first record label. regardless of experience, genre, or background, we empower artists and prioritize your vision over everything."
                  },
                  {
                    title: "supplemental",
                    content: "we are a supplemental label — a creative and operational partner that steps in exactly where you need us. if you already know how to distribute your music, great. keep doing it."
                  },
                  {
                    title: "operational help",
                    content: "but for everything else — marketing, playlist pitching, cover art, social strategy, release coordination, press outreach, and day-to-day logistics — we've got you covered."
                  },
                  {
                    title: "total control",
                    content: "and we do it with zero pressure. you stay in full control of your sound, your schedule, and your career. you run the show."
                  },
                  {
                    title: "no contracts",
                    content: "there are no hidden fees, no ownership grabs, and no uncomfortable contracts. if you ever want to walk away, you're free to leave — no hard feelings."
                  }
                 ].map((block, idx) => (
                    <div 
                      key={idx}
                      className="min-h-screen sticky top-0 flex flex-col justify-between px-6 md:px-16 lg:px-24 py-16 md:py-24 border-t border-white/20 overflow-hidden group bg-black hover:bg-[#f2f2f2] transition-colors duration-700 origin-top shadow-[0_-20px_40px_rgba(0,0,0,0.5)] cursor-crosshair"
                    >
                      <div className="relative z-10 w-full mt-8 md:mt-12">
                         <div className="flex justify-between items-start opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="flex items-center gap-4">
                               <span className="font-mono text-xs md:text-sm font-black tracking-widest uppercase text-white group-hover:text-black transition-colors duration-500">/ Protocol</span>
                            </div>
                            <div className="font-mono text-[10px] tracking-widest uppercase font-bold text-white group-hover:text-black transition-colors duration-500 text-right hidden md:block">
                               cotidor records <br/> operational ethos
                            </div>
                         </div>
                      </div>

                      <div className="relative z-10 w-full max-w-4xl my-auto">
                        <h3 className="text-5xl sm:text-6xl md:text-[5.5rem] lg:text-[6.5rem] font-display font-black mb-8 lowercase tracking-tighter text-white group-hover:text-black transform group-hover:translate-x-4 transition-all duration-700 ease-out origin-left pb-4 border-b-4 border-transparent group-hover:border-black/5">
                          {block.title}.
                        </h3>
                        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.15] tracking-tight text-white/50 group-hover:text-black/80 transition-colors duration-500 lowercase pl-0 lg:pl-4 lg:border-l-4 border-transparent group-hover:border-black/10">
                           {block.content}
                        </p>
                      </div>

                      <div className="relative z-10 w-full flex justify-end mb-8 md:mb-12">
                         <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-white/20 group-hover:border-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 -rotate-45 group-hover:rotate-0 group-hover:bg-black">
                            <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-black group-hover:text-white" />
                         </div>
                      </div>
                    </div>
                 ))}
                 
                 <div className="min-h-screen sticky top-0 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-24 bg-zinc-900 border-t border-white/10 text-white relative overflow-hidden group shadow-[0_-20px_40px_rgba(0,0,0,0.5)]">
                    <motion.div 
                      className="absolute -top-40 -right-40 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-1000"
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                    >
                      <svg width="600" height="600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
                         <circle cx="12" cy="12" r="10"></circle><path d="M12 2v20"></path><path d="M2.5 8.5l19 7"></path><path d="M2.5 15.5l19-7"></path>
                      </svg>
                    </motion.div>
                    
                    <div className="relative z-10 w-full max-w-2xl">
                        <div className="mb-12">
                           <motion.span 
                              animate={{ rotate: 360 }} 
                              transition={{ duration: 10, repeat: Infinity, ease: "linear" }} 
                              className="text-6xl text-white/50 font-bold inline-block group-hover:text-white transition-colors duration-500"
                           >
                             ✶
                           </motion.span>
                        </div>
                        <h3 className="text-5xl md:text-7xl font-display font-black mb-8 lowercase tracking-tighter">
                          the ultimate goal?
                        </h3>
                        <div className="w-16 h-2 bg-white mb-8 group-hover:w-full transition-all duration-1000 ease-in-out" />
                        <p className="text-2xl md:text-4xl font-medium leading-[1.2] tracking-tight text-white/80 lowercase">
                           to help you get where you're already going. without asking for your soul in return.
                        </p>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Ticker Banner */}
          <div className="w-full bg-black border-y border-white/20 py-12 overflow-hidden whitespace-nowrap flex text-white pointer-events-none select-none">
            <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 25 }} className="flex w-max shrink-0 items-center">
               {[...Array(6)].map((_, i) => (
                 <div key={i} className="flex items-center shrink-0">
                   <span className="text-6xl md:text-8xl font-display font-black tracking-tighter uppercase mx-8">YOU FOCUS ON THE ART.</span>
                   <span className="text-6xl md:text-8xl font-display font-black tracking-tighter text-transparent italic mx-8" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)' }}>WE HANDLE THE REST.</span>
                 </div>
               ))}
            </motion.div>
          </div>

          {/* How We Work Section */}
          <section className="py-32 px-6 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-24 flex flex-col items-center"
              >
                <div className="flex gap-2 items-center mb-6">
                  <span className="w-8 h-px bg-white/30"></span>
                  <span className="font-mono tracking-[0.4em] text-white/50 text-xs font-black uppercase">Capabilities</span>
                  <span className="w-8 h-px bg-white/30"></span>
                </div>
                <h3 className="text-5xl md:text-[7rem] font-display font-black leading-[0.9] text-white tracking-tighter lowercase text-center">
                  how we work.
                </h3>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "one-on-one strategy",
                    text: "before every release, we sit down (virtually) with you to map out the timeline, budget, goals, and any gaps you need us to fill. no templates. no generic rollouts."
                  },
                  {
                    title: "checklist automation",
                    text: "we send you a simple checklist 30 days out, 14 days out, and week-of. if you're overwhelmed, we just take over and check every box for you."
                  },
                  {
                    title: "custom aesthetics",
                    text: "you don't need to hire a designer. we can provide cover art, canvas loops, and basic social assets tailored to your sound. but only if you want the help. no pressure."
                  },
                  {
                    title: "playlist pitching",
                    text: "we submit your tracks to curated playlists (independent and dsp-owned) that actually fit your genre. we don't buy streams or fake placements. honest outreach only."
                  },
                  {
                    title: "content packs",
                    text: "before each release, we send you ready-to-post graphics, countdown stories, quote cards, and short video templates. you post what you want, ignore what you don't."
                  },
                  {
                    title: "distribution setup",
                    text: "if you don't know how to distribute, we handle the entire upload to spotify, apple music, tiktok, etc. if you already have a distributor, we work alongside them."
                  },
                  {
                    title: "artist management",
                    text: "booking, scheduling, email management, calendar coordination, and basic day-to-day logistics. we fill in temporarily or long-term."
                  },
                  {
                    title: "pr support",
                    text: "we write and distribute press releases, build media contact lists, and pitch your story to blogs, zines, radio, and local press. real, targeted outreach."
                  },
                  {
                    title: "no hidden fees",
                    text: "we don't charge you back for playlisting, art, or admin fees unless you explicitly approve the expense first. what we agree on upfront is what you pay."
                  },
                  {
                    title: "direct contact",
                    text: "when you have a question, you text or email the same human who knows your project. no support tickets. no being passed between three people."
                  },
                  {
                    title: "video visualizers",
                    text: "don't have a budget for a full music video? we can produce simple lyric videos or audio visualizers using your cover art. fast, affordable, and release-ready."
                  },
                  {
                    title: "exit guarantee",
                    text: "when you leave, you get a signed letter stating: no money owed, no rights retained, no future claims. period. use it for peace of mind."
                  },
                  {
                    title: "merch & prints",
                    text: "if you want merch but don't want to hold inventory, we help you set up print-on-demand through services like printful or spring. no upfront costs."
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-5%" }}
                    transition={{ delay: (index % 3) * 0.1, duration: 0.5 }}
                    className="bg-black border border-white/10 p-10 hover:border-white hover:bg-white/5 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between min-h-[320px]"
                  >
                    <div className="absolute -top-6 -right-6 text-9xl font-display font-black text-white/[0.02] group-hover:text-white/[0.05] transition-colors pointer-events-none select-none">
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                    <div className="relative z-10 w-full mb-8">
                      <span className="mono-label text-white/30 font-black tracking-[0.2em] mb-6 block text-xs group-hover:text-white/60 transition-colors">
                        / NO. {(index + 1).toString().padStart(2, '0')}
                      </span>
                      <h4 className="text-3xl font-display font-black leading-[1.1] lowercase text-white mb-6 pr-4">
                        {item.title}.
                      </h4>
                      <div className="w-8 h-0.5 bg-white/20 mb-6 group-hover:w-16 group-hover:bg-white transition-all duration-500 ease-out"></div>
                    </div>
                    <div className="relative z-10">
                      <p className="text-base font-medium leading-relaxed text-white/50 group-hover:text-white/90 transition-colors tracking-tight">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <motion.div 
             initial={{ opacity: 0 }} 
             whileInView={{ opacity: 1 }} 
             viewport={{ once: true }}
             className="py-40 md:py-48 text-center px-6 relative overflow-hidden bg-white text-black border-t-8 border-black"
          >
             <div className="absolute inset-0 z-0 opacity-5" style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')" }} />
             
             <h3 className="text-[12vw] md:text-[10vw] font-display font-black tracking-tighter leading-[0.8] lowercase relative z-10">
               let's work.<br/>
               <span className="text-transparent" style={{ WebkitTextStroke: '3px black' }}>on your terms.</span>
             </h3>
             
             <div className="mt-20 relative z-10">
               <Link 
                 to="/apply"
                 className="inline-flex items-center justify-center font-mono tracking-[0.4em] text-white bg-black px-12 py-6 hover:bg-black/80 hover:scale-105 transition-all duration-300 font-black uppercase text-xs md:text-sm shadow-2xl"
               >
                 APPLY NOW
               </Link>
             </div>
          </motion.div>

        </div>
      </main>

      <footer className="py-12 bg-black border-t border-white/10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-white/30 font-black tracking-[0.4em] text-center md:text-left lowercase">
          <div className="space-y-2">
            <p>© 2026 cotidor records</p>
            <p>ryzer music group llc</p>
          </div>
          <img src="https://storage.googleapis.com/forcotidorrecords/white%20logo.png" alt="Cotidor" className="h-6 w-auto opacity-20" />
          <div className="flex flex-col md:items-end gap-2">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-white/50 hover:text-white transition-colors cursor-pointer"
            >
              back to top
            </button>
            <p>5031 sw 199th ave, fl 33332</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
