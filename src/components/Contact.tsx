import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, CheckCircle, MessageCircle, User } from 'lucide-react';
import { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using Formspree for form submission
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 3000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <motion.section 
      id="contact" 
      className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden" 
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Android-themed background decorations */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-10 opacity-5 dark:opacity-10"
      >
        <MessageCircle className="w-16 h-16 text-blue-500" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, delay: 2 }}
        className="absolute bottom-10 left-10 opacity-5 dark:opacity-10"
      >
        <User className="w-18 h-18 text-emerald-500" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800 dark:text-white"
        >
          Get In <span className="text-blue-600">Touch</span>
        </motion.h2>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg relative overflow-hidden"
          >
            {/* Decorative element */}
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-4 right-4 opacity-10"
            >
              <MessageCircle className="w-8 h-8 text-blue-500" />
            </motion.div>

            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Send me a message</h3>
            
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors resize-none"
                      placeholder="Enter your message"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-blue-600 to-emerald-600 p-8 rounded-2xl shadow-lg text-white relative overflow-hidden"
          >
            {/* Decorative element */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-4 right-4 opacity-20"
            >
              <User className="w-8 h-8" />
            </motion.div>

            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-4"
              >
                <div className="p-3 bg-white/20 rounded-lg">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:himanshuvinchurkar111@gmail.com"
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    himanshuvinchurkar111@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-4"
              >
                <div className="p-3 bg-white/20 rounded-lg">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a
                    href="tel:+917385635301"
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    +91 7385635301
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-4"
              >
                <div className="p-3 bg-white/20 rounded-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-blue-100">Amravati, Maharashtra, India</p>
                </div>
              </motion.div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: 'https://github.com/Himanshu-Vinchurkar12', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/himanshu-vinchurkar', label: 'LinkedIn' },
                  { icon: Instagram, href: 'https://www.instagram.com/himanshu_vinchurkar_28', label: 'Instagram' }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Layout - Improved spacing and animations */}
        <div className="lg:hidden max-w-md mx-auto space-y-8">
          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden"
          >
            {/* Decorative element */}
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-4 right-4 opacity-15"
            >
              <MessageCircle className="w-8 h-8 text-blue-500" />
            </motion.div>

            <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">Send me a message</h3>
            
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex flex-col items-center justify-center py-8"
                >
                  <CheckCircle className="w-12 h-12 text-green-500 mb-3" />
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors resize-none"
                      placeholder="Enter your message"
                    />
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-lg shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Info Card - Improved spacing */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ 
              delay: 0.3,
              type: 'spring', 
              stiffness: 100, 
              damping: 15 
            }}
            className="bg-gradient-to-br from-blue-600 to-emerald-600 p-6 rounded-2xl shadow-xl text-white relative overflow-hidden"
          >
            {/* Decorative element */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-4 right-4 opacity-20"
            >
              <User className="w-8 h-8" />
            </motion.div>

            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-3"
              >
                <div className="p-2 bg-white/20 rounded-lg">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium text-sm">Email</p>
                  <a
                    href="mailto:himanshuvinchurkar111@gmail.com"
                    className="text-blue-100 hover:text-white transition-colors text-sm"
                  >
                    himanshuvinchurkar111@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-3"
              >
                <div className="p-2 bg-white/20 rounded-lg">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium text-sm">Phone</p>
                  <a
                    href="tel:+917385635301"
                    className="text-blue-100 hover:text-white transition-colors text-sm"
                  >
                    +91 7385635301
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-3"
              >
                <div className="p-2 bg-white/20 rounded-lg">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium text-sm">Location</p>
                  <p className="text-blue-100 text-sm">Amravati, Maharashtra, India</p>
                </div>
              </motion.div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/20">
              <h4 className="font-semibold mb-3 text-sm">Follow Me</h4>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: 'https://github.com/himanshu', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://linkedin.com/in/himanshu', label: 'LinkedIn' },
                  { icon: Instagram, href: 'https://instagram.com/himanshu', label: 'Instagram' }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;