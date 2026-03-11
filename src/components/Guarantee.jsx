import React from 'react';

const Guarantee = () => {
  return (
    <section className="py-20 bg-background w-full px-4 border-t border-text/5">
      <div className="max-w-4xl mx-auto bg-surface rounded-[2rem] border-2 border-accent/20 overflow-hidden shadow-xl shadow-accent/5">
        <div className="p-10 md:p-16 text-center flex flex-col items-center">
          
          <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mb-8 border-4 border-white shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-text mb-6">
            Unsere 30-Tage <br className="hidden md:block"/> "Zweite-Haut"-Garantie.
          </h2>
          
          <p className="text-lg md:text-xl text-text/80 font-body mb-8 max-w-2xl mx-auto leading-relaxed">
            Wir wissen, dass der Kauf von Unterwäsche aus dem Internet Vertrauenssache ist. 
            Teste unser NOSHEER Set volle 30 Tage in deinem Alltag und beim härtesten Workout. 
            <br/><br/>
            Solltest du dich nicht zu 100% wohl, sicher und komfortabel fühlen, erstatten wir dir den vollen Kaufpreis. Ohne lästige Rückfragen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
            <div className="flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-lg font-bold">
               <span>✓</span> Zero Risk.
            </div>
            <div className="flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-lg font-bold">
               <span>✓</span> Einfache Retoure.
            </div>
            <div className="flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-lg font-bold">
               <span>✓</span> Geld-Zurück.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
