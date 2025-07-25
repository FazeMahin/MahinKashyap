import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, GraduationCap, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../../data/personal';
import { Vortex } from '../ui/vortex';

const Hero: React.FC = () => {

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-seal_brown-900 via-white to-sage-800 dark:from-black_olive-300 dark:via-ebony-400 dark:to-reseda_green-400">
      <Vortex
        backgroundColor="transparent" // Make background transparent so your original background shows
        baseHue={45} // Warmer brown/amber hue to match your palette
        className="absolute inset-0 w-full h-full"
        particleCount={800}
        rangeY={800}
        baseSpeed={0.1}
        rangeSpeed={0.5}
        baseRadius={2}
        rangeRadius={4}
      />
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-seal_brown-500 to-raw_umber-600 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight"
              >
                {personalInfo.name}
              </motion.h1>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-reseda_green-700 dark:text-sage-300 mb-6 sm:mb-8 leading-tight"
              >
                {personalInfo.title}
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-base sm:text-lg md:text-xl text-reseda_green-600 dark:text-sage-300 mb-8 sm:mb-12 leading-relaxed"
              >
                {personalInfo.description}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center mb-8 sm:mb-12"
              >
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex items-center gap-2"
                  >
                    <Mail size={20} />
                    Get In Touch
                  </motion.button>
                </Link>

                {personalInfo.resume && (
                  <motion.a
                    href={personalInfo.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary flex items-center gap-2"
                  >
                    <Download size={20} />
                    Download Resume
                  </motion.a>
                )}
              </motion.div>
            </div>

            {/* Right Side - Profile Picture */}
            <div className="flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  {/* Decorative background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-russet-200 to-sage-200 dark:from-russet-800 dark:to-sage-800 rounded-full transform rotate-6"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-sage-200 to-reseda_green-200 dark:from-sage-800 dark:to-reseda_green-800 rounded-full transform -rotate-6"></div>
                  
                  {/* Profile Image */}
                  <motion.img
                    src="/mahin.jpeg"
                    alt={personalInfo.name}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 w-full h-full object-cover rounded-full border-4 border-sage-50 dark:border-ebony-800 shadow-2xl"
                  />
                  
                  {/* Floating elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 -right-4 bg-russet-600 text-sage-50 p-3 rounded-full shadow-lg"
                  >
                    <GraduationCap size={24} />
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    className="absolute -bottom-4 -left-4 bg-reseda_green-600 text-sage-50 p-3 rounded-full shadow-lg"
                  >
                    <Trophy size={24} />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col items-center"
          >
            <p className="text-sm text-reseda_green-600 dark:text-sage-400 mb-4 font-medium">
              Explore more
            </p>
            <Link to="/about">
              <motion.button
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-reseda_green-500 hover:text-russet-600 dark:text-sage-400 dark:hover:text-russet-400 transition-colors duration-300 p-2 rounded-full hover:bg-sage-100 dark:hover:bg-ebony-800"
              >
                <ArrowDown size={24} />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
