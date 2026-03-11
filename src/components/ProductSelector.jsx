import React, { useState } from 'react';
import { X } from 'lucide-react';

const LEGGINGS_VARIANTS = {
  'Schwarz': { 'S': '56823997104393', 'M': '56823997202697', 'L': '56823997301001', 'XL': '56823997399305' },
  'Wüstensand': { 'S': '56823997137161', 'M': '56823997235465', 'L': '56823997333769', 'XL': '56823997432073' },
  'Samtrot': { 'S': '56823997169929', 'M': '56823997268233', 'L': '56823997366537', 'XL': '56823997464841' }
};

const TOP_VARIANTS = {
  'Schwarz': { 'S': '56824018305289', 'M': '56824018403593', 'L': '56824018501897', 'XL': '56824018600201' },
  'Wüstensand': { 'S': '56824018338057', 'M': '56824018436361', 'L': '56824018534665', 'XL': '56824018632969' },
  'Samtrot': { 'S': '56824018370825', 'M': '56824018469129', 'L': '56824018567433', 'XL': '56824018665737' }
};

const TANGA_VARIANTS = {
  'Schwarz': { 'S': '55362091516169', 'M': '55362091548937', 'L': '55362091581705', 'XL': '55362091614473' },
  'Beige': { 'S': '55362091647241', 'M': '55362091680009', 'L': '55362091712777', 'XL': '55362091745545' }
};

const SLIP_VARIANTS = {
  'Schwarz': { 'S': '55377776476425', 'M': '55377776509193', 'L': '55377776541961', 'XL': '55377776574729' },
  'Beige': { 'S': '55377779032329', 'M': '55377779065097', 'L': '55377779097865', 'XL': '55377779130633' }
};

const SHAKER_ID = '56877036208393'; // Pink Shaker

const SizeGuideModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h3 className="text-xl font-bold font-heading">Größentabelle</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full"><X size={20} /></button>
        </div>
        <div className="p-6 space-y-8">
          <div>
            <h4 className="font-bold mb-3">Leggings (cm)</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 text-xs uppercase text-gray-700">
                  <tr><th className="px-4 py-2 text-text/60">Größe</th><th className="px-4 py-2">Länge</th><th className="px-4 py-2">Taille</th><th className="px-4 py-2">Hüfte</th></tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr><td className="px-4 py-2 font-bold bg-gray-50/50 text-text/60">S</td><td className="px-4 py-2">82</td><td className="px-4 py-2">48</td><td className="px-4 py-2">72</td></tr>
                  <tr><td className="px-4 py-2 font-bold bg-gray-50/50 text-text/60">M</td><td className="px-4 py-2">84</td><td className="px-4 py-2">52</td><td className="px-4 py-2">77</td></tr>
                  <tr><td className="px-4 py-2 font-bold bg-gray-50/50 text-text/60">L</td><td className="px-4 py-2">86</td><td className="px-4 py-2">56</td><td className="px-4 py-2">82</td></tr>
                  <tr><td className="px-4 py-2 font-bold bg-gray-50/50 text-text/60">XL</td><td className="px-4 py-2">88</td><td className="px-4 py-2">60</td><td className="px-4 py-2">87</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-3">Top (cm)</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 text-xs uppercase text-gray-700">
                  <tr><th className="px-4 py-2 text-text/60">Größe</th><th className="px-4 py-2">Länge</th><th className="px-4 py-2">Brust</th><th className="px-4 py-2">Saum</th></tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr><td className="px-4 py-2 font-bold bg-gray-50/50 text-text/60">S</td><td className="px-4 py-2">19</td><td className="px-4 py-2">62</td><td className="px-4 py-2">56</td></tr>
                  <tr><td className="px-4 py-2 font-bold bg-gray-50/50 text-text/60">M</td><td className="px-4 py-2">20</td><td className="px-4 py-2">67</td><td className="px-4 py-2">60</td></tr>
                  <tr><td className="px-4 py-2 font-bold bg-gray-50/50 text-text/60">L</td><td className="px-4 py-2">21</td><td className="px-4 py-2">72</td><td className="px-4 py-2">64</td></tr>
                  <tr><td className="px-4 py-2 font-bold bg-gray-50/50 text-text/60">XL</td><td className="px-4 py-2">22</td><td className="px-4 py-2">77</td><td className="px-4 py-2">68</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-3">Anti-Cameltoe Tanga / Slip (cm)</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 text-xs uppercase text-gray-700">
                  <tr><th className="px-4 py-2 text-text/60">Maß</th><th className="px-4 py-2 font-bold bg-gray-50/50 text-text/60">S</th><th className="px-4 py-2 font-bold bg-gray-50/50 text-text/60">M</th><th className="px-4 py-2 font-bold bg-gray-50/50 text-text/60">L</th><th className="px-4 py-2 font-bold bg-gray-50/50 text-text/60">XL</th></tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr><td className="px-4 py-2 font-bold text-text/60">Taille</td><td className="px-4 py-2">64</td><td className="px-4 py-2">68</td><td className="px-4 py-2">72</td><td className="px-4 py-2">76</td></tr>
                  <tr><td className="px-4 py-2 font-bold text-text/60">Länge</td><td className="px-4 py-2">22</td><td className="px-4 py-2">23</td><td className="px-4 py-2">24</td><td className="px-4 py-2">25</td></tr>
                  <tr><td className="px-4 py-2 font-bold text-text/60">Beinöffnung</td><td className="px-4 py-2">50</td><td className="px-4 py-2">52.8</td><td className="px-4 py-2">55.6</td><td className="px-4 py-2">58.4</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-text/60 mt-4 italic">Hinweis: Angaben in cm, flach gemessen. Geringe Abweichungen möglich.</p>
        </div>
      </div>
    </div>
  );
};

