import React from 'react';
import { motion } from 'framer-motion';
import { Download, Star, DollarSign } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    rating: number;
    downloads: number;
    image: string;
  };
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{product.title}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400" />
            <span className="ml-1 text-gray-600">{product.rating}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Download className="h-5 w-5 mr-1" />
            <span>{product.downloads}</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-purple-900">
            ${product.price}
          </span>
          <button className="bg-purple-900 text-white px-6 py-2 rounded-full hover:bg-purple-800 transition-colors flex items-center gap-2">
            <DollarSign size={20} />
            Buy Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;