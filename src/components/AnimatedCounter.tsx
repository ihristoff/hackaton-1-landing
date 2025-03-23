'use client';

import React from 'react';
import { motion, useSpring, useTransform, MotionValue } from 'framer-motion';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, duration = 2 }) => {
  // Remove any non-numeric characters except decimal points
  const numericValue = parseFloat(value.replace(/[^\d.]/g, ''));
  
  // Create a motion value that starts at 0 and animates to the target value
  const count = useSpring(0, {
    duration: duration * 1000,
    stiffness: 50,
    damping: 20,
    restDelta: 0.001,
  });

  // When the component mounts, animate to the target value
  React.useEffect(() => {
    count.set(numericValue);
  }, [count, numericValue]);

  // Transform the animated value to include any suffix (like '+' or '%')
  const rounded = useTransform(count, (latest) => {
    const roundedValue = Math.round(latest * 100) / 100;
    const suffix = value.match(/[^0-9.].*/)?.[0] || '';
    return `${roundedValue}${suffix}`;
  });

  return <motion.span>{rounded}</motion.span>;
};

export default AnimatedCounter; 