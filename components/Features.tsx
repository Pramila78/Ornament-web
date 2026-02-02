
import React from 'react';

const Features: React.FC = () => {
  const features = [
    { icon: 'fa-leaf', title: '100% Organic', desc: 'Crafted with natural extracts' },
    { icon: 'fa-shield-halved', title: 'Ayurvedic', desc: 'Ancient wisdom applied' },
    { icon: 'fa-truck-fast', title: 'Fast Shipping', desc: 'Delivery across India' },
    { icon: 'fa-hand-holding-heart', title: 'Ethical', desc: 'Cruelty-free & fair trade' }
  ];

  return (
    <section className="py-12 bg-[#1a3b32] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 mb-4 flex items-center justify-center border border-[#d4af37] rounded-full group-hover:bg-[#d4af37] transition-all">
                <i className={`fas ${f.icon} text-[#d4af37] group-hover:text-[#1a3b32]`}></i>
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-1">{f.title}</h3>
              <p className="text-xs text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
