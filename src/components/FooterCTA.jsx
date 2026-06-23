import React, { useEffect, useState } from 'react';

const FooterCTA = () => {
  const [timeLeft, setTimeLeft] = useState(596); // 9:56 in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section className="pt-24 pb-32 bg-text text-white w-full px-4 text-center relative overflow-hidden">
      
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 opacity-10 blur-xl">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent rounded-full opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        
        <div className="mb-8 flex justify-center">
           <img src="./images/Logo_Nosheer.png" alt="Nosheer Logo" className="h-10 filter invert brightness-0" />
        </div>

        <div className="inline-block bg-accent px-4 py-1.5 rounded-md font-bold text-sm tracking-wider uppercase mb-8 shadow-[0_0_15px_rgba(166,61,64,0.5)]">
          Sehr hohe Nachfrage
        </div>

        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
          Beende das Zupfen. <br />Starte deinen Fokus.
        </h2>

        <p className="text-xl text-white/70 mb-10 max-w-xl mx-auto">
          Sichere dir jetzt dein Anti-Cameltoe Set inklusive <span className="text-accent font-bold">Gratis Shaker & Gratis Versand</span>, bevor wir ausverkauft sind.
        </p>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl inline-block mb-10">
          <div className="text-white/80 font-bold mb-2 uppercase text-sm tracking-widest">
            Dein Angebot endet in
          </div>
          <div className="text-5xl font-mono font-bold text-accent drop-shadow-md">
            {formatTime(timeLeft)} <span className="text-3xl">⏰</span>
          </div>
        </div>

        <div>
          <a href="#bundle-selector" className="inline-block bg-accent hover:bg-accent/90 text-white text-xl md:text-2xl font-bold px-12 py-5 rounded-full shadow-2xl transition-transform hover:scale-105">
            Jetzt Set sichern
          </a>
        </div>

        {/* Footer Links (Minimal) */}
        <div className="mt-24 border-t border-white/10 pt-8 text-white/40 text-sm flex flex-col md:flex-row gap-4 justify-center">
          <a href="https://nosheer.de/policies/legal-notice" className="hover:text-white transition-colors">Impressum</a>
          <span className="hidden md:inline">•</span>
          <a href="https://nosheer.de/policies/privacy-policy" className="hover:text-white transition-colors">Datenschutz</a>
          <span className="hidden md:inline">•</span>
          <a href="https://nosheer.de/policies/refund-policy" className="hover:text-white transition-colors">Widerrufsrecht</a>
          <span className="hidden md:inline">•</span>
          <a href="https://nosheer.de/policies/terms-of-service" className="hover:text-white transition-colors">AGB</a>
        </div>
        <div className="mt-4 text-white/30 text-xs text-center">
          © {new Date().getFullYear()} NOSHEER. Alle Rechte vorbehalten.
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
