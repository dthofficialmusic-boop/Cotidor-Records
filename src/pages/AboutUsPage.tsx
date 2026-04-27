import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function AboutUsPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-[100dvh] bg-black text-white font-sans selection:bg-white selection:text-black flex flex-col lowercase">
      {/* HEADER */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-white/10 px-6 h-20 flex justify-between items-center">
          <button 
          onClick={() => navigate('/')}
          className="group flex items-center gap-2 text-[10px] font-black text-white/50 hover:text-white transition-colors tracking-[0.4em] lowercase"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> back to main
        </button>
        <img src="https://storage.googleapis.com/forcotidorrecords/white%20logo.png" alt="Cotidor Logo" className="h-8 w-auto" />
      </nav>

      <main className="flex-grow pt-40 pb-0 px-0 overflow-hidden">
        <div className="w-full">
          {/* Hero Section */}
          <section className="text-center space-y-12 px-6 max-w-6xl mx-auto mb-32">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mono-label text-xs md:text-sm tracking-[1em] font-black text-white/40 block lowercase"
            >
              identity / origin
            </motion.span>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative inline-block"
            >
              <h1 className="text-7xl md:text-[12rem] font-display font-black tracking-tighter leading-[0.85] text-white lowercase ombre-text-hover cursor-default whitespace-nowrap">
                about us.
              </h1>
            </motion.div>
          </section>

          {/* Content */}
          <div className="w-full border-t border-white/20 pt-24 pb-24">
            <div className="max-w-6xl mx-auto px-6 space-y-32">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                className="grid grid-cols-1 md:grid-cols-12 gap-12"
              >
                <div className="md:col-span-5">
                  <h2 className="text-5xl md:text-6xl font-display font-black leading-[0.9] text-white tracking-tighter sticky top-32">
                    about cotidor.
                  </h2>
                </div>
                <div className="md:col-span-7 text-xl md:text-3xl font-medium text-white/80 leading-relaxed space-y-8 tracking-tight">
                  <p>
                    Founded in 2020 and relaunched in 2026, Cotidor Records is an artist-first record label. Regardless of experience, genre, or background, Cotidor aims to empower artists and prioritizes their own vision.
                  </p>
                </div>
              </motion.div>

              <div className="w-full h-px bg-white/20"></div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                className="grid grid-cols-1 md:grid-cols-12 gap-12"
              >
                <div className="md:col-span-5">
                  <h3 className="text-5xl md:text-6xl font-display font-black leading-[0.9] text-white tracking-tighter sticky top-32">
                    we're not here to own you.
                  </h3>
                </div>
                <div className="md:col-span-7 text-xl md:text-3xl font-medium text-white/80 leading-relaxed space-y-8 tracking-tight">
                  <p>
                    Cotidor is a supplemental label — a creative and operational partner that steps in exactly where you need us. If you already know how to distribute your music, great. Keep doing it.
                  </p>
                  <p className="text-white">
                    But for everything else — marketing, playlist pitching, cover art, social strategy, release coordination, press outreach, and day-to-day logistics — we've got you covered.
                  </p>
                </div>
              </motion.div>
            </div>

            <section className="mt-32 py-32 text-center ombre-bg text-white border-y border-white/20">
              <div className="max-w-6xl mx-auto px-6">
                <motion.h3 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-6xl md:text-[8rem] font-display font-black leading-[0.85] tracking-tighter lowercase"
                >
                  you focus on the art.<br/>we handle the rest.
                </motion.h3>
              </div>
            </section>

            <div className="max-w-6xl mx-auto px-6 mt-32 space-y-32">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                className="grid grid-cols-1 md:grid-cols-12 gap-12"
              >
                <div className="md:col-span-5">
                  <h3 className="text-lg md:text-xl font-mono tracking-[0.2em] font-black text-white/50 uppercase sticky top-32">
                    Our Promise
                  </h3>
                </div>
                <div className="md:col-span-7 text-xl md:text-3xl font-medium text-white/80 leading-relaxed space-y-8 tracking-tight">
                  <p>
                    And we do it with zero pressure. You stay in full control of your sound, your schedule, and your career. There are no hidden fees, no ownership grabs, and no uncomfortable contracts. If you ever want to walk away, you're free to leave — no hard feelings.
                  </p>
                  <p className="text-white">
                    Cotidor Records exists to serve artists, not the other way around. Your vision. Your voice. Your timeline. We're just here to help you get where you're already going.
                  </p>
                </div>
              </motion.div>

            </div>

            {/* How We Work Section */}
            <section className="mt-40 border-t border-white/20 pt-32 px-6">
              <div className="max-w-6xl mx-auto">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-6xl md:text-[8rem] font-display font-black leading-[0.85] text-white tracking-tighter mb-24 lowercase"
                >
                  how we work.
                </motion.h3>

                <div className="grid grid-cols-1 border-t border-white/20 border-l border-r">
                  {[
                    {
                      title: "one-on-one release strategy sessions.",
                      text: "before every release, we sit down (virtually) with you to map out the timeline, budget, goals, and any gaps you need us to fill. no templates. no generic rollouts."
                    },
                    {
                      title: "release day checklist automation.",
                      text: "we send you a simple checklist 30 days out, 14 days out, and week-of. if you're overwhelmed, we just take over and check every box for you."
                    },
                    {
                      title: "custom cover art & visual assets — if you want.",
                      text: "you don't need to hire a designer. we can provide cover art, canvas loops, and basic social assets tailored to your sound. but only if you want the help. no pressure, no extra fee unless we agree upfront."
                    },
                    {
                      title: "playlist pitching — no payola, no promises we can't keep.",
                      text: "we submit your tracks to curated playlists (independent and dsp-owned) that actually fit your genre. we don't buy streams or fake placements. honest outreach only."
                    },
                    {
                      title: "social media content packs.",
                      text: "before each release, we send you ready-to-post graphics, countdown stories, quote cards, and short video templates. you post what you want, ignore what you don't."
                    },
                    {
                      title: "distribution setup or hands-off — your call.",
                      text: "if you don't know how to distribute, we handle the entire upload to spotify, apple music, tiktok, etc. if you already have a distributor, we work alongside them. no forcing you into ours."
                    },
                    {
                      title: "artist management — if you need it.",
                      text: "booking, scheduling, email management, calendar coordination, and basic day-to-day logistics. we can act as your management team or just fill in temporarily while you search for the right long-term manager."
                    },
                    {
                      title: "pr support.",
                      text: "we write and distribute press releases, build media contact lists, and pitch your story to blogs, zines, radio, and local press. no guarantee of a xxl feature — just real, targeted outreach to outlets that actually cover your style of music."
                    },
                    {
                      title: "no hidden recoupment.",
                      text: "we don't charge you back for playlisting, art, or admin fees unless you explicitly approve the expense first. what we agree on upfront is what you pay."
                    },
                    {
                      title: "direct artist contact — no account manager runaround.",
                      text: "when you have a question, you text or email the same human who knows your project. no support tickets. no being passed between three people."
                    },
                    {
                      title: "lyric video & visualizer production.",
                      text: "don't have a budget for a full music video? we can produce simple lyric videos or audio visualizers using your cover art, lyrics, and motion graphics. fast, affordable, and release-ready."
                    },
                    {
                      title: "exit guarantee — signed and simple.",
                      text: "when you leave, you get a signed letter stating: no money owed, no rights retained, no future claims. period. use it for peace of mind or show it to your next partner."
                    },
                    {
                      title: "merch consultation & print-on-demand setup.",
                      text: "if you want merch but don't want to hold inventory, we help you set up print-on-demand (t-shirts, hoodies, stickers) through services like printful or spring. no upfront costs, no boxes in your apartment."
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-10%" }}
                      className="border-b border-white/20 group hover:bg-white hover:text-black transition-colors duration-500 ease-out"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[25vh]">
                        <div className="md:col-span-4 p-8 md:p-12 border-b border-white/20 md:border-b-0 md:border-r md:border-white/20 group-hover:border-black/20 flex flex-col justify-between">
                          <span className="font-display text-[6rem] md:text-[8rem] font-black leading-[0.8] opacity-20 group-hover:opacity-100 transition-opacity">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <div className="md:col-span-8 p-8 md:p-12 flex flex-col justify-center space-y-6">
                          <h4 className="text-3xl md:text-5xl font-display font-black leading-tight lowercase">
                            {item.title}
                          </h4>
                          <p className="text-lg md:text-xl font-medium leading-relaxed opacity-60 group-hover:opacity-80">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
            
            <motion.div 
               initial={{ opacity: 0 }} 
               whileInView={{ opacity: 1 }} 
               viewport={{ once: true }}
               className="pt-40 pb-24 text-center px-6"
            >
               <h3 className="text-6xl md:text-[8rem] font-display font-black tracking-tighter leading-[0.85] text-white lowercase">
                 let's work.<br/>on your terms.
               </h3>
               
               <div className="mt-20">
                 <Link 
                   to="/apply"
                   className="inline-flex items-center justify-center font-mono text-sm md:text-base tracking-[0.4em] text-black bg-white px-12 py-6 rounded-full hover:bg-white/80 transition-all duration-300 active:scale-95 border border-white font-black lowercase"
                 >
                   apply now
                 </Link>
               </div>
            </motion.div>

          </div>
        </div>
      </main>

      <footer className="py-16 bg-black border-t border-white/5 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-white/20 font-black tracking-[0.4em] text-center md:text-left lowercase">
          <div className="space-y-1">
            <p>© 2026 cotidor records</p>
            <p>ryzer music group llc</p>
          </div>
          <img src="https://storage.googleapis.com/forcotidorrecords/white%20logo.png" alt="Cotidor" className="h-6 w-auto opacity-10" />
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
