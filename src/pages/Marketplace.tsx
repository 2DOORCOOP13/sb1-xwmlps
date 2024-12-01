import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/marketplace/ProductCard';
import CategoryFilter from '../components/marketplace/CategoryFilter';
import { useAuth } from '../context/AuthContext';

const categories = ['All', 'Templates', 'Graphics', 'UI Kits', 'Fonts', 'Icons'];

function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { user } = useAuth();

  const products = [
    {
      id: 1,
      title: 'Premium UI Kit',
      description: 'Complete UI kit with 100+ components',
      price: 49.99,
      category: 'UI Kits',
      rating: 4.8,
      downloads: 1234,
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    // Add more products here
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Digital Marketplace</h1>
          <p className="text-lg text-gray-600">Discover premium digital resources for your next project</p>
        </div>

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Free Resources Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Free Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add free resources here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketplace;