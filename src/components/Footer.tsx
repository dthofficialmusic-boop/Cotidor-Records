interface FooterProps {
  onPortalClick?: () => void;
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
  onStoreClick?: () => void;
}

export default function Footer({ onPortalClick, onPrivacyClick, onTermsClick, onStoreClick }: FooterProps) {
  return (
    <footer className="py-24 px-6 border-t border-brand-border bg-black">
      <div className="max-w-5xl mx-auto mb-24 flex flex-col md:flex-row justify-start items-start gap-12 md:gap-24 text-left">
        <div className="flex items-center gap-4">
          <img 
            src="https://storage.googleapis.com/forcotidorrecords/white%20logo.png" 
            alt="Cotidor Logo" 
            className="h-10 w-auto"
          />
          <h2 className="font-display font-bold text-4xl tracking-tighter uppercase">
            Cotidor Records
          </h2>
        </div>

        <div className="flex gap-12 sm:gap-24">
          <div className="space-y-6">
            <span className="mono-label block text-white/50">Navigation</span>
            <ul className="space-y-3">
              {[
                { name: 'OUR ETHOS', href: '#values' },
                { name: 'ARTISTS', href: '#artists' },
                { name: 'ABOUT US', href: '#about' },
                { name: 'STORE', href: '#', isStore: true },
                { name: 'APPLY', href: '#apply', isPortal: true }
              ].map(item => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    onClick={(e) => {
                      if (item.isPortal) {
                        e.preventDefault();
                        onPortalClick?.();
                      } else if (item.isStore) {
                        e.preventDefault();
                        onStoreClick?.();
                      }
                    }}
                    className="text-sm uppercase tracking-widest hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <span className="mono-label block text-white/50">Connect</span>
            <ul className="space-y-3">
              {['Instagram', 'Bandcamp', 'Soundcloud', 'Discord'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm uppercase tracking-widest hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-brand-border gap-6">
        <span className="mono-label">
          © 2026 COTIDOR RECORDS, A SUBSIDIARY OF RYZER MUSIC GROUP LLC.
        </span>
        <div className="flex gap-8">
          <button 
            onClick={(e) => {
              e.preventDefault();
              onPrivacyClick?.();
            }}
            className="mono-label hover:text-white transition-colors cursor-pointer text-left"
          >
            Privacy Policy
          </button>
          <button 
            onClick={(e) => {
              e.preventDefault();
              onTermsClick?.();
            }}
            className="mono-label hover:text-white transition-colors cursor-pointer text-left"
          >
            Terms of Use
          </button>
          <a href="#" className="mono-label hover:text-white transition-colors">Credits</a>
        </div>
      </div>
    </footer>
  );
}
