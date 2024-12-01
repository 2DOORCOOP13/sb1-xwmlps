import React from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, BookOpen } from 'lucide-react';

function Tutorials() {
  const tutorials = [
    {
      id: 1,
      title: "Getting Started with Digital Design",
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&auto=format&fit=crop&q=60",
      duration: "45 min",
      level: "Beginner",
      description: "Learn the fundamentals of digital design in this comprehensive guide."
    },
    {
      id: 2,
      title: "Advanced UI Animation Techniques",
      thumbnail: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&auto=format&fit=crop&q=60",
      duration: "60 min",
      level: "Advanced",
      description: "Master the art of creating smooth and engaging UI animations."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Learn & Grow</h1>
          <p className="text-lg text-gray-600">Expand your skills with our comprehensive tutorials</p>
        </motion.div>

        {/* Tutorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tutorials.map((tutorial, index) => (
            <motion.div
              key={tutorial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative">
                <img
                  src={tutorial.thumbnail}
                  alt={tutorial.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Play className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Clock size={16} /> {tutorial.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen size={16} /> {tutorial.level}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{tutorial.title}</h3>
                <p className="text-gray-600 mb-4">{tutorial.description}</p>
                <button className="bg-purple-900 text-white px-6 py-2 rounded-full hover:bg-purple-800 transition-colors w-full">
                  Start Learning
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tutorials;