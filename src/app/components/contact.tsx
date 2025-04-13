'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail, MapPin, Send, Github, Loader2, ArrowUpRight } from 'lucide-react';
import { FormEvent, useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800/40 via-neutral-900 to-neutral-950" />

      <motion.div
        className="absolute right-10 bottom-40 -z-10 h-[350px] w-[350px] rounded-full bg-purple-600/5 blur-[130px]"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-20 left-10 -z-10 h-[250px] w-[250px] rounded-full bg-blue-600/5 blur-[100px]"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="bg-primary-500/10 text-primary-400 ring-primary-500/20 mb-5 inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ring-1">
            Get In Touch
          </span>
          <h2 className="mb-6 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
            Contact Me
          </h2>
          <p className="mx-auto max-w-2xl text-neutral-400">
            I&apos;m always interested in new opportunities and collaborations. Feel free to reach
            out if you have any questions or just want to say hi!
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-6 md:gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="group hover:border-primary-500/30 hover:shadow-primary-900/10 rounded-xl border border-neutral-800/60 bg-gradient-to-br from-neutral-900/60 to-neutral-950/80 p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-lg md:p-8"
          >
            <h3 className="mb-6 text-2xl font-bold text-white">Let&apos;s Connect</h3>

            <div className="mb-8 space-y-6">
              <motion.a
                href="mailto:contact@iouzzine.me"
                className="group/item flex items-start"
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <div className="bg-primary-500/10 group-hover/item:bg-primary-500/20 mr-4 rounded-full p-3 transition-all duration-300">
                  <Mail className="text-primary-400 h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <span className="group-hover/item:text-primary-400 flex items-center text-neutral-400 transition-colors duration-200">
                    contact@iouzzine.me
                    <motion.span
                      initial={{ opacity: 0, x: -5 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="ml-1"
                    >
                      <ArrowUpRight size={14} />
                    </motion.span>
                  </span>
                </div>
              </motion.a>

              <motion.div
                className="flex items-start"
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <div className="bg-primary-500/10 group-hover:bg-primary-500/20 mr-4 rounded-full p-3 transition-all duration-300">
                  <MapPin className="text-primary-400 h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Location</h4>
                  <p className="text-neutral-400">Casablanca, Morocco</p>
                </div>
              </motion.div>

              <motion.a
                href="https://www.linkedin.com/in/ismailouzz/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/item flex items-start"
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <div className="bg-primary-500/10 group-hover/item:bg-primary-500/20 mr-4 rounded-full p-3 transition-all duration-300">
                  <Linkedin className="text-primary-400 h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-white">LinkedIn</h4>
                  <span className="group-hover/item:text-primary-400 flex items-center text-neutral-400 transition-colors duration-200">
                    linkedin.com/in/ismailouzz
                    <motion.span
                      initial={{ opacity: 0, x: -5 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="ml-1"
                    >
                      <ArrowUpRight size={14} />
                    </motion.span>
                  </span>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/iouzzine"
                target="_blank"
                rel="noopener noreferrer"
                className="group/item flex items-start"
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <div className="bg-primary-500/10 group-hover/item:bg-primary-500/20 mr-4 rounded-full p-3 transition-all duration-300">
                  <Github className="text-primary-400 h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-white">GitHub</h4>
                  <span className="group-hover/item:text-primary-400 flex items-center text-neutral-400 transition-colors duration-200">
                    github.com/iouzzine
                    <motion.span
                      initial={{ opacity: 0, x: -5 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="ml-1"
                    >
                      <ArrowUpRight size={14} />
                    </motion.span>
                  </span>
                </div>
              </motion.a>
            </div>

            <div className="mt-10 flex items-center justify-center">
              <div className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-400 backdrop-blur-sm">
                <div className="flex items-center">
                  <span className="relative mr-2 flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                  </span>
                  Available for new projects
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="hover:border-primary-500/30 hover:shadow-primary-900/10 rounded-xl border border-neutral-800/60 bg-gradient-to-br from-neutral-900/60 to-neutral-950/80 p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-lg md:p-8"
          >
            <h3 className="mb-6 text-2xl font-bold text-white">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-neutral-300">
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="focus:border-primary-500 focus:ring-primary-500 w-full rounded-lg border border-neutral-700/80 bg-neutral-800/50 px-4 py-3 text-white placeholder-neutral-500 backdrop-blur-sm transition-all duration-300 hover:border-neutral-600 focus:ring-1 focus:outline-none"
                    placeholder="Your name"
                  />
                  {focusedField === 'name' && (
                    <motion.span
                      className="absolute inset-0 -z-10 rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{
                        background:
                          'linear-gradient(90deg, rgba(79, 70, 229, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)',
                        filter: 'blur(4px)',
                      }}
                    />
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-300">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="focus:border-primary-500 focus:ring-primary-500 w-full rounded-lg border border-neutral-700/80 bg-neutral-800/50 px-4 py-3 text-white placeholder-neutral-500 backdrop-blur-sm transition-all duration-300 hover:border-neutral-600 focus:ring-1 focus:outline-none"
                    placeholder="you@example.com"
                  />
                  {focusedField === 'email' && (
                    <motion.span
                      className="absolute inset-0 -z-10 rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{
                        background:
                          'linear-gradient(90deg, rgba(79, 70, 229, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)',
                        filter: 'blur(4px)',
                      }}
                    />
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-neutral-300"
                >
                  Message
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={6}
                    className="focus:border-primary-500 focus:ring-primary-500 w-full rounded-lg border border-neutral-700/80 bg-neutral-800/50 px-4 py-3 text-white placeholder-neutral-500 backdrop-blur-sm transition-all duration-300 hover:border-neutral-600 focus:ring-1 focus:outline-none"
                    placeholder="Your message..."
                  ></textarea>
                  {focusedField === 'message' && (
                    <motion.span
                      className="absolute inset-0 -z-10 rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{
                        background:
                          'linear-gradient(90deg, rgba(79, 70, 229, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)',
                        filter: 'blur(4px)',
                      }}
                    />
                  )}
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="from-primary-600 hover:from-primary-500 focus:ring-primary-500 relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r to-blue-600 px-6 py-3.5 text-sm font-medium text-white transition-all hover:to-blue-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-900 focus:outline-none disabled:opacity-70"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  className="to-primary-500 absolute inset-0 bg-gradient-to-r from-blue-500 opacity-0"
                  animate={isSubmitting ? { opacity: [0, 0.5, 0] } : {}}
                  transition={{
                    repeat: isSubmitting ? Infinity : 0,
                    duration: 1.5,
                  }}
                />

                {isSubmitting ? (
                  <span className="flex items-center">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </span>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, y: 10, height: 0 }}
                  className="mt-4 rounded-lg border border-green-900/30 bg-green-900/20 px-4 py-3 text-sm text-green-400 backdrop-blur-sm"
                >
                  <div className="flex items-center">
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Message sent successfully! I&apos;ll get back to you soon.
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, y: 10, height: 0 }}
                  className="mt-4 rounded-lg border border-red-900/30 bg-red-900/20 px-4 py-3 text-sm text-red-400 backdrop-blur-sm"
                >
                  <div className="flex items-center">
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Oops! Something went wrong. Please try again later.
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
