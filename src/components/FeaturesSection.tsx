'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChartBarIcon, ArrowTrendingUpIcon, ShieldCheckIcon, CursorArrowRaysIcon, BoltIcon, ChartPieIcon } from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Real-time GEX Analysis',
    description: 'Track gamma exposure in real-time to predict potential market movements and price levels.',
    icon: ChartBarIcon,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Options Flow',
    description: 'Monitor institutional trading activity with our advanced options flow scanner.',
    icon: CursorArrowRaysIcon,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Charm Indicators',
    description: 'Visualize time decay impact on delta for better position management.',
    icon: BoltIcon,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Support & Resistance',
    description: 'Identify key price levels using aggregated options data and volume analysis.',
    icon: ChartPieIcon,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'Smart Alerts',
    description: 'Get notified of significant options activity and potential market moves.',
    icon: ArrowTrendingUpIcon,
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Risk Management',
    description: 'Advanced tools to help you manage position sizing and portfolio risk.',
    icon: ShieldCheckIcon,
    gradient: 'from-violet-500 to-purple-500',
  },
];

const FeaturesSection = () => {
  return (
    <div className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" style={{ backgroundSize: '30px 30px' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium inline-block mb-4"
          >
            Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-500 mb-6"
          >
            Advanced Trading Tools
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Everything you need to analyze options flow and make data-driven trading decisions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
              <div className="relative p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-colors duration-300">
                <div className="h-12 w-12 mb-6 p-2.5 rounded-xl bg-gradient-to-r from-purple-500/10 to-purple-500/20">
                  <feature.icon className="h-full w-full text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection; 