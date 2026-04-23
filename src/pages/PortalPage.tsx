import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, ArrowLeft } from 'lucide-react';
import logo from '../logo.png';

interface PortalPageProps {
  onBack: () => void;
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
}

const countries = [
  "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan",
  "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bonaire", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
  "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Cook Islands", "Costa Rica", "Croatia", "Cuba", "Curaçao", "Cyprus", "Czech Republic",
  "Denmark", "Djibouti", "Dominica", "Dominican Republic",
  "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
  "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories",
  "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana",
  "Haiti", "Heard Island and McDonald Islands", "Honduras", "Hong Kong", "Hungary",
  "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Ivory Coast",
  "Jamaica", "Japan", "Jersey", "Jordan",
  "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
  "Macao", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar",
  "Namibia", "Nauru", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "North Korea", "North Macedonia", "Northern Mariana Islands", "Norway",
  "Oman",
  "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico",
  "Qatar",
  "Réunion", "Romania", "Russia", "Rwanda",
  "Saint Barthélemy", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard and Jan Mayen", "Sweden", "Switzerland", "Syria",
  "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Barbuda", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan",
  "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)",
  "Wallis and Futuna", "Western Sahara",
  "Yemen",
  "Zambia", "Zimbabwe", "Other"
].sort();

