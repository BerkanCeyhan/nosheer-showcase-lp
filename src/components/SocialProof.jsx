import React from 'react';

const SocialProof = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      verified: true,
      text: "Ich war echt skeptisch wegen dem 'Windel-Effekt', aber der Tanga ist hauchdünn. Ich trage ihn jetzt bei jedem Leg-Day. Endlich muss ich nicht mehr ständig rumzupfen!",
      problemSolved: "Kein Cameltoe im Gym"
    },
    {
      name: "Laura K.",
      verified: true,
      text: "Normalerweise habe ich unter meinen Date-Kleidern immer Ränder von der Unterwäsche gesehen. Der NOSHEER Slip ist das erste Mal wirklich 100% unsichtbar.",
      problemSolved: "Keine Abdrücke unterm Kleid"
    },
    {
      name: "Jasmin T.",
      verified: true,
      text: "Sitzt wie eine zweite Haut und verrutscht null, selbst beim Laufen. Das Set formt super und ist extrem atmungsaktiv. Bin absolut begeistert.",
      problemSolved: "Maximaler Halt beim Laufen"
    }
  ];

  // Verifizierte Foto-Bewertungen (Loox) von nosheer.de
  const photoReviews = [
    { name: "Nadine D.", img: "review_1.jpg", text: "Super bequeme Sportkleidung 😍 der Stoff ist sehr angenehm zu tragen und der Schnitt ist ein Traum. Ich würde jederzeit wieder kaufen. ❤️" },
    { name: "Desi R.", img: "review_2.jpg", text: "Ich liebe dieses Set! Es sitzt einfach perfekt, formt schön die Figur und ist dabei sooo bequem. Nichts verrutscht. Absolute Empfehlung!" },
    { name: "Christin B.", img: "review_3.jpg", text: "Ich liebe diese Produkte, sie sitzen super, kneifen nicht, zwicken nicht und man merkt sie kaum. Und sehen tut man sie auch nicht. 🫶🏽" },
    { name: "Karina E.", img: "review_4.jpg", text: "Super bequeme Leggings. Sie sind schön fest, zaubern eine sehr schöne Figur und sind angenehm auf der Haut. Top Qualität. Absolute Empfehlung!" },
    { name: "Manuela R.", img: "review_5.jpg", text: "Hier wird Komfort groß geschrieben. Sitzt einfach super. Die Slipeinlage kann man sich sparen. Man kann einfach seine normale Größe nehmen. Begeistert 😁" },
    { name: "Mary F.", img: "review_6.jpg", text: "Absolut perfekt für den Sport, passt sich total toll an, hält jeder Bewegung stand, keine Abdrücke. Auch unter hellen Hosen perfekt. Total begeistert." },
  ];

  return (
    <section className="py-24 bg-surface w-full px-4 border-t border-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-text">
            Das sagen unsere Kundinnen
          </h2>
        </div>

        {/* Verifizierte Foto-Bewertungen (Loox) zuerst */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {photoReviews.map((r, i) => (
              <div key={i} className="bg-white border border-text/5 rounded-2xl shadow-sm overflow-hidden flex flex-col">
                <div className="aspect-square bg-background overflow-hidden">
                  <img
                    src={`./images/reviews/${r.img}`}
                    alt={`Bewertung von ${r.name}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 md:p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-1 text-accent mb-2">
                    {[...Array(5)].map((_, s) => (
                      <svg key={s} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-text/80 mb-4 leading-relaxed flex-1">"{r.text}"</p>
                  <div className="flex items-center gap-2 mt-auto">
                    <span className="font-heading font-bold text-sm">{r.name}</span>
                    <span className="text-[10px] font-mono bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Verifiziert</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Kurz-Testimonials darunter (seamless) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            {testimonials.map((t, index) => (
              <div key={index} className="bg-white border border-text/5 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-1 text-accent mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-text/80 italic mb-6">"{t.text}"</p>
                <div className="mt-auto pt-6 border-t border-background/50 flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-heading font-bold">{t.name}</span>
                    {t.verified && (
                       <span className="text-xs font-mono bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Verifiziert</span>
                    )}
                  </div>
                  <div className="text-sm font-semibold text-accent/80">Gelöst: {t.problemSolved}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default SocialProof;
