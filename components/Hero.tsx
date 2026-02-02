
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[400px] md:h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=2000" 
          alt="Natural Skincare" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start text-white">
        <span className="bg-[#d4af37] text-xs font-bold px-3 py-1 uppercase tracking-widest mb-4">New Arrival</span>
        <h1 className="text-4xl md:text-7xl font-bold serif mb-4 leading-tight">
          Pure Essence of <br /> Ayurveda.
        </h1>
        <p className="text-lg md:text-xl max-w-lg mb-8 opacity-90 font-light">
          Experience the ancient wisdom of nature with our handcrafted skincare rituals. 100% organic, cruelty-free, and ethically sourced.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="bg-[#1a3b32] hover:bg-[#264d42] text-white px-8 py-3 rounded-none font-semibold uppercase tracking-wider transition-all shadow-lg">
            Shop Now
          </a>
          <a href="#" className="bg-white hover:bg-gray-100 text-[#1a3b32] px-8 py-3 rounded-none font-semibold uppercase tracking-wider transition-all">
            Our Story
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
