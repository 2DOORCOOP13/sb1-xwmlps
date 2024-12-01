import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Download, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Download className="h-8 w-8 text-purple-900" />
              <span className="ml-2 text-xl font-bold text-purple-900">DigitalMarket</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/marketplace" className="text-gray-700 hover:text-purple-900 transition-colors">Marketplace</Link>
            <Link to="/community" className="text-gray-700 hover:text-purple-900 transition-colors">Community</Link>
            <Link to="/tutorials" className="text-gray-700 hover:text-purple-900 transition-colors">Tutorials</Link>
            <Link to="/newsletter" className="text-gray-700 hover:text-purple-900 transition-colors">Newsletter</Link>
            <button className="bg-purple-900 text-white px-4 py-2 rounded-full hover:bg-purple-800 transition-colors flex items-center gap-2">
              <ShoppingCart size={20} />
              Cart (0)
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/marketplace"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-purple-900 hover:bg-purple-50 transition-colors"
              >
                Marketplace
              </Link>
              <Link
                to="/community"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-purple-900 hover:bg-purple-50 transition-colors"
              >
                Community
              </Link>
              <Link
                to="/tutorials"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-purple-900 hover:bg-purple-50 transition-colors"
              >
                Tutorials
              </Link>
              <Link
                to="/newsletter"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-purple-900 hover:bg-purple-50 transition-colors"
              >
                Newsletter
              </Link>
              <button className="w-full mt-4 bg-purple-900 text-white px-4 py-2 rounded-full hover:bg-purple-800 transition-colors flex items-center justify-center gap-2">
                <ShoppingCart size={20} />
                Cart (0)
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;