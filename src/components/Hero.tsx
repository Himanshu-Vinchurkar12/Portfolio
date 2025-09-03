import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Smartphone, Code2, Cpu, Layers } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Himanshu_Resume.pdf';
    link.download = 'Himanshu_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        {/* Android-themed floating elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-10 opacity-20 dark:opacity-30"
        >
          <Smartphone className="w-16 h-16 text-green-500" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          className="absolute bottom-20 right-20 opacity-20 dark:opacity-30"
        >
          <Code2 className="w-20 h-20 text-blue-500" />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 4 }}
          className="absolute top-1/2 left-1/4 opacity-10 dark:opacity-20"
        >
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-green-400 to-blue-500" />
        </motion.div>
        
        {/* Additional Android-themed decorations */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 right-1/3 opacity-15 dark:opacity-25"
        >
          <Cpu className="w-12 h-12 text-emerald-500" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/3 left-1/3 opacity-15 dark:opacity-25"
        >
          <Layers className="w-14 h-14 text-blue-600" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 dark:bg-gray-800/30 backdrop-blur-md rounded-full border border-white/30 dark:border-gray-700/30">
                <Smartphone className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Android Developer</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-blue-600 via-emerald-600 to-blue-800 bg-clip-text text-transparent">
                Himanshu
              </span>
              <br />
              <span className="text-gray-800 dark:text-white text-2xl md:text-4xl lg:text-5xl">
                Manohar Vinchurkar
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4"
            >
              Android App Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-gray-500 dark:text-gray-400 mb-12"
            >
              4th Year CSE Student at PRMIT&R, Badnera
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadCV}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/20 dark:bg-gray-800/30 backdrop-blur-md text-gray-800 dark:text-white font-semibold rounded-full border border-white/30 dark:border-gray-700/30 hover:bg-white/30 dark:hover:bg-gray-700/30 transition-colors"
              >
                View Projects
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Android-themed illustration side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <div className="relative">
              {/* Main phone mockup */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-64 h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl"
              >
                <div className="w-full h-full bg-gradient-to-b from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    className="text-white text-center"
                  >
                    <Smartphone className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-sm font-medium">Android App Developer</p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating code elements */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0], y: [0, -5, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -top-8 -right-8 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg"
              >
                <Code2 className="w-6 h-6 text-blue-600" />
              </motion.div>

              <motion.div
                animate={{ rotate: [0, -5, 5, 0], y: [0, 5, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                className="absolute -bottom-4 -left-8 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg"
              >
                <Layers className="w-6 h-6 text-emerald-600" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;