import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/skills';
import type { Skill } from '../../types';

const Skills: React.FC = () => {
  const skillCategories = {
    tools: skills.filter(skill => skill.category === 'tools'),
    languages: skills.filter(skill => skill.category === 'languages'),
  };

  const getLevelColor = (level: Skill['level']) => {
    switch (level) {
      case 'expert':
        return 'bg-reseda_green-500';
      case 'advanced':
        return 'bg-russet-500';
      case 'intermediate':
        return 'bg-lion-500';
      case 'beginner':
        return 'bg-sage-400';
      default:
        return 'bg-sage-400';
    }
  };

  const getLevelWidth = (level: Skill['level']) => {
    switch (level) {
      case 'expert':
        return 'w-full';
      case 'advanced':
        return 'w-4/5';
      case 'intermediate':
        return 'w-3/5';
      case 'beginner':
        return 'w-2/5';
      default:
        return 'w-2/5';
    }
  };

  const SkillCategory = ({ 
    title, 
    skills, 
    index 
  }: { 
    title: string; 
    skills: Skill[]; 
    index: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group bg-white/80 dark:bg-ebony-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-sage-200/50 dark:border-ebony-700/50 hover:shadow-2xl transition-all duration-500 hover:border-russet-300 dark:hover:border-russet-600 relative overflow-hidden"
    >
      {/* Decorative gradient bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-russet-400 via-sage-400 to-reseda_green-400"></div>
      
      {/* Category icon */}
      <div className="flex items-center gap-3 mb-6">
        <motion.div 
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="w-10 h-10 bg-gradient-to-br from-russet-100 to-sage-100 dark:from-russet-900/40 dark:to-sage-900/40 rounded-xl flex items-center justify-center"
        >
          <div className="w-4 h-4 bg-gradient-to-br from-russet-500 to-sage-500 rounded-full"></div>
        </motion.div>
        <h3 className="text-xl font-bold bg-gradient-to-r from-seal_brown-700 to-russet-700 dark:from-sage-200 dark:to-khaki-200 bg-clip-text text-transparent capitalize group-hover:from-russet-600 group-hover:to-reseda_green-600 dark:group-hover:from-khaki-100 dark:group-hover:to-sage-100 transition-all duration-300">
          {title}
        </h3>
      </div>
      
      <div className="space-y-4">
        {skills.map((skill, skillIndex) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-seal_brown-700 dark:text-sage-100 font-semibold">
                {skill.name}
              </span>
              <span className="text-sm text-russet-600 dark:text-russet-300 font-medium capitalize">
                {skill.level}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: getLevelWidth(skill.level).replace('w-', '') }}
                transition={{ duration: 1, delay: skillIndex * 0.1 }}
                viewport={{ once: true }}
                className={`h-full rounded-full transition-all duration-300 group-hover:brightness-110 ${getLevelColor(skill.level)} ${getLevelWidth(skill.level)}`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section className="section-padding bg-gradient-to-br from-sage-50 via-khaki-50 to-reseda_green-50 dark:from-ebony-900 dark:via-ebony-800 dark:to-ebony-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-russet-200 dark:bg-russet-800 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-sage-200 dark:bg-sage-800 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-khaki-200 dark:bg-khaki-800 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-reseda_green-200 dark:bg-reseda_green-800 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-russet-100 to-sage-100 dark:from-russet-900/30 dark:to-sage-900/30 px-4 py-2 rounded-full mb-6"
          >
            <div className="w-2 h-2 bg-russet-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-russet-600 dark:text-russet-400">Technical Expertise</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-seal_brown-600 via-russet-600 to-reseda_green-600 dark:from-sage-200 dark:via-khaki-200 dark:to-reseda_green-200 bg-clip-text text-transparent mb-6">
            Skills & Technologies
          </h2>
          <p className="text-lg sm:text-xl text-reseda_green-700 dark:text-sage-300 max-w-3xl mx-auto leading-relaxed">
            Here are the skills and technologies I've developed through my academic journey, certifications, and hands-on experience.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {Object.entries(skillCategories).map(([category, categorySkills], index) => (
            <SkillCategory
              key={category}
              title={category}
              skills={categorySkills}
              index={index}
            />
          ))}
        </div>

        {/* Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-white/70 to-sage-100/70 dark:from-ebony-800/70 dark:to-reseda_green-900/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-sage-200/50 dark:border-ebony-700/50 relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-russet-200/30 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-sage-200/30 to-transparent rounded-full blur-3xl"></div>
          
          <div className="text-center relative z-10">
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-russet-100 to-sage-100 dark:from-russet-900/30 dark:to-sage-900/30 px-4 py-2 rounded-full mb-6"
            >
              <div className="w-2 h-2 bg-reseda_green-500 rounded-full animate-bounce"></div>
              <span className="text-sm font-medium text-russet-600 dark:text-russet-400">Continuous Growth</span>
            </motion.div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-seal_brown-700 to-russet-700 dark:from-sage-200 dark:to-khaki-200 bg-clip-text text-transparent mb-6">
              Always Learning
            </h3>
            <p className="text-seal_brown-700 dark:text-sage-100 max-w-2xl mx-auto mb-8 text-lg leading-relaxed font-medium">
              As a dedicated student, I'm constantly expanding my knowledge through university-level courses, 
              certifications, and hands-on experience in various fields from technology to business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Financial Markets', 'Business Strategy', 'Economic Analysis', 'Data Science', 'Marketing', 'Leadership'].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-white to-sage-50 dark:from-ebony-700 dark:to-ebony-800 px-6 py-3 rounded-full text-sm font-semibold text-seal_brown-700 dark:text-sage-100 shadow-lg border border-sage-200 dark:border-ebony-600 hover:shadow-xl transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
