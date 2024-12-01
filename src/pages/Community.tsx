import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, Heart } from 'lucide-react';

function Community() {
  const discussions = [
    {
      id: 1,
      title: "Getting Started with UI Design",
      author: {
        name: "Sarah Johnson",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=60"
      },
      likes: 24,
      replies: 12,
      preview: "Hey everyone! I'm new to UI design and would love some tips..."
    },
    {
      id: 2,
      title: "Best Practices for Icon Design",
      author: {
        name: "Mike Chen",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=60"
      },
      likes: 18,
      replies: 8,
      preview: "Let's discuss the essential principles of icon design..."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Community</h1>
          <p className="text-lg text-gray-600 mb-8">Connect with creators, share ideas, and grow together</p>
          <button className="bg-purple-900 text-white px-8 py-3 rounded-full hover:bg-purple-800 transition-colors">
            Start a Discussion
          </button>
        </motion.div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { icon: Users, label: "Members", value: "5,000+" },
            { icon: MessageSquare, label: "Discussions", value: "1,200+" },
            { icon: Heart, label: "Contributions", value: "10,000+" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <stat.icon className="h-8 w-8 mx-auto mb-4 text-purple-900" />
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Discussions */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Recent Discussions</h2>
          <div className="space-y-6">
            {discussions.map((discussion) => (
              <motion.div
                key={discussion.id}
                whileHover={{ y: -2 }}
                className="border-b border-gray-200 pb-6 last:border-0"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={discussion.author.avatar}
                    alt={discussion.author.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold mb-1">{discussion.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">by {discussion.author.name}</p>
                    <p className="text-gray-700 mb-4">{discussion.preview}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Heart size={16} /> {discussion.likes} likes
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare size={16} /> {discussion.replies} replies
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;