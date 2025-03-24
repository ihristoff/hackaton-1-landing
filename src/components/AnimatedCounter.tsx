'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, duration = 2 }) => {
  // Remove any + or other symbols for the animation
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {value}
    </motion.span>
  );
};

export default AnimatedCounter; 