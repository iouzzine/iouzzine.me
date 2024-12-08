"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ContactCard } from "./ContactCard";
import { Section } from "./Section";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 relative w-full"
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="-mx-20 py-10 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent blur-3xl -z-10 absolute"
        />
        <h2 className="text-4xl font-bold text-primary">
          Let&apos;s Work Together
        </h2>
        <p className="text-lg text-muted-foreground mt-2">
          Got a project in mind? Let&apos;s make it happen.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-6 bg-background/50 backdrop-blur-sm border-2 h-full">
            <h3 className="text-xl font-bold text-primary mb-6">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your visions.
              </p>
              <div className="space-y-3">
                <ContactCard
                  name="@ismailouzz"
                  image="/x.png"
                  url="https://x.com/ismailouzz"
                />
                <ContactCard
                  name="iouzzine"
                  image="/linkedin.png"
                  url="https://linkedin.com/in/ismailouzz"
                />
                <ContactCard
                  name="contact@iouzzine.me"
                  image="/mail.svg"
                  url="mailto:contact@iouzzine.me"
                />
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="p-6 bg-background/50 backdrop-blur-sm border-2 h-full">
            <h3 className="text-xl font-bold text-primary mb-6">
              Send Message
            </h3>
            <ContactForm />
          </Card>
        </motion.div>
      </div>
    </Section>
  );
};
