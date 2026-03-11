import React from 'react';

const Mechanism = () => {
  return (
    <section className="py-24 bg-background w-full px-4 overflow-hidden relative">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Image/Visual */}
        <div className="w-full lg:w-1/2 relative group">
          <div className="absolute inset-0 bg-accent/10 rounded-[2rem] transform rotate-3 scale-105 transition-transform group-hover:rotate-6"></div>
          <img 
            src="./images/Bild_Frau_Anti_Cameltoe_Beige.png" 
            alt="Nahtlose Silhouette mit Anti-Cameltoe Technologie" 
            className="relative z-10 w-full rounded-[2rem] shadow-xl object-cover"
          />
        </div>

        {/* Right Side: Copy */}
        <div className="w-full lg:w-1/2">
          <div className="inline-block px-3 py-1 bg-white text-accent font-mono text-sm font-semibold rounded-full mb-6 shadow-sm">
            Die Innovation
          </div>
          
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-text mb-6">
            Zweite-Haut-Gefühl <br className="hidden md:block"/>durch smarte Technologie.
          </h2>
          
          <p className="text-lg text-text/80 mb-8 max-w-xl">
            Wir haben NOSHEER für Frauen entwickelt, die keine Kompromisse machen wollen. 
            Unsere einzigartige Lasercut- & Bonding-Technologie verhindert lästiges Verrutschen und bleibt zu 100% unsichtbar – selbst unter den engsten Gym-Leggings.
          </p>

          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-heading font-bold text-xl mb-1">Anti-Camel-Toe Insert</h4>
                <p className="text-text/70">Ultraleichtes, ergonomisches Design, das vorne eine glatte Silhouette formt, ohne wie ein Fremdkörper zu wirken.</p>
              </div>
            </li>
            
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-heading font-bold text-xl mb-1">100% Seamless (Nahtlos)</h4>
                <p className="text-text/70">Keine einschneidenden Ränder. Keine VPL. Die Ränder sind speziell verklebt statt genäht.</p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-heading font-bold text-xl mb-1">Atmungsaktiv & Feuchtigkeitsableitend</h4>
                <p className="text-text/70">Spezieller Mikrofaser-Mix, der Schweiß beim Workout sofort abtransportiert. Immer ein frisches Gefühl.</p>
              </div>
            </li>
          </ul>
        </div>
        
      </div>
    </section>
  );
};

export default Mechanism;