const ProductSelector = () => {
  const [step, setStep] = useState(1);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  // State for Step 1
  const [setColor, setSetColor] = useState('Schwarz');
  const [setSize, setSetSize] = useState('M');

  // State for Step 2
  const [bottomStyle, setBottomStyle] = useState('Tanga');
  const [bottomColor, setBottomColor] = useState('Schwarz');
  const [bottomSize, setBottomSize] = useState('M');

  const handleCheckout = () => {
    const leggingId = LEGGINGS_VARIANTS[setColor][setSize];
    const topId = TOP_VARIANTS[setColor][setSize];

    let bottomId;
    if (bottomStyle === 'Tanga') bottomId = TANGA_VARIANTS[bottomColor][bottomSize];
    else bottomId = SLIP_VARIANTS[bottomColor][bottomSize];

    const checkoutUrl = `https://nosheer.de/cart/${leggingId}:1,${topId}:1,${bottomId}:1,${SHAKER_ID}:1`;
    window.location.href = checkoutUrl;
  };

  const getBottomsImage = () => {
    if (bottomStyle === 'Tanga') {
      return bottomColor === 'Schwarz' ? 'Bild_Anti_Cameltoe_Tanga_Schwarz.png' : 'Bild_Frau_Anti_Cameltoe_Beige.png';
    } else {
      return bottomColor === 'Schwarz' ? 'Bild_Frau_Anti_Cameltoe_Slip_Schwarz.png' : 'Bild_Frau_Anti_Cameltoe_Slip_Beige.png';
    }
  };

  return (
    <section id="bundle-selector" className="py-24 bg-white w-full px-4">
      <SizeGuideModal isOpen={isSizeGuideOpen} onClose={() => setIsSizeGuideOpen(false)} />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-accent/10 text-accent font-bold rounded-full mb-4">
            Angebot: Spare 29%
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-text mb-4">
            Stelle dein Bundle zusammen
          </h2>
          <p className="text-lg text-text/70 font-body">
            Sichere dir das Performance Set und wir schenken dir ein Anti-Cameltoe Unterteil + Shaker dazu!
          </p>
        </div>

        <div className="bg-surface border border-text/10 rounded-3xl shadow-xl overflow-hidden p-6 md:p-10 md:pt-12 relative min-h-[500px]">

          {/* Progress Indicator */}
          <div className="flex gap-2 mb-10 w-full max-w-sm mx-auto">
            <div className={`h-2 flex-1 rounded-full ${step >= 1 ? 'bg-accent' : 'bg-background'}`}></div>
            <div className={`h-2 flex-1 rounded-full ${step >= 2 ? 'bg-accent' : 'bg-background'}`}></div>
            <div className={`h-2 flex-1 rounded-full ${step >= 3 ? 'bg-accent' : 'bg-background'}`}></div>
          </div>

          {/* Step 1: Performance Set */}
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-300">
              <h3 className="text-2xl font-heading font-bold mb-2">1. Dein Performance Set</h3>
              <p className="text-text/70 mb-8">Wähle Farbe und Größe für Leggings & Top.</p>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/2">
                  <img src={`./images/Bild 1_Leggings_Top_${setColor}.png`} alt={`${setColor} Set`} className="w-full rounded-2xl object-cover aspect-[4/5] bg-background" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <div className="flex justify-between items-center mb-3">
                    <label className="font-bold">Farbe:</label>
                    <span className="text-sm font-medium text-text/60">{setColor}</span>
                  </div>
                  <div className="flex gap-4 mb-8">
                    {['Schwarz', 'Wüstensand', 'Samtrot'].map(color => (
                      <button
                        key={color}
                        onClick={() => setSetColor(color)}
                        className={`w-12 h-12 rounded-full border-4 transition-all ${setColor === color ? 'border-accent scale-110 shadow-md' : 'border-transparent'}`}
                        style={{ backgroundColor: color === 'Schwarz' ? '#1A1A1A' : color === 'Wüstensand' ? '#D4C4B7' : '#8B0000' }}
                      />
                    ))}
                  </div>

                  <div className="flex justify-between items-center mb-3">
                    <label className="font-bold">Größe:</label>
                    <button onClick={() => setIsSizeGuideOpen(true)} className="text-sm font-medium text-accent underline hover:text-accent/80 transition-colors">Größentabelle</button>
                  </div>
                  <div className="flex gap-3 mb-10">
                    {['S', 'M', 'L', 'XL'].map(size => (
                      <button
                        key={size}
                        onClick={() => setSetSize(size)}
                        className={`flex-1 py-3 font-mono rounded-lg border transition-colors ${setSize === size ? 'bg-text text-white border-text' : 'bg-transparent text-text border-text/20 hover:border-text/50'}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setStep(2)}
                    className="w-full py-4 bg-text text-white font-bold text-lg rounded-xl hover:bg-text/90 transition-transform transform hover:scale-[1.02]"
                  >
                    Weiter zum Gratis-Unterteil →
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Gratis Unterteil */}
          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-300">
              <div className="inline-block bg-green-100 text-green-800 font-bold px-3 py-1 rounded-md mb-4 text-sm uppercase tracking-wide">Gratis Geschenk 1</div>
              <h3 className="text-2xl font-heading font-bold mb-2">2. Wähle dein Anti-Cameltoe Unterteil</h3>
              <p className="text-text/70 mb-8">Garantiert 100% unsichtbarer Halt unter dem Set (Wert: 17,90€).</p>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/2">
                  <img src={`./images/${getBottomsImage()}`} alt={`${bottomStyle} ${bottomColor}`} className="w-full rounded-2xl object-cover aspect-[4/5] bg-background border border-text/5" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">

                  <label className="font-bold mb-3 block">Schnitt:</label>
                  <div className="flex gap-3 mb-6">
                    {['Tanga', 'Slip'].map(style => (
                      <button
                        key={style}
                        onClick={() => setBottomStyle(style)}
                        className={`flex-1 py-3 font-bold rounded-lg border transition-colors ${bottomStyle === style ? 'bg-text text-white border-text' : 'bg-transparent text-text border-text/20 hover:border-text/50 hover:bg-background/50'}`}
                      >
                        {style}
                      </button>
                    ))}
                  </div>

                  <label className="font-bold mb-3 block">Farbe:</label>
                  <div className="flex gap-3 mb-6">
                    {['Schwarz', 'Beige'].map(c => (
                      <button
                        key={c}
                        onClick={() => setBottomColor(c)}
                        className={`flex-1 py-3 font-bold rounded-lg border transition-colors flex items-center justify-center gap-2 ${bottomColor === c ? 'bg-text text-white border-text' : 'bg-transparent text-text border-text/20 hover:border-text/50 hover:bg-background/50'}`}
                      >
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: c === 'Schwarz' ? '#1A1A1A' : '#D4C4B7' }}></span>
                        {c}
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-between items-center mb-3">
                    <label className="font-bold">Größe:</label>
                    <button onClick={() => setIsSizeGuideOpen(true)} className="text-sm font-medium text-accent underline hover:text-accent/80 transition-colors">Größentabelle</button>
                  </div>
                  <div className="flex gap-3 mb-10">
                    {['S', 'M', 'L', 'XL'].map(size => (
                      <button
                        key={size}
                        onClick={() => setBottomSize(size)}
                        className={`flex-1 py-3 font-mono rounded-lg border transition-colors ${bottomSize === size ? 'bg-text text-white border-text' : 'bg-transparent text-text border-text/20 hover:border-text/50 hover:bg-background/50'}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button onClick={() => setStep(1)} className="px-6 py-4 border border-text/20 hover:bg-background hover:border-text/40 rounded-xl font-bold transition-colors">Zurück</button>
                    <button onClick={() => setStep(3)} className="flex-1 py-4 bg-text text-white font-bold text-lg rounded-xl hover:bg-text/90 transition-transform transform hover:scale-[1.02]">Weiter zur Übersicht →</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Bundle Summary */}
          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-300">
              <h3 className="text-2xl font-heading font-bold mb-8 text-center">Dein komplettes Bundle</h3>

              <div className="space-y-4 mb-8">
                {/* Item 1: Performance Set */}
                <div className="flex justify-between items-center p-4 bg-background/50 border border-text/5 rounded-xl">
                  <div className="flex gap-4 items-center">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-text/10 bg-white shrink-0">
                      <img src={`./images/Bild 1_Leggings_Top_${setColor}.png`} className="w-full h-full object-cover" alt="Performance Set" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg leading-tight">Performance Set</h4>
                      <p className="text-text/60 text-sm mt-0.5">{setColor} • Größe {setSize}</p>
                    </div>
                  </div>
                  <div className="font-bold text-lg whitespace-nowrap">59,95 €</div>
                </div>

                {/* Item 2: Free Bottom */}
                <div className="flex justify-between items-center p-4 bg-green-50/50 border border-green-200/50 rounded-xl">
                  <div className="flex gap-4 items-center">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-text/10 bg-white shrink-0">
                      <img src={`./images/${getBottomsImage()}`} className="w-full h-full object-cover" alt="Gratis Unterteil" />
                      <div className="absolute -bottom-1 -right-1 bg-green-500 text-white rounded-full p-1 border-2 border-white shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" /><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" /></svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg leading-tight">Anti-Cameltoe {bottomStyle}</h4>
                      <p className="text-text/60 text-sm mt-0.5">{bottomColor} • Größe {bottomSize}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="line-through text-text/40 text-sm">17,90 €</div>
                    <div className="text-green-600 font-bold uppercase text-sm">Gratis</div>
                  </div>
                </div>

                {/* Item 3: Free Shaker */}
                <div className="flex justify-between items-center p-4 bg-green-50/50 border border-green-200/50 rounded-xl">
                  <div className="flex gap-4 items-center">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-text/10 bg-white p-2 shrink-0 flex items-center justify-center">
                      <img src="./images/Bild_Shaker_pink.png" className="h-full object-contain" alt="Gratis Shaker" />
                      <div className="absolute -bottom-1 -right-1 bg-green-500 text-white rounded-full p-1 border-2 border-white shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" /><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" /></svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg leading-tight">Shaker (Pink)</h4>
                      <p className="text-text/60 text-sm mt-0.5">500ml</p>
                    </div>
                  </div>
                  <div className="text-right flex flex-col items-end">
                    <div className="line-through text-text/40 text-sm">9,90 €</div>
                    <div className="text-green-600 font-bold uppercase text-sm">Gratis</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-end border-t border-text/10 pt-6 mb-8 mt-8">
                <div>
                  <div className="text-text/60 mb-1">Gesamtwert: <span className="line-through">84,95 €</span></div>
                  <div className="text-3xl font-heading font-bold text-text">59,95 €</div>
                </div>
                <div className="text-right text-sm text-green-700 font-bold bg-green-100 px-4 py-1.5 rounded-full ring-1 ring-green-200">
                  Du sparst 29%
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <button
                  onClick={handleCheckout}
                  className="w-full py-5 bg-accent text-white text-xl font-bold rounded-2xl hover:bg-accent/90 transition-transform transform hover:scale-[1.02] shadow-xl shadow-accent/20 flex flex-col items-center justify-center leading-tight"
                >
                  <span className="mb-1">Jetzt sicher zur Kasse →</span>
                  <span className="text-xs font-normal text-white/80">inkl. Gratis Versand in 1-3 Tagen</span>
                </button>
                <button onClick={() => setStep(1)} className="text-text/50 hover:text-text font-medium text-sm text-center transition-colors">
                  Bundle nochmal bearbeiten
                </button>
              </div>

              <div className="flex justify-center flex-wrap items-center gap-6 mt-6 opacity-60 grayscale transition-all hover:grayscale-0">
                <img src="./images/Klarna.svg" className="h-6" alt="Klarna" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-6" alt="PayPal" />
                <img src="./images/Visa.svg" className="h-6" alt="Visa" />
                <img src="./images/Maestro.svg" className="h-6" alt="Maestro" />
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default ProductSelector;
