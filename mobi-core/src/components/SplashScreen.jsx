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
          {/* Logo dengan Background Gradient - Improved Visibility */}
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
            {/* Outer Background Gradient Circle - Reduced opacity */}
            <motion.div
              className="absolute inset-0 -m-10 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 50%, transparent 100%)',
                filter: 'blur(3px)'
              }}
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.6, 0.8, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Middle Background Circle - Subtle glow */}
            <motion.div
              className="absolute inset-0 -m-6 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 70%, transparent 100%)',
                filter: 'blur(1px)'
              }}
              animate={{
                scale: [1, 1.03, 1],
                opacity: [0.7, 0.9, 0.7],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Inner subtle glow untuk kontras yang lebih baik */}
            <motion.div
              className="absolute inset-0 -m-3 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)',
                filter: 'blur(0.5px)'
              }}
              animate={{
                scale: [1, 1.02, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Logo dengan enhanced brightness */}
            <motion.img
              src={logo}
              alt="MOBICORE"
              className="w-32 h-32 object-contain relative z-20"
              style={{
                filter: "brightness(1.2) contrast(1.1) drop-shadow(0 0 20px rgba(255, 255, 255, 0.3)) drop-shadow(0 4px 12px rgba(0, 0, 0, 0.4))",
                mixBlendMode: "normal"
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

            {/* Additional subtle rim light effect */}
            <motion.div
              className="absolute inset-0 rounded-full border border-white/10"
              style={{
                width: '128px',
                height: '128px',
                margin: 'auto',
                boxShadow: 'inset 0 0 20px rgba(255,255,255,0.1)'
              }}
              animate={{
                opacity: [0.5, 0.8, 0.5],
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