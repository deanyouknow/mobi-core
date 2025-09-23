import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/mobi-ts.png';

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress animation - 1 detik
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 5; // Increment by 5% every 50ms = 1000ms total
      });
    }, 50);

    // Hide splash screen
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onComplete(), 400);
    }, 1800); // Total 1.8 seconds

    return () => {
      clearInterval(progressTimer);
      clearTimeout(hideTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.4, ease: "easeInOut" }
          }}
        >
          {/* Logo dengan Background Gradient */}
          <motion.div
            className="mb-16 relative"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              transition: { 
                duration: 0.8,
                ease: "easeOut"
              }
            }}
          >
            {/* Background Gradient Circle */}
            <motion.div
  className="absolute inset-0 -m-8 rounded-full bg-white/15"
  style={{
    background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
    filter: 'blur(2px)'
  }}
  animate={{
    scale: [1, 1.05, 1],
    opacity: [0.8, 1, 0.8],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }}
/>


<motion.div
  className="absolute inset-0 -m-4 rounded-full bg-white/20"
  style={{
    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 70%, transparent 100%)'
  }}
  animate={{
    scale: [1, 1.02, 1],
  }}
  transition={{
    duration: 2.5,
    repeat: Infinity,
    ease: "easeInOut"
  }}
/>
            
            {/* Inner Gradient untuk kontras lebih baik */}
            <motion.div
              className="absolute inset-0 -m-4 rounded-full bg-gradient-radial from-white/30 via-white/15 to-transparent"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Logo */}
            <motion.img
              src={logo}
              alt="MOBICORE"
              className="w-32 h-32 object-contain relative z-10"
              style={{
                filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3))"
              }}
              animate={{
                scale: [1, 1.01, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Progress Bar - macOS style */}
          <motion.div
            className="w-64 h-1 bg-gray-800/60 rounded-full overflow-hidden"
            initial={{ opacity: 0, scaleX: 0.8 }}
            animate={{ 
              opacity: 1, 
              scaleX: 1,
              transition: { delay: 0.5, duration: 0.6 }
            }}
          >
            <motion.div
              className="h-full bg-white/90 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ 
                duration: 0.2, 
                ease: "easeOut" 
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;