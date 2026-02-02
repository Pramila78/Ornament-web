
import React from 'react';

const categories = [
  { name: 'Face Care', icon: 'fa-spa', img: 'https://images.unsplash.com/photo-1598440441235-86646cc262a6?auto=format&fit=crop&q=80&w=300' },
  { name: 'Hair Care', icon: 'fa-wind', img: 'https://images.unsplash.com/photo-1527799822340-30b1c324322d?auto=format&fit=crop&q=80&w=300' },
  { name: 'Body Care', icon: 'fa-leaf', img: 'https://images.unsplash.com/photo-1552046122-03184de85e08?auto=format&fit=crop&q=80&w=300' },
  { name: 'Wellness', icon: 'fa-heart', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=300' },
  { name: 'Gifts', icon: 'fa-gift', img: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=300' },
];

const CategorySection: React.FC = () => {
  return (
    <section className="py-16 bg-[#faf9f6]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {categories.map((cat, idx) => (
            <div key={idx} className="group cursor-pointer flex flex-col items-center">
              <div className="w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-transparent group-hover:border-[#d4af37] transition-all duration-300 p-1 mb-4">
                <img 
                  src={cat.img} 
                  alt={cat.name} 
                  className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-[#1a3b32] group-hover:text-[#d4af37] transition-colors">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
