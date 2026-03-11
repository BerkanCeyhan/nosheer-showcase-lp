import React from 'react';

const Technology = () => {
  return (
    <section className="py-24 bg-surface w-full px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
        
        {/* Left Side: Copy */}
        <div className="w-full lg:w-1/2">
          <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-sm font-semibold rounded-full mb-6">
            Kompromisslos Entwickelt
          </div>
          
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-text mb-6">
            Perfekte Passform.<br/>In jeder Situation.
          </h2>
          
          <p className="text-lg text-text/80 mb-8 max-w-xl">
            Das NOSHEER Performance Set und die Anti-Cameltoe Unterwäsche wurden für die weibliche Silhouette optimiert. Jede Faser ist darauf ausgerichtet, dir Sicherheit und Bequemlichkeit zurückzugeben.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-text/10 rounded-2xl shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center mb-4 text-xl">🧘‍♀️</div>
              <h4 className="font-heading font-bold text-lg mb-2">High-Waist Design</h4>
              <p className="text-text/70 text-sm">Die Leggings formt Bauch und Hüfte sanft, ohne einzuschnüren. Nichts rollt sich ab.</p>
            </div>

            <div className="p-6 bg-white border border-text/10 rounded-2xl shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center mb-4 text-xl">💨</div>
              <h4 className="font-heading font-bold text-lg mb-2">Squat-Proof</h4>
              <p className="text-text/70 text-sm">100% blickdicht bei tiefen Kniebeugen. Voller Fokus auf das Gym, nicht deinen Rücken.</p>
            </div>

            <div className="p-6 bg-white border border-text/10 rounded-2xl shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center mb-4 text-xl">✨</div>
              <h4 className="font-heading font-bold text-lg mb-2">Formgebend</h4>
              <p className="text-text/70 text-sm">Der leichte Kompressionsstoff stützt die Muskulatur und glättet die Silhouette.</p>
            </div>

            <div className="p-6 bg-white border border-text/10 rounded-2xl shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center mb-4 text-xl">🛡️</div>
              <h4 className="font-heading font-bold text-lg mb-2">Alltag & Sport</h4>
              <p className="text-text/70 text-sm">Egal ob hartes Workout, entspanntes Yoga oder im Büro unter dem Kleid – NOSHEER hält.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Visual */}
        <div className="w-full lg:w-1/2 relative group">
          <div className="absolute inset-0 bg-text/5 rounded-[2rem] transform -rotate-3 scale-105 transition-transform group-hover:-rotate-6"></div>
          <img 
            src="./images/Bild 1_Leggings_Top_Samtrot.png" 
            alt="Squat-Proof Performance Leggings" 
            className="relative z-10 w-full rounded-[2rem] shadow-xl object-cover"
          />
        </div>
        
      </div>
    </section>
  );
};

export default Technology;
