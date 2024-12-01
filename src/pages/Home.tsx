import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Users, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Premium Digital Resources
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 text-purple-100"
            >
              Discover high-quality digital assets for your next project
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center gap-4"
            >
              <Link to="/marketplace" className="bg-white text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition-colors flex items-center gap-2">
                Browse Marketplace <ArrowRight size={20} />
              </Link>
              <Link to="/community" className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-900 transition-colors">
                Join Community
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="bg-purple-800 bg-opacity-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Download size={32} className="mb-2" />
                <h3 className="text-3xl font-bold">1000+</h3>
                <p className="text-purple-200">Digital Resources</p>
              </div>
              <div className="flex flex-col items-center">
                <Users size={32} className="mb-2" />
                <h3 className="text-3xl font-bold">50K+</h3>
                <p className="text-purple-200">Community Members</p>
              </div>
              <div className="flex flex-col items-center">
                <BookOpen size={32} className="mb-2" />
                <h3 className="text-3xl font-bold">100+</h3>
                <p className="text-purple-200">Tutorials</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Featured Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img 
                  src={`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3`} 
                  alt="Resource preview" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">Premium Resource {item}</h3>
                  <p className="text-gray-600 mb-4">High-quality digital asset for your projects</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-purple-900">$49.99</span>
                    <button className="bg-purple-900 text-white px-4 py-2 rounded-full hover:bg-purple-800 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-purple-100 mb-8">Subscribe to our newsletter for the latest resources and tutorials</p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="bg-white text-purple-900 px-8 py-2 rounded-full font-semibold hover:bg-purple-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Home;