import React, { useEffect, useState } from 'react';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show when scrolled past 500px, but hide if we're near the bottom or in the bundle selector
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      const bundleSelector = document.getElementById('bundle-selector');
      let bundleSelectorTop = documentHeight;
      let bundleSelectorBottom = documentHeight;
      
      if(bundleSelector) {
        bundleSelectorTop = bundleSelector.offsetTop - windowHeight/2;
        bundleSelectorBottom = bundleSelector.offsetTop + bundleSelector.offsetHeight;
      }

      const isScrolledPastHero = scrolled > 500;
      const isInsideBundleSelector = scrolled > bundleSelectorTop && scrolled < bundleSelectorBottom;
      const isNearBottom = scrolled > documentHeight - windowHeight - 200;

      if (isScrolledPastHero && !isInsideBundleSelector && !isNearBottom) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 w-full bg-surface border-t border-text/10 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-50 transition-transform duration-500 transform ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        
        {/* Left Side (Hidden on very small screens) */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-background overflow-hidden border border-text/10 flex-shrink-0">
             <img src="./images/Bild_Anti_Cameltoe_Tanga_Schwarz.png" className="w-full h-full object-cover" alt="Nosheer Bundle" />
          </div>
          <div>
            <div className="font-bold font-heading text-text leading-tight">NOSHEER Anti-Cameltoe Set</div>
            <div className="flex items-center gap-1 text-accent text-xs">
               <span className="font-bold">★★★★★</span> <span className="text-text/60 ml-1">4.8 (4.178+)</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto justify-between sm:justify-end">
          <div className="text-right flex flex-col items-end justify-center whitespace-nowrap">
            <span className="text-[10px] md:text-xs text-text/50 line-through leading-none">53,70 €</span>
            <span className="font-bold text-base md:text-xl text-text leading-tight mt-0.5">39,90 €</span>
          </div>
          <a 
            href="#bundle-selector" 
            className="bg-accent hover:bg-accent/90 text-white font-bold py-2.5 md:py-3.5 px-4 md:px-6 rounded-xl shadow-lg transition-transform hover:scale-105 text-[13px] md:text-base whitespace-nowrap"
          >
            Jetzt Set sichern
          </a>
        </div>

      </div>
      
      {/* Banner Tape */}
      <div className="bg-[#1A1A1A] text-[#FFE800] text-center py-1 text-xs font-bold tracking-widest uppercase">
        🎁 Gratis Shaker + Gratis Versand zu jeder Bestellung 🎁
      </div>
    </div>
  );
};

export default StickyCTA;
