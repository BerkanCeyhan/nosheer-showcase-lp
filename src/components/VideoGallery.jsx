import React, { useEffect, useRef, useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const VIDEOS = [
  './images/AQPKdFNUU3q7f4E1epWhxX4-S433-3rbxil-tRj2jsVVyYJm2gtKSYpZus0EVD4tZ5Q_M9Vim_SN5fK-76GpcFC-.mp4',
  './images/AQOxpn6KL5cpvnhmFbpiDJNUfKEgp2ZJ0J4LKwKTGdLpAYCyMqhoOZwykS2SBMHEM--nhFHGV2bfaEGica6qyHFmlABEyahFlVux1cg.mp4',
  './images/AQNQCPlX23TAP9sN9-yIldUC75XxPGp81RcHRr0u6UTAd_870Rq3cpmQRPQcwRezq7M_jrgEORPdg6onSVLvIIK8gjnuKeq_fdndCcJHfA.mp4',
];

// Autoplay nur wenn im Viewport – spart CPU/Bandbreite (Performance)
const PreviewVideo = ({ src, onOpen }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <button
      onClick={onOpen}
      className="group relative w-full overflow-hidden rounded-2xl bg-background aspect-[9/16] border border-text/5 shadow-sm"
    >
      <video
        ref={ref}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      />
      {/* Clean Play-Icon, keine Controls */}
      <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white/85 backdrop-blur-sm shadow-lg transition-transform group-hover:scale-110">
          <Play size={22} className="text-text translate-x-0.5" fill="currentColor" />
        </span>
      </span>
    </button>
  );
};

const Lightbox = ({ index, onClose, onNav }) => {
  const touchStartX = useRef(null);

  // Keyboard nav + scroll-lock
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') onNav(1);
      else if (e.key === 'ArrowLeft') onNav(-1);
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, onNav]);

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) onNav(dx < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors"
        aria-label="Schließen"
      >
        <X size={24} />
      </button>

      {/* Prev (Desktop) */}
      <button
        onClick={(e) => { e.stopPropagation(); onNav(-1); }}
        className="hidden sm:flex absolute left-4 z-10 p-3 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors"
        aria-label="Vorheriges Video"
      >
        <ChevronLeft size={28} />
      </button>

      <div
        className="relative"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <video
          key={index}
          src={VIDEOS[index]}
          autoPlay
          controls
          loop
          playsInline
          preload="auto"
          className="rounded-2xl max-h-[85vh] max-w-[92vw] w-auto object-contain shadow-2xl bg-black"
        />
        <div className="flex justify-center gap-2 mt-4">
          {VIDEOS.map((_, i) => (
            <span key={i} className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-white' : 'w-1.5 bg-white/40'}`} />
          ))}
        </div>
      </div>

      {/* Next (Desktop) */}
      <button
        onClick={(e) => { e.stopPropagation(); onNav(1); }}
        className="hidden sm:flex absolute right-4 z-10 p-3 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors"
        aria-label="Nächstes Video"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
};

const VideoGallery = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const nav = useCallback((dir) => {
    setOpenIndex((i) => (i + dir + VIDEOS.length) % VIDEOS.length);
  }, []);

  return (
    <section className="py-16 bg-white w-full px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-heading font-bold text-text mb-8 text-center">
          Sieh NOSHEER in Aktion
        </h2>
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {VIDEOS.map((src, i) => (
            <PreviewVideo key={i} src={src} onOpen={() => setOpenIndex(i)} />
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <Lightbox index={openIndex} onClose={() => setOpenIndex(null)} onNav={nav} />
      )}
    </section>
  );
};

export default VideoGallery;
