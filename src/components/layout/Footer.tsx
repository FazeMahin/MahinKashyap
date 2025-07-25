import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../../data/personal';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: Github, 
      url: personalInfo.social.github,
      color: 'hover:text-reseda_green-700 dark:hover:text-sage-300' 
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: personalInfo.social.linkedin,
      color: 'hover:text-russet-600 dark:hover:text-russet-400' 
    },
    { 
      name: 'Email', 
      icon: Mail, 
      url: `mailto:${personalInfo.email}`,
      color: 'hover:text-raw_umber-600 dark:hover:text-raw_umber-400' 
    },
  ];

  return (
    <footer className="bg-sage-100 dark:bg-ebony-900 border-t border-sage-200 dark:border-ebony-700">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Side - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <h3 className="text-xl font-bold text-seal_brown-600 dark:text-khaki-200 mb-2">
              {personalInfo.name}
            </h3>
            <p className="text-reseda_green-600 dark:text-sage-300 max-w-md">
              Building digital experiences with passion and precision.
            </p>
          </motion.div>

          {/* Right Side - Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex space-x-6"
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-reseda_green-600 dark:text-sage-400 transition-colors duration-200 ${link.color}`}
                  aria-label={link.name}
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400"
        >
          <p className="mb-4 md:mb-0">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          
          <div className="flex items-center">
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              className="mx-1"
            >
              <Heart size={16} className="text-red-500" fill="currentColor" />
            </motion.span>
            <span>using React & Tailwind CSS</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
