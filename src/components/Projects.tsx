import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Clock, CheckCircle, Smartphone, Code, Layers } from 'lucide-react';
import { projects } from '../data/portfolioData';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const getProjectStatus = (description: string) => {
    if (description.includes('In Development')) {
      return { status: 'developing', icon: Clock, color: 'text-amber-500', bg: 'bg-amber-100 dark:bg-amber-900/30' };
    }
    if (description.includes('In Process')) {
      return { status: 'in-process', icon: Clock, color: 'text-orange-500', bg: 'bg-orange-100 dark:bg-orange-900/30' };
    }
    return { status: 'completed', icon: CheckCircle, color: 'text-green-500', bg: 'bg-green-100 dark:bg-green-900/30' };
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden" ref={ref}>
      {/* Android-themed background decorations */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-10 opacity-5 dark:opacity-10"
      >
        <Smartphone className="w-20 h-20 text-green-500" />
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, delay: 3 }}
        className="absolute bottom-20 right-10 opacity-5 dark:opacity-10"
      >
        <Code className="w-24 h-24 text-blue-500" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800 dark:text-white"
        >
          My <span className="text-emerald-600">Projects</span>
        </motion.h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const statusInfo = getProjectStatus(project.description);
            const StatusIcon = statusInfo.icon;
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden group relative"
              >
                {/* Project status badge */}
                <div className={`absolute top-4 right-4 z-10 px-3 py-1 ${statusInfo.bg} rounded-full flex items-center gap-2`}>
                  <StatusIcon className={`w-4 h-4 ${statusInfo.color}`} />
                  <span className={`text-xs font-medium ${statusInfo.color} capitalize`}>
                    {statusInfo.status === 'developing' ? 'Developing' : 
                     statusInfo.status === 'in-process' ? 'In Process' : 'Completed'}
                  </span>
                </div>

                {/* App-themed decorative elements */}
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, delay: index }}
                  className="absolute bottom-4 right-4 opacity-10"
                >
                  <Smartphone className="w-8 h-8 text-green-500" />
                </motion.div>

                <div className="relative overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Horizontal Scroll with page-like animations */}
        <div className="md:hidden">
          {/* Scroll indicator arrows */}
          <div className="flex justify-between items-center mb-4">
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-2 text-gray-500 dark:text-gray-400"
            >
              <span className="text-sm">Swipe projects</span>
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
            {projects.map((project, index) => {
              const statusInfo = getProjectStatus(project.description);
              const StatusIcon = statusInfo.icon;
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: 100, rotateY: 15, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ 
                    delay: index * 0.2,
                    type: 'spring',
                    stiffness: 100,
                    damping: 15
                  }}
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg min-w-80 snap-center overflow-hidden relative"
                >
                  {/* Project status badge */}
                  <div className={`absolute top-4 right-4 z-10 px-3 py-1 ${statusInfo.bg} rounded-full flex items-center gap-2`}>
                    <StatusIcon className={`w-4 h-4 ${statusInfo.color}`} />
                    <span className={`text-xs font-medium ${statusInfo.color} capitalize`}>
                      {statusInfo.status === 'developing' ? 'Developing' : 
                       statusInfo.status === 'in-process' ? 'In Process' : 'Completed'}
                    </span>
                  </div>

                  {/* App development decorative elements */}
                  <motion.div
                    animate={{ y: [0, -5, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                    className="absolute bottom-4 left-4 opacity-15"
                  >
                    <Layers className="w-6 h-6 text-blue-500" />
                  </motion.div>

                  <div className="relative overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white rounded-lg shadow-lg transition-shadow"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </motion.a>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4"
          >
            Swipe to explore my projects
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Projects;