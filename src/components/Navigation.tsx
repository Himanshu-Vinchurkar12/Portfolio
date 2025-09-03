import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Smartphone } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 right-0 z-50 p-4"
      >
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 dark:bg-gray-800/30"
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5 text-gray-800 dark:text-white" />
            ) : (
              <Sun className="w-5 h-5 text-yellow-500" />
            )}
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 dark:bg-gray-800/30 md:hidden mobile-optimized"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-gray-800 dark:text-white" />
            ) : (
              <Menu className="w-5 h-5 text-gray-800 dark:text-white" />
            )}
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 dark:bg-gray-800/30 p-2">
            <div className="flex items-center gap-2 px-3">
              <Smartphone className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-800 dark:text-white">Himanshu</span>
            </div>
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-full hover:bg-white/20"
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-xl"
            >
              <div className="p-6 pt-20">
                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                  <span className="text-lg font-semibold text-gray-800 dark:text-white">Portfolio</span>
                </div>
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: 30, rotateY: 15 }}
                      animate={{ opacity: 1, x: 0, rotateY: 0 }}
                      transition={{ 
                        delay: index * 0.1,
                        type: 'spring',
                        stiffness: 200,
                        damping: 20
                      }}
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => scrollToSection(item.href)}
                      className="w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 mobile-touch-optimized"
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;