import React from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Enhanced page transition effects
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 1, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 1, 1, 0.95]);

  const pageVariants = {
    initial: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    in: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1
      }
    },
    out: { 
      opacity: 0, 
      y: -60,
      scale: 1.05,
      transition: {
        duration: 0.6,
        ease: [0.55, 0.06, 0.68, 0.19]
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 transform-origin-0 z-50"
          style={{ scaleX }}
        />
        
        <Navigation />
        
        <AnimatePresence mode="wait">
          <motion.main
            key="main-content"
            style={{ opacity, scale }}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
          >
            <motion.div variants={sectionVariants}>
              <Hero />
            </motion.div>
            <motion.div variants={sectionVariants}>
              <About />
            </motion.div>
            <motion.div variants={sectionVariants}>
              <Skills />
            </motion.div>
            <motion.div variants={sectionVariants}>
              <Projects />
            </motion.div>
            <motion.div variants={sectionVariants}>
              <Certificates />
            </motion.div>
            <motion.div variants={sectionVariants}>
              <Contact />
            </motion.div>
          </motion.main>
        </AnimatePresence>

        {/* Floating Action Button for mobile */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2, type: 'spring', stiffness: 200 }}
          className="fixed bottom-6 right-6 md:hidden z-40"
        >
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-full shadow-lg transition-shadow mobile-touch-optimized"
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ↑
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="py-8 bg-gray-900 dark:bg-black text-center"
        >
          <p className="text-gray-400">
            © 2024 Himanshu Manohar Vinchurkar. Built with React & Tailwind CSS.
          </p>
        </motion.footer>
      </div>
    </ThemeProvider>
  );
}

export default App;