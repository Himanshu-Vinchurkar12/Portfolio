import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, X, Calendar, Building, Trophy, Star } from 'lucide-react';
import { certificates } from '../data/portfolioData';

const Certificates: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  return (
    <section id="certificates" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden" ref={ref}>
      {/* Android-themed background decorations */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-10 opacity-5 dark:opacity-10"
      >
        <Trophy className="w-20 h-20 text-amber-500" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, delay: 3 }}
        className="absolute bottom-20 left-10 opacity-5 dark:opacity-10"
      >
        <Star className="w-16 h-16 text-yellow-500" />
      </motion.div>

      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800 dark:text-white"
        >
          <span className="text-amber-600">Certificates</span> & Achievements
        </motion.h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => setSelectedCert(cert)}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={cert.imageUrl}
                  alt={cert.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-4 right-4 p-2 bg-amber-500 rounded-full">
                  <Award className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{cert.title}</h3>
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    {cert.issuer}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {cert.year}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden relative z-10">
          {/* Scroll indicator arrows */}
          <div className="flex justify-between items-center mb-4">
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-2 text-gray-500 dark:text-gray-400"
            >
              <span className="text-sm">Swipe certificates</span>
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              </div>
            </motion.div>
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="text-gray-500 dark:text-gray-400"
            >
              <span className="text-lg">→</span>
            </motion.div>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, x: 100, rotateY: 15, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  delay: index * 0.2,
                  type: 'spring',
                  stiffness: 100,
                  damping: 15
                }}
                onClick={() => setSelectedCert(cert)}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg min-w-80 snap-center cursor-pointer overflow-hidden relative"
              >
                {/* Certificate decorative element */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                  className="absolute bottom-4 right-4 opacity-15"
                >
                  <Award className="w-8 h-8 text-amber-500" />
                </motion.div>

                <div className="relative overflow-hidden">
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-4 right-4 p-2 bg-amber-500 rounded-full">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{cert.title}</h3>
                  <div className="space-y-2 mb-3 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Building className="w-4 h-4" />
                      {cert.issuer}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {cert.year}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4"
          >
            Swipe to view all certificates
          </motion.p>
        </div>

        {/* Certificate Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={() => setSelectedCert(null)}
              />
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-auto"
              >
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors z-10"
                >
                  <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
                <img
                  src={selectedCert.imageUrl}
                  alt={selectedCert.title}
                  className="w-full max-h-[70vh] object-contain rounded-t-2xl"
                />
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-full">
                      <Award className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{selectedCert.title}</h3>
                      <p className="text-amber-600 dark:text-amber-400 font-medium">{selectedCert.issuer} • {selectedCert.year}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{selectedCert.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certificates;