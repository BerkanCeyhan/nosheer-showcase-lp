import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

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

// ⚠️ Diese Preise müssen über Shopify-Rabatte (idealerweise AUTOMATISCHE, mengenbasierte
// Rabatte) erzwungen werden, damit die Checkout-Summe der hier angezeigten Summe entspricht.
// Der DISCOUNT_CODE unten wird per ?discount= an die Cart-URL gehängt – pro Tier ggf. anpassen.
const DISCOUNT_CODE = '9P3WBSF86FX4';

// Hero-Produkt: Anti-Cameltoe Unterwäsche als Multipack (fallender Stückpreis)
const SINGLE_PRICE = 17.90;
const PACK_TIERS = {
  1: { qty: 1, price: 17.90, badge: null },
  3: { qty: 3, price: 39.90, badge: 'Beliebteste' },
  5: { qty: 5, price: 59.90, badge: 'Bester Preis' },
};

// Optionaler Upsell: Performance Set (Leggings + Top)
const UPSELL_PRICE = 39.00;
const UPSELL_ANCHOR = 49.95;

const SHAKER_VALUE = 9.90;

const eur = (n) => n.toFixed(2).replace('.', ',') + ' €';

const OUT_OF_STOCK = new Set([]);

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
          <p className="text-xs text-text/60 mt-4 italic">Hinweis: Angaben in cm, flach gemessen. Geringe Abweichungen möglich.</p>
        </div>
      </div>
    </div>
  );
};

