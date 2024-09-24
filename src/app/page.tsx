"use client";

import React, { useState, useEffect } from 'react';
import WelcomeScreen from '@/components/WelcomeScreen';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import HeroSection from '@/sections/HeroSection';
import About from '@/sections/About';
import Projects from '@/sections/Projects';
import Experience from '@/sections/Experience';
import Contact from '@/sections/Contact';

const Home: React.FC = () => {
  const [showMain, setShowMain] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleContinue = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowMain(true);
    }, 2000);
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      {!showMain && !loading && <WelcomeScreen onContinue={handleContinue} />}

      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      {showMain && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-[#000000] dark:to-[#1E201E] transition-colors duration-300"
        >
          <Header />
          <HeroSection />
          <About />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </>
  );
};

export default Home;