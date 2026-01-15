"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/sections/HeroSection";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import MobileApps from "@/sections/MobileApps";
import Experience from "@/sections/Experience";
import Contact from "@/sections/Contact";

const Home: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
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
        <MobileApps />
        <Experience />
        <Contact />
        <Footer />
      </motion.div>
    </div>
  );
};

export default Home;
