
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Use a placeholder if image is broken or missing
  const imageUrl = product.image || `https://picsum.photos/seed/${product.id}/400/500`;
  const discount = product.mrp > product.price 
    ? Math.round(((product.mrp - product.price) / product.mrp) * 100) 
    : 0;

  return (
    <div className="group relative bg-white border border-gray-100 transition-all duration-300 hover:shadow-xl flex flex-col h-full">
      {/* Badge */}
      {discount > 0 && (
        <span className="absolute top-4 left-4 z-10 bg-red-600 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-tighter">
          {discount}% OFF
        </span>
      )}
      
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[4/5] bg-gray-50">
        <img 
          src={imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${product.id}/400/500`;
          }}
        />
        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full bg-[#1a3b32] text-white py-2 text-xs font-bold uppercase tracking-wider hover:bg-[#d4af37] transition-colors">
            Add To Cart
          </button>
        </div>
        
        {/* Wishlist Button */}
        <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors bg-white/80 p-2 rounded-full">
          <i className="far fa-heart"></i>
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow text-center">
        <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-bold mb-1">
          {product.category_name || 'Ayurvedic Essence'}
        </span>
        <h3 className="text-base font-bold text-[#1a3b32] mb-2 line-clamp-2 h-12 flex items-center justify-center">
          {product.name}
        </h3>
        
        {/* Rating Placeholder */}
        <div className="flex justify-center text-[#d4af37] text-[10px] mb-3">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half-alt"></i>
          <span className="text-gray-400 ml-1">(4.8)</span>
        </div>

        <div className="mt-auto">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-lg font-bold text-[#1a3b32]">₹{product.price}</span>
            {product.mrp > product.price && (
              <span className="text-sm text-gray-400 line-through">₹{product.mrp}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
