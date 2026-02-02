
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Banner */}
      <div className="bg-[#1a3b32] text-white text-xs py-2 text-center uppercase tracking-widest font-medium">
        Free Shipping on Orders Over ₹999 | 100% Pure & Natural
      </div>

      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-[#1a3b32] text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="text-2xl md:text-3xl font-bold text-[#1a3b32] serif tracking-tight">
            KHUS <span className="text-[#d4af37]">INDIA</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-8 text-sm font-semibold uppercase tracking-wider text-[#1a3b32]">
          <li><a href="#" className="hover:text-[#d4af37] transition-colors">Home</a></li>
          <li><a href="#" className="hover:text-[#d4af37] transition-colors">Shop All</a></li>
          <li><a href="#" className="hover:text-[#d4af37] transition-colors">Face Care</a></li>
          <li><a href="#" className="hover:text-[#d4af37] transition-colors">Hair Care</a></li>
          <li><a href="#" className="hover:text-[#d4af37] transition-colors">Body Care</a></li>
          <li><a href="#" className="hover:text-[#d4af37] transition-colors">Gifts</a></li>
        </ul>

        {/* Icons */}
        <div className="flex items-center space-x-5 text-[#1a3b32]">
          <button className="hidden md:block hover:text-[#d4af37] transition-colors">
            <i className="fas fa-search"></i>
          </button>
          <a href="#" className="hover:text-[#d4af37] transition-colors">
            <i className="far fa-user"></i>
          </a>
          <a href="#" className="hover:text-[#d4af37] transition-colors relative">
            <i className="far fa-heart"></i>
          </a>
          <a href="#" className="hover:text-[#d4af37] transition-colors relative">
            <i className="fas fa-shopping-bag"></i>
            <span className="absolute -top-2 -right-2 bg-[#d4af37] text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-bold">0</span>
          </a>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-[#1a3b32] text-white z-40 transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-10">
            <span className="text-2xl font-bold serif">MENU</span>
            <button onClick={() => setIsMenuOpen(false)} className="text-2xl">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <ul className="space-y-6 text-xl font-medium">
            <li><a href="#" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#" onClick={() => setIsMenuOpen(false)}>Shop All</a></li>
            <li><a href="#" onClick={() => setIsMenuOpen(false)}>Face Care</a></li>
            <li><a href="#" onClick={() => setIsMenuOpen(false)}>Hair Care</a></li>
            <li><a href="#" onClick={() => setIsMenuOpen(false)}>Body Care</a></li>
            <li><a href="#" onClick={() => setIsMenuOpen(false)}>Gifts & Combos</a></li>
          </ul>
          <div className="mt-auto pb-10 space-y-4">
             <div className="w-full h-px bg-white/20 mb-6"></div>
             <a href="#" className="block">My Account</a>
             <a href="#" className="block">Track Order</a>
             <div className="flex space-x-6 mt-6">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-pinterest"></i>
             </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
