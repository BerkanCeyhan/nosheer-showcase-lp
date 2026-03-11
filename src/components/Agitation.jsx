import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Agitation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.agitation-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        }
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-surface w-full px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-text mb-4">
            Du kennst dieses Gefühl zu gut.
          </h2>
          <p className="text-lg text-text/70 font-body max-w-2xl mx-auto">
            Egal ob im Gym oder im engen Kleid – falsche Unterwäsche ruiniert nicht nur das Outfit, sondern auch deinen Fokus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="agitation-card bg-background p-8 rounded-2xl shadow-sm border border-text/5 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">👀</span>
            </div>
            <h3 className="text-xl font-heading font-bold mb-3">Der ständige Blick</h3>
            <p className="text-text/70">Du ziehst ständig an deiner Leggings, weil sich vorne alles unvorteilhaft abzeichnet (Camel-Toe).</p>
          </div>

          <div className="agitation-card bg-background p-8 rounded-2xl shadow-sm border border-text/5 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">✂️</span>
            </div>
            <h3 className="text-xl font-heading font-bold mb-3">Sichtbare Nähte</h3>
            <p className="text-text/70">Visible Panty Lines (VPL) zerstören die makellose Silhouette deines Outfits.</p>
          </div>

          <div className="agitation-card bg-background p-8 rounded-2xl shadow-sm border border-text/5 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">😫</span>
            </div>
            <h3 className="text-xl font-heading font-bold mb-3">Unbequem & Einschneidend</h3>
            <p className="text-text/70">Herkömmliche Slips verrutschen beim Workout, kneifen und lassen dich oft schwitzen.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agitation;
