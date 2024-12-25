"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import ContactForm from "./contact-form";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 3.0 }}
      className="w-full select-none"
    >
      <div className="container mx-auto px-6 pt-52 pb-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-foreground/70 mt-4">
            Let&apos;s connect and discuss opportunities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Connect with me</h3>
              <p className="text-foreground/70 leading-relaxed">
                Feel free to reach out for collaborations, opportunities, or
                just a friendly chat about technology and development.
              </p>
            </div>

            <div className="space-y-4">
              <Link
                href="mailto:contact@iouzzine.me"
                className="flex items-center gap-4 p-4 bg-gradient-to-tr from-primary/10 via-secondary/10 to-primary/10 rounded-xl hover:scale-105 transition-transform"
              >
                <Mail className="text-primary" />
                <span>contact@iouzzine.me</span>
              </Link>

              <Link
                href="https://github.com/iouzzine"
                target="_blank"
                className="flex items-center gap-4 p-4 bg-gradient-to-tr from-primary/10 via-secondary/10 to-primary/10 rounded-xl hover:scale-105 transition-transform"
              >
                <Github className="text-primary" />
                <span>github.com/iouzzine</span>
              </Link>

              <Link
                href="https://linkedin.com/in/iouzzine"
                target="_blank"
                className="flex items-center gap-4 p-4 bg-gradient-to-tr from-primary/10 via-secondary/10 to-primary/10 rounded-xl hover:scale-105 transition-transform"
              >
                <Linkedin className="text-primary" />
                <span>linkedin.com/in/iouzzine</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
