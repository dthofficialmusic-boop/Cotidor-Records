import { motion } from 'motion/react';
import logoFallback from '../logo.png';

export default function Hero() {
  return (
    <header className="relative h-[80vh] w-full flex items-center justify-center px-6 overflow-hidden bg-black">
      {/* Hero Video Background - Seamless Integration */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover mix-blend-screen opacity-90"
        >
          <source src="/spinning-logo.mp4" type="video/mp4" />
        </video>
        {/* Subtle vignette/fade to ensure edges are perfect */}
        <div className="absolute inset-0 bg-radial-gradient(circle, transparent 20%, black 100%) pointer-events-none" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
      </div>
    </header>
  );
}

