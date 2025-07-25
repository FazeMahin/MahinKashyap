import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Globe, ExternalLink } from 'lucide-react';

const Highlights: React.FC = () => {
  const highlights = [
    {
      icon: Heart,
      title: "Breast Cancer Awareness Drive",
      description: "I ran a Breast Cancer Awareness drive alongside my peer, where we launched the *Hair for Hope* program. This initiative was aimed at bringing comfort and encouragement to breast cancer patients. We set a date to collect thoughtful items such as positive affirmation cards, handwritten letters of encouragement, pink ribbons, handmade keychains, soft blankets, cozy socks, neck pillows, herbal teas, essential oils, eye masks, stress-relief items, books, puzzle books, and adult coloring books with colored pencils. These items were then delivered to breast cancer patients at Zulekha Hospital in Dubai, providing them with emotional support and small comforts during their journey.",
      category: "Community Service",
      images: []
    },
    {
      icon: Globe,
      title: "World Economics Cup",
      description: "I am thrilled to share that I recently participated in the prestigious World Economics Cup Continental Qualifier and was awarded a Certificate of Higher Distinction. I scored a total of 84 out of 100 in a challenging 90-minute paper.",
      category: "Academic Achievement",
      images: ["/worldeconomicscup.jpeg", "/worldeconomicscupscore.jpeg"]
    },
    {
      icon: Award,
      title: "Newspaper Writer Award: Honorary Ambassador",
      description: "I am happy to have been appointed as an Honorary Ambassador, a role that empowers me to advocate for meaningful change and contribute to impactful initiatives. This opportunity marks a significant milestone in my journey of leadership and community engagement. Additionally, I am proud to represent Youth Inspire Journal in the UAE, amplifying youth voices and fostering positive change on a broader scale.",
      category: "Leadership",
      link: "https://inspireyouthjournal.org/mahin-kashyap-ambassador/",
      images: []
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
            Recent Highlights
          </h2>
          <p className="text-base sm:text-lg text-reseda_green-600 dark:text-sage-300 max-w-3xl mx-auto px-4">
            Showcasing my recent achievements, community involvement, and academic excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-ebony-800 rounded-xl shadow-lg border border-sage-200 dark:border-ebony-700 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Images */}
                {highlight.images.length > 0 && (
                  <div className="relative h-48 overflow-hidden">
                    {highlight.images.length === 1 ? (
                      <img
                        src={highlight.images[0]}
                        alt={highlight.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="grid grid-cols-2 h-full gap-1">
                        {highlight.images.map((image, imgIndex) => (
                          <img
                            key={imgIndex}
                            src={image}
                            alt={`${highlight.title} ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}

                <div className="p-6">
                  {/* Category Badge */}
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="text-russet-600 dark:text-russet-400">
                      <Icon size={20} />
                    </div>
                    <span className="text-xs font-semibold text-russet-600 dark:text-russet-400 bg-russet-100 dark:bg-russet-900/30 px-2 py-1 rounded-full">
                      {highlight.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-seal_brown-600 dark:text-sage-200 mb-3 leading-tight">
                    {highlight.title}
                  </h3>

                  {/* Description */}
                  <p className="text-reseda_green-600 dark:text-sage-300 text-sm leading-relaxed mb-4">
                    {highlight.description}
                  </p>

                  {/* Link */}
                  {highlight.link && (
                    <motion.a
                      href={highlight.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 text-russet-600 dark:text-russet-400 hover:text-russet-700 dark:hover:text-russet-300 font-medium text-sm transition-colors duration-200"
                    >
                      View Article
                      <ExternalLink size={14} />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
