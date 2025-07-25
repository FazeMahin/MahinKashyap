import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, Github, Linkedin, AlertCircle } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { initEmailJS, sendEmail } from '../../services/emailjs';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Initialize EmailJS when component mounts
  useEffect(() => {
    initEmailJS();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await sendEmail(formData);
      setIsSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    } catch (err) {
      setError('Failed to send message. Please try again or contact me directly via email.');
      console.error('Email send error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: undefined
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: personalInfo.social.github,
      color: 'hover:text-raw_umber-800 dark:hover:text-sage-100'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: personalInfo.social.linkedin,
      color: 'hover:text-russet-600'
    }
  ];

  return (
    <section className="section-padding bg-khaki-50 dark:bg-black_olive-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-seal_brown-800 dark:text-sage-100 mb-3 sm:mb-4 px-4">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-raw_umber-600 dark:text-sage-200 max-w-3xl mx-auto px-4">
            Let's discuss opportunities, collaborations, or just have a friendly chat about technology and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-khaki-50 dark:bg-seal_brown-800 p-6 sm:p-8 rounded-2xl shadow-lg border border-sage-200 dark:border-reseda_green-600"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-seal_brown-800 dark:text-sage-100 mb-4 sm:mb-6">
              Send Message
            </h3>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 sm:py-8"
              >
                <CheckCircle size={48} className="text-reseda_green-500 mx-auto mb-4" />
                <h4 className="text-lg sm:text-xl font-semibold text-seal_brown-800 dark:text-sage-100 mb-2">
                  Message Sent!
                </h4>
                <p className="text-raw_umber-600 dark:text-sage-200 text-sm sm:text-base">
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3 sm:p-4 flex items-center gap-3"
                  >
                    <AlertCircle size={20} className="text-red-500 flex-shrink-0" />
                    <p className="text-red-700 dark:text-red-300 text-sm">{error}</p>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-seal_brown-700 dark:text-sage-200 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-sage-100 dark:bg-reseda_green-800 border border-sage-300 dark:border-reseda_green-600 rounded-lg focus:ring-2 focus:ring-russet-500 focus:border-transparent text-seal_brown-800 dark:text-sage-100 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-seal_brown-700 dark:text-sage-200 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-sage-100 dark:bg-reseda_green-800 border border-sage-300 dark:border-reseda_green-600 rounded-lg focus:ring-2 focus:ring-russet-500 focus:border-transparent text-seal_brown-800 dark:text-sage-100 text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-seal_brown-700 dark:text-sage-200 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-sage-100 dark:bg-reseda_green-800 border border-sage-300 dark:border-reseda_green-600 rounded-lg focus:ring-2 focus:ring-russet-500 focus:border-transparent text-seal_brown-800 dark:text-sage-100 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-seal_brown-700 dark:text-sage-200 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-sage-100 dark:bg-reseda_green-800 border border-sage-300 dark:border-reseda_green-600 rounded-lg focus:ring-2 focus:ring-russet-500 focus:border-transparent text-seal_brown-800 dark:text-sage-100 text-sm sm:text-base resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-sage-50 border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-seal_brown-800 dark:text-sage-100 mb-4 sm:mb-6">
                Contact Information
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-4 sm:p-6 bg-khaki-50 dark:bg-seal_brown-700 rounded-xl border border-sage-200 dark:border-reseda_green-600"
                    >
                      <div className="bg-russet-100 dark:bg-russet-800 p-3 rounded-lg">
                        <Icon className="text-russet-600 dark:text-russet-400" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-raw_umber-600 dark:text-sage-300 mb-1">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="font-medium text-seal_brown-800 dark:text-sage-100 hover:text-russet-600 dark:hover:text-russet-400 transition-colors text-sm sm:text-base"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-medium text-seal_brown-800 dark:text-sage-100 text-sm sm:text-base">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-seal_brown-800 dark:text-sage-100 mb-3 sm:mb-4">
                Connect With Me
              </h4>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-3 px-4 py-3 bg-khaki-50 dark:bg-seal_brown-700 rounded-lg border border-sage-200 dark:border-reseda_green-600 text-raw_umber-600 dark:text-sage-300 ${social.color} transition-colors group`}
                    >
                      <Icon size={20} />
                      <span className="font-medium text-sm sm:text-base">{social.label}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
