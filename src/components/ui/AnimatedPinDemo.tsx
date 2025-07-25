"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../../data/projects";

export function AnimatedPinDemo() {
  // Get the first 3 featured projects
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);

  return (
    <div className="w-full px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -10,
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            className="relative group cursor-pointer"
          >
            <div className="bg-gradient-to-br from-russet-600 to-raw_umber-700 p-0.5 rounded-xl shadow-2xl">
              <div className="bg-seal_brown-800 rounded-xl p-6 h-full">
                <div className="flex flex-col h-full">
                  <h3 className="text-lg font-bold text-sage-50 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sage-300 text-sm mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-russet-800/60 text-sage-200 px-2 py-1 rounded-full border border-russet-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 mt-auto">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-russet-400 hover:text-russet-300 transition-colors text-sm"
                      >
                        <ExternalLink size={14} />
                        Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sage-300 hover:text-sage-100 transition-colors text-sm"
                      >
                        <Github size={14} />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-2 -right-2 bg-russet-600 text-sage-50 px-3 py-1 rounded-full text-xs font-medium shadow-lg">
              Featured
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
