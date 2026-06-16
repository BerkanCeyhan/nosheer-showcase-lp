import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const markerRef = useRef(null);

  useEffect(() => {
    if (!markerRef.current) return;
    const path = markerRef.current.querySelector('path');
    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 0.8,
      delay: 0.6,
      ease: 'power2.inOut',
    });
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] bg-background flex flex-col justify-center items-center text-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="./images/Models_Smiling_in_Camera.png" 
          alt="Glückliche Frauen" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background"></div>
      </div>
      
      <div className="z-10 max-w-3xl flex flex-col items-center">
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full shadow-sm text-sm font-medium text-accent">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          Über 4.178 glückliche Frauen
        </div>
        
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-text mb-6 leading-tight">
          Schluss mit peinlichem Verrutschen und kneifender Unterwäsche.
        </h1>
        
        <p className="text-lg md:text-xl text-text/80 font-body mb-10 max-w-2xl">
          Das{' '}
          <span className="relative inline-block whitespace-nowrap">
            <span className="relative z-10">"Zweite-Haut-Gefühl"</span>
            <svg
              ref={markerRef}
              viewBox="0 0 220 24"
              preserveAspectRatio="none"
              className="absolute left-0 top-1/2 w-full h-[1.4em] -translate-y-1/2 z-0 pointer-events-none"
            >
              <path
                d="M4 16 C 40 6, 80 4, 110 9 C 140 14, 180 16, 216 8"
                fill="none"
                stroke="#FACC15"
                strokeWidth="14"
                strokeLinecap="round"
                opacity="0.55"
              />
            </svg>
          </span>{' '}
          für absolutes Selbstbewusstsein im Alltag und beim Training. Ohne Camel-Toe. Ohne Abdrücke.
        </p>
        
        <a href="#bundle-selector" className="bg-accent text-white font-medium text-lg px-8 py-4 rounded-full shadow-lg hover:bg-accent/90 transition-all transform hover:scale-105">
          Sichere dir dein Bundle (29% sparen)
        </a>
      </div>
    </section>
  );
};

export default Hero;
