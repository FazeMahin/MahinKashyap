import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, ExternalLink, BookOpen, Users, Trophy, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Education: React.FC = () => {
  const schoolActivities = [
    {
      title: "Student Leadership",
      description: "Led various student initiatives and represented the school in multiple forums",
      icon: Users
    },
    {
      title: "Academic Excellence",
      description: "Consistently maintained high academic standards across all subjects",
      icon: Trophy
    },
    {
      title: "Extracurricular Involvement",
      description: "Active participation in various leadership roles, sports teams, and academic initiatives",
      icon: BookOpen
    }
  ];

  const extracurricularActivities = [
    "President of DS Identity (Commerce Community)",
    "Founder of Beyond Ventures Magazine",
    "Football Team",
    "Athletics Team",
    "Volleyball Team",
    "Dance Team",
    "Head Of Personality Development",
    "Head Of Financial Literacy",
    "President of Debate Club",
    "Student Mentor",
    "Co-Founder Investment Literacy",
    "Deputy Sports Captain",
    "Entrepreneurship Co-ordinator",
    "DSMUN Logistics team",
    "TedX Youth organizing team",
    "Create For Kids DSPS logistics team",
    "ZNotes representative for Dubai Scholars",
    "Scientific Scholars Marketing Team",
    "Sports Captain"
  ];

  const universityCourses = [
    {
      institution: "Yale University",
      course: "Financial Markets (with Honors)",
      score: "98% (Honor Grade)",
      year: "2024",
      certificateLink: "https://www.coursera.org/account/accomplishments/verify/0IHCQXGEJOP2",
      description: "Comprehensive study of financial markets, institutions, and instruments"
    },
    {
      institution: "University of Michigan",
      course: "Innovations in Investment Technology: Artificial Intelligence",
      score: "Completed",
      year: "2025",
      certificateLink: "https://www.coursera.org/account/accomplishments/verify/WXPJK3QOY8HC",
      description: "Advanced course on AI applications in investment technology and financial innovation"
    },
    {
      institution: "Duke University",
      course: "Behavioral Finance",
      score: "Completed",
      year: "2025",
      certificateLink: "https://www.coursera.org/account/accomplishments/verify/S4U496QTEO2V",
      description: "Understanding the psychology behind financial decision-making and market behavior"
    },
    {
      institution: "University of Pennsylvania",
      course: "Microeconomics: When Markets Fail",
      score: "Completed",
      year: "2025",
      certificateLink: "https://www.coursera.org/account/accomplishments/verify/RSR4ADBFBBN5",
      description: "Analysis of market failures and economic policy implications"
    },
    {
      institution: "World Economics Cup",
      course: "Continental Qualifier",
      score: "84/100 - Certificate of Higher Distinction",
      year: "2025",
      certificateLink: "/worldeconomicscup.jpeg",
      description: "Prestigious international economics competition with challenging 90-minute examination"
    },
    {
      institution: "Tetre College of Business",
      course: "Branding & Marketing",
      score: "Completed",
      year: "2025",
      certificateLink: "/brandingandmarketing.jpeg",
      description: "Comprehensive marketing strategies and brand development techniques"
    },
    {
      institution: "Tetre College of Business",
      course: "Business Idea Generation & Structure",
      score: "Completed",
      year: "2025",
      certificateLink: "/ideagenerationandstructure.jpeg",
      description: "Entrepreneurial thinking and systematic approach to business development"
    },
    {
      institution: "Tetre College of Business",
      course: "Financial Planning & Budgeting",
      score: "Completed",
      year: "2025",
      certificateLink: "/financialplanningandbudgeting.jpeg",
      description: "Personal and business financial management and strategic budgeting"
    },
    {
      institution: "University of Waterloo",
      course: "Achievement Certificate",
      score: "Participation",
      year: "2025",
      certificateLink: "/waterloo.jpeg",
      description: "Recognition for academic participation and achievement"
    },
    {
      institution: "3P Learning",
      course: "World Maths Assembly",
      score: "Certificate of Completion",
      year: "2024",
      certificateLink: "/worldmathsassembly.jpeg",
      description: "Global mathematics competition and learning assembly participation"
    },
    {
      institution: "Dayl's Music Institute",
      course: "SYNTONY Performance Certificate",
      score: "Certificate of Appreciation",
      year: "2025",
      certificateLink: "/daylsmusicinstitute.jpeg",
      description: "Live performance debut as a drummer in front of 200+ attendees, performing The Less I Know The Better and Sweater Weather"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 to-khaki-100 dark:from-ebony-900 dark:to-black_olive-900 py-20">
      <div className="container-custom">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-russet-600 dark:text-russet-400 hover:text-russet-700 dark:hover:text-russet-300 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-seal_brown-600 dark:text-sage-200 mb-4">
            My Educational Journey
          </h1>
          <p className="text-lg text-reseda_green-600 dark:text-sage-300 max-w-3xl mx-auto">
            Exploring my academic achievements, school activities, and university-level courses
          </p>
        </motion.div>

        {/* Dubai Scholars Private School Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-sage-50 to-khaki-50 dark:from-seal_brown-800 dark:to-raw_umber-800 rounded-2xl p-8 md:p-12 border border-sage-200 dark:border-reseda_green-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-russet-600 dark:bg-russet-500 p-3 rounded-full">
                <GraduationCap className="text-sage-50" size={24} />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-seal_brown-800 dark:text-sage-100">
                  Dubai Scholars Private School
                </h2>
                <p className="text-russet-600 dark:text-russet-400 font-medium">
                  Year 11 Student • 2013 - 2028 (15 years)
                </p>
              </div>
            </div>
            
            <p className="text-raw_umber-700 dark:text-sage-200 text-lg mb-8">
              I have been studying at Dubai Scholars Private School for the past 12 years, where I've developed 
              not only academically but also personally through various enriching experiences. The school 
              has provided me with a strong foundation in mathematics, business studies, and critical thinking, 
              while also nurturing my interests in economics and leadership.
            </p>

            <h3 className="text-xl font-semibold text-seal_brown-800 dark:text-sage-100 mb-6">
              School Activities & Achievements
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {schoolActivities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <motion.div
                    key={activity.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="bg-khaki-50 dark:bg-seal_brown-700 p-6 rounded-xl shadow-lg border border-sage-200 dark:border-reseda_green-600"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="text-russet-600 dark:text-russet-400" size={20} />
                    </div>
                    <h4 className="font-semibold text-seal_brown-800 dark:text-sage-100 mb-2">
                      {activity.title}
                    </h4>
                    <p className="text-raw_umber-600 dark:text-sage-200 text-sm">
                      {activity.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Extracurricular Excellence Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="my-20"
        >
          <div className="bg-gradient-to-br from-reseda_green-50 to-sage-100 dark:from-reseda_green-900 dark:to-seal_brown-800 rounded-2xl p-8 md:p-12 border border-reseda_green-200 dark:border-reseda_green-700">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-seal_brown-800 dark:text-sage-100 mb-4">
                Extracurricular Excellence
              </h2>
              <p className="text-lg text-raw_umber-600 dark:text-sage-200 max-w-2xl mx-auto">
                Leadership roles, founding initiatives, and active participation across diverse areas of school life
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {extracurricularActivities.map((activity, index) => (
                <motion.div
                  key={activity}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  className="bg-sage-50 dark:bg-seal_brown-700 p-4 rounded-lg border border-sage-200 dark:border-reseda_green-600 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-russet-600 dark:bg-russet-400 rounded-full flex-shrink-0"></div>
                    <span className="text-seal_brown-800 dark:text-sage-100 font-medium text-sm">
                      {activity}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* University Courses Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-seal_brown-800 dark:text-sage-100 mb-4">
              University-Level Courses
            </h2>
            <p className="text-lg text-raw_umber-600 dark:text-sage-200 max-w-2xl mx-auto">
              Completed advanced courses from prestigious universities, demonstrating my commitment 
              to continuous learning and academic excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {universityCourses.map((course, index) => (
              <motion.div
                key={course.course}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-khaki-50 dark:bg-seal_brown-700 rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 border border-sage-200 dark:border-reseda_green-600"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-russet-100 dark:bg-russet-800 p-2 rounded-lg">
                      <Award className="text-russet-600 dark:text-russet-400" size={20} />
                    </div>
                    <span className="text-sm text-raw_umber-500 dark:text-sage-300 flex items-center gap-1">
                      <Calendar size={14} />
                      {course.year}
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-seal_brown-800 dark:text-sage-100 text-lg mb-2">
                    {course.course}
                  </h3>
                  
                  <p className="text-russet-600 dark:text-russet-400 font-medium mb-2">
                    {course.institution}
                  </p>
                  
                  <div className="bg-sage-100 dark:bg-reseda_green-800 p-3 rounded-lg mb-4">
                    <span className="text-seal_brown-800 dark:text-sage-100 font-semibold">
                      Score: {course.score}
                    </span>
                  </div>
                  
                  <p className="text-raw_umber-600 dark:text-sage-200 text-sm mb-6">
                    {course.description}
                  </p>
                  
                  <a
                    href={course.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-russet-600 dark:text-russet-400 hover:text-russet-700 dark:hover:text-russet-300 font-medium text-sm transition-colors"
                  >
                    <ExternalLink size={16} />
                    View Certificate
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Honors and Awards Section */}
        {/* Summary Stats */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-russet-600 to-reseda_green-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-sage-50 mb-6">
              Educational Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-sage-50 mb-2">15</div>
                <div className="text-sage-200">Years at Dubai Scholars (2013-2028)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-sage-50 mb-2">7</div>
                <div className="text-sage-200">University Courses Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-sage-50 mb-2">10+</div>
                <div className="text-sage-200">Certificates Earned</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-sage-50 mb-2">95%</div>
                <div className="text-sage-200">Average Course Score</div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Education;
