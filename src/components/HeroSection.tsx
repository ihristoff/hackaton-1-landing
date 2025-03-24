'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';
import { HoverBorderGradient } from './ui/hover-border-gradient';
import Image from 'next/image';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const chartImages = [
    '/gex.png',
    '/2025-03-23 13 02 13.png',
    '/2025-03-23 13 03 27.png',
    '/2025-03-23 13 04 00.png',
  ];

  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.getElementById('stats-section');
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentImageIndex((prev) => (prev + 1) % chartImages.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden bg-gray-900 text-white">
      {/* Background gradient */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0.05) 25%, rgba(99, 102, 241, 0) 50%)`,
        }}
      />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 right-0 z-50 flex items-center gap-8 px-8 py-6"
      >
        <a href="#" className="text-white/80 hover:text-white transition-colors">Home</a>
        <a href="#pricing" className="text-white/60 hover:text-white transition-colors">Pricing</a>
        <a href="#" className="text-white/60 hover:text-white transition-colors">Updates</a>
        <a href="#" className="text-white/60 hover:text-white transition-colors">FAQ</a>
        <a href="#" className="text-white/60 hover:text-white transition-colors">Log in</a>
        <HoverBorderGradient
          containerClassName="rounded-full"
          className="bg-purple-600 hover:bg-purple-700"
          duration={0.5}
        >
          Get Started
        </HoverBorderGradient>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-500">
            Real-time GEX Analysis
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Track gamma exposure in real-time to predict potential market movements and price levels
          </p>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <HoverBorderGradient
            containerClassName="rounded-full"
            className="bg-purple-600 hover:bg-purple-700"
            duration={0.5}
          >
            <span className="flex items-center gap-2">
            
              Join Now
            </span>
          </HoverBorderGradient>

          <HoverBorderGradient
            containerClassName="rounded-full"
            className="bg-[#1A1A1A] border-purple-500/20"
            duration={0.5}
          >
            View Demo
          </HoverBorderGradient>
        </motion.div>

        {/* GEX Chart Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative w-full max-w-5xl mx-auto mb-20"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={chartImages[currentImageIndex]}
                  alt="GEX Analysis Chart"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
            
            {/* Chart Controls */}
            <motion.div
              className="absolute bottom-4 right-4 flex gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {chartImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/30'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          id="stats-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Active Traders', value: '10K+' },
            { label: 'Daily Signals', value: '500+' },
            { label: 'Success Rate', value: '89%' },
            { label: 'Markets Covered', value: '50+' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-3xl font-bold text-white mb-2">
                <AnimatedCounter value={stat.value} duration={2} />
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/30 rounded-full filter blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/30 rounded-full filter blur-[120px] animate-pulse" />
    </section>
  );
};

export default HeroSection; 