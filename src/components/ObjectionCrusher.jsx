import React, { useState } from 'react';

const ObjectionCrusher = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const objections = [
    {
      question: "Fühlt sich das Polster nicht wie eine Windel an?",
      answer: "Absolut nicht! Das ist unsere wichtigste Innovation. Der Anti-Cameltoe Insert ist ultraleicht, hochflexibel und anatomisch geformt. Er passt sich deinen Bewegungen an und du vergisst sofort, dass er da ist. Dein Fokus bleibt beim Workout, nicht bei deiner Kleidung."
    },
    {
      question: "Sieht man durch die Leggings die Ränder der Unterwäsche (VPL)?",
      answer: "Nein. Wir verwenden eine spezielle nahtlose Lasercut- und Bonding-Technologie. Der Slip und der Tanga schließen flach mit der Haut ab. Selbst unter der allergängsten hellen Leggings gibt es keinerlei abzeichnende Ränder (Visible Panty Lines)."
    },
    {
      question: "Schwitze ich darin beim intensiven Workout?",
      answer: "Die Materialien sind speziell für den Sport konzipiert. Der Mikrofaser-Mix ist hoch atmungsaktiv, feuchtigkeitsableitend und schnelltrocknend. Es gibt keinen Feuchtigkeitsstau, sondern ein kühlendes und frisches Gefühl – auch nach einer schweren Session im Gym."
    }
  ];

  return (
    <section className="py-24 bg-background w-full px-4 border-t border-text/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-text mb-4">
            Du hast noch Zweifel?
          </h2>
          <p className="text-lg text-text/70 font-body">
            Wir kennen die Probleme von herkömmlicher Unterwäsche. Hier sind die Antworten auf die häufigsten Fragen.
          </p>
        </div>

        <div className="space-y-4">
          {objections.map((obj, index) => (
            <div 
              key={index} 
              className={`border border-text/10 rounded-2xl overflow-hidden bg-white transition-all duration-300 ${openIndex === index ? 'shadow-lg border-accent/20' : 'hover:border-text/30'}`}
            >
              <button 
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                className="w-full text-left px-6 py-6 flex justify-between items-center bg-white"
              >
                <span className="font-heading font-bold text-lg md:text-xl pr-8">{obj.question}</span>
                <span className={`transform transition-transform duration-300 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-background ${openIndex === index ? 'rotate-180 bg-accent text-white' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
              >
                <div className="px-6 pb-6 pt-0 text-text/80 leading-relaxed border-t border-background mt-2">
                  <br />
                  {obj.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectionCrusher;
