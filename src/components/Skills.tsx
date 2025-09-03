import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Server, Wrench, Heart, Users, Smartphone, Zap, Layers } from 'lucide-react';
import { technicalSkills, softSkills } from '../data/portfolioData';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming': return <Code className="w-5 h-5" />;
      case 'Mobile Dev': return <Smartphone className="w-5 h-5" />;
      case 'Databases': return <Database className="w-5 h-5" />;
      case 'Backend': return <Server className="w-5 h-5" />;
      case 'Tools': return <Wrench className="w-5 h-5" />;
      default: return <Code className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      default: return 'from-blue-500 to-blue-600';
    }
  };

  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case 'Advanced': return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300';
      case 'Intermediate': return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300';
      case 'Beginner': return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300';
      default: return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300';
    }
  };

  const groupedSkills = technicalSkills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof technicalSkills>);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden" ref={ref}>
      {/* Android-themed background decorations */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-10 opacity-5 dark:opacity-10"
      >
        <Zap className="w-16 h-16 text-yellow-500" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, delay: 2 }}
        className="absolute bottom-10 left-10 opacity-5 dark:opacity-10"
      >
        <Layers className="w-18 h-18 text-blue-500" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800 dark:text-white"
        >
          My <span className="text-emerald-600">Skills</span>
        </motion.h2>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">Technical Skills</h3>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(groupedSkills).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + categoryIndex * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md relative overflow-hidden group"
              >
                {/* Skill category decorative icon */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity, delay: categoryIndex * 0.5 }}
                  className="absolute top-2 right-2 opacity-10 group-hover:opacity-20 transition-opacity"
                >
                  {getCategoryIcon(category)}
                </motion.div>

                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 bg-gradient-to-r ${getCategoryColor(category)} rounded-lg text-white`}>
                    {getCategoryIcon(category)}
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">{category}</h4>
                </div>
                <div className="space-y-3">
                  {skills.map((skill) => (
                    <div key={skill.id}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ delay: 0.6 + categoryIndex * 0.1, duration: 1 }}
                          className={`bg-gradient-to-r ${getCategoryColor(category)} h-2 rounded-full`}
                        />
                    
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
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
                <span className="text-sm">Swipe categories</span>
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

            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {Object.entries(groupedSkills).map(([category, skills], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, x: 100, rotateY: 15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ 
                    delay: categoryIndex * 0.1,
                    type: 'spring',
                    stiffness: 100,
                    damping: 15
                  }}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md min-w-80 snap-center relative overflow-hidden"
                >
                  {/* Android-themed decorative stickers */}
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, delay: categoryIndex }}
                    className="absolute top-2 right-2 opacity-15"
                  >
                    {category === 'Mobile Dev' && <Smartphone className="w-8 h-8 text-green-500" />}
                    {category === 'Programming' && <Code className="w-8 h-8 text-blue-500" />}
                    {category === 'Databases' && <Database className="w-8 h-8 text-purple-500" />}
                    {category === 'Backend' && <Server className="w-8 h-8 text-orange-500" />}
                    {category === 'Tools' && <Wrench className="w-8 h-8 text-gray-500" />}
                  </motion.div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 bg-gradient-to-r ${getCategoryColor(category)} rounded-lg text-white`}>
                      {getCategoryIcon(category)}
                    </div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">{category}</h4>
                  </div>
                  <div className="space-y-3">
                    {skills.map((skill, skillIndex) => (
                      <div key={skill.id}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: skillIndex * 0.1, duration: 1 }}
                            className={`bg-gradient-to-r ${getCategoryColor(category)} h-2 rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
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
              Swipe to explore different skill categories
            </motion.p>
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">Soft Skills</h3>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8, type: 'spring', stiffness: 100 }}
            className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 p-8 rounded-xl shadow-md relative overflow-hidden"
          >
            {/* Decorative element */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-4 right-4 opacity-10"
            >
              <Heart className="w-8 h-8 text-emerald-500" />
            </motion.div>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg text-white">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Personal Qualities</h4>
            </div>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full shadow-sm font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;