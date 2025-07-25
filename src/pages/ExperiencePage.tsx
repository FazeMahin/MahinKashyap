import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Heart, Calendar, MapPin } from 'lucide-react';

const ExperiencePage: React.FC = () => {
  const internships = [
    {
      id: 1,
      title: "Content Writer & Media Coordinator",
      organization: "Girls Hope for Education",
      type: "Internship",
      duration: "2023 - Present",
      location: "Remote",
      description: "Contributing to Girls Hope for Education through design, multimedia, and coordinating media efforts to support the company's mission.",
      skills: ["Content Writing", "Graphic Design", "Social Media"],
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      id: 2,
      title: "ZNotes Ambassador",
      organization: "ZNotes",
      type: "Internship",
      duration: "2024 - Present",
      location: "UAE",
      description: "Helping expand ZNotes in the UAE, creating quality archives, and conducting research to enhance educational resources.",
      skills: ["Research", "Content Creation", "Educational Outreach"],
      icon: <Briefcase className="w-6 h-6" />
    }
  ];

  const volunteering = [
    {
      id: 3,
      title: "Content Writer",
      organization: "Youth Sphere",
      type: "Volunteering",
      duration: "2023 - Present",
      location: "Remote",
      description: "Creating engaging content to support youth initiatives and community programs.",
      skills: ["Content Writing", "Youth Engagement", "Community Outreach"],
      icon: <Heart className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Outreach Team Member",
      organization: "STEM Connect",
      type: "Volunteering",
      duration: "2023 - Present",
      location: "Remote",
      description: "Supporting STEM education initiatives and connecting students with opportunities in science and technology.",
      skills: ["STEM Education", "Outreach", "Student Mentoring"],
      icon: <Heart className="w-6 h-6" />
    },
    {
      id: 5,
      title: "Outreach Coordinator",
      organization: "Simply Code",
      type: "Volunteering",
      duration: "2024 - Present",
      location: "Remote",
      description: "Coordinating outreach efforts to promote coding education and programming literacy among students.",
      skills: ["Program Coordination", "Coding Education", "Community Building"],
      icon: <Heart className="w-6 h-6" />
    }
  ];

  const ExperienceCard = ({ experience, index }: { experience: typeof internships[0], index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-khaki-50 dark:bg-seal_brown-800 rounded-xl shadow-lg overflow-hidden group border border-sage-200 dark:border-reseda_green-600 p-6"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className={`p-3 rounded-lg ${experience.type === 'Internship' 
          ? 'bg-russet-100 dark:bg-russet-800 text-russet-600 dark:text-russet-300' 
          : 'bg-reseda_green-100 dark:bg-reseda_green-800 text-reseda_green-600 dark:text-reseda_green-300'
        }`}>
          {experience.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-semibold text-seal_brown-800 dark:text-sage-100 mb-1">
            {experience.title}
          </h3>
          <h4 className="text-base sm:text-lg font-medium text-russet-600 dark:text-russet-400 mb-2">
            {experience.organization}
          </h4>
          <div className="flex flex-wrap gap-3 text-sm text-raw_umber-600 dark:text-sage-300">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {experience.duration}
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {experience.location}
            </div>
          </div>
        </div>
      </div>

      <p className="text-sm sm:text-base text-raw_umber-600 dark:text-sage-200 mb-4 leading-relaxed">
        {experience.description}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {experience.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-sage-200 dark:bg-reseda_green-800 text-seal_brown-700 dark:text-sage-100 text-xs sm:text-sm rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );

  return (
    <main className="pt-16">
      <section className="section-padding bg-khaki-50 dark:bg-black_olive-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-seal_brown-800 dark:text-sage-100 mb-4">
              Experience
            </h1>
            <p className="text-base sm:text-lg text-raw_umber-600 dark:text-sage-200 max-w-3xl mx-auto px-4">
              My journey through internships and volunteering roles, contributing to meaningful organizations and causes.
            </p>
          </motion.div>

          {/* Internships Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-seal_brown-800 dark:text-sage-100 mb-8 text-center">
              <span className="flex items-center justify-center gap-3">
                <Briefcase className="w-8 h-8 text-russet-600 dark:text-russet-400" />
                Internships
              </span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {internships.map((experience, index) => (
                <ExperienceCard key={experience.id} experience={experience} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Volunteering Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-seal_brown-800 dark:text-sage-100 mb-8 text-center">
              <span className="flex items-center justify-center gap-3">
                <Heart className="w-8 h-8 text-reseda_green-600 dark:text-reseda_green-400" />
                Volunteering
              </span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {volunteering.map((experience, index) => (
                <ExperienceCard key={experience.id} experience={experience} index={index + internships.length} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ExperiencePage;
