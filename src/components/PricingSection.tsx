'use client';

import React from 'react';
import { motion } from 'framer-motion';

const PricingSection = () => {
  const pricingTiers = [
    {
      name: 'Trial',
      price: 'Free',
      duration: '1 week',
      description: 'Perfect for testing our platform',
      isPopular: false,
      gradient: 'from-blue-400 to-blue-600',
    },
    {
      name: 'Professional',
      price: '$98',
      duration: '/ month',
      description: 'Best for growing startups and growth companies',
      isPopular: true,
      gradient: 'from-purple-400 via-blue-500 to-purple-600',
    },
    {
      name: 'Enterprise',
      price: '$899',
      duration: '/ year',
      description: 'For serious traders and institutions',
      isPopular: false,
      gradient: 'from-purple-600 to-purple-800',
    },
  ];

  return (
    <div id="pricing" className="w-full min-h-screen bg-[#0A0A0A] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-400">Choose the plan that best fits your needs</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100 
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="relative group"
            >
              {/* Popular Badge */}
              {tier.isPopular && (
                <motion.div 
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                >
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    MOST POPULAR
                  </div>
                </motion.div>
              )}

              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden w-full max-w-sm mx-auto group">
                {/* Animated Border */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r"
                  whileHover={{
                    background: [
                      'linear-gradient(90deg, transparent, #6366F1 50%, transparent)',
                      'linear-gradient(180deg, transparent, #6366F1 50%, transparent)',
                      'linear-gradient(270deg, transparent, #6366F1 50%, transparent)',
                      'linear-gradient(0deg, transparent, #6366F1 50%, transparent)',
                      'linear-gradient(90deg, transparent, #6366F1 50%, transparent)',
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: 0,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                />

                {/* Card Content */}
                <motion.div 
                  className={`relative bg-[#1A1A1A] p-6 rounded-2xl border border-gray-800 ${tier.isPopular ? 'bg-opacity-95' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{tier.name}</h3>
                  <motion.div 
                    className="flex items-baseline mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 ml-2">{tier.duration}</span>
                  </motion.div>
                  <p className="text-gray-400 mb-6">{tier.description}</p>

                  {/* Sign Up Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 rounded-lg font-medium transition-all duration-200 
                      ${tier.isPopular 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90' 
                        : 'bg-gray-800 text-white hover:bg-gray-700'}`}
                  >
                    Sign Up {tier.name === 'Trial' ? 'Free' : 'Now'}
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
};

export default PricingSection; 