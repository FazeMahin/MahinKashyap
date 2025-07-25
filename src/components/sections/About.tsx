import React from 'react';
import { motion } from 'framer-motion';
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Lightbulb,
      title: "Economic Analysis",
      description: "Passionate about analyzing economic trends, market behaviors, and financial data."
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Leading initiatives, founding magazines, and mentoring fellow students."
    },
    {
      icon: Code,
      title: "Business Acumen",
      description: "Strong foundation in finance, marketing, and business strategy with academic honors."
    },
    {
      icon: Coffee,
      title: "Continuous Learning",
      description: "Completing university-level courses and always seeking new challenges."
    }
  ];

  return (
    <section className="section-padding bg-sage-50 dark:bg-ebony-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-seal_brown-500 dark:text-sage-200 mb-3 sm:mb-4">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-reseda_green-600 dark:text-sage-300 max-w-3xl mx-auto px-4">
            Learn more about my journey, passion for economics, and what drives me as an aspiring economist.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-raw_umber-600 dark:text-khaki-200 mb-6">
              My Story
            </h3>
            <div className="space-y-4 text-reseda_green-600 dark:text-sage-300">
              <p>
                I'm a 15-year-old student at Dubai Scholars Private School, currently in Year 11, with a 
                passion for economics, mathematics, and business. My diverse interests span from football 
                and drumming to economic analysis and financial markets.
              </p>
              <p>
                Based in Dubai, UAE, I specialize in economic research, data analysis, and business development. 
                I've worked with organizations like Girls Hope for Education and ZNotes, 
                contributing to meaningful causes while developing my analytical and leadership skills.
              </p>
              <p>
                My academic achievements include completing prestigious courses from Yale University and Duke 
                University with honors, demonstrating my commitment to continuous learning and excellence in 
                economics, business, and finance.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-sage-100 dark:bg-ebony-800 p-6 rounded-xl border border-sage-200 dark:border-ebony-700"
                >
                  <div className="text-russet-600 dark:text-russet-400 mb-4">
                    <Icon size={32} />
                  </div>
                  <h4 className="font-semibold text-raw_umber-600 dark:text-khaki-200 mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-reseda_green-600 dark:text-sage-300">
                    {highlight.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: "15+", label: "Certifications" },
            { number: "6+", label: "Organizations" },
            { number: "98%", label: "Yale Course Grade" },
            { number: "100%", label: "Dedication" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
