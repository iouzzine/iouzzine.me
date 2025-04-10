'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail, MapPin, Send, Github } from 'lucide-react';
import { FormEvent, useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

      <div className="absolute right-10 bottom-40 -z-10 h-[350px] w-[350px] rounded-full bg-purple-600/5 blur-[130px]" />
      <div className="absolute top-20 left-10 -z-10 h-[250px] w-[250px] rounded-full bg-blue-600/5 blur-[100px]" />

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

        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="group hover:border-primary-500/30 hover:shadow-primary-900/10 rounded-xl border border-neutral-800/60 bg-gradient-to-br from-neutral-900/60 to-neutral-950/80 p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
          >
            <h3 className="mb-6 text-2xl font-bold text-white">Let&apos;s Connect</h3>

            <div className="mb-8 space-y-6">
              <motion.div
                className="flex items-start"
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <div className="bg-primary-500/10 group-hover:bg-primary-500/20 mr-4 rounded-full p-3 transition-all duration-300">
                  <Mail className="text-primary-400 h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <a
                    href="mailto:contact@iouzzine.me"
                    className="hover:text-primary-400 text-neutral-400 transition-colors"
                  >
                    contact@iouzzine.me
                  </a>
                </div>
              </motion.div>

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

              <motion.div
                className="flex items-start"
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <div className="bg-primary-500/10 group-hover:bg-primary-500/20 mr-4 rounded-full p-3 transition-all duration-300">
                  <Linkedin className="text-primary-400 h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-white">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/ismailouzz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-400 text-neutral-400 transition-colors"
                  >
                    linkedin.com/in/ismailouzz
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start"
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <div className="bg-primary-500/10 group-hover:bg-primary-500/20 mr-4 rounded-full p-3 transition-all duration-300">
                  <Github className="text-primary-400 h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-white">GitHub</h4>
                  <a
                    href="https://github.com/iouzzine"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-400 text-neutral-400 transition-colors"
                  >
                    github.com/iouzzine
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="hover:border-primary-500/30 hover:shadow-primary-900/10 rounded-xl border border-neutral-800/60 bg-gradient-to-br from-neutral-900/60 to-neutral-950/80 p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
          >
            <h3 className="mb-6 text-2xl font-bold text-white">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-neutral-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="focus:border-primary-500 focus:ring-primary-500 w-full rounded-lg border border-neutral-700/80 bg-neutral-800/50 px-4 py-3 text-white placeholder-neutral-500 backdrop-blur-sm transition-all duration-300 hover:border-neutral-600 focus:ring-1 focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="focus:border-primary-500 focus:ring-primary-500 w-full rounded-lg border border-neutral-700/80 bg-neutral-800/50 px-4 py-3 text-white placeholder-neutral-500 backdrop-blur-sm transition-all duration-300 hover:border-neutral-600 focus:ring-1 focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-neutral-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="focus:border-primary-500 focus:ring-primary-500 w-full rounded-lg border border-neutral-700/80 bg-neutral-800/50 px-4 py-3 text-white placeholder-neutral-500 backdrop-blur-sm transition-all duration-300 hover:border-neutral-600 focus:ring-1 focus:outline-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="from-primary-600 hover:from-primary-500 focus:ring-primary-500 flex w-full items-center justify-center rounded-lg bg-gradient-to-r to-blue-600 px-6 py-3.5 text-sm font-medium text-white transition-all hover:to-blue-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-900 focus:outline-none disabled:opacity-70"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
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
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 rounded-lg border border-green-900/30 bg-green-900/20 px-4 py-3 text-sm text-green-400 backdrop-blur-sm"
                >
                  Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 rounded-lg border border-red-900/30 bg-red-900/20 px-4 py-3 text-sm text-red-400 backdrop-blur-sm"
                >
                  Oops! Something went wrong. Please try again later.
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
