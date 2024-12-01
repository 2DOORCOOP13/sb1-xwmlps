import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Bell, Zap } from 'lucide-react';

function Newsletter() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Stay in the Loop</h1>
          <p className="text-lg text-gray-600">
            Get the latest updates, tutorials, and exclusive resources delivered straight to your inbox.
          </p>
        </motion.div>

        {/* Newsletter Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-12"
        >
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Interests
              </label>
              <div className="space-y-2">
                {['UI/UX Design', 'Development', 'Graphics', 'Templates'].map((interest) => (
                  <label key={interest} className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-900 focus:ring-purple-500" />
                    <span className="ml-2">{interest}</span>
                  </label>
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-900 text-white px-8 py-3 rounded-full hover:bg-purple-800 transition-colors flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Subscribe Now
            </button>
          </form>
        </motion.div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Bell,
              title: "Weekly Updates",
              description: "Stay informed about the latest digital resources and industry trends."
            },
            {
              icon: Zap,
              title: "Exclusive Content",
              description: "Get access to subscriber-only resources and special offers."
            },
            {
              icon: Mail,
              title: "Direct Access",
              description: "Be the first to know about new tutorials and community events."
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <benefit.icon className="h-8 w-8 mx-auto mb-4 text-purple-900" />
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Newsletter;