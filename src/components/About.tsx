import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin, BookOpen, Award, Smartphone, Code2, Cpu } from 'lucide-react';
import { education } from '../data/portfolioData';

const About: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section 
      id="about" 
      className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden" 
      ref={ref}
    >
      {/* Android-themed background decorations */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-10 opacity-5 dark:opacity-10"
      >
        <BookOpen className="w-24 h-24 text-blue-500" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 3 }}
        className="absolute bottom-20 left-10 opacity-5 dark:opacity-10"
      >
        <Award className="w-20 h-20 text-emerald-500" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800 dark:text-white"
        >
          About <span className="text-blue-600">Me</span>
        </motion.h2>

        {/* About Me Bio Card */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ 
            duration: 0.8,
            type: 'spring',
            stiffness: 100,
            damping: 15
          }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white text-center md:text-left">My Story</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg text-center md:text-left">
              I'm a passionate Android App Developer and a 4th-year CSE student at PRMIT&R. 
              Skilled in Kotlin and Jetpack Compose, I enjoy building innovative and user-friendly 
              mobile applications. Currently exploring advanced Android concepts to create impactful 
              projects that solve real-world problems. I'm also diving into backend integration and 
              APIs to enhance app functionality. Eager to apply my skills in building scalable and 
              efficient applications.
            </p>
          </div>
        </motion.div>
        
        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 dark:text-white text-center md:text-left">Education</h3>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 50, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  delay: index * 0.2,
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 100,
                  damping: 15
                }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden group hover:shadow-xl transition-shadow"
              >
                {/* Decorative element */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                  className="absolute top-3 right-3 opacity-10 group-hover:opacity-20 transition-opacity"
                >
                  <GraduationCap className="w-8 h-8 text-blue-500" />
                </motion.div>

                <div className="flex items-start gap-4">
                  <motion.div 
                    className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  >
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg text-gray-800 dark:text-white mb-1">{edu.degree}</h4>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">{edu.institution}</p>
                    <div className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{edu.period}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{edu.details}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden">
            {/* Scroll indicator arrows */}
            <div className="flex justify-between items-center mb-4">
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center gap-2 text-gray-500 dark:text-gray-400"
              >
                <span className="text-sm">Swipe</span>
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
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: 100, rotateY: 15, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ 
                    delay: index * 0.2,
                    type: 'spring',
                    stiffness: 100,
                    damping: 15
                  }}
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 min-w-80 snap-center relative overflow-hidden mobile-touch-optimized"
                >
                  {/* Android-themed decorative elements */}
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 8, repeat: Infinity, delay: index }}
                    className="absolute top-4 right-4 opacity-15"
                  >
                    <GraduationCap className="w-10 h-10 text-blue-500" />
                  </motion.div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 6, repeat: Infinity, delay: index * 0.5 }}
                    className="absolute bottom-4 left-4 opacity-10"
                  >
                    <BookOpen className="w-6 h-6 text-emerald-500" />
                  </motion.div>
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <motion.div 
                        className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                      >
                        <GraduationCap className="w-6 h-6 text-blue-600" />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-bold text-xl text-gray-800 dark:text-white mb-2">{edu.degree}</h4>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">{edu.institution}</p>
                        <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span className="font-medium">{edu.period}</span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">{edu.details}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Mobile instruction hint */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6"
            >
              Swipe to explore education timeline
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;