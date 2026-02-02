
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 pb-8 text-[#1a3b32]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold serif mb-6">KHUS INDIA</h2>
            <p className="text-sm leading-relaxed text-gray-600 mb-6">
              Empowering wellness through the purest Ayurvedic formulations. Our mission is to bring the luxury of nature's best-kept secrets to your doorstep.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#d4af37] transition-colors"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-[#d4af37] transition-colors"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-[#d4af37] transition-colors"><i className="fab fa-youtube"></i></a>
              <a href="#" className="hover:text-[#d4af37] transition-colors"><i className="fab fa-twitter"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 border-b border-[#d4af37] pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" className="hover:text-[#1a3b32] transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-[#1a3b32] transition-colors">Shop All Products</a></li>
              <li><a href="#" className="hover:text-[#1a3b32] transition-colors">Bestsellers</a></li>
              <li><a href="#" className="hover:text-[#1a3b32] transition-colors">Bulk Orders</a></li>
              <li><a href="#" className="hover:text-[#1a3b32] transition-colors">Store Locator</a></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 border-b border-[#d4af37] pb-2 inline-block">Help & Info</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" className="hover:text-[#1a3b32] transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-[#1a3b32] transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-[#1a3b32] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#1a3b32] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#1a3b32] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 border-b border-[#d4af37] pb-2 inline-block">Newsletter</h3>
            <p className="text-sm text-gray-600 mb-6">Sign up for special offers and Ayurvedic wellness tips.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-100 border-none px-4 py-2 w-full text-sm focus:ring-1 focus:ring-[#1a3b32]"
              />
              <button className="bg-[#1a3b32] text-white px-4 py-2 hover:bg-[#d4af37] transition-colors">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-400 font-bold">
          <p>© 2024 KHUS INDIA. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 opacity-50 grayscale hover:grayscale-0" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6 opacity-50 grayscale hover:grayscale-0" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="h-4 opacity-50 grayscale hover:grayscale-0" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
