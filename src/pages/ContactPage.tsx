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
    <div className="min-h-[100dvh] bg-gradient-to-br from-black via-zinc-800 to-gray-400 animate-bg-move text-white font-sans selection:bg-white selection:text-black flex flex-col lowercase">
      {/* HEADER */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-sm border-b border-white/10 px-6 h-20 flex justify-between items-center">
        <button 
          onClick={() => navigate('/')}
          className="group flex items-center gap-2 text-[10px] font-black text-white/50 hover:text-white transition-colors tracking-[0.4em] lowercase"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> back to main
        </button>
        <img src="https://storage.googleapis.com/forcotidorrecords/white%20logo.png" alt="Cotidor Logo" className="h-8 w-auto" />
      </nav>

      <main className="flex-grow flex flex-col justify-center px-6 pt-32 pb-24 overflow-hidden">
        <div className="max-w-4xl mx-auto w-full space-y-24">
          <section className="text-left space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-[8rem] font-display font-black tracking-tighter leading-[0.85] text-white lowercase cursor-default"
            >
              contact
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-2xl font-medium text-white/80 max-w-2xl leading-relaxed"
            >
              get in touch. whether you're an artist looking for a home, or a partner looking to collaborate, our team is ready to listen.
            </motion.p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/20 pt-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <h2 className="font-mono text-xs tracking-[0.4em] text-white/50 uppercase">general inquiries</h2>
              <a href="mailto:info@cotidor.com" className="block text-xl md:text-3xl lg:text-4xl font-display font-black hover:opacity-70 transition-opacity truncate">
                info@cotidor.com
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 min-w-0"
            >
              <h2 className="font-mono text-xs tracking-[0.4em] text-white/50 uppercase">submissions</h2>
              <a href="mailto:submissions@cotidor.com" className="block text-xl md:text-3xl lg:text-4xl font-display font-black hover:opacity-70 transition-opacity truncate">
                submissions@cotidor.com
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4 min-w-0"
            >
              <h2 className="font-mono text-xs tracking-[0.4em] text-white/50 uppercase">artist relations</h2>
              <a href="mailto:artists@cotidor.com" className="block text-xl md:text-3xl lg:text-4xl font-display font-black hover:opacity-70 transition-opacity truncate">
                artists@cotidor.com
              </a>
            </motion.div>
          </section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-16 mt-16 flex justify-center"
          >
            <div className="bg-white text-black p-8 md:p-16 w-full lg:max-w-[70%] relative">
              <h2 className="text-3xl md:text-4xl font-display font-black mb-10 text-black">send a message</h2>
              <form className="space-y-8" onSubmit={handleSubmit}>
                {error && (
                  <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-900 font-mono text-[10px] uppercase tracking-widest leading-relaxed">
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
                  <div className="space-y-2 relative group">
                    <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-widest text-black/60 block font-bold">Name</label>
                    <input required type="text" id="name" name="name" className="w-full bg-[#f0f0f0] text-black px-4 py-3 placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-black transition-all" placeholder="your name" />
                  </div>
                  <div className="space-y-2 relative group">
                    <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-widest text-black/60 block font-bold">Email</label>
                    <input required type="email" id="email" name="email" className="w-full bg-[#f0f0f0] text-black px-4 py-3 placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-black transition-all" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="space-y-2 relative group">
                  <label htmlFor="subject" className="font-mono text-[10px] uppercase tracking-widest text-black/60 block font-bold">Subject</label>
                  <input required type="text" id="subject" name="subject" className="w-full bg-[#f0f0f0] text-black px-4 py-3 placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-black transition-all" placeholder="what is this about?" />
                </div>
                <div className="space-y-2 relative group">
                  <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-widest text-black/60 block font-bold">Message</label>
                  <textarea required id="message" name="message" rows={5} className="w-full bg-[#f0f0f0] text-black px-4 py-3 placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-black transition-all resize-none" placeholder="your message here..."></textarea>
                </div>
                <button disabled={isSubmitting} type="submit" className="w-full md:w-auto inline-flex items-center justify-center font-mono text-xs tracking-[0.4em] text-white bg-black px-12 py-4 hover:bg-black/80 transition-all duration-300 disabled:opacity-50 border-none font-black lowercase mt-4 relative">
                  {isSubmitting ? 'sending...' : 'submit message'}
                </button>
              </form>

              {/* SUCCESS MODAL */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center text-center p-8"
                  >
                    <CheckCircle size={64} className="mb-6 mb-4 text-green-500" strokeWidth={1.5} />
                    <h3 className="text-3xl font-display font-black mb-4">message received</h3>
                    <p className="text-black/60 font-mono text-xs tracking-widest uppercase">
                      thank you. your message has been received by our team. you should receive a response in 1-2 business days.
                    </p>
                    <button 
                      onClick={() => setShowSuccess(false)}
                      className="mt-12 font-mono text-[10px] tracking-widest uppercase text-black/40 hover:text-black transition-colors"
                    >
                      close
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.section>
        </div>
      </main>

      <footer className="py-16 bg-black border-t border-white/5 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-white/70 font-black tracking-[0.4em] text-center md:text-left lowercase">
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
