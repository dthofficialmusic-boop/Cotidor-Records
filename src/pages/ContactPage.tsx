import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, CheckCircle} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ContactPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setShowSuccess(false);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "674efca1-3a2f-4242-a40b-b1c8eb764d19");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        // Send confirmation email via backend
        try {
          const res = await fetch("/api/send-confirmation", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: formData.get("email"),
              name: formData.get("name"),
              type: "contact"
            })
          });
          if (!res.ok) {
            const resJson = await res.json().catch(() => ({}));
            console.error("Confirmation email server error", res.status, resJson);
          } else {
            console.log("Confirmation email sent successfully.");
          }
        } catch (e) {
          console.error("Confirmation email fetch error", e);
        }

        setShowSuccess(true);
        e.currentTarget.reset();
      } else {
        console.error("Form submission failed", data);
        setError(data.message || "Something went wrong. Please try again or email info@cotidor.com directly.");
      }
    } catch (error) {
      console.error("Form submission error", error);
      setError("An unexpected error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
      // Optional: Auto close success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    }
  };

  return (
    <div className="min-h-[100dvh] bg-white text-black font-sans selection:bg-black selection:text-white flex flex-col lowercase overflow-hidden">
      {/* Decorative Background Image / Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')", backgroundSize: '150px' }} />

      <main className="flex-grow flex flex-col justify-center px-6 pt-32 pb-24 lg:pt-40 lg:pb-32 relative z-10">
        <div className="max-w-[100rem] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative">
          
          <section className="lg:col-span-5 text-left space-y-12 lg:sticky lg:top-32 h-fit">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-4">
                <div className="w-12 h-0.5 bg-black"></div>
                <span className="mono-label font-black tracking-[0.4em] uppercase text-xs md:text-sm">Reach Out</span>
              </div>
              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-[15vw] lg:text-[8vw] font-display font-black tracking-tighter leading-[0.85] text-black lowercase cursor-default relative inline-block"
              >
                let's <br />
                <span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>connect.</span>
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 15, ease: "linear" }} className="absolute -top-12 -right-12 hidden lg:block">
                  <span className="text-6xl text-black/10 font-bold">✶</span>
                </motion.div>
              </motion.h1>
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl font-medium text-black/80 max-w-xl leading-relaxed tracking-tight lowercase pl-0 lg:pl-16 lg:border-l-4 lg:border-black/5"
            >
              whether you're an artist looking for a home, or a partner looking to collaborate, our team is ready to listen.
            </motion.p>
            
            <div className="space-y-8 pt-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-1 block group"
              >
                <h2 className="font-mono text-[10px] tracking-[0.4em] text-black/40 uppercase font-bold group-hover:text-black transition-colors">general inquiries</h2>
                <a href="mailto:info@cotidor.com" className="block text-2xl md:text-4xl font-display font-black lowercase truncate relative w-fit">
                  info@cotidor.com
                  <div className="absolute bottom-1 left-0 w-full h-[0.1em] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                </a>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-1 block group"
              >
                <h2 className="font-mono text-[10px] tracking-[0.4em] text-black/40 uppercase font-bold group-hover:text-black transition-colors">submissions</h2>
                <a href="mailto:submissions@cotidor.com" className="block text-2xl md:text-4xl font-display font-black lowercase truncate relative w-fit">
                  submissions@cotidor.com
                  <div className="absolute bottom-1 left-0 w-full h-[0.1em] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                </a>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-1 block group"
              >
                <h2 className="font-mono text-[10px] tracking-[0.4em] text-black/40 uppercase font-bold group-hover:text-black transition-colors">artist relations</h2>
                <a href="mailto:artists@cotidor.com" className="block text-2xl md:text-4xl font-display font-black lowercase truncate relative w-fit">
                  artists@cotidor.com
                  <div className="absolute bottom-1 left-0 w-full h-[0.1em] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                </a>
              </motion.div>
            </div>
          </section>

          <motion.section 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex justify-center lg:justify-end"
          >
            <div className="bg-black text-white p-8 md:p-16 w-full relative shadow-2xl">
              <div className="absolute top-0 right-0 p-6">
                 <span className="text-3xl text-white/20 font-display font-black">✶</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-display font-black mb-10 text-white tracking-tighter lowercase">send a message</h2>
              <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                {error && (
                  <div className="p-4 bg-red-500/10 border-l-4 border-red-500 text-red-200 font-mono text-[10px] uppercase tracking-widest leading-relaxed mt-4">
                    {error}
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
                  <div className="space-y-3 relative group">
                    <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60 block font-bold group-focus-within:text-white transition-colors">Name</label>
                    <input required type="text" id="name" name="name" className="w-full bg-transparent border-b-2 border-white/20 text-white px-0 py-3 placeholder:text-white/20 focus:outline-none focus:border-white transition-all font-medium text-lg lg:text-xl rounded-none" placeholder="your name" />
                  </div>
                  <div className="space-y-3 relative group">
                    <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60 block font-bold group-focus-within:text-white transition-colors">Email</label>
                    <input required type="email" id="email" name="email" className="w-full bg-transparent border-b-2 border-white/20 text-white px-0 py-3 placeholder:text-white/20 focus:outline-none focus:border-white transition-all font-medium text-lg lg:text-xl rounded-none" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="space-y-3 relative group">
                  <label htmlFor="subject" className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60 block font-bold group-focus-within:text-white transition-colors">Subject</label>
                  <input required type="text" id="subject" name="subject" className="w-full bg-transparent border-b-2 border-white/20 text-white px-0 py-3 placeholder:text-white/20 focus:outline-none focus:border-white transition-all font-medium text-lg lg:text-xl rounded-none" placeholder="what is this about?" />
                </div>
                <div className="space-y-3 relative group">
                  <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60 block font-bold group-focus-within:text-white transition-colors">Message</label>
                  <textarea required id="message" name="message" rows={5} className="w-full bg-transparent border-b-2 border-white/20 text-white px-0 py-3 placeholder:text-white/20 focus:outline-none focus:border-white transition-all font-medium text-lg lg:text-xl resize-none rounded-none" placeholder="your message here..."></textarea>
                </div>
                <div className="pt-4">
                  <button disabled={isSubmitting} type="submit" className="w-full md:w-auto inline-flex items-center justify-center font-mono text-xs tracking-[0.4em] text-black bg-white px-12 py-5 hover:bg-white/90 hover:scale-105 transition-all duration-300 disabled:opacity-50 border-none font-black uppercase shadow-xl relative overflow-hidden group">
                    <span className="relative z-10">{isSubmitting ? 'sending...' : 'submit message'}</span>
                  </button>
                </div>
              </form>

              {/* SUCCESS MODAL */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black z-20 flex flex-col items-center justify-center text-center p-8 border border-white/10"
                  >
                    <CheckCircle size={64} className="mb-6 text-white" strokeWidth={1.5} />
                    <h3 className="text-4xl md:text-5xl font-display font-black mb-6 tracking-tighter lowercase">received.</h3>
                    <div className="w-12 h-1 bg-white mb-6"></div>
                    <p className="text-white/60 font-medium text-lg tracking-tight lowercase">
                      thank you. your message has been received by our team. you should receive a response in 1-2 business days.
                    </p>
                    <button 
                      onClick={() => setShowSuccess(false)}
                      className="mt-12 group inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.4em] uppercase text-white/40 hover:text-white transition-colors font-bold"
                    >
                      <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> back to form
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.section>
        </div>
      </main>

      <footer className="py-16 bg-black text-white border-t border-white/10 px-6 mt-12 overflow-hidden relative z-10">
        <div className="max-w-[100rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-white/50 font-black tracking-[0.4em] text-center md:text-left lowercase">
          <div className="space-y-1">
            <p>© 2026 cotidor records</p>
            <p>ryzer music group llc</p>
          </div>
          <img src="https://storage.googleapis.com/forcotidorrecords/white%20logo.png" alt="Cotidor" className="h-6 w-auto opacity-70" />
          <p>5031 sw 199th ave, fl 33332</p>
        </div>
      </footer>
    </div>
  );
}
