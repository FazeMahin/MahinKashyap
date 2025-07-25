import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import { AnimatedPinDemo } from '../ui/AnimatedPinDemo';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  const filteredProjects = filter === 'featured' 
    ? projects.filter(project => project.featured)
    : projects;

  const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-khaki-50 dark:bg-seal_brown-800 rounded-xl shadow-lg overflow-hidden group border border-sage-200 dark:border-reseda_green-600"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {project.featured && (
          <div className="absolute top-4 left-4 bg-russet-600 text-sage-50 px-2 py-1 rounded-full text-xs font-medium">
            Featured
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold text-seal_brown-800 dark:text-sage-100 mb-2">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-raw_umber-600 dark:text-sage-200 mb-3 sm:mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 sm:px-3 py-1 bg-sage-200 dark:bg-reseda_green-800 text-seal_brown-700 dark:text-sage-100 text-xs sm:text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          {project.demoUrl && (
            project.demoUrl.startsWith('/') ? (
              <Link
                to={project.demoUrl}
                className="flex items-center justify-center gap-2 text-russet-600 dark:text-russet-400 hover:text-russet-700 dark:hover:text-russet-300 transition-colors text-sm font-medium py-2 w-full sm:w-auto"
              >
                <ExternalLink size={16} />
                <span>View Details</span>
              </Link>
            ) : (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-russet-600 dark:text-russet-400 hover:text-russet-700 dark:hover:text-russet-300 transition-colors text-sm font-medium py-2 w-full sm:w-auto"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            )
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-raw_umber-600 dark:text-sage-300 hover:text-seal_brown-800 dark:hover:text-sage-100 transition-colors text-sm font-medium py-2 w-full sm:w-auto"
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="section-padding bg-khaki-50 dark:bg-black_olive-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-seal_brown-800 dark:text-sage-100 mb-3 sm:mb-4">
            My Projects
          </h2>
          <p className="text-base sm:text-lg text-raw_umber-600 dark:text-sage-200 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Here are some of my favorite projects that showcase my skills and passion for development.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter('all')}
              className={`flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 rounded-lg font-medium transition-colors text-sm sm:text-base w-full sm:w-auto ${
                filter === 'all'
                  ? 'bg-russet-600 text-sage-50'
                  : 'bg-sage-200 dark:bg-seal_brown-700 text-seal_brown-700 dark:text-sage-200 hover:bg-sage-300 dark:hover:bg-seal_brown-600 border border-sage-300 dark:border-reseda_green-600'
              }`}
            >
              <Filter size={16} />
              All Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter('featured')}
              className={`px-4 py-2.5 sm:py-2 rounded-lg font-medium transition-colors text-sm sm:text-base w-full sm:w-auto ${
                filter === 'featured'
                  ? 'bg-russet-600 text-sage-50'
                  : 'bg-sage-200 dark:bg-seal_brown-700 text-seal_brown-700 dark:text-sage-200 hover:bg-sage-300 dark:hover:bg-seal_brown-600 border border-sage-300 dark:border-reseda_green-600'
              }`}
            >
              Featured Only
            </motion.button>
          </div>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-seal_brown-800 dark:text-sage-100 text-center mb-8">
            Featured Projects
          </h3>
          <AnimatedPinDemo />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-base sm:text-lg text-raw_umber-600 dark:text-sage-200 mb-4 sm:mb-6 px-4">
            Want to see more of my work or collaborate on a project?
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Get In Touch
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