export default function PortalPage({ onBack, onPrivacyClick, onTermsClick }: PortalPageProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isRepresented, setIsRepresented] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onBack();
      setSubmitted(false);
    }, 8000);
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white flex flex-col">
      {/* HEADER */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-black/10 px-8 h-20 flex justify-between items-center">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-black hover:opacity-70 transition-opacity"
        >
          <ArrowLeft size={14} /> Back to Cotidor
        </button>
        <span className="font-mono text-[10px] uppercase tracking-widest text-black/40">Artist Portal 2026</span>
      </nav>

      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto space-y-16">
          {!submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h1 className="font-display text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                  Join the <br />
                  Growing <br />
                  Roster
                </h1>
              </div>

              <form onSubmit={handleSubmit} className="space-y-12 border-t border-black/40 pt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  <div className="space-y-3">
                    <label className="font-mono text-[11px] uppercase tracking-widest font-black text-black">Artist / Project Name</label>
                    <input required type="text" className="w-full bg-transparent border-b-2 border-black/30 focus:border-black text-black outline-none py-3 transition-colors uppercase font-black text-xl placeholder:text-black/30" placeholder="ALIAS" />
                  </div>
                  <div className="space-y-3">
                    <label className="font-mono text-[11px] uppercase tracking-widest font-black text-black">Legal / Full Name</label>
                    <input required type="text" className="w-full bg-transparent border-b-2 border-black/30 focus:border-black text-black outline-none py-3 transition-colors uppercase font-black text-xl placeholder:text-black/30" placeholder="FULL NAME" />
                  </div>
                  <div className="space-y-3">
                    <label className="font-mono text-[11px] uppercase tracking-widest font-black text-black">Direct Contact Email</label>
                    <input required type="email" className="w-full bg-transparent border-b-2 border-black/30 focus:border-black text-black outline-none py-3 transition-colors uppercase font-black text-xl placeholder:text-black/30" placeholder="EMAIL@MAIL.COM" />
                  </div>
                  <div className="space-y-3">
                    <label className="font-mono text-[11px] uppercase tracking-widest font-black text-black">Origin / Country</label>
                    <select required className="w-full bg-transparent border-b-2 border-black/30 focus:border-black text-black outline-none py-3 transition-colors uppercase font-black text-xl appearance-none cursor-pointer">
                      <option value="" disabled selected>SELECT COUNTRY</option>
                      {countries.map(country => (
                        <option key={country} value={country}>{country.toUpperCase()}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="font-mono text-[11px] uppercase tracking-widest font-black text-black">Primary Portfolio/Demo URL</label>
                  <input required type="url" className="w-full bg-transparent border-b-2 border-black/30 focus:border-black text-black outline-none py-3 transition-colors font-black text-xl placeholder:text-black/30" placeholder="HTTPS://SOUNDCLOUD.COM/..." />
                </div>

                <div className="space-y-3">
                  <label className="font-mono text-[11px] uppercase tracking-widest font-black text-black">Artist Genre</label>
                  <input required type="text" className="w-full bg-transparent border-b-2 border-black/30 focus:border-black text-black outline-none py-3 transition-colors uppercase font-black text-xl placeholder:text-black/30" placeholder="GENRE" />
                </div>

                <div className="space-y-3">
                  <label className="font-mono text-[11px] uppercase tracking-widest font-black text-black">Sonic Philosophy / Bio</label>
                  <textarea className="w-full bg-transparent border-b-2 border-black/30 focus:border-black text-black outline-none py-3 transition-colors uppercase font-black text-xl resize-none placeholder:text-black/30" rows={4} placeholder="DESCRIBE YOUR VISION"></textarea>
                </div>

                {/* INQUIRY & PROCESSING INFO */}
                <div className="space-y-6 pt-6 border-t border-black/10">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-black font-black leading-relaxed">
                    Any inquiries regarding your application should be sent to: <br />
                    <a href="mailto:submissions@cotidor.com" className="underline hover:opacity-70 transition-opacity font-black">submissions@cotidor.com</a>
                  </p>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-black font-black leading-relaxed">
                    Your applications will be processed by Ryzer Music Group LLC., the parent company of Cotidor Records. Your application will typically be processed within 2 weeks.
                  </p>
                </div>

                {/* REPRESENTATION SECTION */}
                <div className="space-y-6 pt-6 border-t border-black/10">
                  <label className="flex items-start gap-4 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      checked={isRepresented}
                      onChange={(e) => setIsRepresented(e.target.checked)}
                      className="hidden"
                    />
                    <div className={`mt-1 w-5 h-5 border-2 border-black flex items-center justify-center transition-colors ${isRepresented ? 'bg-black' : 'bg-transparent'}`}>
                      {isRepresented && <div className="w-2 h-2 bg-white" />}
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-widest font-black text-black">
                      Are you represented by an individual/management?
                    </span>
                  </label>

                  {isRepresented && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 pt-4"
                    >
                      <div className="space-y-3">
                        <label className="font-mono text-[11px] uppercase tracking-widest font-black text-black">Representative Name</label>
                        <input required type="text" className="w-full bg-transparent border-b-2 border-black/30 focus:border-black text-black outline-none py-3 transition-colors uppercase font-black text-xl placeholder:text-black/30" placeholder="NAME" />
                      </div>
                      <div className="space-y-3">
                        <label className="font-mono text-[11px] uppercase tracking-widest font-black text-black">Representative Email</label>
                        <input required type="email" className="w-full bg-transparent border-b-2 border-black/30 focus:border-black text-black outline-none py-3 transition-colors uppercase font-black text-xl placeholder:text-black/30" placeholder="EMAIL@AGENCY.COM" />
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* ACKNOWLEDGEMENT CHECKBOX */}
                <div className="pt-6">
                  <label className="flex items-start gap-4 cursor-pointer group">
                    <input required type="checkbox" className="hidden peer" />
                    <div className="mt-1 w-5 h-5 border-2 border-black flex items-center justify-center transition-colors peer-checked:bg-black">
                      <div className="w-2 h-2 bg-white opacity-0 peer-checked:opacity-100" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.1em] font-black text-black/70 leading-relaxed">
                      I confirm that all information is correct, and acknowledge that incomplete or inaccurate information would lead to the refusal of my application.
                    </span>
                  </label>
                </div>

                <button 
                  type="submit"
                  className="group relative w-full bg-black text-white p-10 overflow-hidden transition-transform active:scale-[0.99]"
                >
                  <div className="relative z-10 flex items-center justify-center gap-4">
                    <span className="font-display font-black uppercase text-2xl tracking-widest group-hover:scale-105 transition-transform">
                      Submit Application
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-zinc-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-[60vh] flex flex-col items-center justify-center text-center space-y-8"
            >
              <div className="relative w-24 h-24">
                <motion.div 
                  className="absolute inset-0 border-4 border-black rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-0 flex items-center justify-center font-display font-black text-4xl">✓</div>
              </div>
              <div className="space-y-8 max-w-2xl px-6">
                <div className="space-y-4">
                  <h3 className="font-display text-5xl md:text-7xl font-black uppercase italic tracking-tighter">Data Received</h3>
                  <p className="font-mono text-[10px] uppercase tracking-[0.5rem] text-black font-black">Transmission Complete. Stand by for contact.</p>
                </div>
                
                <div className="space-y-6 pt-12 border-t border-black/10">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-black font-black leading-relaxed">
                    Any inquiries regarding your application should be sent to: <br />
                    <a href="mailto:submissions@cotidor.com" className="underline hover:opacity-70 transition-opacity font-black">submissions@cotidor.com</a>
                  </p>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-black font-black leading-relaxed">
                    Your applications will be processed by Ryzer Music Group LLC., the parent company of Cotidor Records. Your application will typically be processed within 2 weeks.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      <footer className="py-12 border-t border-black/10 px-8 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-6">
              <img 
                src={logo} 
                alt="Cotidor Logo" 
                className="h-24 w-auto brightness-0"
              />
              <h1 className="font-sans font-bold text-2xl tracking-normal text-black uppercase leading-none">
                Cotidor Records
              </h1>
            </div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-black/50">Artist Submission Gateway v1.0.4</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <span className="font-mono text-[11px] uppercase tracking-widest text-black/60 text-center px-4">© 2026 COTIDOR RECORDS, A SUBSIDIARY OF RYZER MUSIC GROUP LLC.</span>
            <div className="flex gap-6">
              <button 
                onClick={onPrivacyClick}
                className="font-mono text-[11px] uppercase tracking-widest text-black/60 hover:text-black transition-colors underline underline-offset-4 cursor-pointer"
              >
                Privacy Policy
              </button>
              <button 
                onClick={onTermsClick}
                className="font-mono text-[11px] uppercase tracking-widest text-black/60 hover:text-black transition-colors underline underline-offset-4 cursor-pointer"
              >
                Terms of Use
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
