
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import ProductList from './components/ProductList';
import Features from './components/Features';
import Footer from './components/Footer';
import { Product } from './types';
import { fetchProducts } from './services/api';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <CategorySection />
        
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a3b32] mb-2">Our Bestsellers</h2>
              <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Explore our most loved Ayurvedic essentials, handcrafted for your holistic wellness.
              </p>
            </div>

            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1a3b32]"></div>
              </div>
            ) : error ? (
              <div className="text-center py-20 text-red-600">{error}</div>
            ) : (
              <ProductList products={products} />
            )}
          </div>
        </section>

        <Features />
      </main>

      <Footer />
    </div>
  );
};

export default App;