const ProductSelector = () => {
  const [step, setStep] = useState(1);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  // Step 1: Anti-Cameltoe Unterwäsche (Hero-Produkt)
  const [packQty, setPackQty] = useState(3);
  const [bottomStyle, setBottomStyle] = useState('Tanga');
  const [bottomColor, setBottomColor] = useState('Schwarz');
  const [bottomSize, setBottomSize] = useState('M');

  // Step 2: Optionaler Upsell Performance Set
  const [addSet, setAddSet] = useState(false);
  const [setColor, setSetColor] = useState('Schwarz');
  const [leggingsSize, setLeggingsSize] = useState('M');
  const [topSize, setTopSize] = useState('M');

  const isOOS = (style, color, size) => OUT_OF_STOCK.has(`${style}-${color}-${size}`);

  const firstAvailableSize = (style, color) =>
    ['S', 'M', 'L', 'XL'].find(size => !isOOS(style, color, size)) || 'S';

  const handleBottomStyleChange = (style) => {
    setBottomStyle(style);
    if (isOOS(style, bottomColor, bottomSize)) setBottomSize(firstAvailableSize(style, bottomColor));
  };

  const handleBottomColorChange = (color) => {
    setBottomColor(color);
    if (isOOS(bottomStyle, color, bottomSize)) setBottomSize(firstAvailableSize(bottomStyle, color));
  };

  const packPrice = PACK_TIERS[packQty].price;
  const total = packPrice + (addSet ? UPSELL_PRICE : 0);
  // Gratis Versand erst ab 3er-Set (ab 35 €); Einzelpack zzgl. Versand
  const freeShipping = packQty >= 3;
  const packAnchor = packQty * SINGLE_PRICE;
  // Gesamt-Streichwert (für "Du sparst X%"): Unterwäsche-UVP + Set-UVP (falls gewählt) + Shaker-Wert
  const fullValue = packAnchor + (addSet ? UPSELL_ANCHOR : 0) + SHAKER_VALUE;
  const savingsPct = Math.round((1 - total / fullValue) * 100);

  const handleCheckout = () => {
    let bottomId;
    if (bottomStyle === 'Tanga') bottomId = TANGA_VARIANTS[bottomColor][bottomSize];
    else bottomId = SLIP_VARIANTS[bottomColor][bottomSize];

    const parts = [`${bottomId}:${packQty}`, `${SHAKER_ID}:1`];
    if (addSet) {
      parts.push(`${LEGGINGS_VARIANTS[setColor][leggingsSize]}:1`);
      parts.push(`${TOP_VARIANTS[setColor][topSize]}:1`);
    }

    const checkoutUrl = `https://nosheer.de/cart/${parts.join(',')}?discount=${DISCOUNT_CODE}`;
    window.location.href = checkoutUrl;
  };

  const getSingleImage = () => {
    if (bottomStyle === 'Tanga') {
      return bottomColor === 'Schwarz' ? 'Bild_Anti_Cameltoe_Tanga_Schwarz.png' : 'Bild_Frau_Anti_Cameltoe_Beige.png';
    } else {
      return bottomColor === 'Schwarz' ? 'Bild_Frau_Anti_Cameltoe_Slip_Schwarz.png' : 'Bild_Frau_Anti_Cameltoe_Slip_Beige.png';
    }
  };

  // Bei Multipacks (3/5) KI-generierte Pack-Bilder zeigen, sonst Einzelbild
  const getBottomsImage = () => {
    if (packQty > 1) return `pack_${bottomStyle}_${bottomColor}_${packQty}.png`;
    return getSingleImage();
  };

  return (
    <section id="bundle-selector" className="py-24 bg-white w-full px-4">
      <SizeGuideModal isOpen={isSizeGuideOpen} onClose={() => setIsSizeGuideOpen(false)} />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-accent/10 text-accent font-bold rounded-full mb-4">
            🎁 Gratis Shaker zu jeder Bestellung + Gratis Versand ab 3er-Set 🎁
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-text mb-4">
            Dein Anti-Cameltoe Set
          </h2>
          <p className="text-lg text-text/70 font-body">
            Sichere dir den unsichtbaren Halt unter jeder Leggings – je mehr du nimmst, desto günstiger.
          </p>
        </div>

        <div className="bg-surface border border-text/10 rounded-3xl shadow-xl overflow-hidden p-6 md:p-10 md:pt-12 relative min-h-[500px]">

          {/* Progress Indicator */}
          <div className="flex gap-2 mb-10 w-full max-w-sm mx-auto">
            <div className={`h-2 flex-1 rounded-full ${step >= 1 ? 'bg-accent' : 'bg-background'}`}></div>
            <div className={`h-2 flex-1 rounded-full ${step >= 2 ? 'bg-accent' : 'bg-background'}`}></div>
            <div className={`h-2 flex-1 rounded-full ${step >= 3 ? 'bg-accent' : 'bg-background'}`}></div>
          </div>

          {/* Step 1: Anti-Cameltoe Unterwäsche */}
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-300">
              <h3 className="text-2xl font-heading font-bold mb-2">1. Wähle dein Anti-Cameltoe Set</h3>
              <p className="text-text/70 mb-8">100% unsichtbarer Halt – kein Camel-Toe, keine Abdrücke.</p>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/2">
                  <img src={`./images/${getBottomsImage()}`} alt={`${bottomStyle} ${bottomColor}`} className="w-full rounded-2xl object-cover aspect-[4/5] bg-background border border-text/5" />
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    <img src="https://cdn.shopify.com/s/files/1/0834/7526/7849/files/34_3.jpg?v=1745939166" alt="Detail" loading="lazy" className="w-full rounded-lg object-cover aspect-square bg-background border border-text/5" />
                    <img src="https://cdn.shopify.com/s/files/1/0834/7526/7849/files/35_3.jpg?v=174593916" alt="Detail" loading="lazy" className="w-full rounded-lg object-cover aspect-square bg-background border border-text/5" />
                    <img src="./images/genäht_vs_verklebt.png" alt="Genäht vs. verklebt" loading="lazy" className="w-full rounded-lg object-cover aspect-square bg-background border border-text/5" />
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">

                  {/* Menge / Pack-Tier */}
                  <label className="font-bold mb-3 block">Menge:</label>
                  <div className="flex flex-col gap-3 mb-6">
                    {[1, 3, 5].map(qty => {
                      const tier = PACK_TIERS[qty];
                      const active = packQty === qty;
                      return (
                        <button
                          key={qty}
                          onClick={() => setPackQty(qty)}
                          className={`relative flex items-center justify-between gap-3 px-4 py-3 rounded-xl border-2 transition-all text-left ${active ? 'border-accent bg-accent/5 shadow-sm' : 'border-text/15 hover:border-text/40'}`}
                        >
                          {tier.badge && (
                            <span className="absolute -top-2.5 right-3 text-[9px] sm:text-[10px] font-bold uppercase tracking-wide bg-accent text-white px-2 py-0.5 rounded-full shadow-sm whitespace-nowrap">{tier.badge}</span>
                          )}
                          <div className="flex items-center gap-3 min-w-0">
                            <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${active ? 'border-accent bg-accent' : 'border-text/30'}`}>
                              {active && <Check size={12} className="text-white" strokeWidth={3} />}
                            </span>
                            <span className="font-bold whitespace-nowrap">{qty} Stück</span>
                          </div>
                          <div className="text-right shrink-0 whitespace-nowrap">
                            <div className="font-bold">{eur(tier.price)}</div>
                            {qty > 1 && <div className="text-xs text-text/50">{eur(tier.price / qty)}/Stück</div>}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <label className="font-bold mb-3 block">Schnitt:</label>
                  <div className="flex gap-3 mb-6">
                    {['Tanga', 'Slip'].map(style => (
                      <button
                        key={style}
                        onClick={() => handleBottomStyleChange(style)}
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
                        onClick={() => handleBottomColorChange(c)}
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
                  <div className="flex gap-3 mb-6">
                    {['S', 'M', 'L', 'XL'].map(size => {
                      const oos = isOOS(bottomStyle, bottomColor, size);
                      return (
                      <button
                        key={size}
                        onClick={() => !oos && setBottomSize(size)}
                        disabled={oos}
                        className={`flex-1 py-3 font-mono rounded-lg border transition-colors relative ${oos ? 'opacity-40 cursor-not-allowed border-text/10 text-text/40' : bottomSize === size ? 'bg-text text-white border-text' : 'bg-transparent text-text border-text/20 hover:border-text/50 hover:bg-background/50'}`}
                      >
                        {size}
                      </button>
                      );
                    })}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 border border-green-200/60 rounded-lg px-3 py-2 mb-8">
                    <Check size={16} strokeWidth={3} /> {freeShipping ? 'Gratis Shaker & Gratis Versand inklusive' : 'Gratis Shaker inklusive · Gratis Versand ab 3er-Set'}
                  </div>

                  <button
                    onClick={() => setStep(2)}
                    className="w-full py-4 bg-text text-white font-bold text-base sm:text-lg rounded-xl hover:bg-text/90 transition-transform transform hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    <span className="whitespace-nowrap">Weiter</span> →
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Optionaler Upsell – Performance Set */}
          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-300">
              <div className="inline-block bg-accent/10 text-accent font-bold px-3 py-1 rounded-md mb-4 text-sm uppercase tracking-wide">Optional · Nur jetzt</div>
              <h3 className="text-2xl font-heading font-bold mb-2">2. Performance Set dazu?</h3>
              <p className="text-text/70 mb-8">Leggings + Top im perfekten Zweite-Haut-Sitz – einmalig <span className="font-bold text-text">{eur(UPSELL_PRICE)}</span> statt <span className="line-through">{eur(UPSELL_ANCHOR)}</span>.</p>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/2">
                  <img src={`./images/Bild 1_Leggings_Top_${setColor}.png`} alt={`${setColor} Set`} className="w-full rounded-2xl object-cover aspect-[4/5] bg-background" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">

                  {/* Ja / Nein Toggle */}
                  <div className="flex flex-col gap-3 mb-6">
                    <button
                      onClick={() => setAddSet(true)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all text-left ${addSet ? 'border-accent bg-accent/5 shadow-sm' : 'border-text/15 hover:border-text/40'}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${addSet ? 'border-accent bg-accent' : 'border-text/30'}`}>
                          {addSet && <Check size={12} className="text-white" strokeWidth={3} />}
                        </span>
                        <span className="font-bold">Ja, Set hinzufügen</span>
                      </div>
                      <span className="font-bold text-accent">+{eur(UPSELL_PRICE)}</span>
                    </button>
                    <button
                      onClick={() => setAddSet(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all text-left ${!addSet ? 'border-text bg-background' : 'border-text/15 hover:border-text/40'}`}
                    >
                      <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${!addSet ? 'border-text bg-text' : 'border-text/30'}`}>
                        {!addSet && <Check size={12} className="text-white" strokeWidth={3} />}
                      </span>
                      <span className="font-bold">Nein danke</span>
                    </button>
                  </div>

                  {/* Set-Optionen nur wenn hinzugefügt */}
                  {addSet && (
                    <div className="animate-in fade-in duration-200 mb-2">
                      <div className="flex justify-between items-center mb-3">
                        <label className="font-bold">Farbe:</label>
                        <span className="text-sm font-medium text-text/60">{setColor}</span>
                      </div>
                      <div className="flex gap-4 mb-6">
                        {['Schwarz', 'Wüstensand', 'Samtrot'].map(color => (
                          <button
                            key={color}
                            onClick={() => setSetColor(color)}
                            className={`w-10 h-10 rounded-full border-4 transition-all ${setColor === color ? 'border-accent scale-110 shadow-md' : 'border-transparent'}`}
                            style={{ backgroundColor: color === 'Schwarz' ? '#1A1A1A' : color === 'Wüstensand' ? '#D4C4B7' : '#8B0000' }}
                          />
                        ))}
                      </div>

                      <div className="flex justify-between items-center mb-3">
                        <label className="font-bold">Leggings Größe:</label>
                        <button onClick={() => setIsSizeGuideOpen(true)} className="text-sm font-medium text-accent underline hover:text-accent/80 transition-colors">Größentabelle</button>
                      </div>
                      <div className="flex gap-3 mb-5">
                        {['S', 'M', 'L', 'XL'].map(size => (
                          <button
                            key={size}
                            onClick={() => setLeggingsSize(size)}
                            className={`flex-1 py-3 font-mono rounded-lg border transition-colors ${leggingsSize === size ? 'bg-text text-white border-text' : 'bg-transparent text-text border-text/20 hover:border-text/50'}`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>

                      <label className="font-bold mb-3 block">Top Größe:</label>
                      <div className="flex gap-3">
                        {['S', 'M', 'L', 'XL'].map(size => (
                          <button
                            key={size}
                            onClick={() => setTopSize(size)}
                            className={`flex-1 py-3 font-mono rounded-lg border transition-colors ${topSize === size ? 'bg-text text-white border-text' : 'bg-transparent text-text border-text/20 hover:border-text/50'}`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-4 mt-8">
                    <button onClick={() => setStep(1)} className="px-6 py-4 border border-text/20 hover:bg-background hover:border-text/40 rounded-xl font-bold transition-colors">Zurück</button>
                    <button onClick={() => setStep(3)} className="flex-1 py-4 bg-text text-white font-bold text-lg rounded-xl hover:bg-text/90 transition-transform transform hover:scale-[1.02]">Weiter zur Übersicht →</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Übersicht */}
          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-300">
              <h3 className="text-2xl font-heading font-bold mb-8 text-center">Deine Bestellung</h3>

              <div className="space-y-4 mb-8">
                {/* Item 1: Anti-Cameltoe Pack (bezahlt) */}
                <div className="flex justify-between items-center p-4 bg-background/50 border border-text/5 rounded-xl">
                  <div className="flex gap-4 items-center">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-text/10 bg-white shrink-0">
                      <img src={`./images/${getBottomsImage()}`} className="w-full h-full object-cover" alt="Anti-Cameltoe Set" />
                      {packQty > 1 && (
                        <div className="absolute -bottom-1 -right-1 bg-text text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-white">{packQty}×</div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg leading-tight">Anti-Cameltoe {bottomStyle}{packQty > 1 ? ` (${packQty}er)` : ''}</h4>
                      <p className="text-text/60 text-sm mt-0.5">{bottomColor} • Größe {bottomSize}</p>
                    </div>
                  </div>
                  <div className="text-right whitespace-nowrap">
                    {packQty > 1 && <div className="line-through text-text/40 text-sm">{eur(packAnchor)}</div>}
                    <div className="font-bold text-lg">{eur(packPrice)}</div>
                  </div>
                </div>

                {/* Item 2: Performance Set (optional, bezahlt) */}
                {addSet && (
                  <div className="flex justify-between items-center p-4 bg-background/50 border border-text/5 rounded-xl">
                    <div className="flex gap-4 items-center">
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-text/10 bg-white shrink-0">
                        <img src={`./images/Bild 1_Leggings_Top_${setColor}.png`} className="w-full h-full object-cover" alt="Performance Set" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg leading-tight">Performance Set</h4>
                        <p className="text-text/60 text-sm mt-0.5">{setColor} • Leggings {leggingsSize} / Top {topSize}</p>
                      </div>
                    </div>
                    <div className="text-right whitespace-nowrap">
                      <div className="line-through text-text/40 text-sm">{eur(UPSELL_ANCHOR)}</div>
                      <div className="font-bold text-lg">{eur(UPSELL_PRICE)}</div>
                    </div>
                  </div>
                )}

                {/* Item 3: Gratis Shaker */}
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
                    <div className="line-through text-text/40 text-sm">{eur(SHAKER_VALUE)}</div>
                    <div className="text-green-600 font-bold uppercase text-sm">Gratis</div>
                  </div>
                </div>

                {/* Item 4: Versand */}
                <div className="flex justify-between items-center px-4 py-3 text-sm">
                  <span className="text-text/70 font-medium">Versand</span>
                  {freeShipping ? (
                    <span className="text-green-600 font-bold uppercase">Gratis</span>
                  ) : (
                    <span className="text-text/60">zzgl. Versand · gratis ab 3er-Set</span>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-end gap-3 border-t border-text/10 pt-6 mb-8 mt-8">
                <div>
                  <div className="text-text/60 mb-1 whitespace-nowrap">Gesamtwert: <span className="line-through">{eur(fullValue)}</span></div>
                  <div className="text-3xl font-heading font-bold text-text whitespace-nowrap">{eur(total)}</div>
                </div>
                <div className="text-sm text-green-700 font-bold bg-green-100 px-4 py-1.5 rounded-full ring-1 ring-green-200 whitespace-nowrap self-start sm:self-auto">
                  Du sparst {savingsPct}%
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <button
                  onClick={handleCheckout}
                  className="w-full py-4 sm:py-5 bg-accent text-white font-bold rounded-2xl hover:bg-accent/90 transition-transform transform hover:scale-[1.02] shadow-xl shadow-accent/20 flex flex-col items-center justify-center leading-tight px-2"
                >
                  <span className="mb-1 text-lg sm:text-xl whitespace-nowrap">Jetzt sicher zur Kasse →</span>
                  <span className="text-[10px] sm:text-xs font-normal text-white/80 whitespace-nowrap">{freeShipping ? 'inkl. Gratis Versand in 1-3 Tagen' : 'Lieferung in 1-3 Tagen · zzgl. Versand'}</span>
                </button>
                <button onClick={() => setStep(1)} className="text-text/50 hover:text-text font-medium text-sm text-center transition-colors">
                  Bestellung nochmal bearbeiten
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
