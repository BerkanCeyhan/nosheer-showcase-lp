import React from 'react';
import Hero from './components/Hero';
import Agitation from './components/Agitation';
import Mechanism from './components/Mechanism';
import SocialProof from './components/SocialProof';
import ProductSelector from './components/ProductSelector';
import VideoGallery from './components/VideoGallery';
import ObjectionCrusher from './components/ObjectionCrusher';
import Technology from './components/Technology';
import Guarantee from './components/Guarantee';
import FooterCTA from './components/FooterCTA';
import StickyCTA from './components/StickyCTA';

function App() {
  return (
    <div className="relative w-full overflow-hidden">
      <Hero />
      <Mechanism />
      <ProductSelector />
      <VideoGallery />
      <SocialProof />
      <Agitation />
      <ObjectionCrusher />
      <Technology />
      <Guarantee />
      <FooterCTA />
      
      {/* Sticky Bottom Bar */}
      <StickyCTA />
    </div>
  );
}

export default App;
