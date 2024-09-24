import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightCircle } from 'lucide-react';
import Lottie from 'lottie-react';
import { useTheme } from 'next-themes';
import ThemeSwitch from './ThemeSwitch';

import animationData from '../../public/welcomeanimation.json';

interface WelcomeScreenProps {
  onContinue: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onContinue }) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-[#000000] dark:to-[#1E201E] z-50 transition-colors duration-300 p-4 sm:p-8"
    >
      <div className="absolute top-4 right-4">
        <ThemeSwitch />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl">
        <div className="text-center lg:text-left w-full lg:w-1/2 mb-8 lg:mb-0">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white transition-colors duration-300"
          >
            Crafting Digital Experiences
          </motion.h1>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-lg sm:text-xl mb-8 text-gray-700 dark:text-gray-300 transition-colors duration-300"
          >
            Dive into a world of innovative solutions and creative designs
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 20 }}
          >
            <button
              onClick={onContinue}
              className="text-blue-500 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              aria-label="Continue to main content"
            >
              <ArrowRightCircle size={36} className="sm:w-12 sm:h-12" />
            </button>
          </motion.div>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            <Lottie animationData={animationData} loop={true} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WelcomeScreen;