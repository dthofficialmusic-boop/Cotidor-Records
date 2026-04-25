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

      <main className="flex-grow pt-40 pb-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-32">
          {/* Hero Section */}
          <section className="text-center space-y-12">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mono-label text-xs md:text-sm tracking-[1em] font-black text-white/40 block lowercase"
            >
              identity / origin
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-[10rem] font-display font-black tracking-tighter leading-[0.85] text-white lowercase ombre-text-hover cursor-default"
            >
              about us
            </motion.h1>
          </section>

          {/* Content */}
          <div className="max-w-4xl mx-auto pt-24 border-t border-white/10 space-y-16 lg:space-y-24 pb-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-display font-black leading-[0.9] text-white tracking-tighter">about cotidor records</h2>
              <div className="text-lg md:text-xl font-medium text-white leading-relaxed space-y-6">
                <p>
                  Founded in 2020 and relaunched in 2026, Cotidor Records is an artist-first record label that empowers up-and-coming artists. Regardless of experience, genre, or background, Cotidor aims to empower artists and prioritizes their own vision.
                </p>
              </div>
            </motion.div>

            <motion.h3 
               initial={{ opacity: 0 }} 
               whileInView={{ opacity: 1 }} 
               viewport={{ once: true }}
               className="text-4xl md:text-5xl font-display font-black leading-[0.9] text-white tracking-tighter"
            >
              we're not here to own you. we're here to help.
            </motion.h3>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              className="text-lg md:text-xl font-medium text-white leading-relaxed space-y-6"
            >
              <p>
                Cotidor is a supplemental label — a creative and operational partner that steps in exactly where you need us. If you already know how to distribute your music, great. Keep doing it. But for everything else — marketing, playlist pitching, cover art, social strategy, release coordination, press outreach, and day-to-day logistics — we've got you covered.
              </p>
            </motion.div>

            <section className="py-24 text-center ombre-bg text-white -mx-6 px-6 lg:mx-0 lg:px-16 lg:-ml-12 lg:-mr-12">
              <motion.h3 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-display font-black leading-[0.9] tracking-tighter"
              >
                you focus on the art.<br/>we handle the rest.
              </motion.h3>
            </section>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              className="text-lg md:text-xl font-medium text-white leading-relaxed space-y-6"
            >
              <p>
                And we do it with zero pressure. You stay in full control of your sound, your schedule, and your career. There are no hidden fees, no ownership grabs, and no uncomfortable contracts. If you ever want to walk away, you're free to leave — no hard feelings.
              </p>
              <p>
                Cotidor Records exists to serve artists, not the other way around. Your vision. Your voice. Your timeline. We're just here to help you get where you're already going.
              </p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0 }} 
               whileInView={{ opacity: 1 }} 
               viewport={{ once: true }}
               className="pt-24 pb-12 text-center border-b border-white/10"
            >
               <h3 className="text-4xl md:text-5xl font-display font-black tracking-tighter leading-[0.9] text-white">
                 let's work.<br/>on your terms.
               </h3>
               
               <div className="mt-16">
                 <Link 
                   to="/apply"
                   className="inline-flex items-center justify-center font-mono text-xs tracking-[0.4em] text-black bg-white px-8 py-4 rounded-full hover:bg-white/80 transition-all duration-300 active:scale-95 border border-white font-black lowercase"
                 >
                   apply now
                 </Link>
               </div>
            </motion.div>

            {/* How We Work Section */}
            <section className="pt-24 pb-12 mt-12">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-display font-black leading-[0.9] text-white tracking-tighter mb-16"
              >
                how we work
              </motion.h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
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
                    viewport={{ once: true }}
                    transition={{ delay: (index % 2) * 0.1 }}
                    className="space-y-4"
                  >
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-sm tracking-widest text-white/30 pt-1">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="space-y-3">
                        <h4 className="text-xl md:text-2xl font-black text-white leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-base md:text-lg text-white/70 font-medium leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

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
          <p>5031 sw 199th ave, fl 33332</p>
        </div>
      </footer>
    </div>
  );
}
